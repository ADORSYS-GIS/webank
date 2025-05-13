import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Features from '@/components/Features';
import AppPreview from '@/components/AppPreview';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Features />
          <AppPreview />
          <CTA />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
