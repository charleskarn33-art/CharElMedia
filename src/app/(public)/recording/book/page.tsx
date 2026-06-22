"use client"

import React, { useState } from "react"
import { Music2, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RecordingBookPage() {
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
          <h2 className="text-3xl font-black text-[#111827] mb-3">Session Booked!</h2>
          <p className="text-gray-500 mb-6">Your studio session request has been received. We&apos;ll contact you within 24 hours to confirm your booking.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Book Another Session</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Music2 className="h-8 w-8 text-[#00B86B]" /></div>
          <h1 className="text-4xl font-black text-[#111827] mb-3">Book Studio Time</h1>
          <p className="text-gray-500 text-lg">Reserve your spot at CharEl Sound Recording Studio.</p>
        </div>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2"><Label>Artist / Business Name *</Label><Input placeholder="Your name or stage name" required /></div>
              <div className="space-y-2"><Label>Phone Number *</Label><Input type="tel" placeholder="+231 XXX XXXXX" required /></div>
            </div>
            <div className="space-y-2"><Label>Email Address *</Label><Input type="email" placeholder="you@example.com" required /></div>
            <div className="space-y-2">
              <Label>Session Type *</Label>
              <Select required>
                <SelectTrigger><SelectValue placeholder="Select session type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="music_recording">Music Recording</SelectItem>
                  <SelectItem value="voice_over">Voice Over</SelectItem>
                  <SelectItem value="podcast_recording">Podcast Recording</SelectItem>
                  <SelectItem value="audio_editing">Audio Editing</SelectItem>
                  <SelectItem value="mixing">Mixing</SelectItem>
                  <SelectItem value="mastering">Mastering</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>Session Date *</Label><Input type="date" required /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2"><Label>Start Time *</Label><Input type="time" required /></div>
              <div className="space-y-2"><Label>End Time *</Label><Input type="time" required /></div>
            </div>
            <div className="space-y-2"><Label>Notes / Requirements</Label><Textarea placeholder="Genre, instruments, number of tracks, special equipment needs..." rows={4} /></div>
            <Button type="submit" size="lg" className="w-full bg-[#00B86B] hover:bg-[#009A59]" disabled={loading}>
              {loading ? <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Booking...</span>
                : <span className="flex items-center gap-2"><Send className="h-4 w-4" />Book Studio Session</span>}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
