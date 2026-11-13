// ============================================================
// PASTA 4/6 - HOOKS | src/hooks/useLeadForm.js
// O QUE É: Estado do formulário "O que estragou?" (LeadForm).
// PARA ATUALIZAR: Para mudar o aparelho inicial, troque 'Notebook' abaixo.
// ============================================================
import { useState } from 'react'
import { whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp'

export function useLeadForm() {
  const [device, setDevice] = useState('Notebook')
  const [problem, setProblem] = useState('')

  // Ao enviar, abre WhatsApp com a mensagem montada
  function handleSubmit(event) {
    event.preventDefault()
    window.open(whatsappLink(WHATSAPP_MESSAGES.lead(device, problem)), '_blank')
  }

  return { device, setDevice, problem, setProblem, handleSubmit }
}
