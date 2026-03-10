const CONTACT_EMAIL = "contact@weareinovics.com";

export function submitFormByEmail(subject: string, body: string): void {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // Use window.open to avoid navigating away from the current page
  window.open(mailto, "_self");
}
