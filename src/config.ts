export const WHATSAPP_NUMBER = "254700000000"; // Replace with your official business number (no +)
export const WHATSAPP_NUMBER_INTL = "+254 700 000 000";

export function getWhatsAppLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
