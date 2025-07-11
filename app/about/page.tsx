import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Shield, Users } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  const stats = [
    { icon: Globe, label: "Countries Served", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "1000+" },
    { icon: Award, label: "Years Experience", value: "25+" },
    { icon: Shield, label: "Safety Standards", value: "100%" },
  ]

  const values = [
    {
      title: "Ownership Mentality",
      description: "We take responsibility for our work, our decisions, and the impact we have on our colleagues and customers",
    },
    {
      title: "Growth Mindset",
      description: "We are committed to continuos learning and personal development for both our employees and the company as a whole.",
    },
    {
      title: "Holistic Impact",
      description: "We consider the broader impact of our actiobns on all stakeholders the community and the environment.",
    },
    {
      title: "Dynamic Adapatability",
      description: "We embrace change innovation and agility to thrive in a rapidly evolving business landscape.",
    },
    {
      title: "Trust & Transparency",
      description: "We build trust with our employees, customers and partners through open communication, honesty and integrity."
    }
  ]

  return (
    <div className="bg-white">
      <Navigation />

      {/* Motto Banner */}
      <section className="pt-20 pb-4 px-4 bg-gradient-to-r from-primary-blue/5 to-primary-red/5">
        <div className="container mx-auto text-center">
          <p className="text-lg font-medium text-primary-blue tracking-wide uppercase">The World is Yours</p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 via-transparent to-primary-red/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-red">
              Basa Inc
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Maintaining top-noth services is crucial when it comes to our products. Due to the constant requirement for safety and quality. It is important that we uphold high standards and internal policies. Our industry is a high-risk industry because of the need for constant quality control and safety. Consequently, BASA Inc has strict policies handling, distribution and surrounding storage.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-blue/20 to-primary-red/20 rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-gray-900" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                 Basa Inc began as a vision to revolutionize industrial distribution. What started as
                  a small operation has grown into a global powerhouse, serving clients across four critical industries.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering
                  commitment to quality. We've weathered industry changes, embraced new technologies, and consistently
                  delivered value to our clients.
                </p>
                <p>
                  Today, we stand as a testament to what's possible when expertise meets ambition, and we're just
                  getting started.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-primary-blue/20 to-primary-red/20 rounded-2xl flex items-center justify-center" style={{
                  backgroundImage:`url("https://ngratesc.sirv.com/basainc/Untitled%20design%20(4).png")`,
                  backgroundSize:"cover",
                  backgroundPosition:"center",
                  backgroundRepeat:"no-repeat"
                }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
