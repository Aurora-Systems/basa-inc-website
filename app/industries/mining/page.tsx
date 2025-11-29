import IndustryPage from "../../../components/industry-page"
import type { IndustryPageProps } from "../../types/industry"

const miningIndustryData: IndustryPageProps = {
  title: "Personal Mining Safety Equipment",
  subtitle: "Mining Industry",
  description:
    "Essential personal protective equipment for mining environments. From underground operations to surface works, we supply durable, safety-first gear that protects your workforce in challenging conditions.",
  heroImage: "https://cdn.clipond.com/basainc/railroad-cargo-worker-checking-train-before-departure_308072-4750.avif",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Mining Safety Gear", href: "/industries/mining" },
  ],

  overview: {
    title: "Protecting People in the Mining Industry",
    content:
      "At Basa Inc, we’re committed to safeguarding mining personnel. From deep underground shafts to open pit operations, our gear is designed to meet the highest standards for durability, comfort, and compliance. Whether it's head protection, respiratory safety, or visibility enhancement, our solutions empower your team to work with confidence.",
    image: "https://cdn.clipond.com/basainc/mining.avif",
    highlights: [
      "Rechargeable cap lamps for low-light environments",
      "Hearing protection ear muffs for noisy sites",
      "Steel-reinforced gum boots for harsh terrain",
      "Reflective jackets for high visibility",
      "Respirators for air quality control",
      "Safety harnesses for fall protection",
      "Phynomic gloves for precision and grip",
    ],
  },

  stats: [
    {
      label: "Workers Protected",
      value: "75,000+",
      description: "Across global mining sites",
    },
    {
      label: "Product Categories",
      value: "20+",
      description: "Covering full-spectrum mining PPE",
    },
    {
      label: "Compliance Rate",
      value: "100%",
      description: "Meets international safety standards",
    },
    {
      label: "Client Satisfaction",
      value: "98.6%",
      description: "Based on global feedback",
    },
  ],

  features: [
    {
      icon: "👷‍♂️",
      title: "Worker-Centered Design",
      description:
        "All products are built with user comfort and long-shift performance in mind.",
    },
    {
      icon: "🛡️",
      title: "Reliable Protection",
      description:
        "Gear engineered to meet high-impact, high-risk working conditions.",
    },
    {
      icon: "🌡️",
      title: "Environmental Resilience",
      description:
        "Tested for rugged weather, temperature extremes, and dust-heavy settings.",
    },
    {
      icon: "🔄",
      title: "Easy Replacement",
      description:
        "Standardized sizing and modular options make swapping or upgrading gear seamless.",
    },
    {
      icon: "📦",
      title: "Bulk Supply & Distribution",
      description:
        "Flexible logistics and packaging to support sites with large teams.",
    },
    {
      icon: "🔍",
      title: "Compliance Assurance",
      description:
        "Documentation and labeling for easy tracking and audit-readiness.",
    },
  ],

  products: [
  {
    id: "caplamp-clx-100",
    name: "Rechargeable Cap Lamp",
    description:
      "Ultra-bright cap lamp with long battery life and adjustable beam focus, ideal for low-visibility zones.",
    image: "https://cdn.clipond.com/basainc/Corded-cap-lamp_SiriUS-LUX-with-folded-cable-web.jpg",
    category: "Lighting",
    features: [
      "Up to 16 hours runtime",
      "Water-resistant casing",
      "Magnetic charging dock",
      "Comfort-fit headband",
      "Battery status indicator",
    ],
    specifications: {
      Brightness: "300 lumens",
      Battery: "Rechargeable Li-ion",
      Runtime: "16 hours",
    },
  },
  {
    id: "earmuffs-hpm-200",
    name: "Noise Reduction Ear Muffs",
    description:
      "High-performance ear muffs offering 30 dB noise reduction and an adjustable headband for all-day comfort.",
    image: "https://cdn.clipond.com/basainc/muffs.jpg",
    category: "Hearing Protection",
    features: [
      "Noise Reduction Rating: 30 dB",
      "Soft-sealing cushions",
      "Adjustable headband",
      "Lightweight design",
      "Foldable for storage",
    ],
    specifications: {
      NRR: "30 dB",
      Weight: "250 g",
      HeadbandRange: "52–64 cm",
    },
  },
  {
    id: "respirator-rp-50",
    name: "Industrial Respirator Mask",
    description:
      "Half-face respirator with dual cartridge ports for particulates, gases, and vapors, plus an exhalation valve.",
    image: "https://cdn.clipond.com/basainc/engineering-working-factory_67123-436.jpg",
    category: "Respiratory Protection",
    features: [
      "Dual cartridge ports",
      "Replaceable filters",
      "Silicone face seal",
      "Exhalation valve",
      "Adjustable straps",
    ],
    specifications: {
      FilterType: "P3 / Gas & Vapor",
      Material: "Medical-grade silicone",
      Weight: "200 g",
    },
  },
  {
    id: "harness-sh-300",
    name: "Full-Body Safety Harness",
    description:
      "Durable full-body harness featuring dorsal and frontal D-rings for fall arrest and work positioning.",
    image: "https://cdn.clipond.com/basainc/wear-seat-belts-safety-harness-going-up-stairs-fixed-ladder-working-high-ground-industrial_483511-4508.avif",
    category: "Fall Protection",
    features: [
      "Front & back D-rings",
      "Padded shoulder straps",
      "Quick-connect buckles",
      "Integrated tool loops",
      "Polyester webbing",
    ],
    specifications: {
      MaxLoad: "140 kg",
      WebbingWidth: "44 mm",
      Compliance: "EN 361",
    },
  },
  {
    id: "gloves-ph-20",
    name: "Phynomic  Precision Gloves",
    description:
      "Seamless nitrile gloves offering tactile sensitivity, superior grip, and touchscreen compatibility.",
    image: "https://cdn.clipond.com/basainc/2148773497.jpg",
    category: "Hand Protection",
    features: [
      "Micro-foam nitrile palm",
      "Ergonomic cut",
      "Touchscreen compatible",
      "Breathable back",
      "Seamless design",
    ],
    specifications: {
      Sizes: "S–XXL",
      Material: "Nitrile / Nylon",
      Coating: "Micro-foam nitrile",
    },
  },
  {
    id: "jacket-rfj-500",
    name: "Reflective Safety Jacket",
    description:
      "Water-resistant, high-visibility jacket with ANSI Class 3 reflective striping and multiple tool pockets.",
    image: "https://cdn.clipond.com/basainc/reflec.jpg",
    category: "Visibility Apparel",
    features: [
      "ANSI Class 3 compliance",
      "High-contrast reflective tape",
      "Adjustable cuffs & waist",
      "Chest & sleeve pockets",
      "Durable zip-front closure",
    ],
    specifications: {
      Material: "Polyester",
      Weight: "350 g",
      Visibility: "Class 3",
    },
  },
],
  applications: {
    title: "Where Our Safety Equipment Works",
    description:
      "Our PPE is designed for mining operations across underground, surface, and transitional environments.",
    cases: [
      {
        title: "Underground Mining",
        description:
          "Enhanced protection from low-light, confined spaces, and airborne hazards.",
        image: "/placeholder.svg?height=250&width=350&text=Underground+Safety",
      },
      {
        title: "Surface Mining",
        description:
          "Visibility tools and heat-resilient wear for outdoor and open pit settings.",
        image: "/placeholder.svg?height=250&width=350&text=Surface+Safety",
      },
      {
        title: "Construction on Site",
        description:
          "Fall protection harnesses and gloves designed for infrastructure setups near mining zones.",
        image: "/placeholder.svg?height=250&width=350&text=Site+Construction",
      },
    ],
  },

  testimonials: [
    {
      name: "Peter Mwale",
      company: "Zimbabwe Platinum Mines",
      role: "Safety Supervisor",
      content:
        "The cap lamps and harnesses from Basa Inc are reliable and well-built. We’ve seen a huge boost in compliance and worker confidence.",
      rating: 5,
    },
    {
      name: "Linda Zhou",
      company: "Eastern Minerals Ltd",
      role: "Procurement Manager",
      content:
        "Their PPE line is exceptional—great variety and everything ships on time. No delays, no defects. Highly recommended.",
      rating: 5,
    },
  ],

  cta: {
    title: "Secure Your Team with Industry-Leading PPE",
    description:
      "Let’s ensure your mining workforce is safe, compliant, and comfortable. Reach out today for a quote or product consultation.",
    primaryButton: {
      text: "Request Safety Gear Quote",
      href: "/contact?industry=mining-safety",
    },
    secondaryButton: {
      text: "Download PPE Catalog",
      href: "/downloads/mining-ppe-catalog.pdf",
    },
  },
};

export default function MiningPage() {
  return <IndustryPage {...miningIndustryData} />
}
