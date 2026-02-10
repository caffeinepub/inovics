import { CONTACT_CONFIG } from './contactConfig';

export function bookStrategyCall() {
  // If calendar URL is configured, use it
  if (CONTACT_CONFIG.calendarUrl) {
    window.open(CONTACT_CONFIG.calendarUrl, '_blank');
  } else {
    // Fallback to mailto
    window.location.href = 'mailto:hello@inovics.ai?subject=Founder Strategy Call Request';
  }
}
