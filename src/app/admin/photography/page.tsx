import React from "react"
import { Camera, Check, X, Upload, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

const bookings = [
  {
    id: "PB-001",
    customer: "Sarah Johnson",
    email: "s.johnson@example.com",
    phone: "+231 770 111111",
    eventType: "Wedding",
    eventDate: "2024-12-28",
    location: "Bella Vista Hotel",
    status: "approved",
    hasAlbum: false,
  },
  {
    id: "PB-002",
    customer: "Angela Moore",
    email: "a.moore@example.com",
    phone: "+231 880 222222",
    eventType: "Graduation",
    eventDate: "2024-12-15",
    location: "University of Liberia",
    status: "completed",
    hasAlbum: true,
  },
  {
    id: "PB-003",
    customer: "Marcus Williams",
    email: "m.williams@example.com",
    phone: "+231 770 333333",
    eventType: "Corporate",
    eventDate: "2025-01-10",
    location: "CharEl Studio",
    status: "pending",
    hasAlbum: false,
  },
]

export default function AdminPhotographyPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#111827]">Photography Bookings</h1>
        <p className="text-gray-500 mt-1">Manage photography sessions and photo album delivery.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Pending Review", value: "3", color: "text-yellow-600" },
          { label: "Approved Sessions", value: "12", color: "text-blue-600" },
          { label: "Albums Delivered", value: "28", color: "text-green-600" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="p-5 text-center">
              <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-[#0057FF]" />
            All Bookings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="border border-gray-100 rounded-2xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400 font-mono">{booking.id}</span>
                      <Badge variant={booking.status === "approved" ? "approved" : booking.status === "completed" ? "completed" : "pending"}>
                        {booking.status}
                      </Badge>
                      {booking.hasAlbum && (
                        <Badge variant="secondary" className="text-xs">Album Ready</Badge>
                      )}
                    </div>
                    <h3 className="font-bold text-[#111827]">{booking.customer}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-1">
                      <span>{booking.eventType}</span>
                      <span>·</span>
                      <span>{formatDate(booking.eventDate)}</span>
                      <span>·</span>
                      <span>{booking.location}</span>
                      <span>·</span>
                      <span>{booking.email}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 shrink-0">
                    <Button size="sm" variant="outline">
                      <Eye className="h-3.5 w-3.5" />
                    </Button>
                    {booking.status === "pending" && (
                      <>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <Check className="h-3.5 w-3.5" /> Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <X className="h-3.5 w-3.5" />
                        </Button>
                      </>
                    )}
                    {booking.status === "approved" && (
                      <Button size="sm" variant="secondary">
                        <Upload className="h-3.5 w-3.5" /> Upload Photos
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
