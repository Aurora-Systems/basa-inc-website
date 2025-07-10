"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Building2,
  HardHat,
  Heart,
  Pill,
  FlaskConical,
  CheckCircle,
  Globe,
  Shield,
  Users,
  Award,
  Star,
  TrendingUp,
  Clock,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import IndustryCard from "@/components/industry-card"
import Footer from "@/components/footer"
import FadeInSection from "@/components/fade-in-section"

export default function HomePage() {
  const industries = [
    {
      icon: HardHat,
      title: "Mining Equipment",
      description: "Cutting-edge machinery and tools for mining operations worldwide",
      gradient: "from-primary-blue/20 to-primary-red/20",
      href: "/industries/mining",
    },
    {
      icon: Building2,
      title: "Personal Protective Equipment",
      description: "Premium safety gear ensuring worker protection across all industries",
      gradient: "from-primary-red/20 to-primary-blue/20",
      href: "/industries/ppe",
    },
    {
      icon: Heart,
      title: "Medical Sundries",
      description: "Essential medical supplies and equipment for healthcare facilities",
      gradient: "from-primary-blue/20 to-primary-red/20",
      href: "/industries/medical",
    },
    {
      icon: Pill,
      title: "Pharmaceuticals",
      description: "Quality pharmaceutical products and medical solutions",
      gradient: "from-primary-red/20 to-primary-blue/20",
      href: "/industries/pharmaceuticals",
    },
    {
      icon: FlaskConical,
      title: "Chemicals and Adhesives",
      description: "Industrial chemicals and advanced bonding solutions",
      gradient: "from-primary-blue/20 to-primary-red/20",
      href: "/industries/chemicals",
    },
  ]

  const features = [
    {
      icon: Globe,
      title: "Global Distribution Network",
      description: "Seamless delivery across 50+ countries with strategic partnerships worldwide",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and certification processes ensuring premium product standards",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service and technical support for all your needs",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Emergency supply solutions with expedited delivery for critical operations",
    },
  ]

  const stats = [
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "1000+", label: "Happy Clients", icon: Users },
    { number: "100%", label: "Quality Guranteed", icon: Award },
  
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Global Mining Corp",
      role: "Operations Director",
      content: "Basa Inc has been our trusted partner for over 10 years. Their reliability and quality are unmatched.",
      rating: 5,
    },
    {
      name: "Dr. James Wilson",
      company: "Metropolitan Hospital",
      role: "Chief Medical Officer",
      content: "The medical supplies from Basa Inc have consistently met our highest standards for patient care.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      company: "SafeWork Industries",
      role: "Safety Manager",
      content: "Their PPE solutions have significantly improved our workplace safety metrics across all sites.",
      rating: 5,
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We analyze your specific requirements and industry needs",
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Custom solutions tailored to your operational demands",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Seamless deployment with full support and training",
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring and optimization of your supply chain",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />

      {/* Our Operations Section - Moved to be right after Hero */}
      <FadeInSection>
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <FadeInSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
                  Operations
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Witness excellence in action across our global distribution network
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Global Mining Operations",
                  desc: "State-of-the-art equipment serving mining operations worldwide",
                  alt: "Mining Operations",
                  img:"https://ngratesc.sirv.com/basainc/mining.avif"
                },
                {
                  title: "Safety First",
                  desc: "Premium PPE ensuring maximum protection for workers",
                  alt: "Safety Equipment",
                  img:"https://ngratesc.sirv.com/basainc/pexels-pixabay-209719.jpg"
                },
                {
                  title: "Healthcare Excellence",
                  desc: "Medical supplies supporting healthcare facilities globally",
                  alt: "Medical Facilities",
                  img:"https://ngratesc.sirv.com/basainc/medical.avif"
                },
              ].map((item, index) => (
                <FadeInSection key={item.title} delay={index * 200}>
                  <Card className="bg-white/60 backdrop-blur-2xl border-white/30 hover:shadow-3xl transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-0">
                      <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        <img
                          src={`${item.img}?height=300&width=400`}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Company Overview Section */}
      <FadeInSection>
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInSection direction="left">
                <div>
                  <Badge className="mb-6 bg-primary-blue/10 text-primary-blue border-primary-blue/20">
                    About Basa Inc
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Pioneering Excellence in{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
                      Industrial Distribution
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Basa Inc has been at the forefront of industrial distribution, serving as the
                    bridge between innovation and implementation. We specialize in delivering world-class solutions
                    across mining, safety, medical, pharmaceutical, and chemical sectors.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary-blue" />
                      <span className="text-gray-700">ISO 9001:2015 Certified Quality Management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary-blue" />
                      <span className="text-gray-700">Global Supply Chain Network</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary-blue" />
                      <span className="text-gray-700">24/7 Technical Support</span>
                    </div>
                  </div>
                  <Button className="bg-primary-blue hover:bg-primary-red text-white transition-colors duration-300">
                    Learn More About Us
                  </Button>
                </div>
              </FadeInSection>
              <FadeInSection direction="right" delay={200}>
                <div className="relative">
                  <div className="bg-white/60 backdrop-blur-2xl rounded-3xl  border border-white/30 shadow-2xl">
                    <img
                      src="https://ngratesc.sirv.com/basainc/unnamed.webp?height=400&width=500"
                      alt="Basa Inc Headquarters"
                      className="w-full h-80 object-cover rounded-top rounded-top-3 mb-6"
                    /> 
                    <div className="text-center pb-3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Headquarters</h3>
                      <p className="text-gray-600">Leading innovation from our state-of-the-art facility</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Statistics Section */}
      <FadeInSection>
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <FadeInSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trusted by Industry{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
                  Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence is reflected in our impressive track record
              </p>
            </FadeInSection>
            <div className="flex flex-row justify-center">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <FadeInSection key={stat.label} delay={index * 100}>
                    <Card className="bg-white/60 backdrop-blur-2xl border-white/30 shadow-2xl text-center group hover:shadow-3xl transition-all duration-500 hover:scale-105">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-blue/30 to-primary-red/30 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="h-8 w-8 text-primary-blue group-hover:text-primary-red transition-colors duration-300" />
                        </div>
                        <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                        <div className="text-gray-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                )
              })}
            </div>
                        </div>

          </div>
        </section>
      </FadeInSection>

      {/* Features Section */}
      <FadeInSection>
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <FadeInSection className="text-center mb-16">
              <Badge className="mb-6 bg-primary-red/10 text-primary-red border-primary-red/20">Why Choose Us</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Unmatched{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
                  Service Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We go beyond distribution to provide comprehensive solutions that drive your success
              </p>
            </FadeInSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <FadeInSection key={feature.title} delay={index * 150}>
                    <Card className="bg-white/60 backdrop-blur-2xl   border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
                      <CardContent className="p-8 text-center ">
                        
                        <div className="w-20  h-16 mx-auto mb-6 bg-gradient-to-br from-primary-blue/20 to-primary-red/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="h-8 w-8 text-primary-blue group-hover:text-primary-red transition-colors duration-300" />
                        </div>
                        <div style={{height:"21vh"}}>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                       
                      </CardContent>
                    </Card>
                  </FadeInSection>
                )
              })}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Industries Section */}
      <FadeInSection>
        <section className="py-20 px-4 relative bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent"></div>
          <div className="container mx-auto relative z-10">
            <FadeInSection className="text-center mb-16">
              <Badge className="mb-6 bg-primary-blue/10 text-primary-blue border-primary-blue/20">Our Expertise</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Five Key{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
                  Industries
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering excellence across five key sectors with innovative solutions and unmatched expertise
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <FadeInSection key={industry.title} delay={index * 100}>
                  <IndustryCard industry={industry} index={index} />
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Process Section */}
      <FadeInSection>
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <FadeInSection className="text-center mb-16">
              <Badge className="mb-6 bg-primary-red/10 text-primary-red border-primary-red/20">Our Process</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                How We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
                  Deliver Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven methodology ensures seamless integration and optimal results
              </p>
            </FadeInSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <FadeInSection key={step.step} delay={index * 150}>
                  <Card className="bg-white/60 backdrop-blur-2xl border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 relative hover:scale-105">
                    <CardContent className="p-8 text-center" style={{height:"40vh"}}>
                      <div className="text-6xl font-bold text-primary-blue/20 mb-4">{step.step}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="h-8 w-8 text-primary-blue/30" />
                      </div>
                    )}
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials Section */}
      <FadeInSection>
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <FadeInSection className="text-center mb-16">
              <Badge className="mb-6 bg-primary-blue/10 text-primary-blue border-primary-blue/20">
                Client Success Stories
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
                  Clients Say
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it - hear from industry leaders who trust Basa Inc
              </p>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FadeInSection key={testimonial.name} delay={index * 200}>
                  <Card className="bg-white/60 backdrop-blur-2xl border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-blue/30 to-primary-red/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-lg font-bold text-gray-900">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                          <div className="text-sm text-primary-blue">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-20 px-4 relative bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto text-center">
            <Card className="bg-white/60 backdrop-blur-2xl border-white/30 p-12 max-w-4xl mx-auto shadow-2xl">
              <CardContent className="space-y-6">
                <Badge className="bg-primary-red/10 text-primary-red border-primary-red/20">
                  Ready to Get Started?
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to Transform Your Operations?</h3>
                <p className="text-xl text-gray-600">
                  Partner with Basa Inc for cutting-edge solutions that drive your business forward. Join thousands of
                  satisfied clients worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-blue hover:bg-primary-red text-white transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Link href="/contact">
                      Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white transition-all duration-300 bg-transparent shadow-lg hover:shadow-xl"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeInSection>
      <Footer />
    </div>
  )
}
