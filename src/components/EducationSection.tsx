import { ArrowRight } from 'lucide-react';
import { EDUCATION_CONTENT } from '../data/homepageContent';
import { scrollToSection } from '../utils/scroll';

export function EducationSection() {
  return (
    <section
      id="education"
      data-section="education"
      className="relative overflow-hidden bg-[#202326]/40 py-28 md:py-44 border-b border-[#F2F1EC]/8"
    >
      <div className="relative z-10 mx-auto max-w-[1360px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2
              data-scroll-reveal
              className="font-display text-[clamp(2.45rem,4.9vw,4.45rem)] font-semibold leading-[1.04] tracking-[-0.032em] text-[#F2F1EC] text-balance max-w-[13ch]"
            >
              UNDERSTAND THE <span className="text-[#A8DAD5]">MARKET.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start">
            <p
              data-scroll-reveal
              className="max-w-[40ch] text-lg md:text-xl leading-[1.68] text-[#F2F1EC]/80"
            >
              {EDUCATION_CONTENT.supportingCopy}
            </p>

            <div data-scroll-reveal className="mt-9">
              <button
                type="button"
                onClick={() => scrollToSection('community')}
                className="liquid-glass-surface group inline-flex min-h-[46px] items-center gap-4 px-7 py-3 text-sm font-medium tracking-[0.02em] text-[#F2F1EC] transition-all duration-200 hover:text-[#A8DAD5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD5]"
              >
                <span>{EDUCATION_CONTENT.buttonLabel}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
