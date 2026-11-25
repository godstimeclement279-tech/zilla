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
      className="relative overflow-hidden bg-[#151719] py-24 md:py-36 border-b border-[#F2F1EC]/8"
    >
      {/* Restrained dark teal and light black atmospheric blend with subtle warm undertone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(125deg, #151719 0%, #243B3B 48%, #151719 100%)',
          opacity: 0.72,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 78% 45%, rgba(168, 218, 213, 0.11) 0%, rgba(240, 138, 85, 0.05) 38%, rgba(21, 23, 25, 0) 70%)',
        }}
      />

      {/* Subtle architectural hairline graphic */}
      <div
        aria-hidden="true"
        data-parallax-architectural
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block lg:right-12"
      >
        <svg
          width="360"
          height="360"
          viewBox="0 0 360 360"
          fill="none"
          className="opacity-75"
        >
          <rect x="24" y="24" width="312" height="312" stroke="#A8DAD5" strokeOpacity="0.18" strokeWidth="1" />
          <rect x="64" y="64" width="232" height="232" stroke="#397F7B" strokeOpacity="0.32" strokeWidth="1" />
          <rect x="108" y="108" width="144" height="144" stroke="#F2F1EC" strokeOpacity="0.14" strokeWidth="1" />
          <line x1="24" y1="180" x2="336" y2="180" stroke="#A8DAD5" strokeOpacity="0.16" strokeWidth="1" />
          <line x1="180" y1="24" x2="180" y2="336" stroke="#A8DAD5" strokeOpacity="0.16" strokeWidth="1" />
          <line x1="24" y1="336" x2="336" y2="24" stroke="#F08A55" strokeOpacity="0.22" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-6 md:px-12">
        <div className="max-w-3xl">
          <div data-scroll-reveal className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.2em] text-[#F08A55]">
              05
            </span>
            <span className="h-px w-10 bg-[#F08A55]/45" aria-hidden="true" />
          </div>

          <h2
            data-scroll-reveal
            className="mt-7 font-display text-[clamp(1.65rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-[#F2F1EC]/92 text-balance"
          >
            {ECHELON_CONTENT.headline}
          </h2>

          <p
            data-scroll-reveal
            className="mt-6 font-display text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#A8DAD5]"
          >
            {ECHELON_CONTENT.programmeName}
          </p>

          <div className="mt-9 max-w-[54ch] space-y-5">
            {ECHELON_CONTENT.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                data-scroll-reveal
                className="text-base md:text-lg leading-[1.7] text-[#F2F1EC]/76"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div data-scroll-reveal className="mt-10">
            <button
              type="button"
              onClick={onDiscoverClick}
              className="group inline-flex min-h-[46px] items-center gap-4 border border-[#F2F1EC]/28 bg-transparent px-7 py-3 font-mono text-xs font-medium tracking-[0.15em] text-[#F2F1EC] transition-all duration-200 hover:border-[#F08A55] hover:text-[#F08A55] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD5]"
            >
              <span>{ECHELON_CONTENT.buttonLabel}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
