# Specification

## Summary
**Goal:** Add a publish-ready “Industries We Serve” page, link it from the site navigation, and capture leads via a dedicated industry form.

**Planned changes:**
- Create a new standalone Industries page route that renders the full user-provided content in the required order: Hero (with “Request Founder Blueprint” CTA), Our Focus, four structured industry blocks (each with “Common Challenges”, “What We Implement”, “Outcome”), consistency section, “Is This Right for You?” section, lead generation section with form, final CTA block with “Book Strategy Call”, and a copyable “Caffeine AI prompt” block.
- Update top navigation so “Industries” routes to the new Industries page (instead of a homepage anchor) while preserving existing behavior for other links (e.g., CONTROL™) and homepage hash navigation.
- Implement the Industries lead-generation form with the specified fields, validation/error states consistent with existing lead form UX, and submission via the existing frontend submission hook to the backend addLead API (including additional fields packaged into the lead message payload).
- Wire CTAs: Hero “Request Founder Blueprint” smoothly scrolls to the on-page lead form section (accounting for fixed nav), and “Book Strategy Call” triggers the existing strategy call action used elsewhere.

**User-visible outcome:** Users can navigate to a dedicated Industries page, read the structured industry content, copy the included Caffeine AI prompt, and submit an “Request Industry Blueprint” lead form; the page CTAs scroll or trigger the existing strategy-call action as expected.
