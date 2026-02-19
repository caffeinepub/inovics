# Specification

## Summary
**Goal:** Add a clear “Sign out” action on `/admin` that logs the current user out for both Internet Identity and credential-based admin login modes, returning to the admin sign-in UI.

**Planned changes:**
- Add a visible “Sign out” control on `/admin` for Internet Identity-authenticated users that calls the existing Internet Identity context clear/logout function and returns the UI to the “Admin Access” sign-in screen.
- Add a visible “Sign out” control on `/admin` for credential-authenticated users that clears credential session state (username/password inputs, error/loading flags, and `isCredentialAuthenticated`) and returns to the sign-in options screen.
- Ensure admin-scoped React Query data is cleared/invalidated on sign out so privileged data from the prior identity/session is not shown, and admin queries only re-run after a new sign-in.

**User-visible outcome:** Admin users on `/admin` can click “Sign out” to end their current session and return to the “Admin Access” sign-in UI; previously loaded admin data is no longer visible after signing out.
