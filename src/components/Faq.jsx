// ============================================================
// PASTA 1/6 - COMPONENTS | Faq.jsx
// O QUE É: Seção #faq com acordeão.
// PARA ATUALIZAR:
// - Perguntas/respostas: edite src/data/faqs.js
// - Qual começa aberta: edite useFaq(1) em src/hooks/useFaq.js
// ============================================================
import { FAQS } from '../data/faqs'
import { useFaq } from '../hooks/useFaq'

export default function Faq() {
  const { openId, toggle } = useFaq(1)

  return (
    <section id="faq" className="section section-black">
      <div className="container">
        <h2>Dúvidas <em>frequentes</em></h2>
        <p className="section-sub">Se sua dúvida não estiver aqui, chama no WhatsApp.</p>
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id
          return (
            <div key={faq.id} className="faq-item">
              <button type="button" className="faq-btn" aria-expanded={isOpen} onClick={() => toggle(faq.id)}>
                {faq.question}
                <span>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <div className="faq-panel">{faq.answer}</div>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
