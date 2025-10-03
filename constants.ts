import type { NavLink, SolutionItem, CaseStudyItem, InsightItem, AwardItem, LocationItem } from './types';
import { BriefcaseIcon, ChartBarIcon, CogIcon, UsersIcon, CloudArrowUpIcon, ScaleIcon } from './components/icons/FeatureIcons';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Awards', href: '#awards' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' },
];

export const CLIENT_LOGOS: string[] = [
  'GlobalHealth Inc.', 'OmniFoods', 'QuickServe Int.', 'CPG Masters', 'RetailGiant', 'WellCorp'
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    icon: UsersIcon,
    title: 'Audience Intelligence',
    description: 'Unlock granular audience insights to drive hyper-relevant messaging and targeting with a 30% increase in engagement.',
  },
  {
    icon: ChartBarIcon,
    title: 'Media ROI Optimization',
    description: 'Leverage AI-driven media mix modeling (MMM) to reallocate spend in real-time, cutting waste by up to 25%.',
  },
  {
    icon: CogIcon,
    title: 'Content Factory Automation',
    description: 'Automate content creation and distribution, increasing creative throughput by 5x while maintaining brand integrity.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Personalization @ Scale',
    description: 'Deploy a composable tech stack to deliver 1:1 customer experiences that boost conversion rates and lifetime value.',
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Data & Cloud Engineering',
    description: 'Build a unified, future-proof data infrastructure that turns siloed information into a strategic enterprise asset.',
  },
  {
    icon: ScaleIcon,
    title: 'Advanced Measurement & MMM',
    description: 'Move beyond last-click attribution to a holistic measurement framework that captures the true value of every touchpoint.',
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    brand: 'Global FMCG Leader',
    outcome: '+23% incremental sales; –18% CAC',
    image: 'https://picsum.photos/seed/fmcg/500/500',
  },
  {
    brand: 'Leading Healthcare Provider',
    outcome: '+40% patient acquisition; 3x higher engagement',
    image: 'https://picsum.photos/seed/healthcare/500/500',
  },
  {
    brand: 'International QSR Chain',
    outcome: '–15% media waste; +12% store traffic',
    image: 'https://picsum.photos/seed/qsr/500/500',
  },
  {
    brand: 'Top-Tier CPG Brand',
    outcome: '+35% market share through hyper-targeting',
    image: 'https://picsum.photos/seed/cpg/500/500',
  },
  {
    brand: 'Global Retail Enterprise',
    outcome: '+20% customer lifetime value via personalization',
    image: 'https://picsum.photos/seed/retail/500/500',
  },
  {
    brand: 'Wellness & Pharma Co.',
    outcome: '5x faster campaign deployment with content automation',
    image: 'https://picsum.photos/seed/pharma/500/500',
  },
];

export const AWARDS_DATA: AwardItem[] = [
    { name: 'Innovation of the Year', source: 'Global Tech Awards', year: '2024' },
    { name: 'Business Transformation Winner', source: 'Enterprise Weekly', year: '2024' },
    { name: 'Website Excellence Nominee', source: 'Digital Design Annual', year: '2023' },
    { name: 'Client Impact Award', source: 'Marketing Insights Forum', year: '2023' },
];

export const INSIGHTS_DATA: InsightItem[] = [
  {
    category: 'AI & MARKETING',
    title: 'The End of Guesswork: How Predictive Analytics is Reshaping Media Buying',
    abstract: 'Explore how leading brands are using predictive models to de-risk media investments and guarantee ROI in volatile markets.'
  },
  {
    category: 'DATA STRATEGY',
    title: 'Composable CDPs: The Key to Unlocking True Customer-Centricity',
    abstract: 'Monolithic systems are dead. We break down the business case for a flexible, composable data architecture built for agility.'
  },
  {
    category: 'CUSTOMER EXPERIENCE',
    title: 'Beyond Personalization: The Rise of Individualized Customer Journeys',
    abstract: 'Learn how AI can orchestrate unique, 1:1 journeys for millions of customers simultaneously, creating unparalleled loyalty.'
  },
];

export const LOCATIONS_DATA: LocationItem[] = [
  { city: 'Barcelona', timezone: 'CET', email: 'hola@quantumhaido.ai' },
  { city: 'New York', timezone: 'EST', email: 'hello@quantumhaido.ai' },
  { city: 'Mexico City', timezone: 'CST', email: 'contacto@quantumhaido.ai' },
];