import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0057FF] to-[#111827] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B86B]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Calendar className="h-14 w-14 text-[#00B86B] mx-auto mb-6" />
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Ready to Create Something Amazing?</h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Book your session today. Photography, recording, podcast, or printing — we&apos;re here to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book">
            <Button size="xl" variant="white" className="group">
              Book Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0057FF]">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
