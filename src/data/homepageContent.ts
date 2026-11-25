export interface NavDestination {
  readonly id: string;
  readonly label: string;
  readonly targetId: SectionId;
}

export type SectionId =
  | 'hero'
  | 'introduction'
  | 'philosophy'
  | 'education'
  | 'echelon'
  | 'community';

export const ORDERED_SECTION_IDS: readonly SectionId[] = [
  'hero',
  'introduction',
  'philosophy',
  'education',
  'echelon',
  'community',
] as const;

export const NAV_DESTINATIONS: readonly NavDestination[] = [
  { id: 'home', label: 'Home', targetId: 'hero' },
  { id: 'about', label: 'About', targetId: 'introduction' },
  { id: 'education', label: 'Education', targetId: 'education' },
  { id: 'the-echelon', label: 'The Echelon', targetId: 'echelon' },
  { id: 'community', label: 'Community', targetId: 'community' },
] as const;

export const EXTERNAL_LINKS = {
  telegram: 'https://t.me/ZillaTradesHQ',
  x: 'https://x.com/Aromeh_Ali',
} as const;

export const HERO_CONTENT = {
  label: 'ZILLA · Forex Trader & Educator',
  headlineLines: ['THE MARKET MOVES.', 'STAY AHEAD OF THE NOISE.'],
  supportingCopy: 'Read the market. Trust your process. Execute with discipline.',
  primaryButton: 'Explore Approach',
  secondaryButton: 'Join Community',
} as const;

export const INTRODUCTION_CONTENT = {
  headline: 'CLARITY CHANGES EVERYTHING.',
  supportingCopy:
    'Know what matters. Ignore the noise. Stay focused on your process.',
} as const;

export interface PhilosophyPillar {
  readonly index: string;
  readonly title: string;
  readonly description: string;
}

export const PHILOSOPHY_CONTENT = {
  headline: 'A PROCESS WORTH TRUSTING.',
  pillars: [
    {
      index: '01',
      title: 'SIMPLICITY',
      description: 'Cut complexity. Focus on what matters.',
    },
    {
      index: '02',
      title: 'CONVICTION',
      description: 'Trust your analysis and act with clarity.',
    },
    {
      index: '03',
      title: 'CONSISTENCY',
      description: 'Return to a repeatable process with discipline.',
    },
  ] as readonly PhilosophyPillar[],
} as const;

export const EDUCATION_CONTENT = {
  headline: 'UNDERSTAND THE MARKET.',
  supportingCopy:
    'Build your understanding. Refine your approach. Keep learning.',
  buttonLabel: 'Explore Education',
} as const;

export const ECHELON_CONTENT = {
  headline: 'THE ECHELON 2027.',
  subtitle: '12-MONTH PRIVATE TRADING MENTORSHIP.',
  leadLine: 'Built on simplicity and consistency.',
  paragraphs: [
    'Learn to read the market without drowning in complexity.',
    'Develop conviction, refine your execution and master a repeatable framework.',
  ],
  buttonLabel: 'Discover The Echelon',
} as const;

export interface CommunityDestination {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href?: string;
  readonly linkLabel?: string;
}

export const COMMUNITY_CONTENT = {
  headline: 'FIND YOUR COMMUNITY.',
  destinations: [
    {
      id: 'free-community',
      title: 'FREE COMMUNITY',
      description: 'Signals and market education on Telegram.',
      href: EXTERNAL_LINKS.telegram,
      linkLabel: 't.me/ZillaTradesHQ',
    },
    {
      id: 'vip-community',
      title: 'VIP COMMUNITY',
      description: "Zilla's private VIP offering.",
    },
    {
      id: 'follow-zilla',
      title: 'FOLLOW ZILLA',
      description: 'Trading perspectives and updates on X.',
      href: EXTERNAL_LINKS.x,
      linkLabel: '@Aromeh_Ali',
    },
  ] as readonly CommunityDestination[],
} as const;

export const FOOTER_CONTENT = {
  brand: 'ZILLA.',
  role: 'Forex Trader & Educator',
  xLabel: 'X (@Aromeh_Ali)',
  telegramLabel: 'Free Telegram Community',
  copyright: '© 2026 ZILLA. All rights reserved.',
} as const;

export function isApprovedExternalHref(href: string): boolean {
  return href === EXTERNAL_LINKS.telegram || href === EXTERNAL_LINKS.x;
}

export function getNavTargetId(navId: string): SectionId {
  const match = NAV_DESTINATIONS.find((item) => item.id === navId);
  return match ? match.targetId : 'hero';
}
