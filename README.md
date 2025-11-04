# Travis Masingale // Portfolio & CV

A clean, typography-forward portfolio website for Travis Masingale, Professor of Design at Eastern Washington University.

## Overview

This is a single-page portfolio and CV site built with vanilla HTML, CSS, and JavaScript. The design philosophy prioritizes clarity, accessibility, and information architecture - reflecting the thoughtful approach of a design educator.

## Design Principles

- **Typography-Forward**: Uses a carefully considered type scale and generous line-height for optimal readability
- **Mobile-First**: Responsive design that works seamlessly from phone to desktop
- **Accessible**: Semantic HTML5, ARIA labels, keyboard navigation, and screen reader support
- **Minimal**: No frameworks or dependencies - just clean, efficient code
- **Scannable**: Clear visual hierarchy and progressive disclosure for long content lists

## Structure

```
/
├── index.html       # Main HTML structure with semantic markup
├── styles.css       # CSS with Grid/Flexbox layout, organized by component
├── script.js        # Interactive features (smooth scroll, collapsible sections)
└── README.md        # This file
```

### Recommended Image Organization

```
/images/
├── exhibitions/     # Exhibition work images
├── teaching/        # Classroom and teaching images
├── projects/        # Project thumbnails
└── profile/         # Headshot and profile images
```

## Features

### Navigation
- Sticky navigation bar with smooth scrolling
- Active section highlighting (scroll spy)
- Mobile-friendly responsive menu

### Content Sections
1. **Header/Intro** - Name, tagline, current position
2. **Teaching & Research** - Areas of interest
3. **Education** - Academic credentials
4. **Teaching Positions** - Career timeline
5. **Conferences** - Papers, presentations, moderation
6. **Workshops** - Practicums and workshops led
7. **Invited Talks** - Speaking engagements and panels
8. **Exhibitions** - Solo, juried, invited, group, and curated (collapsible)
9. **Recognition** - Awards and honors
10. **Professional Service** - Board positions and consulting

### Interactive Elements
- **Collapsible Exhibitions**: Long exhibition lists are grouped by type and can be expanded/collapsed
- **Smooth Scrolling**: Click navigation links for smooth animated scrolling
- **Terminal Command**: Click "$make cv" at the top to scroll back to the beginning
- **Keyboard Navigation**: All interactive elements are fully keyboard accessible

## Technical Details

### CSS Architecture
- CSS Custom Properties (variables) for maintainable theming
- CSS Grid for main layout structure
- Flexbox for component-level layouts
- Mobile-first media queries
- Print-friendly styles

### Accessibility Features
- Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA labels and roles where appropriate
- Keyboard navigation support
- Focus indicators for interactive elements
- Skip-to-content link for screen readers
- Respects `prefers-reduced-motion` preference
- High contrast mode support

### Browser Support
Modern browsers (Chrome, Firefox, Safari, Edge) - last 2 versions

## Deployment

### GitHub Pages
1. Push to your GitHub repository
2. Go to Settings > Pages
3. Select branch (usually `main` or `master`)
4. Site will be published at `https://[username].github.io/[repo-name]`

### Netlify
1. Connect your GitHub repository
2. Build command: (none needed)
3. Publish directory: `/`
4. Deploy

### Custom Domain
Add a `CNAME` file with your domain name, or configure DNS through your hosting provider.

## Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --color-bg: #ffffff;
    --color-text: #1a1a1a;
    --color-accent: #0066cc;
    --color-muted: #666666;
}
```

### Typography
Modify font variables:
```css
:root {
    --font-base: [your font stack];
    --font-mono: [your mono font stack];
}
```

### Spacing & Layout
Adjust spacing scale:
```css
:root {
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    /* etc. */
}
```

## Adding Images

To add images to any section:

1. Create the appropriate folder in `/images/`
2. Add your image files
3. Reference in HTML:
```html
<img src="images/exhibitions/my-work.jpg"
     alt="Descriptive text for accessibility"
     loading="lazy">
```

## Performance Optimization

- **Minimal Dependencies**: Zero external libraries
- **Lazy Loading**: Use `loading="lazy"` attribute on images
- **Efficient CSS**: Single stylesheet, organized and minified for production
- **Optimized JavaScript**: Vanilla JS with event delegation and intersection observers

## Future Enhancements

Potential additions:
- Image gallery modal for exhibition work
- Dark mode toggle
- Downloadable PDF version of CV
- Contact form integration
- Blog/writing section
- RSS feed for updates

## Content Updates

To update CV content, edit `index.html`:
- Each section follows a consistent pattern
- Dates use `<div class="year">` or `<div class="date-range">`
- Maintain the semantic structure for accessibility

## Credits

**Design & Development**: Based on CV content from Travis Masingale
**Philosophy**: Typography-forward, accessible, minimal
**Inspired by**: Academic CV design, Swiss design principles, terminal aesthetics

## License

© 2024 Travis Masingale. All rights reserved.

---

*Last updated: 2024*
