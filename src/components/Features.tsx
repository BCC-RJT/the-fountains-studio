'use client';

import { features } from '@/data/features';

export default function Features() {
  return (
    <section id="amenities" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-900 md:text-4xl">
            Luxury without the upkeep
          </h2>
          <p className="mt-3 text-brand-700/80">
            Low-maintenance, single-level living with curated finishes and thoughtful details.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-black/5 bg-white/80 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-brand-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-700/80">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
