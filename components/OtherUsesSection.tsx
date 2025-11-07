import React from 'react';

export const OtherUsesSection: React.FC = () => {
  return (
    <section id="outros-usos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Outros problemas que a pomada trata
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A Pomada Conforto e Alívio é indicada para tratar as mais diversas irritações da pele como: assaduras, queimaduras leves, cortes pequenos, cicatrização de tatuagem, eczema, psoríase, micoses, acalma a coceira e vermelhidão feita por picada de insetos, de composição suave pode ser utilizada em bebês a cada troca de fraldas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-brand-secondary p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">👶</div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Assaduras em Bebês</h3>
            <p className="text-gray-600">Alívio imediato da vermelhidão e irritação causadas pelas fraldas</p>
          </div>
          
          <div className="bg-brand-secondary p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Queimaduras Leves</h3>
            <p className="text-gray-600">Acalma a pele e acelera a regeneração de queimaduras solares e pequenos acidentes</p>
          </div>
          
          <div className="bg-brand-secondary p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">✂️</div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Cortes e Feridas</h3>
            <p className="text-gray-600">Auxilia na cicatrização de pequenos cortes e arranhões</p>
          </div>
          
          <div className="bg-brand-secondary p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🦟</div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Picadas de Insetos</h3>
            <p className="text-gray-600">Alívio imediato da coceira e vermelhidão causadas por picadas</p>
          </div>
          
          <div className="bg-brand-secondary p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Eczema e Psoríase</h3>
            <p className="text-gray-600">Acalma a pele irritada e reduz a descamação característica</p>
          </div>
          
          <div className="bg-brand-secondary p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🩹</div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Cicatrização</h3>
            <p className="text-gray-600">Auxilia na recuperação da pele após procedimentos e tatuagens</p>
          </div>
        </div>
        
        <div className="text-center mt-12 bg-brand-primary text-white p-8 rounded-lg">
          <h3 className="font-serif text-2xl font-bold mb-4">Versátil e Eficaz</h3>
          <p className="text-lg">
            Uma única pomada para múltiplas necessidades de cuidado com a pele de toda a família
          </p>
        </div>
      </div>
    </section>
  );
};