import { ChevronDown, LockKeyhole } from 'lucide-react';
import { Reveal } from './Reveal';

export function PrivacyPolicy() {
  return (
    <section id="privacidade" className="section-space bg-cream">
      <div className="container-shell max-w-4xl">
        <Reveal>
          <details className="group overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 sm:p-8">
              <span className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-forest text-clay-light">
                  <LockKeyhole aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="eyebrow block text-clay">
                    Transparência
                  </span>
                  <span className="display-title mt-1 block text-3xl text-forest sm:text-4xl">
                    Política de privacidade
                  </span>
                </span>
              </span>
              <ChevronDown
                aria-hidden="true"
                className="size-5 shrink-0 text-forest transition duration-300 group-open:rotate-180"
              />
            </summary>

            <div className="border-t border-forest/8 px-6 py-8 text-sm leading-7 text-ink/65 sm:px-8">
              <div className="grid gap-7 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-forest">Dados coletados</h3>
                  <p className="mt-2">
                    O formulário pode coletar nome, sobrenome, e-mail, telefone
                    e mensagem. Esses dados são fornecidos voluntariamente pelo
                    usuário.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-forest">Finalidade</h3>
                  <p className="mt-2">
                    As informações são usadas para contato comercial sobre o
                    Parque Alphaville Alvorada. O usuário poderá ser contatado
                    pelo corretor responsável pelo atendimento.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-forest">
                    Serviços externos
                  </h3>
                  <p className="mt-2">
                    O formulário é incorporado via Google Forms. O WhatsApp
                    também é um canal externo, sujeito às políticas de sua
                    respectiva plataforma.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-forest">
                    Consentimento e remoção
                  </h3>
                  <p className="mt-2">
                    O envio do formulário indica concordância com o contato. Os
                    dados não devem ser vendidos ou compartilhados
                    indevidamente. A remoção pode ser solicitada pelo canal de
                    atendimento informado nesta página.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}

