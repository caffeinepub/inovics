// Static content model for the Industries page

export interface MajorService {
  label: string;
  imagePath: string;
  altText: string;
}

export interface CaseStudyDetails {
  firmDescriptor: string;
  sections: {
    title: string;
    content: string[];
    isOutcome?: boolean;
  }[];
}

export interface CaseStudy {
  title: string;
  pdfUrl?: string; // Optional - when undefined, shows placeholder
  details?: CaseStudyDetails; // Optional - when present, opens modal instead
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
        title: '₹22 Cr Engineering Components Firm',
        details: {
          firmDescriptor: 'Manufacturing SME (₹22 Cr Engineering Components Firm)',
          sections: [
            {
              title: 'Situation',
              content: [
                'Founder managing production approvals manually. Inventory mismatches. Reporting delayed by 5–7 days.',
              ],
            },
            {
              title: 'Structural Problem',
              content: [
                'No centralized visibility',
                'Excel-based production tracking',
                'No margin monitoring per batch',
                'Department silos',
              ],
            },
            {
              title: 'What Inovics Implemented',
              content: [
                'Centralized CRM + production sync',
                'Inventory tracking automation',
                'Batch-level margin dashboards',
                'Approval workflow routing',
                'Founder real-time dashboard',
              ],
            },
            {
              title: 'Outcome',
              content: [
                '45% reduction in reporting time',
                '18% reduction in inventory mismatch',
                'Founder dependency reduced significantly',
                'Real-time margin visibility',
              ],
              isOutcome: true,
            },
          ],
        },
      },
      {
        title: '₹30 Cr Auto-Components Manufacturer',
        details: {
          firmDescriptor: '₹30 Cr Auto-Components Manufacturer',
          sections: [
            {
              title: 'Client Profile',
              content: [
                'Industry: Automotive Components Manufacturing',
                'Revenue: ₹30 Cr',
                'Employees: 85',
                'Locations: 2 manufacturing units',
                'Promoter-led, first-generation founder',
              ],
            },
            {
              title: 'The Situation',
              content: [
                'The company had grown rapidly over 5 years.',
                'Revenue increased. Orders expanded. Clients scaled.',
                'But internally:',
                'Production planning was Excel-driven',
                'Raw material forecasting was inaccurate',
                'Dispatch delays were frequent',
                'Founder approved every major production change',
                'Margin tracking was delayed by 10–12 days',
                'Growth was outpacing structure.',
              ],
            },
            {
              title: 'Structural Gaps Identified',
              content: [
                'During the Founder Control Blueprint™, we uncovered:',
                'No real-time production visibility',
                'Manual batch tracking',
                'No integrated sales-to-production workflow',
                'Fragmented inventory management',
                'No margin intelligence per SKU',
                'Founder dependency at approval stage',
                'The business was functioning — but not systemized.',
              ],
            },
            {
              title: 'Inovics Intervention',
              content: [
                'Business OS Implementation (120 Days)',
              ],
            },
            {
              title: 'Phase 1 — Architecture',
              content: [
                'Mapped production lifecycle end-to-end',
                'Identified approval bottlenecks',
                'Designed centralized data architecture',
                'Defined role-based access hierarchies',
              ],
            },
            {
              title: 'Phase 2 — System Deployment',
              content: [
                'We implemented:',
                'CRM integrated with production planning',
                'Automated work order generation',
                'Real-time raw material tracking',
                'Approval workflow routing system',
                'Batch-level cost tracking',
                'AI-powered margin dashboard',
                'Multi-unit consolidated reporting',
              ],
            },
            {
              title: 'Phase 3 — Intelligence Layer',
              content: [
                'Demand forecasting based on historical order cycles',
                'Production load balancing',
                'Margin variance alerts',
                'Dispatch performance tracking',
              ],
            },
            {
              title: 'The Outcome (Within 6 Months)',
              content: [
                '35% reduction in production planning delays',
                '22% improvement in raw material utilization',
                '50% reduction in founder approval dependency',
                'Real-time margin visibility per SKU',
                '60% faster reporting cycles',
                'Structured weekly performance reviews',
                'Founder transitioned from operational firefighting to strategic oversight.',
              ],
              isOutcome: true,
            },
            {
              title: 'Strategic Impact',
              content: [
                'Before Inovics:',
                'Reactive decision-making',
                'Manual oversight',
                'Reporting lag',
                'Department silos',
                '',
                'After Business OS:',
                'Centralized visibility',
                'Automated production workflows',
                'Institutional dashboards',
                'Structured governance',
                '',
                'The company moved from promoter-led operations to system-led infrastructure.',
              ],
            },
            {
              title: 'Engagement Details',
              content: [
                'Duration: 120 Days',
                'Implementation Model: Milestone-Based',
                'Investment Range: ₹18L',
                'Ongoing Governance Council engagement initiated',
              ],
            },
            {
              title: 'Key Insight',
              content: [
                'Manufacturing scale does not break businesses.',
                'Unstructured growth does.',
                'Inovics engineered architecture that allowed the business to scale without increasing founder dependency.',
              ],
            },
          ],
        },
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
    title: 'Trading & Distribution',
    revenueRange: '₹10–40 Cr Revenue',
    challenges: [
      'Order management done via phone calls and WhatsApp',
      'No visibility into stock levels across warehouses',
      'Manual invoicing and payment tracking',
      'Vendor management scattered across multiple systems',
    ],
    solutions: [
      'Centralized order management system',
      'Multi-warehouse inventory tracking',
      'Automated invoicing & payment reconciliation',
      'Vendor portal with performance tracking',
    ],
    majorServices: [
      {
        label: 'Centralized order management system',
        imagePath: '/assets/generated/industry-trading-ops-dashboard.dim_512x512.png',
        altText: 'Trading and distribution centralized order management system',
      },
      {
        label: 'Multi-warehouse inventory tracking',
        imagePath: '/assets/generated/industry-trading-inventory-supply.dim_512x512.png',
        altText: 'Trading and distribution multi-warehouse inventory tracking',
      },
      {
        label: 'Automated invoicing & payment reconciliation',
        imagePath: '/assets/generated/industry-trading-workflow-automation.dim_512x512.png',
        altText: 'Trading and distribution automated invoicing and payment reconciliation',
      },
      {
        label: 'Vendor portal with performance tracking',
        imagePath: '/assets/generated/industry-trading-workflow-automation.dim_512x512.png',
        altText: 'Trading and distribution vendor portal with performance tracking',
      },
    ],
    caseStudies: [
      {
        title: 'Trading & Distribution Case Study 1',
        pdfUrl: undefined, // Placeholder - add PDF path when available
      },
      {
        title: 'Trading & Distribution Case Study 2',
        pdfUrl: undefined, // Placeholder - add PDF path when available
      },
    ],
  },
];
