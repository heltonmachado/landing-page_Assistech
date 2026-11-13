// ============================================================
// PASTA 1/6 - COMPONENTS | ServiceCard.jsx
// O QUE É: Card de UM serviço (foto + título + texto + botão).
// PARA ATUALIZAR: NÃO edite aqui para trocar serviço.
// Vá em src/data/services.js e edite a lista SERVICES.
// Este arquivo só mostra o que vem de lá.
// ============================================================
import { whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp'

export default function ServiceCard({ service }) {
  return (
    <article className="card">
      {/* Foto: .card-img mantém 190px, centralizada, sem distorcer (object-fit: contain) */}
      <div className="card-img">
        <img src={service.image} alt={service.alt} loading="lazy" />
      </div>
      <div className="card-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="price">Orçamento Grátis</div>
        <a className="btn" href={whatsappLink(WHATSAPP_MESSAGES.service(service.device))} target="_blank" rel="noreferrer">
          Pedir orçamento →
        </a>
      </div>
    </article>
  )
}
