import { ArrowDown, Bike, MapPinned, Trees } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SITE_REGION } from '../config/site';
import { WhatsAppButton } from './WhatsAppButton';

const highlights = [
  { value: '253 m²', label: 'Lotes residenciais a partir de' },
  { value: '+2.500 m', label: 'de ciclovia' },
  { value: '+10', label: 'áreas de lazer' },
  { value: '1 e 2', label: 'Terras Alpha Alvorada' },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest pt-20 text-white"
    >
      <img
        src="/images/fotomontagem-aerea.webp"
        alt="Fotomontagem aérea do Parque Alphaville Alvorada e seu entorno"
        width="1920"
        height="827"
        fetchPriority="high"
        className="absolute inset-0 -z-30 size-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(19,31,24,0.93)_0%,rgba(19,31,24,0.66)_48%,rgba(19,31,24,0.28)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(19,31,24,0.88)_0%,transparent_52%)]" />
      <div className="noise-overlay absolute inset-0 -z-10 opacity-20 mix-blend-soft-light" />

      <div className="container-shell relative flex min-h-[calc(100svh-5rem)] flex-col justify-end pb-8 pt-16 sm:pb-10 lg:pb-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.17em] uppercase backdrop-blur">
              Lançamento
            </span>
            <span className="flex items-center gap-2 text-sm text-white/75">
              <MapPinned aria-hidden="true" className="size-4 text-clay-light" />
              {SITE_REGION}
            </span>
          </div>

          <h1 className="display-title max-w-4xl text-balance text-5xl leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
            Uma nova forma de viver está chegando
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            Parque Alphaville Alvorada é um novo bairro planejado com
            residenciais, áreas comerciais e multiuso, integrado à natureza e
            pensado para qualidade de vida, conveniência e segurança.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton>
              Falar com o corretor no WhatsApp
            </WhatsAppButton>
            <a
              href="#implantacao"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 sm:text-base"
            >
              Ver implantação do projeto
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mb-14 mt-8 grid w-full max-w-[20rem] grid-cols-2 overflow-hidden rounded-[1.5rem] border border-white/15 bg-black/15 backdrop-blur-md sm:mb-0 sm:mt-12 sm:max-w-none lg:mt-14 lg:grid-cols-4 lg:rounded-3xl"
        >
          {highlights.map((item, index) => (
            <div
              key={item.value + item.label}
              className={`px-3 py-3 text-center sm:px-6 sm:py-4 sm:text-left lg:py-5 ${
                index % 2 === 1 ? 'border-l border-white/12' : ''
              } ${index > 1 ? 'border-t border-white/12 lg:border-t-0' : ''} ${
                index > 0 ? 'lg:border-l' : ''
              }`}
            >
              <p className="text-xl font-semibold tracking-tight text-clay-light sm:text-2xl">
                {item.value}
              </p>
              <p className="mt-1 text-[0.68rem] leading-4 text-white/65 sm:text-xs sm:leading-5">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-5 hidden items-center gap-6 text-xs text-white/55 md:flex">
          <span className="flex items-center gap-2">
            <Trees aria-hidden="true" className="size-4" />
            Parque linear
          </span>
          <span className="flex items-center gap-2">
            <Bike aria-hidden="true" className="size-4" />
            Mobilidade e lazer
          </span>
        </div>
      </div>
    </section>
  );
}
