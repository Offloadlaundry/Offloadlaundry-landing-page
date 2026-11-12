# OffLoad Laundry - Color Scheme

## Brand Colors (From Logo: Dark Green BG; Bottom Tagline.png)

### Primary Colors
- **Primary (Dark Green)**: `#002707` - Very dark green, main background color
- **Primary Light**: `#134c46` - Lighter variant for accents and hover states

### Secondary Colors  
- **Secondary (Cream)**: `#decfaa` - Main accent color from logo
- **Secondary Light**: `#f3ebd2` - Lighter cream for subtle accents

### Accent Colors
- **Accent (Sage Green)**: `#76805e` - Muted green for secondary elements

### Text Colors
- **Text (Dark)**: `#1a1a1a` - Primary text, very dark for contrast
- **Text Light**: `#4a4a4a` - Secondary text

### Background
- **Background**: `#fafafa` - Off-white background

### Special
- **Footer**: `#002707` - Same as primary for consistency

## Implementation

### Tailwind Config
All colors are defined in `tailwind.config.ts` under `theme.extend.colors`

### CSS Variables
CSS variables are also available in `app/globals.css` as `--primary`, `--secondary`, etc.

### Usage Examples

**Using Tailwind Classes:**
```tsx
<div className="bg-primary text-secondary">
<button className="bg-secondary hover:bg-secondary-light">
```

**Using CSS Variables:**
```css
background-color: var(--primary);
color: var(--secondary);
```

## Color Ratios
- Dark backgrounds (Primary) with white/light text = High contrast ✓
- Cream accents on dark green = Good readability ✓
- Sage green accents = Subtle, professional ✓

## Consistency
All page sections use the primary color scheme:
- Header: Primary background, secondary text accents
- Hero: Primary gradient background
- Sections: Mix of backgrounds and accent colors
- Footer: Primary background
- Buttons: Secondary backgrounds with primary text

