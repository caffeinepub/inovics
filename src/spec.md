# Specification

## Summary
**Goal:** Remove the standalone “Strategy Session” nav entry and ensure the Strategy Session page opens via the “Book Strategy Call” CTA from anywhere in the site.

**Planned changes:**
- Remove the “Strategy Session” link from top navigation (desktop and mobile) so it no longer appears as a separate menu item.
- Update the shared “Book Strategy Call” (and other CTAs using the same booking handler) to navigate client-side to the internal route `/strategy-session` without a full page reload.
- Ensure navigation to `/strategy-session` scrolls the page to the top, consistent with other in-app route changes.

**User-visible outcome:** Users won’t see a separate “Strategy Session” link in the navigation, but clicking “Book Strategy Call” (and related booking CTAs) from any page will open the Strategy Session page instantly within the app.
