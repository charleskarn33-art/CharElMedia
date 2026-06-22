"use client"

import React, { useState } from "react"
import { Printer, Upload, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const products = ["T-Shirts", "Banners", "Posters", "Flyers", "Business Cards", "Stickers", "Roll-Up Banners", "Brochures", "Branded Mugs"]

export default function PrintOrderPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="h-10 w-10 text-green-600" /></div>
          <h2 className="text-3xl font-black text-[#111827] mb-3">Order Placed!</h2>
          <p className="text-gray-500 mb-2">Your print order has been received. Our team will review your artwork and contact you with confirmation and pricing.</p>
          <p className="text-gray-400 text-sm mb-6">You&apos;ll receive an email with your order tracking number.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Place Another Order</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Printer className="h-8 w-8 text-orange-600" /></div>
          <h1 className="text-4xl font-black text-[#111827] mb-3">Place a Print Order</h1>
          <p className="text-gray-500 text-lg">Fill out the form below and upload your artwork. We&apos;ll get back to you with pricing and confirmation.</p>
        </div>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2"><Label>Full Name *</Label><Input placeholder="Your full name" required /></div>
              <div className="space-y-2"><Label>Phone Number *</Label><Input type="tel" placeholder="+231 XXX XXXXX" required /></div>
            </div>
            <div className="space-y-2"><Label>Email Address *</Label><Input type="email" placeholder="you@example.com" required /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Product Type *</Label>
                <Select required>
                  <SelectTrigger><SelectValue placeholder="Select product" /></SelectTrigger>
                  <SelectContent>{products.map((p) => (<SelectItem key={p} value={p.toLowerCase().replace(/\s+/g, "_")}>{p}</SelectItem>))}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2"><Label>Quantity *</Label><Input type="number" placeholder="e.g. 100" min="1" required /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2"><Label>Dimensions / Size</Label><Input placeholder="e.g. A4, 6x4 inches, XL" /></div>
              <div className="space-y-2"><Label>Delivery Date</Label><Input type="date" /></div>
            </div>
            <div className="space-y-2"><Label>Description / Special Instructions</Label><Textarea placeholder="Colors, fonts, specific requirements, or any other details..." rows={4} /></div>
            <div className="space-y-2">
              <Label>Upload Artwork</Label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-orange-400 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG, PDF, AI, EPS up to 50MB</p>
                <input type="file" accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.psd" className="sr-only" />
              </div>
              <p className="text-xs text-gray-400">Don&apos;t have artwork? Our design team can help — mention it in the description above.</p>
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</span>
                : <span className="flex items-center gap-2"><Send className="h-4 w-4" />Submit Order</span>}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
