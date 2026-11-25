import { INTRODUCTION_CONTENT } from '../data/homepageContent';

export function IntroductionSection() {
  return (
    <section
      id="introduction"
      data-section="introduction"
      className="relative overflow-hidden bg-[#202326]/55 py-28 md:py-44 border-y border-[#F2F1EC]/8"
    >
      {/* Translucent liquid-glass editorial veil behind typography */}
      <div
        aria-hidden="true"
        data-section-glass
        className="liquid-glass-surface pointer-events-none absolute right-[-8vw] top-1/2 hidden h-[380px] w-[52vw] max-w-[720px] -translate-y-1/2 lg:block opacity-65"
        style={{
          borderRadius: '46% 54% 40% 60% / 52% 44% 56% 48%',
          WebkitMaskImage:
            'radial-gradient(ellipse 78% 72% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 78%)',
          maskImage:
            'radial-gradient(ellipse 78% 72% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 78%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2
              data-scroll-reveal
              className="font-display text-[clamp(2.5rem,5.2vw,4.65rem)] font-semibold leading-[1.03] tracking-[-0.032em] text-[#F2F1EC] text-balance max-w-[15ch]"
            >
              <span className="text-[#A8DAD5]">CLARITY</span> CHANGES EVERYTHING.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p
              data-scroll-reveal
              className="max-w-[34ch] text-lg md:text-xl leading-[1.65] tracking-[0.005em] text-[#F2F1EC]/84"
            >
              {INTRODUCTION_CONTENT.supportingCopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
