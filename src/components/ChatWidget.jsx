// PASTA 1/6 - COMPONENTS | ChatWidget.jsx
// O QUE É: Chat que responde com efeito de digitação.
import { useState, useEffect, useRef } from 'react'
import { CHAT_QUESTIONS } from '../data/chatQuestions'
import { whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Olá! 👋 Sou o assistente da Assietch. Clique numa pergunta abaixo:' }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [typingText, setTypingText] = useState('')
  const boxRef = useRef(null)

  // Desce o chat sozinho quando chega mensagem nova
  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight
  }, [messages, typingText, isTyping])

  function ask(q) {
    if (isTyping) return
    setMessages((prev) => [...prev, { from: 'user', text: q.label }])
    setIsTyping(true)
    setTypingText('')

    // 1. Mostra "digitando..." por 700ms
    setTimeout(() => {
      // 2. Efeito máquina de escrever - 15ms por letra
      let i = 0
      const interval = setInterval(() => {
        i++
        setTypingText(q.answer.slice(0, i))
        if (i >= q.answer.length) {
          clearInterval(interval)
          setIsTyping(false)
          setTypingText('')
          setMessages((prev) => [...prev, { from: 'bot', text: q.answer }])
        }
      }, 15)
    }, 700)
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <strong>Assietch 💬</strong>
            <span>Online agora • Responde na hora</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-messages" ref={boxRef}>
            {messages.map((m, i) => (
              <div key={i} className={m.from === 'bot' ? 'msg-bot' : 'msg-user'}>{m.text}</div>
            ))}
            {isTyping && (
              <div className="msg-bot typing">
                {typingText ? typingText : (
                  <span className="typing-dots"><span>.</span><span>.</span><span>.</span></span>
                )}
              </div>
            )}
          </div>

          <div className="chat-questions">
            {CHAT_QUESTIONS.map((q) => (
              <button key={q.label} className="chat-q" onClick={() => ask(q)}>{q.label}</button>
            ))}
          </div>

          <a className="chat-cta" href={whatsappLink(WHATSAPP_MESSAGES.generic)} target="_blank" rel="noreferrer">
            Falar com atendente no WhatsApp →
          </a>
        </div>
      )}
      <button className="chat-float" onClick={() => setOpen(!open)}>
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
