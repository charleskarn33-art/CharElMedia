import React from "react"
import Link from "next/link"
import { Calendar, ShoppingBag, Camera, Download, Bell, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Active Bookings", value: "2", icon: Calendar, color: "text-[#0057FF] bg-blue-100", href: "/portal/bookings" },
  { label: "Pending Orders", value: "1", icon: ShoppingBag, color: "text-orange-600 bg-orange-100", href: "/portal/orders" },
  { label: "Photo Albums", value: "3", icon: Camera, color: "text-purple-600 bg-purple-100", href: "/portal/albums" },
  { label: "Available Downloads", value: "47", icon: Download, color: "text-[#00B86B] bg-green-100", href: "/portal/downloads" },
]

const recentActivity = [
  { type: "booking", title: "Photography Booking Confirmed", desc: "Wedding shoot on Dec 28, 2024", time: "2 hours ago", status: "approved" },
  { type: "order", title: "Print Order Update", desc: "T-shirts: Now in Production stage", time: "Yesterday", status: "printing" },
  { type: "album", title: "Photo Album Ready", desc: "Graduation photos are now available", time: "3 days ago", status: "completed" },
]

export default function PortalDashboardPage() {
  return (
    <div>
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#111827]">Welcome back! 👋</h1>
        <p className="text-gray-500 mt-1">Here&apos;s what&apos;s happening with your account.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-5">
                <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <p className="text-2xl font-black text-[#111827]">{stat.value}</p>
                <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Recent Activity</CardTitle>
              <Button variant="ghost" size="sm" className="text-[#0057FF]">View All</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-9 h-9 bg-[#0057FF]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Bell className="h-4 w-4 text-[#0057FF]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-[#111827]">{item.title}</p>
                    <p className="text-gray-500 text-xs truncate">{item.desc}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3 text-gray-300" />
                      <span className="text-gray-400 text-xs">{item.time}</span>
                    </div>
                  </div>
                  <Badge variant={item.status === "approved" ? "approved" : item.status === "completed" ? "completed" : "pending"}>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { label: "Book Photography", href: "/photography/book", color: "text-[#0057FF]" },
                { label: "Book Studio Time", href: "/recording/book", color: "text-[#00B86B]" },
                { label: "Place Print Order", href: "/printing/order", color: "text-orange-600" },
                { label: "Apply for Podcast", href: "/podcast/apply", color: "text-purple-600" },
              ].map((action) => (
                <Link key={action.label} href={action.href}>
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
                    <span className={`text-sm font-medium ${action.color}`}>{action.label}</span>
                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#0057FF] to-[#00B86B] border-0">
            <CardContent className="p-5 text-white">
              <p className="font-bold text-sm mb-1">Your photos are ready!</p>
              <p className="text-white/70 text-xs mb-3">3 new albums are available for download in your gallery.</p>
              <Link href="/portal/albums">
                <Button size="sm" variant="white" className="w-full">
                  View Albums <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
