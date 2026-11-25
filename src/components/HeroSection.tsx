import { ArrowDown } from 'lucide-react';
import { HERO_CONTENT } from '../data/homepageContent';
import { scrollToSection } from '../utils/scroll';

const ZILLA_PORTRAIT_PATH = '/assets/aistudio/image_880a70aa.png';

export function HeroSection() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative flex min-h-[94vh] lg:min-h-screen flex-col justify-between overflow-hidden pt-20 pb-8 md:pt-24 md:pb-10"
    >
      <div className="relative z-20 mx-auto grid w-full max-w-[1360px] flex-1 grid-cols-1 items-center gap-8 px-6 md:px-12 lg:grid-cols-12 lg:gap-10">
        {/* Left editorial column */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center py-2 lg:py-8">
          <p
            data-hero-reveal
            className="font-mono text-[11px] md:text-xs font-medium tracking-[0.2em] text-[#A8DAD5]"
          >
            {HERO_CONTENT.label}
          </p>

          <h1
            data-hero-reveal
            className="mt-5 md:mt-6 font-display text-[clamp(2.4rem,4.7vw,4.65rem)] font-semibold leading-[1.03] tracking-[-0.032em] text-[#F2F1EC] text-balance"
          >
            <span className="block">{HERO_CONTENT.headlineLines[0]}</span>
            <span className="block text-[#A8DAD5]">{HERO_CONTENT.headlineLines[1]}</span>
          </h1>

          <p
            data-hero-reveal
            className="mt-6 md:mt-7 max-w-[44ch] text-base md:text-lg leading-[1.65] tracking-[0.005em] text-[#F2F1EC]/80"
          >
            {HERO_CONTENT.supportingCopy}
          </p>

          <div
            data-hero-reveal
            className="mt-8 md:mt-10 flex w-full sm:w-auto flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection('introduction')}
              className="inline-flex min-h-[46px] items-center justify-center bg-[#A8DAD5] px-7 py-3 text-sm font-medium tracking-[0.02em] text-[#151719] transition-all duration-200 hover:bg-[#F2F1EC] active:translate-y-px whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151719]"
            >
              {HERO_CONTENT.primaryButton}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('community')}
              className="liquid-glass-surface inline-flex min-h-[46px] items-center justify-center px-7 py-3 text-sm font-medium tracking-[0.02em] text-[#F2F1EC] transition-all duration-200 hover:text-[#A8DAD5] active:translate-y-px whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151719]"
            >
              {HERO_CONTENT.secondaryButton}
            </button>
          </div>
        </div>

        {/* Right portrait column — Zilla's actual portrait as the dominant, memorable hero visual */}
        <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-end">
          <div className="relative w-full max-w-[460px] lg:max-w-[560px]">
            {/* Large translucent icy-teal glass formation behind Zilla's portrait */}
            <div
              aria-hidden="true"
              className="liquid-glass-icy pointer-events-none absolute -inset-16 -z-10 opacity-95"
              style={{
                borderRadius: '46% 54% 42% 58% / 44% 56% 44% 56%',
                WebkitMaskImage:
                  'radial-gradient(ellipse 66% 66% at 50% 48%, rgba(0,0,0,1) 24%, rgba(0,0,0,0) 70%)',
                maskImage:
                  'radial-gradient(ellipse 66% 66% at 50% 48%, rgba(0,0,0,1) 24%, rgba(0,0,0,0) 70%)',
              }}
            />

            {/* Subtle warm-orange glass illumination behind lower shoulder */}
            <div
              aria-hidden="true"
              className="liquid-glass-orange pointer-events-none absolute bottom-4 left-2 h-64 w-64 -z-10 opacity-80"
              style={{
                borderRadius: '54% 46% 62% 38% / 44% 58% 42% 56%',
                WebkitMaskImage:
                  'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 18%, rgba(0,0,0,0) 74%)',
                maskImage:
                  'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 18%, rgba(0,0,0,0) 74%)',
              }}
            />

            {/* Masked editorial portrait integration */}
            <div
              data-hero-portrait
              className="relative aspect-[1160/1356] w-full overflow-hidden"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,1) 66%, rgba(0,0,0,0) 98%)',
                maskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,1) 66%, rgba(0,0,0,0) 98%)',
              }}
            >
              <img
                src={ZILLA_PORTRAIT_PATH}
                alt="Zilla — Forex Trader and Educator"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain object-bottom contrast-[1.05] brightness-[0.95] saturate-[0.86] drop-shadow-[0_28px_60px_rgba(0,0,0,0.78)]"
              />

              {/* Bottom shadow integration */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(21,23,25,0) 60%, rgba(21,23,25,0.88) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Minimal scroll affordance */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1360px] items-center px-6 pt-4 md:px-12">
        <button
          type="button"
          onClick={() => scrollToSection('introduction')}
          className="group inline-flex min-h-[44px] items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-[#F2F1EC]/55 transition-colors hover:text-[#A8DAD5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8DAD5]"
        >
          <ArrowDown
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
          <span>Scroll</span>
        </button>
      </div>
    </section>
  );
}
