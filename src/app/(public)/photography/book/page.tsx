"use client"

import React, { useState } from "react"
import { Camera, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const eventTypes = ["Wedding", "Graduation", "Birthday", "Baby Shower", "Corporate", "Fashion", "Outdoor Photoshoot", "Passport Photos", "Other"]

export default function PhotoBookingPage() {
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
          <h2 className="text-3xl font-black text-[#111827] mb-3">Booking Submitted!</h2>
          <p className="text-gray-500 mb-6">Your photography booking request has been received. We&apos;ll contact you within 24 hours to confirm availability and details.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another Booking</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Camera className="h-8 w-8 text-[#0057FF]" /></div>
          <h1 className="text-4xl font-black text-[#111827] mb-3">Book a Photography Session</h1>
          <p className="text-gray-500 text-lg">Fill out the form below and we&apos;ll confirm your booking within 24 hours.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="customer_name">Full Name *</Label><Input id="customer_name" placeholder="Your full name" required /></div>
              <div className="space-y-2"><Label htmlFor="phone">Phone Number *</Label><Input id="phone" type="tel" placeholder="+231 XXX XXXXX" required /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="email">Email Address *</Label><Input id="email" type="email" placeholder="you@example.com" required /></div>
            <div className="space-y-2">
              <Label>Event Type *</Label>
              <Select required>
                <SelectTrigger><SelectValue placeholder="Select event type" /></SelectTrigger>
                <SelectContent>{eventTypes.map((type) => (<SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "_")}>{type}</SelectItem>))}</SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="event_date">Event Date *</Label><Input id="event_date" type="date" required /></div>
              <div className="space-y-2"><Label htmlFor="event_time">Event Time *</Label><Input id="event_time" type="time" required /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="location">Event Location *</Label><Input id="location" placeholder="Full address or venue name" required /></div>
            <div className="space-y-2"><Label htmlFor="notes">Additional Notes</Label><Textarea id="notes" placeholder="Any special requests, theme details, or additional information..." rows={4} /></div>
            <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-700"><strong>Note:</strong> A deposit may be required to confirm your booking. Our team will contact you with pricing and deposit details after review.</div>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</span>
                : <span className="flex items-center gap-2"><Send className="h-4 w-4" />Submit Booking Request</span>}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
