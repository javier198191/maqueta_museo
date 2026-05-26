---
name: Caribbean Creative
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#3e4850'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#6e7881'
  outline-variant: '#bdc8d1'
  surface-tint: '#00658d'
  primary: '#00658d'
  on-primary: '#ffffff'
  primary-container: '#00a3e0'
  on-primary-container: '#00354b'
  inverse-primary: '#81cfff'
  secondary: '#a73a00'
  on-secondary: '#ffffff'
  secondary-container: '#fd661d'
  on-secondary-container: '#571a00'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#d0a700'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6e7ff'
  primary-fixed-dim: '#81cfff'
  on-primary-fixed: '#001e2d'
  on-primary-fixed-variant: '#004c6b'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#ffe089'
  tertiary-fixed-dim: '#f0c100'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-margin: 32px
  gutter: 24px
---

## Brand & Style
The design system is built on the concept of "The Modern Playground of Art." It captures the electric spirit of Barranquilla and the Caribbean coast through a lens of sophisticated minimalism. The UI prioritizes high legibility and tactile delight, ensuring that children feel invited to explore "Mi Obra Maestra" without the clutter of traditional educational software. 

The style is a hybrid of **Minimalism** and **Tactile** design. It utilizes heavy white space to let the vibrant colors pop, while using physical metaphors—like "squishy" buttons and floating cards—to make the digital experience feel like a tangible art kit. The atmosphere is energetic, optimistic, and deeply rooted in local culture, treating cultural symbols not as noise, but as joyful "Easter Eggs" hidden within a clean, functional interface.

## Colors
This design system uses a high-vibrancy palette that mirrors the Caribbean sky and the heat of the coast. 

- **Caribbean Blue (#00A3E0):** The primary driver for navigation, key actions, and trust.
- **Energetic Orange (#FF671F):** Reserved for high-interaction moments, "Success" states, and creative triggers.
- **Clean White (#FFFFFF):** Used as the primary surface color to maintain a minimalist, gallery-like feel.
- **Mango Yellow (#FFCD00):** An accent color used sparingly for "Easter Eggs" and secondary highlights.

All interactions should maintain high contrast to ensure accessibility for younger users. Backgrounds are primarily white or very light grey to keep the focus on the colorful artwork and UI elements.

## Typography
The design system utilizes **Plus Jakarta Sans** for its friendly, open apertures and optimistic personality. The geometric shapes of the letters make it highly readable for children who are developing their literacy skills. 

Headlines use a "Super-Bold" weight to create a strong visual hierarchy and a sense of fun. Body text is kept generous in size (never below 16px) with increased line height to prevent the interface from feeling "cramped" or overly academic.

## Layout & Spacing
The design system follows a **Fluid Grid** model with an emphasis on "Safe Zones." Because the target audience is children, touch targets are oversized, and spacing between elements is increased to prevent accidental clicks.

The rhythm is based on a 12-column grid for desktop and a 4-column grid for mobile, with a significant 32px outer margin. Elements are grouped in "islands" (cards) that use the `lg` spacing token to create a sense of breathability and calm within an otherwise energetic color palette.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows**. This design system avoids harsh, black shadows, opting instead for "Colored Glows." 

Shadows should use a low-opacity version of the Primary or Secondary color (e.g., a 10% Caribbean Blue shadow) to make cards feel like they are floating above the surface. This creates a soft, approachable 3D effect that mimics physical paper or clay. High-priority buttons use a double-layered shadow to create a "pressable" tactile appearance, giving users immediate feedback that the element is interactive.

## Shapes
The shape language is defined by extreme roundedness. Every corner is a "Safe Corner." 

The design system uses **Pill-shaped (3)** geometry. Standard cards use a 2rem (32px) radius, while buttons and chips are fully rounded (pill). This softness balances the high-energy colors, making the UI feel friendly and non-threatening. Icons are always enclosed in circular or squircle containers to maintain this consistent visual rhythm.

## Components
Consistent component styling ensures the interface is intuitive for kids:

- **Buttons:** Large, "chunky" pill shapes. They use a solid fill of Caribbean Blue or Energetic Orange. On hover or tap, they should slightly enlarge (1.05x scale) to provide a responsive, toy-like feel.
- **Cards:** White surfaces with a soft, colored ambient shadow. These contain "Easter Eggs" in the background—a stylized, low-opacity Cayena flower in the corner or a Marimonda pattern—to add local flavor without distracting from the content.
- **Chips:** Small, vibrant pills used for art categories (e.g., "Pintura," "Escultura").
- **Interactive Icons:** Playful, thick-stroke line icons with rounded terminals. Occasionally, icons can be replaced by "Stickers"—colorful, illustrated versions of local symbols.
- **Input Fields:** Large, rounded text areas with thick borders (2px) that change from light grey to Caribbean Blue when active.
- **The "Joy" Bar:** A custom progress bar for creative tasks that fills with a gradient from Caribbean Blue to Energetic Orange, ending with a small animated Cayena flower "sparkle" when the task is complete.