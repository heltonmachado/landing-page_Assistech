// ============================================================
// PASTA 1/6 - COMPONENTS | Footer.jsx
// O QUE É: Rodapé (div.rodape) com logo, contato e serviços.
// PARA ATUALIZAR:
// - WhatsApp / cidade / horário: edite src/data/config.js (CONFIG)
// - NÃO use <footer> como tag principal aqui, usamos <div className="rodape"> para evitar conflito com o <footer> dos depoimentos.
// ============================================================
import { CONFIG } from '../data/config'
import { whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp'

export default function Footer() {
  return (
    <div className="rodape">
      <div className="container rodape-grid">
        <div>
          <div className="logo-wrap">
            <img src="/logo.png" alt="Assietch" width="52" height="52" />
            <div>
              <div className="logo-text">ASSI<span>ETCH</span></div>
              <div className="logo-sub">ASSISTÊNCIA TÉCNICA</div>
            </div>
          </div>
          <p>Assistência técnica especializada em Belém-PA. Reparos com rapidez e garantia.</p>
        </div>
        <div>
          <h4>Contato</h4>
          <a href={whatsappLink(WHATSAPP_MESSAGES.generic)} target="_blank" rel="noreferrer">WhatsApp: {CONFIG.whatsappDisplay}</a>
          <p className="rodape-line">{CONFIG.city}</p>
          <p className="rodape-line">{CONFIG.hours}</p>
        </div>
        <div>
          <h4>Serviços</h4>
          <a href="#servicos">Notebook</a>
          <a href="#servicos">Impressora</a>
          <a href="#servicos">Celular</a>
          <a href="#servicos">TV • Microondas • Som • Hoverboard</a>
        </div>
      </div>
      <div className="container rodape-copy">© 2026 {CONFIG.businessName} - Assistência Técnica • Feito por Souza Dev</div>
    </div>
  )
}
