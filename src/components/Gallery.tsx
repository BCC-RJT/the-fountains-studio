import Section from './Section';

const strips = [
  '/gallery_images/DSC05250.jpg',
  '/images/hero.jpg', // reuse hero
  '/images/DSC05250.jpg', // or add more images later
];

export default function Gallery() {
  return (
    <Section id="gallery" className="py-0">
      {/* intro */}
      <div className="container py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light text-center">
          A glimpse inside
        </h2>
        <p className="mt-3 text-center text-light/80">
          Materials and spaces designed to feel calm, bright, and easy.
        </p>
      </div>

      {/* parallax strips */}
      <div className="space-y-10">
        {strips.map((src, i) => (
          <div
            key={i}
            className="h-[45vh] sm:h-[55vh] w-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="h-full w-full bg-black/30" />
          </div>
        ))}
      </div>
    </Section>
  );
}
