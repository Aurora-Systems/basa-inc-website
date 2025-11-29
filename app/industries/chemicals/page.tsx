import IndustryPage from "../../../components/industry-page"
import type { IndustryPageProps } from "../../types/industry"

const chemicalsIndustryData: IndustryPageProps = {
  title: "Chemicals and Adhesives Solutions",
  subtitle: "Chemical Industry",
  description:
    "Premium industrial chemicals, cleaning solutions, and adhesive products for commercial and industrial applications. From multi-purpose cleaners to specialized chemical compounds, we deliver quality solutions that meet the highest industry standards.",
  heroImage: "https://cdn.clipond.com/basainc/pexels-chokniti-khongchum-1197604-2280571.jpg",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Chemicals and Adhesives", href: "/industries/chemicals" },
  ],

  overview: {
    title: "Leading Chemical Solutions Provider",
    content:
      "Basa Inc has been a trusted supplier of industrial chemicals and cleaning solutions for over two decades. We understand the critical role that quality chemicals play in maintaining operational efficiency, safety, and cleanliness across various industries. Our comprehensive product range includes everything from powerful cleaning agents to specialized chemical compounds, all manufactured to the highest standards and backed by our commitment to safety and environmental responsibility.",
    image: "https://cdn.clipond.com/basainc/pexels-pixabay-209230.jpg",
    highlights: [
      "Industrial-grade cleaning and sanitizing solutions",
      "Multi-purpose chemical compounds for various applications",
      "Eco-friendly and biodegradable product options",
      "Bulk supply capabilities for large-scale operations",
      "Technical support and application guidance",
      "Custom formulation services available",
    ],
  },

  stats: [
    {
      label: "Chemical Products",
      value: "200+",
      description: "Different formulations available",
    },
    {
      label: "Industries Served",
      value: "15+",
      description: "Sectors using our chemicals",
    },
    {
      label: "Quality Certifications",
      value: "12+",
      description: "International standards met",
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      description: "Customer retention rate",
    },
  ],

  features: [
    {
      icon: "🧪",
      title: "Premium Quality",
      description:
        "All chemicals manufactured to strict quality standards with consistent performance and purity levels.",
    },
    {
      icon: "🌱",
      title: "Eco-Friendly Options",
      description:
        "Environmentally responsible formulations that reduce ecological impact without compromising effectiveness.",
    },
    {
      icon: "🏭",
      title: "Industrial Strength",
      description: "Powerful formulations designed for demanding industrial and commercial cleaning applications.",
    },
    {
      icon: "📋",
      title: "Regulatory Compliance",
      description: "All products meet relevant safety and environmental regulations including EPA and OSHA standards.",
    },
    {
      icon: "🚚",
      title: "Flexible Supply",
      description: "Available in various packaging sizes from small containers to bulk industrial quantities.",
    },
    {
      icon: "🔬",
      title: "Technical Support",
      description: "Expert technical assistance for product selection, application methods, and safety protocols.",
    },
  ],

  products: [
    {
      id: "dishwasher-detergent-dd-pro",
      name: "Industrial Dishwasher Detergent",
      description:
        "High-performance detergent formulated for commercial and industrial dishwashing systems. Provides excellent cleaning power while being gentle on equipment.",
      image: "https://cdn.clipond.com/basainc/2.png",
      category: "Cleaning Solutions",
      features: [
        "Low-foam formula for machine efficiency",
        "Effective grease and food soil removal",
        "Rinse aid compatibility",
        "Equipment-safe formulation",
        "Concentrated formula for cost efficiency",
        "Available in 5L, 20L, and 200L containers",
      ],
    },
    {
      id: "multipurpose-cleaner-mc-ultra",
      name: "Multi-Purpose Cleaner",
      description:
        "Versatile cleaning solution suitable for multiple surfaces and applications. Ideal for offices, healthcare facilities, and industrial environments.",
      image: "https://cdn.clipond.com/basainc/1.png",
      category: "Cleaning Solutions",
      features: [
        "Safe on multiple surface types",
        "Antibacterial and antiviral properties",
        "Pleasant, non-overpowering scent",
        "Streak-free cleaning performance",
        "Biodegradable formula",
        "Ready-to-use or concentrate options",
      ],
    },
    {
      id: "hard-surface-cleaner-hsc-pro",
      name: " Hard Surface Cleaner",
      description:
        "Specialized cleaner for hard surfaces including floors, walls, and equipment. Removes tough stains and buildup while protecting surface integrity.",
      image: "https://cdn.clipond.com/basainc/3.png",
      category: "Specialty Cleaners",
      features: [
        "Effective on concrete, metal, and tile",
        "Removes grease, oil, and industrial soils",
        "Non-abrasive formula protects surfaces",
        "Fast-acting cleaning action",
        "Low-odor formulation",
        "Suitable for pressure washing applications",
      ],
    },
    {
      id: "sodium-hypochlorite-bleach-shb-industrial",
      name: "Sodium Hypochlorite Bleach",
      description:
        "Professional-grade sodium hypochlorite bleach for sanitization, disinfection, and whitening applications in industrial and commercial settings.",
      image: "https://cdn.clipond.com/basainc/2148781939.jpg",
      category: "Sanitizing Agents",
      features: [
        "High-concentration active chlorine",
        "Broad-spectrum antimicrobial action",
        "Effective against bacteria, viruses, and fungi",
        "Suitable for water treatment applications",
        "Long shelf life with proper storage",
        "Available in various concentrations",
      ],
    },
    {
      id: "toilet-paper-tp-commercial",
      name: " Toilet Paper",
      description:
        "High-quality commercial toilet paper designed for high-traffic facilities. Combines softness, strength, and absorbency for optimal user experience.",
      image: "https://cdn.clipond.com/basainc/2148524904.jpg",
      category: "Hygiene Products",
      features: [
        "2-ply construction for strength and comfort",
        "High sheet count per roll",
        "Compatible with standard dispensers",
        "Septic-safe and biodegradable",
        "Bulk packaging for cost efficiency",
        "Consistent quality and performance",
      ],
    },
    
    {
      id: "adhesive-industrial-ai-bond",
      name: "Industrial Adhesive",
      description:
        "High-strength industrial adhesive suitable for bonding various materials including metals, plastics, and composites in demanding applications.",
      image: "https://cdn.clipond.com/basainc/2149630000.jpg",
      category: "Adhesives",
      features: [
        "Superior bonding strength",
        "Temperature and chemical resistance",
        "Fast curing time",
        "Suitable for structural applications",
        "Low VOC formulation",
        "Multiple viscosity options available",
      ],
    },
  ],

  applications: {
    title: "Chemical Applications",
    description:
      "Our chemical solutions serve diverse industries and applications across commercial and industrial sectors.",
    cases: [
      {
        title: "Food Service Industry",
        description:
          "Comprehensive cleaning and sanitizing solutions for restaurants, cafeterias, and food processing facilities including dishwasher detergents and surface cleaners.",
        image: "/placeholder.svg?height=250&width=350&text=Food+Service+Cleaning",
      },
      {
        title: "Healthcare Facilities",
        description:
          "Medical-grade disinfectants and cleaning solutions for hospitals, clinics, and healthcare facilities requiring the highest standards of cleanliness.",
        image: "/placeholder.svg?height=250&width=350&text=Healthcare+Cleaning",
      },
      {
        title: "Manufacturing Plants",
        description:
          "Industrial-strength cleaners and degreasers for manufacturing environments, equipment maintenance, and facility cleaning applications.",
        image: "/placeholder.svg?height=250&width=350&text=Industrial+Cleaning",
      },
      {
        title: "Office Buildings",
        description:
          "Complete janitorial supply solutions including multi-purpose cleaners, toilet paper, and maintenance chemicals for commercial office spaces.",
        image: "/placeholder.svg?height=250&width=350&text=Office+Cleaning",
      },
      {
        title: "Educational Institutions",
        description:
          "Safe and effective cleaning products for schools and universities, including eco-friendly options suitable for environments with children.",
        image: "/placeholder.svg?height=250&width=350&text=School+Cleaning",
      },
      {
        title: "Water Treatment",
        description:
          "Specialized chemicals for water treatment applications including sodium hypochlorite for disinfection and pH adjustment compounds.",
        image: "/placeholder.svg?height=250&width=350&text=Water+Treatment",
      },
    ],
  },

  testimonials: [
    {
      name: "Robert Johnson",
      company: "Metro Food Services",
      role: "Operations Manager",
      content:
        "Basa Inc's dishwasher detergent has significantly improved our cleaning efficiency. Our dishes come out spotless every time, and the cost per wash is very competitive.",
      rating: 5,
    },
    {
      name: "Dr. Amanda Foster",
      company: "City General Hospital",
      role: "Infection Control Specialist",
      content:
        "The sodium hypochlorite bleach from Basa Inc meets all our stringent disinfection requirements. It's reliable, effective, and consistently high quality.",
      rating: 5,
    },
    {
      name: "Mark Stevens",
      company: "Industrial Maintenance Corp",
      role: "Facility Manager",
      content:
        "Their multi-purpose cleaner is incredibly versatile. We use it throughout our facility, and it handles everything from light cleaning to tough industrial soils.",
      rating: 5,
    },
  ],

  cta: {
    title: "Ready to Optimize Your Chemical Supply?",
    description:
      "Contact our chemical specialists to discuss your specific requirements and discover how our solutions can improve your operations while reducing costs.",
    primaryButton: {
      text: "Get Chemical Quote",
      href: "/contact?industry=chemicals",
    },
    secondaryButton: {
      text: "Product Catalog",
      href: "/downloads/chemicals-catalog.pdf",
    },
  },
}

export default function ChemicalsPage() {
  return <IndustryPage {...chemicalsIndustryData} />
}
