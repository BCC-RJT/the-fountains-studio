import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';


export default function HomePage() {
  return (
    <main id="home">
      <Hero />
      <Features />
      <Gallery />
      <CTA />
      <Footer />
    </main>

  );
}
