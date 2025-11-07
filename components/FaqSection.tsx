
import React, { useState } from 'react';

const faqData = [
    {
        question: "Produtos naturais realmente funcionam? Não é só placebo?",
        answer: "A eficácia dos ingredientes naturais não é questão de crença, mas de ciência. Estudos científicos demonstraram que o óleo de melaleuca apresenta efeitos significativos no tratamento de dermatites. A Sociedade Brasileira de Dermatologia reconhece que a dermatite atópica se beneficia muito dos óleos vegetais."
    },
    {
        question: "Meu filho já usa medicamentos prescritos. Pode usar junto?",
        answer: "A Pomada Conforto & Alívio é um tratamento tópico natural e complementar. No entanto, sempre recomendamos conversar com o médico do seu filho antes de combinar tratamentos. Muitas famílias usam nossa pomada como suporte entre as crises."
    },
    {
        question: "Quanto tempo dura um pote? É caro?",
        answer: "O pote de 50g dura em média 1 a 2 meses. Como você precisa de apenas uma pequena quantidade, o produto rende bastante. É um investimento que vale cada centavo pelo alívio que proporciona."
    },
    {
        question: "E se meu filho tiver alergia a algum ingrediente?",
        answer: "Por isso sempre recomendamos o teste de sensibilidade antes do primeiro uso. Embora seja raro, qualquer pessoa pode ter sensibilidade a ingredientes naturais. O teste prévio garante segurança."
    },
    {
        question: "Por que não tem garantia de devolução?",
        answer: "Como nosso produto é artesanal, natural e de uso tópico pessoal, não podemos aceitar devoluções por questões de higiene e segurança. Oferecemos suporte total via WhatsApp para qualquer dúvida."
    },
    {
        question: "Qual tamanho devo comprar?",
        answer: "Para experimentar, recomendamos o pote de 30g (R$ 29,90). Se a área afetada for grande ou para uso familiar, o pote de 50g (R$ 49,90) oferece melhor custo-benefício."
    }
];

const FaqItem: React.FC<{ faq: typeof faqData[0], isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-300">
            <button
                className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold text-brand-dark focus:outline-none"
                onClick={onClick}
            >
                <span>{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="py-4 text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
        </div>
    );
};

export const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
                    Perguntas Frequentes
                </h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
