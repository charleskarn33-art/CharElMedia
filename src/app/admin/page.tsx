import React from "react"
import { Users, Camera, Mic2, Music2, Printer, TrendingUp, DollarSign, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Total Customers", value: "523", change: "+12%", icon: Users, color: "text-[#0057FF] bg-blue-100" },
  { label: "Total Revenue", value: "$12,450", change: "+8%", icon: DollarSign, color: "text-green-600 bg-green-100" },
  { label: "Podcast Requests", value: "18", change: "+3", icon: Mic2, color: "text-purple-600 bg-purple-100" },
  { label: "Photo Bookings", value: "34", change: "+5", icon: Camera, color: "text-blue-600 bg-blue-100" },
  { label: "Studio Sessions", value: "21", change: "+2", icon: Music2, color: "text-[#00B86B] bg-green-100" },
  { label: "Print Orders", value: "67", change: "+15", icon: Printer, color: "text-orange-600 bg-orange-100" },
]

const recentBookings = [
  { customer: "Sarah Johnson", service: "Photography - Wedding", date: "Dec 28", status: "approved", amount: "$300" },
  { customer: "Marcus Williams", service: "Recording - Music", date: "Dec 22", status: "pending", amount: "$90" },
  { customer: "Grace Kollie", service: "Podcast Guest", date: "Jan 5", status: "scheduled", amount: "Free" },
  { customer: "James Tarr", service: "Printing - T-Shirts (50)", date: "Dec 20", status: "printing", amount: "$600" },
  { customer: "Angela Moore", service: "Photography - Graduation", date: "Dec 15", status: "completed", amount: "$150" },
]

const recentPayments = [
  { id: "PAY-001", customer: "Sarah Johnson", amount: "$100", method: "Mobile Money", date: "Dec 10" },
  { id: "PAY-002", customer: "James Tarr", amount: "$600", method: "Orange Money", date: "Dec 10" },
  { id: "PAY-003", customer: "Angela Moore", amount: "$150", method: "Visa Card", date: "Nov 25" },
]

const statusVariants: Record<string, "approved" | "pending" | "completed" | "default"> = {
  approved: "approved",
  pending: "pending",
  completed: "completed",
  scheduled: "default",
  printing: "default",
}

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#111827]">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of CharEl Media Group operations.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className={`w-9 h-9 ${stat.color} rounded-xl flex items-center justify-center mb-2`}>
                <stat.icon className="h-4 w-4" />
              </div>
              <p className="text-2xl font-black text-[#111827]">{stat.value}</p>
              <p className="text-gray-500 text-xs">{stat.label}</p>
              <p className="text-green-500 text-xs font-medium mt-0.5">{stat.change} this month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#0057FF]" />
                Recent Bookings & Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentBookings.map((booking, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0057FF] to-[#00B86B] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {booking.customer.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[#111827]">{booking.customer}</p>
                        <p className="text-gray-400 text-xs">{booking.service} · {booking.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#111827]">{booking.amount}</span>
                      <Badge variant={statusVariants[booking.status] || "pending"}>
                        {booking.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Panel */}
        <div className="space-y-4">
          {/* Revenue */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#00B86B]" />
                Revenue This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-black text-[#111827]">$4,200</p>
              <p className="text-green-500 text-sm font-medium">+18% vs last month</p>
              <div className="mt-4 space-y-2">
                {[
                  { label: "Photography", amount: "$1,800", pct: 43 },
                  { label: "Studio", amount: "$900", pct: 21 },
                  { label: "Printing", amount: "$1,200", pct: 29 },
                  { label: "Other", amount: "$300", pct: 7 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{item.label}</span>
                      <span className="font-medium">{item.amount}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0057FF] rounded-full" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Payments */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recent Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentPayments.map((pay) => (
                  <div key={pay.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">{pay.customer}</p>
                      <p className="text-xs text-gray-400">{pay.method} · {pay.date}</p>
                    </div>
                    <span className="font-bold text-[#00B86B]">{pay.amount}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
