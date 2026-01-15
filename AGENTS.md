# Repository Guidelines

## Project Structure & Module Organization
- `content/`: Markdown pages, blog posts, and data-driven content (primary source of site copy).
- `layouts/`: Hugo templates and partials that render pages.
- `static/`: Static assets copied verbatim to the build (CSS, JS, images).
- `assets/`: Hugo Pipes assets (SCSS/JS/images) that may be processed and fingerprinted.
- `data/`: YAML/JSON data used by templates.
- `config.yaml`: Hugo site configuration.
- `build/`: Node-based helper that generates content from data and runs Hugo.
- `public/`: Build output (generated; do not hand-edit).
- `static/css/main.css`: Almost the whole site's CSS is contained this file. Put all classes here. 

## Build, Test, and Development Commands
- `hugo server`: Run the local Hugo dev server with live reload.
- `hugo --gc --minify`: Build the site with garbage collection and minification.
- `cd build && npm install`: Install helper dependencies for data-driven builds.
- `cd build && node hugo.js server`: Run the build helper plus `hugo server`.
- `cd build && node hugo.js generate`: Generate content from data without building.
- `cd build && node hugo.js clean`: Remove generated content if a run exits early.

## Coding Style & Naming Conventions
- Indentation: 2 spaces in CSS/JS/HTML templates.
- Prefer existing naming patterns: kebab-case for files and slugs (e.g., `content/blog/my-post.md`).
- Keep JS simple and vanilla unless a template already uses a library.
- For Hugo templates, keep logic in partials and keep page templates thin.

## Testing Guidelines
- No automated test suite is configured in this repo.
- Validate changes by running `hugo server` and checking relevant pages.
- For build output, verify generated files under `public/` only after a full build.

## Commit & Pull Request Guidelines
- Commit messages are short, plain-English, and imperative (e.g., `Update footer.html`).
- If a change is visual, include before/after screenshots in the PR.
- Link related issues or tickets where applicable, and describe any build steps needed.

## Security & Configuration Tips
- Do not edit `public/` directly; it is generated.
- Netlify builds run Hugo plus the helper in `build/` (see `netlify.toml`).
