// Static content model for the Industries page
export interface MajorService {
  label: string;
  imagePath: string;
  altText: string;
}

export interface CaseStudy {
  title: string;
  pdfUrl?: string; // Optional - when undefined, shows placeholder
}

export interface IndustryContent {
  id: string;
  title: string;
  revenueRange: string;
  challenges: string[];
  solutions: string[];
  majorServices: MajorService[];
  caseStudies: CaseStudy[];
}

export const industriesContent: IndustryContent[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing & Distribution',
    revenueRange: '₹10–50 Cr Revenue',
    challenges: [
      'Inventory managed in Excel',
      'Production planning done manually',
      'No real-time visibility into stock or orders',
      'Founder approval required for every purchase order',
    ],
    solutions: [
      'Centralized inventory & order management',
      'Automated reorder triggers',
      'Production dashboards with real-time tracking',
      'Approval workflows with delegation rules',
    ],
    majorServices: [
      {
        label: 'Centralized inventory & order management',
        imagePath: '/assets/generated/industry-manufacturing-inventory-supply.dim_512x512.png',
        altText: 'Manufacturing centralized inventory and order management system',
      },
      {
        label: 'Automated reorder triggers',
        imagePath: '/assets/generated/industry-manufacturing-workflow-automation.dim_512x512.png',
        altText: 'Manufacturing automated reorder trigger system',
      },
      {
        label: 'Production dashboards with real-time tracking',
        imagePath: '/assets/generated/industry-manufacturing-ops-dashboard.dim_512x512.png',
        altText: 'Manufacturing production dashboard with real-time tracking',
      },
      {
        label: 'Approval workflows with delegation rules',
        imagePath: '/assets/generated/industry-manufacturing-governance-approvals.dim_512x512.png',
        altText: 'Manufacturing approval workflows with delegation rules',
      },
    ],
    caseStudies: [
      {
        title: 'Manufacturing Case Study 1',
        pdfUrl: undefined, // Placeholder - add PDF path when available
      },
      {
        title: 'Manufacturing Case Study 2',
        pdfUrl: undefined, // Placeholder - add PDF path when available
      },
    ],
  },
  {
    id: 'wholesale',
    title: 'Wholesale & Retail',
    revenueRange: '₹5–30 Cr Revenue',
    challenges: [
      'Customer data scattered across WhatsApp, notebooks, and spreadsheets',
      'No visibility into customer purchase history',
      'Sales team operates independently with no central tracking',
      'Pricing inconsistencies across channels',
    ],
    solutions: [
      'Unified CRM with customer lifecycle tracking',
      'Sales pipeline automation',
      'Centralized pricing & discount management',
      'Performance dashboards for sales teams',
    ],
    majorServices: [
      {
        label: 'Unified CRM with customer lifecycle tracking',
        imagePath: '/assets/generated/industry-wholesale-inventory-supply.dim_512x512.png',
        altText: 'Wholesale and retail unified CRM with customer lifecycle tracking',
      },
      {
        label: 'Sales pipeline automation',
        imagePath: '/assets/generated/industry-wholesale-workflow-automation.dim_512x512.png',
        altText: 'Wholesale and retail sales pipeline automation system',
      },
      {
        label: 'Centralized pricing & discount management',
        imagePath: '/assets/generated/industry-wholesale-ops-dashboard.dim_512x512.png',
        altText: 'Wholesale and retail centralized pricing and discount management',
      },
      {
        label: 'Performance dashboards for sales teams',
        imagePath: '/assets/generated/industry-wholesale-governance-approvals.dim_512x512.png',
        altText: 'Wholesale and retail performance dashboards for sales teams',
      },
    ],
    caseStudies: [
      {
        title: 'Wholesale & Retail Case Study 1',
        pdfUrl: undefined, // Placeholder - add PDF path when available
      },
      {
        title: 'Wholesale & Retail Case Study 2',
        pdfUrl: undefined, // Placeholder - add PDF path when available
      },
    ],
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    revenueRange: '₹5–20 Cr Revenue',
    challenges: [
      'Project tracking done via email threads',
      'No standardized client onboarding process',
      'Billing and invoicing delays',
      'Founder involved in every client interaction',
    ],
    solutions: [
      'Project management system with milestone tracking',
      'Automated client onboarding workflows',
      'Integrated billing & invoicing automation',
      'Client communication portal',
    ],
    majorServices: [
      {
        label: 'Project management system with milestone tracking',
        imagePath: '/assets/generated/industry-pro-services-ops-dashboard.dim_512x512.png',
        altText: 'Professional services project management system with milestone tracking',
      },
      {
        label: 'Automated client onboarding workflows',
        imagePath: '/assets/generated/industry-pro-services-workflow-automation.dim_512x512.png',
        altText: 'Professional services automated client onboarding workflows',
      },
      {
        label: 'Integrated billing & invoicing automation',
        imagePath: '/assets/generated/industry-pro-services-inventory-supply.dim_512x512.png',
        altText: 'Professional services integrated billing and invoicing automation',
      },
      {
        label: 'Client communication portal',
        imagePath: '/assets/generated/industry-pro-services-governance-approvals.dim_512x512.png',
        altText: 'Professional services client communication portal',
      },
    ],
    caseStudies: [
      {
        title: 'Professional Services Case Study 1',
        pdfUrl: undefined, // Placeholder - add PDF path when available
      },
      {
        title: 'Professional Services Case Study 2',
        pdfUrl: undefined, // Placeholder - add PDF path when available
      },
    ],
  },
  {
    id: 'trading',
    title: 'Trading & Import-Export',
    revenueRange: '₹10–50 Cr Revenue',
    challenges: [
      'Shipment tracking done manually',
      'No centralized vendor or supplier database',
      'Payment reconciliation takes weeks',
      'Compliance documentation scattered',
    ],
    solutions: [
      'Shipment tracking & logistics dashboard',
      'Vendor management system',
      'Automated payment reconciliation',
      'Compliance document repository with alerts',
    ],
    majorServices: [
      {
        label: 'Shipment tracking & logistics dashboard',
        imagePath: '/assets/generated/industry-trading-ops-dashboard.dim_512x512.png',
        altText: 'Trading and import-export shipment tracking and logistics dashboard',
      },
      {
        label: 'Vendor management system',
        imagePath: '/assets/generated/industry-trading-inventory-supply.dim_512x512.png',
        altText: 'Trading and import-export vendor management system',
      },
      {
        label: 'Automated payment reconciliation',
        imagePath: '/assets/generated/industry-trading-workflow-automation.dim_512x512.png',
        altText: 'Trading and import-export automated payment reconciliation',
      },
      {
        label: 'Compliance document repository with alerts',
        imagePath: '/assets/generated/services-governance-approvals.dim_512x512.png',
        altText: 'Trading and import-export compliance document repository with alerts',
      },
    ],
    caseStudies: [
      {
        title: 'Trading & Import-Export Case Study 1',
        pdfUrl: undefined, // Placeholder - add PDF path when available
      },
      {
        title: 'Trading & Import-Export Case Study 2',
        pdfUrl: undefined, // Placeholder - add PDF path when available
      },
    ],
  },
];
