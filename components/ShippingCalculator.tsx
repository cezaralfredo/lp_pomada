import React, { useState } from 'react';

// Define the structure for the shipping result
interface ShippingResult {
    pac30g: { prazo: string; valor: string };
    pac50g: { prazo: string; valor: string };
}

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-dark"></div>
    </div>
);

export const ShippingCalculator: React.FC = () => {
    const [cep, setCep] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<ShippingResult | null>(null);

    const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length <= 8) {
            let maskedValue = value;
            if (value.length > 5) {
                maskedValue = `${value.slice(0, 5)}-${value.slice(5)}`;
            }
            setCep(maskedValue);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const cleanCep = cep.replace('-', '');
        if (cleanCep.length !== 8) {
            setError('Por favor, digite um CEP válido com 8 dígitos.');
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        // --- INÍCIO DA SIMULAÇÃO DA API ---
        // Em um projeto real, aqui ocorreria uma chamada segura para um backend
        // que consultaria a API dos Correios.
        
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simula a latência da rede

        if (cep.startsWith('60') || cep.startsWith('61')) { // CEPs do Ceará
            setResult({
                pac30g: { prazo: '3', valor: '18,50' },
                pac50g: { prazo: '3', valor: '19,20' }
            });
        } else if (cep.startsWith('0') || cep.startsWith('1')) { // CEPs de SP
            setResult({
                pac30g: { prazo: '8', valor: '28,70' },
                pac50g: { prazo: '8', valor: '29,90' }
            });
        } else if (cep.startsWith('2')) { // CEPs do RJ
             setResult({
                pac30g: { prazo: '7', valor: '30,10' },
                pac50g: { prazo: '7', valor: '31,40' }
            });
        }
        else {
            setError('CEP não encontrado ou fora da área de entrega no momento.');
        }
        // --- FIM DA SIMULAÇÃO DA API ---

        setLoading(false);
    };

    return (
        <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
                🚚 Calcule o frete e prazo de entrega
            </h3>
            <p className="text-gray-600 mb-6">
                Digite seu CEP abaixo para ver as opções de envio via PAC.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto">
                <input 
                    type="text" 
                    value={cep}
                    onChange={handleCepChange}
                    placeholder="00000-000" 
                    className="w-full sm:w-auto flex-grow px-4 py-3 text-lg bg-white border-2 border-gray-200 rounded-md focus:ring-brand-primary focus:border-brand-primary transition text-brand-dark placeholder:text-gray-400"
                    aria-label="CEP"
                />
                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-brand-dark hover:bg-green-900 text-white font-bold px-8 py-3 text-lg rounded-md transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading ? 'Calculando...' : 'Calcular'}
                </button>
            </form>

            <div className="shipping-results mt-6 min-h-[6rem] flex flex-col justify-center">
                {loading && <LoadingSpinner />}
                {error && <p className="text-red-500 font-semibold">{error}</p>}
                {result && (
                    <div className="animate-fade-in-up space-y-3 text-brand-dark">
                        <p className="text-lg"><strong>Pote de 30g (PAC):</strong> R$ {result.pac30g.valor} (Até {result.pac30g.prazo} dias úteis)</p>
                        <p className="text-lg"><strong>Pote de 50g (PAC):</strong> R$ {result.pac50g.valor} (Até {result.pac50g.prazo} dias úteis)</p>
                         <p className="text-sm text-gray-500 pt-2">*Outras opções de entrega (como Sedex) estão disponíveis via WhatsApp.</p>
                    </div>
                )}
            </div>
        </div>
    );
};