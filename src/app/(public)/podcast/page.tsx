import type { Metadata } from "next"
import Link from "next/link"
import { Mic2, Play, Clock, ArrowRight, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "CharEl Corner Podcast",
  description: "Listen to CharEl Corner podcast episodes. Business, entrepreneurship, technology, faith, and entertainment from Liberia.",
}

const categories = ["All", "Business", "Entrepreneurship", "Technology", "Entertainment", "Faith", "Education"]

const episodes = [
  { id: 1, title: "Building a Successful Business in Liberia", guest: "Emmanuel Kollie", category: "Business", duration: "45 min", description: "Emmanuel shares his journey from a small vendor to owning a thriving enterprise in Monrovia.", published: "Dec 15, 2024" },
  { id: 2, title: "Tech Innovation and the African Youth", guest: "Patricia Doe", category: "Technology", duration: "38 min", description: "Patricia discusses the booming tech ecosystem across Africa and what it means for Liberian youth.", published: "Dec 8, 2024" },
  { id: 3, title: "Faith, Resilience and Entrepreneurship", guest: "Bishop James Flomo", category: "Faith", duration: "52 min", description: "How faith and business go hand in hand according to one of Liberia's most respected spiritual leaders.", published: "Dec 1, 2024" },
  { id: 4, title: "The Future of Education in Liberia", guest: "Dr. Sarah Kpan", category: "Education", duration: "41 min", description: "Educational reform and the role of technology in transforming Liberian classrooms.", published: "Nov 24, 2024" },
  { id: 5, title: "Music, Culture and Entertainment in West Africa", guest: "DJ Supreme", category: "Entertainment", duration: "35 min", description: "Exploring the vibrant entertainment industry and how Liberian artists are gaining global recognition.", published: "Nov 17, 2024" },
  { id: 6, title: "E-Commerce and Digital Marketing for SMEs", guest: "Alice Brown", category: "Entrepreneurship", duration: "48 min", description: "Practical guide for Liberian small businesses to leverage digital marketing and online sales.", published: "Nov 10, 2024" },
]

const categoryColors: Record<string, string> = {
  Business: "bg-blue-100 text-blue-700", Technology: "bg-purple-100 text-purple-700",
  Faith: "bg-amber-100 text-amber-700", Entertainment: "bg-pink-100 text-pink-700",
  Education: "bg-green-100 text-green-700", Entrepreneurship: "bg-orange-100 text-orange-700",
}

export default function PodcastPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-[#111827] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full border-2 border-white" />
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border border-white" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mic2 className="h-10 w-10 text-white" />
          </div>
          <p className="text-purple-300 font-semibold text-sm uppercase tracking-wider mb-3">CharEl Corner</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">The Podcast</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">Conversations that inspire, inform, and elevate. Featuring Liberia&apos;s brightest minds.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/podcast/apply"><Button size="lg" variant="white"><Users className="h-5 w-5" /> Apply to Be a Guest</Button></Link>
            <Link href="#episodes"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900"><Play className="h-5 w-5" /> Listen Now</Button></Link>
          </div>
        </div>
      </div>

      <div id="episodes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search episodes..." className="pl-10" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${cat === "All" ? "bg-[#0057FF] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep) => (
            <div key={ep.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-[16/9] bg-gradient-to-br from-purple-900 to-gray-900 flex items-center justify-center relative">
                <Mic2 className="h-16 w-16 text-white/10 absolute" />
                <button className="relative z-10 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-purple-600 ml-0.5" />
                </button>
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[ep.category] || "bg-gray-100 text-gray-700"}`}>{ep.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111827] text-base mb-2 line-clamp-2 group-hover:text-[#0057FF] transition-colors">{ep.title}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{ep.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs font-medium">Guest: {ep.guest}</span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs"><Clock className="h-3 w-3" />{ep.duration}</div>
                </div>
                <p className="text-gray-300 text-xs mt-2">{ep.published}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-10 text-center">
          <Mic2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-3xl font-black text-[#111827] mb-3">Want to Be on the Show?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">Share your expertise, story, or business with thousands of listeners. Apply to be a guest on CharEl Corner.</p>
          <Link href="/podcast/apply"><Button size="lg">Apply Now <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    </div>
  )
}
