# BigCountry's RF Lab — Version 4

A static, GitHub Pages-ready engineering portfolio. No build tools or dependencies.

## Publish Version 4 to your existing repository

Keep the repository named **Redline-RF-Lab** so the URL stays **https://shin3801.github.io/Redline-RF-Lab/**.

**Important:** Upload the **contents** of this folder to the repository root, not the enclosing folder. Replace `index.html`, `app.js`, `style.css`, `passes.js`, and `README.md`, add `field-notes.js`, and upload the new folder `assets/passes/2026-10-18-meteor-m2-3-2133/`. Keep the existing M2-4 images in place. Commit to `main`. GitHub Pages republishes automatically.

The downloaded ZIP contains the complete site, including both image collections, so you can also replace the site files and assets from this package. **GitHub's web upload interface may be inconvenient for folders; use Add file → Upload files, dragging the files/folders from your extracted folder, or GitHub Desktop.**

## Add another successful satellite pass

1. Create `assets/passes/YYYY-MM-DD-satellite-HHMM/`.
2. Put the decoded PNG files inside it.
3. Open `passes.js` and add an object to `window.BIGCOUNTRY_PASSES`. Copy an existing entry and edit its `id`, satellite, date, time, equipment details, `cover`, and `images` list. The `id` **must match** the folder name.
4. Commit the images and `passes.js`. The new collection automatically appears in Imagery and the homepage.

Example new image entry:

```js
{"file": "MSU-MR-4.png", "title": "Channel 4", "category": "Channels"}
```

## Add another Field Note

1. Open `field-notes.js` on GitHub or locally.
2. Copy the existing `{ ... }` entry and add a comma between entries.
3. Give the new note a unique `id` (e.g. `2026-10-19-m2-4-evening`), `title`, `date`, `time`, `status`, and fill in `summary`, `observations`, `hypotheses`, `nextSteps` and optional equipment details.
4. Commit `field-notes.js`. The new note appears in **Field Notes** without changing any HTML or CSS.

Describe hypotheses as hypotheses, not established facts.

## Customize branding

- `index.html`: site title, navigation, header and footer brand.
- `app.js`: homepage headline, About text, imagery and Field Notes presentation.
- `style.css`: styling and responsive layout.
- `passes.js`: satellite imagery collections.
- `field-notes.js`: experiment and unsuccessful reception logs.

The GitHub repository name and Pages URL are intentionally unchanged.
