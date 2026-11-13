// ============================================================
// PASTA 1/6 - COMPONENTS | Header.jsx
// O QUE É: Cabeçalho fixo: logo + menu + botão WhatsApp.
// PARA ATUALIZAR:
// - Logo: troque /public/logo.png
// - Menu: edite os <a href="#..."> abaixo (o # tem que bater com o id da seção)
// ============================================================
import { whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo: imagem + texto. A imagem está em /public/logo.png */}
        <a href="#" className="logo-wrap" aria-label="Assietch - Início">
          <img src="/logo.png" alt="ATC Assietch" width="52" height="52" />
          <span>
            <span className="logo-text">ASSI<span>ETCH</span></span>
            <span className="logo-sub">ASSISTÊNCIA TÉCNICA</span>
          </span>
        </a>

        {/* Menu: #servicos, #como-funciona, #depoimentos, #faq são os ids das seções */}
        <nav className="nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#faq">Dúvidas</a>
        </nav>

        {/* Botão WhatsApp: texto vem de utils/whatsapp.js */}
        <a className="btn btn-green" href={whatsappLink(WHATSAPP_MESSAGES.generic)} target="_blank" rel="noreferrer">
          💬 WhatsApp
        </a>
      </div>
    </header>
  )
}
