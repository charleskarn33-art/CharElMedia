"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard, Calendar, ShoppingBag, Mic2, Music2, Camera, Download,
  FileText, Bell, User, LogOut, ChevronLeft, Menu, X
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", href: "/portal", icon: LayoutDashboard },
  { label: "My Bookings", href: "/portal/bookings", icon: Calendar },
  { label: "My Orders", href: "/portal/orders", icon: ShoppingBag },
  { label: "Podcast Requests", href: "/portal/podcast", icon: Mic2 },
  { label: "Studio Sessions", href: "/portal/sessions", icon: Music2 },
  { label: "My Photo Albums", href: "/portal/albums", icon: Camera },
  { label: "Downloads", href: "/portal/downloads", icon: Download },
  { label: "Invoices", href: "/portal/invoices", icon: FileText },
  { label: "Notifications", href: "/portal/notifications", icon: Bell },
  { label: "Profile", href: "/portal/profile", icon: User },
]

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-[#0057FF] to-[#00B86B] rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">CE</span>
          </div>
          <div>
            <p className="font-black text-sm text-[#111827]">CharEl Media</p>
            <p className="text-gray-400 text-xs">Client Portal</p>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                active
                  ? "bg-[#0057FF] text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#111827]"
              )}
            >
              <item.icon className={cn("h-4 w-4 shrink-0", active ? "text-white" : "text-gray-400")} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500 hover:bg-gray-100 mb-1">
          <ChevronLeft className="h-4 w-4" />
          Back to Website
        </Link>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50 w-full"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-100 shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="relative z-10 flex flex-col w-64 bg-white h-full">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
            <Sidebar />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between px-4 py-4 bg-white border-b border-gray-100">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0057FF] to-[#00B86B] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs">CE</span>
            </div>
            <span className="font-black text-[#111827] text-sm">Client Portal</span>
          </div>
          <div className="w-9" />
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
