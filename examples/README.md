# Examples

Live examples and reference files for the Gamma Presentation Skill.

## Files

### example-dark-tech.html
Complete working presentation using the **Dark Tech** theme.

**Topic**: AI Revolution in Healthcare
**Slides**: 7 slides
**Demonstrates**:
- Title slide with emoji icon
- Bullet point layouts
- 2x2 grid cards
- 3-column layout
- Two-column split layout
- Quote slide
- Numbered sections
- Conclusion slide

**To view**: Open in any modern web browser

**Features shown**:
- Glass morphism effects
- Purple gradient text
- Flowing SVG backgrounds
- Smooth animations
- Full navigation (keyboard, mouse, touch)
- Responsive scaling

---

### theme-examples.html
Visual showcase of all four themes with sample slides.

**Demonstrates**:
- All four themes (Dark Tech, Corporate, Minimal, Playful)
- Side-by-side comparison
- Different layout types per theme
- Theme-specific styling

**To view**: Open in browser and navigate between slides to see each theme

---

### themes.css
Standalone CSS file with all theme styles extracted from SKILL.md.

**Size**: ~24KB uncompressed
**Purpose**: Reference implementation and standalone usage
**Contents**:
- Complete CSS for all 4 themes
- Layout component styles
- Navigation system styles
- Responsive breakpoints
- Animation keyframes

**Usage**:
```html
<link rel="stylesheet" href="themes.css">
<body class="theme-dark-tech">
  <!-- Your presentation content -->
</body>
```

## Quick Start

1. **View an example**:
   ```bash
   # Open in your default browser
   open example-dark-tech.html
   # or
   start example-dark-tech.html
   ```

2. **Navigate the presentation**:
   - Arrow keys: Previous/Next slide
   - Space/Enter: Next slide
   - Home/End: First/Last slide
   - Click buttons: Previous/Next
   - Click dots: Jump to slide
   - Swipe: On touch devices

3. **Inspect the code**:
   - View source to see HTML structure
   - Check styles in developer tools
   - Examine responsive behavior

## Use Cases

### Testing
Use these examples to:
- Test browser compatibility
- Verify responsive behavior
- Check navigation functionality
- Validate theme appearance

### Learning
Study the examples to understand:
- Slide structure patterns
- CSS class usage
- Theme application
- Layout combinations

### Reference
Use as templates for:
- Creating custom presentations
- Understanding theme styling
- Building new layouts
- Extending functionality

## Technical Details

### Browser Support
All examples work in:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Load time: <100ms
- Animation: 60fps (GPU-accelerated)
- File size: 20-50KB per presentation
- No external dependencies

### Accessibility
- Semantic HTML structure
- WCAG AA contrast ratios
- Keyboard navigation
- Screen reader compatible
- Focus indicators

## Customization

### Modifying an Example

1. Open the HTML file in a text editor
2. Edit slide content (keep HTML structure)
3. Modify theme by changing body class:
   - `class="theme-dark-tech"`
   - `class="theme-corporate"`
   - `class="theme-minimal"`
   - `class="theme-playful"`
4. Add/remove slides (maintain slide numbering)
5. Save and refresh browser

### Creating New Slides

Use the slide templates from the examples:

**Title Slide**:
```html
<div class="slide active">
  <div style="text-align: center; ...">
    <div class="emoji-icon">🚀</div>
    <h1>Your Title</h1>
    <p>Your subtitle</p>
  </div>
</div>
```

**Content Slide**:
```html
<div class="slide">
  <h2>Section Title</h2>
  <ul>
    <li>Point 1</li>
    <li>Point 2</li>
  </ul>
</div>
```

See the HTML files for more examples.

## Troubleshooting

### Presentation won't load
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify file encoding is UTF-8

### Styles don't look right
- Confirm theme class is applied to `<body>`
- Check for CSS conflicts if embedded in other pages
- Verify viewport meta tag is present

### Navigation not working
- Check JavaScript console for errors
- Ensure slide elements have correct classes
- Verify navigation buttons are present

## Contributing

To add new examples:
1. Create a new HTML file following the existing pattern
2. Use a descriptive filename
3. Include all themes' CSS inline
4. Add navigation system
5. Test in multiple browsers
6. Update this README

## Related Resources

- **Main README**: [../README.md](../README.md)
- **Documentation**: [../docs/](../docs/)
- **Skill Definition**: [../SKILL.md](../SKILL.md)

---

**Need help?** Check the [documentation](../docs/) or review the [theme system guide](../docs/THEME_SYSTEM.md).
