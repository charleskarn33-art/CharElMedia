"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Mic2, Camera, Music2, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  { name: "CharEl Corner", description: "Podcast Studio", href: "/podcast", icon: Mic2, color: "text-purple-600" },
  { name: "CharEl Studio", description: "Photography", href: "/photography", icon: Camera, color: "text-blue-600" },
  { name: "CharEl Sound", description: "Recording Studio", href: "/recording", icon: Music2, color: "text-green-600" },
  { name: "CharEl Press", description: "Printing & Branding", href: "/printing", icon: Printer, color: "text-orange-600" },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0057FF] to-[#00B86B] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-black text-lg">CE</span>
            </div>
            <div className="hidden sm:block">
              <p className={cn("font-black text-lg leading-none", scrolled ? "text-[#111827]" : "text-white")}>
                CharEl Media
              </p>
              <p className={cn("text-xs leading-none mt-0.5", scrolled ? "text-gray-500" : "text-white/70")}>
                Group
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      scrolled
                        ? "text-[#111827] hover:text-[#0057FF] hover:bg-[#0057FF]/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}>
                      {link.name}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                              <service.icon className={cn("h-4 w-4", service.color)} />
                            </div>
                            <div>
                              <p className="font-semibold text-sm text-[#111827]">{service.name}</p>
                              <p className="text-xs text-gray-500">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      pathname === link.href
                        ? scrolled
                          ? "text-[#0057FF] bg-[#0057FF]/5"
                          : "text-white bg-white/20"
                        : scrolled
                          ? "text-[#111827] hover:text-[#0057FF] hover:bg-[#0057FF]/5"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/portal">
              <Button variant={scrolled ? "outline" : "white"} size="sm">
                Client Portal
              </Button>
            </Link>
            <Link href="/book">
              <Button size="sm">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-[#111827] hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <p className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Services</p>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#111827] hover:bg-gray-50"
                      >
                        <service.icon className={cn("h-4 w-4", service.color)} />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-[#0057FF] bg-[#0057FF]/5"
                        : "text-[#111827] hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link href="/portal" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">Client Portal</Button>
              </Link>
              <Link href="/book" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
