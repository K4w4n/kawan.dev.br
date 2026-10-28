# kawan.dev.br — Portfólio pessoal

Portfólio pessoal de **Kawan Araújo**, desenvolvedor fullstack. Apresenta experiência profissional, habilidades técnicas, projetos e canais de contato.

## Stack

- **Next.js 15** (App Router, static export) — framework principal
- **React 19** — componentes e interatividade
- **TypeScript** — tipagem estática
- **Tailwind CSS** — estilização utilitária
- **Formspree** — backend do formulário de contato
- **Font Awesome** — ícones
- **next/font/local** — Space Grotesk + Inter self-hosted (sem layout shift e sem download no build)

## Estrutura

```
portifolio/
├── app/
│   ├── layout.tsx          # Metadados, fontes, Font Awesome
│   ├── page.tsx            # Página raiz
│   └── globals.css         # Tailwind + estilos globais
├── components/
│   ├── Navbar.tsx          # Navbar fixa com menu mobile
│   ├── Hero.tsx            # Seção hero
│   ├── Sobre.tsx           # Sobre mim
│   ├── Habilidades.tsx     # Grid de habilidades
│   ├── Projetos.tsx        # Grid de projetos
│   ├── Experiencia.tsx     # Timeline profissional
│   ├── Contato.tsx         # Formulário + links de contato
│   ├── AnimateEntry.tsx    # Wrapper de animação (IntersectionObserver)
│   └── Toast.tsx           # Feedback de ações
├── public/
│   ├── .htaccess           # Regras de URL para a hospedagem
│   └── img/
│       └── logo.svg        # Logo KA
├── fonts/                  # Fontes self-hosted (woff2)
├── next.config.ts          # output: 'export' + trailingSlash
├── tailwind.config.js      # Tokens de design (cores, fontes)
├── identidade-visual.md    # Guia de identidade visual
└── .github/
    └── workflows/
        └── deploy.yml      # Deploy automático via FTP
```

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse em **http://localhost:3000**

## Build

```bash
npm run build
```

Gera a pasta `out/` com o site estático pronto para deploy.

## Deploy

O deploy é feito automaticamente via **GitHub Actions** a cada push na branch `master`. O workflow instala as dependências, executa o build e envia a pasta `out/` para o servidor via FTP.

O site é exportado com `trailingSlash: true`, então cada rota vira uma pasta com `index.html` (ex.: `out/artigos/servico-certo/index.html`). Assim a hospedagem entrega a página corretamente ao acessar a URL com barra final.

O arquivo `public/.htaccess` é copiado para `out/` no build e enviado junto com o site. Ele cobre URLs sem extensão e mantém compatibilidade com exports antigos em `.html`, além de definir a página 404 personalizada.

### Secrets necessários no repositório

| Secret | Descrição |
|---|---|
| `FTP_SERVER` | Endereço do servidor FTP |
| `FTP_USERNAME` | Usuário FTP |
| `FTP_PASSWORD` | Senha FTP |
| `FTP_SERVER_DIR` | Pasta de destino no servidor (ex: `/public_html/`) |

## Contato

- **Email:** contato@kawan.dev.br
- **GitHub:** [github.com/k4w4n](https://github.com/k4w4n)
- **LinkedIn:** [linkedin.com/in/k4w4n](https://www.linkedin.com/in/k4w4n/)