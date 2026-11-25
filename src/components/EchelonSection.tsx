import { ArrowRight } from 'lucide-react';
import { ECHELON_CONTENT } from '../data/homepageContent';

interface EchelonSectionProps {
  onDiscoverClick: () => void;
}

export function EchelonSection({ onDiscoverClick }: EchelonSectionProps) {
  return (
    <section
      id="echelon"
      data-section="echelon"
      className="relative overflow-hidden py-24 md:py-36 border-b border-[#F2F1EC]/8"
    >
      <div className="relative z-10 mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-14 px-6 md:px-12 lg:grid-cols-12">
        {/* Left editorial announcement */}
        <div className="lg:col-span-7">
          <p
            data-scroll-reveal
            className="font-mono text-xs tracking-[0.2em] text-[#F08A55]"
          >
            {ECHELON_CONTENT.subtitle}
          </p>

          <h2
            data-scroll-reveal
            className="mt-5 font-display text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#A8DAD5]"
          >
            {ECHELON_CONTENT.headline}
          </h2>

          <p
            data-scroll-reveal
            className="mt-7 text-lg md:text-xl font-medium leading-[1.55] text-[#F2F1EC]"
          >
            {ECHELON_CONTENT.leadLine}
          </p>

          <div className="mt-4 max-w-[48ch] space-y-3">
            {ECHELON_CONTENT.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                data-scroll-reveal
                className="text-base md:text-[17px] leading-[1.68] text-[#F2F1EC]/76"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div data-scroll-reveal className="mt-9">
            <button
              type="button"
              onClick={onDiscoverClick}
              className="liquid-glass-surface group inline-flex min-h-[46px] items-center gap-4 px-7 py-3 text-sm font-medium tracking-[0.02em] text-[#F2F1EC] transition-all duration-200 hover:text-[#F08A55] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD5]"
            >
              <span>{ECHELON_CONTENT.buttonLabel}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* Right distinctive glass architectural visual */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
          <div
            data-parallax-architectural
            aria-hidden="true"
            className="relative h-72 w-full max-w-[380px] md:h-88"
          >
            {/* Outer deep-teal glass architectural plane */}
            <div className="liquid-glass-surface absolute inset-4 border border-[#A8DAD5]/20">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(168,218,213,0.12) 0%, rgba(57,127,123,0.06) 52%, rgba(21,23,25,0.2) 100%)',
                }}
              />
            </div>

            {/* Offset inner translucent icy-teal & warm-orange refracted glass plane */}
            <div
              className="liquid-glass-surface absolute inset-x-12 inset-y-10 border border-[#F2F1EC]/18"
              style={{
                background:
                  'radial-gradient(circle at 82% 20%, rgba(240,138,85,0.18) 0%, rgba(57,127,123,0.14) 45%, rgba(21,23,25,0.1) 100%)',
              }}
            />

            {/* Minimal geometric architectural crosshairs */}
            <svg
              viewBox="0 0 360 360"
              className="relative z-10 h-full w-full"
              fill="none"
            >
              <line x1="180" y1="24" x2="180" y2="336" stroke="#A8DAD5" strokeOpacity="0.18" strokeWidth="1" />
              <line x1="24" y1="180" x2="336" y2="180" stroke="#A8DAD5" strokeOpacity="0.18" strokeWidth="1" />
              <line x1="56" y1="304" x2="304" y2="56" stroke="#F08A55" strokeOpacity="0.28" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
