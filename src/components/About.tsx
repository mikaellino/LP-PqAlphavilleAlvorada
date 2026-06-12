import { ArrowDownRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function About() {
  return (
    <section id="sobre" className="section-space bg-cream">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-20">
        <Reveal className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-5 -top-5 size-32 rounded-tl-[4rem] border-l border-t border-clay/35 sm:-left-8 sm:-top-8"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src="/images/praca-eventos.webp"
              alt="Perspectiva ilustrada da Praça Eventos do Parque Alphaville Alvorada"
              width="1800"
              height="1500"
              loading="lazy"
              className="aspect-[6/5] size-full object-cover transition duration-700 hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 to-transparent px-6 pb-6 pt-20 text-white">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-clay-light">
                Perspectiva ilustrada
              </p>
              <p className="mt-1 text-sm text-white/75">Praça Eventos</p>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-2 max-w-[13rem] rounded-3xl bg-clay p-5 text-white shadow-card sm:-right-8 sm:p-6">
            <p className="display-title text-3xl leading-none">5</p>
            <p className="mt-2 text-xs leading-5 text-white/85">
              empreendimentos de sucesso na região de Sorocaba antecedem este
              novo capítulo.
            </p>
          </div>
        </Reveal>

        <div className="pt-8 lg:pt-0">
          <SectionTitle
            eyebrow="Sobre o lançamento"
            title="Um parque que vai transformar a forma de viver a cidade"
          />
          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-8 text-ink/72">
              Depois de cinco empreendimentos de sucesso na região de Sorocaba,
              a Alphaville apresenta um novo conceito de bairro planejado. O
              Parque Alphaville Alvorada reúne residenciais, áreas comerciais e
              multiuso em uma proposta conectada à natureza.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/72">
              Terras Alpha Alvorada 1 e 2 contam com lotes residenciais a partir
              de 253 m² e lazer completo. Ao redor, parque linear, ciclovia e
              praças de convivência criam novas possibilidades para o dia a
              dia.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <a
              href="#diferenciais"
              className="mt-8 inline-flex items-center gap-3 border-b border-forest/25 pb-2 text-sm font-semibold text-forest transition hover:border-clay hover:text-clay"
            >
              Conheça os diferenciais
              <ArrowDownRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

