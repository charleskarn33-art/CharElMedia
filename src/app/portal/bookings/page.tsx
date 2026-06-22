import React from "react"
import Link from "next/link"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

const bookings = [
  {
    id: "1",
    type: "Photography",
    eventType: "Wedding",
    date: "2024-12-28",
    time: "10:00",
    location: "Bella Vista Hotel, Monrovia",
    status: "approved",
    totalAmount: 300,
    depositPaid: 100,
  },
  {
    id: "2",
    type: "Photography",
    eventType: "Corporate Headshots",
    date: "2025-01-15",
    time: "14:00",
    location: "CharEl Studio, Monrovia",
    status: "pending",
    totalAmount: 150,
    depositPaid: 0,
  },
]

const statusVariants: Record<string, "approved" | "pending" | "cancelled" | "completed"> = {
  approved: "approved",
  pending: "pending",
  cancelled: "cancelled",
  completed: "completed",
}

export default function BookingsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#111827]">My Bookings</h1>
          <p className="text-gray-500 mt-1">Manage your photography and studio bookings.</p>
        </div>
        <Link href="/photography/book">
          <Button size="sm">New Booking <ArrowRight className="h-3.5 w-3.5" /></Button>
        </Link>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-20">
          <Calendar className="h-16 w-16 text-gray-200 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400 mb-2">No bookings yet</h3>
          <Link href="/book">
            <Button>Book a Service</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-[#111827]">{booking.eventType}</h3>
                      <Badge variant={statusVariants[booking.status]}>{booking.status}</Badge>
                      <span className="text-xs text-gray-400">{booking.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(booking.date)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {booking.time}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {booking.location}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-black text-[#111827] text-lg">${booking.totalAmount}</p>
                    <p className="text-xs text-gray-400">Deposit: ${booking.depositPaid} paid</p>
                    {booking.totalAmount - booking.depositPaid > 0 && (
                      <p className="text-xs text-orange-500 font-medium">
                        ${booking.totalAmount - booking.depositPaid} remaining
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
