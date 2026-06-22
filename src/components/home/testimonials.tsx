import React from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  { name: "Sarah Johnson", role: "Bride", service: "CharEl Studio", text: "CharEl Studio captured our wedding perfectly. Every photo tells our love story beautifully. We couldn't be happier!", rating: 5, initials: "SJ" },
  { name: "Marcus Williams", role: "Music Artist", service: "CharEl Sound", text: "The recording studio is world-class. My EP sounds incredible after mixing and mastering. Highly recommend!", rating: 5, initials: "MW" },
  { name: "Grace Kollie", role: "Entrepreneur", service: "CharEl Corner", text: "Being featured on CharEl Corner's podcast gave my business incredible visibility. The team was so professional.", rating: 5, initials: "GK" },
  { name: "James Tarr", role: "Business Owner", service: "CharEl Press", text: "Our company branding looks amazing! T-shirts, banners, business cards — all top quality printing. Our team loves them.", rating: 5, initials: "JT" },
  { name: "Angela Moore", role: "Graduate", service: "CharEl Studio", text: "My graduation photos from CharEl Studio are stunning. I got my private gallery link within 3 days and downloads were easy!", rating: 5, initials: "AM" },
  { name: "David Flomo", role: "Pastor", service: "CharEl Corner", text: "Our faith-based podcast episodes have reached thousands. CharEl Corner made it all possible with their amazing setup.", rating: 5, initials: "DF" },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#00B86B] font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4">What Our Clients Say</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Don&apos;t just take our word for it — hear from our satisfied clients across all four divisions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-[#0057FF]/20" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0057FF] to-[#00B86B] rounded-full flex items-center justify-center text-white font-bold text-sm">{t.initials}</div>
                <div>
                  <p className="font-semibold text-[#111827] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role} · {t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
