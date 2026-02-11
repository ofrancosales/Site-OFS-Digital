import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../types';

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  message, 
  label = "Falar no WhatsApp", 
  className = "",
  variant = 'primary',
  fullWidth = false
}) => {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-lg px-6 py-3";
  
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-500/30",
    secondary: "bg-white text-emerald-700 hover:bg-gray-100 shadow-md",
    outline: "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50"
  };

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle size={20} />
      {label}
    </a>
  );
};