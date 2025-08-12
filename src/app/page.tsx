import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MasonryGallery from '@/components/MasonryGallery';
import ContactCTA from '@/components/ContactCTA'; // if you have one
import Footer from '@/components/Footer';         // optional

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <MasonryGallery />
      <ContactCTA />
      <Footer />
    </main>
  );
}
