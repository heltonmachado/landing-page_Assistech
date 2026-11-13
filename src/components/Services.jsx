// ============================================================
// PASTA 1/6 - COMPONENTS | Services.jsx
// O QUE É: Seção #servicos com o grid de cards.
// PARA ATUALIZAR: edite src/data/services.js (lista SERVICES).
// Este arquivo só faz o map (loop) e renderiza ServiceCard.
// ============================================================
import { SERVICES } from '../data/services'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="servicos" className="section section-white">
      <div className="container">
        <h2>O que a gente <em>conserta?</em></h2>
        <p className="section-sub">Clique no seu aparelho e peça orçamento grátis no WhatsApp. Sem enrolação, preço justo.</p>
        <div className="grid">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
