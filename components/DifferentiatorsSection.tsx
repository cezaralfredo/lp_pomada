
import React from 'react';

const differentiators = [
  { icon: '🌿', title: '100% Natural e Artesanal', description: 'Fabricada em pequenos lotes, com ingredientes selecionados e processo artesanal.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Segura Para Toda a Família', description: 'Indicada para bebês a partir de 6 meses, crianças, adolescentes e adultos.' },
  { icon: '🧪', title: 'Livre de Químicos Agressivos', description: 'Sem corticoides, parabenos, fragrâncias artificiais ou conservantes sintéticos.' },
  { icon: '⚡', title: 'Ação Rápida', description: 'Alívio imediato da coceira. Resultados visíveis em até 7 dias.' },
  { icon: '⏳', title: 'Longa Duração', description: 'Validade de 6 meses. Um pote de 50g rende bastante.' },
  { icon: '❤️', title: 'Desenvolvida Com Amor', description: 'Criada por quem entende a dor de ver uma criança sofrer. Cada pote é preparado com cuidado.' }
];

export const DifferentiatorsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
          Por Que Escolher a Pomada Conforto & Alívio?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-brand-secondary p-6 rounded-lg text-center shadow-sm">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl text-brand-dark mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
