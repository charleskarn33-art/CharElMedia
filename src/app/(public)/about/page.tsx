import type { Metadata } from "next"
import Link from "next/link"
import { Heart, Target, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CharEl Media Group — Liberia's premier media and creative company.",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0057FF] to-[#111827] py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative">
          <p className="text-[#00B86B] font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">About CharEl Media Group</h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">Creating Memories, Voices & Brands since day one. We are Liberia&apos;s premier creative media company.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-[#00B86B] font-semibold text-sm uppercase tracking-wider mb-3">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-6">Your Creative Partner in Liberia</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>CharEl Media Group was founded with a simple but powerful vision: to give Liberians access to world-class creative and media services right here at home. No more flying abroad for professional photography. No more expensive international studios.</p>
              <p>We built four specialized divisions under one roof — CharEl Corner (Podcast), CharEl Studio (Photography), CharEl Sound (Recording Studio), and CharEl Press (Printing) — to serve every creative need our clients have.</p>
              <p>From capturing your wedding day to recording your debut album, from amplifying your voice on our podcast to branding your business with quality print materials — we do it all with passion, professionalism, and purpose.</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#0057FF] to-[#00B86B] rounded-3xl p-1">
            <div className="bg-white rounded-[22px] p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Happy Clients" },
                  { value: "1000+", label: "Photos Delivered" },
                  { value: "50+", label: "Podcast Episodes" },
                  { value: "4", label: "Divisions" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-2xl">
                    <p className="text-3xl font-black text-[#0057FF]">{stat.value}</p>
                    <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Target, title: "Our Mission", color: "text-[#0057FF] bg-blue-100", text: "To provide Liberians with access to premium media, photography, recording, and printing services that compete with the best in the world — at prices that make sense locally." },
            { icon: Eye, title: "Our Vision", color: "text-[#00B86B] bg-green-100", text: "To become the most recognized and trusted creative media company in West Africa, known for excellence, innovation, and community empowerment." },
            { icon: Heart, title: "Our Values", color: "text-red-500 bg-red-100", text: "Quality, integrity, creativity, and community. We believe in doing great work for great people, building lasting relationships, and giving back to the communities we serve." },
          ].map(({ icon: Icon, title, color, text }) => (
            <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-5`}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black text-[#111827] mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#111827] mb-3">Our Creative Team</h2>
          <p className="text-gray-500 text-lg">Talented professionals dedicated to bringing your vision to life.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
          {[
            { name: "Charles Karn", role: "Founder & CEO", emoji: "👨‍💼" },
            { name: "Elisa Morris", role: "Lead Photographer", emoji: "📷" },
            { name: "Marcus Sound", role: "Audio Engineer", emoji: "🎧" },
            { name: "Grace Print", role: "Design & Print Lead", emoji: "🎨" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0057FF] to-[#00B86B] rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">{member.emoji}</div>
              <p className="font-bold text-[#111827]">{member.name}</p>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-[#0057FF] to-[#111827] rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-black mb-4">Ready to Work With Us?</h3>
          <p className="text-white/70 mb-8 text-lg">Let&apos;s create something amazing together.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/book"><Button size="lg" variant="white">Book Now <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0057FF]">Contact Us</Button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
