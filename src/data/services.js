// ============================================================
// PASTA 3/6 - DATA | src/data/services.js
// ------------------------------------------------------------
// O QUE É: Lista de serviços exibidos em #servicos.
// PARA ATUALIZAR NO FUTURO:
// - Para ADICIONAR um serviço: copie um bloco { ... }, cole abaixo e mude id, title, description, image, device.
// - Para REMOVER: apague o bloco inteiro.
// - Para TROCAR FOTO: coloque a foto nova em /public e mude o campo image para '/nome-da-foto.png'.
// - O campo device é o texto que vai no WhatsApp, ex: 'notebook'.
// - NÃO mexa em Services.jsx, ele só lê esta lista.
// ============================================================
export const SERVICES = [
  {
    id: 'notebook', // ID único, sem espaço, sem acento
    title: 'Notebook',
    description: 'Não liga, tela quebrada, lento, bateria viciada, formatação e upgrade SSD.',
    image: '/notebook.png', // Foto em /public
    alt: 'Notebook em manutenção', // Texto para acessibilidade / SEO
    device: 'notebook', // Vai no WhatsApp
  },
  {
    id: 'impressora',
    title: 'Impressora',
    description: 'Não imprime, papel atolado, mancha, Epson, HP, Canon e Brother.',
    image: '/impressora.png',
    alt: 'Impressora Epson em manutenção',
    device: 'impressora',
  },
  {
    id: 'celular',
    title: 'Celular',
    description: 'Tela quebrada, bateria, não carrega, Samsung, Motorola, iPhone e Xiaomi.',
    image: '/celular.png',
    alt: 'Celular Samsung Galaxy',
    device: 'celular',
  },
  {
    id: 'tv',
    title: 'Televisor',
    description: 'Sem imagem, sem som, não liga, Philco, LG, Samsung e AOC.',
    image: '/tv.png',
    alt: 'Televisor Philco 32 polegadas',
    device: 'TV',
  },
  {
    id: 'microondas',
    title: 'Microondas',
    description: 'Não esquenta, faz barulho, faísca, Electrolux, LG, Panasonic e Consul.',
    image: '/microondas.png',
    alt: 'Microondas Electrolux',
    device: 'microondas',
  },
  {
    id: 'som',
    title: 'Equipamento de Som',
    description: 'JBL, caixa amplificada, sem som, chiado, não liga e troca de bateria.',
    image: '/som.png',
    alt: 'Caixa de som JBL',
    device: 'caixa de som',
  },
]

// Opções do <select> do formulário (LeadForm)
// PARA ADICIONAR: só incluir o nome na lista abaixo, entre aspas e com vírgula.
export const DEVICE_OPTIONS = [
  'Notebook',
  'Impressora',
  'Celular',
  'Televisor',
  'Microondas',
  'Caixa de Som',
  'Hoverboard',
]
