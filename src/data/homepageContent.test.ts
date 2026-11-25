import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ORDERED_SECTION_IDS,
  NAV_DESTINATIONS,
  EXTERNAL_LINKS,
  HERO_CONTENT,
  INTRODUCTION_CONTENT,
  PHILOSOPHY_CONTENT,
  EDUCATION_CONTENT,
  ECHELON_CONTENT,
  COMMUNITY_CONTENT,
  FOOTER_CONTENT,
  isApprovedExternalHref,
  getNavTargetId,
} from './homepageContent';

test('six homepage sections exist in exact required order', () => {
  assert.deepEqual(ORDERED_SECTION_IDS, [
    'hero',
    'introduction',
    'philosophy',
    'education',
    'echelon',
    'community',
  ]);
  assert.equal(ORDERED_SECTION_IDS.length, 6);
});

test('navigation contains exact five destinations with Home first', () => {
  assert.deepEqual(
    NAV_DESTINATIONS.map((item) => item.label),
    ['Home', 'About', 'Education', 'The Echelon', 'Community'],
  );
  assert.equal(getNavTargetId('home'), 'hero');
  assert.equal(getNavTargetId('community'), 'community');
});

test('hero copy matches refined concise brief', () => {
  assert.deepEqual(HERO_CONTENT.headlineLines, [
    'THE MARKET MOVES.',
    'STAY AHEAD OF THE NOISE.',
  ]);
  assert.equal(
    HERO_CONTENT.supportingCopy,
    'Read the market. Trust your process. Execute with discipline.',
  );
});

test('introduction, philosophy, education, and echelon copy match refined brief', () => {
  assert.equal(INTRODUCTION_CONTENT.headline, 'CLARITY CHANGES EVERYTHING.');
  assert.equal(
    INTRODUCTION_CONTENT.supportingCopy,
    'Know what matters. Ignore the noise. Stay focused on your process.',
  );
  assert.deepEqual(
    PHILOSOPHY_CONTENT.pillars.map((p) => p.title),
    ['SIMPLICITY', 'CONVICTION', 'CONSISTENCY'],
  );
  assert.equal(EDUCATION_CONTENT.headline, 'UNDERSTAND THE MARKET.');
  assert.equal(
    EDUCATION_CONTENT.supportingCopy,
    'Build your understanding. Refine your approach. Keep learning.',
  );
  assert.equal(ECHELON_CONTENT.headline, 'THE ECHELON 2027.');
  assert.equal(ECHELON_CONTENT.subtitle, '12-MONTH PRIVATE TRADING MENTORSHIP.');
  assert.equal(ECHELON_CONTENT.leadLine, 'Built on simplicity and consistency.');
});

test('community external links are preserved and VIP has no invented details', () => {
  assert.equal(COMMUNITY_CONTENT.headline, 'FIND YOUR COMMUNITY.');
  const [free, vip, follow] = COMMUNITY_CONTENT.destinations;

  assert.equal(free.title, 'FREE COMMUNITY');
  assert.equal(free.href, EXTERNAL_LINKS.telegram);
  assert.equal(isApprovedExternalHref(free.href!), true);

  assert.equal(vip.title, 'VIP COMMUNITY');
  assert.equal(vip.href, undefined);

  assert.equal(follow.title, 'FOLLOW ZILLA');
  assert.equal(follow.href, EXTERNAL_LINKS.x);
  assert.equal(isApprovedExternalHref(follow.href!), true);

  assert.equal(FOOTER_CONTENT.brand, 'ZILLA.');
});
