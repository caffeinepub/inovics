# Specification

## Summary
**Goal:** Improve the homepage CONTROL™ framework step visuals by replacing the seven step images with higher-quality, more colourful, text-free images that remain relevant to each step.

**Planned changes:**
- Create updated, more colourful, text-free versions of the seven CONTROL™ framework step images (Clarify, Organize, Normalize, Transform, Report, Optimize, Lead) under `/assets/generated/`.
- Update `frontend/src/components/sections/ControlFrameworkSection.tsx` to reference the new image filenames for all seven steps, keeping the existing layout/aspect ratio/hover behavior unchanged.

**User-visible outcome:** The CONTROL™ framework cards on the homepage display new, vibrant, text-free images that better match each step, with no broken image links.
