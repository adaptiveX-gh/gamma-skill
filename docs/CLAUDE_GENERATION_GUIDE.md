# Quick Generation Guide for Claude

## When a user requests a presentation, follow this workflow:

### Step 1: Extract Parameters
- `[TOPIC]` - Main subject
- `[THEME]` - Dark Tech | Corporate | Minimal | Playful
- `[SLIDE_COUNT]` - Number of slides (3-10)

### Step 2: Plan Slide Structure

**For 5 slides:**
1. Title slide (center-content)
2. Context/Problem (bullet points)
3. Solution (grid cards)
4. Benefits (two-column or cards)
5. Call to Action (center-content)

**For 7 slides:**
1. Title slide
2. Problem/Context
3. Solution Overview
4. Features (grid cards)
5. Benefits (grid cards)
6. Quote or Key Insight
7. Next Steps / CTA

**For 10 slides:**
1. Title
2. Agenda
3. Problem Statement
4. Current Situation
5. Proposed Solution
6. Key Features (grid)
7. Benefits (grid)
8. Implementation
9. Quote/Testimonial
10. Call to Action

### Step 3: Match Content to Theme

**Dark Tech** - Use for:
- Technology topics
- Developer tools
- AI/ML content
- Startups
- Innovation
Emojis: 🚀💻⚡🔧🎯💡🌐🔮

**Corporate** - Use for:
- Business presentations
- Financial reports
- Strategy meetings
- Professional services
Emojis: 📊💼📈🎯📋✅💰🏆

**Minimal** - Use for:
- Design portfolios
- Product launches
- Clean presentations
- Simple messages
Emojis: ✓→•✦✧ (use sparingly)

**Playful** - Use for:
- Marketing campaigns
- Creative pitches
- Fun products
- Events
Emojis: 🎨🎉✨🌟🎊🌈💫🦄

### Step 4: Use Layout Components

```html
<!-- TITLE SLIDE (Always first) -->
<div class="slide active">
    <div class="center-content">
        <div class="emoji-icon">[EMOJI]</div>
        <h1>[Main Title]</h1>
        <p>[Subtitle]</p>
    </div>
</div>

<!-- BULLET POINTS -->
<div class="slide">
    <h2>[Section Title]</h2>
    <ul>
        <li>[Point 1]</li>
        <li>[Point 2]</li>
        <li>[Point 3]</li>
    </ul>
</div>

<!-- 2x2 GRID CARDS -->
<div class="slide">
    <h2>[Section Title]</h2>
    <div class="grid-2x2">
        <div class="card">
            <div class="emoji-icon">[EMOJI]</div>
            <h3>[Card Title]</h3>
            <p>[Description]</p>
        </div>
        <!-- Repeat for 4 cards -->
    </div>
</div>

<!-- 3 COLUMN CARDS -->
<div class="slide">
    <h2>[Section Title]</h2>
    <div class="grid-3col">
        <div class="card">
            <div class="emoji-icon">[EMOJI]</div>
            <h3>[Feature]</h3>
            <p>[Details]</p>
        </div>
        <!-- Repeat for 3 cards -->
    </div>
</div>

<!-- TWO COLUMN -->
<div class="slide">
    <div class="two-column">
        <div>
            <h2>[Title]</h2>
            <p>[Content]</p>
            <ul>
                <li>[Point]</li>
            </ul>
        </div>
        <div>
            <div class="image-placeholder">Image: [Description]</div>
        </div>
    </div>
</div>

<!-- QUOTE -->
<div class="slide">
    <div class="quote-container">
        <div class="quote-text">"[Inspiring Quote]"</div>
        <div class="quote-author">— [Author]</div>
    </div>
</div>

<!-- IMAGE + TEXT -->
<div class="slide">
    <h2>[Title]</h2>
    <div class="image-placeholder">Image: [Description]</div>
    <p>[Caption or explanation]</p>
</div>
```

### Step 5: Content Writing Best Practices

**DO:**
- Keep text concise (5-7 words per bullet max)
- Use active voice
- Lead with benefits
- Include specific numbers/data when relevant
- Vary slide layouts
- Use emojis that reinforce meaning
- Make last slide actionable

**DON'T:**
- Write paragraphs (break into bullets)
- Use same layout twice in a row
- Overuse emojis (1-2 per slide max)
- Forget the title slide
- Skip the call to action
- Use generic placeholder text

### Step 6: Output Format

**Output ONLY the complete HTML**, starting with:
```html
<!DOCTYPE html>
<html>
```

And ending with:
```html
</html>
```

**Do NOT include:**
- Explanations
- Comments about the code
- Markdown formatting
- Instructions to the user

### Common Patterns by Topic

**Technology Product:**
- Slide 1: Product name + tagline
- Slide 2: The problem (bullets)
- Slide 3: Your solution (2-column)
- Slide 4: Features (3-column cards)
- Slide 5: Benefits (2x2 cards)
- Slide 6: Quote from user
- Slide 7: Get started CTA

**Business Strategy:**
- Slide 1: Strategy name
- Slide 2: Current situation
- Slide 3: Objectives (bullets)
- Slide 4: Strategic pillars (3-column)
- Slide 5: Key initiatives (2x2)
- Slide 6: Timeline
- Slide 7: Success metrics
- Slide 8: Next steps

**Educational Content:**
- Slide 1: Topic title
- Slide 2: Learning objectives
- Slide 3: Concept overview
- Slide 4: Key principles (cards)
- Slide 5: Real-world example
- Slide 6: Common mistakes
- Slide 7: Key takeaways

**Marketing Campaign:**
- Slide 1: Campaign name
- Slide 2: Target audience
- Slide 3: Core message
- Slide 4: Campaign elements (cards)
- Slide 5: Channels (2x2)
- Slide 6: Creative examples
- Slide 7: Success metrics
- Slide 8: Launch timeline

## Quick Emoji Reference

### Technology
🚀 Launch, speed, innovation
💻 Code, development
⚡ Performance, energy
🔧 Tools, building
🎯 Focus, targeting
💡 Ideas, insights
🌐 Network, global
🔮 Future, prediction
🤖 AI, automation
📱 Mobile, apps

### Business
📊 Data, analytics
💼 Professional, work
📈 Growth, trends
🎯 Goals, targets
📋 Planning, lists
✅ Success, completion
💰 Finance, revenue
🏆 Achievement, winning
🔑 Key points
⭐ Quality, premium

### Design/Minimal
✓ Checkmark
→ Direction, next
• Bullet point
✦ Accent, highlight
✧ Secondary accent

### Creative/Playful
🎨 Creativity, design
🎉 Celebration
✨ Magic, special
🌟 Star, featured
🎊 Party, fun
🌈 Diversity, color
💫 Sparkle, wow
🦄 Unique, rare

## Theme-Specific Tips

**Dark Tech:**
- Use gradient text effects (h1 automatically has gradient)
- Emphasize innovation and future
- Include technical terms
- Show data and metrics

**Corporate:**
- Professional, formal tone
- Include ROI and business value
- Use data visualization language
- Clear, structured content

**Minimal:**
- Less is more (minimal text)
- Clean, simple language
- Focus on key messages
- Generous whitespace

**Playful:**
- Friendly, conversational tone
- Use humor where appropriate
- Bright, optimistic language
- Engaging, fun emojis

## Error Prevention Checklist

Before outputting, verify:
- [ ] First slide has `class="slide active"`
- [ ] All other slides have only `class="slide"`
- [ ] Exactly [SLIDE_COUNT] slides generated
- [ ] All HTML tags properly closed
- [ ] Emojis wrapped in `<div class="emoji-icon">`
- [ ] [TOPIC] integrated throughout content
- [ ] [THEME] will be detected by JavaScript (no manual theme code needed)
- [ ] Varied layouts used
- [ ] Last slide is a CTA or summary
- [ ] No markdown code blocks in output

## Example Generation Process

**User Input:**
```
topic: "AI-Powered Email Assistant"
theme: Dark Tech
slide_count: 6
```

**Your Process:**
1. Theme = Dark Tech → Use tech emojis, innovation language
2. 6 slides → Title, Problem, Solution, Features, Benefits, CTA
3. Pick layouts: center, bullets, 2-col, 3-col cards, 2x2 cards, center
4. Write concise, tech-focused content
5. Output complete HTML only

**Output:**
Complete HTML presentation with:
- Dark theme variables (auto-applied by JS)
- 6 slides with varied layouts
- Tech-focused emojis and language
- Concise, impactful content
- Proper structure and closing tags

---

**Remember**: The JavaScript handles ALL theme styling, animations, and navigation. You only need to focus on creating well-structured, engaging content using the layout components. Output ONLY the HTML - no explanations!
