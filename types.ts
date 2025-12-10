import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface KeyPoint {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SectionProps {
  id?: string;
  className?: string;
}