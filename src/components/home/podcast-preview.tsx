import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Clock, ArrowRight, Headphones } from "lucide-react"

const episodes = [
  { id: 1, title: "Building a Successful Business in Liberia", guest: "Emmanuel Kollie", category: "Business", duration: "45 min", thumbnail: null },
  { id: 2, title: "Tech Innovation and the African Youth", guest: "Patricia Doe", category: "Technology", duration: "38 min", thumbnail: null },
  { id: 3, title: "Faith, Resilience and Entrepreneurship", guest: "Bishop James Flomo", category: "Faith", duration: "52 min", thumbnail: null },
]

const categoryColors: Record<string, string> = {
  Business: "bg-blue-100 text-blue-700",
  Technology: "bg-purple-100 text-purple-700",
  Faith: "bg-amber-100 text-amber-700",
  Entertainment: "bg-pink-100 text-pink-700",
  Education: "bg-green-100 text-green-700",
  Entrepreneurship: "bg-orange-100 text-orange-700",
}

export function PodcastPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <p className="text-[#00B86B] font-semibold text-sm uppercase tracking-wider mb-2">CharEl Corner</p>
            <h2 className="text-4xl font-black text-[#111827]">Latest Episodes</h2>
          </div>
          <Link href="/podcast">
            <Button variant="outline" className="group">
              All Episodes
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {episodes.map((ep) => (
            <div key={ep.id} className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-[#0057FF]/40 to-purple-900/40 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Headphones className="h-16 w-16 text-white/20" />
                </div>
                <button className="relative z-10 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-[#0057FF] ml-0.5" />
                </button>
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[ep.category] || "bg-gray-100 text-gray-700"}`}>{ep.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-lg mb-2 line-clamp-2 group-hover:text-[#00B86B] transition-colors">{ep.title}</h3>
                <p className="text-gray-400 text-sm mb-3">Guest: {ep.guest}</p>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <Clock className="h-3.5 w-3.5" />
                  {ep.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/podcast/apply">
            <Button size="lg" variant="secondary">Apply to Be a Guest <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
