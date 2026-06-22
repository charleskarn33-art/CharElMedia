import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for photography, podcast, recording studio, and printing services at CharEl Media Group.",
}

const pricingCategories = [
  {
    service: "CharEl Studio", subtitle: "Photography", color: "blue",
    plans: [
      { name: "Basic", price: "$80", features: ["2-hour session", "1 location", "50 edited photos", "Online gallery", "JPEG downloads"] },
      { name: "Standard", price: "$150", popular: true, features: ["4-hour session", "2 locations", "150 edited photos", "Private gallery", "JPEG & RAW downloads", "1 print 8×10"] },
      { name: "Premium", price: "$300", features: ["Full day (8hrs)", "Unlimited locations", "300+ edited photos", "Private gallery", "All formats download", "5 prints 8×10", "Album design"] },
    ]
  },
  {
    service: "CharEl Sound", subtitle: "Recording Studio", color: "green",
    plans: [
      { name: "Basic", price: "$50", features: ["2-hour session", "Studio time", "Basic mixing", "MP3 delivery"] },
      { name: "Standard", price: "$90", popular: true, features: ["4-hour session", "Studio time", "Professional mixing", "WAV & MP3 delivery", "1 revision"] },
      { name: "Full Day", price: "$160", features: ["8-hour session", "Studio time", "Mixing & mastering", "WAV & MP3 delivery", "3 revisions", "Online file delivery"] },
    ]
  },
]

const colorMap: Record<string, { badge: string; btn: string; border: string }> = {
  blue: { badge: "bg-[#0057FF] text-white", btn: "bg-[#0057FF] hover:bg-[#0046CC] text-white", border: "border-[#0057FF]" },
  green: { badge: "bg-[#00B86B] text-white", btn: "bg-[#00B86B] hover:bg-[#009A59] text-white", border: "border-[#00B86B]" },
}

export default function PricingPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0057FF] to-[#111827] py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">Transparent Pricing</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">No hidden fees. Clear pricing for all our services. Contact us for custom quotes on large orders.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {pricingCategories.map((cat) => {
          const colors = colorMap[cat.color]
          return (
            <div key={cat.service}>
              <div className="text-center mb-10">
                <p className="text-gray-400 text-sm uppercase font-semibold tracking-wider mb-2">{cat.subtitle}</p>
                <h2 className="text-3xl font-black text-[#111827]">{cat.service}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.plans.map((plan) => (
                  <div key={plan.name} className={`rounded-2xl p-8 border ${'popular' in plan && plan.popular ? `${colors.border} border-2 shadow-xl scale-105` : "border-gray-100 bg-white"}`}>
                    {'popular' in plan && plan.popular && (
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${colors.badge}`}>Most Popular</span>
                    )}
                    <h3 className="text-xl font-black text-[#111827] mb-1">{plan.name}</h3>
                    <p className="text-4xl font-black text-[#111827] mt-3 mb-6">{plan.price}</p>
                    <ul className="space-y-2 mb-8">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-[#00B86B] shrink-0" />{feat}
                        </li>
                      ))}
                    </ul>
                    <Link href="/book">
                      <Button className="w-full" variant={'popular' in plan && plan.popular ? "default" : "outline"}>Book This Plan</Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        <div>
          <div className="text-center mb-10">
            <p className="text-gray-400 text-sm uppercase font-semibold tracking-wider mb-2">Printing & Branding</p>
            <h2 className="text-3xl font-black text-[#111827]">CharEl Press</h2>
            <p className="text-gray-500 mt-2">Printing prices vary by product type, quantity, and dimensions. Get a custom quote.</p>
          </div>
          <div className="bg-orange-50 rounded-3xl p-10 text-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {[
                { product: "Business Cards", price: "From $15/100" },
                { product: "Flyers A5", price: "From $25/100" },
                { product: "T-Shirts", price: "From $12 each" },
                { product: "Banners 3×6ft", price: "From $45" },
              ].map(({ product, price }) => (
                <div key={product} className="bg-white rounded-xl p-4">
                  <p className="font-bold text-[#111827] text-sm">{product}</p>
                  <p className="text-orange-600 font-semibold text-sm mt-1">{price}</p>
                </div>
              ))}
            </div>
            <Link href="/printing/order"><Button size="lg">Get a Custom Quote <ArrowRight className="h-4 w-4" /></Button></Link>
          </div>
        </div>

        <div className="bg-purple-50 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black text-[#111827] mb-3">CharEl Corner Podcast</h2>
          <p className="text-gray-600 mb-2 text-lg">Guest appearances are <span className="font-bold text-purple-600">FREE</span></p>
          <p className="text-gray-500 mb-6">We select guests based on the value they bring to our audience. Apply today!</p>
          <Link href="/podcast/apply">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Apply as a Guest <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
