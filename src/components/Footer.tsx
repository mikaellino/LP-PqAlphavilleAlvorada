import { BOOK_PDF_URL, IMPLANTATION_PDF_URL, STAND_ADDRESS } from '../config/site';
import { WHATSAPP_PHONE_DISPLAY } from '../lib/whatsapp';

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell py-12 sm:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-clay-light">
              Parque Alphaville
            </p>
            <p className="display-title mt-1 text-4xl">Alvorada</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
              Novo bairro planejado Alphaville na região de
              Sorocaba/Votorantim.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Documentos</h2>
            <ul className="mt-4 grid gap-3 text-sm text-white/58">
              <li>
                <a
                  href={BOOK_PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-clay-light"
                >
                  Book do lançamento
                </a>
              </li>
              <li>
                <a
                  href={IMPLANTATION_PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-clay-light"
                >
                  Implantação do projeto
                </a>
              </li>
              <li>
                <a
                  href="#privacidade"
                  className="transition hover:text-clay-light"
                >
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Atendimento</h2>
            <p className="mt-4 text-sm text-white/58">
              {WHATSAPP_PHONE_DISPLAY}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/58">
              {STAND_ADDRESS}
            </p>
          </div>
        </div>

        <div className="pt-9 text-[0.7rem] leading-5 text-white/42">
          <p>
            Imagens, perspectivas, fotomontagens, vegetação, edificações e
            elementos paisagísticos são meramente ilustrativos quando indicados
            no material. Informações comerciais, disponibilidade, condições e
            detalhes do empreendimento devem ser confirmados diretamente com o
            corretor responsável.
          </p>
          <p className="mt-4">
            O Loteamento Residencial e Comercial Gleba A27, comercialmente
            identificado como Parque Alphaville Alvorada, está aprovado junto à
            Prefeitura Municipal de Votorantim conforme Alvará de Licença nº
            388.2025-VOT-LOT-R1, emitido em 21 de janeiro de 2026. O registro
            encontra-se prenotado junto ao Cartório de Registro de Imóveis de
            Votorantim/SP sob o nº 92.780, na matrícula nº 32.744. A
            comercialização das unidades ocorrerá após a conclusão do referido
            registro, conforme informado no material comercial.
          </p>
          <p className="mt-4">
            Os projetos das edificações do clube, apoio e portaria estão em
            aprovação nos órgãos competentes e podem sofrer alterações. A
            vegetação representada mostra artisticamente a fase adulta das
            espécies; o empreendimento será entregue com mudas conforme o
            projeto paisagístico.
          </p>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>Parque Alphaville Alvorada · Atendimento imobiliário</p>
          <p>Conteúdo baseado no book oficial fornecido.</p>
        </div>
      </div>
    </footer>
  );
}

