import { Hero } from "@/components/home/hero"
import { ServicesSection } from "@/components/home/services-section"
import { PodcastPreview } from "@/components/home/podcast-preview"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { TestimonialsSection } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PodcastPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
