
import React from 'react';

export const PainSection: React.FC = () => {
  return (
    <section id="dor" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-6">
          Você Reconhece Esta Rotina?
        </h2>
        <h3 className="text-xl md:text-2xl text-brand-dark font-semibold mb-8">
          São 3 da manhã e você ouve aquele barulhinho...
        </h3>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Sua criança coçando desesperadamente. A pele em carne viva. Mais uma noite sem dormir para ninguém.
          </p>
          <p>
            De manhã, você olha para aquelas marquinhas vermelhas espalhadas pelo corpinho dela e o coração aperta.
          </p>
          <p>
            Você já tentou tudo o que os médicos receitaram. Cremes caros, pomadas com nomes complicados, remédios que precisam de receita especial. Alguns até funcionam por um tempo, mas logo a coceira volta. E com ela, aquela sensação de impotência que só uma mãe conhece.
          </p>
          <p className="font-bold text-brand-dark">
            Você não está sozinha. A dermatite atópica afeta 1 em cada 5 crianças no Brasil – são milhares de famílias vivendo exatamente o que você vive.
          </p>
          <p>
            Mas existe um caminho diferente. Um caminho que a natureza oferece há séculos, e que a ciência moderna está finalmente validando.
          </p>
        </div>
      </div>
    </section>
  );
};
