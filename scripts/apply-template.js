/**
 * Apply Template - Runtime version for edge functions
 * Browser-compatible version without Node.js dependencies
 */

// Theme configurations (inline for edge function compatibility)
const THEMES_CONFIG = {
  "dark-tech": {
    "name": "Dark Tech",
    "className": "theme-dark-tech"
  },
  "corporate": {
    "name": "Corporate",
    "className": "theme-corporate"
  },
  "minimal": {
    "name": "Minimal",
    "className": "theme-minimal"
  },
  "playful": {
    "name": "Playful",
    "className": "theme-playful"
  }
};

/**
 * Apply template to slide data (edge function compatible)
 * @param {Object} slideData - JSON slide data from Claude
 * @param {string} themeName - Theme name
 * @param {string} baseTemplate - Base HTML template string
 * @returns {string} Complete HTML presentation
 */
function applyTemplate(slideData, themeName, baseTemplate) {
  // Map theme name to config key
  const themeKey = themeName.toLowerCase().replace(' ', '-');
  const themeConfig = THEMES_CONFIG[themeKey];

  if (!themeConfig) {
    throw new Error(`Unknown theme: ${themeName}`);
  }

  // Generate slide HTML
  const slidesHTML = slideData.slides
    .map((slide, index) => generateSlide(slide, index === 0))
    .join('\n\n        ');

  // Replace placeholders
  const html = baseTemplate
    .replace('{{TITLE}}', escapeHtml(slideData.title || 'Presentation'))
    .replace('{{THEME_CLASS}}', themeConfig.className)
    .replace('{{SLIDES_HTML}}', slidesHTML);

  return html;
}

/**
 * Generate HTML for a single slide
 */
function generateSlide(slide, isFirst = false) {
  const activeClass = isFirst ? ' active' : '';

  switch (slide.type) {
    case 'title':
      return generateTitleSlide(slide, activeClass);
    case 'bullets':
      return generateBulletsSlide(slide, activeClass);
    case 'grid-2x2':
      return generateGrid2x2Slide(slide, activeClass);
    case 'grid-3col':
      return generateGrid3ColSlide(slide, activeClass);
    case 'two-column':
      return generateTwoColumnSlide(slide, activeClass);
    case 'quote':
      return generateQuoteSlide(slide, activeClass);
    case 'numbered':
      return generateNumberedSlide(slide, activeClass);
    case 'conclusion':
      return generateConclusionSlide(slide, activeClass);
    default:
      return generateDefaultSlide(slide, activeClass);
  }
}

function generateTitleSlide(slide, activeClass) {
  return `<div class="slide${activeClass}">
    <div style="text-align: center; display: flex; flex-direction: column; justify-content: center; height: 100%;">
        <div class="emoji-icon">${slide.emoji || '🎯'}</div>
        <h1>${escapeHtml(slide.heading)}</h1>
        ${slide.subheading ? `<p style="font-size: clamp(1.2rem, 3vw, 1.8rem); opacity: 0.8; margin-top: 1rem;">${escapeHtml(slide.subheading)}</p>` : ''}
    </div>
</div>`;
}

function generateBulletsSlide(slide, activeClass) {
  const items = slide.items.map(item => `<li>${escapeHtml(item)}</li>`).join('\n        ');
  return `<div class="slide${activeClass}">
    <h2>${escapeHtml(slide.heading)}</h2>
    <ul>
        ${items}
    </ul>
</div>`;
}

function generateGrid2x2Slide(slide, activeClass) {
  const cards = slide.cards
    .map(card => `<div class="card">
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.content)}</p>
        </div>`)
    .join('\n        ');
  return `<div class="slide${activeClass}">
    <h2>${escapeHtml(slide.heading)}</h2>
    <div class="grid-2x2">
        ${cards}
    </div>
</div>`;
}

function generateGrid3ColSlide(slide, activeClass) {
  const cards = slide.cards
    .map(card => `<div class="card">
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.content)}</p>
        </div>`)
    .join('\n        ');
  return `<div class="slide${activeClass}">
    <h2>${escapeHtml(slide.heading)}</h2>
    <div class="grid-3col">
        ${cards}
    </div>
</div>`;
}

function generateTwoColumnSlide(slide, activeClass) {
  const leftItems = slide.left.items.map(item => `<li>${escapeHtml(item)}</li>`).join('\n                ');
  const rightItems = slide.right.items.map(item => `<li>${escapeHtml(item)}</li>`).join('\n                ');
  return `<div class="slide${activeClass}">
    <h2>${escapeHtml(slide.heading)}</h2>
    <div class="split-layout">
        <div>
            <h3>${escapeHtml(slide.left.title)}</h3>
            <ul>
                ${leftItems}
            </ul>
        </div>
        <div>
            <h3>${escapeHtml(slide.right.title)}</h3>
            <ul>
                ${rightItems}
            </ul>
        </div>
    </div>
</div>`;
}

function generateQuoteSlide(slide, activeClass) {
  return `<div class="slide${activeClass}">
    <div class="quote-slide">
        <p class="quote-text">"${escapeHtml(slide.quote)}"</p>
        <p class="quote-author">— ${escapeHtml(slide.author)}</p>
    </div>
</div>`;
}

function generateNumberedSlide(slide, activeClass) {
  const steps = slide.steps
    .map(step => `<div style="margin-bottom: 2rem;">
            <span class="number-badge">${escapeHtml(step.number)}</span>
            <h3 style="display: inline;">${escapeHtml(step.title)}</h3>
            <p style="margin-top: 0.5rem; margin-left: 4rem;">${escapeHtml(step.description)}</p>
        </div>`)
    .join('\n        ');
  return `<div class="slide${activeClass}">
    <h2>${escapeHtml(slide.heading)}</h2>
    <div style="margin-top: 2rem;">
        ${steps}
    </div>
</div>`;
}

function generateConclusionSlide(slide, activeClass) {
  return `<div class="slide${activeClass}">
    <div style="text-align: center; display: flex; flex-direction: column; justify-content: center; height: 100%;">
        <h2>${escapeHtml(slide.heading)}</h2>
        <p style="font-size: clamp(1.3rem, 3vw, 2rem); margin-top: 2rem; line-height: 1.8;">
            ${escapeHtml(slide.message)}
        </p>
        ${slide.submessage ? `<p style="font-size: clamp(1.1rem, 2.5vw, 1.6rem); margin-top: 1.5rem; opacity: 0.7;">
            ${escapeHtml(slide.submessage)}
        </p>` : ''}
    </div>
</div>`;
}

function generateDefaultSlide(slide, activeClass) {
  return `<div class="slide${activeClass}">
    <h2>${escapeHtml(slide.heading || 'Slide')}</h2>
    <p>Content type not supported: ${slide.type}</p>
</div>`;
}

function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { applyTemplate };
}
if (typeof window !== 'undefined') {
  window.applyTemplate = applyTemplate;
}
