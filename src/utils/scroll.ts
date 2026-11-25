import Lenis from 'lenis';

let activeLenis: Lenis | null = null;

export function setActiveLenis(instance: Lenis | null): void {
  activeLenis = instance;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isCompactViewport(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.innerWidth < 768;
}

export function scrollToSection(targetId: string): void {
  const el = document.getElementById(targetId);
  if (!el) {
    return;
  }

  const reduced = prefersReducedMotion();

  if (activeLenis && !reduced) {
    activeLenis.scrollTo(el, {
      offset: 0,
      duration: 1.1,
    });
    return;
  }

  el.scrollIntoView({
    behavior: reduced ? 'auto' : 'smooth',
    block: 'start',
  });
}
