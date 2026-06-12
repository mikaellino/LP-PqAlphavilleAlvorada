import { WhatsAppButton } from './WhatsAppButton';

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-forest py-20 text-white sm:py-24">
      <img
        src="/images/parque-linear.webp"
        alt=""
        width="1600"
        height="737"
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-forest/88" />
      <div className="noise-overlay absolute inset-0 -z-10 opacity-15" />

      <div className="container-shell text-center">
        <p className="eyebrow text-clay-light">Atendimento direto</p>
        <h2 className="display-title mx-auto mt-4 max-w-4xl text-balance text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
          Quer receber mais informações sobre o lançamento?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Fale diretamente com o corretor e tire suas dúvidas sobre
          disponibilidade, implantação, lotes e próximas etapas do Parque
          Alphaville Alvorada.
        </p>
        <WhatsAppButton variant="light" className="mt-8">
          Conversar pelo WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}

