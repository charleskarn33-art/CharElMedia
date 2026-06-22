"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0057FF] to-[#111827] py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">Contact Us</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">Have a question or ready to start a project? Get in touch with our team.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#111827]">Get In Touch</h2>
            {[
              { icon: Phone, title: "Phone", info: "+231 000 000 000", sub: "Mon-Sat 9am to 6pm" },
              { icon: Mail, title: "Email", info: "info@charelmedia.com", sub: "We reply within 24 hours" },
              { icon: MapPin, title: "Location", info: "Monrovia, Liberia", sub: "Visit us at our studio" },
              { icon: Clock, title: "Business Hours", info: "Mon – Sat: 9am – 6pm", sub: "Sundays by appointment" },
            ].map(({ icon: Icon, title, info, sub }) => (
              <div key={title} className="flex gap-4">
                <div className="w-12 h-12 bg-[#0057FF]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-[#0057FF]" />
                </div>
                <div>
                  <p className="font-semibold text-[#111827] text-sm">{title}</p>
                  <p className="text-gray-700 text-sm">{info}</p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-[#111827] mb-3">Message Sent!</h3>
                <p className="text-gray-500 mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2"><Label>Full Name *</Label><Input placeholder="Your full name" required /></div>
                    <div className="space-y-2"><Label>Phone</Label><Input type="tel" placeholder="+231 XXX XXXXX" /></div>
                  </div>
                  <div className="space-y-2"><Label>Email Address *</Label><Input type="email" placeholder="you@example.com" required /></div>
                  <div className="space-y-2">
                    <Label>Subject / Service of Interest</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="What are you interested in?" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="photography">Photography Booking</SelectItem>
                        <SelectItem value="podcast">Podcast Guest Application</SelectItem>
                        <SelectItem value="recording">Recording Studio</SelectItem>
                        <SelectItem value="printing">Printing Order</SelectItem>
                        <SelectItem value="general">General Enquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2"><Label>Message *</Label><Textarea placeholder="Tell us about your project or ask any questions..." rows={5} required /></div>
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</span>
                    ) : (
                      <span className="flex items-center gap-2"><Send className="h-4 w-4" />Send Message</span>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
