"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { contactInfo } from "@/lib/contact-info"
import { FormEvent, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { public_key, service_id, template_id } from "@/components/email_js"

export default function ContactPage() {
   const [loading, set_loading] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form:any = useRef(null);
  const contactInfoData = [
    {
      icon: Phone,
      title: "Phone",
      details: contactInfo.contact.phones.map((phone) => `${phone.label}: ${phone.number}`),
    },
    {
      icon: Mail,
      title: "Email",
      details: contactInfo.contact.emails.map((email) => `${email.label}: ${email.email}`),
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        contactInfo.contact.address.street,
        `${contactInfo.contact.address.city}, ${contactInfo.contact.address.state} ${contactInfo.contact.address.zip}`,
      ],
    },
  ]

  

  const sendEmail = (e:FormEvent) => {
    e.preventDefault();
    set_loading(true)
    console.log(e)
    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          alert("Message Sent Successfully");
          form.current.reset()
        },
        (error) => {
          console.log(error)
          alert("Message Not Sent");

        },
      ).finally(()=>{
        set_loading(false)
      })
  };


  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Motto Banner */}
      <div className="bg-primary-blue text-white text-center py-2">Empowering Industries Worldwide</div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 via-transparent to-primary-red/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your operations? Let's discuss how Basa Inc can deliver the solutions you need to
            succeed.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">First Name</label>
                      <Input
                        className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
                        placeholder="John"
                        name="first_name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Last Name</label>
                      <Input
                        className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
                        placeholder="Doe"
                                                name="last_name"
                                                required

                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                    <Input
                      type="email"
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
                      placeholder="john@company.com"
                                              name="email"
                                              required

                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Company</label>
                    <Input
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
                      placeholder="Your Company"
                                              name="company"
                                              required

                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Industry Interest</label>
                    <select                         name="industry"
 className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-900" required>
                      <option >Select an industry</option>
                      <option value="mining">Mining Equipment</option>
                      <option value="ppe">Personal Protective Equipment</option>
                      <option value="medical">Medical Sundries</option>
                      <option value="pharmaceutical">Pharmaceutical Consumables</option>
                      <option value="chemicals & adhesives">Chemicals & Adhesives</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                    <Textarea
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 min-h-[120px]"
                      placeholder="Tell us about your project or requirements..."
                                              name="message" required

                    />
                  </div>

                  <Button disabled={loading} className="w-full bg-gradient-to-r from-primary-blue to-primary-red hover:from-primary-red hover:to-primary-blue text-white">
                    {loading?"Sending...":"Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We're here to help you find the right solutions for your business. Reach out through any of the
                  channels below, and our team will get back to you promptly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfoData.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={info.title} className="bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-blue/20 to-primary-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-gray-900" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Business Hours */}
              <Card className="bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
