
import React from 'react';
import { CtaButton } from './CtaButton';

const testimonials = [
    {
        quote: "Minha cicatriz da cesária melhorou bastante desde o primeiro uso, desinchou e deixou de ficar vermelha, amei 😍",
        author: "— Gabriela Drapeau",
    },
    {
        quote: "Pomada excelente e eficaz. Em apenas 3 aplicações já se nota a melhora. Meu filho de 06 anos tem dermatite atópica. Estou passando a pomada 3x ao dia e estou muito feliz com o resultado! Recomendo demais.",
        author: "— Fernando Lívio",
    },
    {
        quote: "Eu estava sofrendo a meses com uma alergia nos pés, que me causava coceira, vermelhidão e muita irritação. Já tinha tentado de tudo, mas nada resolvia  completamente. Foi então que conheci a pomada Conforto e Alívio , e posso dizer que foi uma verdadeira benção.  Em poucos dias de uso, senti uma melhora incrível.",
        author: "— Izabel Penha",
    }
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
            <p className="font-bold text-brand-dark text-center">{testimonial.author}</p>
        </div>
    );
};

export const SocialProofSection: React.FC = () => {
    return (
        <section id="depoimentos" className="py-16 md:py-24 bg-brand-secondary">
            <div className="container mx-auto px-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
                    Os que utilizam a pomada estão dizendo
                </h2>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <CtaButton phoneNumber="5585986317888" size="large">
                        Quero Resultados Como Estes Para Meu Filho
                    </CtaButton>
                </div>
            </div>
        </section>
    );
};
