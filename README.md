# Gamma Presentation Skill - Multi-Theme System

A complete presentation generation skill for Claude with dynamic theming, responsive design, and professional layouts.

## Features

### 4 Professional Themes

1. **Dark Tech** - Modern technology aesthetic with purple/magenta gradients, glass morphism effects, and flowing SVG backgrounds
2. **Corporate** - Professional business style with navy/blue colors, clean lines, and traditional layouts
3. **Minimal** - Clean, sophisticated design with maximum whitespace and subtle accents
4. **Playful** - Vibrant, energetic style with multi-color gradients and bouncy animations

### Theme System Architecture

The skill uses CSS custom properties (CSS variables) and theme-specific classes to apply complete visual transformations:

```html
<body class="theme-dark-tech">
  <!-- All children inherit theme styles -->
</body>
```

Each theme defines:
- Color palette (backgrounds, accents, text colors)
- Typography styles (font families, weights, sizes)
- Component styling (cards, buttons, navigation)
- Animations and transitions
- SVG background graphics

### Responsive Design

All themes use CSS `clamp()` for fluid typography and spacing:

```css
font-size: clamp(min, preferred, max)
```

**Breakpoints:**
- Mobile (< 768px): Single column layouts, simplified navigation
- Tablet/Desktop (768px - 1920px): Full responsive scaling
- Large displays (> 1920px): Maximum size constraints

### Layout Components

Reusable layout classes work across all themes:

- `.grid-2x2` - 2x2 card grid
- `.grid-3col` - 3 column layout
- `.split-layout` - Two-column side-by-side
- `.quote-slide` - Centered quote formatting
- `.card` - Card container with hover effects
- `.number-badge` - Numbered sections

### Navigation System

Unified navigation works across all themes:

**Controls:**
- Previous/Next buttons (bottom corners)
- Navigation dots (right side, color-coded)
- Keyboard: Arrow keys (left/right)
- Touch: Swipe gestures (left/right)

**Features:**
- Active state highlighting
- Smooth CSS transitions
- Mobile-responsive (dots hidden on small screens)
- Accessible keyboard navigation

## File Structure

```
gamma-skill/
├── SKILL.md                        # Main skill definition (required)
├── README.md                       # This file
├── LICENSE.txt                     # License information
├── docs/                           # Additional documentation
│   ├── CLAUDE_GENERATION_GUIDE.md  # Content generation patterns
│   ├── THEME_SYSTEM.md             # Theme architecture details
│   ├── VISUAL_THEME_GUIDE.md       # Theme selection guide
│   ├── THEME-COMPARISON.md         # Side-by-side theme comparison
│   ├── DESIGN-RATIONALE.md         # Design decisions and UX
│   └── IMPLEMENTATION_COMPLETE.md  # Technical implementation summary
└── examples/                       # Live examples and reference CSS
    ├── example-dark-tech.html      # Complete Dark Tech presentation
    ├── theme-examples.html         # All theme samples
    └── themes.css                  # Standalone CSS reference
```

## Usage

### Parameters

- **topic** (required): Main subject for the presentation
- **theme**: Dark Tech | Corporate | Minimal | Playful (default: Dark Tech)
- **slide_count**: 3-10 slides (default: 5)

### Example Request

```
Create a presentation about "AI in Healthcare" using the Dark Tech theme with 7 slides
```

### Output

Complete HTML presentation with:
- Selected theme automatically applied
- 7 slides with varied layouts
- Responsive design for all screen sizes
- Full navigation system
- Theme-specific SVG backgrounds and animations

## Theme Selection Guide

### When to Use Dark Tech
- Technology presentations
- Product launches (software/apps)
- Developer tools
- AI/ML content
- Startup pitches
- Innovation showcases

**Visual Style:** Dark gradients, purple/pink accents, glass morphism, flowing animated waves

### When to Use Corporate
- Business reviews
- Financial reports
- Strategy meetings
- Professional services
- Stakeholder presentations
- Formal reports

**Visual Style:** Navy/blue colors, grid backgrounds, clean lines, professional typography

### When to Use Minimal
- Design portfolios
- Philosophical content
- Simple product launches
- Clarity-focused messaging
- Brand presentations
- Thought leadership

**Visual Style:** White backgrounds, generous whitespace, subtle green accents, ultra-clean

### When to Use Playful
- Marketing campaigns
- Creative pitches
- Educational content
- Fun products
- Event presentations
- Engaging storytelling

**Visual Style:** Colorful gradients, bouncy animations, rounded corners, sticker-style elements

## Technical Implementation

### CSS Custom Properties

Each theme defines a complete set of CSS variables:

```css
.theme-dark-tech {
    --bg-primary: #0a0a0f;
    --bg-secondary: #1a0a1f;
    --accent-1: #d946ef;
    --accent-2: #a855f7;
    --text-primary: #ffffff;
    /* ... more variables */
}
```

### Theme Application

JavaScript is not needed for theme application - it's purely CSS-based:

1. Claude detects the `[THEME]` parameter
2. Maps theme name to CSS class:
   - "Dark Tech" → `class="theme-dark-tech"`
   - "Corporate" → `class="theme-corporate"`
   - "Minimal" → `class="theme-minimal"`
   - "Playful" → `class="theme-playful"`
3. Applies class to `<body>` element
4. All theme-specific CSS rules cascade automatically

### SVG Graphics

Each theme includes unique SVG backgrounds:

**Dark Tech:** Animated flowing waves with gradient fills
**Corporate:** Static grid pattern with geometric shapes
**Minimal:** Subtle accent lines (none defined in current implementation)
**Playful:** Animated gradient that shifts colors

### Performance

- Pure CSS theming (no runtime JS overhead)
- GPU-accelerated animations (transform, opacity)
- Efficient SVG backgrounds (inline data URIs or CSS patterns)
- Responsive images with aspect-ratio
- Minimal DOM manipulation (only for navigation dots)

## Browser Compatibility

- **Chrome/Edge**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support (iOS and macOS)
- **Mobile browsers**: Full touch and responsive support

## Accessibility

- Semantic HTML structure
- High contrast text (WCAG AA compliance)
- Keyboard navigation support
- Focus indicators on interactive elements
- Screen reader compatible

## Customization

### Adding a New Theme

1. Define CSS variables in SKILL.md:
```css
.theme-new-name {
    --bg-primary: #color;
    --accent-1: #color;
    /* ... */
}
```

2. Add theme-specific styles:
```css
.theme-new-name h1 {
    /* custom heading styles */
}
```

3. Update parameter options:
```yaml
- name: theme
  type: select
  options:
    - Dark Tech
    - Corporate
    - Minimal
    - Playful
    - New Name
```

### Modifying Layouts

Add new layout classes in the base styles section:

```css
.new-layout {
    display: grid;
    grid-template-columns: ...;
}
```

All themes will inherit the layout automatically.

## Best Practices

### For Claude (Content Generation)

1. Match emojis to theme style
2. Use varied layouts throughout
3. Keep text concise (5-7 words per bullet)
4. Build narrative arc (intro → content → conclusion)
5. Always start with title slide (`class="slide active"`)
6. End with call-to-action

### For Users

1. Choose theme based on audience and context
2. Keep slide count between 5-8 for optimal pacing
3. Test on target devices before presenting
4. Use keyboard shortcuts for smooth navigation
5. Provide clear, specific topic for best results

## Examples

See `examples/example-dark-tech.html` for a complete working example of:
- Dark Tech theme implementation
- All 7 layout types in use
- Proper navigation setup
- Responsive design patterns

Open `examples/theme-examples.html` to see all four themes side-by-side.

## Future Enhancements

Potential additions:
- Export to PDF functionality
- Custom color picker for accents
- Additional transition styles (fade, zoom, flip)
- Progress bar option
- Timer display
- Speaker notes mode
- Theme variations (light/dark modes per theme)

## Support

For issues or questions:
- Review `docs/THEME_SYSTEM.md` for detailed theme documentation
- Check `docs/CLAUDE_GENERATION_GUIDE.md` for generation patterns
- Check `docs/VISUAL_THEME_GUIDE.md` for theme selection guide
- See `examples/example-dark-tech.html` for implementation reference

## Quick Start

1. **Install the skill**: Add this repository to your Claude Code skills
2. **Choose your parameters**: Select topic, theme, and slide count
3. **Generate**: Claude will create a complete HTML presentation
4. **Open in browser**: Save the output and open in any modern browser
5. **Present**: Use arrow keys, mouse, or touch to navigate

## License

See LICENSE.txt for complete license information.

---

**Version**: 1.0
**Created**: 2025-10-21
**Status**: Production Ready
