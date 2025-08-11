export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white">
      <div className="container py-24 md:py-36">
        <p className="text-brand-200 mb-4 font-medium uppercase tracking-wider">
          The Fountains • Bixby, OK
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05]">
          Luxury downsizing,
          <br /> single-level living.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-100">
          Low-maintenance homes, curated amenities, and a quiet gated community designed
          for comfort and style.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#contact" className="btn-primary">Schedule a Tour</a>
          <a href="#about" className="btn-outline">Explore Community</a>
        </div>
      </div>

      {/* soft decorative */}
      <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-white/10 blur-3xl" />
    </section>
  );
}
