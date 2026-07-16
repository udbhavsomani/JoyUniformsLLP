# Joy Uniforms LLP — Frontend Website

A responsive, single-page, multi-view B2B website built with plain HTML, CSS and JavaScript. No backend or build step is required.

## Files

- `index.html` — main website
- `styles.css` — responsive design and brand styling
- `script.js` — mobile navigation, product detail drawer, enquiry form, animations
- `privacy.html` and `terms.html` — practical draft policy pages; obtain legal review before publication
- `assets/images/` — optimized local logo and website imagery
- `robots.txt`, `sitemap.xml`, `site.webmanifest` — basic SEO and PWA metadata
- `website-audit-and-content-decisions.md` — page-by-page audit and content strategy

## Run locally

Open `index.html` directly, or run a local server from this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Enquiry form

The form uses the free FormSubmit AJAX endpoint and sends enquiries to:

`contact@joyuniformsllp.com`

FormSubmit requires a one-time email confirmation the first time the form is used. Submit one test enquiry after deployment and approve the verification email. If the service cannot be reached, the website displays email and WhatsApp alternatives.

To change the recipient, update both occurrences of this address in `index.html` and the endpoint in `script.js`.

## Before going live — confirm these items

1. Confirm the preferred public domain: the requested site is `joyuniformsllp.com`, while LinkedIn currently lists `joyuniforms.co.in`.
2. Confirm the primary phone number and email. The build uses `+91 98186 62508` and `contact@joyuniformsllp.com`, which appear in the live site header.
3. Confirm the exact PIN codes and business hours for the industrial unit and shop. The website deliberately omits uncertain PIN codes and hours.
4. Replace the current limited product image with a professional photo library of the actual factory, team, fabrics, embroidery, quality checks and sector-wise uniforms.
5. Review `privacy.html` and `terms.html` with legal counsel.
6. Add Google Analytics or Search Console only after deciding the cookie-consent approach.

## Deployment

This folder can be uploaded directly to shared hosting/cPanel, Netlify, Cloudflare Pages, GitHub Pages or any static host. For the existing domain, upload the contents of this folder to the website document root, usually `public_html`.
