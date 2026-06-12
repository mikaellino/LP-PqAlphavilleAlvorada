# Parque Alphaville Alvorada

## Contexto

Este repositório contém a landing page do lançamento Parque Alphaville Alvorada,
um novo bairro planejado Alphaville na região de Sorocaba/Votorantim.

O objetivo principal é apresentar o empreendimento com acabamento premium e
gerar contatos para o corretor por WhatsApp e Google Forms.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Motion
- React Zoom Pan Pinch
- ESLint

## Comandos

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Regras de desenvolvimento

- Manter o código limpo, componentizado, tipado e simples de manter.
- Evitar abstrações ou dependências sem benefício claro.
- Não usar lorem ipsum ou placeholders visíveis.
- Não inventar preço, condições comerciais, prazo de entrega, disponibilidade
  de lotes, nome do corretor, promessa de valorização ou endereço exato.
- Não acrescentar informações legais que não constem nos materiais fornecidos.
- Usar os PDFs do empreendimento como fonte principal de conteúdo e identidade.
- Centralizar todos os links de WhatsApp no helper de `src/lib/whatsapp.ts`.
- Manter o telefone `(19) 98105-9004`, o link `5519981059004` e a mensagem
  definidos no contexto do projeto.
- Usar Google Forms incorporado por iframe; não usar Formspree, envio manual ao
  Google Forms ou backend próprio nesta versão.
- Preservar responsividade, acessibilidade, SEO e performance em cada mudança.

## Regras visuais

- Seguir a identidade visual do book do empreendimento.
- Priorizar tons terrosos e alaranjados, off-white, grafite e verdes naturais.
- Usar tipografia limpa, respiro, hierarquia clara e animações discretas.
- Evitar aparência genérica, excesso de gradientes ou linguagem artificial.

## Assets

- PDFs públicos ficam em `public/docs`.
- Imagens extraídas e otimizadas ficam em `public/images`.
- Não substituir as imagens do book por fotografias genéricas de banco.
- A implantação deve manter zoom, pan, pinch-to-zoom e controles acessíveis.
- O PDF original da implantação deve permanecer disponível para abrir e baixar.
- O book completo deve permanecer disponível para abrir e baixar.

## Formulário

- A URL incorporada vem de `VITE_GOOGLE_FORM_EMBED_URL`.
- A URL compartilhável vem de `VITE_GOOGLE_FORM_SHARE_URL`.
- O iframe deve ter título acessível, carregamento lazy e largura responsiva.
- Se a URL incorporada não existir, mostrar um fallback claro para WhatsApp e,
  quando disponível, para o link compartilhável do formulário.

