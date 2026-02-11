// Tech stack logos configuration for homepage

export interface TechStackLogo {
  label: string;
  imagePath: string;
  altText: string;
}

export const techStackLogos: TechStackLogo[] = [
  {
    label: 'ERP Systems',
    imagePath: '/assets/generated/tech-logo-erp.dim_256x256.png',
    altText: 'ERP Systems for enterprise resource planning',
  },
  {
    label: 'CRM Solutions',
    imagePath: '/assets/generated/tech-logo-crm.dim_256x256.png',
    altText: 'CRM Solutions for customer relationship management',
  },
  {
    label: 'Business Intelligence',
    imagePath: '/assets/generated/tech-logo-bi.dim_256x256.png',
    altText: 'Business Intelligence and analytics platforms',
  },
  {
    label: 'Workflow Automation',
    imagePath: '/assets/generated/tech-logo-automation.dim_256x256.png',
    altText: 'Workflow Automation tools and platforms',
  },
  {
    label: 'System Integrations',
    imagePath: '/assets/generated/tech-logo-integrations.dim_256x256.png',
    altText: 'System Integrations and API connectivity',
  },
  {
    label: 'Data Warehouse',
    imagePath: '/assets/generated/tech-logo-data-warehouse.dim_256x256.png',
    altText: 'Data Warehouse and storage solutions',
  },
  {
    label: 'AI & Machine Learning',
    imagePath: '/assets/generated/tech-logo-ai.dim_256x256.png',
    altText: 'AI and Machine Learning platforms',
  },
  {
    label: 'Cloud Infrastructure',
    imagePath: '/assets/generated/tech-logo-cloud.dim_256x256.png',
    altText: 'Cloud Infrastructure and hosting solutions',
  },
];
