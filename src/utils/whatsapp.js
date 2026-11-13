// ============================================================
// PASTA 5/6 - UTILS | src/utils/whatsapp.js
// ------------------------------------------------------------
// O QUE É: Funções para gerar link do WhatsApp.
// PARA ATUALIZAR: NÃO mexa aqui se só trocou o número.
// O número vem de src/data/config.js (CONFIG.whatsappNumber).
// Se quiser mudar o texto padrão do WhatsApp, mude WHATSAPP_MESSAGES abaixo.
// ============================================================
import { CONFIG } from '../data/config'

/**
 * Gera link https://wa.me/numero?text=mensagem
 * @param {string} message - Texto que vai pré-preenchido no WhatsApp
 */
export function whatsappLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`
}

/** Textos padrão usados nos botões do site */
export const WHATSAPP_MESSAGES = {
  // Botão genérico do Header, CTA, Footer e botão flutuante
  generic: 'Olá Assietch! Quero orçamento grátis!',
  // Formulário: monta mensagem com aparelho + problema digitado
  lead: (device, problem) =>
    `Olá Assietch! Meu ${device} está com problema: ${problem || 'preciso de orçamento'}. Pode me ajudar?`,
  // Card de serviço: ex: "Meu notebook está com problema..."
  service: (device) => `Olá Assietch! Meu ${device} está com problema. Quero orçamento grátis!`,
}
