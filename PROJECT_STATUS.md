# Project status – Xinjuan Deng personal site

**Last updated:** 2026-02-25

## Done (session 2026-02-25 — Blog UI Redesign + Real Content)

### Blog card redesign (index.html + style.css)
- Replaced absolute-positioned overlay pattern with flex-column card: image on top, `.blog-info` content below
- `.blog-image`: `aspect-ratio: 16/10`, `overflow: hidden`, `object-fit: cover`
- `.blog-image--contain`: modifier for portrait images — `object-fit: cover; object-position: top center`
- New classes: `.blog-category` (teal pill), `.blog-meta` (date + read time), `.blog-excerpt` (3-line clamp), `.blog-read-more` (animated arrow link)
- Hover: lift + shadow only — no jarring color flash

### Blog post page redesign (style.css)
- Added `.blog-breadcrumb` — "← Back to Blog" nav above article
- Added `.post-meta-bar` — teal left-border bar with category pill, date, read time
- Widened `.post-inner` from `42rem` → `700px`
- `.blog-title`: `font-weight: 800` + teal `border-bottom` separator
- `.post-body p`: `font-size: 1.05rem`, `line-height: 1.8`
- Added styles for `.post-body h2`, `.post-body code`, `.post-body a`, `.post-figure` / `figcaption`
- Applied breadcrumb + meta-bar to all three post pages

### Post 1 — "How to Build Custom Skills for Claude (And Why You Should)"
- Full article (7 sections) from `en-blog.md`; infographic PNG embedded as `<figure>` in post body
- Card image updated to infographic; category: Engineering

### Post 2 — "Everything You Need to Know About AI Agents in 21 Minutes"
- Full article (6 sections) from Tina Huang video notes; category changed to AI
- SVG cover (`ai-agents-cover.svg`) as card thumbnail; SVG also embedded as `<figure>` in post body

### Post 3 — "What Actually Makes Technical Documentation Good"
- Full article (5 sections) written from scratch using Mintlify's guide (fetched live)
- Covers: audience, Diátaxis framework, consistency, navigation, maintenance
- Custom SVG cover (`docs-guide-cover.svg`): light editorial style (white bg, bold black type, teal accents) — visually distinct from post-2's dark style

### Next time suggestions
- **Post 1 cover image** — currently uses the infographic PNG as card image; a proper title card (like post-2/3 style) would be more consistent
- **More blog posts** — consider "Prompt Engineering for Support Teams" or "How I Use AI in My Daily Workflow"
- **Styled blockquotes** — posts use `<em>` for quotes; `<blockquote>` with teal left border would look more polished
- **Scroll progress bar** — thin teal bar at top of post pages while reading

## Done (session 2025-02-25 — hero/pronunciation)

- Blog section on homepage (card layout) after Professional Background; nav link to #blog.
- Blog post pages: post-1, post-2, post-3 (all use Featured image style); no "Back to Blog" button.
- Fixed empty post pages: main.js guards for counterUp and magnificPopup when plugins not loaded.
- My Recent Works: removed "Some Handouts" item; fixed structure (overlay inside image, work-info on all cards); equal-height grid; 16:10 image ratio; description line-clamp.
- Card consistency: single-service, single-blog, contact-box use 16px radius, shadow-md, hover shadow-xl + translateY(-8px).
- Git: committed all changes; added .cursor/ to .gitignore.

## Next up

- Add a real HTML resume; redo the resume section.
- Add real blog content and polish the blog page (improve look and feel).
- Add recent projects to the Projects section.
- Add meta description and Open Graph tags for better search and link previews.
- (Optional) Rename "My Recent Works" to "Projects" or "Portfolio" if desired.

## Claude's UI Improvement Suggestions

### 1. Fix Spacing Inconsistencies
- `.contact-area` desktop uses `var(--space-16)` (48px) while all other sections use `var(--space-24)` (96px) — normalize to `var(--space-24)`
- `.blog-area` and `.career-timeline-area` lack base padding; rely on hardcoded px in media queries — add base padding with CSS variables
- Convert all hardcoded `padding-top: 90px; padding-bottom: 100px` to CSS variables (`var(--space-20)` tablet, `var(--space-16)` mobile)
- Add missing tablet breakpoint for `.contact-area`
- Make padding symmetric (equal top/bottom) for visual rhythm

### 2. Hero Section Polish
- Add typing animation cycling through roles: "Customer Support Engineer", "Technical Account Manager", "Problem Solver"
- Make CTA button larger/more prominent with subtle glow/pulse effect
- Improve social icons row — slightly larger, tooltip labels on hover

### 3. Blog Cards & Post Pages Polish
- Add read-time badges ("3 min read") to blog cards on homepage
- Improve blog card hover transitions
- Blog posts: add author byline with avatar, improve typography (max-width ~720px), styled blockquotes
- Add "Back to Home" link at bottom of posts
- Add scroll progress bar at top of post pages

### 4. Footer Enhancement
- Add mini tagline/blurb (1-liner)
- Add quick nav links mirroring navbar
- Add "Built with" line (HTML, CSS, Bootstrap, JS)
- Darker background for visual weight

### 5. Dark Mode Toggle
- Sun/moon toggle in navbar
- `[data-theme="dark"]` CSS variable overrides for backgrounds, text, shadows
- JS: toggle attribute, save to localStorage, respect `prefers-color-scheme`
- Smooth transition between modes

### 6. Other Ideas (Lower Priority)
- Meta/OG tags for SEO and link previews
- Portfolio filtering tabs (All, Web Apps, UX/Research, Tools)
- Skills/tech stack icon grid
- Resume timeline: expandable details, company logos, PDF download
- Performance: replace jQuery 1.12.4, lazy-load images, WebP format
- Accessibility: skip-to-content link, better focus styles, WCAG contrast
- Custom 404 page

## Backlog / ideas

- SEO: sitemap, meta descriptions per page.
- Keep PROJECT_STATUS.md updated after each session for easy resume.
