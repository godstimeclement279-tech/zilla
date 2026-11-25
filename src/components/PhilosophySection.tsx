import { PHILOSOPHY_CONTENT } from '../data/homepageContent';

export function PhilosophySection() {
  const [simplicity, conviction, consistency] = PHILOSOPHY_CONTENT.pillars;

  return (
    <section
      id="philosophy"
      data-section="philosophy"
      className="relative overflow-hidden py-28 md:py-44"
    >
      <div className="relative z-10 mx-auto max-w-[1360px] px-6 md:px-12">
        <h2
          data-scroll-reveal
          className="font-display text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.028em] text-[#F2F1EC] text-balance"
        >
          {PHILOSOPHY_CONTENT.headline}
        </h2>

        {/* Three visually distinct editorial compositions */}
        <div className="mt-16 md:mt-24 space-y-14 md:space-y-20">
          {/* 01 — SIMPLICITY: Broad left composition backed by translucent icy-teal glass */}
          <article
            data-scroll-reveal
            className="group relative grid grid-cols-1 gap-6 border-t border-[#F2F1EC]/14 pt-10 lg:grid-cols-12 lg:items-center"
          >
            <div
              aria-hidden="true"
              className="liquid-glass-icy pointer-events-none absolute -left-8 top-4 -z-10 h-44 w-72 opacity-45 transition-opacity duration-500 group-hover:opacity-75"
              style={{
                borderRadius: '48% 52% 40% 60% / 56% 42% 58% 44%',
                WebkitMaskImage:
                  'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 78%)',
                maskImage:
                  'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 78%)',
              }}
            />
            <div className="lg:col-span-2">
              <span className="font-mono text-xs tracking-[0.22em] text-[#A8DAD5]">
                {simplicity.index}
              </span>
            </div>
            <div className="lg:col-span-5">
              <h3 className="font-display text-[clamp(2.15rem,4.1vw,3.7rem)] font-semibold tracking-[-0.03em] text-[#F2F1EC] transition-colors duration-300 group-hover:text-[#A8DAD5]">
                {simplicity.title}
              </h3>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-[34ch] text-base md:text-lg leading-[1.65] text-[#F2F1EC]/76">
                {simplicity.description}
              </p>
            </div>
          </article>

          {/* 02 — CONVICTION: Right-offset composition with warm-orange rim highlight */}
          <article
            data-scroll-reveal
            className="group relative grid grid-cols-1 gap-6 border-t border-[#F2F1EC]/14 pt-10 lg:grid-cols-12 lg:items-center"
          >
            <div
              aria-hidden="true"
              className="liquid-glass-orange pointer-events-none absolute right-[12%] top-2 -z-10 h-40 w-56 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
              style={{
                borderRadius: '54% 46% 62% 38% / 44% 58% 42% 56%',
                WebkitMaskImage:
                  'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 75%)',
                maskImage:
                  'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 75%)',
              }}
            />
            <div className="lg:col-start-3 lg:col-span-2">
              <span className="font-mono text-xs tracking-[0.22em] text-[#F08A55]">
                {conviction.index}
              </span>
            </div>
            <div className="lg:col-span-4">
              <h3 className="font-display text-[clamp(2.15rem,4.1vw,3.7rem)] font-semibold tracking-[-0.03em] text-[#F2F1EC] transition-colors duration-300 group-hover:text-[#A8DAD5]">
                {conviction.title}
              </h3>
            </div>
            <div className="lg:col-span-4">
              <p className="max-w-[34ch] text-base md:text-lg leading-[1.65] text-[#F2F1EC]/76">
                {conviction.description}
              </p>
            </div>
          </article>

          {/* 03 — CONSISTENCY: Anchored asymmetric glass-veiled composition */}
          <article
            data-scroll-reveal
            className="group relative grid grid-cols-1 gap-6 border-y border-[#F2F1EC]/14 py-10 lg:grid-cols-12 lg:items-center"
          >
            <div
              aria-hidden="true"
              className="liquid-glass-deep pointer-events-none absolute left-[24%] top-0 -z-10 h-44 w-80 opacity-50 transition-opacity duration-500 group-hover:opacity-80"
              style={{
                borderRadius: '58% 42% 46% 54% / 40% 62% 38% 60%',
                WebkitMaskImage:
                  'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 78%)',
                maskImage:
                  'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 78%)',
              }}
            />
            <div className="lg:col-span-2">
              <span className="font-mono text-xs tracking-[0.22em] text-[#A8DAD5]">
                {consistency.index}
              </span>
            </div>
            <div className="lg:col-span-6">
              <h3 className="font-display text-[clamp(2.15rem,4.1vw,3.7rem)] font-semibold tracking-[-0.03em] text-[#F2F1EC] transition-colors duration-300 group-hover:text-[#A8DAD5]">
                {consistency.title}
              </h3>
            </div>
            <div className="lg:col-span-4">
              <p className="max-w-[34ch] text-base md:text-lg leading-[1.65] text-[#F2F1EC]/76">
                {consistency.description}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
