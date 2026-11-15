#!/bin/sh
# Danny Go! Jump Adventure installer (graphics + terminal editions).
#   curl -fsSL https://gonensh.github.io/games/dg-terminal/install.sh | sh
# Options (environment variables):
#   DANNYGO_NO_DEPS=1    don't install anything with apt/pip (pygame, sound)
#   DANNYGO_URL=...      download the game from somewhere else
set -e

URL="${DANNYGO_URL:-https://gonensh.github.io/games/dg-terminal/dannygo.tar.gz}"
DEST="$HOME/.local/share/dannygo"
BIN="$HOME/.local/bin"
APPS="$HOME/.local/share/applications"

say() { printf '\033[1;33m==>\033[0m %s\n' "$*"; }

if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 is needed. Install it with: sudo apt install python3" >&2
  exit 1
fi

say "Downloading Danny Go! Jump Adventure..."
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
if command -v curl >/dev/null 2>&1; then
  curl -fsSL "$URL" -o "$tmp/dannygo.tar.gz"
else
  wget -qO "$tmp/dannygo.tar.gz" "$URL"
fi
tar -xzf "$tmp/dannygo.tar.gz" -C "$tmp"

say "Installing to $DEST"
rm -rf "$DEST"
mkdir -p "$DEST" "$BIN"
cp -R "$tmp/dannygo/." "$DEST/"
chmod +x "$DEST/dannygo.py" "$DEST/dannygo_gfx.py"

# `dannygo`        -> graphics version (falls back to the text version)
# `dannygo --text` -> terminal version
cat > "$BIN/dannygo" <<EOF
#!/bin/sh
D="$DEST"
export PYGAME_HIDE_SUPPORT_PROMPT=1
if [ "\$1" = "--text" ]; then shift; exec python3 "\$D/dannygo.py" "\$@"; fi
if python3 -c "import pygame, sys; sys.exit(pygame.version.vernum[0] < 2)" 2>/dev/null; then
  python3 "\$D/dannygo_gfx.py" "\$@"; rc=\$?
  [ "\$rc" -ne 3 ] && exit "\$rc"
  echo "Starting the text version instead..." >&2
else
  echo "pygame 2 isn't installed, so starting the text version (see \$D/README.md)." >&2
fi
exec python3 "\$D/dannygo.py"
EOF
chmod +x "$BIN/dannygo"

# Desktop menu entry (Raspberry Pi OS desktop: Menu > Games)
mkdir -p "$APPS"
cat > "$APPS/dannygo-jump-adventure.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=Danny Go! Jump Adventure
Comment=Run, jump and stomp through four worlds
Exec=$BIN/dannygo
Icon=$DEST/assets/icon.png
Terminal=false
Categories=Game;ArcadeGame;
EOF

if [ "${DANNYGO_NO_DEPS:-0}" != "1" ]; then
  if [ "$(id -u)" = "0" ]; then SUDO=""; else SUDO="sudo"; fi
  if command -v apt-get >/dev/null 2>&1; then
    need=""
    python3 -c "import pygame" >/dev/null 2>&1 || need="$need python3-pygame"
    command -v pw-play >/dev/null 2>&1 || command -v paplay >/dev/null 2>&1 || \
      command -v aplay >/dev/null 2>&1 || need="$need alsa-utils"
    if [ -n "$need" ]; then
      say "Installing:$need (may ask for your password)"
      $SUDO apt-get install -y $need </dev/tty || \
        echo "Couldn't install$need - the game still works, with fewer extras."
    fi
  fi
  # Older systems ship pygame 1.x; the graphics version needs 2.x.
  if ! python3 -c "import pygame, sys; sys.exit(pygame.version.vernum[0] < 2)" >/dev/null 2>&1; then
    say "Installing pygame 2 with pip..."
    python3 -m pip install --user "pygame>=2" >/dev/null 2>&1 || \
      python3 -m pip install --user --break-system-packages "pygame>=2" >/dev/null 2>&1 || \
      echo "Couldn't install pygame 2: 'dannygo' will use the text version."
  fi
fi

say "Done! Start the game with:  dannygo"
case ":$PATH:" in
  *":$BIN:"*) ;;
  *) echo "    (first time: open a new terminal, or run  $BIN/dannygo )" ;;
esac
echo "    It's also in the desktop menu under Games."
echo "    Text version: dannygo --text     Instructions: $DEST/README.md"
