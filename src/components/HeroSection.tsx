import { ArrowDown } from 'lucide-react';
import { HERO_CONTENT } from '../data/homepageContent';
import { scrollToSection } from '../utils/scroll';

const uploadedPortraits = import.meta.glob('/src/assets/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const zillaPortraitSrc = Object.values(uploadedPortraits)[0] ?? null;

export function HeroSection() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative flex min-h-[92vh] lg:min-h-screen flex-col justify-between overflow-hidden bg-[#151719] pt-20 pb-8 md:pt-28 md:pb-10"
    >
      {/* Subtle grain overlay */}
      <div className="editorial-grain pointer-events-none absolute inset-0 z-10" aria-hidden="true" />

      <div className="relative z-20 mx-auto grid w-full max-w-[1360px] flex-1 grid-cols-1 items-center gap-9 px-6 md:px-12 lg:grid-cols-12 lg:gap-10">
        {/* Left editorial column */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center py-2 lg:py-8">
          <p
            data-hero-reveal
            className="font-mono text-[11px] md:text-xs font-medium tracking-[0.22em] text-[#A8DAD5]"
          >
            {HERO_CONTENT.label}
          </p>

          <h1
            data-hero-reveal
            className="mt-5 md:mt-6 font-display text-[clamp(2.15rem,4.5vw,4.35rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#F2F1EC] text-balance"
          >
            {HERO_CONTENT.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            data-hero-reveal
            className="mt-5 md:mt-7 max-w-[54ch] text-base md:text-[17px] leading-[1.68] tracking-[0.005em] text-[#F2F1EC]/76"
          >
            {HERO_CONTENT.supportingCopy}
          </p>

          <div
            data-hero-reveal
            className="mt-7 md:mt-10 flex w-full sm:w-auto flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection('introduction')}
              className="inline-flex min-h-[46px] items-center justify-center bg-[#A8DAD5] px-7 py-3 font-mono text-xs font-medium tracking-[0.14em] text-[#151719] transition-all duration-200 hover:bg-[#F2F1EC] active:translate-y-px whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151719]"
            >
              {HERO_CONTENT.primaryButton}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('community')}
              className="inline-flex min-h-[46px] items-center justify-center border border-[#F2F1EC]/25 bg-transparent px-7 py-3 font-mono text-xs font-medium tracking-[0.14em] text-[#F2F1EC] transition-all duration-200 hover:border-[#A8DAD5] hover:text-[#A8DAD5] active:translate-y-px whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151719]"
            >
              {HERO_CONTENT.secondaryButton}
            </button>
          </div>
        </div>

        {/* Right portrait column */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[440px] lg:max-w-none">
            {/* Restrained icy & deep teal radial atmosphere behind portrait */}
            <div
              aria-hidden="true"
              className="animate-teal-drift pointer-events-none absolute -inset-10 -z-10"
              style={{
                background:
                  'radial-gradient(circle at 52% 42%, rgba(168, 218, 213, 0.18) 0%, rgba(57, 127, 123, 0.15) 36%, rgba(21, 23, 25, 0) 72%)',
              }}
            />

            {/* Editorial portrait composition without rounded card chrome */}
            <div
              data-hero-portrait
              className="relative aspect-[4/5] w-full overflow-hidden bg-[#151719]"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                maskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
              }}
            >
              {zillaPortraitSrc ? (
                <>
                  <img
                    src={zillaPortraitSrc}
                    alt="Zilla — Forex Trader and Educator"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top contrast-[1.04] saturate-[0.88]"
                  />
                  {/* Controlled icy teal rim & natural shadow integration */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(circle at 75% 18%, rgba(168,218,213,0.14) 0%, rgba(21,23,25,0) 50%), linear-gradient(180deg, rgba(21,23,25,0.12) 0%, rgba(21,23,25,0.02) 45%, rgba(21,23,25,0.88) 100%)',
                    }}
                  />
                </>
              ) : (
                /* Moody chiaroscuro editorial frame when original photograph is not yet placed in src/assets */
                <div
                  data-portrait-status="awaiting-uploaded-photo"
                  role="img"
                  aria-label="Editorial portrait frame reserved for Zilla photograph"
                  className="relative flex h-full w-full flex-col justify-between bg-[#191C1F] p-8 md:p-10"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(ellipse 70% 62% at 56% 36%, rgba(168,218,213,0.19) 0%, rgba(57,127,123,0.14) 38%, rgba(21,23,25,0.95) 82%)',
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(132deg, rgba(168,218,213,0.09) 0%, rgba(21,23,25,0) 48%, rgba(21,23,25,0.88) 100%)',
                    }}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="h-px w-8 bg-[#A8DAD5]/45" aria-hidden="true" />
                    <span className="font-mono text-[11px] tracking-[0.22em] text-[#A8DAD5]/75">
                      @AROMEH_ALI
                    </span>
                  </div>

                  {/* Subtle architectural aperture motif without synthetic face */}
                  <div className="relative z-10 flex flex-1 items-center justify-center">
                    <svg
                      viewBox="0 0 300 360"
                      className="h-[76%] w-auto"
                      fill="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="zillaStudioLight" x1="150" y1="30" x2="150" y2="330" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#A8DAD5" stopOpacity="0.26" />
                          <stop offset="50%" stopColor="#397F7B" stopOpacity="0.14" />
                          <stop offset="100%" stopColor="#151719" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <rect x="34" y="24" width="232" height="312" stroke="#F2F1EC" strokeOpacity="0.08" strokeWidth="1" />
                      <path
                        d="M74 336V170C74 128.026 108.026 94 150 94C191.974 94 226 128.026 226 170V336"
                        fill="url(#zillaStudioLight)"
                        stroke="#A8DAD5"
                        strokeOpacity="0.22"
                        strokeWidth="1"
                      />
                      <line x1="150" y1="24" x2="150" y2="336" stroke="#A8DAD5" strokeOpacity="0.12" strokeWidth="1" />
                      <line x1="34" y1="170" x2="266" y2="170" stroke="#F2F1EC" strokeOpacity="0.07" strokeWidth="1" />
                    </svg>
                  </div>

                  <div className="relative z-10 flex items-center justify-between border-t border-[#F2F1EC]/10 pt-4">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#F2F1EC]/55">
                      ZILLA
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-[#F2F1EC]/38">
                      FOREX TRADER &amp; EDUCATOR
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1360px] items-center justify-between px-6 pt-6 md:px-12">
        <button
          type="button"
          onClick={() => scrollToSection('introduction')}
          className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-[#F2F1EC]/50 transition-colors hover:text-[#A8DAD5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8DAD5]"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center border border-[#F2F1EC]/15 transition-colors group-hover:border-[#A8DAD5]/60">
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          </span>
          <span>SCROLL</span>
        </button>

        <span className="hidden sm:inline-block font-mono text-[11px] tracking-[0.18em] text-[#F2F1EC]/35">
          01 / 06
        </span>
      </div>
    </section>
  );
}
