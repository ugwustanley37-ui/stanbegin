# Portfolio websites

Three static portfolio sites. Each folder is self-contained: open its `index.html`, or host the folder on GitHub Pages, Netlify or Vercel.

| Folder | Site | What it shows |
|---|---|---|
| [`charles-main/`](charles-main/) | Charles Chukwuma – main portfolio | Websites, web apps, automations and AI agents, with client reviews |
| [`charles-chiro/`](charles-chiro/) | Charles Chukwuma – chiropractic & wellness portfolio | 24 websites for chiropractors and wellness practices, grouped by Family, Sports, Specialty technique, Multidisciplinary and Wellness coaching |
| [`stanley/`](stanley/) | Stanley Ugwu – portfolio | Stanley's projects and case studies |

## Editing

- **charles-main** and **charles-chiro**: page layout and styles are in `index.html`, behaviour in `app.js`, and the project lists in `data.js`. To add a project, add an entry to `data.js` and put its screenshots in `media/web/` (homepage `SLUG-hero.webp`, full page `SLUG-full.webp`, preview video `SLUG.mp4`, gallery shots in `media/web/g/`).
- **stanley**: a single `index.html` with images in `img/`.

The sites load GSAP, ScrollTrigger and Lenis from public CDNs and fonts from Google Fonts, so they need an internet connection to animate.

## Hosting on GitHub Pages

Settings → Pages → Deploy from a branch → `main` / root. The sites will then be at:

- `https://<user>.github.io/stanbegin/charles-main/`
- `https://<user>.github.io/stanbegin/charles-chiro/`
- `https://<user>.github.io/stanbegin/stanley/`
