import type { Metadata } from "next"
import Link from "next/link"
import { Music2, ArrowRight, Check, Headphones, Mic, Sliders, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "CharEl Sound Recording Studio",
  description: "Professional recording studio in Liberia. Music recording, voice overs, mixing, mastering and audio editing.",
}

const services = [
  { name: "Music Recording", icon: Mic, description: "All genres welcome. Record your next hit in our professional studio." },
  { name: "Voice Over", icon: Radio, description: "Crisp, professional voice over recording for commercials, films, and more." },
  { name: "Podcast Recording", icon: Headphones, description: "High-quality podcast recording with our professional equipment." },
  { name: "Audio Editing", icon: Sliders, description: "Clean and polished audio editing by our experienced engineers." },
  { name: "Mixing", icon: Sliders, description: "Professional mixing services to make your audio sound perfect." },
  { name: "Mastering", icon: Music2, description: "Final mastering to ensure your audio sounds great on all platforms." },
]

const pricing = [
  { name: "Basic Session", duration: "2 hours", price: "$50", features: ["Studio time", "Basic mixing", "MP3 delivery"] },
  { name: "Standard Session", duration: "4 hours", price: "$90", features: ["Studio time", "Professional mixing", "WAV & MP3 delivery", "1 revision"] },
  { name: "Full Day", duration: "8 hours", price: "$160", features: ["Studio time", "Mixing & mastering", "WAV & MP3 delivery", "3 revisions", "Online file delivery"] },
]

export default function RecordingPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-green-900 via-[#00B86B]/80 to-[#111827] py-20 text-center relative overflow-hidden">
        <div className="relative">
          <div className="w-20 h-20 bg-[#00B86B] rounded-2xl flex items-center justify-center mx-auto mb-6"><Music2 className="h-10 w-10 text-white" /></div>
          <p className="text-green-300 font-semibold text-sm uppercase tracking-wider mb-3">CharEl Sound</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">Recording Studio</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">State-of-the-art recording facility for musicians, voice artists, podcasters, and content creators.</p>
          <Link href="/recording/book"><Button size="xl" variant="white">Book Studio Time <ArrowRight className="h-5 w-5" /></Button></Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-3">Studio Services</h2>
          <p className="text-gray-500 text-lg">Professional audio services for every creative need.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((svc) => (
            <div key={svc.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00B86B]/30 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00B86B] transition-colors">
                <svc.icon className="h-6 w-6 text-[#00B86B] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#111827] text-lg mb-2">{svc.name}</h3>
              <p className="text-gray-500 text-sm">{svc.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-3">Studio Rates</h2>
          <p className="text-gray-500 text-lg">Transparent pricing for all session types.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pricing.map((plan, i) => (
            <div key={plan.name} className={`rounded-2xl p-8 border ${i === 1 ? "border-[#00B86B] bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg scale-105" : "border-gray-100 bg-white"}`}>
              {i === 1 && <div className="text-xs font-bold text-[#00B86B] uppercase tracking-wider mb-3">Most Popular</div>}
              <h3 className="text-xl font-black text-[#111827] mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.duration}</p>
              <p className="text-4xl font-black text-[#111827] mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-600"><Check className="h-4 w-4 text-[#00B86B] shrink-0" />{feat}</li>
                ))}
              </ul>
              <Link href="/recording/book"><Button variant={i === 1 ? "secondary" : "outline"} className="w-full">Book This Session</Button></Link>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 text-center">
          <Music2 className="h-12 w-12 text-[#00B86B] mx-auto mb-4" />
          <h3 className="text-3xl font-black text-[#111827] mb-3">Download Your Audio Files</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">After your session, access your audio files through our secure client portal. Download individual tracks or the entire session.</p>
          <Link href="/portal"><Button size="lg" variant="secondary">Access Client Portal <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    </div>
  )
}
