
import React from 'react';
import { CtaButton } from './CtaButton';
import { images } from './assets';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export const SolutionSection: React.FC = () => {
    return (
        <section id="solucao" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src={images.solution} alt="Pote da Pomada Conforto & Alívio elegantemente exibido com seus ingredientes naturais ao redor." className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                    </div>
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">Conheça a Pomada Conforto & Alívio</h2>
                        <h3 className="text-xl md:text-2xl text-brand-dark mb-6">O Tratamento Natural Que Está Devolvendo o Sorriso Para Famílias Como a Sua</h3>
                        <p className="text-lg text-gray-700 mb-8">
                            Desenvolvida artesanalmente com 5 ingredientes naturais cuidadosamente selecionados, a Pomada Conforto & Alívio trabalha <strong className="text-brand-dark">com</strong> a pele do seu filho, não contra ela.
                        </p>
                        <h4 className="font-bold text-2xl text-brand-dark mb-6">✨ Resultados Que Você Pode Ver e Sentir:</h4>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start"><CheckIcon /><span className="ml-3"><strong className="text-brand-dark">Em 24-48 horas:</strong> Redução imediata da coceira e do desconforto.</span></li>
                            <li className="flex items-start"><CheckIcon /><span className="ml-3"><strong className="text-brand-dark">Em 3-5 dias:</strong> A vermelhidão começa a diminuir visivelmente.</span></li>
                            <li className="flex items-start"><CheckIcon /><span className="ml-3"><strong className="text-brand-dark">Em 7 dias:</strong> Regeneração visível da pele. Seu filho voltando a sorrir.</span></li>
                            <li className="flex items-start"><CheckIcon /><span className="ml-3"><strong className="text-brand-dark">Com uso contínuo:</strong> Controle efetivo das crises. Pele saudável.</span></li>
                        </ul>
                        <div className="mt-10">
                            <CtaButton phoneNumber="5585986317888" size="large">
                                Sim, Quero Transformar a Vida do Meu Filho
                            </CtaButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
