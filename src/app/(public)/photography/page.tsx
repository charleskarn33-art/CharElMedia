import type { Metadata } from "next"
import Link from "next/link"
import { Camera, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "CharEl Studio Photography",
  description: "Professional photography services in Liberia. Wedding, graduation, corporate, fashion, and more.",
}

const categories = [
  { name: "Wedding", emoji: "💍", description: "Capture your special day with stunning wedding photography." },
  { name: "Graduation", emoji: "🎓", description: "Celebrate your academic achievement with professional photos." },
  { name: "Birthday", emoji: "🎂", description: "Make birthday celebrations unforgettable with great photos." },
  { name: "Baby Shower", emoji: "🍼", description: "Precious memories of expecting and new parents." },
  { name: "Corporate", emoji: "💼", description: "Professional headshots and corporate event coverage." },
  { name: "Fashion", emoji: "👗", description: "Editorial and fashion photography for models and brands." },
  { name: "Outdoor Photoshoot", emoji: "🌿", description: "Natural light portraits in beautiful outdoor settings." },
  { name: "Passport Photos", emoji: "🧐", description: "Quick professional passport and ID photos." },
]

export default function PhotographyPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0057FF] to-[#111827] py-20 text-center relative overflow-hidden">
        <div className="relative">
          <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Camera className="h-10 w-10 text-white" />
          </div>
          <p className="text-[#00B86B] font-semibold text-sm uppercase tracking-wider mb-3">CharEl Studio</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">Photography Services</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">Creating memories that last forever. Our professional photographers are ready to capture your most important moments.</p>
          <Link href="/photography/book"><Button size="xl" variant="white">Book a Session <ArrowRight className="h-5 w-5" /></Button></Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-3">Photography Categories</h2>
          <p className="text-gray-500 text-lg">Whatever the occasion, we have the expertise to capture it beautifully.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#0057FF]/30 hover:shadow-lg transition-all group cursor-pointer">
              <div className="text-4xl mb-4">{cat.emoji}</div>
              <h3 className="font-bold text-[#111827] text-lg mb-2 group-hover:text-[#0057FF] transition-colors">{cat.name}</h3>
              <p className="text-gray-500 text-sm">{cat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#111827] mb-4">Private Photo Gallery Portal</h2>
              <p className="text-gray-600 mb-6">After your session, receive a private link to your personal gallery. View watermarked previews, select your favorites, and download high-resolution originals.</p>
              <ul className="space-y-3">
                {["Password-protected private galleries", "Watermarked preview images", "High-resolution download (per photo or full ZIP)", "Favorite and share photos", "QR code gallery access", "Email notification when ready"].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#0057FF]/10 flex items-center justify-center shrink-0"><Check className="h-3 w-3 text-[#0057FF]" /></div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-center">
                <div className="text-6xl mb-4">📸</div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">How It Works</h3>
                <div className="space-y-4 text-left">
                  {[{ step: "1", text: "Book your photography session" }, { step: "2", text: "Attend your session" }, { step: "3", text: "Receive your gallery link via email" }, { step: "4", text: "Log in to view and download your photos" }].map(({ step, text }) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0057FF] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{step}</div>
                      <p className="text-gray-600 text-sm">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-black text-[#111827] mb-4">Ready to Book?</h3>
          <p className="text-gray-500 mb-6">Contact us today to check availability and book your session.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/photography/book"><Button size="lg">Book Now <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline">Contact Us</Button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
