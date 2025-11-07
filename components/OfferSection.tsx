import React from 'react';
import { CtaButton } from './CtaButton';
import { ShippingCalculator } from './ShippingCalculator';

const PriceCard: React.FC<{
    size: string;
    price: string;
    benefits: string[];
    isPopular?: boolean;
}> = ({ size, price, benefits, isPopular = false }) => {
    return (
        <div className={`border-2 rounded-lg p-8 text-center flex flex-col ${isPopular ? 'border-brand-accent scale-105 bg-white shadow-2xl' : 'border-gray-300 bg-white shadow-lg'}`}>
            {isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full font-bold text-sm">
                    ⭐ MAIS ESCOLHIDO
                </div>
            )}
            <h3 className="text-2xl font-bold text-brand-dark">{`POTE DE ${size}`}</h3>
            <p className="text-5xl font-bold text-brand-dark my-4">{price}</p>
            <ul className="space-y-2 text-gray-600 flex-grow mb-6">
                {benefits.map((benefit, i) => (
                    <li key={i}>✓ {benefit}</li>
                ))}
            </ul>
            <CtaButton phoneNumber="5585986317888" message={`Olá! Quero comprar o pote de ${size}.`} className="mt-auto">
                {`Comprar ${size}`}
            </CtaButton>
        </div>
    );
};


export const OfferSection: React.FC = () => {
    return (
        <section id="oferta" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
                    Escolha o Melhor Para Sua Família
                </h2>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto items-center">
                    <PriceCard 
                        size="30g"
                        price="R$ 39,90"
                        benefits={['Ideal para teste inicial', 'Suficiente para 3-4 semanas', 'Área de aplicação pequena']}
                    />
                    <div className="relative">
                        <PriceCard
                            size="50g"
                            price="R$ 59,90"
                            benefits={['Melhor custo-benefício', 'Suficiente para 1-2 meses', 'Ideal para áreas maiores', 'Você economiza R$ 9,90']}
                            isPopular={true}
                        />
                    </div>
                </div>
                
                <ShippingCalculator />

                <div className="text-center mt-12 text-gray-700">
                    <p><strong>💚 Validade:</strong> 6 meses após abertura</p>
                    <p><strong>📦 Envio para todo o Brasil</strong></p>
                </div>
            </div>
        </section>
    );
};