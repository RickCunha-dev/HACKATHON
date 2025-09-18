# Infinity School – Plataforma de Portfólios (HACKATHON)

Projeto front‑end estático para exposição de portfólios, exploração de conteúdos e fluxo inicial de autenticação. Desenvolvido em HTML/CSS/JS puro, focado em responsividade e UX simples.

## Visão Geral
- Blog: curadoria de links e materiais para carreira.
- Inspire‑se: grade de projetos/perfis com busca por texto e filtros por categoria.
- Login/Cadastro: telas base para futura integração com backend.
- Acessibilidade e UX: navegação por teclado no menu mobile, aria‑labels e modais fechando por Esc/clique fora.

## Estrutura do Projeto
```
.
├── Blog/
│   ├── blog.html
│   └── blog.css
├── Email-enviado/
│   ├── enviado.html
│   └── enviado.css
├── Esqueci_Senha/
│   ├── senha.html
│   └── senha.css
├── Esqueci_Senha2/
│   ├── senha2.html
│   ├── senha2.css
│   └── senha2.js
├── PagExplore/
│   ├── inspire-se.html
│   ├── inspire.css
│   └── inspire.js
├── Pag_Cadastro/
│   ├── cadastro.html
│   ├── cadastro.css
│   ├── cadastroResponsive.css
│   └── script.js
├── Pag_login/
│   ├── login.html
│   ├── login.css
│   └── login.js
├── home/
│   ├── home.html
│   ├── home.css
│   └── home.js
├── portfolio/
│   ├── portfolio.html
│   ├── portfolio.css
│   └── portfolio.js
├── profile/
│   ├── profile.html
│   ├── profile.css
│   └── profile.js
├── images/            # imagens gerais (logotipo, fotos de equipe etc.)
├── Imagens/           # imagens específicas de páginas (ex.: assets do Explore)
├── Icones/            # ícones (svg/png)
├── index.html         # redirecionamento simples (pode ser ajustado no futuro)
└── README.md
```

## Páginas Principais
- Home: `home/home.html`
- Explorar (Inspire‑se): `PagExplore/inspire-se.html`
- Blog: `Blog/blog.html`
- Login: `Pag_login/login.html`
- Cadastro: `Pag_Cadastro/cadastro.html`
- Esqueci a Senha: `Esqueci_Senha/senha.html`
- Redefinir Senha: `Esqueci_Senha2/senha2.html`
- Portfólio (exemplo): `portfolio/portfolio.html`
- Perfil (exemplo): `profile/profile.html`
- Email enviado (feedback): `Email-enviado/enviado.html`

## Destaques de Funcionalidade
- Menu hambúrguer com injeção de botões/ícone no mobile.
- Busca no Explore combinada com filtro de categorias.
- Modal de políticas (abre/fecha por botão, clique fora e Esc).
- Alternar visibilidade da senha (olhinho) nas páginas de cadastro.
- Favicons adicionados (SVG/PNG/apple‑touch‑icon).

## Como Rodar Localmente
Opção 1 – Abrir diretamente no navegador:
- Clique duas vezes em qualquer arquivo `.html` (ex.: `home/home.html`).

Opção 2 – Servir com Live Server (VS Code):
1. Abra a pasta do projeto no VS Code.
2. Instale a extensão “Live Server”.
3. Abra a página desejada (ex.: `home/home.html`) e clique em “Go Live”.

Requisitos: apenas um navegador moderno; não há build.

## Convenções e Notas
- Estrutura de assets: `images/`, `Imagens/` e `Icones/` agrupam recursos do site.
- Evite subir arquivos de mídia muito pesados (GIFs/vídeos). Prefira WebP/MP4 e/ou Git LFS.
- Caminhos relativos são utilizados entre as páginas; ajuste se mover arquivos.

## Roadmap Sugerido
- Integração com backend (autenticação real e perfis dinâmicos).
- Otimização de imagens (WebP), lazy‑loading e minificação.
- SEO (metatags por página, sitemap).
- Testes de acessibilidade (foco visível, roles adicionais).

## Contribuição
1. Faça um fork do repositório.
2. Crie um branch de feature: `git checkout -b feat/nome-da-feature`.
3. Commit suas mudanças: `git commit -m "feat: sua mensagem"`.
4. Push para o branch: `git push origin feat/nome-da-feature`.
5. Abra um Pull Request.

## Autor
Manutenção: [RickCunha-dev](https://github.com/RickCunha-dev)

—
Precisa que eu inclua prints/preview no README ou um GIF curto de demonstração? Posso preparar essa seção também.
