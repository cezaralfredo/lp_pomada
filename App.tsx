
import React from 'react';
import { HeroSection } from './components/HeroSection';
import { PainSection } from './components/PainSection';
import { ConsequencesSection } from './components/ConsequencesSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { IngredientsSection } from './components/IngredientsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { HowToUseSection } from './components/HowToUseSection';
import { FaqSection } from './components/FaqSection';
import { UrgencySection } from './components/UrgencySection';
import { OfferSection } from './components/OfferSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { OtherUsesSection } from './components/OtherUsesSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

function App() {
  return (
    <div className="bg-brand-secondary font-sans text-brand-dark">
      <main>
        <HeroSection />
        <PainSection />
        <ConsequencesSection />
        <SolutionSection />
        <HowItWorksSection />
        <IngredientsSection />
        <SocialProofSection />
        <DifferentiatorsSection />
        <HowToUseSection />
        <FaqSection />
        <UrgencySection />
        <OfferSection />
        <FinalCtaSection />
        <OtherUsesSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton phoneNumber="5585986317888" />
    </div>
  );
}

export default App;
