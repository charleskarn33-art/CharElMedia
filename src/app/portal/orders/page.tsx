import React from "react"
import Link from "next/link"
import { ShoppingBag, ArrowRight, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const statusSteps = ["submitted", "design_review", "printing", "quality_check", "ready_pickup", "completed"]
const statusLabels: Record<string, string> = {
  submitted: "Submitted",
  design_review: "Design Review",
  printing: "Printing",
  quality_check: "Quality Check",
  ready_pickup: "Ready for Pickup",
  completed: "Completed",
}

const orders = [
  {
    id: "ORD-001",
    product: "T-Shirts",
    quantity: 50,
    description: "Company logo t-shirts, blue, sizes S-XL",
    status: "printing",
    totalAmount: 600,
    createdAt: "Dec 10, 2024",
  },
  {
    id: "ORD-002",
    product: "Business Cards",
    quantity: 500,
    description: "Premium matte finish business cards",
    status: "completed",
    totalAmount: 75,
    createdAt: "Nov 25, 2024",
  },
]

function getProgressValue(status: string) {
  const idx = statusSteps.indexOf(status)
  return idx === -1 ? 0 : Math.round(((idx + 1) / statusSteps.length) * 100)
}

export default function OrdersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#111827]">My Orders</h1>
          <p className="text-gray-500 mt-1">Track your printing and branding orders.</p>
        </div>
        <Link href="/printing/order">
          <Button size="sm">New Order <ArrowRight className="h-3.5 w-3.5" /></Button>
        </Link>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20">
          <ShoppingBag className="h-16 w-16 text-gray-200 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400 mb-2">No orders yet</h3>
          <Link href="/printing/order">
            <Button>Place an Order</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const progress = getProgressValue(order.status)
            return (
              <Card key={order.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Package className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-[#111827]">{order.product}</h3>
                          <span className="text-xs text-gray-400">#{order.id}</span>
                        </div>
                        <p className="text-sm text-gray-500">{order.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-[#111827]">${order.totalAmount}</p>
                      <p className="text-xs text-gray-400">Qty: {order.quantity}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-medium text-gray-600">Status: {statusLabels[order.status]}</span>
                      <span className="text-xs text-gray-400">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-1.5" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Ordered: {order.createdAt}</span>
                    <Badge variant={order.status === "completed" ? "completed" : order.status === "printing" ? "default" : "pending"}>
                      {statusLabels[order.status]}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
