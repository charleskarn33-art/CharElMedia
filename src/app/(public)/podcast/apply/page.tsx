"use client"

import React, { useState } from "react"
import { Mic2, Upload, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PodcastApplyPage() {
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
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-[#111827] mb-3">Application Submitted!</h2>
          <p className="text-gray-500 mb-6">Thank you for applying to be a guest on CharEl Corner. Our team will review your application and get back to you within 3–5 business days.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Mic2 className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-black text-[#111827] mb-3">Guest Application</h1>
          <p className="text-gray-500 text-lg">Share your story with Liberia. Fill out the form below and our team will review your application.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="full_name">Full Name *</Label><Input id="full_name" name="full_name" placeholder="Your full name" required /></div>
              <div className="space-y-2"><Label htmlFor="phone">Phone Number *</Label><Input id="phone" name="phone" type="tel" placeholder="+231 XXX XXXXX" required /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="email">Email Address *</Label><Input id="email" name="email" type="email" placeholder="you@example.com" required /></div>
            <div className="space-y-2">
              <Label htmlFor="topic">Podcast Topic *</Label>
              <Select name="topic" required>
                <SelectTrigger><SelectValue placeholder="Select a topic category" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="faith">Faith</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label htmlFor="specific_topic">Specific Topic / Title *</Label><Input id="specific_topic" name="specific_topic" placeholder="What specific topic would you discuss?" required /></div>
            <div className="space-y-2"><Label htmlFor="why_feature">Why Should We Feature You? *</Label><Textarea id="why_feature" name="why_feature" placeholder="Tell us about yourself, your expertise, and why this topic would benefit our audience..." rows={5} required /></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2"><Label htmlFor="facebook">Facebook</Label><Input id="facebook" name="facebook" placeholder="facebook.com/..." /></div>
              <div className="space-y-2"><Label htmlFor="instagram">Instagram</Label><Input id="instagram" name="instagram" placeholder="@handle" /></div>
              <div className="space-y-2"><Label htmlFor="linkedin">LinkedIn</Label><Input id="linkedin" name="linkedin" placeholder="linkedin.com/in/..." /></div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="photo">Profile Photo</Label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#0057FF] transition-colors cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                <input id="photo" name="photo" type="file" accept="image/*" className="sr-only" />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</span>
                : <span className="flex items-center gap-2"><Send className="h-4 w-4" />Submit Application</span>}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
