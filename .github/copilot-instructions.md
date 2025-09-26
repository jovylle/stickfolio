# Copilot Instructions for Stickfolio

## Project Overview
Stickfolio is a **minimalist, hand-drawn portfolio site** built with vanilla HTML/CSS/JS. No frameworks, no build tools, no dependencies - just clean, static files with a doodle aesthetic.

## Architecture & Key Files

### Core Structure
- `index.html` - Single-page portfolio with hash-based navigation (#home, #work, #about, #contact)
- `script.js` - Fetches projects from external JSON API and renders project cards
- `styles.css` - Hand-crafted CSS with doodle-style animations and paper card effects
- `svg/` - Custom hand-drawn SVG icons (navigation, decorative elements, paperclips)

### Design System
**Theme**: Hand-drawn, stick-figure aesthetic with intentional imperfection
- Colors: `--ink: #111` (dark text), `--accent: #ff4d00` (orange highlights)
- Typography: `system-ui, sans-serif` with playful transforms (`rotate(-1deg)`, etc.)
- Cards: Paper-like appearance with `svg/paper_frame.svg` background and `svg/paperclip.svg` decorations

## Key Patterns & Conventions

### SVG Assets
- **Two types**: Excalidraw-generated (complex hand-drawn paths like `home.svg`) vs. simple handcrafted SVGs (`paperclip.svg`)
- All SVGs use consistent dark ink color (`#111` or `#1e1e1e`)
- Navigation icons: `home.svg`, `work.svg`, `about.svg`, `contact.svg`
- Decorative: `paperclip.svg`, `paper_frame.svg`, `divider_wavy.svg`, etc.

### CSS Animation Philosophy
```css
/* Subtle rotations for hand-drawn feel */
transform: rotate(-1.2deg);
/* Hover interactions with playful movement */
.card:hover { transform: rotate(.6deg); }
/* Respects user preferences */
@media (prefers-reduced-motion:no-preference) { /* animations */ }
```

### Project Data Integration
- Fetches from external API: `https://pocket.uft1.com/data/highlights.json`
- Handles multiple data formats: `data.highlights` or `data.projects`
- Flexible field mapping: `title|name`, `description|body`, `live`, `repo`
- Graceful error handling with friendly messages

## Development Workflow

### Local Development
No build process - just open `index.html` in browser. Changes are immediately visible.

### Adding New Projects
Projects are managed externally via the JSON API. The format should match:
```json
{
  "highlights": [
    {
      "title": "Project Name",
      "description": "Brief description",
      "live": "https://example.com",
      "repo": "https://github.com/user/repo"
    }
  ]
}
```

### Adding New SVG Icons
1. Create simple SVGs in the established style (hand-drawn, `#111` color)
2. Keep viewBox consistent with existing icons
3. Use semantic filenames (e.g., `new_feature.svg`)

## Content Guidelines

### Writing Style
- Conversational, friendly tone ("Hi, I'm Jo 👋")
- Brief, impactful descriptions
- Emphasize simplicity and craftsmanship

### Visual Consistency
- Maintain intentional imperfection (slight rotations, hand-drawn lines)
- Use paper/sticky note metaphors consistently
- Keep color palette minimal (black ink + orange accent)

## Deployment Notes
Static site - can be deployed anywhere that serves HTML files. No server-side requirements beyond hosting the external JSON API for projects.