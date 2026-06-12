import { motion, useReducedMotion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa6';
import { getWhatsAppUrl } from '../lib/whatsapp';

export function FloatingWhatsAppButton() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com o corretor pelo WhatsApp"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
      animate={
        reduceMotion
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 1, scale: 1, y: [0, -5, 0] }
      }
      transition={
        reduceMotion
          ? { duration: 0.2 }
          : {
              opacity: { delay: 0.8, duration: 0.4 },
              scale: { delay: 0.8, duration: 0.4 },
              y: {
                delay: 1.25,
                duration: 3.4,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              },
            }
      }
      className="group fixed bottom-4 right-4 z-40 grid size-14 place-items-center rounded-full border border-white/25 bg-[#168b52] text-white shadow-[0_14px_40px_rgba(13,92,54,0.4)] transition-colors duration-300 hover:bg-[#117443] sm:bottom-6 sm:right-6 sm:size-[3.75rem]"
    >
      <span
        aria-hidden="true"
        className="whatsapp-halo absolute inset-0 -z-10 rounded-full bg-[#22c874]/35"
      />
      <span
        aria-hidden="true"
        className="absolute inset-[5px] rounded-full border border-white/15"
      />
      <FaWhatsapp
        aria-hidden="true"
        className="relative text-2xl transition-transform duration-300 group-hover:scale-110 sm:text-[1.65rem]"
      />
    </motion.a>
  );
}
