import IndustryPage from "../../../components/industry-page"
import type { IndustryPageProps } from "../../types/industry"

const ppeIndustryData: IndustryPageProps = {
  title: "Personal Protective Equipment",
  subtitle: "Safety Solutions",
  description:
    "Comprehensive PPE solutions ensuring maximum protection for workers across all industries. From head to toe protection, we provide certified safety equipment that meets the highest standards.",
  heroImage: "https://ngratesc.sirv.com/basainc/pexels-pixabay-209719.jpg",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Personal Protective Equipment", href: "/industries/ppe" },
  ],

  overview: {
    title: "Protecting Your Most Valuable Asset",
    content:
      "At Basa Inc, we understand that your workforce is your most valuable asset. Our comprehensive range of Personal Protective Equipment (PPE) is designed to provide maximum protection without compromising comfort or productivity. From construction sites to chemical plants, our safety solutions meet and exceed international safety standards, ensuring your team can work confidently in any environment.",
    image: "https://ngratesc.sirv.com/basainc/pexels-kindelmedia-8487788.jpg",
    highlights: [
      "Head protection: Hard hats and safety helmets",
      "Eye and face protection: Safety glasses and shields",
      "Respiratory protection: Masks and breathing apparatus",
      "Hand protection: Gloves for various applications",
      "Body protection: Safety vests and coveralls",
      "Foot protection: Safety boots and shoes",
    ],
  },

  stats: [
    {
      label: "Safety Standards",
      value: "50+",
      description: "International certifications met",
    },
    {
      label: "Products Available",
      value: "2,000+",
      description: "PPE items in our catalog",
    },
    {
      label: "Industries Served",
      value: "25+",
      description: "Different industry sectors",
    },
    {
      label: "Accident Reduction",
      value: "85%",
      description: "Average workplace incident decrease",
    },
  ],

  features: [
    {
      icon: "🛡️",
      title: "Certified Protection",
      description:
        "All our PPE meets or exceeds international safety standards including ANSI, OSHA, and CE certifications.",
    },
    {
      icon: "👥",
      title: "Comfort Design",
      description: "Ergonomically designed equipment that provides protection without sacrificing comfort or mobility.",
    },
    {
      icon: "🔬",
      title: "Advanced Materials",
      description: "Utilizing cutting-edge materials and technologies for superior protection and durability.",
    },
    {
      icon: "🎯",
      title: "Industry Specific",
      description: "Specialized PPE solutions tailored to the unique hazards of different industries and applications.",
    },
    {
      icon: "📋",
      title: "Compliance Support",
      description: "Expert guidance to ensure your PPE program meets all regulatory requirements and best practices.",
    },
    {
      icon: "🔄",
      title: "Lifecycle Management",
      description: "Complete PPE lifecycle services including training, maintenance, and replacement programs.",
    },
  ],

  products: [
    {
      id: "hard-hat-hh-pro",
      name: "Safety Hard Hat",
      description:
        "Premium hard hat with advanced impact protection and comfortable suspension system for all-day wear.",
      image: "https://ngratesc.sirv.com/basainc/2147843003.jpg",
      category: "Head Protection",
      features: [
        "ANSI Z89.1 Type I certified",
        "4-point suspension system",
        "Ratchet adjustment",
        "Accessory slots for attachments",
        "UV-resistant shell material",
      ],
    },
    {
      id: "safety-glasses-sg-clear",
      name: "Safety Glasses",
      description: "Lightweight safety glasses with anti-fog coating and wraparound design for maximum eye protection.",
      image: "https://ngratesc.sirv.com/basainc/102357.jpg",
      category: "Eye Protection",
      features: [
        "ANSI Z87.1+ certified",
        "Anti-fog and anti-scratch coating",
        "Wraparound design",
        "Adjustable temples",
        "99.9% UV protection",
      ],
    },
    {
      id: "respirator-n95-pro",
      name: "N95-Pro Respirator Mask",
      description: "High-efficiency particulate respirator providing excellent filtration and comfortable fit.",
      image: "https://ngratesc.sirv.com/basainc/pexels-cdc-library-3993241.jpg",
      category: "Respiratory Protection",
      features: [
        "NIOSH N95 approved",
        "95% filtration efficiency",
        "Adjustable nose clip",
        "Comfortable elastic straps",
        "Fluid resistant outer layer",
      ],
    },
    {
      id: "work-gloves-wg-grip",
      name: "Work Gloves",
      description: "Durable work gloves with superior grip and cut resistance for various industrial applications.",
      image: "https://ngratesc.sirv.com/basainc/2148773497.jpg",
      category: "Hand Protection",
      features: [
        "Cut resistance Level A3",
        "Nitrile palm coating",
        "Breathable back material",
        "Reinforced fingertips",
        "Machine washable",
      ],
    },
    {
      id: "safety-vest-sv-hiviz",
      name: "Safety Vest",
      description: "High-visibility safety vest with reflective tape for enhanced visibility in low-light conditions.",
      image: "https://ngratesc.sirv.com/basainc/19066.jpg",
      category: "Body Protection",
      features: [
        "ANSI/ISEA 107 Class 2",
        "3M Scotchlite reflective tape",
        "Breathable mesh fabric",
        "Multiple pockets",
        "Adjustable side straps",
      ],
    },
    {
      id: "safety-boots-sb-steel",
      name: "Safety Boots",
      description: "Steel toe safety boots with slip-resistant sole and electrical hazard protection.",
      image: "https://ngratesc.sirv.com/basainc/pair-black-safety-leather-shoes-isolated_33867-1084.jpg",
      category: "Foot Protection",
      features: [
        "ASTM F2413 certified",
        "Steel toe protection",
        "Slip-resistant outsole",
        "Electrical hazard protection",
        "Moisture-wicking lining",
      ],
    },
  ],

  applications: {
    title: "Industry Applications",
    description: "Our PPE solutions protect workers across diverse industries and work environments.",
    cases: [
      {
        title: "Construction Sites",
        description:
          "Comprehensive protection for construction workers including hard hats, safety glasses, gloves, and high-visibility clothing.",
        image: "/placeholder.svg?height=250&width=350&text=Construction+PPE",
      },
      {
        title: "Manufacturing Plants",
        description:
          "Industrial PPE solutions for manufacturing environments including respiratory protection, cut-resistant gloves, and safety footwear.",
        image: "/placeholder.svg?height=250&width=350&text=Manufacturing+PPE",
      },
      {
        title: "Chemical Processing",
        description:
          "Specialized chemical-resistant PPE including full-body suits, chemical gloves, and respiratory protection systems.",
        image: "/placeholder.svg?height=250&width=350&text=Chemical+PPE",
      },
    ],
  },

  testimonials: [
    {
      name: "Maria Rodriguez",
      company: "SafeWork Industries",
      role: "Safety Manager",
      content:
        "Since implementing Basa Inc's PPE program, we've seen an 85% reduction in workplace injuries. The quality and comfort of their equipment has improved worker compliance significantly.",
      rating: 5,
    },
    {
      name: "David Thompson",
      company: "Metro Construction",
      role: "Site Supervisor",
      content:
        "The durability of Basa Inc's PPE is outstanding. Our hard hats and safety boots last twice as long as our previous supplier's products, providing excellent value for money.",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      company: "Chemical Solutions Ltd",
      role: "EHS Director",
      content:
        "Basa Inc's chemical-resistant PPE has been crucial for our operations. Their technical support team helped us select the right protection for our specific chemical hazards.",
      rating: 5,
    },
  ],

  cta: {
    title: "Protect Your Workforce Today",
    description:
      "Contact our safety specialists to assess your PPE needs and create a comprehensive protection program for your organization.",
    primaryButton: {
      text: "Get Safety Quote",
      href: "/contact?industry=ppe",
    },
    secondaryButton: {
      text: "PPE Catalog",
      href: "/downloads/ppe-catalog.pdf",
    },
  },
}

export default function MiningPage() {
  return <IndustryPage {...ppeIndustryData} />
}
