# Theme Switching System Documentation

## Overview

This presentation skill includes a complete theme-switching system that dynamically applies visual styles, SVG graphics, and color schemes based on the selected theme parameter.

## How It Works

### 1. Theme Detection

The JavaScript automatically detects the `[THEME]` parameter value:

```javascript
const selectedTheme = '[THEME]'; // Gets replaced by actual theme name
const theme = THEMES[selectedTheme] || THEMES['Dark Tech']; // Fallback to Dark Tech
```

### 2. Available Themes

#### Dark Tech
- **Use Case**: Technology presentations, developer content, modern products
- **Colors**: Deep blues, purples, pink accents
- **Background**: Dark gradient (#1a1a2e to #16213e)
- **Graphics**: Animated flowing gradient waves with floating particles
- **Accent**: Purple (#a855f7) and pink (#ec4899)

#### Corporate
- **Use Case**: Business presentations, professional meetings, reports
- **Colors**: Blues, clean whites, professional grays
- **Background**: Light gray gradient (#f5f7fa to #c3cfe2)
- **Graphics**: Geometric shapes, rectangles, professional lines
- **Accent**: Corporate blue (#2563eb)

#### Minimal
- **Use Case**: Design presentations, portfolios, clean product launches
- **Colors**: Black, white, grays
- **Background**: Pure white (#ffffff)
- **Graphics**: Subtle accent lines and dots
- **Accent**: Black (#1a1a1a)

#### Playful
- **Use Case**: Creative presentations, marketing, fun products
- **Colors**: Yellow, pink, purple, teal
- **Background**: Colorful gradient (yellow to pink to purple)
- **Graphics**: Bouncing circles, animated shapes, playful paths
- **Accent**: Pink (#fd79a8)

### 3. Dynamic CSS Injection

Each theme includes a complete color scheme:

```javascript
{
    bodyBg: 'background gradient or color',
    slideBg: 'slide background',
    slideColor: 'main text color',
    h1Gradient: 'gradient for h1 titles',
    h2Color: 'h2 heading color',
    textColor: 'paragraph and list text',
    cardBg: 'card background',
    cardBorder: 'card border style',
    dotBg: 'navigation dot color',
    dotActiveBg: 'active dot color',
    buttonBg: 'button background',
    buttonColor: 'button text color',
    buttonHoverBg: 'button hover state',
    accentColor: 'general accent',
    imageBg: 'image placeholder background',
    quoteBorder: 'quote left border'
}
```

The `applyTheme()` function dynamically injects these styles into a `<style>` tag at runtime.

### 4. SVG Background Graphics

Each theme includes unique SVG animations:

#### Dark Tech SVG
- Flowing wave paths with quadratic curves
- Animated morphing (8-10 second loops)
- Floating gradient particles
- Purple-pink gradient definitions

#### Corporate SVG
- Nested rectangles (geometric precision)
- Horizontal and vertical accent lines
- Concentric circles in corner
- Static professional patterns

#### Minimal SVG
- Sparse horizontal and vertical lines
- Corner accent dots
- Subtle opacity (10-15%)
- No animations (clean, static)

#### Playful SVG
- Bouncing circles with size/position animations
- Curved paths that bounce
- Rotating triangles
- Multiple overlapping animations (2-10 seconds)

### 5. Layout Components

All themes support these reusable layouts:

#### Grid Layouts
- `.grid-2x2` - 2x2 card grid
- `.grid-3col` - 3 column layout
- `.grid-auto` - Auto-fit responsive grid

#### Structural Layouts
- `.two-column` - Side-by-side content
- `.center-content` - Centered text
- `.quote-container` - Stylized quotes

#### Component Classes
- `.card` - Card containers with hover effects
- `.emoji-icon` - Large emoji displays
- `.image-placeholder` - Image placeholders

### 6. Navigation System

Unified across all themes:

**Controls:**
- Previous/Next buttons (bottom corners)
- Navigation dots (right side)
- Keyboard: Arrow keys, Space, Enter, Home, End
- Touch: Swipe left/right

**Features:**
- Button text changes ("Next →" becomes "Finish" on last slide)
- Active dot highlighting
- Smooth transitions
- Mobile-responsive (dots hidden on mobile)

### 7. Responsive Design

All themes auto-scale using:

```css
clamp(min, preferred, max)
```

**Breakpoints:**
- Mobile (< 768px): Single column grids, hidden dots
- Standard (768px - 1920px): Fluid scaling
- Large (> 1920px): Fixed maximum sizes

## Usage Examples

### Example 1: Dark Tech Presentation

```
Parameters:
- topic: "AI Revolution in Healthcare"
- theme: Dark Tech
- slide_count: 6

Expected Output:
- Dark blue/purple background
- Flowing animated waves
- Purple gradient headings
- Tech-focused emojis (🚀💻⚡)
```

### Example 2: Corporate Presentation

```
Parameters:
- topic: "Q4 Financial Results"
- theme: Corporate
- slide_count: 8

Expected Output:
- Clean white slides on gray gradient
- Geometric professional patterns
- Blue accent colors
- Business emojis (📊💼📈)
```

### Example 3: Minimal Portfolio

```
Parameters:
- topic: "Design Portfolio 2025"
- theme: Minimal
- slide_count: 5

Expected Output:
- Pure white background
- Subtle accent lines
- Black text on white
- Minimal emoji use (✓→•)
```

### Example 4: Playful Marketing

```
Parameters:
- topic: "Summer Product Launch"
- theme: Playful
- slide_count: 7

Expected Output:
- Colorful gradient background
- Bouncing animated shapes
- Vibrant pink accents
- Fun emojis (🎨🎉✨🌟)
```

## Technical Implementation

### Adding a New Theme

To add a new theme, extend the `THEMES` object:

```javascript
'New Theme Name': {
    bodyBg: 'gradient or color',
    slideBg: 'color',
    slideColor: 'color',
    h1Gradient: 'gradient',
    h2Color: 'color',
    textColor: 'color',
    cardBg: 'rgba color',
    cardBorder: 'border style',
    dotBg: 'rgba color',
    dotActiveBg: 'color',
    buttonBg: 'color',
    buttonColor: 'color',
    buttonHoverBg: 'color',
    accentColor: 'color',
    imageBg: 'rgba color',
    quoteBorder: 'border style',
    svgGraphic: `
        <svg>...</svg>
    `
}
```

### SVG Animation Tips

1. **Use percentage positioning** for responsive graphics
2. **Animate with `<animate>` tags** for smooth transitions
3. **Keep opacity low** (0.1-0.3) for background graphics
4. **Use `repeatCount="indefinite"`** for continuous loops
5. **Vary animation durations** (3-10 seconds) for organic feel

### Performance Considerations

- SVG animations use CSS transforms (GPU accelerated)
- Theme styles injected once at load time
- Navigation uses event delegation
- Smooth slide transitions with CSS animations
- Touch events debounced to prevent double-triggers

## Customization Guide

### For Claude (When Generating Presentations):

1. **Read the theme parameter**: `[THEME]` will be replaced at generation time
2. **Choose appropriate emojis**: Match the theme style
3. **Write concise content**: Presentations work best with brief text
4. **Vary layouts**: Use different components throughout
5. **Build narrative**: Start with title, develop ideas, conclude with action

### For Users:

1. **Select theme** based on presentation context
2. **Keep slide count** between 5-8 for best results
3. **Choose clear topic** for focused content generation
4. **Test on target device** (mobile/desktop)
5. **Use keyboard shortcuts** for smooth presenting

## Browser Compatibility

- **Modern browsers**: Full support (Chrome, Firefox, Edge, Safari)
- **IE11**: Limited support (no CSS custom properties)
- **Mobile**: Full touch and responsive support
- **SVG**: Broad support (animations may vary)

## Accessibility Features

- Keyboard navigation (arrow keys, space, enter)
- High contrast text (WCAG AA compliance)
- Semantic HTML structure
- Focus indicators on interactive elements
- Screen reader compatible navigation

## Future Enhancements

Potential additions to the theme system:

1. **Custom color picker** - User-defined accent colors
2. **Theme variations** - Light/dark modes per theme
3. **Animation controls** - Play/pause background animations
4. **Export options** - PDF generation with theme preserved
5. **Slide transitions** - Additional animation styles (fade, zoom, flip)

---

**Version**: 1.0
**Last Updated**: 2025-10-21
**License**: See LICENSE.txt
