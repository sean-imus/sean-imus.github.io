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
    metaTitle: 'Sean Tietz',
    metaDescription: 'Personal Portfolio of Sean Tietz, Nature Lover — Aspiring Linux Enthusiast — Tech Hobbyist',

    siteLabel: 'seanix.de',
    kicker: 'README · EST. 2026',
    heroName: 'Sean Tietz',
    heroTaglinePart1: 'Nature Lover — ',
    heroTaglineAccent: 'Aspiring Linux Enthusiast ',
    heroTaglinePart2: '— Tech Hobbyist',
    heroIntro: 'Hi, my name is Sean. As you have read above, I love being outside, biking around, touching grass (I know, crazy) and doing anything inside or around a computer.',

    sectionAboutLabel: '(01) ABOUT',
    aboutBody1: 'I am 20 years old, born and currently living in Germany, doing an apprenticeship towards becoming an IT Specialist in System Integration at <a href="https://www.entex.de">ENTEX in Bochum</a>.',
    aboutBody2: 'It all started at just 6 years old, asking my dad to dismantle his phone just because the stuff inside looked so interesting. Even if I would like to tell more, I\'m going to keep it short: it all escalated from there.',

    sectionLinksLabel: '(02) LINKS',
    links: [
      { label: 'Discord', href: 'https://discord.com/users/657723471580626985' },
      { label: 'GitHub', href: 'https://github.com/sean-imus' },
      { label: 'E-Mail', href: 'mailto:sean.tietz2@gmail.com' },
    ],

    sectionProjectsLabel: '(03) PROJECTS & SHENANIGANS',
    projectsNote: 'Things that probably took up way too much of my free time:',
    projects: [
      { title: 'NixOS Config', description: 'Personal NixOS config for my notebook, days upon days spent on this', href: 'https://github.com/sean-imus/nixos-config' },
      { title: 'Historic Weather Visualizer', description: 'Small historic weather visualizer made at school, fun to use once but could be improved', href: 'https://github.com/sean-imus/wetterprojekt' },
    ],

    footerLine: '© 2026 · handmade with hands',
    footerEgg: ':3',
  },

de: {
  metaTitle: 'Sean Tietz',
  metaDescription: 'Persönliches Portfolio von Sean Tietz, Naturfreund — angehender Linux-Enthusiast — Technik-Hobbyist',

  siteLabel: 'seanix.de',
  kicker: 'README · SEIT 2026',
  heroName: 'Sean Tietz',
  heroTaglinePart1: 'Naturfreund — ',
  heroTaglineAccent: 'Angehender Linux-Enthusiast ',
  heroTaglinePart2: '— Technik-Hobbyist',
  heroIntro: 'Hi, ich bin Sean. Wie du oben vielleicht schon gelesen hast, bin ich gerne draußen unterwegs, fahre mit dem Fahrrad durch die Gegend, fasse tatsächlich Gras an (ich weiß, verrückt) und beschäftige mich eigentlich mit allem, was irgendwie mit Computern zu tun hat.',

  sectionAboutLabel: '(01) ÜBER MICH',
  aboutBody1: 'Ich bin 20 Jahre alt, in Deutschland geboren und lebe auch aktuell hier. Zurzeit mache ich eine Ausbildung zum Fachinformatiker für Systemintegration bei <a href="https://www.entex.de">ENTEX in Bochum</a>.',
  aboutBody2: 'Angefangen hat das Ganze, als ich mit erst 6 Jahren meinen Papa gefragt habe, sein Handy auseinanderzunehmen, einfach weil es darin so interessant aussah. Auch wenn ich gerne mehr erzählen würde, halte ich mich kurz: von da an eskalierte es immer weiter.',

  sectionLinksLabel: '(02) LINKS',
  links: [
    { label: 'Discord', href: 'https://discord.com/users/657723471580626985' },
    { label: 'GitHub', href: 'https://github.com/sean-imus' },
    { label: 'E-Mail', href: 'mailto:sean.tietz2@gmail.com' },
  ],

  sectionProjectsLabel: '(03) PROJEKTE & SPIELEREIEN',
  projectsNote: 'Dinge, die wahrscheinlich viel zu viel meiner Freizeit gefressen haben:',
  projects: [
    { title: 'NixOS Config', description: 'Meine persönliche NixOS-Konfiguration fürs Notebook, Tage über Tage habe ich hiermit verbracht', href: 'https://github.com/sean-imus/nixos-config' },
    { title: 'Historischer Wetter-Visualizer', description: 'Kleiner Wetter-Visualizer aus der Schulzeit, einmal ganz lustig, aber definitiv noch ausbaufähig', href: 'https://github.com/sean-imus/wetterprojekt' },
  ],

  footerLine: '© 2026 · handgemacht mit Händen',
  footerEgg: ':3',
},
} as const;
