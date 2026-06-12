import { ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { getWhatsAppUrl } from '../lib/whatsapp';

type WhatsAppButtonProps = {
  children: string;
  variant?: 'primary' | 'light' | 'outline';
  compact?: boolean;
  className?: string;
};

const variantClasses = {
  primary:
    'bg-clay text-white shadow-lg shadow-clay/20 hover:bg-[#c96632]',
  light: 'bg-white text-forest shadow-lg shadow-black/10 hover:bg-cream',
  outline:
    'border border-white/35 bg-white/8 text-white backdrop-blur hover:bg-white/15',
};

export function WhatsAppButton({
  children,
  variant = 'primary',
  compact = false,
  className = '',
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 ${variantClasses[variant]} ${
        compact ? 'px-4 py-2.5 text-sm' : 'px-6 py-3.5 text-sm sm:text-base'
      } ${className}`}
    >
      <FaWhatsapp aria-hidden="true" className="text-lg" />
      <span>{children}</span>
      {!compact && <ArrowUpRight aria-hidden="true" className="size-4" />}
    </a>
  );
}

