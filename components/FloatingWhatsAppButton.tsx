import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ 
    phoneNumber, 
    message = "Olá! Gostaria de mais informações sobre a Pomada Conforto & Alívio." 
}) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-50 animate-bounce"
            aria-label="Fale conosco pelo WhatsApp"
        >
            <WhatsAppIcon className="h-8 w-8 text-white" />
        </a>
    );
};
