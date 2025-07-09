"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Industry {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  href: string
}

interface IndustryCardProps {
  industry: Industry
  index: number
}

export default function IndustryCard({ industry, index }: IndustryCardProps) {
  const [mounted, setMounted] = useState(false)
  const Icon = industry.icon

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), index * 200)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <Card
      className={`group bg-white/60 backdrop-blur-2xl border-white/30 hover:bg-white/80 hover:backdrop-blur-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link href={industry.href}>
        <CardContent className="p-8 text-center relative overflow-hidden">
          {/* Background Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          ></div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="mb-6 relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-blue/20 to-primary-red/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-xl">
                <Icon className="h-10 w-10 text-primary-blue group-hover:text-primary-red transition-colors duration-300" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-blue group-hover:to-primary-red transition-all duration-300">
              {industry.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>

            {/* Arrow */}
            <div className="flex items-center justify-center text-primary-blue group-hover:text-primary-red transition-colors duration-300">
              <span className="mr-2 text-sm font-medium">Explore</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
