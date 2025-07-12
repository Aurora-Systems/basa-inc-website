"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const backgroundImages = [
    {
      url: "https://ngratesc.sirv.com/basainc/pexels-kindelmedia-8487733.jpg",
      alt: "Mining Equipment Operations",
    },
    {
      url: "https://ngratesc.sirv.com/basainc/pexels-pixabay-209719.jpg",
      alt: "Personal Protective Equipment",
    },
    {
      url: "https://ngratesc.sirv.com/basainc/pexels-tara-winstead-7722672.jpg",
      alt: "Medical Sundries and Healthcare",
    },
    {
      url: "https://ngratesc.sirv.com/basainc/pexels-chokniti-khongchum-1197604-2280571.jpg",
      alt: "Pharmaceutical Operations",
    },
    {
      url: "https://ngratesc.sirv.com/basainc/pexels-cdc-library-3993241.jpg",
      alt: "Global Distribution Network",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        {/* Brand Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-transparent to-primary-red/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-red/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-blue/5 to-primary-red/5 rounded-full blur-3xl"></div>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white shadow-lg scale-125" : "bg-white/50 hover:bg-white/75 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-20">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Motto */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-white/90 font-medium tracking-wide uppercase pt-5">The World is Yours</p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-1 leading-tight">
            <span className="block">FUTURE OF</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-white to-primary-red">
              DISTRIBUTION
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Pioneering excellence in mining equipment, PPE, medical & pharmaceautical equipment & consumables, chemicals, and adhesives. Where innovation
            meets reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button
              asChild
              size="lg"
              className="bg-primary-blue hover:bg-primary-red text-white text-lg px-8 py-4 h-auto transition-colors duration-300 shadow-2xl hover:shadow-3xl"
            >
              
              <Link href="/contact">
                Explore Solutions <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 h-auto transition-all duration-300 bg-white/10 backdrop-blur-sm shadow-2xl hover:shadow-3xl"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
         
        </div>
      </div>

      {/* Glass Morphism Cards */}
      <div className="absolute bottom-20 left-10 hidden lg:block z-30 ">
        <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-6 border border-white/40 max-w-xs shadow-2xl">
          <h3 className="text-gray-900 font-semibold mb-2">Global Reach</h3>
          <p className="text-gray-600 text-sm">Serving clients across 50+ countries worldwide</p>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 hidden lg:block z-30">
        <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-6 border border-white/40 max-w-xs shadow-2xl">
          <h3 className="text-gray-900 font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-sm">Round-the-clock assistance for all your needs</p>
        </div>
      </div>

      {/* Current Slide Info */}
      <div className="absolute top-24 right-8 hidden lg:block z-30">
        <div className="bg-white/20 backdrop-blur-xl rounded-lg px-4 py-2 border border-white/30">
          <p className="text-white/80 text-sm font-medium">
            {currentSlide + 1} / {backgroundImages.length}
          </p>
        </div>
      </div>
    </section>
  )
}
