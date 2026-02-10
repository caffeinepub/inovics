export function bookStrategyCall() {
  // Navigate to the Strategy Session page using the app's client-side routing pattern
  window.history.pushState({}, '', '/strategy-session');
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
