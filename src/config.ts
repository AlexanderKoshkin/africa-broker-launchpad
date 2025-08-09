export const WHATSAPP_NUMBER = "27791811805"; // Replace with your official business number (no +)
export const WHATSAPP_NUMBER_INTL = "+27 79 181 1805";

export function getWhatsAppLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
