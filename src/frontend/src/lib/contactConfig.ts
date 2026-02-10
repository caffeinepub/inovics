/**
 * Contact configuration for external integrations.
 * 
 * These values should be configured with actual URLs before deployment:
 * - calendarUrl: Your Calendly, Cal.com, or other booking platform URL
 * - whatsappUrl: Your WhatsApp Business link (format: https://wa.me/919876543210)
 * - companyProfileUrl: Direct link to your company profile PDF or document
 * 
 * Leave empty strings for graceful fallback behavior.
 */
export const CONTACT_CONFIG = {
  calendarUrl: '', // e.g., 'https://calendly.com/inovics/strategy-call'
  whatsappUrl: '', // e.g., 'https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20discuss%20transformation'
  companyProfileUrl: '', // e.g., 'https://yourdomain.com/inovics-company-profile.pdf'
};
