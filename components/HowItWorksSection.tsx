
import React from 'react';

const works = [
  {
    icon: '💧',
    title: 'HIDRATA PROFUNDAMENTE',
    description: 'Restaura a umidade perdida, criando uma barreira protetora natural que mantém a água dentro da pele.',
  },
  {
    icon: '🔥',
    title: 'COMBATE A INFLAMAÇÃO',
    description: 'Ingredientes com propriedades anti-inflamatórias comprovadas acalmam a pele irritada desde a primeira aplicação.',
  },
  {
    icon: '🛡️',
    title: 'PROTEGE CONTRA INFECÇÕES',
    description: 'Ação antibacteriana e antifúngica natural protege a pele vulnerável de infecções secundárias.',
  },
  {
    icon: '💖',
    title: 'REGENERA E CICATRIZA',
    description: 'Estimula a renovação celular, cicatrizando feridas e restaurando a integridade da pele.',
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-brand-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
          Como a Pomada Conforto & Alívio Funciona?
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-12">
          A pele atópica tem uma barreira de proteção enfraquecida. É como uma parede com rachaduras – a água escapa facilmente, e irritantes entram com facilidade. A Pomada Conforto & Alívio atua em 4 frentes simultâneas:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {works.map((item, index) => (
            <div key={index} className="bg-white/20 p-8 rounded-lg backdrop-blur-sm shadow-lg transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="opacity-90">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <p className="bg-brand-dark inline-block px-6 py-3 rounded-full text-lg font-bold">
            Tudo isso sem corticoides, sem parabenos, sem químicos agressivos.
          </p>
        </div>
      </div>
    </section>
  );
};
