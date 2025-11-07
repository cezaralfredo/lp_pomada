import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface CtaButtonProps {
  children: React.ReactNode;
  phoneNumber: string;
  message?: string;
  className?: string;
  size?: 'normal' | 'large' | 'huge';
  variant?: 'primary' | 'secondary';
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  phoneNumber,
  message = "Olá! Gostaria de mais informações sobre a Pomada Conforto & Alívio.",
  className = '',
  size = 'normal',
  variant = 'primary',
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const sizeClasses = {
    normal: 'px-8 py-3 text-lg',
    large: 'px-10 py-4 text-xl',
    huge: 'px-12 py-5 text-2xl',
  };

  const variantClasses = {
    primary: 'bg-brand-accent hover:bg-red-600 text-white',
    secondary: 'bg-brand-dark hover:bg-indigo-900 text-white',
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-6 w-6 mr-3" />
      {children}
    </a>
  );
};
