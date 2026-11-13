// ============================================================
// PASTA 2/6 - PAGES | src/pages/Home.jsx
// ------------------------------------------------------------
// O QUE É: Página principal (a única página do site).
// É aqui que a ordem das seções é definida.
// PARA ATUALIZAR NO FUTURO:
// - Para MUDAR A ORDEM: só reordene as linhas abaixo.
// - Para ADICIONAR uma seção: crie o componente em src/components/ e importe + coloque aqui.
// - Para REMOVER: apague a linha da seção.
// - NÃO coloque texto de serviço aqui, o texto está em src/data/.
// ============================================================
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Ordem das seções na página */}
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
