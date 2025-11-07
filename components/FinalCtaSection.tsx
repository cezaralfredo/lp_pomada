
import React from 'react';
import { CtaButton } from './CtaButton';

export const FinalCtaSection: React.FC = () => {
    return (
        <section id="cta-final" className="py-20 md:py-32 bg-gradient-to-br from-brand-primary to-blue-200 text-white">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                    Chegou a Hora de Transformar a Vida do Seu Filho
                </h2>
                <p className="text-lg md:text-xl leading-relaxed mb-8">
                    Você chegou até aqui porque está cansada de ver seu filho sofrer. Cansada das noites sem dormir, de tentar produtos que não funcionam, de se sentir impotente. <strong className="font-bold">Mas você não precisa mais se sentir assim.</strong>
                </p>
                <p className="text-xl md:text-2xl font-semibold mb-10">
                    A pergunta não é "será que vai funcionar?"<br/>A pergunta é: "quanto tempo mais você vai esperar?"
                </p>
                <div className="animate-pulse">
                    <CtaButton phoneNumber="5585986317888" size="huge" variant="secondary">
                        SIM, QUERO A POMADA CONFORTO & ALÍVIO
                    </CtaButton>
                </div>
                <p className="mt-8 text-sm opacity-90">
                    Clique no botão acima e fale diretamente conosco pelo WhatsApp. Estamos prontos para ajudar você e seu filho.
                </p>
            </div>
        </section>
    );
};