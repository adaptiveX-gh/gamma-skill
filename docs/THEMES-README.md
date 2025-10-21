# Gamma Presentation Themes - Complete Guide

## Overview

This Gamma presentation skill includes **4 professionally designed themes**, each with unique styling, animations, and visual characteristics. All themes are fully responsive and auto-scale to any screen size.

---

## Theme Selection

Themes are selected via the `theme` parameter in the skill:

```yaml
parameters:
  - name: theme
    type: select
    options:
      - Dark Tech
      - Corporate
      - Minimal
      - Playful
    default: Dark Tech
```

Simply set the theme parameter when invoking the skill, and the appropriate styling will be automatically applied using CSS classes.

---

## Theme Details

### 1. Dark Tech Theme

**Visual Identity:**
- Dark gradient background: `#0a0a0f` → `#1a0a1f`
- Purple/magenta accent colors: `#d946ef`, `#a855f7`, `#6b21a8`
- Glass morphism effects with backdrop blur
- Flowing SVG line animations in background
- Modern, futuristic typography

**Best Used For:**
- Technology presentations
- Product launches
- Innovation showcases
- Startup pitches
- Developer conferences
- AI/ML presentations

**Unique Features:**
- Glass morphism cards with blur effects
- Animated SVG background patterns
- Glowing accent effects on interactive elements
- Gradient text for headings
- Smooth cubic-bezier animations

**Typography:**
- Font: Inter, system fonts
- H1: Bold 800 weight with gradient fill
- Ultra-modern, tech-forward appearance

**Example Slide Structure:**
```html
<body class="theme-dark-tech">
  <div class="slide active">
    <h1>Next-Gen AI Platform</h1>
    <div class="grid-2x2">
      <div class="card">
        <div class="emoji-icon">🚀</div>
        <h3>Lightning Fast</h3>
        <p>Process millions of requests per second</p>
      </div>
      <!-- More cards -->
    </div>
  </div>
</body>
```

---

### 2. Corporate Theme

**Visual Identity:**
- Professional gradient: Navy `#1e3a8a` → Slate blue `#334155`
- Corporate blue accents: `#3b82f6`, `#60a5fa`
- Clean white slides with subtle grid pattern background
- Traditional business aesthetics
- Professional, trustworthy appearance

**Best Used For:**
- Business reviews
- Quarterly reports
- Stakeholder presentations
- Sales presentations
- Board meetings
- Professional training

**Unique Features:**
- Subtle grid pattern overlay
- Left-border accent on H1 headings
- Data visualization friendly design
- Stat boxes for KPIs
- Professional shadow effects

**Typography:**
- Font: Helvetica Neue, Arial
- H1: Bold 700 with left accent border
- H3: Uppercase with letter-spacing
- Clean, authoritative style

**Special Components:**
```html
<!-- Stat Box for KPIs -->
<div class="stat-box">
  <span class="stat-number">$2.4M</span>
  <span class="stat-label">Revenue Growth</span>
</div>

<!-- Sidebar Layout -->
<div class="sidebar-layout">
  <div class="sidebar">
    <h3>Focus Areas</h3>
    <!-- Content -->
  </div>
  <div>
    <!-- Main content -->
  </div>
</div>
```

---

### 3. Minimal Theme

**Visual Identity:**
- Clean white to light gray: `#ffffff` → `#f8fafc`
- Subtle green accent: `#10b981`
- Maximum whitespace
- Minimalist decoration
- Zen-like simplicity

**Best Used For:**
- Design presentations
- Portfolio showcases
- Philosophical content
- Brand presentations
- Architecture presentations
- Art exhibitions

**Unique Features:**
- Ultra-generous padding and spacing
- Light, clean shadows
- Minimal decorative elements
- Focus on content clarity
- Breathing room between elements

**Typography:**
- Font: SF Pro Display, system fonts
- H1: Light 300 weight, centered
- Line-height: 2 for maximum readability
- Sophisticated, elegant appearance

**Design Philosophy:**
```css
/* Everything serves a purpose */
padding: clamp(60px, 8vw, 100px); /* Extra generous */
line-height: 2; /* Maximum breathing room */
gap: clamp(3rem, 6vw, 5rem); /* Large spacing */
```

**Example:**
```html
<body class="theme-minimal">
  <div class="slide active">
    <div class="centered-content">
      <h1>Simplicity</h1>
      <div class="accent-bar"></div>
      <p>The ultimate sophistication</p>
    </div>
  </div>
</body>
```

---

### 4. Playful Theme

**Visual Identity:**
- Vibrant multi-color gradient: Orange `#f59e0b`, Pink `#ec4899`, Purple `#8b5cf6`
- Animated gradient background
- Bouncy, energetic animations
- Rounded corners everywhere
- Sticker-style card designs

**Best Used For:**
- Creative pitches
- Educational content
- Children's presentations
- Marketing campaigns
- Fun team presentations
- Social media content

**Unique Features:**
- Animated gradient background that shifts
- Bouncy cubic-bezier animations
- Sticker-style cards with shadows
- Rotating and scaling hover effects
- Emoji-heavy design language

**Typography:**
- Font: Poppins, friendly system fonts
- H1: Extra bold 800 with bounce-in animation
- Colorful underlines on H2
- Playful, energetic style

**Special Animations:**
```css
@keyframes bounceIn {
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

**Card Effects:**
```html
<div class="card">
  <!-- Cards rotate slightly on hover -->
  <div class="sticker">Let's Go! →</div>
</div>
```

---

## Universal Layout Components

All themes support the same layout components with theme-specific styling:

### Grid Layouts

**2x2 Grid:**
```html
<div class="grid-2x2">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

**3-Column Grid:**
```html
<div class="grid-3col">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

### Two-Column Split

```html
<div class="split-layout">
  <div>
    <!-- Left content -->
  </div>
  <div>
    <!-- Right content -->
  </div>
</div>
```

### Quote Slides

```html
<div class="quote-slide">
  <p class="quote-text">"Your inspiring quote here"</p>
  <p class="quote-author">— Author Name</p>
</div>
```

### Numbered Sections (Dark Tech specific)

```html
<div class="numbered-section">
  <span class="number-badge">01</span>
  <h3>Section Title</h3>
  <p>Section content...</p>
</div>
```

---

## Responsive Behavior

All themes are fully responsive with these breakpoints:

### Mobile (< 768px)
- Grids collapse to single column
- Navigation dots hidden
- Reduced padding
- Font sizes scale down
- Touch/swipe enabled

### Tablet (768px - 1920px)
- Fluid scaling using `clamp()`
- Maintains layout structure
- Viewport-relative sizing

### Desktop (> 1920px)
- Maximum font sizes enforced
- Optimal reading width maintained
- Enhanced visual effects

---

## Color Variables by Theme

### Dark Tech
```css
--bg-primary: #0a0a0f;
--accent-1: #d946ef;
--accent-2: #a855f7;
--text-primary: #ffffff;
--text-secondary: #e0d4f7;
```

### Corporate
```css
--bg-primary: #1e3a8a;
--accent-1: #3b82f6;
--accent-2: #60a5fa;
--text-primary: #0f172a;
--text-secondary: #475569;
```

### Minimal
```css
--bg-primary: #ffffff;
--accent-1: #10b981;
--text-primary: #0f172a;
--text-secondary: #475569;
--border-color: #e2e8f0;
```

### Playful
```css
--color-orange: #f59e0b;
--color-pink: #ec4899;
--color-purple: #8b5cf6;
--text-primary: #1f2937;
```

---

## Theme-Specific Recommendations

### Emoji Usage by Theme

**Dark Tech:** 🚀 💻 ⚡ 🔧 🌐 💡 🔒 ⚙️ 📡 🛸
**Corporate:** 📊 📈 💼 🎯 ✓ 📉 💰 🏢 📋 ✅
**Minimal:** • ◦ — → ✓ (use sparingly)
**Playful:** 🎨 🎉 ✨ 💖 🌈 🎯 🚀 🌟 💫 🎪

### Content Tone by Theme

**Dark Tech:**
- Technical, precise language
- Innovation-focused
- Future-oriented messaging
- "Next-generation", "cutting-edge", "revolutionary"

**Corporate:**
- Professional, formal language
- Data-driven messaging
- Results-oriented
- "Strategic", "efficient", "proven", "ROI"

**Minimal:**
- Simple, elegant language
- Philosophy-driven
- Clarity-focused
- "Essential", "refined", "pure", "intentional"

**Playful:**
- Casual, friendly language
- Excitement-driven
- Engaging messaging
- "Amazing!", "Let's go!", "Awesome", "Fun"

---

## Animation Timing

### Dark Tech
- Slide transitions: 0.6s cubic-bezier(0.16, 1, 0.3, 1)
- Smooth, elegant easing
- Glass effects with backdrop-filter

### Corporate
- Slide transitions: 0.5s ease-out
- Professional, straightforward
- No excessive animation

### Minimal
- Slide transitions: 0.4s ease-out
- Subtle, barely-there
- Fade-focused

### Playful
- Slide transitions: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)
- Bouncy, energetic
- Over-the-top effects welcome

---

## Implementation Guide

### 1. Choose Your Theme
Select the theme that matches your presentation context.

### 2. Apply Theme Class
Add the appropriate class to your HTML body:
```html
<body class="theme-dark-tech">
<body class="theme-corporate">
<body class="theme-minimal">
<body class="theme-playful">
```

### 3. Structure Your Content
Use the universal layout components with theme-appropriate content.

### 4. Select Emojis
Use emojis that match the theme's personality.

### 5. Test Responsiveness
Preview on multiple screen sizes to ensure proper scaling.

---

## Advanced Customization

### Override Variables
You can override theme variables in your custom CSS:

```css
.theme-dark-tech {
  --accent-1: #ff00ff; /* Custom accent */
  --bg-primary: #000000; /* Darker background */
}
```

### Add Custom Animations
Extend theme animations:

```css
.theme-playful .card {
  animation: customBounce 2s infinite;
}
```

### Mix Layout Components
Combine layouts for unique slides:

```html
<div class="slide">
  <div class="split-layout">
    <div class="grid-2x2">
      <!-- Nested grids -->
    </div>
    <div>
      <!-- Content -->
    </div>
  </div>
</div>
```

---

## Performance Considerations

1. **SVG Backgrounds**: Embedded as data URIs for performance
2. **Animations**: GPU-accelerated transforms only
3. **Backdrop Filters**: Graceful degradation on unsupported browsers
4. **Fonts**: System font stacks for instant loading
5. **Images**: Responsive placeholders, optimize actual images

---

## Browser Compatibility

All themes support:
- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

Graceful degradation for:
- backdrop-filter (glass morphism)
- CSS custom properties
- Grid layout

---

## Tips for Best Results

1. **Match Theme to Audience**: Corporate for executives, Playful for kids
2. **Consistent Emoji Style**: Don't mix professional and playful emojis
3. **Vary Layouts**: Use different components across slides
4. **Test Dark Mode**: Especially for Minimal theme
5. **Keep Text Concise**: Presentations work best with brief content
6. **Use High Contrast**: Ensure readability in all lighting conditions

---

## Troubleshooting

**Problem:** Theme not applying
**Solution:** Ensure body has correct class name (case-sensitive)

**Problem:** Animations laggy
**Solution:** Reduce backdrop-filter usage, use will-change CSS property

**Problem:** Text too small on mobile
**Solution:** All themes use clamp() - check viewport meta tag

**Problem:** Cards not hovering properly
**Solution:** Ensure proper nesting: card should be direct child of grid container

---

## File Structure

```
gamma-skill/
├── SKILL.md              # Main skill file with embedded themes
├── themes.css            # Standalone CSS (for reference)
├── theme-examples.html   # Complete examples of all themes
├── THEMES-README.md      # This documentation
└── LICENSE.txt           # License information
```

---

## Credits

Designed for the Gamma-style presentation skill using modern CSS features, responsive design principles, and user-centered design thinking.

**Created:** 2025
**License:** See LICENSE.txt
**Version:** 1.0.0
