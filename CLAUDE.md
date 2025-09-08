# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (English/Spanish) construction and restoration services website built with Astro and React. The site focuses on two main service categories:
- **Remodeling services** (bathroom, kitchen, living/dining, bedroom, home additions, office)
- **Restoration services** (water damage, fire damage, mold remediation, storm damage, mitigation)

## Development Commands

```bash
# Start development server
npm run dev
# or
npm run start

# Build for production
npm run build

# Preview production build
npm run preview

# Run any Astro command
npm run astro [command]
```

## Architecture & Structure

### Core Framework Setup
- **Astro** with React integration for component interactivity
- **TypeScript** enabled with React JSX support
- **Static site generation** configured for optimal performance

### Content Strategy
The site uses a data-driven approach with two main content systems:

1. **Services Data** (`src/data/services.js`):
   - Manages remodeling services and Florida cities
   - Generates dynamic routes via `getAllCombinations()` function
   - Creates service/city page combinations (e.g., bathroom-remodeling/orlando)

2. **Restoration Data** (`src/data/restoration.js`):
   - Complex hierarchical structure with groups and subservices
   - Each group has multiple subservices with detailed metadata
   - Uses template-based rendering system

3. **Blog Content** (`src/content/blog/`):
   - Markdown-based content collection
   - Structured with frontmatter schema (title, description, author, date, tags, image, featured)

### Route Structure
```
/                           # Homepage
/services                   # Services overview
/services/[service]/[city]  # Dynamic service-city combinations
/restoration                # Restoration overview
/restoration/[group]        # Group pages (e.g., water-damage, fire-damage)
/restoration/[group]/[subservice] # Specific services
/blog                       # Blog index
/blog/[slug]               # Individual blog posts
/portfolio                  # Portfolio page
/contact                   # Contact page
```

### Component Organization
- **Layout**: `BaseLayout.astro` - Main site wrapper
- **Navigation**: `Header.astro`, `HeaderNav.jsx`, `Footer.astro`
- **UI Components**: Form components, cards, accordions, tabs, breadcrumbs
- **Restoration Templates**: Specialized templates for different restoration service types
- **Content Components**: Blog cards, service cards, CTA sections

### Styling Architecture
- Global styles in `src/styles/global.css`
- Component-specific CSS in `src/styles/components/`
- Page-specific styles in `src/styles/pages/`
- Uses CSS custom properties and modern CSS features

### Data Management Patterns
- Service data uses utility functions for filtering and combinations
- Restoration data includes complex metadata (steps, reasons, FAQs, hero content)
- Both systems support SEO optimization with structured schemas

## Key Development Notes

### Service/City Page Generation
When working with service-city combinations, use the utility functions in `services.js`:
- `getAllCombinations()` - Gets all service/city pairs
- `getServicioData(slug)` - Gets service data by slug
- `getCiudadData(slug)` - Gets city data by slug

### Restoration Services
The restoration system uses a template-based approach:
- Each service group has a designated template (water, fire, mold, storm, mitigation)
- Subservices contain rich metadata (hero, steps, reasons, FAQs)
- Use utility functions: `findGroup()`, `findSubservice()`, `getAllCombos()`

### Bilingual Content
Content includes both English and Spanish elements. When adding new content, ensure consistency across languages.

### Image Organization
Images are organized in `public/images/` with subdirectories for different content types (blog, restoration services, portfolio examples).

## Content Collections
The blog uses Astro's content collections with a defined schema requiring:
- title, description, author, date, tags
- Optional: image, featured flag

When adding blog content, follow the established frontmatter schema in `src/content/config.ts`.