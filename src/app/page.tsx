import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Hero />

      {/* About */}
      <Section id="about">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop"
            alt=""
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow"
          />
          <div>
            <h2 className="section-title">Designed for Comfort & Style</h2>
            <p className="mt-4 muted">
              The Fountains is a gated community offering single-level,
              low-maintenance living with thoughtful amenities — perfect for
              effortless, luxury downsizing in Bixby.
            </p>
            <ul className="mt-6 space-y-2 text-zinc-700">
              <li>• Private, gated streets</li>
              <li>• HOA-maintained yards & common areas</li>
              <li>• Walking trail & open green space</li>
              <li>• Close to dining, shopping, and healthcare</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="bg-zinc-50">
        <h2 className="section-title text-center">Amenities</h2>
        <p className="muted mx-auto mt-3 max-w-2xl text-center">
          Everything you need for a calm, convenient lifestyle.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <FeatureCard title="Gated Entry" icon={<span>🔒</span>}>
            Peace of mind with private access and quiet streets.
          </FeatureCard>
          <FeatureCard title="Walking Trail" icon={<span>🚶‍♀️</span>}>
            Enjoy daily strolls and open green space.
          </FeatureCard>
          <FeatureCard title="Low-Maintenance" icon={<span>🧹</span>}>
            Exterior maintenance handled by the HOA.
          </FeatureCard>
          <FeatureCard title="Clubhouse (future)" icon={<span>🏡</span>}>
            A place for community events and gatherings.
          </FeatureCard>
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <h2 className="section-title text-center">Gallery</h2>
        <p className="muted mx-auto mt-3 max-w-2xl text-center">
          A glimpse of the lifestyle and finishes.
        </p>
        <div className="mt-10">
          <Gallery />
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" className="bg-zinc-50">
        <CTA />
      </Section>

      <Footer />
    </>
  );
}
