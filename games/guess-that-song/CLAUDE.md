# CLAUDE.md — Signal (Guess That Song)

A browser-based "guess that song" game. Connect your own Spotify account, pick a
playlist, and identify songs from a snippet that grows with each wrong guess.
Streams **full tracks** via the Spotify Web Playback SDK.

---

## Stack & architecture

- **Single file: `index.html`** — all HTML, CSS, and JS inline. No backend, no build
  step, no package install. Editing = editing that one file.
- **Runtime deps (loaded in-browser from CDN):** Spotify Web Playback SDK
  (`https://sdk.scdn.co/spotify-player.js`) and Google Fonts. Nothing is bundled.
- **Auth:** Spotify **Authorization Code + PKCE** — no client secret, runs fully
  client-side. Token exchange/refresh hit `https://accounts.spotify.com/api/token`
  directly from the browser (PKCE public-client CORS is supported).
- **Playback:** Web Playback SDK creates an in-browser device; playback is driven
  through the Web API player endpoints (`PUT /me/player/play`, etc.).

## Run & deploy

- **Local:** `python3 -m http.server 8888 --bind 127.0.0.1` → open
  `http://127.0.0.1:8888`. Do **not** open as `file://` (OAuth redirect won't work),
  and do **not** use `localhost` (Spotify rejects it — see Gotchas).
- **Prod:** GitHub Pages on custom domain **`https://prototype.gonen.me/`** (served at
  site root; CNAME + DNS already configured).

## Spotify setup (one-time, required)

1. Create an app in the Spotify Developer Dashboard; enable **Web API** + **Web
   Playback SDK**.
2. **Client ID** is entered in-app at runtime (stored in `localStorage`). No secret.
3. Register these **Redirect URIs** (must match *exactly* — scheme, host, port, trailing slash):
   - `https://prototype.gonen.me/` (production)
   - `http://127.0.0.1:8888/` (local testing)
4. **Every player needs Spotify Premium** — the Web Playback SDK only streams for
   Premium accounts.
5. App stays in **Development Mode**: owner must be Premium; max **5 users**, each
   added by email under *Settings → User Management*. Extended quota now requires a
   registered business with 250k MAU, so a public launch isn't realistic.

**Scopes:**
`streaming user-read-email user-read-private playlist-read-private playlist-read-collaborative user-library-read user-modify-playback-state user-read-playback-state`

## Policy caveat (important context)

Spotify's Developer Policy technically **prohibits games/trivia** and requires cover
art + metadata to be shown during streaming. This is a **private, dev-mode hobby
build** — acceptable in practice, but it would not pass Spotify review for public
distribution. The reveal-on-resolution behavior below is a partial nod to the
metadata requirement. Don't invest in "scaling" or "publishing" this without a
different content source.

## Gameplay spec

- **Guessing:** type to guess; fuzzy match on the **song title only** (artist does
  not count).
- **Snippet grows per guess:** `1 / 2 / 4 / 7 / 11 / 16` seconds — 6 attempts total.
- **Scoring:** solving at attempt 1→6 earns `6 / 5 / 4 / 3 / 2 / 1` points; a miss = 0.
- **Reveal:** on a correct guess **or** once all guesses are used, playback pauses and
  the app shows **cover art + title + artist + album**.
- **Sources:** the user's playlists, a pasted playlist link/URI, or Liked Songs.
- **Round length:** 5 / 10 / 15 songs (default 10).

## Code map (all inside `index.html`)

- **Screens (SPA):** `goto(name)` toggles between `setup → connect → picker →
  loading → game → results`.
- **Storage:** `S` = try/catch-guarded `localStorage` wrapper. Keys: `cid`,
  `access_token`, `refresh_token`, `expires_at`, `verifier`. (Guarded because some
  sandboxes block storage; hosted deployment has it and needs it.)
- **Auth/PKCE:** `randStr()`, `sha256b64()`, `login()`, `exchangeCode()`,
  `getToken()` (auto-refresh with 15s expiry buffer), `api()` (Web API fetch wrapper;
  handles 204/401/errors).
- **Playback:** `window.onSpotifyWebPlaybackSDKReady` hook is set *before* the SDK
  `<script>`; `initPlayer()` builds `Spotify.Player` and listens for `ready`
  (captures `device_id`), `account_error` (= not Premium), etc. `ensureDevice()`
  waits for the device. `playFrom0(uri, ms)` starts at position 0 and pauses after
  `ms` via `setTimeout`. Playhead/timeline animated via `requestAnimationFrame`.
- **Matching:** `norm()` (lowercase, strip diacritics, drop `(…)`/`[…]`, `feat.`,
  remaster/live tags, punctuation) → `lev()` (Levenshtein) → `isMatch()` accepts on
  exact / containment / distance ≤ 20% of target length. **Title only.**
- **Round state:** `{ tracks, i, att, score, done }`.

## Design language

"Late-night radio booth": deep indigo background, amber **ON AIR** accent, cream
text. Fonts — Space Grotesk (display), Inter (body), Space Mono (timecode). Signature
elements: a growing snippet timeline with a playhead and attempt dots. Album art is
hidden during guessing and revealed only at round resolution.

## Known TODO / current file state

- The latest `index.html` already has **title-only matching** and the **album-metadata
  reveal**.
- **Not yet applied:** the production redirect-URI pin. The file currently uses:
  ```js
  const REDIRECT_URI = location.origin + location.pathname;
  ```
  This works at the domain root but not if the page is opened as `/index.html`.
  Recommended replacement:
  ```js
  const REDIRECT_URI = (location.hostname === 'prototype.gonen.me')
    ? 'https://prototype.gonen.me/'
    : location.origin + '/';
  ```

## Gotchas

- **`localhost` is rejected** by Spotify (removed 27 Nov 2025) — use `127.0.0.1`.
- **`localStorage` is required** — the PKCE `verifier` and tokens must survive the
  auth redirect. The app won't complete login in a storage-blocked sandbox.
- **Redirect URI must match the registered value exactly** (including trailing slash).
- **`account_error`** from the SDK means the logged-in account isn't Premium.
- Track fetches use **`market=from_token`** so `is_playable`/relinking is correct.
- **Playlist tracks endpoint is `/playlists/{id}/items`, not `/playlists/{id}/tracks`.**
  Spotify hard-403s the old `/tracks` path for every playlist regardless of ownership,
  scope, or `market` value (confirmed by diffing against `/me/top/tracks`, which 403s
  with a distinct `"Insufficient client scope"` message — the `/tracks` 403 body is
  just `{"error":{"status":403,"message":"Forbidden"}}`, i.e. not a scope problem).
  The playlist object's own `items.href` field points at `/items`, confirming it's the
  intended replacement. **Response shape changed too:** entries are
  `{"added_at":…, "item": {...track...}}` instead of `{"added_at":…, "track": {...}}`.
  `/me/tracks` (Liked Songs) is unaffected and still uses `"track"`. `fetchTracks()`
  handles both via `it.track||it.item||it`.
