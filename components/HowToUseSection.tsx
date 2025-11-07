
import React from 'react';

const steps = [
    { number: 1, title: "LIMPE A ÁREA", description: "Lave suavemente a área afetada com água morna e sabonete neutro. Seque delicadamente com toalha macia, sem esfregar." },
    { number: 2, title: "APLIQUE A POMADA", description: "Com as mãos limpas, retire uma pequena quantidade. Aplique suavemente sobre a pele afetada, massageando até completa absorção." },
    { number: 3, title: "FREQUÊNCIA", description: "Aplique 2 a 3 vezes ao dia, ou conforme necessário nos momentos de coceira intensa." },
    { number: 4, title: "SEJA CONSTANTE", description: "Os melhores resultados vêm com o uso regular. A pele está se regenerando desde dentro." }
];

export const HowToUseSection: React.FC = () => {
    return (
        <section id="como-usar" className="py-16 md:py-24 bg-brand-secondary">
            <div className="container mx-auto px-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
                    Modo de Uso Simples e Prático
                </h2>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-12 max-w-3xl mx-auto" role="alert">
                    <p className="font-bold">IMPORTANTE</p>
                    <p>Antes do primeiro uso, faça um teste de sensibilidade aplicando uma pequena quantidade em uma área discreta da pele. Aguarde 24 horas para confirmar que não há reação alérgica.</p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start mb-8">
                            <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white text-2xl font-bold rounded-full flex items-center justify-center mr-6">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
                                <p className="text-gray-700 text-lg">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-brand-primary text-white p-6 rounded-lg max-w-2xl mx-auto shadow-lg">
                    <span className="text-2xl mr-2">💡</span>
                    <strong className="font-bold">DICA ESPECIAL:</strong> Aplique antes de dormir para uma noite tranquila e regeneração máxima durante o sono.
                </div>
            </div>
        </section>
    );
};
