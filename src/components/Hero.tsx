export default function Hero() {
  return (
          <section
            aria-label="Welcome to The Fountains at Bixby"
            className="relative min-h-[92svh] bg-[url('/images/hero.jpg')] bg-center bg-no-repeat bg-cover"

          >
            {/* black tint */}
            <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
            {/* gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10" aria-hidden="true" />

            <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center text-light">
              <h1 className="animate-slideUp text-4xl font-bold md:text-6xl lg:text-7xl">
                The Fountains at Bixby
              </h1>
              <p className="animate-fadeIn mt-4 max-w-2xl text-lg/7 md:text-xl/8">
                Luxury, low-maintenance, single-level living. Thoughtful design,
                timeless finishes, and the convenience you’ve been waiting for.
              </p>
              <a
                href="#plans"
                className="animate-slideUp mt-8 inline-flex items-center gap-3 rounded-full bg-brand-600 px-6 py-3 text-white shadow-lg hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Learn More
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
              </a>
            </div>
          </section>

  );
}
