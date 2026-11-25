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
  label: 'ZILLA / FOREX TRADER & EDUCATOR',
  headlineLines: ['THE MARKET MOVES.', 'STAY AHEAD OF THE NOISE.'],
  supportingCopy:
    "Trading is more than finding an entry. It's about understanding the market, knowing when to act and having the discipline to follow your process.",
  primaryButton: 'EXPLORE MY APPROACH',
  secondaryButton: 'JOIN THE COMMUNITY',
} as const;

export const INTRODUCTION_CONTENT = {
  headline: 'CLARITY CHANGES EVERYTHING.',
  paragraphs: [
    'The market will always give you something to look at. The challenge is knowing what deserves your attention.',
    "Zilla's approach centres on understanding market structure, developing conviction and keeping the process simple.",
  ],
} as const;

export interface PhilosophyPillar {
  readonly index: string;
  readonly title: string;
  readonly fullHeading: string;
  readonly description: string;
}

export const PHILOSOPHY_CONTENT = {
  headline: 'A PROCESS WORTH TRUSTING.',
  pillars: [
    {
      index: '01',
      title: 'SIMPLICITY',
      fullHeading: '01 / SIMPLICITY',
      description: 'Cut through unnecessary complexity. Focus on what matters.',
    },
    {
      index: '02',
      title: 'CONVICTION',
      fullHeading: '02 / CONVICTION',
      description: 'Understand your analysis and develop confidence in your decisions.',
    },
    {
      index: '03',
      title: 'CONSISTENCY',
      fullHeading: '03 / CONSISTENCY',
      description: 'Build a process you can return to, refine and execute with discipline.',
    },
  ] as readonly PhilosophyPillar[],
} as const;

export const EDUCATION_CONTENT = {
  headlineLines: ['UNDERSTAND THE MARKET.', 'IMPROVE YOUR PROCESS.'],
  paragraphs: [
    "Trading isn't something you master by collecting more indicators or chasing every market movement.",
    "It takes time to understand what you're looking at and develop a process that makes sense to you.",
    "Explore Zilla's approach to trading and forex education.",
  ],
  buttonLabel: 'EXPLORE EDUCATION.',
} as const;

export const ECHELON_CONTENT = {
  headline: 'ANOTHER LEVEL OF UNDERSTANDING.',
  programmeName: 'THE ECHELON 2027.',
  paragraphs: [
    'A 12-month private trading mentorship built on two principles: simplicity and consistency.',
    'Learn to read the market without drowning in complexity. Develop conviction, refine your execution and master a repeatable framework.',
  ],
  buttonLabel: 'DISCOVER THE ECHELON.',
} as const;

export interface CommunityDestination {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href?: string;
  readonly linkLabel?: string;
}

export const COMMUNITY_CONTENT = {
  headline: 'YOUR NEXT STEP STARTS HERE.',
  destinations: [
    {
      id: 'free-community',
      title: 'FREE COMMUNITY',
      description: "Join Zilla's free Telegram community for signals and educational information.",
      href: EXTERNAL_LINKS.telegram,
      linkLabel: 't.me/ZillaTradesHQ',
    },
    {
      id: 'vip-community',
      title: 'VIP COMMUNITY',
      description: "Discover Zilla's private VIP offering.",
    },
    {
      id: 'follow-zilla',
      title: 'FOLLOW ZILLA',
      description: 'Follow Zilla on X for trading perspectives and updates.',
      href: EXTERNAL_LINKS.x,
      linkLabel: '@Aromeh_Ali',
    },
  ] as readonly CommunityDestination[],
} as const;

export const FOOTER_CONTENT = {
  brand: 'ZILLA.',
  role: 'FOREX TRADER & EDUCATOR.',
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
