export const contactInfo = {
  company: {
    name: "Basa Inc",
    tagline: "The World is Yours",
    description:
      "Pioneering excellence in mining equipment, PPE, medical sundries, pharmaceuticals, and chemical solutions.",
  },
  contact: {
    phones: [
      { label: "Main Office", number: "+1 (555) 123-4567" },
      { label: "Sales", number: "+1 (555) 987-6543" },
      { label: "Support", number: "+1 (555) 456-7890" },
    ],
    emails: [
      { label: "General", email: "info@basainc.com" },
      { label: "Sales", email: "sales@basainc.com" },
      { label: "Support", email: "support@basainc.com" },
    ],
    address: {
      street: "123 Industrial Boulevard",
      city: "Corporate City",
      state: "CC",
      zip: "12345",
      country: "United States",
    },
  },
  businessHours: {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
  },
  social: {
    linkedin: "https://linkedin.com/company/basainc",
    twitter: "https://twitter.com/basainc",
    facebook: "https://facebook.com/basainc",
    youtube: "https://youtube.com/basainc",
  },
  industries: [
    { name: "Mining Equipment", href: "/industries/mining" },
    { name: "Personal Protective Equipment", href: "/industries/ppe" },
    { name: "Medical Sundries", href: "/industries/medical" },
    { name: "Pharmaceuticals", href: "/industries/pharmaceuticals" },
    { name: "Chemicals and Adhesives", href: "/industries/chemicals" },
  ],
  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "Our Industries", href: "#industries" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export const getFormattedAddress = () => {
  const { address } = contactInfo.contact
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}, ${address.country}`
}

export const getMainPhone = () => contactInfo.contact.phones[0].number
export const getMainEmail = () => contactInfo.contact.emails[0].email
