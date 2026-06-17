import {
  Download,
  ExternalLink,
  Maximize2,
  Minus,
  Plus,
  RotateCcw,
} from 'lucide-react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import {
  IMPLANTATION_IMAGE_URL,
  IMPLANTATION_PDF_URL,
} from '../config/site';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { WhatsAppButton } from './WhatsAppButton';

type ControlButtonProps = {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
};

function ControlButton({ label, onClick, children }: ControlButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="grid size-10 place-items-center rounded-full bg-white text-forest shadow-sm transition hover:bg-clay hover:text-white"
    >
      {children}
    </button>
  );
}

export function ImplantationViewer() {
  return (
    <section
      id="implantacao"
      className="bg-cream pb-[clamp(5rem,10vw,8.5rem)] pt-10 sm:pt-14 lg:pt-20"
    >
      <div className="container-shell">
        <Reveal className="mb-8" delay={0.04}>
          <WhatsAppButton className="w-full max-w-xl sm:w-auto">
            Cadastre-se para participar do lançamento.
          </WhatsAppButton>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionTitle
            eyebrow="Implantação do projeto"
            title="Veja o desenho completo do bairro"
            description="A planta reúne lotes, vias, áreas verdes, sistemas de lazer e áreas institucionais. Use os controles ou o gesto de pinça para visualizar os detalhes."
          />
          <Reveal className="flex flex-wrap gap-3 lg:justify-end" delay={0.1}>
            <a
              href={IMPLANTATION_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-3 text-sm font-semibold text-forest transition hover:border-clay hover:text-clay"
            >
              <ExternalLink aria-hidden="true" className="size-4" />
              Abrir PDF original
            </a>
            <a
              href={IMPLANTATION_PDF_URL}
              download
              className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-light"
            >
              <Download aria-hidden="true" className="size-4" />
              Baixar implantação
            </a>
          </Reveal>
        </div>

        <Reveal
          className="mt-12 overflow-hidden rounded-[2rem] border border-forest/10 bg-[#d8d6cf] shadow-soft"
          delay={0.08}
        >
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={5}
            centerOnInit
            wheel={{ step: 0.18 }}
            doubleClick={{ step: 0.65 }}
          >
            {({ zoomIn, zoomOut, resetTransform, centerView }) => (
              <>
                <div className="flex flex-col gap-3 border-b border-forest/10 bg-forest px-4 py-3 text-white sm:flex-row sm:items-center sm:justify-between sm:px-5">
                  <p className="flex items-center gap-2 text-xs leading-5 text-white/72 sm:text-sm">
                    <Maximize2
                      aria-hidden="true"
                      className="size-4 shrink-0 text-clay-light"
                    />
                    Use o zoom para visualizar os detalhes da implantação.
                  </p>
                  <div className="flex items-center gap-2">
                    <ControlButton
                      label="Aumentar zoom"
                      onClick={() => zoomIn()}
                    >
                      <Plus aria-hidden="true" className="size-4" />
                    </ControlButton>
                    <ControlButton
                      label="Diminuir zoom"
                      onClick={() => zoomOut()}
                    >
                      <Minus aria-hidden="true" className="size-4" />
                    </ControlButton>
                    <ControlButton
                      label="Resetar visualização"
                      onClick={() => resetTransform()}
                    >
                      <RotateCcw aria-hidden="true" className="size-4" />
                    </ControlButton>
                    <ControlButton
                      label="Centralizar implantação"
                      onClick={() => centerView(1)}
                    >
                      <Maximize2 aria-hidden="true" className="size-4" />
                    </ControlButton>
                  </div>
                </div>

                <div className="h-[18rem] cursor-grab touch-none overflow-hidden active:cursor-grabbing sm:h-[25rem] lg:h-[32rem]">
                  <TransformComponent
                    wrapperClass="implantation-wrapper"
                    contentClass="implantation-content"
                  >
                    <img
                      src={IMPLANTATION_IMAGE_URL}
                      alt="Planta técnica completa da implantação do Parque Alphaville Alvorada"
                      width="7413"
                      height="2566"
                      loading="lazy"
                      draggable={false}
                      className="block h-auto w-full max-w-none select-none"
                    />
                  </TransformComponent>
                </div>
              </>
            )}
          </TransformWrapper>
        </Reveal>

        <p className="mt-4 text-center text-xs leading-5 text-ink/52">
          Arraste a planta para navegar. Em telas sensíveis ao toque, use dois
          dedos para ampliar e reduzir.
        </p>
      </div>
    </section>
  );
}
