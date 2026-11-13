// ============================================================
// PASTA 1/6 - COMPONENTS | LeadForm.jsx
// O QUE É: Formulário "O que estragou?" que abre o WhatsApp.
// PARA ATUALIZAR:
// - Opções do select: edite DEVICE_OPTIONS em src/data/services.js
// - Texto da mensagem: edite WHATSAPP_MESSAGES.lead em src/utils/whatsapp.js
// - Lógica: está no hook useLeadForm em src/hooks/useLeadForm.js
// ============================================================
import { DEVICE_OPTIONS } from '../data/services'
import { useLeadForm } from '../hooks/useLeadForm'

export default function LeadForm() {
  const { device, setDevice, problem, setProblem, handleSubmit } = useLeadForm()

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <h3>O que estragou? 🔧</h3>
      <p>Preencha e receba orçamento grátis no WhatsApp em minutos.</p>

      <label className="label" htmlFor="device">Qual aparelho?</label>
      <select id="device" value={device} onChange={(e) => setDevice(e.target.value)}>
        {DEVICE_OPTIONS.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <label className="label" htmlFor="problem">O que está acontecendo?</label>
      <input id="problem" className="input" type="text" placeholder="Ex: Não liga, tela quebrada, não imprime..." value={problem} onChange={(e) => setProblem(e.target.value)} />

      <button type="submit" className="btn btn-green">💬 Enviar no WhatsApp →</button>
      <div className="small">Resposta rápida • Seg a Sex 8h-12h e 14h-18h</div>
    </form>
  )
}
