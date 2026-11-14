# Volcano Adventure

A letter-learning "the floor is lava" game for kids aged 5 to 7. Climb the
volcano one rock at a time by pressing the letter the guide calls. Between
climbs: run, row and a slug fight. It ends in space, freezing a lava ball.

No timer, no lives, no game over. A wrong key only gets a friendly hint.

Two versions, same game:

| Version | Start with | Looks like |
|---|---|---|
| **Graphics** | `volcano` | Full-screen pictures, glowing lava, confetti. Needs pygame 2 |
| **Terminal** | `volcano --text` | Drawn with text characters. Needs only Python |

## Install (one command)

```sh
curl -fsSL https://gonensh.github.io/games/volcano-terminal/install.sh | sh
```

This:
- puts the game in `~/.local/share/volcano` and adds a `volcano` command
- adds **Volcano Adventure** to the desktop menu (under Games)
- on Raspberry Pi OS / Debian, installs `python3-pygame` (graphics),
  and `alsa-utils` (sound for the terminal version),
  asking for your password if needed

Put `VOLCANO_NO_DEPS=1 ` before `sh` to skip installing packages.
Run the same command again to update.

To uninstall:
`rm -rf ~/.local/share/volcano ~/.local/bin/volcano ~/.local/share/applications/volcano-adventure.desktop`

## Controls

| Where | Keys (or tap/click) |
|---|---|
| Title / win screen | Enter or Space (or click the big button) |
| Climb | the letter on the glowing rock (or click the rock / key) |
| Run | ← / A, → / D, ↑ / W / Space, ↓ / S |
| Row | Space, Enter, ↑ or → |
| Slug fight | Space (throw), then A, then B |
| Space | A |
| Any time | `1` music on/off · `2` voice on/off · `0` restart · `Esc` quit (asks first) |

## Graphics version options

```sh
volcano --window        # in a window instead of full screen
volcano --res 540       # lighter drawing for a Pi Zero 2 / Pi 3 (default 720)
volcano --res 1080      # sharpest, for a Pi 4 / Pi 5 on a big TV
volcano --no-music --no-voice
```

It runs on the Raspberry Pi desktop, and also straight from the text console
of Raspberry Pi OS Lite (no desktop needed). If there's no screen it can use
(for example over SSH), `volcano` starts the terminal version instead.

## Terminal version options

`volcano --text` takes `--ascii`, `--no-music`, `--no-voice`, `--seed N`,
`--autoplay`. The window must be at least 80×24. If the locale isn't UTF-8,
it switches to `--ascii` by itself.

## Sound and voice

The guide's voice is pre-recorded with **Kokoro**, a natural-sounding neural
voice (Apache-2.0), and shipped as 215 short clips in `voice/`. The game just
plays them back, so it sounds the same on a Pi Zero 2 W as on a fast PC and
uses almost no CPU. If a clip is ever missing, it falls back to `espeak-ng`,
`espeak` or `spd-say` when one is installed.

The graphics version plays music, effects and voice itself. The terminal
version uses `pw-play`, `paplay` or `aplay` (`sudo apt install alsa-utils`);
without one of them it's silent, with text callouts.

**Pi tip (terminal version):** on HDMI audio with plain ALSA, only one sound
can play at a time, so the voice may cut out while music plays. Install
PipeWire (`sudo apt install pipewire-audio`) or press `1` to turn music off.

To re-record the voice (another Kokoro voice, speed, or new lines), see
`tools/make_voice.py`.

## Running without installing

```sh
python3 volcano_gfx.py      # graphics
python3 volcano.py          # terminal
```

Needs Python 3.7+. The graphics version also needs pygame 2
(`sudo apt install python3-pygame`, or `pip install pygame`).

## Tests

```sh
python3 -m unittest test_game
python3 volcano.py --autoplay --seed 1; echo $?        # prints 0
python3 volcano_gfx.py --autoplay --window; echo $?    # prints 0
```

## Files

| File | What it does |
|---|---|
| `game.py` | Game rules and state (shared by both versions; no drawing, no sound) |
| `volcano_gfx.py` | Graphics version: window, input, pygame sound |
| `gfx.py` | Graphics version drawing |
| `assets/` | Pictures (made by `tools/make_assets.py`) and the Fredoka One font (SIL OFL) |
| `volcano.py` | Terminal version: flags, curses, main loop |
| `render.py`, `sprites.py` | Terminal version drawing |
| `audio.py` | Sound synthesis, music, effects, speech |
| `voice.py`, `voice/` | Pre-recorded guide voice (Kokoro, af_heart) and how callouts map to clips |
| `test_game.py` | Unit tests for `game.py` |
| `tools/make_assets.py` | Rebuilds `assets/*.png` from SVG (needs `rsvg-convert` + Pillow) |
| `tools/make_voice.py` | Re-records `voice/*.wav` with Kokoro (needs `kokoro-onnx`, run on a PC) |
