import FeatureCard from './FeatureCard';
import Section from './Section';

export default function Features() {
  return (
    <Section id="amenities">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light">Luxury without the upkeep</h2>
        <p className="mt-3 text-light/80">
          Low-maintenance, single-level living with curated finishes and thoughtful details.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Single-Level Floorplans"
          body="Step-free layouts that make each day effortless."
        />
        <FeatureCard
          title="Lock-and-Leave"
          body="Exterior maintenance handled — just enjoy your life."
        />
        <FeatureCard
          title="Timeless Materials"
          body="Warm wood, stone, and textures that age beautifully."
        />
      </div>
    </Section>
  );
}
