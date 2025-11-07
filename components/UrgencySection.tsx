
import React from 'react';

export const UrgencySection: React.FC = () => {
    return (
        <section id="urgencia" className="py-16 bg-brand-secondary">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto bg-white border-4 border-brand-accent rounded-lg shadow-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-brand-dark mb-4">
                        <span className="text-4xl mr-2">⚠️</span> Importante: Produção Limitada
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Por ser um produto <strong className="text-brand-dark">100% artesanal</strong>, produzimos em pequenos lotes para garantir a máxima qualidade e frescor de cada pote.
                    </p>
                    <div className="text-left space-y-3 text-lg text-gray-800 bg-gray-100 p-6 rounded-md">
                        <p><strong>Isso significa que:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>Trabalhamos com estoque limitado</li>
                            <li>Cada lote leva tempo para ser preparado com o cuidado necessário</li>
                            <li>Quando acaba, pode levar semanas até o próximo lote</li>
                        </ul>
                    </div>
                    <p className="mt-8 text-xl font-semibold text-brand-dark">
                        Não deixe seu filho sofrer mais uma semana, mais uma noite, mais um dia. <span className="text-brand-accent">Se há estoque disponível agora, esta é sua oportunidade.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};
