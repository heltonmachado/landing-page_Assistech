// ============================================================
// ARQUIVO RAIZ | src/main.jsx
// O QUE É: Entrada do React. Renderiza <App /> dentro de #root.
// PARA ATUALIZAR: NÃO mexa aqui, a não ser para trocar o CSS global.
// O CSS global está em src/styles/index.css
// ============================================================
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
