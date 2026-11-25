import { ArrowUpRight } from 'lucide-react';
import { COMMUNITY_CONTENT } from '../data/homepageContent';

export function CommunitySection() {
  return (
    <section
      id="community"
      data-section="community"
      className="relative py-28 md:py-44"
    >
      <div className="relative z-10 mx-auto max-w-[1360px] px-6 md:px-12">
        <h2
          data-scroll-reveal
          className="font-display text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.028em] text-[#F2F1EC] text-balance"
        >
          {COMMUNITY_CONTENT.headline}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 border-t border-[#F2F1EC]/14 pt-12 md:mt-16 md:grid-cols-3 md:gap-12">
          {COMMUNITY_CONTENT.destinations.map((destination) => (
            <div
              key={destination.id}
              data-scroll-reveal
              className="group flex flex-col justify-between"
            >
              <div>
                <h3 className="font-mono text-sm font-medium tracking-[0.18em] text-[#A8DAD5]">
                  {destination.title}
                </h3>

                <p className="mt-4 max-w-[30ch] text-base md:text-[17px] leading-[1.65] text-[#F2F1EC]/76">
                  {destination.description}
                </p>
              </div>

              {destination.href && destination.linkLabel && (
                <div className="mt-7">
                  <a
                    href={destination.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 border-b border-[#F2F1EC]/28 pb-1 font-mono text-xs tracking-[0.12em] text-[#F2F1EC] transition-colors duration-200 hover:border-[#A8DAD5] hover:text-[#A8DAD5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8DAD5]"
                  >
                    <span>{destination.linkLabel}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
