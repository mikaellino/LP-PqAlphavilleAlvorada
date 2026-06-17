import { Clock3, MessageCircleMore, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { WHATSAPP_PHONE_DISPLAY, getWhatsAppUrl } from '../lib/whatsapp';
import { GoogleFormEmbed } from './GoogleFormEmbed';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function ContactSection() {
  return (
    <section id="contato" className="section-space bg-mist">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Fale conosco"
          title="Escolha o canal mais conveniente"
          description="Converse agora pelo WhatsApp ou envie seus dados pelo formulário para receber contato sobre o Parque Alphaville Alvorada."
          align="center"
        />

        <div className="mt-14 grid items-start gap-7 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] bg-forest text-white shadow-soft">
              <div className="relative p-7 sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 size-56 rounded-full border-[2.5rem] border-white/5"
                />
                <span className="grid size-14 place-items-center rounded-2xl bg-clay text-white">
                  <FaWhatsapp aria-hidden="true" className="text-3xl" />
                </span>
                <p className="eyebrow mt-8 text-clay-light">
                  Atendimento pelo WhatsApp
                </p>
                <h3 className="display-title mt-3 text-4xl">
                  Uma conversa direta, sem etapas desnecessárias.
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/68">
                  Use a mensagem pronta para iniciar o atendimento e confirmar
                  informações comerciais diretamente com o corretor.
                </p>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-forest transition hover:bg-clay-light"
                >
                  <FaWhatsapp aria-hidden="true" className="text-xl" />
                  Chamar no WhatsApp
                </a>
                <p className="mt-4 text-center text-sm font-medium text-white/72">
                  {WHATSAPP_PHONE_DISPLAY}
                </p>
              </div>

              <div className="border-t border-white/10 bg-black/10 p-7 text-sm text-white/68 sm:p-9">
                <p className="flex items-start gap-3">
                  <Clock3
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-clay-light"
                  />
                  <span>
                    Consulte diretamente com o corretor os horários e condições
                    de atendimento.
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 rounded-3xl border border-forest/10 bg-cream p-5 text-sm text-ink/60">
              <p className="flex items-start gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-forest"
                />
                Seus dados serão usados para contato comercial sobre este
                lançamento.
              </p>
              <p className="flex items-start gap-3">
                <MessageCircleMore
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-forest"
                />
                Preço, disponibilidade e condições devem ser confirmados no
                atendimento.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-forest/8 bg-white p-2 shadow-soft sm:p-3">
              <div className="px-5 pb-5 pt-6 sm:px-7">
                <p className="eyebrow text-clay">Formulário de interesse</p>
                <h3 className="display-title mt-3 text-3xl text-forest sm:text-4xl">
                  Conte como podemos ajudar
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/58">
                  Preencha nome, sobrenome, e-mail, telefone e mensagem. O
                  formulário é processado pelo Google Forms.
                </p>
              </div>
              <GoogleFormEmbed />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
