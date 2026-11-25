import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_DESTINATIONS, SectionId } from '../data/homepageContent';
import { scrollToSection } from '../utils/scroll';

interface NavbarProps {
  activeSection: SectionId;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (targetId: SectionId) => {
    setMobileOpen(false);
    scrollToSection(targetId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#151719]/92 backdrop-blur-md border-b border-[#F2F1EC]/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-8 px-6 py-4 md:px-12 md:py-5">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('hero');
          }}
          className="font-display text-base md:text-lg font-semibold tracking-[0.22em] text-[#F2F1EC] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8DAD5]"
        >
          ZILLA
        </a>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {NAV_DESTINATIONS.map((item) => {
            const isHome = item.id === 'home';
            const isActive = activeSection === item.targetId || (isHome && activeSection === 'hero');

            return (
              <a
                key={item.id}
                href={`#${item.targetId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(item.targetId);
                }}
                aria-current={isHome ? 'page' : undefined}
                className={`group relative py-1 text-sm font-normal tracking-[0.02em] whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8DAD5] ${
                  isActive ? 'text-[#F2F1EC]' : 'text-[#F2F1EC]/68 hover:text-[#F2F1EC]'
                }`}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute left-0 bottom-0 h-px bg-[#A8DAD5] transition-transform duration-300 origin-left w-full ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-drawer"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center text-[#F2F1EC] hover:text-[#A8DAD5] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8DAD5]"
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#F2F1EC]/10 bg-[#151719]/98 px-6 pb-8 pt-4"
        >
          <ul className="flex flex-col divide-y divide-[#F2F1EC]/10">
            {NAV_DESTINATIONS.map((item) => {
              const isHome = item.id === 'home';
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.targetId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(item.targetId);
                    }}
                    aria-current={isHome ? 'page' : undefined}
                    className={`flex min-h-[48px] items-center justify-between py-3 text-base tracking-[0.02em] transition-colors ${
                      isHome ? 'text-[#A8DAD5]' : 'text-[#F2F1EC]/85 hover:text-[#A8DAD5]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isHome && (
                      <span className="font-mono text-[11px] tracking-[0.16em] text-[#A8DAD5]/80">
                        ACTIVE
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
