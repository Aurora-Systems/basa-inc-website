"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, ChevronRight, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FadeInSection from "@/components/fade-in-section"
import type { IndustryPageProps } from "../app/types/industry"
import { contact_number } from "./contact_number"

export default function IndustryPage(props: IndustryPageProps) {
  const {
    title,
    subtitle,
    description,
    heroImage,
    overview,
    products,
    features,
    stats,
    applications,
    testimonials,
    cta,
    breadcrumbs,
  } = props

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumbs */}
     

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "/placeholder.svg?height=600&width=1200"}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-primary-red/20"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <FadeInSection className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">{subtitle}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">{title}</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-blue hover:bg-primary-red text-white transition-colors duration-300 shadow-2xl"
              >
                <Link href="/contact">
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 bg-white/10 backdrop-blur-sm shadow-2xl"
              >
                <Link href="#products">View Products</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

     

      {/* Overview Section */}
      <FadeInSection>
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInSection direction="left">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{overview.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{overview.content}</p>
                  
                 
                </div>
              </FadeInSection>
              <FadeInSection direction="right" delay={200}>
                <div className="relative">
                  <Image
                    src={`${overview.image}` || "/placeholder.svg?height=300&width=600"}
                    alt={overview.title}
                    width={600}
                    height={300}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </FadeInSection>

    
      {/* Products Section */}
      <FadeInSection>
        <section id="products" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <FadeInSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
                  Products
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of high-quality products designed for your industry
              </p>
            </FadeInSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <FadeInSection key={product.id} delay={index * 100}>
                  <Card className="bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        <Image
                          src={product.image || "/placeholder.svg?height=300&width=400"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary-blue/90 text-white">{product.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6" >
                        <div style={{
                          minHeight:"20vh"
                        }}>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                        </div>

                        {/* Features */}
                        

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="flex-1 bg-primary-blue hover:bg-primary-red text-white transition-colors duration-300"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            Quote
                          </Button>
                        
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
            <div className="pt-10 text-center">
              <Link href={`https://wa.me/${contact_number}`}><Button className="flex-1 bg-primary-blue hover:bg-primary-red text-white transition-colors duration-300">View Mining All Products</Button></Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Applications Section */}
     
      {/* Testimonials Section */}
     

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-10 px-4 bg-gradient-to-r from-primary-blue to-primary-red">
          <div className="container mx-auto text-center">
            <FadeInSection>
              <h2 className="text-4xl font-bold text-white mb-6">{cta.title}</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">{cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary-blue hover:bg-gray-100 transition-colors duration-300 shadow-2xl"
                >
                  <Link href={cta.primaryButton.href}>
                    {cta.primaryButton.text} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
               
              </div>
            </FadeInSection>
          </div>
        </section>
      </FadeInSection>

      <Footer />
    </div>
  )
}
