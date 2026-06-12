import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { getWhatsAppUrl } from '../lib/whatsapp';

const googleFormUrl = import.meta.env.VITE_GOOGLE_FORM_EMBED_URL;
const googleFormShareUrl = import.meta.env.VITE_GOOGLE_FORM_SHARE_URL;

export function GoogleFormEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    if (shouldLoad || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '500px 0px' },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [shouldLoad]);

  if (!googleFormUrl) {
    return (
      <div className="grid min-h-80 place-items-center rounded-[1.5rem] bg-cream p-8 text-center">
        <div className="max-w-md">
          <h3 className="display-title text-3xl text-forest">
            Formulário temporariamente indisponível
          </h3>
          <p className="mt-4 text-sm leading-6 text-ink/62">
            Você ainda pode falar diretamente com o corretor pelo WhatsApp ou
            abrir o formulário em uma nova aba.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-clay px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c96632]"
            >
              Falar pelo WhatsApp
            </a>
            {googleFormShareUrl && (
              <a
                href={googleFormShareUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/20 px-5 py-3 text-sm font-semibold text-forest transition hover:border-clay hover:text-clay"
              >
                Abrir formulário
                <ExternalLink aria-hidden="true" className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-[1.5rem] bg-white"
    >
      {shouldLoad ? (
        <iframe
          src={googleFormUrl}
          title="Formulário de contato Parque Alphaville Alvorada"
          loading="lazy"
          className="block h-[980px] w-full border-0"
        >
          Carregando formulário de contato…
        </iframe>
      ) : (
        <div
          className="grid h-[34rem] place-items-center bg-cream text-center"
          aria-label="O formulário será carregado ao se aproximar desta seção"
        >
          <div>
            <span
              aria-hidden="true"
              className="mx-auto block size-8 animate-spin rounded-full border-2 border-forest/15 border-t-clay"
            />
            <p className="mt-4 text-sm text-ink/55">
              Preparando formulário de contato…
            </p>
          </div>
        </div>
      )}
      {googleFormShareUrl && (
        <div className="border-t border-forest/8 bg-cream px-5 py-4 text-center">
          <a
            href={googleFormShareUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:text-clay"
          >
            Abrir formulário em nova aba
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>
        </div>
      )}
    </div>
  );
}
