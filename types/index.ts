// Common TypeScript types for the application

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}
