# Shyamnagar Adibasi Unite Football Academy: website

React + Vite + React Router + GSAP + Lucide.

## Run
    npm install
    npm run dev        # local preview
    npm run build      # production build in /dist

## Edit content
Everything editable is in `src/data/academyData.js` (images, achievement details, players, competitions, gallery, contact, social links, form endpoint).
Put photos in `public/images/` (WebP/AVIF recommended) and reference as `/images/name.webp`.
No photos, names, years or scores are invented: empty fields show clearly labelled placeholders.

## Contact form
Create a free form endpoint (e.g. Formspree), then set `formEndpoint` in `academyData.js`.

## SEO / Search Console
1. Replace `YOUR-DOMAIN.com` in `index.html`, `public/robots.txt`, `public/sitemap.xml`.
2. Add `public/og-image.jpg` (1200x630).
3. Deploy (Netlify/Vercel/Cloudflare Pages, with SPA fallback to index.html).
4. In Google Search Console add the property, verify, submit `/sitemap.xml`.
Add LocalBusiness/SportsOrganization JSON-LD only once the address and contact details are verified.

## AdSense
Privacy and Terms pages are starter text: have them reviewed. Leave `adsenseClient` empty until approved.

## Blue/Red animated edition
- Theme colours and gradients: `src/styles/variables.css` and the bottom of `src/styles/animations.css`.
- Images in `public/images/illustrations/` are original illustrations (labelled "Illustration" on the site), not photos of real players.
- To use real photos: put them in `public/images/` and change the paths in `src/data/academyData.js` (`images` and `gallery`). The "Illustration" tag disappears automatically.


## v2 changes
- Real logo (`public/images/logo.png`) in the navbar, footer and favicon / app icons.
- Light / dark theme toggle (moon/sun button in the navbar). Remembers the choice and follows the device setting the first time. Colours live in `src/styles/variables.css`.
- All photos are in `public/images/photos`, videos in `public/videos` (compressed for the web). Edit captions and order in `src/data/academyData.js` (`gallery`, `videos`, `competitions`, `academy.images`).
- Mobile menu fixed (it was being clipped by the header's blur effect).

Run: `npm install` then `npm run dev` (or `npm run build` and upload the `dist` folder).

## v3: NEXUS palette, player banner, Kolkata
- Colours: NEXUS Electric Performance (Obsidian #090D0B, Graphite #171E1A, Neon Lime #C5F946, Electric Green #8EDB36, Ice White #F5F7F2, Muted Sage #66736A). Tokens are in `src/styles/variables.css`, overrides in `src/styles/nexus.css`. Dark is the default; the toggle switches to an Ice White light version.
- Player banner: edit `featuredPlayer` in `src/data/academyData.js`. Put her photo at `public/images/players/barman.jpg`. It shows once per visit; set `show: false` to turn it off.
- Hero: "Now open in Kolkata" badge and card; the player/result card was removed.

## v4: white-glass skin, poster, reels
- Look: white transparent (glass) panels over a soft lime background; no black. The sun/moon toggle switches to a deep forest-green version. Tokens: `src/styles/variables.css`, skin: `src/styles/nexus.css`.
- Players page/section and the home "Moments from the field" section were removed (`/players` redirects home). The full Gallery page is still in the menu.
- Photo reels: `reels` in `src/data/academyData.js` (training + journey).
- Poster: `featuredPlayer` in `src/data/academyData.js`; photo at `public/images/players/pritika-barman.jpg`.
- Custom cursor removed; the normal cursor is used.
