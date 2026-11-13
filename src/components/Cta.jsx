// ============================================================
// PASTA 1/6 - COMPONENTS | Cta.jsx
// O QUE É: CTA final laranja "Não deixa pra depois...".
// PARA ATUALIZAR: edite o <h2> e o <p> abaixo.
// O botão usa WHATSAPP_MESSAGES.generic em src/utils/whatsapp.js
// ============================================================
import { whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp'

export default function Cta() {
  return (
    <section className="section section-orange">
      <div className="container cta-center">
        <h2>Não deixa pra depois, pode piorar!</h2>
        <p>Manda agora no WhatsApp e receba orçamento grátis em minutos.</p>
        <a className="btn btn-dark" href={whatsappLink(WHATSAPP_MESSAGES.generic)} target="_blank" rel="noreferrer">
          💬 Chamar no WhatsApp agora
        </a>
      </div>
    </section>
  )
}
