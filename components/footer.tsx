import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Phone, Clock, Linkedin, Twitter, Facebook, Youtube, ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"
import { contactInfo, getFormattedAddress } from "@/lib/contact-info"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-blue to-primary-red">
        <div className="container mx-auto">
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Stay Connected</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest industry insights, product updates, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-primary-blue hover:bg-white/90 transition-colors duration-300">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/" className="text-2xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
                    BASA
                  </span>
                  <span className="text-white ml-1">INC</span>
                </Link>
                <p className="text-primary-blue font-medium mt-2">{contactInfo.company.tagline}</p>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{contactInfo.company.description}</p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Link
                  href={contactInfo.social.linkedin}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href={contactInfo.social.twitter}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href={contactInfo.social.facebook}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href={contactInfo.social.youtube}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-red transition-colors duration-300"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {contactInfo.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-blue transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Our Industries</h3>
              <ul className="space-y-3">
                {contactInfo.industries.map((industry) => (
                  <li key={industry.name}>
                    <Link
                      href={industry.href}
                      className="text-gray-300 hover:text-primary-red transition-colors duration-300 flex items-center group"
                    >
                      <Building2 className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start space-x-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">{getFormattedAddress()}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="h-5 w-5 text-primary-blue" />
                  <span className="text-white font-medium">Phone</span>
                </div>
                {contactInfo.contact.phones.map((phone) => (
                  <p key={phone.label} className="text-gray-300 text-sm ml-8">
                    {phone.label}: {phone.number}
                  </p>
                ))}
              </div>

              {/* Email */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Mail className="h-5 w-5 text-primary-blue" />
                  <span className="text-white font-medium">Email</span>
                </div>
                {contactInfo.contact.emails.map((email) => (
                  <p key={email.label} className="text-gray-300 text-sm ml-8">
                    {email.label}: {email.email}
                  </p>
                ))}
              </div>

              {/* Business Hours */}
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="h-5 w-5 text-primary-blue" />
                  <span className="text-white font-medium">Business Hours</span>
                </div>
                <div className="text-gray-300 text-sm ml-8 space-y-1">
                  <p>{contactInfo.businessHours.weekdays}</p>
                  <p>{contactInfo.businessHours.saturday}</p>
                  <p>{contactInfo.businessHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Basa Inc. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-blue transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-blue transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary-blue transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
