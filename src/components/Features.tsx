import {
  Bike,
  Building2,
  Grid2X2Plus,
  House,
  ShieldCheck,
  Trees,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  stat?: string;
};

const features: Feature[] = [
  {
    icon: Grid2X2Plus,
    title: 'Bairro planejado',
    description:
      'Urbanismo Alphaville pensado para integrar moradia, serviços, mobilidade e espaços de convivência.',
  },
  {
    icon: Building2,
    title: 'Usos que se completam',
    description:
      'Lotes residenciais, comerciais e multiuso compondo uma proposta de bairro mais conveniente.',
  },
  {
    icon: House,
    title: 'Terras Alpha 1 e 2',
    description:
      'Dois residenciais com lazer completo e lotes a partir de 253 m².',
    stat: '253 m²',
  },
  {
    icon: Trees,
    title: 'Natureza conectada',
    description:
      'Amplo parque linear e praças de convivência inseridos no cotidiano do empreendimento.',
  },
  {
    icon: Bike,
    title: 'Mais movimento',
    description:
      'Mais de 2.500 metros de ciclovia para uma rotina mais ativa e conectada.',
    stat: '+2.500 m',
  },
  {
    icon: ShieldCheck,
    title: 'Lazer e segurança',
    description:
      'Mais de dez áreas de lazer, portarias e espaços projetados para diferentes momentos.',
    stat: '+10',
  },
];

export function Features() {
  return (
    <section id="diferenciais" className="section-space bg-mist">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Diferenciais"
            title="Urbanismo, natureza e conveniência no mesmo projeto"
          />
          <Reveal className="max-w-md lg:pb-2" delay={0.1}>
            <p className="text-base leading-7 text-ink/64">
              Uma composição de espaços que aproxima áreas verdes, lazer,
              mobilidade e serviços sem perder a sensação de respiro.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-forest/8 bg-cream p-7 shadow-[0_1px_0_rgba(36,55,44,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-card sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <span className="grid size-12 place-items-center rounded-2xl bg-forest text-clay-light transition duration-300 group-hover:bg-clay group-hover:text-white">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    {feature.stat && (
                      <span className="display-title text-3xl text-clay">
                        {feature.stat}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-forest">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink/62">
                    {feature.description}
                  </p>
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-10 -right-10 size-28 rounded-full border border-clay/15 transition duration-500 group-hover:scale-125"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

