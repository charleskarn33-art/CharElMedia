import type { Metadata } from "next"
import Link from "next/link"
import { Printer, ArrowRight, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "CharEl Press Printing Services",
  description: "Professional printing and branding services in Liberia. T-shirts, banners, business cards, and more.",
}

const products = [
  { name: "T-Shirts", emoji: "👕", description: "Custom printed t-shirts for individuals, teams, and businesses." },
  { name: "Banners", emoji: "🏳️", description: "Large format vinyl banners for events, businesses, and promotions." },
  { name: "Posters", emoji: "🖼️", description: "High-quality poster printing in various sizes." },
  { name: "Flyers", emoji: "📄", description: "Professionally designed and printed marketing flyers." },
  { name: "Business Cards", emoji: "💳", description: "Premium business cards that make a lasting impression." },
  { name: "Stickers", emoji: "⭐", description: "Custom stickers for branding, packaging, and promotion." },
  { name: "Roll-Up Banners", emoji: "🎢", description: "Retractable roll-up banners for exhibitions and events." },
  { name: "Brochures", emoji: "📋", description: "Tri-fold and bi-fold brochures for your business." },
  { name: "Branded Mugs", emoji: "☕", description: "Custom branded mugs for corporate gifts and promotions." },
]

const orderSteps = [
  { step: "1", label: "Submitted", color: "bg-gray-400" },
  { step: "2", label: "Design Review", color: "bg-blue-400" },
  { step: "3", label: "Printing", color: "bg-yellow-400" },
  { step: "4", label: "Quality Check", color: "bg-orange-400" },
  { step: "5", label: "Ready for Pickup", color: "bg-[#00B86B]" },
  { step: "6", label: "Completed", color: "bg-[#0057FF]" },
]

export default function PrintingPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-orange-600 to-[#111827] py-20 text-center relative overflow-hidden">
        <div className="relative">
          <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Printer className="h-10 w-10 text-white" /></div>
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-3">CharEl Press</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">Printing & Branding</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">High quality printing services for businesses, events, and individuals. Order online and track your order status in real-time.</p>
          <Link href="/printing/order"><Button size="xl" variant="white">Place an Order <ArrowRight className="h-5 w-5" /></Button></Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-3">What We Print</h2>
          <p className="text-gray-500 text-lg">From small stickers to large banners — we print it all.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-20">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all group text-center">
              <div className="text-4xl mb-3">{product.emoji}</div>
              <h3 className="font-bold text-[#111827] text-base mb-1 group-hover:text-orange-600 transition-colors">{product.name}</h3>
              <p className="text-gray-500 text-xs">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 rounded-3xl p-10 mb-20">
          <div className="text-center mb-10">
            <Package className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-black text-[#111827] mb-3">Order Status Tracking</h2>
            <p className="text-gray-600">Track your order every step of the way through our real-time status system.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 overflow-x-auto">
            {orderSteps.map((step) => (
              <div key={step.label} className="flex flex-col items-center gap-2 min-w-[100px]">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg`}>{step.step}</div>
                <p className="text-xs font-semibold text-gray-600 text-center">{step.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-3">How to Order</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-20">
          {[
            { step: "1", title: "Fill Order Form", desc: "Select product, quantity, and upload your artwork" },
            { step: "2", title: "Design Review", desc: "Our team reviews your artwork and confirms details" },
            { step: "3", title: "We Print", desc: "Your order goes into production once approved" },
            { step: "4", title: "Pickup or Delivery", desc: "Collect your order or arrange for delivery" },
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="w-14 h-14 bg-[#0057FF] text-white rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-4 shadow-lg">{step}</div>
              <h3 className="font-bold text-[#111827] mb-1">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/printing/order"><Button size="xl">Start Your Order <ArrowRight className="h-5 w-5" /></Button></Link>
        </div>
      </div>
    </div>
  )
}
