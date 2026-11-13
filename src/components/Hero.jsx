// ============================================================
// PASTA 1/6 - COMPONENTS | Hero.jsx
// O QUE É: Seção principal: banner + título + provas + formulário.
// PARA ATUALIZAR:
// - Banner: troque /public/banner.png
// - Título / texto: edite o <h1> e o <p> abaixo
// - Provas: vêm de src/data/config.js (rating, totalRepairs)
// ============================================================
import { CONFIG } from '../data/config'
import { whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="hero">
      {/* Banner: foto em /public/banner.png, com overlay escuro por cima */}
      <div className="banner-wrap">
        <img className="banner" src="/banner.png" alt="Assistência Técnica Especializada - Caixas de Som, Notebooks, Impressoras, Hoverboards" />
        <div className="banner-overlay" aria-hidden="true" />
      </div>

      <div className="container hero-grid">
        <div>
          <span className="badge">⭐ {CONFIG.rating} • Orçamento Grátis • Belém-PA</span>
          <h1>Seu aparelho quebrou? A <em>Assietch</em> conserta hoje!</h1>
          <p>Assistência técnica especializada em Notebook, Impressora, Celular, TV, Microondas, Som e Hoverboard. Reparos com rapidez e garantia.</p>
          <div className="hero-actions">
            <a className="btn" href={whatsappLink(WHATSAPP_MESSAGES.generic)} target="_blank" rel="noreferrer">💬 Pedir Orçamento Grátis</a>
            <a className="btn btn-white" href="#servicos">Ver Serviços ↓</a>
          </div>
          <div className="proofs">
            <div className="proof"><b>{CONFIG.totalRepairs}</b> Aparelhos consertados</div>
            <div className="proof"><b>{CONFIG.rating}</b> Avaliação dos clientes</div>
            <div className="proof"><b>100%</b> Com garantia</div>
          </div>
        </div>
        {/* Formulário: componente separado em LeadForm.jsx */}
        <LeadForm />
      </div>
    </section>
  )
}
