import { INTRODUCTION_CONTENT } from '../data/homepageContent';

export function IntroductionSection() {
  return (
    <section
      id="introduction"
      data-section="introduction"
      className="relative overflow-hidden bg-[#202326] py-28 md:py-40"
    >
      {/* Subtle atmospheric teal gradient depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 82% 28%, rgba(57, 127, 123, 0.22) 0%, rgba(32, 35, 38, 0) 72%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div data-scroll-reveal className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-[#A8DAD5]">
                02
              </span>
              <span className="h-px w-10 bg-[#A8DAD5]/40" aria-hidden="true" />
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2
              data-scroll-reveal
              className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F2F1EC] text-balance max-w-[18ch]"
            >
              {INTRODUCTION_CONTENT.headline}
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-12">
              <div className="hidden md:block md:col-span-2 pt-2">
                <div className="h-px w-full bg-[#F2F1EC]/15" aria-hidden="true" />
              </div>
              <div className="md:col-span-10 max-w-[56ch] space-y-6">
                {INTRODUCTION_CONTENT.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    data-scroll-reveal
                    className="text-lg md:text-xl leading-[1.68] tracking-[0.005em] text-[#F2F1EC]/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
