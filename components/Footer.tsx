import React from 'react';

export const Footer: React.FC = () => {

    return (
        <footer className="bg-brand-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 text-center md:text-left mb-12">
                    <div>
                        <h3 className="font-serif text-2xl font-bold mb-4">Pomada Conforto & Alívio</h3>
                        <p className="text-gray-300">Feito com amor, ciência e natureza.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Nosso Propósito</h4>
                        <p className="text-gray-300">Devolver o sorriso e a qualidade de vida para famílias que convivem com problemas de pele, através do poder da natureza.</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
                    <p className="font-bold mb-2">⚠️ AVISO IMPORTANTE:</p>
                    <p className="max-w-3xl mx-auto">
                        Este produto não substitui orientação médica profissional. É um tratamento tópico complementar. Sempre faça teste de sensibilidade antes do primeiro uso. Descontinue o uso em caso de reações adversas. Manter fora do alcance de crianças quando não supervisionado.
                    </p>
                    <p className="mt-8 font-semibold">Nativo Cosmético Natural</p>
                    <p className="mt-2">&copy; {new Date().getFullYear()} Pomada Conforto & Alívio. Todos os direitos reservados. Fortaleza - CE</p>
                </div>
            </div>
        </footer>
    );
};