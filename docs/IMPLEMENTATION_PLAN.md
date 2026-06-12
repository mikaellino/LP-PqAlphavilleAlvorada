# Plano de implementação

## 1. Setup

- Inicializar Vite com React e TypeScript.
- Configurar scripts de desenvolvimento, lint e build.
- Criar `.gitignore`, `.env.example` e estrutura de diretórios.

## 2. Tailwind CSS

- Configurar Tailwind e o pipeline de CSS.
- Definir tokens visuais inspirados no book: terracota, off-white, grafite e
  verdes naturais.
- Criar estilos globais, foco visível e suporte a movimento reduzido.

## 3. Componentes

- Estruturar componentes por seção e componentes compartilhados.
- Centralizar dados fixos, caminhos públicos e contato.
- Manter semântica, tipagem e responsabilidades claras.

## 4. PDFs e imagens

- Copiar os PDFs com nomes amigáveis para `public/docs`.
- Inspecionar as páginas do book.
- Extrair imagens comerciais relevantes e gerar versões WebP otimizadas.
- Gerar prévia de alta resolução da implantação e prévia do book.

## 5. Layout

- Implementar header, hero, sobre, diferenciais e galeria.
- Implementar hierarquia editorial, animações sutis e layouts responsivos.
- Usar somente conteúdo confirmado pelos documentos.

## 6. WhatsApp

- Criar helper único para telefone, mensagem e URL.
- Aplicar o helper em todos os CTAs e no botão flutuante.
- Validar abertura em nova aba, atributos de segurança e acessibilidade.

## 7. Google Forms

- Incorporar o formulário por iframe responsivo.
- Ler as URLs das variáveis de ambiente.
- Implementar fallback para WhatsApp e link compartilhável.

## 8. Implantação

- Exibir a prévia técnica em alta resolução.
- Implementar zoom, pan, pinch-to-zoom e controles visíveis.
- Disponibilizar abertura e download do PDF original.

## 9. SEO, acessibilidade e performance

- Configurar title, description, Open Graph e favicon.
- Garantir um único H1, HTML semântico, alt texts e foco visível.
- Aplicar lazy loading, dimensões de mídia e carregamento responsável.

## 10. Testes finais

- Verificar desktop, notebook, tablet e celular.
- Testar menu, âncoras, CTAs, iframe, PDFs e controles da implantação.
- Auditar conteúdo, teclado, contraste e ausência de dados inventados.

## 11. Build

- Executar `npm run lint`.
- Executar `npm run build`.
- Corrigir avisos e erros que afetem a entrega.
- Atualizar `docs/QA_CHECKLIST.md` com o resultado real.

