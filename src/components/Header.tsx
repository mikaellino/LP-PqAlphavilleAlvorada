import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_ITEMS, SITE_NAME } from '../config/site';
import { WhatsAppButton } from './WhatsAppButton';

function Brand() {
  return (
    <a
      href="#inicio"
      className="group flex items-center gap-3 text-forest"
      aria-label={`${SITE_NAME} - voltar ao início`}
    >
      <span
        aria-hidden="true"
        className="grid size-10 place-items-center rounded-full bg-forest text-lg font-semibold text-clay-light transition-transform duration-300 group-hover:rotate-6"
      >
        A
      </span>
      <span className="leading-tight">
        <span className="block text-[0.69rem] font-semibold tracking-[0.18em] uppercase">
          Parque Alphaville
        </span>
        <span className="display-title block text-lg leading-none">
          Alvorada
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-cream/94 shadow-sm backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-5">
        <Brand />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition hover:bg-forest/6 hover:text-forest"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <WhatsAppButton compact>WhatsApp</WhatsAppButton>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-forest/15 text-forest transition hover:bg-forest hover:text-white lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-forest/10 bg-cream lg:hidden"
        >
          <nav aria-label="Navegação mobile" className="container-shell py-5">
            <ul className="grid gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-forest transition hover:bg-forest/6"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <WhatsAppButton className="mt-4 w-full">
              Falar com o corretor
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  );
}
