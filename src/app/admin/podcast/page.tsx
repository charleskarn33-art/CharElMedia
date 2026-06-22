import React from "react"
import { Mic2, Check, X, Calendar, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const guestRequests = [
  {
    id: "1",
    name: "Emmanuel Kollie",
    email: "e.kollie@example.com",
    phone: "+231 770 123456",
    topic: "Business",
    specificTopic: "Building a Successful Business in Liberia",
    status: "pending",
    submittedAt: "Dec 10, 2024",
  },
  {
    id: "2",
    name: "Patricia Doe",
    email: "p.doe@techlib.lr",
    phone: "+231 880 654321",
    topic: "Technology",
    specificTopic: "Tech Innovation and the African Youth",
    status: "approved",
    submittedAt: "Dec 5, 2024",
  },
  {
    id: "3",
    name: "Bishop James Flomo",
    email: "j.flomo@church.lr",
    phone: "+231 770 987654",
    topic: "Faith",
    specificTopic: "Faith, Resilience and Entrepreneurship",
    status: "scheduled",
    submittedAt: "Nov 28, 2024",
  },
]

export default function AdminPodcastPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#111827]">Podcast Management</h1>
        <p className="text-gray-500 mt-1">Manage guest applications and episodes for CharEl Corner.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Pending Requests", value: "5", color: "text-yellow-600 bg-yellow-100" },
          { label: "Approved Guests", value: "12", color: "text-green-600 bg-green-100" },
          { label: "Published Episodes", value: "50", color: "text-purple-600 bg-purple-100" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="p-5 text-center">
              <p className={`text-3xl font-black ${s.color.split(" ")[0]}`}>{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic2 className="h-5 w-5 text-purple-600" />
            Guest Applications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {guestRequests.map((req) => (
              <div key={req.id} className="border border-gray-100 rounded-2xl p-5 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#111827]">{req.name}</h3>
                      <Badge variant={req.status === "approved" ? "approved" : req.status === "scheduled" ? "completed" : "pending"}>
                        {req.status}
                      </Badge>
                    </div>
                    <p className="text-gray-500 text-sm mb-1">{req.specificTopic}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                      <span>{req.email}</span>
                      <span>·</span>
                      <span>{req.phone}</span>
                      <span>·</span>
                      <span>Category: {req.topic}</span>
                      <span>·</span>
                      <span>Submitted: {req.submittedAt}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 shrink-0">
                    <Button size="sm" variant="outline">
                      <Eye className="h-3.5 w-3.5" />
                    </Button>
                    {req.status === "pending" && (
                      <>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <Check className="h-3.5 w-3.5" /> Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <X className="h-3.5 w-3.5" /> Reject
                        </Button>
                      </>
                    )}
                    {req.status === "approved" && (
                      <Button size="sm">
                        <Calendar className="h-3.5 w-3.5" /> Schedule
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
