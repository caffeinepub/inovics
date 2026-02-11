// Stable slug definitions for the 6 Insight articles
export const INSIGHT_SLUGS = {
  EXCEL_IS_NOT_A_BUSINESS_SYSTEM: 'excel-is-not-a-business-system',
  WHY_GROWTH_BREAKS_WEAK_INFRASTRUCTURE: 'why-growth-breaks-weak-infrastructure',
  FROM_FOUNDER_DRIVEN_TO_SYSTEM_DRIVEN: 'from-founder-driven-to-system-driven',
  CRM_VS_ERP_WHAT_GROWING_SMES_ACTUALLY_NEED: 'crm-vs-erp-what-growing-smes-actually-need',
  THE_HIDDEN_COST_OF_MANUAL_REPORTING: 'the-hidden-cost-of-manual-reporting',
  CAN_YOUR_BUSINESS_RUN_WITHOUT_YOU: 'can-your-business-run-without-you',
} as const;

// Canonical titles matching the provided content exactly
export const INSIGHT_TITLES: Record<string, string> = {
  [INSIGHT_SLUGS.EXCEL_IS_NOT_A_BUSINESS_SYSTEM]: 'Excel Is Not a Business System',
  [INSIGHT_SLUGS.WHY_GROWTH_BREAKS_WEAK_INFRASTRUCTURE]: 'Why Growth Breaks Weak Infrastructure',
  [INSIGHT_SLUGS.FROM_FOUNDER_DRIVEN_TO_SYSTEM_DRIVEN]: 'From Founder-Driven to System-Driven',
  [INSIGHT_SLUGS.CRM_VS_ERP_WHAT_GROWING_SMES_ACTUALLY_NEED]: 'CRM vs ERP: What Growing SMEs Actually Need',
  [INSIGHT_SLUGS.THE_HIDDEN_COST_OF_MANUAL_REPORTING]: 'The Hidden Cost of Manual Reporting',
  [INSIGHT_SLUGS.CAN_YOUR_BUSINESS_RUN_WITHOUT_YOU]: 'Can Your Business Run Without You?',
};

// Ordered list for the Insights hub
export const ORDERED_INSIGHT_SLUGS = [
  INSIGHT_SLUGS.EXCEL_IS_NOT_A_BUSINESS_SYSTEM,
  INSIGHT_SLUGS.WHY_GROWTH_BREAKS_WEAK_INFRASTRUCTURE,
  INSIGHT_SLUGS.FROM_FOUNDER_DRIVEN_TO_SYSTEM_DRIVEN,
  INSIGHT_SLUGS.CRM_VS_ERP_WHAT_GROWING_SMES_ACTUALLY_NEED,
  INSIGHT_SLUGS.THE_HIDDEN_COST_OF_MANUAL_REPORTING,
  INSIGHT_SLUGS.CAN_YOUR_BUSINESS_RUN_WITHOUT_YOU,
];

// Helper to validate if a slug is a valid Insight article
export function isValidInsightSlug(slug: string): boolean {
  return Object.values(INSIGHT_SLUGS).includes(slug as any);
}

// Helper to get title from slug
export function getTitleFromSlug(slug: string): string | null {
  return INSIGHT_TITLES[slug] || null;
}
