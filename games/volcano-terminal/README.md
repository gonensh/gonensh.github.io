# Volcano Adventure (terminal edition)

A letter-learning "the floor is lava" game for kids aged 5 to 7. Climb the
volcano one rock at a time by pressing the letter the guide calls. Between
climbs: run, row and a slug fight. It ends in space, freezing a lava ball.

No timer, no lives, no game over. A wrong key only gets a friendly hint.

## Install (one command)

```sh
curl -fsSL https://gonensh.github.io/games/volcano-terminal/install.sh | sh
```

This puts the game in `~/.local/share/volcano`, adds a `volcano` command, and
(on Raspberry Pi OS / Debian) installs `alsa-utils` and `espeak-ng` for sound
and speech, asking for your password if needed. Add `VOLCANO_NO_AUDIO=1 `
before `sh` to skip that. Run the same command again to update.

To uninstall: `rm -rf ~/.local/share/volcano ~/.local/bin/volcano`

## Run

```sh
volcano                     # after installing
python3 volcano.py          # or straight from the unzipped folder
```

Needs Python 3.7+ (any Raspberry Pi OS from Buster on) and nothing else. The terminal must be at least 80×24.
Works in a desktop terminal, over SSH, and on the Raspberry Pi text console.

## Controls

| Where | Keys |
|---|---|
| Title / win screen | Enter or Space |
| Climb | the letter on the glowing rock |
| Run | ← / A, → / D, ↑ / W / Space, ↓ / S |
| Row | Space, Enter, ↑ or → |
| Slug fight | Space (throw), then A, then B |
| Space | A |
| Any time | `1` music on/off · `2` voice on/off · `0` restart · `Esc` quit (asks first) · Ctrl-C quits at once |

## Flags

| Flag | Effect |
|---|---|
| `--ascii` | Plain ASCII only (no Unicode at all) |
| `--no-music` | Start with music and sound effects off |
| `--no-voice` | Start with speech off |
| `--seed N` | Fixed random seed |
| `--autoplay` | Game plays itself to the win screen, then exits with code 0 |

If the terminal's locale isn't UTF-8 (common on a fresh Pi console), the game
switches to `--ascii` by itself.

## Sound and speech (optional)

Without these the game runs silently with text callouts.

```sh
sudo apt install alsa-utils espeak-ng     # aplay + speech
```

The game uses the first player it finds: `pw-play` (PipeWire, Raspberry Pi OS
desktop), `paplay` (PulseAudio), or `aplay` (ALSA, Raspberry Pi OS Lite).
Speech uses `espeak-ng`, `espeak` or `spd-say`.

**Pi tip:** music and speech play at the same time. The Pi's headphone jack
handles that fine. On HDMI audio with plain ALSA (no PipeWire/PulseAudio),
only one sound can play at a time, so speech may cut out while music plays.
Fix it by installing PipeWire (`sudo apt install pipewire-audio`) or by
turning music off with `1`.

## Tests

```sh
python3 -m unittest test_game
python3 volcano.py --autoplay --seed 1; echo $?    # smoke test, prints 0
```

## Files

| File | What it does |
|---|---|
| `volcano.py` | Entry point: flags, curses setup, main loop, autoplay |
| `game.py` | Pure game logic and state machine (no curses, no audio) |
| `render.py` | All drawing |
| `audio.py` | Sound synthesis, music loop, effects, speech |
| `sprites.py` | Sprite art, Unicode and ASCII |
| `test_game.py` | Unit tests for `game.py` |
