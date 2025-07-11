export interface IndustryProduct {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  specifications?: { [key: string]: string }
  category: string
}

export interface IndustryFeature {
  icon: string
  title: string
  description: string
}

export interface IndustryStats {
  label: string
  value: string
  description: string
}

export interface IndustryTestimonial {
  name: string
  company: string
  role: string
  content: string
  rating: number
  image?: string
}

export interface IndustryPageProps {
  // Basic Info
  title: string
  subtitle: string
  description: string
  heroImage: string

  // Content Sections
  overview: {
    title: string
    content: string
    image: string
    highlights: string[]
  }

  // Products
  products: IndustryProduct[]

  // Features/Benefits
  features: IndustryFeature[]

  // Statistics
  stats: IndustryStats[]

  // Applications/Use Cases
  applications: {
    title: string
    description: string
    cases: {
      title: string
      description: string
      image: string
    }[]
  }

  // Testimonials
  testimonials: IndustryTestimonial[]

  // Call to Action
  cta: {
    title: string
    description: string
    primaryButton: {
      text: string
      href: string
    }
    secondaryButton: {
      text: string
      href: string
    }
  }

  // SEO/Meta
  breadcrumbs: {
    label: string
    href: string
  }[]
}
