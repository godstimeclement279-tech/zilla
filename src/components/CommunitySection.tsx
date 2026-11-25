import { ArrowUpRight } from 'lucide-react';
import { COMMUNITY_CONTENT } from '../data/homepageContent';

export function CommunitySection() {
  return (
    <section
      id="community"
      data-section="community"
      className="bg-[#151719] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-12">
        <div className="border-b border-[#F2F1EC]/12 pb-10">
          <span
            data-scroll-reveal
            className="block font-mono text-xs tracking-[0.2em] text-[#A8DAD5]"
          >
            06
          </span>
          <h2
            data-scroll-reveal
            className="mt-4 font-display text-[clamp(2rem,3.8vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F2F1EC] text-balance"
          >
            {COMMUNITY_CONTENT.headline}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-3 md:gap-0">
          {COMMUNITY_CONTENT.destinations.map((destination, idx) => {
            const hasLink = Boolean(destination.href);

            return (
              <div
                key={destination.id}
                data-scroll-reveal
                className={`group flex flex-col justify-between pt-8 md:pt-4 ${
                  idx === 0
                    ? 'md:pr-10'
                    : idx === 1
                      ? 'border-t border-[#F2F1EC]/12 md:border-t-0 md:border-l md:border-[#F2F1EC]/12 md:px-10'
                      : 'border-t border-[#F2F1EC]/12 md:border-t-0 md:border-l md:border-[#F2F1EC]/12 md:pl-10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm font-medium tracking-[0.18em] text-[#A8DAD5]">
                      {destination.title}
                    </h3>
                    {hasLink && (
                      <ArrowUpRight
                        className="h-4 w-4 text-[#F2F1EC]/45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#A8DAD5]"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <p className="mt-5 max-w-[34ch] text-base md:text-[17px] leading-[1.68] text-[#F2F1EC]/76">
                    {destination.description}
                  </p>
                </div>

                {destination.href && destination.linkLabel ? (
                  <div className="mt-8 pt-4">
                    <a
                      href={destination.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 border-b border-[#F2F1EC]/25 pb-1 font-mono text-xs tracking-[0.14em] text-[#F2F1EC] transition-colors duration-200 hover:border-[#A8DAD5] hover:text-[#A8DAD5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8DAD5]"
                    >
                      <span>{destination.linkLabel}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                ) : (
                  <div className="mt-8 pt-4" aria-hidden="true">
                    <span className="inline-block h-px w-10 bg-[#F2F1EC]/18" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
