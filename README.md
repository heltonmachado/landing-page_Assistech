# Assietch — Landing Page | 6 Pastas Padrão + Código Comentado

Assistência Técnica Especializada em Belém-PA.
React 18 + Vite 5.

## Rodar
```bash
npm install
npm run dev
# http://localhost:5173
```

## Build / Deploy
```bash
npm run build
npm run preview
# Vercel: Framework Vite | Build npm run build | Output dist
```

## As 6 Pastas Padrão (tudo organizado)
```
src/
├── components/  # Componentes visuais (Header, Hero, Services, Faq...)
├── pages/       # Páginas (Home.jsx = ordem das seções)
├── data/        # Dados (config.js, services.js, faqs.js, testimonials.js)
├── hooks/       # Hooks (useFaq, useLeadForm)
├── utils/       # Utilitários (whatsapp.js)
└── styles/      # Estilo (index.css - cores, banner, cards)
public/            # Fotos: logo.png, banner.png, notebook, impressora, celular, tv, microondas, som
```

## Onde atualizar no futuro (sem se perder)
| Quero mudar... | Vá em... |
|---|---|
| WhatsApp / cidade / horário | `src/data/config.js` |
| Serviços (adicionar / trocar foto) | `src/data/services.js` + foto em `public/` |
| Depoimentos | `src/data/testimonials.js` |
| Dúvidas frequentes | `src/data/faqs.js` |
| Texto do WhatsApp | `src/utils/whatsapp.js` |
| Ordem das seções | `src/pages/Home.jsx` |
| Cor do tema / tamanho do banner / cards | `src/styles/index.css` |
| Qual FAQ começa aberta | `src/hooks/useFaq.js` |
| Aparelho inicial do formulário | `src/hooks/useLeadForm.js` |

## Regras que evitam erro
- Nunca deixe pasta `site-pronto` dentro do projeto Vite (o Vite tenta ler todo .html)
- `package.json` só tem `react` + `vite` (sem eslint que dava ERESOLVE)
- Rodapé usa `<div className="rodape">`, não `<footer>` principal
- `vite.config.js` já tem `watch.ignored` anti-ENOSPC

WhatsApp: (91) 98599-5059
