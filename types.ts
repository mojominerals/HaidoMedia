
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface SolutionItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface CaseStudyItem {
  brand: string;
  outcome: string;
  image: string;
}

export interface InsightItem {
  category: string;
  title: string;
  abstract: string;
}

export interface AwardItem {
  name: string;
  source: string;
  year: string;
}

export interface LocationItem {
  city: string;
  timezone: string;
  email: string;
}
