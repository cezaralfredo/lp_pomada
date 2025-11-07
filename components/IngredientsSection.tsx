
import React from 'react';
import { images } from './assets';

const ingredients = [
  {
    name: 'ÓLEO DE COCO EXTRA VIRGEM',
    properties: 'Hidratante profundo, antioxidante, protetor da barreira cutânea',
    description: 'Contém ácidos graxos que penetram profundamente na pele, restaurando a hidratação. Fortalece a barreira de proteção natural e combate a inflamação de forma suave e eficaz.',
    image: images.ingredients.coco,
    alt: 'Pedaços de coco ao lado de um pote com óleo de coco extra virgem.'
  },
  {
    name: 'ÓLEO DE GIRASSOL 100% NATURAL',
    properties: 'Rico em vitamina E, ômega 6, cicatrizante, regenerador',
    description: 'Uma potência nutricional para peles sensíveis. Possui ação regeneradora, melhora a função da barreira lipídica protetora e tem propriedades anti-inflamatórias comprovadas.',
    image: images.ingredients.girassol,
    alt: 'Flores de girassol vibrantes e uma garrafa de óleo de girassol.'
  },
  {
    name: 'ÓLEO ESSENCIAL DE MELALEUCA',
    properties: 'Antibacteriano, antifúngico, antiviral, imunoestimulante',
    description: 'Considerado um dos mais fortes antibióticos naturais, sua eficácia é comprovada na redução da inflamação, coceira e vermelhidão, protegendo a pele de infecções secundárias.',
    image: images.ingredients.melaleuca,
    alt: 'Folhas de melaleuca (tea tree) e um frasco de óleo essencial.'
  },
  {
    name: 'CERA DE ABELHA PURA E FILTRADA',
    properties: 'Antialérgica, anti-inflamatória, umectante, protetora',
    description: 'Cria uma camada protetora que retém a umidade sem obstruir os poros. Suas propriedades antialérgicas e anti-inflamatórias acalmam a pele irritada.',
    image: images.ingredients.cera,
    alt: 'Favo de mel com cera de abelha e uma abelha pousada sobre ele.'
  },
  {
    name: 'FOLHAS SECAS DE TANCHAGEM',
    properties: 'Antibacteriana, desintoxicante, analgésica, cicatrizante',
    description: 'Planta medicinal tradicional, conhecida por suas propriedades curativas. Auxilia na cicatrização de feridas, ajuda na coagulação e possui ação analgésica que alivia o desconforto.',
    image: images.ingredients.tanchagem,
    alt: 'Folhas verdes e secas da planta medicinal tanchagem.'
  }
];

const NotAllowedItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-center text-lg"><span className="mr-3 text-red-500 text-2xl">❌</span> {children}</li>
);

export const IngredientsSection: React.FC = () => {
    return (
        <section id="ingredientes" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                        A Ciência Por Trás da Fórmula Natural
                    </h2>
                    <p className="text-lg text-gray-700">
                        Cada ingrediente da Pomada Conforto & Alívio foi escolhido por suas propriedades terapêuticas comprovadas:
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {ingredients.map((item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center bg-brand-secondary p-6 rounded-lg shadow-md gap-6">
                            <img src={item.image} alt={item.alt} className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-brand-dark text-xl">{item.name}</h3>
                                <p className="text-brand-accent font-semibold text-sm my-2">{item.properties}</p>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 max-w-md mx-auto bg-red-50 p-8 rounded-lg border border-red-200">
                    <h3 className="text-2xl font-bold text-brand-dark text-center mb-6">O QUE NÃO TEM NA FÓRMULA:</h3>
                    <ul className="space-y-3">
                        <NotAllowedItem>Corticoides ou hormônios</NotAllowedItem>
                        <NotAllowedItem>Parabenos ou conservantes químicos</NotAllowedItem>
                        <NotAllowedItem>Fragrâncias artificiais</NotAllowedItem>
                        <NotAllowedItem>Petrolatos ou derivados</NotAllowedItem>
                        <NotAllowedItem>Ingredientes testados em animais</NotAllowedItem>
                    </ul>
                </div>
            </div>
        </section>
    );
};
