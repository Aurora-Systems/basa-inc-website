import IndustryPage from "../../../components/industry-page"
import type { IndustryPageProps } from "../../types/industry"

const medicalIndustryData: IndustryPageProps = {
  title: "Medical Pharmaceautical Equipment & Consumables",
  subtitle: "Healthcare Solutions",
  description:
    "Comprehensive medical supplies and equipment for healthcare facilities, emergency services, and medical training institutions. From basic first aid supplies to advanced medical equipment, we provide quality healthcare solutions that save lives.",
  heroImage: "https://ngratesc.sirv.com/basainc/medical.avif",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Medical Sundries", href: "/industries/medical" },
  ],

  overview: {
    title: "Your Trusted Healthcare Supply Partner",
    content:
      "For over two decades, Basa Inc has been committed to supporting healthcare providers with reliable, high-quality medical supplies and equipment. We understand that in healthcare, quality and reliability can mean the difference between life and death. Our comprehensive range of medical sundries serves hospitals, clinics, emergency services, training institutions, and healthcare facilities worldwide, ensuring that medical professionals have access to the tools they need to provide exceptional patient care.",
    image: "https://ngratesc.sirv.com/basainc/2148908406.jpg",
    highlights: [
      "Emergency response and first aid equipment",
      "Surgical supplies and protective equipment",
      "Medical training devices and simulation equipment",
      "Patient monitoring and diagnostic tools",
      "Wound care and treatment supplies",
      "FDA-approved and CE-certified products",
    ],
  },

  stats: [
    {
      label: "Medical Products",
      value: "1,500+",
      description: "Different medical items available",
    },
    {
      label: "Healthcare Facilities",
      value: "800+",
      description: "Hospitals and clinics served",
    },
    {
      label: "Countries Supplied",
      value: "40+",
      description: "Global healthcare reach",
    },
    {
      label: "Quality Certifications",
      value: "15+",
      description: "Medical standards compliance",
    },
  ],

  features: [
    {
      icon: "🏥",
      title: "Medical Grade Quality",
      description:
        "All products meet stringent medical standards including FDA, CE, and ISO certifications for healthcare applications.",
    },
    {
      icon: "🚑",
      title: "Emergency Ready",
      description: "Complete emergency medical supplies and equipment for rapid response and critical care situations.",
    },
    {
      icon: "🎓",
      title: "Training Solutions",
      description: "Medical simulation equipment and training manikins for healthcare education and skill development.",
    },
    {
      icon: "🔬",
      title: "Sterile & Safe",
      description: "Sterile packaging and contamination-free products ensuring patient safety and infection control.",
    },
    {
      icon: "📦",
      title: "Complete Kits",
      description: "Pre-assembled medical kits and trauma bags for immediate deployment in emergency situations.",
    },
    {
      icon: "🌍",
      title: "Global Standards",
      description:
        "Products compliant with international medical standards and regulations across different countries.",
    },
  ],

  products: [
    {
      id: "first-aid-box-fab-complete",
      name: "First Aid Box",
      description:
        "Comprehensive first aid kit containing essential medical supplies for workplace, home, and emergency use. Fully stocked with quality medical supplies.",
      image: "https://ngratesc.sirv.com/basainc/2148908406.jpg",
      category: "Emergency Supplies",
      features: [
        "50+ essential first aid items",
        "Durable, portable carrying case",
        "Organized compartments for easy access",
        "Workplace safety compliance",
        "Refill service available",
        "Multiple size options available",
      ],
    },
    {
      id: "trauma-bag-tb-professional",
      name: "Trauma Bag",
      description:
        "Advanced trauma response bag equipped with critical care supplies for emergency medical services and first responders.",
      image: "https://ngratesc.sirv.com/basainc/close-up-toy-car_1048944-3525894.jpg",
      category: "Emergency Supplies",
      features: [
        "Advanced trauma care supplies",
        "Waterproof and tear-resistant bag",
        "Color-coded organization system",
        "Quick-access external pockets",
        "Reflective safety strips",
        "Customizable contents available",
      ],
    },
    {
      id: "aed-defibrillator-aed-lifesaver",
      name: "Defibrillator",
      description:
        "Automated External Defibrillator with voice prompts and visual indicators for effective emergency cardiac care by trained and untrained users.",
      image: "https://ngratesc.sirv.com/basainc/H7d4e1275fb844f4e97d903e1e048816eQ.jpg_720x720q50.avif",
      category: "Emergency Equipment",
      features: [
        "Fully automatic operation",
        "Clear voice and visual prompts",
        "Adult and pediatric capability",
        "Long-life battery (5+ years)",
        "IP55 dust and water resistance",
        "Comprehensive training included",
      ],
    },
    {
      id: "surgical-gloves-sg-sterile",
      name: "Surgical Gloves",
      description:
        "Premium latex surgical gloves providing superior tactile sensitivity and barrier protection for surgical procedures.",
      image: "https://ngratesc.sirv.com/basainc/2148848614.jpg",
      category: "Protective Equipment",
      features: [
        "Sterile, powder-free latex",
        "Superior tactile sensitivity",
        "Textured fingertips for grip",
        "Anatomical design for comfort",
        "Various sizes available",
        "Individually wrapped pairs",
      ],
    },
    {
      id: "bouffant-cap-bc-disposable",
      name: "Bouffant Cap",
      description:
        "Lightweight, breathable disposable caps for maintaining hygiene standards in medical and food service environments.",
      image: "https://ngratesc.sirv.com/basainc/2148525044.jpg",
      category: "Protective Equipment",
      features: [
        "Non-woven polypropylene material",
        "Elastic band for secure fit",
        "Breathable and comfortable",
        "Lint-free construction",
        "Available in multiple colors",
        "Bulk packaging options",
      ],
    },
    {
      id: "cpr-mask-cm-professional",
      name: "CPR Mask",
      description:
        "Professional-grade CPR mask with one-way valve for safe mouth-to-mouth resuscitation during emergency situations.",
      image: "https://ngratesc.sirv.com/basainc/side-view-victim-with-oxygen-mask_23-2149478551.jpg",
      category: "Emergency Equipment",
      features: [
        "One-way valve prevents backflow",
        "Transparent mask for patient monitoring",
        "Elastic head strap for hands-free use",
        "Compact carrying case included",
        "Latex-free materials",
        "Easy to clean and disinfect",
      ],
    },
    {
      id: "prestan-manikin-pm-training",
      name: "Prestan Manikin",
      description:
        "Professional CPR training manikin with realistic chest compression feedback for effective resuscitation training programs.",
      image: "https://ngratesc.sirv.com/basainc/medical-student-are-practicing_1157-42466.jpg",
      category: "Training Equipment",
      features: [
        "Realistic chest compression feedback",
        "Visual compression indicator",
        "Lightweight and portable design",
        "Easy-to-clean surfaces",
        "Replaceable face shields",
        "Carrying case included",
      ],
    },
    {
      id: "bp-machine-bpm-digital",
      name: "BP Machine",
      description:
        "Accurate digital blood pressure monitor with large display and memory function for clinical and home use.",
      image: "https://ngratesc.sirv.com/basainc/person-using-tensiometer-blood-pressure_23-2150456083.jpg",
      category: "Diagnostic Equipment",
      features: [
        "Automatic inflation and measurement",
        "Large, easy-to-read LCD display",
        "Memory storage for multiple readings",
        "Irregular heartbeat detection",
        "Multiple cuff sizes available",
        "AC adapter and battery operation",
      ],
    },
    {
      id: "stretcher-sls-loading",
      name: "Self-Loading Stretcher",
      description:
        "Advanced self-loading stretcher system for ambulances with hydraulic lifting mechanism for safe patient transport.",
      image: "https://ngratesc.sirv.com/basainc/paramedic-giving-oxygen-injured-girl_107420-63759.jpg",
      category: "Transport Equipment",
      features: [
        "Hydraulic self-loading system",
        "Height-adjustable platform",
        "Secure patient restraint system",
        "Lightweight aluminum construction",
        "Easy maneuverability wheels",
        "Compatible with standard ambulances",
      ],
    },
    {
      id: "needles-n-sterile",
      name: "Medical Needles",
      description:
        "High-quality sterile needles in various gauges and lengths for different medical procedures and injections.",
      image: "https://ngratesc.sirv.com/basainc/closeup-syringe_53876-30453.jpg",
      category: "Medical Supplies",
      features: [
        "Various gauges and lengths available",
        "Ultra-sharp, tri-beveled tips",
        "Sterile, single-use packaging",
        "Color-coded hub for easy identification",
        "Latex-free materials",
        "Bulk packaging options",
      ],
    },
    {
      id: "sutures-s-surgical",
      name: "Surgical Sutures",
      description: "Premium surgical sutures in various materials and sizes for wound closure and surgical procedures.",
      image: "https://ngratesc.sirv.com/basainc/seu505_1.webp",
      category: "Medical Supplies",
      features: [
        "Multiple suture materials available",
        "Various needle types and sizes",
        "Sterile packaging",
        "Excellent tensile strength",
        "Smooth tissue passage",
        "Individual sterile pouches",
      ],
    },
    {
      id: "crepe-bandage-cb-elastic",
      name: "Crepe Bandage",
      description:
        "High-quality elastic crepe bandages for wound dressing, compression therapy, and injury support applications.",
      image: "https://ngratesc.sirv.com/basainc/rolled-bandage_23-2147612241.jpg",
      category: "Wound Care",
      features: [
        "High elasticity and conformability",
        "Excellent compression properties",
        "Breathable cotton construction",
        "Secure clip fastening",
        "Various widths available",
        "Washable and reusable",
      ],
    },
  ],

  applications: {
    title: "Healthcare Applications",
    description:
      "Our medical supplies serve diverse healthcare environments and emergency response situations worldwide.",
    cases: [
      {
        title: "Hospitals & Clinics",
        description:
          "Complete medical supply solutions for hospitals and clinics including surgical supplies, diagnostic equipment, and patient care products.",
        image: "/placeholder.svg?height=250&width=350&text=Hospital+Supplies",
      },
      {
        title: "Emergency Medical Services",
        description:
          "Critical emergency supplies and equipment for ambulances, paramedics, and first responders including trauma bags and AEDs.",
        image: "/placeholder.svg?height=250&width=350&text=Emergency+Medical+Services",
      },
      {
        title: "Medical Training Institutions",
        description:
          "Educational medical equipment including training manikins, simulation devices, and practice supplies for medical schools and training centers.",
        image: "/placeholder.svg?height=250&width=350&text=Medical+Training",
      },
      {
        title: "Workplace Safety",
        description:
          "Occupational health and safety supplies including first aid kits, emergency equipment, and workplace medical supplies.",
        image: "/placeholder.svg?height=250&width=350&text=Workplace+Safety",
      },
      {
        title: "Home Healthcare",
        description:
          "Medical supplies for home healthcare providers and patients including monitoring equipment, wound care, and mobility aids.",
        image: "/placeholder.svg?height=250&width=350&text=Home+Healthcare",
      },
      {
        title: "Sports Medicine",
        description:
          "Specialized medical supplies for sports teams and athletic facilities including injury treatment and prevention equipment.",
        image: "/placeholder.svg?height=250&width=350&text=Sports+Medicine",
      },
    ],
  },

  testimonials: [
    {
      name: "Dr. Emily Rodriguez",
      company: "Metropolitan Hospital",
      role: "Chief Medical Officer",
      content:
        "Basa Inc's medical supplies have consistently met our highest standards for patient care. Their surgical gloves and sterile supplies are reliable and cost-effective.",
      rating: 5,
    },
    {
      name: "Captain Mike Thompson",
      company: "City Emergency Services",
      role: "EMS Coordinator",
      content:
        "The trauma bags and AED units from Basa Inc have been crucial in our emergency response operations. The quality and reliability have saved countless lives.",
      rating: 5,
    },
    {
      name: "Professor Sarah Chen",
      company: "Medical University",
      role: "Training Director",
      content:
        "The Prestan manikins and medical training equipment have transformed our CPR and medical training programs. Students get hands-on experience with professional-grade equipment.",
      rating: 5,
    },
  ],

  cta: {
    title: "Ready to Enhance Your Medical Supply Chain?",
    description:
      "Contact our medical supply specialists to discuss your healthcare facility's needs and discover how our solutions can improve patient care and operational efficiency.",
    primaryButton: {
      text: "Get Medical Quote",
      href: "/contact?industry=medical",
    },
    secondaryButton: {
      text: "Medical Catalog",
      href: "/downloads/medical-catalog.pdf",
    },
  },
}

export default function MedicalPage() {
  return <IndustryPage {...medicalIndustryData} />
}
