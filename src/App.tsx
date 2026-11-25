import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { LiquidGlassBackdrop } from './components/LiquidGlassBackdrop';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { PhilosophySection } from './components/PhilosophySection';
import { EducationSection } from './components/EducationSection';
import { EchelonSection } from './components/EchelonSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { ORDERED_SECTION_IDS, SectionId } from './data/homepageContent';
import {
  isCompactViewport,
  prefersReducedMotion,
  scrollToSection,
  setActiveLenis,
} from './utils/scroll';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const compact = isCompactViewport();

    let lenis: Lenis | null = null;
    let tickerCallback: ((time: number) => void) | null = null;

    if (!reduced && !compact) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      setActiveLenis(lenis);
      lenis.on('scroll', ScrollTrigger.update);

      tickerCallback = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      if (reduced) {
        return;
      }

      // Hero editorial entrance
      gsap.from('[data-hero-reveal]', {
        y: 18,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });

      gsap.fromTo(
        '[data-hero-portrait]',
        {
          opacity: 0,
          scale: 1.03,
          clipPath: 'inset(6% 0% 0% 0%)',
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.0,
          ease: 'power3.out',
          clearProps: 'transform,clipPath,opacity',
        },
      );

      if (!compact) {
        // Scroll-connected Liquid Glass visual formations across the entire page
        const icyFormation = document.querySelector('[data-glass-formation="icy"]');
        if (icyFormation) {
          gsap.to(icyFormation, {
            xPercent: -24,
            yPercent: 18,
            scale: 1.12,
            opacity: 0.65,
            ease: 'none',
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.2,
            },
          });
        }

        const deepFormation = document.querySelector('[data-glass-formation="deep"]');
        if (deepFormation) {
          gsap.to(deepFormation, {
            xPercent: 28,
            yPercent: -22,
            scale: 1.16,
            opacity: 0.9,
            ease: 'none',
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.4,
            },
          });
        }

        const orangeFormation = document.querySelector('[data-glass-formation="orange"]');
        if (orangeFormation) {
          gsap.to(orangeFormation, {
            xPercent: -18,
            yPercent: -34,
            scale: 1.22,
            opacity: 0.85,
            ease: 'none',
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.0,
            },
          });
        }

        // Section-level glass veil parallax
        gsap.utils.toArray<HTMLElement>('[data-section-glass]').forEach((veil) => {
          gsap.to(veil, {
            y: -48,
            scale: 1.05,
            ease: 'none',
            scrollTrigger: {
              trigger: veil.closest('section') ?? veil,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.9,
            },
          });
        });

        // Editorial section reveals via ScrollTrigger
        const sections = gsap.utils.toArray<HTMLElement>('[data-section]');
        sections.forEach((section) => {
          if (section.dataset.section === 'hero') {
            return;
          }
          const revealTargets = section.querySelectorAll('[data-scroll-reveal]');
          if (revealTargets.length === 0) {
            return;
          }

          gsap.from(revealTargets, {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.07,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: section,
              start: 'top 84%',
              once: true,
            },
          });
        });

        // Subtle desktop parallax on portrait and Echelon glass architecture
        const portraitEl = document.querySelector('[data-hero-portrait]');
        if (portraitEl) {
          gsap.to(portraitEl, {
            y: -28,
            ease: 'none',
            scrollTrigger: {
              trigger: '#hero',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }

        const architecturalEl = document.querySelector('[data-parallax-architectural]');
        if (architecturalEl) {
          gsap.to(architecturalEl, {
            y: -36,
            ease: 'none',
            scrollTrigger: {
              trigger: '#echelon',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          });
        }
      }
    }, rootRef);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section') as SectionId | null;
            if (id && ORDERED_SECTION_IDS.includes(id)) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0.01,
      },
    );

    ORDERED_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      observer.disconnect();
      ctx.revert();
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback);
      }
      if (lenis) {
        lenis.destroy();
        setActiveLenis(null);
      }
    };
  }, []);

  return (
    <div ref={rootRef} className="relative min-h-screen bg-[#151719] text-[#F2F1EC]">
      <LiquidGlassBackdrop />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <HeroSection />
        <IntroductionSection />
        <PhilosophySection />
        <EducationSection />
        <EchelonSection onDiscoverClick={() => scrollToSection('community')} />
        <CommunitySection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
