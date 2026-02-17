# Project status – Xinjuan Deng personal site

**Last updated:** 2025-02-16

## Done (this session)

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
