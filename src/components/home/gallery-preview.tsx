import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, ArrowRight } from "lucide-react"

const categories = [
  { name: "Wedding", emoji: "💍", color: "from-pink-400 to-rose-600" },
  { name: "Graduation", emoji: "🎓", color: "from-blue-400 to-[#0057FF]" },
  { name: "Corporate", emoji: "💼", color: "from-gray-600 to-gray-800" },
  { name: "Fashion", emoji: "✨", color: "from-purple-400 to-purple-700" },
  { name: "Birthday", emoji: "🎉", color: "from-amber-400 to-orange-600" },
  { name: "Outdoor", emoji: "🌿", color: "from-[#00B86B] to-green-700" },
]

export function GalleryPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <p className="text-[#00B86B] font-semibold text-sm uppercase tracking-wider mb-2">CharEl Studio</p>
            <h2 className="text-4xl font-black text-[#111827]">Photography Gallery</h2>
          </div>
          <Link href="/gallery">
            <Button variant="outline" className="group">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href={`/gallery?category=${cat.name.toLowerCase()}`}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <div className={`bg-gradient-to-br ${cat.color} flex items-center justify-center ${i === 0 ? "aspect-square sm:aspect-auto sm:h-full min-h-[200px]" : "aspect-square"}`}>
                <div className="text-center">
                  <div className="text-5xl mb-3">{cat.emoji}</div>
                  <Camera className="h-8 w-8 text-white/30 mx-auto" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold text-lg">{cat.name}</h3>
                  <p className="text-white/80 text-sm">View Gallery &#8594;</p>
                </div>
              </div>
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/photography">
            <Button size="lg">Book Photography Session <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
