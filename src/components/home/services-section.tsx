import React from "react"
import Link from "next/link"
import { Mic2, Camera, Music2, Printer, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    name: "CharEl Corner",
    tagline: "Podcast Studio",
    description: "Share your voice with the world. Join our podcast as a guest or book studio time for your own show.",
    icon: Mic2,
    href: "/podcast",
    color: "from-purple-500 to-purple-700",
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    features: ["Business & Entrepreneurship", "Technology & Innovation", "Entertainment & Faith", "Guest Applications"],
  },
  {
    name: "CharEl Studio",
    tagline: "Photography",
    description: "Capture life's most precious moments with our professional photographers for any occasion.",
    icon: Camera,
    href: "/photography",
    color: "from-[#0057FF] to-[#0046CC]",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-[#0057FF]",
    features: ["Weddings & Graduations", "Corporate Events", "Fashion & Portraits", "Private Photo Galleries"],
  },
  {
    name: "CharEl Sound",
    tagline: "Recording Studio",
    description: "Professional music recording, voice overs, mixing and mastering in our state-of-the-art studio.",
    icon: Music2,
    href: "/recording",
    color: "from-[#00B86B] to-[#009A59]",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-[#00B86B]",
    features: ["Music Recording", "Voice Over & Podcast", "Mixing & Mastering", "Audio Editing"],
  },
  {
    name: "CharEl Press",
    tagline: "Printing & Branding",
    description: "From business cards to large banners, we print and brand everything your business needs.",
    icon: Printer,
    href: "/printing",
    color: "from-orange-500 to-orange-700",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    features: ["T-Shirts & Branded Merch", "Banners & Roll-ups", "Business Cards & Flyers", "Brochures & Stickers"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#00B86B] font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">
            Four Powerful Divisions
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            One company, four specialized divisions — everything your creative and media needs demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className={`${service.bg} rounded-3xl p-8 group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`${service.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center shrink-0`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{service.tagline}</p>
                  <h3 className="text-2xl font-black text-[#111827]">{service.name}</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link href={service.href}>
                <Button variant="outline" className="border-current group-hover:bg-white transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
