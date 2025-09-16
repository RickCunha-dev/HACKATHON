# HACKATHON - Plataforma de Portfólios

Projeto front-end estático focado em permitir que usuários explorem conteúdo (Blog), encontrem inspiração em outros profissionais (Inspire-se) e acessem fluxos de autenticação (Login / Cadastro / Redefinição).

## Visão Geral
- **Blog**: Página com artigos externos curados (links) e call-to-action para começar.
- **Inspire-se**: Página com grid filtrável de perfis / projetos por categoria.
- **Login / Cadastro**: Fluxos de autenticação (estrutura inicial) para futura integração com backend.
- **Responsividade**: Menu hambúrguer com clonagem dinâmica de botões (Login / Cadastre-se / Ícone de usuário) em telas menores.
- **Acessibilidade**: Uso de `aria-label` e `aria-expanded` no botão do menu.
- **Modal de Políticas**: Implementação de abertura/fechamento (Esc, clique fora, botão fechar).

## Estrutura de Pastas
```
Blog/
  blog.html
  blog.css
  blog.js
PagExplore/
  inspire-se.html
  inspire.css
  inspire.js
Pag_login/
  index.html (login principal - presumido)
  ... (outros assets de autenticação)
paginaCadastro/
  cadastro.html
  cadastro.css
  cadastro.js
Imagens/ e Icones/ (ativos estáticos)
```

## Funcionalidades Principais
1. **Menu Responsivo**
   - Botões de ação são clonados para dentro do menu em telas <= 768px.
   - Ícone de usuário aparece centralizado abaixo dos botões no menu mobile.
2. **Filtro de Categorias (Inspire-se)**
   - Mostra/esconde cards com base no atributo `data-categoria`.
3. **Modal de Políticas**
   - Abrir via link
   - Fechar por: botão X, clique fora ou tecla Esc.
4. **Animações**
   - Hover com efeito neon nos botões e ícone de usuário.
5. **Ajustes de Acessibilidade e UX**
   - Sem sublinhado/borda indesejada em elementos de ação clonados.

## Como Rodar Localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/RickCunha-dev/HACKATHON.git
   ```
2. Abra a pasta no VS Code ou outro editor.
3. Sirva com uma extensão estática (ex: Live Server) ou abra diretamente os arquivos `.html` no navegador.

## Pontos para Evolução
- Integrar autenticação real (API / backend).
- Criar componente de cadastro completo e validação de formulário.
- Adicionar paginação ou lazy-load para cards de perfis.
- Internacionalização (i18n) futura.
- Minificação e build (Vite / Webpack) se crescer.

## Boas Práticas Implementadas
- Separação de responsabilidades (HTML/CSS/JS simples e organizados).
- Classes utilitárias previsíveis.
- Evita duplicação de elementos com marcador `.__cloned`.

## Melhorias Futuras Sugestivas
| Área | Ideia |
|------|-------|
| SEO | Metatags por página, sitemap, favicon | 
| Performance | Otimizar imagens (WebP), lazy-loading | 
| Acessibilidade | Foco visível e roles adicionais | 
| Estado | Migrar clonagem para abordagem declarativa (ex: framework) | 

## Autor
Projeto mantido por: **RickCunha-dev** (Github).

---
Se quiser, posso acrescentar um diagrama de navegação ou iniciar um setup com Vite/React futuramente. É só pedir.
