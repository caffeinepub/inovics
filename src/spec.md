# Specification

## Summary
**Goal:** Convert the homepage hero into a scrollable multi-banner slider with distinct messaging and correctly wired CTAs.

**Planned changes:**
- Replace the current static `HeroSection` on route `/` with a slider/carousel that supports swipe/drag on touch devices and visible navigation controls on desktop while retaining the full-viewport hero layout and existing fixed TopNav behavior.
- Add 4 hero slides using the provided English copy, each containing a headline, subheadline, supporting lines, and 1–2 CTA buttons exactly as given.
- Wire CTAs to existing behaviors/routes: strategy-call CTAs trigger `bookStrategyCall`, “Explore the CONTROL™ Framework” scrolls to `#framework`, and other CTAs route to `/process` or `/contact` and scroll to top.
- Add accessibility and motion-safe behavior: keyboard left/right navigation, ARIA labels for controls/indicators, visible focus styles, and respect `prefers-reduced-motion` (avoid motion-heavy transitions and disable autoplay if present).

**User-visible outcome:** Visitors to the homepage can swipe or click through four distinct hero banners, and each CTA reliably triggers the correct existing booking, scroll-to-section, or in-app navigation behavior with accessible controls.
