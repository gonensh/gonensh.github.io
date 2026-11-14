#!/bin/sh
# Volcano Adventure (terminal edition) installer.
#   curl -fsSL https://gonensh.github.io/games/volcano-terminal/install.sh | sh
# Options (environment variables):
#   VOLCANO_NO_AUDIO=1   don't install sound/speech packages
#   VOLCANO_URL=...      download the game from somewhere else
set -e

URL="${VOLCANO_URL:-https://gonensh.github.io/games/volcano-terminal/volcano.tar.gz}"
DEST="$HOME/.local/share/volcano"
BIN="$HOME/.local/bin"

say() { printf '\033[1;33m==>\033[0m %s\n' "$*"; }

if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 is needed. Install it with: sudo apt install python3" >&2
  exit 1
fi

say "Downloading Volcano Adventure..."
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
if command -v curl >/dev/null 2>&1; then
  curl -fsSL "$URL" -o "$tmp/volcano.tar.gz"
else
  wget -qO "$tmp/volcano.tar.gz" "$URL"
fi
tar -xzf "$tmp/volcano.tar.gz" -C "$tmp"

say "Installing to $DEST"
rm -rf "$DEST"
mkdir -p "$DEST" "$BIN"
cp -R "$tmp/volcano/." "$DEST/"
chmod +x "$DEST/volcano.py"

cat > "$BIN/volcano" <<EOF
#!/bin/sh
exec python3 "$DEST/volcano.py" "\$@"
EOF
chmod +x "$BIN/volcano"

# Sound and speech are optional; offer them on Debian/Raspberry Pi OS.
if [ "${VOLCANO_NO_AUDIO:-0}" != "1" ] && command -v apt-get >/dev/null 2>&1; then
  need=""
  command -v pw-play >/dev/null 2>&1 || command -v paplay >/dev/null 2>&1 || \
    command -v aplay >/dev/null 2>&1 || need="$need alsa-utils"
  command -v espeak-ng >/dev/null 2>&1 || command -v espeak >/dev/null 2>&1 || \
    need="$need espeak-ng"
  if [ -n "$need" ]; then
    say "Installing sound and speech:$need (may ask for your password)"
    if [ "$(id -u)" = "0" ]; then SUDO=""; else SUDO="sudo"; fi
    $SUDO apt-get install -y $need </dev/tty || \
      echo "Couldn't install$need. The game still works, just without sound/speech."
  fi
fi

say "Done! Start the game with:  volcano"
case ":$PATH:" in
  *":$BIN:"*) ;;
  *) echo "    (first time: open a new terminal, or run  $BIN/volcano )" ;;
esac
echo "    Keys: letters to jump, 1 music, 2 voice, 0 restart, Esc quit."
echo "    Instructions: $DEST/README.md"
