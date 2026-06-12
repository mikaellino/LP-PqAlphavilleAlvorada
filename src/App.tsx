import { useEffect } from 'react';
import { About } from './components/About';
import { BookSection } from './components/BookSection';
import { ContactSection } from './components/ContactSection';
import { CTASection } from './components/CTASection';
import { Features } from './components/Features';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImplantationViewer } from './components/ImplantationViewer';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export default function App() {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'auto', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-white px-5 py-3 font-semibold text-forest shadow-lg transition focus:translate-y-0"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Features />
        <Gallery />
        <ImplantationViewer />
        <BookSection />
        <CTASection />
        <ContactSection />
        <PrivacyPolicy />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
