# gamma-presentation/SKILL.md
---
name: gamma-presentation
description: Create beautiful, animated presentations with auto-scaling responsive design like Gamma AI
metadata:
  outputType: html
  streaming: true
  icon: 🎯
parameters:
  - name: topic
    type: text
    required: true
    description: Main topic for the presentation
  - name: theme
    type: select
    options: Dark Tech, Corporate, Minimal, Playful
    default: Dark Tech
  - name: slide_count
    type: number
    default: 5
    min: 3
    max: 10
---

# Gamma Presentation Generator

## Instructions
Generate a complete HTML presentation that auto-scales to any screen size. Output ONLY the HTML code starting with <!DOCTYPE html> and ending with </html>. Do not explain or describe.

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
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            overflow: hidden;
            height: 100vh;
            width: 100vw;
        }
        
        .presentation-container {
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        
        .slide {
            display: none;
            width: min(90vw, 1200px);
            height: min(85vh, 800px);
            padding: min(8vw, 80px);
            background: white;
            border-radius: clamp(10px, 2vw, 30px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
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
            font-size: clamp(2rem, 8vw, 4rem);
            margin-bottom: clamp(1rem, 3vw, 2rem);
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.2;
        }
        
        h2 {
            font-size: clamp(1.5rem, 5vw, 2.5rem);
            margin-bottom: clamp(0.8rem, 2vw, 1.5rem);
            color: #333;
        }
        
        p, li {
            font-size: clamp(1rem, 2.5vw, 1.4rem);
            line-height: 1.6;
            color: #555;
            margin-bottom: clamp(0.5rem, 1.5vw, 1rem);
        }
        
        ul {
            padding-left: clamp(1rem, 3vw, 2rem);
        }
        
        .emoji-icon {
            font-size: clamp(3rem, 10vw, 6rem);
            margin-bottom: clamp(1rem, 2vw, 2rem);
        }
        
        .nav-dots {
            position: absolute;
            top: 50%;
            right: clamp(10px, 2vw, 30px);
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .dot {
            width: clamp(8px, 1vw, 12px);
            height: clamp(8px, 1vw, 12px);
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .dot.active {
            background: white;
            transform: scale(1.5);
        }
        
        .nav-button {
            position: absolute;
            bottom: clamp(20px, 3vh, 40px);
            background: rgba(255,255,255,0.9);
            border: none;
            padding: clamp(10px, 1.5vw, 20px) clamp(20px, 3vw, 40px);
            border-radius: clamp(20px, 3vw, 40px);
            font-size: clamp(0.9rem, 1.5vw, 1.1rem);
            cursor: pointer;
            transition: all 0.3s;
            color: #667eea;
            font-weight: 600;
        }
        
        .nav-button:hover {
            background: white;
            transform: scale(1.05);
        }
        
        .nav-button.prev {
            left: clamp(20px, 3vw, 40px);
        }
        
        .nav-button.next {
            right: clamp(20px, 3vw, 40px);
        }
        
        /* Grid layout for cards */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: clamp(1rem, 2vw, 2rem);
            margin-top: clamp(1rem, 2vw, 2rem);
        }
        
        .card {
            background: rgba(139, 92, 246, 0.1);
            border-radius: clamp(8px, 1vw, 16px);
            padding: clamp(1rem, 2vw, 2rem);
            text-align: center;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
            .slide {
                width: 95vw;
                height: 90vh;
                padding: 5vw;
            }
            
            .nav-dots {
                display: none;
            }
        }
        
        /* Large screens */
        @media (min-width: 1920px) {
            h1 { font-size: 4.5rem; }
            h2 { font-size: 3rem; }
            p, li { font-size: 1.6rem; }
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

1. Title slide: Main topic with subtitle
2-4. Content slides: Key points, data, examples
5. Conclusion: Summary and call-to-action

Use various layouts:
- Title centered
- Bullet points
- Grid cards
- Two-column
- Quote slides

Include relevant emojis and ensure all content auto-scales using clamp() and viewport units.