export const contactInfo = {
  company: {
    name: "Basa Inc",
    tagline: "The World is Yours",
    description:
      "Pioneering excellence in mining equipment, PPE, medical sundries, pharmaceuticals, and chemical solutions.",
  },
  contact: {
    phones: [
      { label: "Main Office", number: "+263 77 374 9881" },
      { label: "Sales", number: "+263 71 588 2177" },
    ],
    emails: [
            { label: "Admin", email: "admin@basainco.com" },
      { label: "General", email: "info@basainco.com" },
      { label: "Sales", email: "sales@basainco.com" },
      { label: "Support", email: "support@basainco.com" },
    ],
    address: {
      street: "Office No. 1 NSSA Building",
      city: "Cnr Julius Nyerere & Sam Nujoma",
      state: "Harare",
      zip: "00000",
      country: "Zimbabwe",
    },
  },
  businessHours: {
    weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
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
