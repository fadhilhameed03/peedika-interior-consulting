/**
 * EmailJS Configuration for Peedika Interior Consultants
 */
export const EMAILJS_CONFIG = {
  // Service ID verified with 200 OK in EmailJS
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_x8s5z8o',

  // Template ID for notification email sent to YOU (the owner)
  TEMPLATE_ID_ADMIN: import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN || 'template_bajizjx',

  // Template ID for confirmation/auto-reply sent to the CUSTOMER
  TEMPLATE_ID_CLIENT: import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT || 'template_p4f8pfm',

  // Your EmailJS Public Key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'MWmymDGP_ATsFuwV0',
};