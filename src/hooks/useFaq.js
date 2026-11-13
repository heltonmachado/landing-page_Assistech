// ============================================================
// PASTA 4/6 - HOOKS | src/hooks/useFaq.js
// O QUE É: Hook que controla qual FAQ está aberta.
// PARA ATUALIZAR: Se quiser que nenhuma comece aberta, troque useState(1) por useState(0).
// Se quiser que a primeira abra, deixe useState(1).
// ============================================================
import { useState } from 'react'

export function useFaq(initialOpenId = 1) {
  const [openId, setOpenId] = useState(initialOpenId)

  // Se clicar na já aberta, fecha (0). Se clicar em outra, abre ela.
  function toggle(id) {
    setOpenId((current) => (current === id ? 0 : id))
  }

  return { openId, toggle }
}
