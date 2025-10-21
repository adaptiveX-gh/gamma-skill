---
name: gamma-presentation
description: Generate professional presentation content in JSON format. The system applies visual templates automatically.
license: Complete terms in LICENSE.txt
metadata:
  outputType: json
  streaming: false
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

# Gamma Presentation - Content Generator

## Overview

Generate presentation CONTENT only - not HTML/CSS. The system will automatically apply professional templates with responsive design and animations.

## Your Task

Create structured slide content in JSON format based on the topic. Focus on:
- Clear, concise messaging
- Appropriate content for each slide type
- Theme-appropriate tone and emojis
- Logical flow from introduction to conclusion

## Output Format

Output ONLY valid JSON (no markdown, no explanations):

```json
{
  "title": "Presentation Title",
  "subtitle": "Optional subtitle",
  "theme": "dark-tech|corporate|minimal|playful",
  "slides": [
    {
      "type": "title",
      "emoji": "🚀",
      "heading": "Main Title",
      "subheading": "Supporting text"
    },
    {
      "type": "bullets",
      "heading": "Section Title",
      "items": [
        "First key point",
        "Second key point",
        "Third key point"
      ]
    },
    {
      "type": "grid-2x2",
      "heading": "Four Key Areas",
      "cards": [
        {"title": "Card 1", "content": "Description"},
        {"title": "Card 2", "content": "Description"},
        {"title": "Card 3", "content": "Description"},
        {"title": "Card 4", "content": "Description"}
      ]
    },
    {
      "type": "grid-3col",
      "heading": "Three Pillars",
      "cards": [
        {"title": "First", "content": "Details"},
        {"title": "Second", "content": "Details"},
        {"title": "Third", "content": "Details"}
      ]
    },
    {
      "type": "two-column",
      "heading": "Comparison",
      "left": {
        "title": "Left Side",
        "items": ["Point 1", "Point 2", "Point 3"]
      },
      "right": {
        "title": "Right Side",
        "items": ["Point 1", "Point 2", "Point 3"]
      }
    },
    {
      "type": "quote",
      "quote": "Inspirational or relevant quote here",
      "author": "Quote Author or Source"
    },
    {
      "type": "numbered",
      "heading": "Step-by-Step Process",
      "steps": [
        {"number": "01", "title": "First Step", "description": "What to do"},
        {"number": "02", "title": "Second Step", "description": "What to do"},
        {"number": "03", "title": "Third Step", "description": "What to do"}
      ]
    },
    {
      "type": "conclusion",
      "heading": "Key Takeaway",
      "message": "Main call-to-action or summary",
      "submessage": "Supporting text or contact info"
    }
  ]
}
```

## Slide Types Reference

### title
Title slide with emoji icon
- `emoji`: Single emoji (theme-appropriate)
- `heading`: Main title
- `subheading`: Subtitle or tagline

### bullets
Bullet point list
- `heading`: Section title
- `items`: Array of 3-6 bullet points

### grid-2x2
2x2 card grid layout
- `heading`: Section title
- `cards`: Array of 4 objects with `title` and `content`

### grid-3col
3-column card layout
- `heading`: Section title
- `cards`: Array of 3 objects with `title` and `content`

### two-column
Side-by-side comparison
- `heading`: Section title
- `left`: Object with `title` and `items` array
- `right`: Object with `title` and `items` array

### quote
Centered inspirational quote
- `quote`: The quote text
- `author`: Attribution

### numbered
Numbered steps or sections
- `heading`: Section title
- `steps`: Array of objects with `number`, `title`, `description`

### conclusion
Final call-to-action slide
- `heading`: Conclusion title
- `message`: Main takeaway
- `submessage`: Optional supporting text

## Theme-Appropriate Content

### Dark Tech
**Tone**: Technical, innovative, forward-thinking
**Emojis**: 🚀 🤖 💻 ⚡ 🔮 🎯 💎 🌐 🔬 ⚙️
**Best for**: Tech products, innovation, software, AI/ML

### Corporate
**Tone**: Professional, authoritative, data-driven
**Emojis**: 📊 💼 📈 🎯 ⚙️ 🏆 💡 📋 📅 🤝
**Best for**: Business, finance, reports, strategy

### Minimal
**Tone**: Elegant, simple, clarity-focused
**Emojis**: ✓ → • ○ ◆ ✦ ∴ ← ↗ ✨
**Best for**: Design, philosophy, clean messaging

### Playful
**Tone**: Energetic, fun, creative, engaging
**Emojis**: 🎨 🎉 🌈 ⭐ 🎪 🎭 🎸 🎮 🎲 🎈
**Best for**: Creative, education, entertainment

## Content Guidelines by Slide Count

### 3-4 Slides
1. Title slide
2. Main content (bullets or grid)
3. Conclusion

### 5-7 Slides (Recommended)
1. Title slide
2. Introduction/Problem
3. Solution/Approach (grid or two-column)
4. Benefits/Features (bullets or numbered)
5. Quote or case study (optional)
6. Conclusion

### 8-12 Slides
1. Title slide
2. Agenda/Overview
3. Background/Context
4-6. Main content (varied layouts)
7. Supporting evidence (quote)
8. Summary
9. Next steps/Call-to-action

## Instructions

1. **Analyze the topic** and determine appropriate structure
2. **Select slide types** that best convey the information
3. **Vary layouts** to maintain visual interest
4. **Match tone** to the selected theme
5. **Keep text concise** - 5-7 words per bullet, 1-2 sentences for descriptions
6. **Use theme-appropriate emojis** from the lists above
7. **Output valid JSON** - no markdown code blocks, no explanations

## Example Output

For topic "AI in Healthcare" with Dark Tech theme and 5 slides:

```json
{
  "title": "AI Revolution in Healthcare",
  "subtitle": "Transforming Patient Care Through Intelligence",
  "theme": "dark-tech",
  "slides": [
    {
      "type": "title",
      "emoji": "🏥",
      "heading": "AI Revolution in Healthcare",
      "subheading": "Transforming Patient Care Through Intelligence"
    },
    {
      "type": "bullets",
      "heading": "The Challenge",
      "items": [
        "Rising healthcare costs globally",
        "Shortage of medical professionals",
        "Delayed diagnosis and treatment",
        "Administrative burden on staff"
      ]
    },
    {
      "type": "grid-2x2",
      "heading": "AI-Powered Solutions",
      "cards": [
        {"title": "Diagnostics", "content": "ML models detect diseases earlier with 95% accuracy"},
        {"title": "Personalization", "content": "Tailored treatment plans based on patient data"},
        {"title": "Automation", "content": "Reduce admin tasks by 60% freeing staff time"},
        {"title": "Prediction", "content": "Forecast patient outcomes and prevent complications"}
      ]
    },
    {
      "type": "numbered",
      "heading": "Implementation Roadmap",
      "steps": [
        {"number": "01", "title": "Data Integration", "description": "Consolidate patient records into unified system"},
        {"number": "02", "title": "Model Training", "description": "Train AI on anonymized historical data"},
        {"number": "03", "title": "Clinical Validation", "description": "Test with medical professionals in controlled trials"}
      ]
    },
    {
      "type": "conclusion",
      "heading": "The Future is Now",
      "message": "Join the healthcare AI revolution",
      "submessage": "Transform patient outcomes with intelligent systems"
    }
  ]
}
```

Remember: Output ONLY the JSON. No code blocks, no explanations, no additional text.
