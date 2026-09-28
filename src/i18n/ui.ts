// ============================================================
//  ✏️  ALL UR WORDS LIVE HERE, sean!! :3
//  Edit the text between the quotes/brackets.
//  TODO spots are marked with "ur words here".
//  Both languages must keep the same keys.
// ============================================================

export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    metaTitle: 'ur words here — name or cool title :3',
    metaDescription: 'ur words here — one sentence about you for search results',

    siteLabel: 'seanix.de',
    kicker: 'ur words here — e.g. PORTFOLIO · EST. 2026',
    heroName: 'ur words here — ur name',
    heroTaglinePart1: 'ur words here — ',
    heroTaglineAccent: 'ur words here — italic accent word',
    heroTaglinePart2: ' ur words here — rest of the sentence',
    heroIntro: 'ur words here — 2–3 short friendly sentences about who u are. maybe mention what u do, what u enjoy, anythign that makes u *u*. :3',

    sectionAboutLabel: '(01) ABOUT',
    aboutBody1: 'ur words here — a little more depth. what u do day to day, what ur curious about.',
    aboutBody2: 'ur words here — maybe how u got into tech, or whatever story feels right.',

    sectionLinksLabel: '(02) LINKS',
    links: [
      { label: 'GitHub', href: 'https://github.com/sean-imus' },
      { label: 'Email', href: 'mailto:sean.tietz2@gmail.com' },
      { label: 'ur words here — e.g. Mastodon', href: '#' },
    ],

    sectionProjectsLabel: '(03) PROJECTS & SHENANIGANS',
    projectsNote: 'ur words here — one line teasing the section, e.g. "things i probably broke while making:"',
    projects: [
      { title: 'ur title here', description: 'ur words here — one line about it', href: '#' },
      { title: 'ur title here', description: 'ur words here — one line about it', href: '#' },
      { title: 'ur title here', description: 'ur words here — one line about it', href: '#' },
    ],

    footerLine: '© 2026 · handmade with html & vibes',
    footerEgg: ':3',
  },

  de: {
    metaTitle: 'ur words here — Name oder cooler Titel :3',
    metaDescription: 'ur words here — ein Satz über dich für Suchergebnisse',

    siteLabel: 'seanix.de',
    kicker: 'ur words here — z.B. PORTFOLIO · EST. 2026',
    heroName: 'ur words here — dein Name',
    heroTaglinePart1: 'ur words here — ',
    heroTaglineAccent: 'ur words here — kursives Akzentwort',
    heroTaglinePart2: ' ur words here — Rest des Satzes',
    heroIntro: 'ur words here — 2–3 kurze freundliche Sätze über dich. was du machst, was dich glücklich macht, egal was dich *dich* macht. :3',

    sectionAboutLabel: '(01) ÜBER MICH',
    aboutBody1: 'ur words here — etwas mehr Tiefe. was du täglich machst, worauf du neugierig bist.',
    aboutBody2: 'ur words here — vielleicht wie du zur Technik kommst, oder eine Geschichte die passt.',

    sectionLinksLabel: '(02) LINKS',
    links: [
      { label: 'GitHub', href: 'https://github.com/sean-imus' },
      { label: 'E-Mail', href: 'mailto:sean.tietz2@gmail.com' },
      { label: 'ur words here — z.B. Mastodon', href: '#' },
    ],

    sectionProjectsLabel: '(03) PROJEKTE & SHENANIGANS',
    projectsNote: 'ur words here — eine Zeile als teaser, z.B. "dinge, die ich dabei aka kaputt gemacht habe:"',
    projects: [
      { title: 'titel hier', description: 'ur words here — eine Zeile dazu', href: '#' },
      { title: 'titel hier', description: 'ur words here — eine Zeile dazu', href: '#' },
      { title: 'titel hier', description: 'ur words here — eine Zeile dazu', href: '#' },
    ],

    footerLine: '© 2026 · handgemacht mit html & vibes',
    footerEgg: ':3',
  },
} as const;
