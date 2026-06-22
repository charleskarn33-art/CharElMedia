import React from "react"
import Link from "next/link"
import { Camera, Download, Lock, Image, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const albums = [
  {
    id: "1",
    title: "Johnson & Mary Wedding",
    date: "Dec 1, 2024",
    totalPhotos: 245,
    coverEmoji: "💍",
    coverColor: "from-pink-300 to-rose-500",
    passwordProtected: true,
    status: "ready",
  },
  {
    id: "2",
    title: "Class of 2024 Graduation",
    date: "Nov 15, 2024",
    totalPhotos: 89,
    coverEmoji: "🎓",
    coverColor: "from-blue-300 to-blue-600",
    passwordProtected: false,
    status: "ready",
  },
  {
    id: "3",
    title: "Tech Summit Corporate Shoot",
    date: "Oct 30, 2024",
    totalPhotos: 132,
    coverEmoji: "💼",
    coverColor: "from-gray-400 to-gray-700",
    passwordProtected: false,
    status: "processing",
  },
]

export default function AlbumsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#111827]">My Photo Albums</h1>
        <p className="text-gray-500 mt-1">Access and download your private photo galleries.</p>
      </div>

      {albums.length === 0 ? (
        <div className="text-center py-20">
          <Camera className="h-16 w-16 text-gray-200 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400 mb-2">No albums yet</h3>
          <p className="text-gray-400 mb-6">Your photo galleries will appear here after your session is completed.</p>
          <Link href="/photography/book">
            <Button>Book a Photography Session</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <Card key={album.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              {/* Cover */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${album.coverColor} flex items-center justify-center relative`}>
                <div className="text-6xl">{album.coverEmoji}</div>

                {album.passwordProtected && (
                  <div className="absolute top-3 right-3 bg-black/50 rounded-lg p-1.5">
                    <Lock className="h-3.5 w-3.5 text-white" />
                  </div>
                )}

                {album.status === "processing" && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-2" />
                      <p className="text-xs font-medium">Processing...</p>
                    </div>
                  </div>
                )}

                {album.status === "ready" && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link href={`/portal/albums/${album.id}`}>
                      <Button size="sm" variant="white">View Gallery</Button>
                    </Link>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-[#111827] text-sm">{album.title}</h3>
                    <p className="text-gray-400 text-xs mt-0.5">{album.date}</p>
                  </div>
                  <Badge variant={album.status === "ready" ? "approved" : "pending"} className="text-xs">
                    {album.status}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                  <Image className="h-3.5 w-3.5" />
                  <span>{album.totalPhotos} photos</span>
                  {album.passwordProtected && (
                    <>
                      <Lock className="h-3.5 w-3.5 ml-1" />
                      <span>Password protected</span>
                    </>
                  )}
                </div>

                {album.status === "ready" && (
                  <div className="flex gap-2">
                    <Link href={`/portal/albums/${album.id}`} className="flex-1">
                      <Button size="sm" className="w-full">
                        <Camera className="h-3.5 w-3.5" /> View
                      </Button>
                    </Link>
                    <Button size="sm" variant="outline" className="shrink-0">
                      <Download className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="sm" variant="outline" className="shrink-0">
                      <Share2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
