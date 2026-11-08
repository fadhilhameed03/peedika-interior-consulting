/**
 * EmailJS Configuration for Peedika Interior Consultants
 */
export const EMAILJS_CONFIG = {
  // 1. Gmail Service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5djsey4',

  // 2. Template ID for notification email sent to YOU (the owner)
  TEMPLATE_ID_ADMIN: import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN || 'template_bajizjx',

  // 3. Template ID for confirmation/auto-reply sent to the CUSTOMER
  TEMPLATE_ID_CLIENT: import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT || 'template_p4f8pfm',

  // 4. Your EmailJS Public Key (found in Account -> API Keys)
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'MWmymDGP_ATsFuwV0',
};
