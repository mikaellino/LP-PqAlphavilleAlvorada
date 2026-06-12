# Checklist de qualidade

## Conteúdo

- [x] Não há lorem ipsum ou placeholders visíveis.
- [x] Não há preço, prazo, disponibilidade, endereço ou promessa inventada.
- [x] Textos e números conferem com os PDFs fornecidos.
- [x] Imagens ilustrativas e fotomontagens estão identificadas.
- [x] Disclaimer legal está presente e fiel ao material.

## Responsividade

- [x] Header e menu funcionam em desktop e mobile.
- [x] Hero preserva leitura e enquadramento em telas pequenas.
- [x] Galeria não causa overflow horizontal.
- [x] Iframe ocupa 100% da largura disponível em mobile.
- [x] Implantação permite toque, zoom e pan em mobile.
- [x] Botão flutuante não cobre conteúdo ou controles.

## Conversão e integrações

- [x] Todos os CTAs usam o helper central de WhatsApp.
- [x] Telefone visual é `(19) 98105-9004`.
- [x] Link usa `5519981059004` e a mensagem definida no projeto.
- [x] Google Forms é exibido por iframe com URL de ambiente.
- [x] Fallback do Google Forms funciona.
- [x] Book abre em nova aba e pode ser baixado.
- [x] Implantação abre em nova aba e pode ser baixada.
- [x] Controles de aumentar, diminuir e resetar zoom funcionam.

## Acessibilidade

- [x] Há apenas um H1 e a hierarquia de headings é coerente.
- [x] Regiões usam elementos semânticos.
- [x] Imagens possuem textos alternativos adequados.
- [x] Botões de ícone possuem nome acessível.
- [x] Foco é visível e a navegação por teclado funciona.
- [x] Menu mobile controla corretamente seus atributos ARIA.
- [x] Contraste de texto e controles é suficiente.
- [x] Movimento reduzido é respeitado.

## SEO e performance

- [x] Title e meta description estão configurados.
- [x] Open Graph básico e favicon estão configurados.
- [x] Imagens fora da primeira dobra usam lazy loading.
- [x] Imagens possuem dimensões ou proporções estáveis.
- [x] PDFs pesados não são incorporados no carregamento inicial.
- [x] Não há dependências ou scripts externos desnecessários.

## Build

- [x] `npm install` conclui sem erro.
- [x] `npm run lint` conclui sem erro.
- [x] `npm run build` conclui sem erro.
- [x] A versão de produção foi inspecionada no navegador.
