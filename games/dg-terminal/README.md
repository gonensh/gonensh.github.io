# Danny Go! Jump Adventure

A side-scrolling platformer: run, jump, stomp on blobs, grab stars and
power-ups across four worlds (Sunny Hills, Cloud Hopper, Volcano Rumble,
Frozen Peak) and beat the Ice King with snowballs. The Linux edition of
the browser game at gonensh.github.io/games/dg.html, with the same levels,
physics, music and pictures.

Two versions, same game:

| Version | Start with | Looks like |
|---|---|---|
| **Graphics** | `dannygo` | The web game's pictures, full screen. Needs pygame 2 |
| **Terminal** | `dannygo --text` | Drawn with text characters. Needs only Python |

## Install (one command)

```sh
curl -fsSL https://gonensh.github.io/games/dg-terminal/install.sh | sh
```

This:
- puts the game in `~/.local/share/dannygo` and adds a `dannygo` command
- adds **Danny Go! Jump Adventure** to the desktop menu (under Games)
- on Raspberry Pi OS / Debian, installs `python3-pygame` (graphics) and
  `alsa-utils` (sound for the terminal version), asking for your password
  if needed

Put `DANNYGO_NO_DEPS=1 ` before `sh` to skip installing packages.
Run the same command again to update.

To uninstall:
`rm -rf ~/.local/share/dannygo ~/.local/bin/dannygo ~/.local/share/applications/dannygo-jump-adventure.desktop`

## Controls

| Do | Keys | Gamepad |
|---|---|---|
| Move | ← → or A D | stick or d-pad |
| Jump (hold for higher) | ↑, Space, W or Z | A / B |
| Run fast | hold Ctrl or Shift | shoulder buttons |
| Throw a fireball (with the fire hat) or a snowball (Ice King level) | X | X / Y |
| Start / continue | any key | any button |
| Music on/off | M | |
| Quit (asks first) | Esc | |

Bounce on enemies to beat them, hit **?** blocks for stars and the pink
**★** blocks to grow big. Checkpoint flags save your place.

**Power-ups** (they make Danny big too):
- **Wings** (blue block): press jump in the air to flap and fly; hold it to
  glide down slowly.
- **Fire hat** (orange block): a firefighter's helmet. Press X to throw
  fireballs that bounce along the ground. They beat any enemy, and hurt the
  Ice King too.

Touching an enemy is a **power punch**: Danny is knocked flying and can't
steer for a moment. He loses his power-up (or shrinks, if he has none).
**Frozen Peak** is slippery, so start slowing down early.

## Graphics version options

```sh
dannygo --window        # in a window instead of full screen
dannygo --res 540       # lighter drawing (the default on a Pi Zero 2 / Pi 3)
dannygo --res 1080      # sharpest, for a fast PC or Pi 5 on a big TV
dannygo --fps 60        # smoother, if the computer keeps up (default 30)
dannygo --level 3       # start on level 3
dannygo --no-music
```

It runs on the Raspberry Pi desktop, and also straight from the text console
of Raspberry Pi OS Lite (no desktop needed). The game itself always runs at
60 steps a second, so it plays at the right speed even when fewer frames
are drawn. If there's no screen it can use (for example over SSH),
`dannygo` starts the terminal version instead.

## Terminal version

`dannygo --text` takes `--ascii`, `--no-music`, `--level N` and `--autoplay`.
The window must be at least 80×24; from 27 lines up you see the whole level
height.

Most terminals only tell a program when a key is *pressed*, not when it's
let go. So in the terminal version a tap walks a short way and holding a key
keeps walking (the keyboard's auto-repeat does that), jumps are always full
height (tap again quickly to flap the wings), and Shift + ← → runs. Press ↓ to stop at once. In terminals that
support the kitty keyboard protocol (kitty, foot, WezTerm, Ghostty, recent
Alacritty) the game notices and the keys work exactly like the graphics
version, Ctrl included.

## Sound

Music and effects are the web game's chiptunes, made in code when the game
starts: there are no sound files. The graphics version plays them itself.
The terminal version uses `pw-play`, `paplay` or `aplay`
(`sudo apt install alsa-utils`); without one of them it's silent.

## Running without installing

```sh
python3 dannygo_gfx.py      # graphics
python3 dannygo.py          # terminal
```

Needs Python 3.7+. The graphics version also needs pygame 2
(`sudo apt install python3-pygame`, or `pip install pygame`).

## Tests

```sh
python3 -m unittest test_game
python3 dannygo_gfx.py --window --autoplay --seconds 20; echo $?   # prints 0
```

The level tests check this port against the browser game's own code: fed the
same key presses for 3000 steps, Danny ends up in exactly the same spot.

## Files

| File | What it does |
|---|---|
| `game.py` | Levels, physics and rules (shared by both versions; no drawing, no sound) |
| `dannygo_gfx.py` | Graphics version: window, keyboard, gamepad, pygame sound |
| `gfx.py` | Graphics version drawing |
| `assets/` | Pictures (made by `tools/make_assets.py`) and the Fredoka One font (SIL OFL) |
| `dannygo.py` | Terminal version: flags, curses, main loop |
| `render.py` | Terminal version drawing |
| `keys.py` | Terminal keyboard: held keys, kitty protocol |
| `audio.py` | Music and sound effects |
| `test_game.py` | Unit tests |
| `tools/make_assets.py` | Redraws `assets/` with the browser game's own drawing code (needs Chrome + Pillow) |
