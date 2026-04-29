# AR STELMACH SPÓŁKA JAWNA — Wholesale Electronics Store

A professional wholesale electronics storefront for iPhones and PS5 consoles, targeting Poland and Europe.

## Live Site
Deployed on Vercel — point `arstemach.pl` to the Vercel deployment.

## Pages

| Page | File | Purpose |
|---|---|---|
| Homepage | `index.html` | Hero, featured products, contact form |
| Store | `arstemach-store.html` | Full catalogue, filters, cart, checkout |
| Poland | `arstemach-poland.html` | Poland-focused storefront |
| Admin | `arstemach-admin.html` | Password-protected admin panel |

## Features

- 48 products — New iPhones, Used iPhones, PS5 consoles
- MOQ badges on every product
- Filter by condition (New / Used / Game)
- Product search
- Shopping cart with quantity controls
- Checkout form — orders sent via EmailJS to `sale@arstemach.pl`
- Contact form — messages sent to `sale@arstemach.pl`
- Multi-language support (EN, PL, DE, FR, ES)
- Dark / light mode
- Admin panel with product management, order history, settings
- Photo upload in admin (file upload or URL)

## Admin Access

- URL: `/arstemach-admin.html`
- Username: `admin`
- Password: `enterprise1`

## EmailJS Setup

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create a service connected to `sale@arstemach.pl`
3. Create a template for orders and contact messages
4. In the Admin panel → Settings, enter your:
   - Public Key
   - Service ID
   - Template ID

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Deploy — Vercel auto-detects static files
5. Add custom domain `arstemach.pl` in Vercel settings

## DNS Setup for arstemach.pl

In your domain registrar DNS settings:
```
A record:     @    →  76.76.19.61
CNAME record: www  →  cname.vercel-dns.com
```

## Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript
- localStorage for cart, orders, settings
- EmailJS for email delivery
- Hosted on Vercel
- Domain: arstemach.pl
