import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedStrip } from './components/FeaturedStrip';
import { WhatWeCreate } from './components/WhatWeCreate';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyVyra } from './components/WhyVyra';
import { Industries } from './components/Industries';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { VideoModal } from './components/VideoModal';
import { ServiceModal } from './components/ServiceModal';
import { LegalModal } from './components/LegalModal';
import type { VideoItem, ServiceItem, IndustryItem } from './types';
import { SERVICES_LIST } from './data/content';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('Skincare & Beauty');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalTitle, setLegalTitle] = useState<string | null>(null);

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    setIsContactOpen(true);
  };

  const handleViewWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectIndustry = (industry: IndustryItem) => {
    const match = SERVICES_LIST.find((s) => s.title.toLowerCase().includes(industry.title.toLowerCase().split(' ')[0])) || SERVICES_LIST[0];
    setSelectedService(match);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#171513] flex flex-col font-sans selection:bg-[#C0836B]/20 selection:text-[#5A4035]">
      
      {/* 1. Navigation */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="flex-1">
        {/* 2. Hero with Reference Design & Color Theme */}
        <Hero
          onOpenContact={(name) => handleOpenContact(name)}
          onViewWork={handleViewWork}
        />

        {/* 3. Featured Content Strip */}
        <FeaturedStrip onSelectVideo={(video) => setSelectedVideo(video)} />

        {/* 4. What We Create */}
        <WhatWeCreate onExploreServices={handleExploreServices} />

        {/* 5. Services Grid */}
        <ServicesGrid onSelectService={(service) => setSelectedService(service)} />

        {/* 6. Why VYRA */}
        <WhyVyra />

        {/* 7. Industries We Work With */}
        <Industries onSelectIndustry={handleSelectIndustry} />

        {/* 8. Final Call to Action */}
        <CtaBanner onOpenContact={() => handleOpenContact()} />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenContact={() => handleOpenContact()}
        onOpenTerms={(title) => setLegalTitle(title)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefilledService={prefilledService}
      />

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onRequestStyle={(styleName) => handleOpenContact(styleName)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceTitle) => handleOpenContact(serviceTitle)}
      />

      <LegalModal
        title={legalTitle}
        onClose={() => setLegalTitle(null)}
      />

    </div>
  );
}

export default App;
