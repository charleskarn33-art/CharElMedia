"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard, Users, Mic2, Camera, Music2, Printer,
  Calendar, CreditCard, Image, BarChart3, Settings, LogOut,
  Menu, X, ChevronLeft
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Podcast", href: "/admin/podcast", icon: Mic2 },
  { label: "Photography", href: "/admin/photography", icon: Camera },
  { label: "Recording Studio", href: "/admin/recording", icon: Music2 },
  { label: "Printing", href: "/admin/printing", icon: Printer },
  { label: "Bookings", href: "/admin/bookings", icon: Calendar },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Media Library", href: "/admin/media", icon: Image },
  { label: "Reports", href: "/admin/reports", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-[#0057FF] to-[#00B86B] rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">CE</span>
          </div>
          <div>
            <p className="font-black text-sm text-white">CharEl Media</p>
            <p className="text-gray-500 text-xs">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-0.5 overflow-y-auto">
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
                  ? "bg-[#0057FF] text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500 hover:bg-white/5 hover:text-white mb-1">
          <ChevronLeft className="h-4 w-4" />
          View Website
        </Link>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-red-400 hover:bg-red-900/20 w-full"
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
      <aside className="hidden lg:flex flex-col w-64 bg-[#111827] shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="relative z-10 flex flex-col w-64 bg-[#111827] h-full">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-gray-400"
            >
              <X className="h-5 w-5" />
            </button>
            <Sidebar />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0057FF] to-[#00B86B] rounded-full flex items-center justify-center">
              <span className="text-white font-black text-xs">A</span>
            </div>
            <span className="text-sm font-medium text-[#111827]">Admin</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
