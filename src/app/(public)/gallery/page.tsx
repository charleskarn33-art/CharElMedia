import type { Metadata } from "next"
import Link from "next/link"
import { Camera, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our photography gallery featuring weddings, graduations, corporate events, fashion, and more.",
}

const categories = ["All", "Wedding", "Graduation", "Birthday", "Corporate", "Fashion", "Outdoor"]

const galleryItems = [
  { id: 1, category: "Wedding", title: "Johnson & Mary Wedding", emoji: "💍", color: "from-pink-300 to-rose-500", span: "col-span-2 row-span-2" },
  { id: 2, category: "Graduation", title: "Class of 2024", emoji: "🎓", color: "from-blue-300 to-blue-600" },
  { id: 3, category: "Corporate", title: "Tech Summit 2024", emoji: "💼", color: "from-gray-400 to-gray-700" },
  { id: 4, category: "Fashion", title: "Spring Collection", emoji: "✨", color: "from-purple-300 to-purple-600" },
  { id: 5, category: "Birthday", title: "Sweet 16 Celebration", emoji: "🎉", color: "from-amber-300 to-orange-500" },
  { id: 6, category: "Outdoor", title: "Nature Portraits", emoji: "🌿", color: "from-green-300 to-green-600" },
  { id: 7, category: "Wedding", title: "Davis Wedding", emoji: "💒", color: "from-rose-300 to-pink-600" },
  { id: 8, category: "Graduation", title: "Medical Graduates", emoji: "👩‍⚕️", color: "from-indigo-300 to-indigo-600" },
]

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0057FF] to-[#111827] py-20 text-center">
        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Camera className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">Our Gallery</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">A showcase of our finest photography work across all categories.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button key={cat} className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${cat === "All" ? "bg-[#0057FF] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{cat}</button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div key={item.id} className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span || ""}`}>
              <div className={`bg-gradient-to-br ${item.color} w-full h-full flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-5xl mb-2">{item.emoji}</div>
                  <p className="text-white/60 text-xs font-medium">{item.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black text-[#111827] mb-3">Love What You See?</h3>
          <p className="text-gray-500 mb-6">Book a photography session and let us create memories for you.</p>
          <Link href="/photography/book"><Button size="lg">Book a Session <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    </div>
  )
}
