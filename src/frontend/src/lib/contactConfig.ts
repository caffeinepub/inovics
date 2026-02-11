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
  whatsappUrl: 'https://wa.me/919322286441', // WhatsApp Business chat link
  companyProfileUrl: '', // e.g., 'https://yourdomain.com/inovics-company-profile.pdf'
};

// Centralized contact information
export const CONTACT_EMAIL = 'contact@weareinovics.com';
export const CONTACT_PHONE_DISPLAY = '+ 91-9322286441';
export const CONTACT_PHONE_TEL = 'tel:+919322286441';
export const CONTACT_ADDRESS = 'Mahendra Mansion, D.J Road, Vile Parle (West), Mumbai - 400056, Maharashtra';

// Export individual URLs for convenience
export const CALENDAR_URL = CONTACT_CONFIG.calendarUrl;
export const WHATSAPP_URL = CONTACT_CONFIG.whatsappUrl;
export const COMPANY_PROFILE_URL = CONTACT_CONFIG.companyProfileUrl;

