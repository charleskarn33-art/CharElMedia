import type { Metadata } from "next"
import Link from "next/link"
import { Mic2, Camera, Music2, Printer, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore all services offered by CharEl Media Group — Photography, Podcast, Recording Studio, and Printing.",
}

const services = [
  {
    name: "CharEl Corner", subtitle: "Podcast Studio", icon: Mic2, color: "purple",
    gradient: "from-purple-500 to-purple-700", href: "/podcast",
    description: "Our state-of-the-art podcast studio brings your stories, insights, and expertise to a wide audience across Liberia and beyond.",
    features: ["Professional podcast recording setup", "Video and audio episodes", "Guest application portal", "Episode categories: Business, Tech, Faith, Entertainment", "Show production and editing", "Distribution to all major platforms"],
    cta: "Apply as Guest", ctaHref: "/podcast/apply",
  },
  {
    name: "CharEl Studio", subtitle: "Photography", icon: Camera, color: "blue",
    gradient: "from-[#0057FF] to-[#0046CC]", href: "/photography",
    description: "Professional photography for life's most important moments. From intimate portraits to grand celebrations, we capture it all.",
    features: ["Wedding & engagement photography", "Graduation & birthday sessions", "Corporate & fashion photography", "Private password-protected galleries", "High-resolution downloads & ZIP", "Watermarked previews before purchase"],
    cta: "Book Session", ctaHref: "/photography/book",
  },
  {
    name: "CharEl Sound", subtitle: "Recording Studio", icon: Music2, color: "green",
    gradient: "from-[#00B86B] to-[#009A59]", href: "/recording",
    description: "Industry-grade recording studio equipped with professional gear for music, voice overs, podcasts, and audio production.",
    features: ["Music recording (all genres)", "Voice over & narration recording", "Podcast studio recording", "Professional mixing & mastering", "Audio editing services", "Online audio file delivery"],
    cta: "Book Studio Time", ctaHref: "/recording/book",
  },
  {
    name: "CharEl Press", subtitle: "Printing & Branding", icon: Printer, color: "orange",
    gradient: "from-orange-500 to-orange-700", href: "/printing",
    description: "Full-service print shop for all your business and personal printing needs. High quality at competitive prices.",
    features: ["T-shirts & branded apparel", "Banners & roll-up displays", "Business cards & letterheads", "Posters, flyers & brochures", "Stickers & branded merchandise", "Online order tracking system"],
    cta: "Place an Order", ctaHref: "/printing/order",
  },
]

const colorMap: Record<string, { bg: string; icon: string; text: string; border: string }> = {
  purple: { bg: "bg-purple-50", icon: "bg-purple-100 text-purple-600", text: "text-purple-600", border: "border-purple-200" },
  blue: { bg: "bg-blue-50", icon: "bg-blue-100 text-[#0057FF]", text: "text-[#0057FF]", border: "border-blue-200" },
  green: { bg: "bg-green-50", icon: "bg-green-100 text-[#00B86B]", text: "text-[#00B86B]", border: "border-green-200" },
  orange: { bg: "bg-orange-50", icon: "bg-orange-100 text-orange-600", text: "text-orange-600", border: "border-orange-200" },
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0057FF] to-[#111827] py-20 text-center">
        <p className="text-[#00B86B] font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">Our Services</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">Four specialized divisions, one creative family. Explore everything CharEl Media Group has to offer.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {services.map((service, i) => {
          const colors = colorMap[service.color]
          return (
            <div key={service.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`${colors.bg} rounded-3xl p-10 h-full flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`w-24 h-24 ${colors.icon} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                      <service.icon className="h-12 w-12" />
                    </div>
                    <h3 className="text-3xl font-black text-[#111827]">{service.name}</h3>
                    <p className={`${colors.text} font-semibold mt-1`}>{service.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className={`${colors.text} font-semibold text-sm uppercase tracking-wider mb-2`}>{service.subtitle}</p>
                <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-4">{service.name}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-gray-600">
                      <div className={`w-5 h-5 rounded-full ${colors.icon} flex items-center justify-center shrink-0`}><Check className="h-3 w-3" /></div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link href={service.ctaHref}><Button size="lg">{service.cta}</Button></Link>
                  <Link href={service.href}><Button size="lg" variant="outline">Learn More <ArrowRight className="h-4 w-4" /></Button></Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
