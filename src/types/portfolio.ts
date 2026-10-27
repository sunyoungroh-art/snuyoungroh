/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProfileInfo {
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  organization: string;
  organizationEn: string;
  website: string;
  email: string;
  location: string;
  bio: string;
  headlineLead: string;
  headlineHighlight: string;
  headlineTail: string;
  coreMetrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
  responsibilities: string[];
  achievements: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  fullTitle: string;
  period: string;
  role: string;
  category: 'curriculum' | 'analytics' | 'digital';
  categoryLabel: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  summary: string;
  background: string;
  purpose: string;
  targetGoals: string[];
  detailedRole: string[];
  keywords: string[];
  problems: string[];
  solutions: string[];
  learnings: string[];
  accentColor: string;
}

export interface SkillItem {
  name: string;
  stars: number;
  percentage: number;
  category: 'core' | 'methodology' | 'analytics' | 'leadership';
  description: string;
}

export interface LectureBookItem {
  title: string;
  author: string;
  description: string;
  type: 'book' | 'lecture';
  badge: string;
}

export interface CredentialItem {
  name: string;
  date: string;
  issuer: string;
  type: 'certification' | 'award';
}

export interface EducationItem {
  degree: string;
  school: string;
  major: string;
  degreeName: string;
  period: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  highlightMetric: string;
}

export interface DesignSystemSpec {
  spacingScale: { token: string; value: string; usage: string }[];
  typographyScale: { level: string; font: string; size: string; weight: string; usage: string }[];
  colorPalette: { name: string; hex: string; role: string; sample: string }[];
  interactionSpecs: { element: string; trigger: string; effect: string; timing: string }[];
  breakpoints: { key: string; width: string; behavior: string }[];
  diffSummary: string;
}
