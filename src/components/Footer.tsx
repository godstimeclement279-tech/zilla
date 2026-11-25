import { ArrowUpRight } from 'lucide-react';
import { EXTERNAL_LINKS, FOOTER_CONTENT } from '../data/homepageContent';

export function Footer() {
  return (
    <footer className="border-t border-[#F2F1EC]/10 bg-[#151719] py-14 md:py-16">
      <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-10 px-6 md:flex-row md:items-end md:px-12">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.18em] text-[#F2F1EC]">
            {FOOTER_CONTENT.brand}
          </p>
          <p className="mt-2 font-mono text-xs tracking-[0.18em] text-[#A8DAD5]/80">
            {FOOTER_CONTENT.role}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex flex-wrap items-center gap-8">
            <a
              href={EXTERNAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 font-mono text-xs tracking-[0.14em] text-[#F2F1EC]/75 transition-colors hover:text-[#A8DAD5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8DAD5]"
            >
              <span>{FOOTER_CONTENT.xLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <a
              href={EXTERNAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 font-mono text-xs tracking-[0.14em] text-[#F2F1EC]/75 transition-colors hover:text-[#A8DAD5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8DAD5]"
            >
              <span>{FOOTER_CONTENT.telegramLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <p className="font-mono text-[11px] tracking-[0.12em] text-[#F2F1EC]/42">
            {FOOTER_CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
