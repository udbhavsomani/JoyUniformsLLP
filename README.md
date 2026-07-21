# Joy Uniforms LLP — Deployment-Ready Frontend Website

A responsive B2B website built with plain HTML, CSS and JavaScript. No backend or build step is required.

## What is included

- Premium single-page homepage with multi-view solution drawers
- Eight SEO-focused solution landing pages in `solutions/`
- Optimized WebP imagery and dedicated social-sharing image
- Responsive design, mobile navigation and accessible controls
- FormSubmit-powered enquiry form, WhatsApp, call and email actions
- Organization, FAQ, Service and Breadcrumb structured data
- Sitemap, robots file, web app icons and 404 page
- Apache `.htaccess`, Netlify `_headers` and `netlify.toml` deployment configuration
- Draft Privacy Policy and Terms of Use

## Main files

- `index.html` — main website
- `solutions/*.html` — sector-specific SEO landing pages
- `styles.css` — all shared styling
- `script.js` — drawers, mobile menu, form handling and dynamic solution sections
- `assets/images/` — logo, optimized WebP category graphics, favicon and OG image
- `404.html` — branded error page
- `.htaccess` — Apache/cPanel caching, compression and security headers
- `_headers` and `netlify.toml` — Netlify/Cloudflare-style static hosting configuration

## Run locally

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Enquiry form activation

The website submits through FormSubmit to `info@joyuniforms.co.in`. After the first live test submission, approve the one-time verification email from FormSubmit. Until that is done, submissions will not be delivered.

## cPanel / shared hosting deployment

1. Back up the current website.
2. Upload the contents of this folder—not the outer folder itself—to `public_html`.
3. Ensure hidden files are included so `.htaccess` is uploaded.
4. Test the homepage, all eight solution pages, the contact form, WhatsApp and Google Maps links.
5. Submit `https://www.joyuniforms.co.in/sitemap.xml` in Google Search Console.
6. Test one form enquiry and approve the FormSubmit verification email.

## Netlify deployment

Drag the full folder into Netlify Drop, or connect it to a repository. `netlify.toml` and `_headers` are already included.

## Before publication — confirm

- Preferred primary domain: `joyuniforms.co.in` or `joyuniforms.co.in`
- Primary phone and email
- Exact PIN codes and business hours
- Legal review of Privacy Policy and Terms of Use
- Whether Google Analytics/Search Console tags should be added
- Replace illustrations with approved real photography over time where available

## Client logo section

The homepage includes a client showcase grouped into:
- Educational & Healthcare Institutions
- Corporate Clients

Optimized logo assets are stored in `assets/client-logos/`.
