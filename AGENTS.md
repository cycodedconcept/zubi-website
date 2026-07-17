## Project Update Instructions for Codex

You are working on the EVADE website/frontend. Your task is to improve the homepage visuals, remove unwanted design elements, replace weak images/icons, and add smooth animations across the pages.

Follow these instructions carefully and do not change unrelated business logic, routing, API calls, authentication, or backend-related code unless it is directly required for the UI changes below.

---

## Main Objective

Improve the visual quality, brand feel, and interactivity of the website by:

1. Cleaning up the EVADE section on the homepage.
2. Replacing weak or unsuitable images with better brand-appropriate visuals.
3. Fixing blurry icons and images across the site.
4. Adding clean, modern animations so the pages no longer feel static.
5. Maintaining responsiveness, performance, and accessibility.

---

## Section 1: EVADE Section on Homepage

Locate the homepage section where there are two cards titled:

- The Problem
- Our Mission

### Required Changes

#### 1. Remove background text from both cards

In the first card titled **The Problem**, remove the blue background text that says or represents:

- `the problem`

In the second card titled **Our Mission**, remove the blue background text that says or represents:

- `the evade answer`

These background texts are currently blue and are making the cards look noisy. Remove only the decorative/background text, not the main card title or meaningful body content.

### Expected Result

The two cards should look cleaner, more professional, and easier to read.

Do not remove the actual visible headings:

- The Problem
- Our Mission

Only remove the unnecessary large/decorative blue background text inside or behind the cards.

---

## Section 2: Replace Weak Image in EVADE Section

The current image used in the EVADE section is not strong enough for the brand.

### Required Changes

Replace the image in that section with a better image that fits the EVADE brand.

The new image should visually communicate one or more of the following:

- Vehicle safety
- Emergency response
- Smart mobility
- Accident detection
- Connected vehicle technology
- Road safety
- Rescue response
- Automotive protection

### Image Guidelines

Use a high-quality, sharp, modern image.

The image should not look generic, stretched, pixelated, or blurry.

Prefer an image style that fits a serious vehicle safety/emergency technology brand.

If the project already has suitable images inside the assets/public folder, use the best available one.

If there is no suitable existing image, add a clear TODO comment showing where the image should be replaced, and use the best temporary image available in the project assets.

### Expected Result

The EVADE section should look more premium, trustworthy, and aligned with an emergency vehicle safety product.

---

## Section 3: How It Works Section Icons

On the homepage, locate the **How It Works** section.

The icons in this section are currently blurry.

### Required Changes

Replace or improve all blurry icons in the How It Works section.

Use sharp, scalable icons.

Preferred options:

- SVG icons
- Existing icon library already installed in the project
- Lucide React, React Icons, Heroicons, or similar only if already installed
- Clean custom SVGs if no icon library exists

Do not use low-resolution PNG/JPG icons.

### Expected Result

Icons should look crisp on desktop, tablet, and mobile screens.

---

## Section 4: Audit All Images and Icons

Check all pages and major sections for blurry or low-quality visuals.

### Required Checks

Inspect:

- Homepage images
- Hero section image
- EVADE section image
- How It Works icons
- Feature icons
- Benefit icons
- Footer icons
- Any decorative graphics
- Mobile view images/icons

### Required Fixes

For any image or icon that appears blurry:

1. Replace it with a sharper version if available.
2. Convert to SVG where possible.
3. Use CSS sizing properly to prevent stretching.
4. Add proper `object-fit` values for images.
5. Avoid forcing small images into large containers.
6. Use responsive image behavior.

### CSS/Image Rules

Use:

```css
img {
  max-width: 100%;
  height: auto;
}
```

For image containers, use appropriate values like:

```css
object-fit: cover;
object-position: center;
```

Avoid stretching images using both fixed width and fixed height without `object-fit`.

---

## Section 5: Add Modern Animations

The pages currently feel too static. Add clean, professional animations across the website.

### Required Animation Style

Animations should be:

- Smooth
- Modern
- Subtle
- Professional
- Not distracting
- Mobile-friendly
- Performance-friendly

### Suggested Animations

Add animations such as:

- Fade in on scroll
- Slide up on scroll
- Soft scale on hover for cards
- Smooth icon reveal
- Hero section entrance animation
- Button hover animation
- Card hover elevation
- Image reveal animation
- Staggered animations for card grids

### Where to Add Animations

Add animations to:

- Hero section
- EVADE Problem/Mission cards
- How It Works section
- Feature cards
- CTA sections
- Important content blocks
- Images
- Buttons

### Implementation Preference

First check the project dependencies.

If the project already uses an animation library such as:

- Framer Motion
- GSAP
- AOS

then use the existing library.

If no animation library exists, do not install a new package unless necessary. Prefer lightweight CSS animations and Intersection Observer.

### Animation Requirements

Animations must not break layout or cause content shift.

Use reusable animation classes or reusable animation components where possible.

Example CSS animation approach:

```css
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

If using React, create a reusable reveal component if appropriate.

Example:

```jsx
<Reveal>
  <section>...</section>
</Reveal>
```

---

## Section 6: Responsiveness

After making the changes, test the UI across:

- Desktop
- Tablet
- Mobile

### Required Checks

Ensure:

- Cards do not overflow.
- Text remains readable.
- Images are not stretched.
- Icons remain sharp.
- Animations do not feel too heavy on mobile.
- The homepage still loads smoothly.
- No section spacing is broken.

---

## Section 7: Accessibility

Ensure all images have meaningful `alt` text.

Examples:

```jsx
alt="EVADE smart vehicle safety and emergency response system"
alt="Emergency response vehicle safety technology"
```

For decorative icons/images, use empty alt text if appropriate:

```jsx
alt=""
```

Do not rely only on animation to communicate important information.

---

## Section 8: Performance

Do not make the site heavier unnecessarily.

### Required Performance Rules

- Avoid large uncompressed images.
- Use optimized image formats where available.
- Prefer SVG icons over raster icons.
- Avoid excessive animations.
- Avoid adding heavy libraries unless already installed or clearly necessary.
- Keep animation duration reasonable.

Recommended animation duration:

```text
0.4s - 0.8s
```

---

## Section 9: Code Quality

Keep the code clean and maintainable.

### Required Code Rules

- Follow the existing project structure.
- Reuse existing components where possible.
- Do not duplicate large blocks of code.
- Keep styling consistent with the current brand.
- Use existing color variables/theme values if available.
- Avoid hardcoding repeated values if the project has a design system.
- Do not remove existing content unless specifically instructed.
- Do not rename components unnecessarily.
- Do not change routes or data structure unless required.

---

## Section 10: Acceptance Criteria

The task is complete when:

1. The blue decorative background text has been removed from both EVADE cards.
2. The EVADE section image has been replaced or improved.
3. The How It Works icons are no longer blurry.
4. All other visibly blurry images/icons have been checked and improved where possible.
5. Animations have been added to make pages feel more modern and interactive.
6. The website remains responsive on mobile, tablet, and desktop.
7. No existing page, section, or functionality is broken.
8. The code is clean and follows the existing project style.
9. Images have appropriate alt text.
10. The final UI feels more polished, premium, and aligned with the EVADE brand.

---

## Final Deliverables

After completing the task, provide a short summary containing:

- Files changed
- Sections updated
- Images/icons replaced
- Animation approach used
- Any assets that still need final replacement
- Any issues or limitations noticed

Do not mark the work complete until you have checked the affected pages visually.
