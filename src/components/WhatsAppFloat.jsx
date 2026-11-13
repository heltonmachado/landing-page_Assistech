// ============================================================
// PASTA 1/6 - COMPONENTS | WhatsAppFloat.jsx
// O QUE É: Botão flutuante 💬 no canto da tela.
// PARA ATUALIZAR: texto vem de WHATSAPP_MESSAGES.generic em src/utils/whatsapp.js
// ============================================================
import { whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp'

export default function WhatsAppFloat() {
  return (
    <a className="whats-float" href={whatsappLink(WHATSAPP_MESSAGES.generic)} target="_blank" rel="noreferrer" aria-label="Chamar no WhatsApp">💬</a>
  )
}
