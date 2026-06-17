export const WHATSAPP_PHONE_DISPLAY = '(19) 97605-2243';
export const WHATSAPP_PHONE_LINK = '5519976052243';

export const WHATSAPP_MESSAGE =
  'Olá! Gostaria de conversar sobre o Lançamento parque Alphaville Sorocaba!';

export function getWhatsAppUrl() {
  return `https://wa.me/${WHATSAPP_PHONE_LINK}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;
}

