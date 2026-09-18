# blakebuchert.com

Static site. Plain HTML and CSS — no build step, no framework, no JavaScript.

## Files

```
index.html          Home
about.html          About
work.html           Case studies
testimonials.html   References
press.html          Press, speaking, writing
contact.html        Contact
styles.css          Site styles
_ds/modernist/      Design system tokens (colors, type, spacing)
assets/             Images
robots.txt          Crawler rules
sitemap.xml         Search engine sitemap
404.html            Not-found page
```

## Preview locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy

Upload the contents of this folder to any static host. The site is entirely
static files, so all of the following work with zero configuration.

**Netlify** — drag the folder onto app.netlify.com/drop.

**Vercel** — `npx vercel --prod` from inside this folder.

**Cloudflare Pages** — create a project, upload the folder. No build command,
output directory `/`.

**GitHub Pages** — push the contents to a repo, then Settings → Pages → deploy
from branch, folder `/ (root)`.

**Any web host** — upload via FTP/SFTP to the public directory (`public_html`,
`www`, or similar).

## Before going live

1. Set the real domain in `sitemap.xml` and `robots.txt` (both currently use
   `https://blakebuchert.com`).
2. Replace the GitHub and X links on `contact.html` with real handles, or
   remove those two rows. LinkedIn, Instagram, Facebook and the email address
   are correct.
3. Review the case studies, testimonials and press entries — these are drafted
   content, not verified facts.

## Custom domain

Point an A record at your host's IP, or a CNAME at the host's provided
hostname. Every major host above issues an HTTPS certificate automatically once
the DNS resolves.
