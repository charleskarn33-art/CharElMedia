import React from "react"
import { Printer, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const orders = [
  { id: "ORD-001", customer: "James Tarr", product: "T-Shirts (50)", status: "printing", amount: "$600", date: "Dec 10" },
  { id: "ORD-002", customer: "Angela Moore", product: "Business Cards (500)", status: "completed", amount: "$75", date: "Nov 25" },
  { id: "ORD-003", customer: "Grace Kollie", product: "Roll-Up Banner (2)", status: "design_review", amount: "$90", date: "Dec 12" },
  { id: "ORD-004", customer: "David Flomo", product: "Flyers A5 (200)", status: "submitted", amount: "$50", date: "Dec 13" },
]

const statusSteps = ["submitted", "design_review", "printing", "quality_check", "ready_pickup", "completed"]
const statusLabels: Record<string, string> = {
  submitted: "Submitted", design_review: "Design Review", printing: "Printing",
  quality_check: "Quality Check", ready_pickup: "Ready for Pickup", completed: "Completed",
}

function getProgress(status: string) {
  const idx = statusSteps.indexOf(status)
  return idx === -1 ? 0 : Math.round(((idx + 1) / statusSteps.length) * 100)
}

const nextStatus: Record<string, string> = {
  submitted: "design_review", design_review: "printing", printing: "quality_check",
  quality_check: "ready_pickup", ready_pickup: "completed",
}

export default function AdminPrintingPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#111827]">Print Orders</h1>
        <p className="text-gray-500 mt-1">Manage and track all printing orders.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Printer className="h-5 w-5 text-orange-600" />
            All Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border border-gray-100 rounded-2xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-gray-400">{order.id}</span>
                      <Badge variant={order.status === "completed" ? "completed" : order.status === "printing" ? "default" : "pending"}>
                        {statusLabels[order.status]}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-[#111827]">{order.customer}</h3>
                    <p className="text-sm text-gray-500">{order.product} · {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-[#111827]">{order.amount}</p>
                    <div className="flex gap-1.5 mt-1">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                      {order.status !== "completed" && nextStatus[order.status] && (
                        <Button size="sm" variant="secondary">
                          → {statusLabels[nextStatus[order.status]]}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{getProgress(order.status)}%</span>
                  </div>
                  <Progress value={getProgress(order.status)} className="h-1.5" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
