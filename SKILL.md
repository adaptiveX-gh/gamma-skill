---
name: gamma-presentation
description: Create stunning Gamma AI-style presentations with 4 professional themes (Dark Tech, Corporate, Minimal, Playful). Auto-scaling responsive design with beautiful animations.
license: Complete terms in LICENSE.txt
---

# gamma-presentation

Create beautiful, professional presentations with auto-scaling responsive design.

---
metadata:
  outputType: html
  streaming: true
  icon: 🎨
parameters:
  - name: topic
    type: text
    required: true
    description: Main topic or title for the presentation
  - name: theme
    type: select
    options:
      - Dark Tech
      - Corporate
      - Minimal
      - Playful
    default: Dark Tech
    description: Visual theme style
  - name: slide_count
    type: number
    default: 7
    min: 3
    max: 12
    description: Number of slides to generate
---

# Gamma Presentation Generator

## Instructions
Generate a complete HTML presentation that auto-scales to any screen size. Output ONLY the HTML code starting with <!DOCTYPE html> and ending with </html>. Do not explain or describe.

Based on the selected [THEME], apply the appropriate theme class to the body element:
- Dark Tech → class="theme-dark-tech"
- Corporate → class="theme-corporate"
- Minimal → class="theme-minimal"
- Playful → class="theme-playful"

## Theme Descriptions

### Dark Tech Theme
Modern technology aesthetic with dark gradients (#0a0a0f to #1a0a1f), purple/magenta accents (#d946ef, #a855f7, #6b21a8). Features glass morphism effects, flowing SVG backgrounds, and sleek typography. Use for tech presentations, product launches, and innovation showcases.

### Corporate Theme
Professional business style with navy to slate blue gradient (#1e3a8a to #334155) and corporate blue accents (#3b82f6, #60a5fa). Clean lines, traditional layouts optimized for charts and data visualization. Use for business reviews, stakeholder presentations, and formal reports.

### Minimal Theme
Clean, sophisticated design with white to light gray backgrounds (#ffffff to #f8fafc) and subtle green accent (#10b981). Maximum whitespace, minimal decoration, generous padding. Use for design presentations, philosophical content, and clarity-focused messaging.

### Playful Theme
Vibrant, energetic style with multi-color gradients (orange #f59e0b, pink #ec4899, purple #8b5cf6). Bouncy animations, rounded corners, sticker-style elements. Use for creative pitches, educational content, and engaging storytelling.

## HTML Template

Create a presentation using this structure with responsive, auto-scaling design:

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[TOPIC] Presentation</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* ================================================================
           THEME: DARK TECH
           ================================================================ */

        .theme-dark-tech {
            --bg-primary: #0a0a0f;
            --bg-secondary: #1a0a1f;
            --accent-1: #d946ef;
            --accent-2: #a855f7;
            --accent-3: #6b21a8;
            --text-primary: #ffffff;
            --text-secondary: #e0d4f7;
            --text-muted: #a78bca;
            --glass-bg: rgba(217, 70, 239, 0.1);
            --glass-border: rgba(217, 70, 239, 0.2);
        }

        .theme-dark-tech body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
            overflow: hidden;
            height: 100vh;
            width: 100vw;
            position: relative;
        }

        .theme-dark-tech body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 25, 50 50 T 100 50' stroke='rgba(217,70,239,0.1)' fill='none' stroke-width='2'/%3E%3C/svg%3E");
            opacity: 0.3;
            animation: flowingLines 20s linear infinite;
        }

        @keyframes flowingLines {
            from { background-position: 0 0; }
            to { background-position: 100px 100px; }
        }

        .theme-dark-tech .slide {
            background: rgba(26, 10, 31, 0.6);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            box-shadow: 0 0 40px rgba(217, 70, 239, 0.3), 0 25px 50px rgba(0,0,0,0.5);
        }

        .theme-dark-tech h1 {
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
            padding-bottom: 20px;
        }

        .theme-dark-tech h1::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: clamp(60px, 15%, 120px);
            height: 4px;
            background: linear-gradient(90deg, var(--accent-1), transparent);
            border-radius: 2px;
        }

        .theme-dark-tech h2 {
            font-size: clamp(1.8rem, 5vw, 3rem);
            font-weight: 700;
            color: var(--text-primary);
        }

        .theme-dark-tech h3 {
            font-size: clamp(1.3rem, 3.5vw, 2rem);
            font-weight: 600;
            color: var(--accent-1);
        }

        .theme-dark-tech p, .theme-dark-tech li {
            color: var(--text-secondary);
        }

        .theme-dark-tech li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--accent-1);
        }

        .theme-dark-tech .card {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .theme-dark-tech .card:hover {
            background: rgba(217, 70, 239, 0.15);
            border-color: var(--accent-1);
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(217, 70, 239, 0.3);
        }

        .theme-dark-tech .nav-button {
            background: rgba(217, 70, 239, 0.2);
            backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border);
            color: var(--text-primary);
        }

        .theme-dark-tech .nav-button:hover {
            background: rgba(217, 70, 239, 0.3);
            border-color: var(--accent-1);
            box-shadow: 0 5px 20px rgba(217, 70, 239, 0.4);
        }

        .theme-dark-tech .dot {
            background: rgba(217, 70, 239, 0.3);
        }

        .theme-dark-tech .dot.active {
            background: var(--accent-1);
            box-shadow: 0 0 20px rgba(217, 70, 239, 0.6);
        }

        /* ================================================================
           THEME: CORPORATE
           ================================================================ */

        .theme-corporate {
            --bg-primary: #1e3a8a;
            --bg-secondary: #334155;
            --accent-1: #3b82f6;
            --accent-2: #60a5fa;
            --text-primary: #0f172a;
            --text-secondary: #475569;
            --border-color: rgba(59, 130, 246, 0.3);
        }

        .theme-corporate body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
            overflow: hidden;
            height: 100vh;
            width: 100vw;
        }

        .theme-corporate body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image:
                linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.5;
        }

        .theme-corporate .slide {
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .theme-corporate h1 {
            font-size: clamp(2.5rem, 7vw, 4.5rem);
            font-weight: 700;
            color: var(--bg-primary);
            border-left: 6px solid var(--accent-1);
            padding-left: clamp(15px, 2vw, 25px);
        }

        .theme-corporate h2 {
            font-size: clamp(1.8rem, 4.5vw, 2.8rem);
            font-weight: 600;
            color: var(--bg-secondary);
        }

        .theme-corporate h3 {
            font-size: clamp(1.3rem, 3vw, 1.8rem);
            font-weight: 600;
            color: var(--accent-1);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .theme-corporate p, .theme-corporate li {
            color: var(--text-secondary);
        }

        .theme-corporate li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--accent-1);
        }

        .theme-corporate .card {
            background: white;
            border: 2px solid var(--border-color);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .theme-corporate .card:hover {
            border-color: var(--accent-1);
            box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
            transform: translateY(-3px);
        }

        .theme-corporate .nav-button {
            background: var(--accent-1);
            border: none;
            color: white;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .theme-corporate .nav-button:hover {
            background: var(--accent-2);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }

        .theme-corporate .dot {
            background: rgba(59, 130, 246, 0.3);
        }

        .theme-corporate .dot.active {
            background: var(--accent-1);
        }

        /* ================================================================
           THEME: MINIMAL
           ================================================================ */

        .theme-minimal {
            --bg-primary: #ffffff;
            --bg-secondary: #f8fafc;
            --accent-1: #10b981;
            --text-primary: #0f172a;
            --text-secondary: #475569;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
        }

        .theme-minimal body {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
            overflow: hidden;
            height: 100vh;
            width: 100vw;
        }

        .theme-minimal .slide {
            background: white;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .theme-minimal h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 300;
            color: var(--text-primary);
            text-align: center;
            letter-spacing: -0.03em;
        }

        .theme-minimal h2 {
            font-size: clamp(1.8rem, 4vw, 2.5rem);
            font-weight: 400;
            color: var(--text-primary);
        }

        .theme-minimal h3 {
            font-size: clamp(1.2rem, 2.5vw, 1.6rem);
            font-weight: 500;
            color: var(--text-secondary);
        }

        .theme-minimal p, .theme-minimal li {
            line-height: 2;
            color: var(--text-secondary);
        }

        .theme-minimal li::before {
            content: '•';
            position: absolute;
            left: 0.5em;
            color: var(--accent-1);
            font-size: 1.5em;
        }

        .theme-minimal .card {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
        }

        .theme-minimal .card:hover {
            border-color: var(--accent-1);
            box-shadow: 0 4px 16px rgba(16, 185, 129, 0.1);
        }

        .theme-minimal .nav-button {
            background: transparent;
            border: 2px solid var(--border-color);
            color: var(--text-secondary);
        }

        .theme-minimal .nav-button:hover {
            border-color: var(--accent-1);
            color: var(--accent-1);
        }

        .theme-minimal .dot {
            background: var(--border-color);
        }

        .theme-minimal .dot.active {
            background: var(--accent-1);
            width: 24px;
            border-radius: 4px;
        }

        /* ================================================================
           THEME: PLAYFUL
           ================================================================ */

        .theme-playful {
            --color-orange: #f59e0b;
            --color-pink: #ec4899;
            --color-purple: #8b5cf6;
            --color-blue: #3b82f6;
            --color-green: #10b981;
            --text-primary: #1f2937;
            --text-secondary: #4b5563;
        }

        .theme-playful body {
            font-family: 'Poppins', -apple-system, sans-serif;
            background: linear-gradient(135deg, var(--color-orange), var(--color-pink), var(--color-purple));
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
            overflow: hidden;
            height: 100vh;
            width: 100vw;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .theme-playful .slide {
            background: white;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3), 0 0 0 10px rgba(255, 255, 255, 0.1);
        }

        .theme-playful h1 {
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--color-orange), var(--color-pink), var(--color-purple));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
            animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes bounceIn {
            0% { transform: scale(0); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }

        .theme-playful h2 {
            font-size: clamp(1.8rem, 5vw, 3rem);
            font-weight: 700;
            color: var(--color-purple);
            position: relative;
            display: inline-block;
        }

        .theme-playful h2::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 6px;
            background: linear-gradient(90deg, var(--color-orange), var(--color-pink));
            border-radius: 3px;
        }

        .theme-playful h3 {
            font-size: clamp(1.3rem, 3.5vw, 2rem);
            font-weight: 600;
            color: var(--color-pink);
        }

        .theme-playful p, .theme-playful li {
            color: var(--text-secondary);
        }

        .theme-playful li::before {
            content: '🎯';
            position: absolute;
            left: 0;
        }

        .theme-playful .card {
            background: linear-gradient(135deg, #fff, #fef3c7);
            border: 3px solid var(--color-orange);
            box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .theme-playful .card:hover {
            transform: translateY(-10px) rotate(2deg);
            box-shadow: 10px 10px 0 rgba(236, 72, 153, 0.3);
        }

        .theme-playful .nav-button {
            background: linear-gradient(135deg, var(--color-orange), var(--color-pink));
            border: none;
            color: white;
            box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
        }

        .theme-playful .nav-button:hover {
            transform: scale(1.1) rotate(-3deg);
            box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
        }

        .theme-playful .dot {
            background: rgba(255, 255, 255, 0.5);
            border: 3px solid white;
        }

        .theme-playful .dot:nth-child(1) { background: var(--color-orange); }
        .theme-playful .dot:nth-child(2) { background: var(--color-pink); }
        .theme-playful .dot:nth-child(3) { background: var(--color-purple); }
        .theme-playful .dot:nth-child(4) { background: var(--color-blue); }
        .theme-playful .dot:nth-child(5) { background: var(--color-green); }

        .theme-playful .dot.active {
            transform: scale(1.5);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
        }

        /* ================================================================
           BASE PRESENTATION STYLES
           ================================================================ */

        .presentation-container {
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
        }

        .slide {
            display: none;
            width: min(90vw, 1400px);
            height: min(85vh, 850px);
            padding: clamp(40px, 6vw, 80px);
            border-radius: clamp(20px, 3vw, 40px);
            position: relative;
            overflow: auto;
        }

        .slide.active {
            display: flex;
            flex-direction: column;
            justify-content: center;
            animation: slideIn 0.5s ease;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }

        h1 {
            margin-bottom: clamp(1rem, 3vw, 2rem);
            line-height: 1.2;
        }

        h2 {
            margin-bottom: clamp(0.8rem, 2vw, 1.5rem);
        }

        h3 {
            margin-bottom: clamp(0.8rem, 1.5vw, 1.2rem);
        }

        p, li {
            font-size: clamp(1rem, 2.5vw, 1.4rem);
            line-height: 1.6;
            margin-bottom: clamp(0.5rem, 1.5vw, 1rem);
        }

        ul {
            padding-left: clamp(1rem, 3vw, 2rem);
            list-style: none;
        }

        li {
            position: relative;
            padding-left: 1.5em;
            font-weight: normal;
        }

        .emoji-icon {
            font-size: clamp(3rem, 10vw, 6rem);
            margin-bottom: clamp(1rem, 2vw, 2rem);
        }

        /* Grid layouts */
        .grid-2x2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: clamp(1.5rem, 3vw, 3rem);
            margin-top: clamp(2rem, 4vw, 3rem);
        }

        .grid-3col {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: clamp(1rem, 2vw, 2rem);
            margin-top: clamp(2rem, 4vw, 3rem);
        }

        .split-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(2rem, 4vw, 4rem);
            align-items: center;
            margin-top: clamp(2rem, 4vw, 3rem);
        }

        .card {
            border-radius: clamp(12px, 2vw, 20px);
            padding: clamp(1.5rem, 3vw, 2.5rem);
            transition: all 0.3s;
        }

        .quote-slide {
            text-align: center;
            padding: clamp(2rem, 4vw, 3rem);
        }

        .quote-text {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-style: italic;
            margin-bottom: clamp(1.5rem, 3vw, 2rem);
        }

        .quote-author {
            font-size: clamp(1rem, 2vw, 1.3rem);
            font-weight: 600;
        }

        .number-badge {
            display: inline-block;
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            font-weight: 700;
            margin-right: 1rem;
        }

        /* Navigation */
        .nav-dots {
            position: absolute;
            top: 50%;
            right: clamp(20px, 3vw, 40px);
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 12px;
            z-index: 10;
        }

        .dot {
            width: clamp(10px, 1.2vw, 14px);
            height: clamp(10px, 1.2vw, 14px);
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s;
        }

        .dot:hover {
            transform: scale(1.2);
        }

        .dot.active {
            transform: scale(1.4);
        }

        .nav-button {
            position: absolute;
            bottom: clamp(30px, 4vh, 50px);
            padding: clamp(12px, 2vw, 18px) clamp(24px, 4vw, 40px);
            border-radius: clamp(25px, 4vw, 50px);
            font-size: clamp(1rem, 1.8vw, 1.2rem);
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 600;
        }

        .nav-button:hover {
            transform: scale(1.05);
        }

        .nav-button.prev {
            left: clamp(30px, 4vw, 50px);
        }

        .nav-button.next {
            right: clamp(30px, 4vw, 50px);
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
            .slide {
                width: 95vw;
                height: 90vh;
                padding: 30px;
            }

            .grid-2x2,
            .grid-3col,
            .split-layout {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .nav-dots {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="presentation-container">
        <div class="nav-dots" id="dots"></div>

        <!-- Generate [SLIDE_COUNT] slides based on [TOPIC] -->
        <!-- Each slide should have class="slide" with first one having class="slide active" -->

        <button class="nav-button prev" onclick="changeSlide(-1)">←</button>
        <button class="nav-button next" onclick="changeSlide(1)">Next →</button>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        // Create dots
        const dotsContainer = document.getElementById('dots');
        for(let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.onclick = () => goToSlide(i);
            dotsContainer.appendChild(dot);
        }

        function changeSlide(direction) {
            slides[currentSlide].classList.remove('active');
            document.querySelectorAll('.dot')[currentSlide].classList.remove('active');

            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

            slides[currentSlide].classList.add('active');
            document.querySelectorAll('.dot')[currentSlide].classList.add('active');
        }

        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            document.querySelectorAll('.dot')[currentSlide].classList.remove('active');

            currentSlide = index;

            slides[currentSlide].classList.add('active');
            document.querySelectorAll('.dot')[currentSlide].classList.add('active');
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if(e.key === 'ArrowRight') changeSlide(1);
            if(e.key === 'ArrowLeft') changeSlide(-1);
        });

        // Touch/swipe support
        let touchStartX = 0;
        document.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
        document.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].clientX;
            if(touchStartX - touchEndX > 50) changeSlide(1);
            if(touchEndX - touchStartX > 50) changeSlide(-1);
        });
    </script>
</body>
</html>

## Slide Generation Instructions

Generate exactly [SLIDE_COUNT] slides with this structure based on [TOPIC]:

1. **Title slide**: Main topic with emoji icon and subtitle
2-4. **Content slides**: Use varied layouts appropriate to the theme
5. **Conclusion**: Summary with call-to-action

### Layout Options by Theme

**Dark Tech** - Use these layouts:
- Centered titles with glass morphism cards
- Numbered sections with badges (01, 02, 03)
- 2x2 or 3-column grids for features
- Split layouts with image placeholders
- Futuristic emojis (🚀 ⚡ 💡 🔒 🌐 ⚙️)

**Corporate** - Use these layouts:
- Professional title with subtitle
- Sidebar highlights with stats
- Data visualization placeholders (charts/graphs representations)
- Two-column comparisons
- Professional emojis (📊 📈 💼 🎯 ✓)

**Minimal** - Use these layouts:
- Centered single-focus content
- Maximum whitespace between elements
- Simple bullet lists with generous padding
- Clean two-column splits
- Minimal emojis (• ◦ —)

**Playful** - Use these layouts:
- Asymmetric card arrangements
- Colorful sticker-style elements
- Fun emoji combinations throughout
- Dynamic two-column layouts
- Expressive emojis (🎨 🎉 ✨ 💖 🌈 🎯 🚀)

### Content Guidelines

1. Adapt tone to theme (technical/professional/elegant/fun)
2. Use appropriate emojis for the theme style
3. Include relevant examples and data points
4. Ensure all text is concise and scannable
5. Vary slide layouts to maintain visual interest
6. Use theme-specific class names (grid-2x2, split-layout, quote-slide, etc.)

## Example Slide Structures

### Title Slide (All Themes)
```html
<div class="slide active">
    <div style="text-align: center; display: flex; flex-direction: column; justify-content: center; height: 100%;">
        <div class="emoji-icon">[EMOJI]</div>
        <h1>[MAIN TITLE]</h1>
        <p style="font-size: clamp(1.2rem, 3vw, 1.8rem); opacity: 0.8; margin-top: 1rem;">[SUBTITLE]</p>
    </div>
</div>
```

### Bullet Points Slide
```html
<div class="slide">
    <h2>[SECTION TITLE]</h2>
    <ul>
        <li>[KEY POINT 1]</li>
        <li>[KEY POINT 2]</li>
        <li>[KEY POINT 3]</li>
        <li>[KEY POINT 4]</li>
    </ul>
</div>
```

### 2x2 Grid Cards Slide
```html
<div class="slide">
    <h2>[SECTION TITLE]</h2>
    <div class="grid-2x2">
        <div class="card">
            <h3>[CARD 1 TITLE]</h3>
            <p>[CARD 1 DESCRIPTION]</p>
        </div>
        <div class="card">
            <h3>[CARD 2 TITLE]</h3>
            <p>[CARD 2 DESCRIPTION]</p>
        </div>
        <div class="card">
            <h3>[CARD 3 TITLE]</h3>
            <p>[CARD 3 DESCRIPTION]</p>
        </div>
        <div class="card">
            <h3>[CARD 4 TITLE]</h3>
            <p>[CARD 4 DESCRIPTION]</p>
        </div>
    </div>
</div>
```

### 3-Column Grid Slide
```html
<div class="slide">
    <h2>[SECTION TITLE]</h2>
    <div class="grid-3col">
        <div class="card">
            <h3>[ITEM 1]</h3>
            <p>[DESCRIPTION]</p>
        </div>
        <div class="card">
            <h3>[ITEM 2]</h3>
            <p>[DESCRIPTION]</p>
        </div>
        <div class="card">
            <h3>[ITEM 3]</h3>
            <p>[DESCRIPTION]</p>
        </div>
    </div>
</div>
```

### Two-Column Split Layout Slide
```html
<div class="slide">
    <h2>[SECTION TITLE]</h2>
    <div class="split-layout">
        <div>
            <h3>[LEFT COLUMN TITLE]</h3>
            <ul>
                <li>[POINT 1]</li>
                <li>[POINT 2]</li>
                <li>[POINT 3]</li>
            </ul>
        </div>
        <div>
            <h3>[RIGHT COLUMN TITLE]</h3>
            <ul>
                <li>[POINT 1]</li>
                <li>[POINT 2]</li>
                <li>[POINT 3]</li>
            </ul>
        </div>
    </div>
</div>
```

### Quote Slide
```html
<div class="slide">
    <div class="quote-slide">
        <p class="quote-text">"[INSPIRATIONAL OR RELEVANT QUOTE]"</p>
        <p class="quote-author">— [AUTHOR NAME OR SOURCE]</p>
    </div>
</div>
```

### Numbered Sections Slide
```html
<div class="slide">
    <h2>[SECTION TITLE]</h2>
    <div style="margin-top: 2rem;">
        <div style="margin-bottom: 2rem;">
            <span class="number-badge">01</span>
            <h3 style="display: inline;">[FIRST STEP]</h3>
            <p style="margin-top: 0.5rem; margin-left: 4rem;">[DESCRIPTION]</p>
        </div>
        <div style="margin-bottom: 2rem;">
            <span class="number-badge">02</span>
            <h3 style="display: inline;">[SECOND STEP]</h3>
            <p style="margin-top: 0.5rem; margin-left: 4rem;">[DESCRIPTION]</p>
        </div>
        <div>
            <span class="number-badge">03</span>
            <h3 style="display: inline;">[THIRD STEP]</h3>
            <p style="margin-top: 0.5rem; margin-left: 4rem;">[DESCRIPTION]</p>
        </div>
    </div>
</div>
```

### Conclusion Slide
```html
<div class="slide">
    <div style="text-align: center; display: flex; flex-direction: column; justify-content: center; height: 100%;">
        <h2>[CONCLUSION TITLE]</h2>
        <p style="font-size: clamp(1.3rem, 3vw, 2rem); margin-top: 2rem; line-height: 1.8;">
            [SUMMARY OR CALL TO ACTION]
        </p>
        <p style="font-size: clamp(1.1rem, 2.5vw, 1.6rem); margin-top: 1.5rem; opacity: 0.7;">
            [SECONDARY MESSAGE OR CONTACT INFO]
        </p>
    </div>
</div>
```

## IMPORTANT

**Output ONLY the complete HTML code.**
- Do NOT include markdown code fences (```html or ```)
- Do NOT include explanations or descriptions
- Start directly with `<!DOCTYPE html>`
- End with `</html>`
- Replace ALL placeholder values with actual content based on the topic
