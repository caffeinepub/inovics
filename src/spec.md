# Specification

## Summary
**Goal:** Automatically rotate the homepage main hero banner carousel every 5 seconds, looping continuously while respecting reduced-motion preferences.

**Planned changes:**
- Update the existing `HeroSlider` carousel to auto-advance to the next slide every 5000ms when visible.
- Loop from the last slide back to the first slide on the next auto-advance.
- Ensure the auto-advance timer is cleaned up on component unmount to prevent lingering intervals after navigation.
- Disable auto-advance when the user has `prefers-reduced-motion` enabled (manual slide navigation remains available).

**User-visible outcome:** On the homepage, the hero banner automatically cycles to the next banner every 5 seconds and loops back to the first banner after the last; users with reduced-motion enabled will not see automatic slide movement.
