import { ArrowRight } from 'lucide-react';
import { EDUCATION_CONTENT } from '../data/homepageContent';
import { scrollToSection } from '../utils/scroll';

export function EducationSection() {
  return (
    <section
      id="education"
      data-section="education"
      className="gradient-a relative overflow-hidden py-28 md:py-40 border-y border-[#F2F1EC]/8"
    >
      {/* Subtle atmospheric teal gradient detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 18% 72%, rgba(57, 127, 123, 0.24) 0%, rgba(21, 23, 25, 0) 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left asymmetric column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div data-scroll-reveal className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.2em] text-[#A8DAD5]">
                  04
                </span>
                <span className="h-px w-10 bg-[#A8DAD5]/40" aria-hidden="true" />
              </div>

              <h2
                data-scroll-reveal
                className="mt-8 font-display text-[clamp(2rem,3.8vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F2F1EC] text-balance"
              >
                {EDUCATION_CONTENT.headlineLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>

            <div className="hidden lg:block pt-24">
              <div className="h-px w-32 bg-[#A8DAD5]/30" aria-hidden="true" />
            </div>
          </div>

          {/* Right asymmetric prose column */}
          <div className="lg:col-span-6 lg:border-l lg:border-[#F2F1EC]/12 lg:pl-14 flex flex-col justify-center">
            <div className="space-y-6 max-w-[50ch]">
              {EDUCATION_CONTENT.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  data-scroll-reveal
                  className="text-base md:text-lg leading-[1.72] text-[#F2F1EC]/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div data-scroll-reveal className="mt-10 pt-4">
              <button
                type="button"
                onClick={() => scrollToSection('community')}
                className="group inline-flex min-h-[46px] items-center gap-4 border border-[#A8DAD5]/45 bg-transparent px-7 py-3 font-mono text-xs font-medium tracking-[0.15em] text-[#F2F1EC] transition-all duration-200 hover:border-[#A8DAD5] hover:bg-[#A8DAD5] hover:text-[#151719] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8DAD5]"
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
