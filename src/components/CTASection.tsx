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
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
          Fale diretamente com o corretor Adriano,{' '}
          <span className="whitespace-nowrap">CRECI 180471‑F</span>, e tire
          suas dúvidas sobre valores, prazo de entrega e data do lançamento.
          Fechando negócio, ganhe uma{' '}
          <span className="whitespace-nowrap">TV 43&quot;.</span>
        </p>
        <WhatsAppButton variant="light" className="mt-8">
          Conversar pelo WhatsApp
        </WhatsAppButton>
        <p className="mx-auto mt-5 max-w-2xl text-xs leading-5 text-white/48 sm:text-sm sm:leading-6">
          Obs.: a escolha do lote e o menor preço são destinados aos clientes
          com cadastro completo para o evento de lançamento.
        </p>
      </div>
    </section>
  );
}
