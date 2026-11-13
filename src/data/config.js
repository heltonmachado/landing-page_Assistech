// ============================================================
// PASTA 3/6 - DATA | src/data/config.js
// ------------------------------------------------------------
// O QUE É: Configuração central do site.
// PARA ATUALIZAR NO FUTURO:
// - Trocou o WhatsApp? Mude só whatsappNumber e whatsappDisplay aqui.
// - Trocou cidade/horário? Mude city e hours aqui.
// - NÃO precisa caçar em outros arquivos, tudo usa este CONFIG.
// ============================================================
export const CONFIG = {
  // Nome da marca exibido no site
  businessName: 'Assietch',
  // WhatsApp: só números, com DDI + DDD (ex: 55 + 91 + número)
  // Pode vir do .env (VITE_WHATSAPP_NUMBER) ou usar o valor abaixo
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '5591985995059',
  // Como o número aparece pro cliente
  whatsappDisplay: '(91) 98599-5059',
  // Cidade e horário exibidos no rodapé e no formulário
  city: 'Belém - Pará',
  hours: 'Seg a Sex 8h-12h e 14h-18h',
  // Provas sociais do Hero
  rating: '5.0',
  totalRepairs: '500+',
}
