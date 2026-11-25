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

test('hero copy matches brief verbatim', () => {
  assert.equal(HERO_CONTENT.label, 'ZILLA / FOREX TRADER & EDUCATOR');
  assert.deepEqual(HERO_CONTENT.headlineLines, [
    'THE MARKET MOVES.',
    'STAY AHEAD OF THE NOISE.',
  ]);
  assert.equal(HERO_CONTENT.primaryButton, 'EXPLORE MY APPROACH');
  assert.equal(HERO_CONTENT.secondaryButton, 'JOIN THE COMMUNITY');
});

test('introduction, philosophy, education, and echelon copy match brief verbatim', () => {
  assert.equal(INTRODUCTION_CONTENT.headline, 'CLARITY CHANGES EVERYTHING.');
  assert.equal(PHILOSOPHY_CONTENT.headline, 'A PROCESS WORTH TRUSTING.');
  assert.deepEqual(
    PHILOSOPHY_CONTENT.pillars.map((p) => p.fullHeading),
    ['01 / SIMPLICITY', '02 / CONVICTION', '03 / CONSISTENCY'],
  );
  assert.deepEqual(EDUCATION_CONTENT.headlineLines, [
    'UNDERSTAND THE MARKET.',
    'IMPROVE YOUR PROCESS.',
  ]);
  assert.equal(EDUCATION_CONTENT.buttonLabel, 'EXPLORE EDUCATION.');
  assert.equal(ECHELON_CONTENT.headline, 'ANOTHER LEVEL OF UNDERSTANDING.');
  assert.equal(ECHELON_CONTENT.programmeName, 'THE ECHELON 2027.');
  assert.equal(ECHELON_CONTENT.buttonLabel, 'DISCOVER THE ECHELON.');
});

test('community external links are exact and VIP destination has no invented link', () => {
  assert.equal(COMMUNITY_CONTENT.headline, 'YOUR NEXT STEP STARTS HERE.');
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
  assert.equal(FOOTER_CONTENT.role, 'FOREX TRADER & EDUCATOR.');
});
