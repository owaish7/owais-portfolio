# Mohammad Owais — Terminal Portfolio

A single-page personal portfolio with a **TTY / terminal aesthetic**: monospace type, phosphor-green accent on near-black, a real interactive terminal, a ⌘K command palette, a live GitHub contribution heatmap, and dark/light themes.

Built with **Next.js (App Router) + React + TypeScript**. Statically prerendered — deploys to Vercel with zero configuration.

---

## Deploy to Vercel (the simple path)

### Option A — via GitHub (recommended)

1. Create a new GitHub repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Terminal portfolio"
   git branch -M main
   git remote add origin https://github.com/owaish7/owais-portfolio.git
   git push -u origin main
   ```
2. Go to **https://vercel.com/new**, import the repo.
3. Vercel auto-detects Next.js. Leave every setting on default and click **Deploy**.
4. Done — you get a `*.vercel.app` URL. Add a custom domain later under **Project → Settings → Domains** if you want.

### Option B — via Vercel CLI (no GitHub needed)

```bash
npm i -g vercel
vercel          # first run: answer the prompts, links the project
vercel --prod   # ships to production
```

No environment variables are required.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
```

> Node 18.18+ (Node 20 or 22 recommended).

---

## Project structure

```
app/
  layout.tsx        # <html>, fonts (Google Fonts link), metadata, flash-free theme init
  page.tsx          # renders <Portfolio/>
  globals.css       # design tokens (dark + light) + keyframes + utility classes
  icon.svg          # favicon
components/
  Portfolio.tsx     # client shell: theme state, ⌘K/Esc keybinds, section order
  TopBar.tsx        # sticky nav + search/resume/theme buttons
  Hero.tsx  StatStrip.tsx  About.tsx
  Terminal.tsx      # real interactive terminal (command map, styled output)
  Experience.tsx  Projects.tsx  Skills.tsx  Achievements.tsx
  GitHubSection.tsx # live contribution heatmap + live repo cards (with fallbacks)
  Contact.tsx  CommandPalette.tsx
lib/
  data.ts           # all static content (projects, skills, achievements, links…)
  types.ts          # shared TypeScript types
```

---

## What's wired up

- **Theme** — dark by default, persisted to `localStorage`, respects `prefers-color-scheme` on first load. An inline script in `<head>` sets the theme before first paint so there's no flash. Toggle in the top bar, footer, or by typing `theme` in the terminal.
- **⌘K / Ctrl+K palette** — fuzzy-jump to any section or external profile. `Esc` closes; `Enter` activates the top result.
- **Interactive terminal** — try `help`, `whoami`, `projects`, `github`, `resume`, `theme`, `clear`, `sudo`… (aliases: `exp, ls, cp, stats, cv, cls`).
- **GitHub contribution heatmap** — pulls **real** contribution data at runtime from the public proxy `github-contributions-api.jogruber.de` (no token needed). If it's ever unavailable, it falls back to a stable placeholder pattern.
- **Repo cards** — fetched live from the GitHub REST API (`/users/owaish7/repos`), non-forks, sorted by stars then recent activity, top 4. Falls back to a curated list on rate-limit/error. A note under the grid reflects live vs. fallback.

### Optional: token-authenticated contribution graph

The runtime proxy needs no setup. If you'd rather fetch contributions yourself via the GitHub GraphQL API (`contributionsCollection`), add a `GITHUB_TOKEN` in **Vercel → Settings → Environment Variables** and swap the fetch in `components/GitHubSection.tsx` for a small route handler. Not required for deployment.

---

## Things to confirm / update (edit `lib/data.ts`)

- **Résumé** Drive link — make sure sharing is set to **"Anyone with the link."**
- Descriptions for **Mockify, Hikari, Phishing Scanner, Drowning Detection** were inferred from repo names — tweak the copy if you want them exact.
- Profile handles: Codeforces `owais78`, LeetCode `owais75`, CodeChef `jack08`, GitHub `owaish7`.

All content lives in `lib/data.ts` and the section components — no CMS, no database.

---

© 2026 Mohammad Owais — built from scratch, no template.
