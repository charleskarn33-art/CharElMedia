"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Mic2, Camera, Music2, Printer } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0057FF] via-[#0046CC] to-[#111827]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00B86B]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#00B86B]/10 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      {/* Floating service icons */}
      <div className="absolute top-24 right-16 hidden lg:flex flex-col gap-6">
        {[
          { icon: Mic2, label: "Podcast", color: "from-purple-500 to-purple-700", delay: "0ms" },
          { icon: Camera, label: "Photography", color: "from-blue-500 to-blue-700", delay: "200ms" },
          { icon: Music2, label: "Recording", color: "from-green-500 to-green-700", delay: "400ms" },
          { icon: Printer, label: "Printing", color: "from-orange-500 to-orange-700", delay: "600ms" },
        ].map(({ icon: Icon, label, color, delay }) => (
          <div
            key={label}
            className="flex items-center gap-3 animate-float"
            style={{ animationDelay: delay }}
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <span className="text-white/70 text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/20">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-[#FFD700] text-[#FFD700]" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">Liberia&apos;s #1 Creative Media Company</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-5xl mx-auto">
          Your Complete{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B86B] to-[#00E090]">
            Media & Creative
          </span>{" "}
          Partner
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/75 max-w-3xl mx-auto mb-10 leading-relaxed">
          Book photography sessions, record music, appear on our podcast, and order
          professional printing services online. All in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/book">
            <Button size="xl" variant="white" className="w-full sm:w-auto group">
              Book Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="xl" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#0057FF]">
              <Play className="h-5 w-5" />
              View Services
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "1000+", label: "Photos Delivered" },
            { value: "50+", label: "Podcast Episodes" },
            { value: "5★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" fill="white" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
