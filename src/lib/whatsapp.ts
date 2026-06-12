export const WHATSAPP_PHONE_DISPLAY = '(19) 98105-9004';
export const WHATSAPP_PHONE_LINK = '5519981059004';

export const WHATSAPP_MESSAGE =
  'Olá! Gostaria de conversar sobre o Lançamento parque Alphaville Sorocaba!';

export function getWhatsAppUrl() {
  return `https://wa.me/${WHATSAPP_PHONE_LINK}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;
}

