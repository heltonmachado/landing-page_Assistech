// ============================================================
// PASTA 1/6 - COMPONENTS | HowItWorks.jsx
// O QUE É: Seção #como-funciona com 4 passos.
// PARA ATUALIZAR: edite o array STEPS abaixo (num, title, text).
// ============================================================
const STEPS = [
  { num: 1, title: 'Chama no WhatsApp', text: 'Manda foto ou vídeo do defeito e recebe orçamento grátis.' },
  { num: 2, title: 'Aprovou, a gente conserta', text: 'Usamos peças de qualidade e diagnóstico completo.' },
  { num: 3, title: 'Testamos tudo', text: 'Testamos antes de entregar pra não voltar com defeito.' },
  { num: 4, title: 'Você busca com garantia', text: 'Pagamento fácil e garantia do serviço.' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section section-black">
      <div className="container">
        <h2>Como <em>funciona?</em></h2>
        <p className="section-sub">Simples, rápido e sem surpresa no preço.</p>
        <div className="steps">
          {STEPS.map((step) => (
            <div key={step.num} className="step">
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
