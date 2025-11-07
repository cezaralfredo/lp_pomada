
import React from 'react';
import { CtaButton } from './CtaButton';
import { images } from './assets';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      <img
        src={images.hero}
        alt="Criança feliz com pele saudável brincando ao ar livre, simbolizando a liberdade e alegria que a pomada proporciona."
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in-down">
          Seu Filho Merece Brincar, Sorrir e Ser Feliz Sem Medo de Mostrar a Pele
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in-up">
          Descubra como a Pomada Conforto & Alívio está transformando a vida de centenas de famílias que convivem com dermatite atópica
        </p>
        <div className="animate-bounce">
          <CtaButton phoneNumber="5585986317888" size="large">
            Quero Ajudar Meu Filho Agora
          </CtaButton>
        </div>
        <p className="mt-6 text-sm md:text-base opacity-90">
          Tratamento 100% natural • Resultados visíveis em 7 dias • Sem corticoides
        </p>
      </div>
    </section>
  );
};
