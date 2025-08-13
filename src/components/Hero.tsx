'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Welcome to The Fountains at Bixby"
      className="relative min-h-[92svh] bg-hero bg-hero-cover"
    >
      {/* dim + gradient overlays */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex h-[92svh] max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        {/* LOGO replaces text title */}
        <div className="relative w-[260px] md:w-[360px] lg:w-[420px]">
          <Image
            src="/images/Fountains_Logo.png"
            alt="The Fountains at Bixby"
            width={840}
            height={280}
            sizes="(max-width: 768px) 260px, (max-width: 1024px) 360px, 420px"
            priority
          />
        </div>

        <p className="animate-fadeIn mt-5 max-w-2xl text-lg/7 md:text-xl/8">
          Luxury, low-maintenance, single-level living. Thoughtful design, timeless finishes,
          and the convenience you’ve been waiting for.
        </p>

        {/* Learn More now scrolls to Amenities */}
        <a
          href="#amenities"
          className="animate-slideUp mt-8 inline-flex items-center gap-3 rounded-full bg-brand-600 px-6 py-3 text-white shadow-lg hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          Learn More
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
