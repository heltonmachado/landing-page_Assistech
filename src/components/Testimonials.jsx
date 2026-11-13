// ============================================================
// PASTA 1/6 - COMPONENTS | Testimonials.jsx
// O QUE É: Seção #depoimentos.
// PARA ATUALIZAR: edite src/data/testimonials.js (lista TESTIMONIALS).
// ============================================================
import { TESTIMONIALS } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section section-white">
      <div className="container">
        <h2>O que os clientes <em>falam?</em></h2>
        <p className="section-sub">Quem consertou na Assietch, recomenda.</p>
        <div className="grid">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.id} className="testi">
              <div className="stars" aria-label="5 de 5 estrelas">★★★★★</div>
              <p>{t.text}</p>
              <footer><b>{t.name}</b><span>{t.meta}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
