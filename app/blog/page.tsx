import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Image from "next/image"
import Footer from "@/components/footer"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Mining Equipment: AI and Automation",
      excerpt:
        "Exploring how artificial intelligence and automation are revolutionizing the mining industry, improving safety and efficiency.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Mining",
      featured: true,
      imageUrl: "/images/mining.jpg",
    },
    {
      id: 2,
      title: "PPE Standards: What's New in 2024",
      excerpt:
        "A comprehensive overview of the latest personal protective equipment standards and regulations affecting workplace safety.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Safety",
      imageUrl: "/images/ppe.jpg",
    },
    {
      id: 3,
      title: "Medical Supply Chain Resilience",
      excerpt:
        "How healthcare facilities can build more resilient supply chains for critical medical sundries and equipment.",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Medical",
      imageUrl: "/images/medical.jpg",
    },
    {
      id: 4,
      title: "Pharmaceutical Distribution Best Practices",
      excerpt: "Essential guidelines for maintaining quality and compliance in pharmaceutical distribution networks.",
      author: "James Wilson",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Pharmaceutical",
      imageUrl: "/images/pharmaceutical.jpg",
    },
    {
      id: 5,
      title: "Sustainability in Industrial Distribution",
      excerpt:
        "How companies are adopting sustainable practices across their distribution operations to reduce environmental impact.",
      author: "Lisa Thompson",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Sustainability",
      imageUrl: "/images/sustainability.jpg",
    },
    {
      id: 6,
      title: "Digital Transformation in B2B Sales",
      excerpt:
        "The role of digital technologies in transforming business-to-business sales processes and customer relationships.",
      author: "Robert Kim",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Technology",
      imageUrl: "/images/technology.jpg",
    },
  ]

  const categories = ["All", "Mining", "Safety", "Medical", "Pharmaceutical", "Sustainability", "Technology"]

  return (
    <div className="bg-white">
      <Navigation />

      {/* Motto Banner */}
      <div className="bg-gray-100 py-2 text-center text-gray-700">
        Empowering Industries with Knowledge and Innovation
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 via-transparent to-primary-red/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Industry{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest trends, insights, and innovations across mining, safety, medical, and
            pharmaceutical industries.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-gradient-to-r from-primary-blue to-primary-red hover:from-primary-red hover:to-primary-blue text-gray-900"
                    : "border-primary-red/50 text-primary-blue hover:bg-primary-blue/10 hover:text-gray-900"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg hover:bg-white/90 transition-all duration-300 mb-12"
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto relative">
                      <Image
                        src={post.imageUrl || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-primary-blue/20 text-primary-blue border-primary-blue/30">
                        {post.category}
                      </Badge>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-6 space-x-6">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button
                        asChild
                        className="w-fit bg-gradient-to-r from-primary-blue to-primary-red hover:from-primary-red hover:to-primary-blue text-gray-900"
                      >
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <Card
                  key={post.id}
                  className="bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg hover:bg-white/90 transition-all duration-300 group"
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <Image
                        src={post.imageUrl || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-primary-blue/20 text-primary-blue border-primary-blue/30">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-blue group-hover:to-primary-red transition-all duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-primary-red/50 text-primary-blue hover:bg-primary-blue/10 hover:text-gray-900 bg-transparent"
                      >
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest industry insights, trends, and updates delivered directly
                to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/20 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-400"
                />
                <Button className="bg-gradient-to-r from-primary-blue to-primary-red hover:from-primary-red hover:to-primary-blue text-gray-900 px-8">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  )
}
