
import React from 'react';

const BalloonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18s-4-2-4-6a4 4 0 118 0c0 4-4 6-4 6zm0 0v2m0-12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);
const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

export const ConsequencesSection: React.FC = () => {
    return (
        <section id="consequencias" className="py-16 md:py-24 bg-brand-secondary">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
                    O Que a Dermatite Atópica Está Roubando do Seu Filho?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-12">
                    A dermatite atópica não é "só uma coceira". Ela rouba muito mais do que você imagina:
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <BalloonIcon />
                        <h3 className="font-bold text-xl my-3">A alegria de brincar ao ar livre</h3>
                        <p className="text-gray-600">Seu filho evita o parquinho porque não quer que as outras crianças vejam as manchas na pele.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <MoonIcon />
                        <h3 className="font-bold text-xl my-3">Noites tranquilas de sono</h3>
                        <p className="text-gray-600">55% das pessoas com dermatite atópica têm problemas para dormir por causa da coceira intensa.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <HeartIcon />
                        <h3 className="font-bold text-xl my-3">A autoestima e confiança</h3>
                        <p className="text-gray-600">Ele se esconde atrás de roupas de manga comprida, mesmo no calor. Prefere ficar sozinho para não ouvir perguntas.</p>
                    </div>
                </div>
                <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="font-serif text-2xl font-bold text-brand-dark mb-4">E você, mãe?</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Quantas vezes já se perguntou: "O que eu estou fazendo de errado? Por que não consigo ajudar meu filho?"
                    </p>
                    <p className="text-xl font-semibold text-brand-dark">
                        A resposta é simples: <span className="text-brand-accent">você não está fazendo nada de errado.</span> Você só ainda não encontrou a solução certa.
                    </p>
                </div>
            </div>
        </section>
    );
};
