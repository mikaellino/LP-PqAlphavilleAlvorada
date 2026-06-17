import { Download, ExternalLink, FileText } from 'lucide-react';
import { BOOK_PDF_URL } from '../config/site';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { WhatsAppButton } from './WhatsAppButton';

export function BookSection() {
  return (
    <section
      id="book"
      className="overflow-hidden bg-sand pb-[clamp(5rem,10vw,8.5rem)] pt-10 sm:pt-14 lg:pt-20"
    >
      <div className="container-shell">
        <Reveal className="mb-10 rounded-[1.75rem] border border-forest/10 bg-cream/75 p-5 shadow-card sm:p-6 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-clay">Condição com o corretor</p>
            <h2 className="display-title mt-3 text-3xl leading-[1.08] text-forest sm:text-4xl">
              Feche com o corretor Adriano e ganhe uma{' '}
              <span className="whitespace-nowrap">TV 43&quot;.</span>
            </h2>
          </div>
          <WhatsAppButton className="mt-5 w-full sm:w-auto lg:mt-0">
            Chamar Adriano no WhatsApp
          </WhatsAppButton>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-full bg-clay/18 blur-3xl"
            />
            <div className="relative rotate-[-2deg] overflow-hidden rounded-[1.6rem] bg-white p-2 shadow-soft transition duration-500 hover:rotate-0">
              <img
                src="/images/book-capa.webp"
                alt="Capa do book Parque Alphaville Alvorada"
                width="900"
                height="1600"
                loading="lazy"
                className="w-full rounded-[1.2rem]"
              />
            </div>
          </Reveal>

          <div>
            <SectionTitle
              eyebrow="Book do lançamento"
              title="O material completo para conhecer cada detalhe"
              description="Confira o book com a apresentação do bairro, perspectivas ilustradas, diferenciais dos residenciais e informações do Parque Alphaville Alvorada."
            />

            <Reveal delay={0.1}>
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-forest/10 bg-cream/65 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-forest text-clay-light">
                  <FileText aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-forest">
                    Book comercial em PDF
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink/60">
                    O arquivo completo abre em uma nova aba e também pode ser
                    baixado para consulta.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={BOOK_PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-light sm:text-base"
                >
                  Acessar book completo
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
                <a
                  href={BOOK_PDF_URL}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/20 px-6 py-3.5 text-sm font-semibold text-forest transition hover:border-clay hover:text-clay sm:text-base"
                >
                  <Download aria-hidden="true" className="size-4" />
                  Baixar PDF
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
