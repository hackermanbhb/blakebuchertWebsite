# blakebuchert.com

Static site. Plain HTML, one CSS file and one small optional script (`motion.js`, scroll reveals). No build step, no framework. Everything works with JavaScript off.

## Files

```
index.html          Home
about.html          About
work.html           Case studies (5)
testimonials.html   References
press.html          Press, speaking, writing, media kit
contact.html        Contact
404.html            Not-found page (uses root-absolute paths)
styles.css          The only stylesheet — tokens at the top
motion.js           Optional scroll-reveal script (~1 KB)
favicon.svg         Favicon
assets/             blake-headshot.jpg (site), blake-headshot.png (original),
                    og-image.png (social preview), apple-touch-icon.png
robots.txt          Crawler rules
sitemap.xml         Sitemap
```

## Preview locally

Serve the folder (needed for 404.html, which uses `/` paths):

```
cd site
python3 -m http.server 8000
```

Visit http://localhost:8000. Any missing path, e.g. http://localhost:8000/nope,
shows Python's own 404; open http://localhost:8000/404.html to check the page.
Other pages also work opened straight from disk.

## Draft markers — remove before launch

The site is in review. Three things keep unconfirmed content from going public
by accident:

1. `data-verify="…"` attributes outline unconfirmed claims in dashed magenta.
   Search the folder for `data-verify`, confirm or rewrite each item, then
   delete the attribute.
2. `.placeholder` and `.placeholder-inline` blocks mark content you need to
   supply. Search for `placeholder`. Replace with real content or delete the
   block (and its section, if it ends up empty).
3. Every page has a draft banner (`<div class="draft-banner">`) and a
   `<meta name="robots" content="noindex, nofollow">` line. Remove both once
   that page is clean. Leave `noindex` on 404.html.

## Tokens

Colors, type, spacing and radii are CSS custom properties at the top of
`styles.css` (`--bg`, `--surface`, `--text`, `--text-muted`, `--border`,
`--accent`, `--accent-2`, `--focus`, `--hover-bg`, …). Cyan (`--accent`) is
the primary accent; magenta (`--accent-2`) is used only for draft markers and
small emphasis.

## Motion

Pages fade between each other on navigation (CSS view transitions: Chrome,
Edge, Safari 18.2+). Hero copy rises in on load. Buttons and cards press on
click, and cards draw a cyan line on hover.

Scrolling: `motion.js` reveals each item when it reaches the middle of the
screen. Each `<section>` picks its style with `data-reveal`:

- `rise` (default): rises up
- `right`: slides in from the right
- `left`: bursts in from the left with a slight overshoot
- `fade`: fades in, then fades out as it leaves the top
- `zoom`: scales up out of a blur
- `flip`: tips forward from the top edge
- `drop`: drops in from above
- `wipe`: wipes in from left to right (used on every closing band)

Tune distance and speed with `--motion-distance`, `--motion-duration` and
`--motion-press` at the top of `styles.css`. With JavaScript off, or with
"reduce motion" turned on, nothing is hidden and nothing animates.

## Deploy

Not deployed. Any static host works with zero configuration: Netlify (drag
the folder onto app.netlify.com/drop), Vercel (`npx vercel --prod`),
Cloudflare Pages (no build command, output `/`), GitHub Pages (deploy from
branch, `/ (root)`), or plain SFTP. All of them serve `404.html` for missing
paths. Don't upload `README.md` if you'd rather it not be public.

`sitemap.xml`, `robots.txt`, canonical URLs and `og:image` all assume
`https://blakebuchert.com`. Change them if the domain differs.
