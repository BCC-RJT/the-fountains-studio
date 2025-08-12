import Hero from '@/components/Hero'
import FeaturedGrid from '@/components/FeaturedGrid'
import Plans from '@/components/Plans'
import MasonryGallery from '@/components/MasonryGallery'
import ContactCTA from '@/components/ContactCTA'

export default function Page() {
  return (
    <>
      <Hero />

      <div className="max-w-7xl mx-auto px-6">
        <section id="overview" className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/95 mb-4">Featured Highlights</h2>
          <FeaturedGrid />
        </section>

        <section id="plans" className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/95 mb-4">Plans</h2>
          <Plans />
        </section>

        <section id="gallery" className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/95 mb-4">Gallery</h2>
          <MasonryGallery />
        </section>

        <section id="contact" className="mt-16 md:mt-24 mb-16">
          <ContactCTA />
        </section>
      </div>
    </>
  )
}
