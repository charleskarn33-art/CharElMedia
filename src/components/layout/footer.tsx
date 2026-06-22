import React from "react"
import Link from "next/link"
import { Mic2, Camera, Music2, Printer, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0057FF] to-[#00B86B] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">CE</span>
              </div>
              <div>
                <p className="font-black text-xl">CharEl Media Group</p>
                <p className="text-gray-400 text-sm">Creating Memories, Voices & Brands</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your complete media and creative partner in Liberia. Book photography sessions,
              record music, appear on our podcast, and order professional printing services online.
            </p>
            <div className="flex gap-3">
              {[
                { label: "FB", href: "#" },
                { label: "IG", href: "#" },
                { label: "YT", href: "#" },
                { label: "X", href: "#" },
              ].map(({ label, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0057FF] transition-colors text-xs font-bold text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {[
                { name: "CharEl Corner", href: "/podcast", icon: Mic2 },
                { name: "CharEl Studio", href: "/photography", icon: Camera },
                { name: "CharEl Sound", href: "/recording", icon: Music2 },
                { name: "CharEl Press", href: "/printing", icon: Printer },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                    <item.icon className="h-3.5 w-3.5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
                { name: "Client Portal", href: "/portal" },
                { name: "Book Now", href: "/book" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Monrovia, Liberia</span>
              </li>
              <li>
                <a href="tel:+2310000000000" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <Phone className="h-4 w-4" />
                  +231 000 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@charelmedia.com" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <Mail className="h-4 w-4" />
                  info@charelmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CharEl Media Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
