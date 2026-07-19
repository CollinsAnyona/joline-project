# Joline Geoconsultants Ltd — Company Website

Client website built for Joline Geoconsultants Ltd, a geoscience and environmental
consulting firm headquartered in Nairobi, Kenya and operating across East and Central
Africa. The site presents the firm's core services — groundwater and geotechnical
investigations, ERT/VES geophysical surveys, environmental impact assessments
(EIA/ESIA), and environmental audits — alongside its regional coverage, team, and
contact channels. Built as a single-page static site with no frameworks and no build
step.

## Highlights

- **Vanilla JavaScript only** — no frameworks, no libraries, no build tooling. One
  HTML file, one stylesheet, one script.
- **IntersectionObserver scroll-reveal** — `.sr` elements animate into view as they
  enter the viewport, with each element unobserved after its first reveal.
- **Animated counters** — trust-bar statistics count up from zero when scrolled into
  view (driven by `data-target` / `data-suffix` attributes), plus a timed depth
  counter and a typewriter-style site-reference readout in the hero panel.
- **Parallax hero** — the hero background translates on scroll for a subtle depth
  effect (passive scroll listener).
- **Mobile drawer navigation** — hamburger-toggled drawer with `aria-expanded`
  state, auto-closing on link selection.
- **Scroll-aware nav** — the fixed navbar gains a blurred, translucent background
  past a scroll threshold, and the active section is highlighted via scrollspy.
- **Design system in CSS custom properties** — an earth-toned palette (ink, clay,
  aquifer, limestone) defined in `:root`, with CSS grid layouts and responsive
  media queries throughout.

## Tech stack

- HTML5
- CSS3 (custom properties, grid, media queries, backdrop-filter)
- Vanilla JavaScript (ES6+, IntersectionObserver API)
- Google Fonts (Fraunces, IBM Plex Sans, IBM Plex Mono)

## Project structure

```
index.html   — single-page markup (hero, services, coverage, team, clients, contact)
style.css    — all styles
main.js      — nav, scroll-reveal, counters, parallax
Img/         — site photography, client logos, coverage map
```

## Viewing locally

No build step required. Either open `index.html` directly in a browser, or serve
the folder with any static server:

```
python -m http.server 8000
# then visit http://localhost:8000
```

---

Built by Collins Otieno.
