import type { Metadata } from "next"
import Link from "next/link"
import { Camera, Mic2, Music2, Printer, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Book Now",
  description: "Book photography, podcast, recording studio, or printing services with CharEl Media Group.",
}

const bookingOptions = [
  { name: "CharEl Studio", tagline: "Photography Session", icon: Camera, color: "from-[#0057FF] to-[#0046CC]", bg: "bg-blue-50", iconColor: "text-[#0057FF]", href: "/photography/book", description: "Book a professional photography session for any occasion — weddings, graduations, corporate events, and more.", timeframe: "24hr confirmation" },
  { name: "CharEl Corner", tagline: "Podcast Guest Application", icon: Mic2, color: "from-purple-500 to-purple-700", bg: "bg-purple-50", iconColor: "text-purple-600", href: "/podcast/apply", description: "Apply to be a featured guest on our podcast. Share your story with thousands of listeners.", timeframe: "3–5 day review" },
  { name: "CharEl Sound", tagline: "Recording Studio Session", icon: Music2, color: "from-[#00B86B] to-[#009A59]", bg: "bg-green-50", iconColor: "text-[#00B86B]", href: "/recording/book", description: "Book studio time for music recording, voice overs, podcasting, mixing, and mastering.", timeframe: "24hr confirmation" },
  { name: "CharEl Press", tagline: "Printing Order", icon: Printer, color: "from-orange-500 to-orange-700", bg: "bg-orange-50", iconColor: "text-orange-600", href: "/printing/order", description: "Order t-shirts, banners, business cards, and more. Upload artwork and track your order online.", timeframe: "Same day quote" },
]

export default function BookPage() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-[#0057FF] to-[#111827] py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">Book Now</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">Choose the service you need and fill out the booking form. We&apos;ll confirm your appointment within one business day.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookingOptions.map((opt) => (
            <div key={opt.name} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-14 h-14 ${opt.bg} rounded-2xl flex items-center justify-center shrink-0`}>
                  <opt.icon className={`h-7 w-7 ${opt.iconColor}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{opt.tagline}</p>
                  <h3 className="text-xl font-black text-[#111827]">{opt.name}</h3>
                </div>
              </div>
              <p className="text-gray-500 mb-4">{opt.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">⏱ {opt.timeframe}</span>
                <Link href={opt.href}>
                  <Button>Book Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-3xl p-10 border border-gray-100">
          <h3 className="text-2xl font-black text-[#111827] mb-3">Need Help Choosing?</h3>
          <p className="text-gray-500 mb-6">Not sure which service is right for you? Contact us and we&apos;ll guide you to the perfect solution.</p>
          <Link href="/contact"><Button variant="outline" size="lg">Contact Our Team</Button></Link>
        </div>
      </div>
    </div>
  )
}
