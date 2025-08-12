import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CarouselGallery from '@/components/CarouselGallery';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CarouselGallery />
      <ContactCTA />
      <Footer />
    </main>
  );
}
