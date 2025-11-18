# TradeX Premium Fintech Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Premium fintech aesthetic inspired by Stripe's minimalism, Revolut's boldness, and luxury brand websites, with a unique black & gold identity.

## Core Brand Identity

### Color System
- **Background**: Pure black (#000000)
- **Primary Accent**: Metallic gold gradient (#D4AF37 → #F7E27A)
- **Text**: 
  - Headings: Gold gradient
  - Body: White/light gray (#EDEDED)
  - Borders/Dividers: Gold at 20% opacity

### Design Direction
Futuristic fintech meets premium luxury - think high-end financial institution with modern tech aesthetic. Rounded, minimal components with neon-gold glow effects.

## Typography System
- **Headings**: Large, bold, gold gradient treatment
- **Subheadings**: Medium weight, white/gold
- **Body**: Light gray, high readability
- **Numbers/Stats**: Extra bold, gold accent for emphasis

## Layout & Spacing
- **Container**: Maximum width 1400px for content, full-width for backgrounds
- **Section Padding**: Generous vertical spacing (100-150px desktop, 60-80px mobile)
- **Card Spacing**: 24-32px gaps between elements
- **Component Padding**: 32-48px internal padding for cards

## Component Library

### Cards
- Black background with subtle gold border (1px, 20% opacity)
- Rounded corners (12-16px)
- Hover state: Gold glow effect (box-shadow with gold)
- Tilt on hover (3D transform)
- Glass-morphism effect with backdrop blur on overlays

### Buttons
- Primary: Gold gradient background, black text
- Secondary: Black background, gold border, gold text
- Hover: Intensified glow, slight scale up
- When on images: Blurred background (backdrop-blur)

### Icons
- Custom gold line icons throughout
- 2px stroke weight
- Consistent size (24-32px standard, 48-64px for features)

### Navigation
- Fixed header, shrinks on scroll
- Black background with gold underline on active
- Mobile: Slide-in from right with gold glow border

## Page-Specific Layouts

### Landing Page (5-6 Sections)
1. **Hero**: Full viewport with floating gold particles background, centered content, animated upward arrow icon (blue→gold), two CTA buttons with glow
2. **Market Challenge**: 4-card grid showcasing pain points, icons + titles + descriptions
3. **Market Opportunity**: Stats section with animated counters (278M, 11.5M, Rp 6T), 3-4 column layout
4. **9-in-1 Ecosystem**: Feature showcase grid, icons with descriptions
5. **Social Proof/Comparison**: Competitor comparison table
6. **Final CTA**: Dark blur background, centered call-to-action

### About Page (4-5 Sections)
- Mission/Vision/Values cards in grid
- "Why Choose TradeX" feature blocks
- Team section: Circular portraits with gold rim, black backgrounds
- Journey timeline: Horizontal with animated glowing dots on gold line

### Business Model Page
- Business Model Canvas: 9-component grid with accordion interactions
- Full canvas table view
- Differentiators section with comparison metrics
- Sticky sidebar navigation for sections

### Finance Page
- Revenue streams: Multi-column breakdown with percentages
- 90-day projection: Month-by-month cards with metrics
- Investment scenarios: Two-column comparison (Conservative vs Base)
- Use of Funds: Pie chart or horizontal bars in gold
- Exit opportunities: 3-card timeline

### Contact Page
- Split layout: Form on left, info on right
- Black marble texture background
- Form with gold outline, minimal fields
- Location map integration

## Animation Strategy

### Scroll-Triggered (GSAP ScrollTrigger)
- Fade-up for text blocks
- Slide-in for cards (staggered)
- Number counting for statistics
- Timeline progression animation

### Hover Interactions
- Card tilt (subtle 3D)
- Glow intensification
- Icon pulse on featured items

### Background Elements
- Floating gold particles (parallax)
- Subtle gradient shifts
- Low-opacity 3D floating coins on finance page

### Hero Animations
- Text fade-up sequence
- Arrow icon animation (color shift)
- Parallax scroll on background

## Images

### Hero Section
- **Large hero image**: Black background with floating gold particle effects, abstract financial lines with glow
- Overlay with dark gradient for text legibility

### Icons & Graphics
- Gold line icons for all feature sections
- Consistent stroke weight and style
- Mission, Vision, Values, 9-in-1 ecosystem, Revenue streams

### Team Photos
- Black background portraits with gold rim lighting effect
- Circular frames with gold gradient border

### Charts
- Gold line charts on black background
- Glow effect on data points
- Hover states reveal detailed information

## Responsive Behavior
- Desktop: Multi-column grids, parallax effects active
- Tablet: 2-column max, reduced animations
- Mobile: Single column stack, slide-in menu, essential animations only

## Key Principles
- **Premium Quality**: Every element should feel expensive and well-crafted
- **Smooth Performance**: All animations 60fps, optimized
- **Content Hierarchy**: Clear visual flow from headlines → features → CTA
- **Consistency**: Gold accent used strategically, not overwhelming
- **Breathing Room**: Generous whitespace to enhance luxury feel