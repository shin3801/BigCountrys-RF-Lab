# Redline RF Lab — Version 3

A self-contained, static website for GitHub Pages. No build system, npm, or backend required.

## Deploy to GitHub Pages

1. Unzip the archive. Upload **the contents of this folder** (including `index.html`, `style.css`, `app.js`, `passes.js`, and `assets/`) to the root of your existing GitHub Pages repository. Commit the changes.
2. In repository Settings → Pages, ensure deployment is from your main branch, root (`/`), or your existing Pages workflow.
3. Open your GitHub Pages URL. Click **Imagery** to browse your first capture.

**IMPORTANT:** If your existing V2 site contains custom pages/content, back it up first. Replacing the root `index.html` replaces the existing homepage. You can instead merge this version's code into your existing site.

## Add a new satellite pass — no site redesign required

1. Make a folder in `assets/passes/`, e.g. `2026-10-21-meteor-m2-4-1543`. Use a unique folder name.
2. Copy the PNG images you want to publish into that folder. Do not upload multi-gigabyte `.cs8` files to the site.
3. Open `passes.js` in any text editor. Copy the existing object between the `{ ... }` braces, paste it as a new object in the `window.REDLINE_PASSES` array, separated by a comma.
4. Update `id` to **exactly match** the folder name; change `satellite`, `date` (`YYYY-MM-DD`), `time` (`HH:MM`), `timezone`, `frequency`, `modulation`, `receiver`, `antenna`, `location`, `elevation`, `notes`.
5. Change `cover` to a PNG filename from the folder and edit the `images` array to list your selected files with `file`, `title`, and `category`. Keep all filenames exactly matched, including capitalization.
6. Commit and push the new folder and edited `passes.js`. GitHub Pages publishes the updated collection automatically.

No HTML editing needed for new passes. Images are kept in your repo, not loaded from third-party image hosts.

## Existing pass

October 18, 2026, 3:09 PM PDT — METEOR-M2-4. Includes 10 real images supplied from your SatDump capture. Original image dimensions and pixel data are preserved.

## Files

- `index.html`: site shell and navigation
- `style.css`: visual styling
- `app.js`: site routing, pass gallery, filtering, full-size viewer
- `passes.js`: **only file to edit** when adding pass metadata
- `assets/passes/<pass-id>/*.png`: imagery files

Note: Date/time/peak elevation are based on your supplied pass context; verify details against your tracking/recording logs before public posting. The antenna gain setting is omitted until verified.
