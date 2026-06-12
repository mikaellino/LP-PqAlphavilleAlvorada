import { galleryItems } from '../data/gallery';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function Gallery() {
  return (
    <section id="galeria" className="section-space bg-forest text-white">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Urbanismo e estilo de vida"
            title="Espaços para viver a cidade com mais leveza"
            light
          />
          <Reveal className="max-w-md lg:pb-2" delay={0.1}>
            <p className="text-base leading-7 text-white/62">
              Praças, ciclovia, parque linear e lazer completo formam uma
              paisagem pensada para encontros, movimento e contato com a
              natureza.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[16rem] grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[14rem]">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.src}
              className={`min-h-0 ${item.className}`}
              delay={(index % 4) * 0.05}
            >
              <figure className="group relative size-full min-h-64 overflow-hidden rounded-[1.6rem] bg-ink">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/5 to-transparent opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/68">
                    {item.note}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-white/45">
          Perspectivas, vegetação, edificações e elementos paisagísticos são
          ilustrativos, conforme indicado no material do empreendimento.
        </p>
      </div>
    </section>
  );
}

