export default function Hero() {
  return (
    <section
      aria-label="Welcome to The Fountains at Bixby"
      className="relative min-h-[92svh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/DSC05250.jpg')" }}
    >
      {/* dim overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto h-[92svh] flex flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="animate-slideUp text-4xl font-bold md:text-6xl lg:text-7xl">
          The Fountains at Bixby
        </h1>

        <p className="animate-fadeIn mt-4 max-w-2xl text-lg md:text-xl/8">
          Luxury, low-maintenance, single-level living. Thoughtful design,
          timeless finishes, and the convenience you’ve been waiting for.
        </p>

        <a
          href="#amenities"
          className="mt-8 px-6 py-3 bg-white text-black rounded shadow hover:bg-gray-200 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}