# YOUM-E-IQBAL 2026 — REGISTRATION LANDING PAGE

A complete, responsive, vintage-literary-themed static website for the **Event Management Society (EMS)**, **Faculty of Computing & Information Technology (FCIT)**, **University of the Punjab**.

## Get started

1. Unzip the folder.
2. Open `index.html` in your browser. **No server, build step, or npm install is required.**
3. To publish, upload the contents of this folder to any static hosting service (Netlify, GitHub Pages, Cloudflare Pages, etc.).

## IMPORTANT — Add your six Google Form links

Open **`assets/js/config.js`** and paste each actual Google Form URL between the quotation marks:

```js
window.IQBAL_CONFIG = {
  eventDate: '2026-11-19',
  deadline: '2026-11-18T23:59:00+05:00',
  deadlineTentative: true,
  formLinks: {
    quiz: 'https://docs.google.com/forms/d/e/YOUR_QUIZ_FORM/viewform',
    singing: 'https://docs.google.com/forms/d/e/YOUR_SINGING_FORM/viewform',
    baitbaazi: 'https://docs.google.com/forms/d/e/YOUR_BAIT_BAAZI_FORM/viewform',
    speech: 'https://docs.google.com/forms/d/e/YOUR_SPEECH_FORM/viewform',
    debate: 'https://docs.google.com/forms/d/e/YOUR_DEBATE_FORM/viewform',
    documentary: 'https://docs.google.com/forms/d/e/YOUR_VIDEO_FORM/viewform'
  }
};
```

Replace the example links with your actual URLs. When a URL is blank, the Register button shows a friendly **"registration link coming soon"** notice (no broken link). When a valid `https://` URL is added, the button opens that form in a new tab. There is no custom registration database or payment collection on this website; follow your Google Forms / university process.

## Date and event detail notes

- **Event:** Thursday, 19 November 2026
- **Venue:** Senate Hall, FCIT Old Campus, University of the Punjab
- **Eligible:** FCIT Old Campus and New Campus students
- **Start time:** not yet confirmed in the supplied module document
- **Registration closing date:** **18 November 2026 — TENTATIVE**, requested as a provisional date. It is **not** confirmed in the supplied document.
- Countdown assumes **23:59 Pakistan Standard Time** on 18 November purely for display; change `deadline` in config when the organizers confirm the actual cutoff.
- The Reel/Documentary **video submission deadline** was not specified and should be confirmed separately.

If the organizers change the event date or final deadline, also update their visible text in `index.html`, and the countdown time in `assets/js/config.js`. A text search for `18 November` and `19 November` will find all static mentions. Final competition topics may also be announced separately.

## Six modules

| # | Module title | Competition | Fee |
|---|---|---|---|
| 1 | Fikr o Firasat | Written Iqbal Quiz | Rs. 250 per person |
| 2 | Sur o Sikhan | Kalam-e-Iqbal Singing | Solo Rs. 200 / Group Rs. 400 |
| 3 | Bazm-e-Qafia | Bait Baazi | Rs. 300 per person |
| 4 | Nida-e-Waqt | Urdu Speech | Rs. 300 per person |
| 5 | Mubahisa-e-Fikr | Urdu Debate | Rs. 400 per team |
| 6 | Nigah-e-Shaheen | Reel / Documentary | Rs. 300 per person |

Module content, duration, judging criteria and rules are defined in **`assets/js/main.js`** under the `modules` array and are based on the supplied *MODULES-DETAIL.pdf* (pages 1–8).

## Included features

- Responsive desktop / tablet / mobile layout
- Vintage letterpress editorial design with parchment texture
- Archival Iqbal portrait, Shaheen and university illustration sourced from your supplied poster
- Hero entrance animation, floating eagle, scrolling quote ticker, reveal-on-scroll, card tilt hover, progress bar
- Fully clickable registration and details buttons
- Detailed accessible dialog for rules, format and scoring; Escape key and backdrop to dismiss
- Participation-category filters (all, individual, team/group)
- Mobile hamburger navigation
- Tentative deadline countdown
- FAQ accordion, award and general rules sections
- Reduced-motion accessibility support
- Locally generated Tailwind CSS utilities (no CDN dependency)

## Files

```
index.html                   Page structure
assets/css/tailwind.css      Locally compiled Tailwind v4 utility CSS
assets/css/style.css         Custom vintage design, responsive styles, animation
assets/js/config.js          Google Form placeholders and date settings  <-- EDIT THIS
assets/js/main.js            Modules, dialogs, filters and interactions
assets/img/                  Cropped poster art and site favicon
tools_build_tailwind.cjs     Optional local Tailwind rebuild script
package.json                 Optional dev-only Tailwind dependency
```

The site loads Google Fonts for enhanced typography when online. It still works with system-font fallbacks when offline. All layout CSS and visual art assets are local.

## Optional: rebuild Tailwind after adding new utility classes

The compiled CSS is already included in the ZIP. If you change Tailwind classes in `index.html`, you can recompile:

```bash
npm install
npm run build:css
```

You do **not** need npm for normal edits, changing Google Form links, or publishing the website.

## Content and license notes

The cropped archival art is taken from the event poster you supplied and is used here solely for this website. Please ensure you have permission to publish any source artwork and logos. Competition rules/fees were transcribed from your own module document.
