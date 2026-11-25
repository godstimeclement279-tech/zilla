import { PHILOSOPHY_CONTENT } from '../data/homepageContent';

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      data-section="philosophy"
      className="relative bg-[#151719] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-[#F2F1EC]/12 pb-10">
          <div>
            <span
              data-scroll-reveal
              className="block font-mono text-xs tracking-[0.2em] text-[#A8DAD5]"
            >
              03
            </span>
            <h2
              data-scroll-reveal
              className="mt-4 font-display text-[clamp(2rem,3.8vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F2F1EC] text-balance"
            >
              {PHILOSOPHY_CONTENT.headline}
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-3 md:gap-0">
          {PHILOSOPHY_CONTENT.pillars.map((pillar, idx) => (
            <article
              key={pillar.index}
              data-scroll-reveal
              className={`group relative flex flex-col justify-between pt-8 md:pt-4 transition-colors duration-300 ${
                idx === 0
                  ? 'md:pr-10'
                  : idx === 1
                    ? 'border-t border-[#F2F1EC]/12 md:border-t-0 md:border-l md:border-[#F2F1EC]/12 md:px-10'
                    : 'border-t border-[#F2F1EC]/12 md:border-t-0 md:border-l md:border-[#F2F1EC]/12 md:pl-10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#A8DAD5]/28 transition-colors duration-300 group-hover:text-[#A8DAD5]">
                    {pillar.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-[#A8DAD5]/35 transition-all duration-300 group-hover:w-14 group-hover:bg-[#A8DAD5]"
                  />
                </div>

                <h3 className="mt-8 font-mono text-sm font-medium tracking-[0.18em] text-[#F2F1EC] transition-colors duration-300 group-hover:text-[#A8DAD5]">
                  {pillar.fullHeading}
                </h3>

                <p className="mt-5 max-w-[34ch] text-base md:text-[17px] leading-[1.68] text-[#F2F1EC]/72">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
