# Parque Alphaville Alvorada

Landing page responsiva do lançamento Parque Alphaville Alvorada, novo bairro
planejado Alphaville na região de Sorocaba/Votorantim. A página apresenta o
projeto, diferenciais, galeria, implantação, book comercial e canais de contato.

## Stack

- Vite, React e TypeScript
- Tailwind CSS
- Lucide React
- Motion
- React Zoom Pan Pinch
- ESLint

## Instalação

```bash
npm install
```

## Ambiente local

Crie um arquivo `.env.local` a partir de `.env.example`:

```env
VITE_GOOGLE_FORM_EMBED_URL=https://docs.google.com/forms/d/e/1FAIpQLSdT70hIeWHP1k8mwowR2G3qxToILzOwZNjT9e8o_fdN-8k20w/viewform?embedded=true
VITE_GOOGLE_FORM_SHARE_URL=https://forms.gle/b4RuUxWfCRnjsAoD8
```

`VITE_GOOGLE_FORM_EMBED_URL` alimenta o iframe exibido na seção de contato.
`VITE_GOOGLE_FORM_SHARE_URL` abre o formulário em uma nova aba e funciona como
alternativa caso a incorporação não esteja configurada.

Inicie o projeto:

```bash
npm run dev
```

## Verificações

```bash
npm run lint
npm run build
```

O resultado de produção será gerado em `dist/`.

## WhatsApp

Telefone, mensagem e geração da URL estão centralizados em
`src/lib/whatsapp.ts`. Para alterar o contato, edite as constantes desse arquivo.
Todos os CTAs devem continuar consumindo `getWhatsAppUrl()`.

## PDFs e imagens

- Book comercial: `public/docs/lancamento-parque-alphaville-alvorada.pdf`
- Implantação: `public/docs/implantacao-votorantim.pdf`
- Imagens otimizadas: `public/images`

Ao substituir um PDF, mantenha o nome público ou atualize as referências em
`src/config/site.ts`. Ao substituir imagens, preserve proporções adequadas,
formato WebP ou AVIF, textos alternativos e as legendas de caráter ilustrativo.

## Publicação

O projeto pode ser publicado em qualquer hospedagem de site estático compatível
com Vite, como Vercel, Netlify ou Cloudflare Pages. Configure as duas variáveis
`VITE_GOOGLE_FORM_*` no ambiente da plataforma e use:

```bash
npm run build
```

Diretório de saída: `dist`.

Antes de publicar, execute a checklist em `docs/QA_CHECKLIST.md` e confirme os
dados comerciais e legais com o responsável pelo empreendimento.

