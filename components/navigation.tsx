"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, HardHat, Shield, Heart, Pill, FlaskConical } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { contactInfo } from "@/lib/contact-info"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef:any = useRef<NodeJS.Timeout>(null)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleDropdownEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsDropdownOpen(true)
    }
  }

  const handleDropdownLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false)
      }, 150)
    }
  }

  const toggleDropdown = () => {
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  const getIndustryIcon = (industryName: string) => {
    switch (industryName) {
      case "Mining Equipment":
        return <HardHat className="h-6 w-6 text-primary-blue" />
      case "Personal Protective Equipment":
        return <Shield className="h-6 w-6 text-primary-blue" />
      case "Medical Sundries":
        return <Heart className="h-6 w-6 text-primary-blue" />
      case "Pharmaceuticals":
        return <Pill className="h-6 w-6 text-primary-blue" />
      case "Chemicals and Adhesives":
        return <FlaskConical className="h-6 w-6 text-primary-blue" />
      default:
        return <Shield className="h-6 w-6 text-primary-blue" />
    }
  }

  const getIndustryDescription = (industryName: string) => {
    switch (industryName) {
      case "Mining Equipment":
        return "Advanced machinery & tools"
      case "Personal Protective Equipment":
        return "Safety gear & protection"
      case "Medical Sundries":
        return "Healthcare supplies & equipment"
      case "Pharmaceuticals":
        return "Quality pharmaceutical products"
      case "Chemicals and Adhesives":
        return "Industrial chemicals & bonding solutions"
      default:
        return "Industry solutions"
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex  items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
          <span><img src="https://ngratesc.sirv.com/basainc/logo.png" width="50"/></span>
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Desktop Industries Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group flex items-center"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
                onClick={toggleDropdown}
              >
                Industries
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-red transition-all duration-300 group-hover:w-full"></span>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[500px] max-w-[90vw] bg-white/95 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/30 z-[100] animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-6">
                    <div className="text-sm font-medium text-gray-500 mb-6 text-center">Our Industries</div>
                    <div className="grid grid-cols-1 gap-4 max-h-[70vh] overflow-y-auto">
                      {contactInfo.industries.map((industry, index) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="flex items-center p-4 rounded-xl hover:bg-white/60 hover:backdrop-blur-xl hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-white/40"
                          style={{ animationDelay: `${index * 50}ms` }}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-blue/30 to-primary-red/30 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                            {getIndustryIcon(industry.name)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 group-hover:text-primary-blue transition-colors duration-300 text-sm leading-tight">
                              {industry.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1 leading-tight">
                              {getIndustryDescription(industry.name)}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="border-t border-gray-200 mt-6 pt-4">
                      <div className="flex justify-center space-x-4">
                        <Link
                          href="/contact"
                          className="text-xs text-primary-blue hover:text-primary-red transition-colors duration-300 font-medium"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Get Quote
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link
                          href="/about"
                          className="text-xs text-primary-blue hover:text-primary-red transition-colors duration-300 font-medium"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button className="bg-primary-blue hover:bg-primary-red text-white transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-3xl rounded-2xl mt-2 p-6 border border-white/30 shadow-2xl animate-in fade-in-0 slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Industries Section */}
              <div className="border-t border-white/30 pt-4 mt-4">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2"
                >
                  <span className="font-medium">Our Industries</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="mt-3 space-y-2 animate-in fade-in-0 slide-in-from-top-1 duration-200 max-h-80 overflow-y-auto">
                    {contactInfo.industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="flex items-center py-3 text-gray-600 hover:text-gray-900 transition-colors duration-300 rounded-lg hover:bg-white/40 px-2"
                        onClick={() => {
                          setIsOpen(false)
                          setIsDropdownOpen(false)
                        }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-blue/30 to-primary-red/30 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 shadow-md flex-shrink-0">
                          {getIndustryIcon(industry.name)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{industry.name}</div>
                          <div className="text-xs text-gray-500 truncate">{getIndustryDescription(industry.name)}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Button className="bg-primary-blue hover:bg-primary-red text-white transition-colors duration-300 mt-4 shadow-lg">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
