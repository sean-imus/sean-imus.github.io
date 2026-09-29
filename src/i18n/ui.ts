export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const translations = {
en: {
  metaTitle: 'Sean Tietz',
  metaDescription: 'Personal portfolio of Sean Tietz — nature lover, aspiring Linux enthusiast, and tech hobbyist',

  siteLabel: 'seanix.de',
  kicker: 'README · EST. 2026',
  heroName: 'Sean Tietz',
  heroTaglinePart1: 'Nature Lover — ',
  heroTaglineAccent: 'Aspiring Linux Enthusiast ',
  heroTaglinePart2: '— Tech Hobbyist',
  heroIntro: 'Hi, I’m Sean. I like being outside, riding my bike, touching grass (I know, crazy), and generally messing around with computers and anything that comes with them.',

  sectionAboutLabel: '(01) ABOUT',
  aboutBody1: 'I’m 20 years old, born and raised in Germany, and currently doing an apprenticeship as an IT Specialist for System Integration at <a href="https://www.entex.de">ENTEX in Bochum</a>.',
  aboutBody2: 'It all started when I was 6 and asked my dad if we could take apart his phone, simply because I thought whatever was inside looked incredibly interesting. I could tell you the whole story, but I’ll keep it short: things escalated from there.',

  sectionLinksLabel: '(02) LINKS',
  links: [
    { label: 'Discord', href: 'https://discord.com/users/657723471580626985' },
    { label: 'GitHub', href: 'https://github.com/sean-imus' },
    { label: 'E-Mail', href: 'mailto:sean.tietz2@gmail.com' },
  ],

  sectionProjectsLabel: '(03) PROJECTS & SHENANIGANS',
  projectsNote: 'Things that somehow managed to consume way too much of my free time:',
  projects: [
    { title: 'NixOS Config', description: 'My personal NixOS configuration for my laptop. Days upon days have gone into this thing.', href: 'https://github.com/sean-imus/nixos-config' },
    { title: 'Historic Weather Visualizer', description: 'A small historic weather visualizer I made at school. Fun to mess around with, but definitely still a work in progress.', href: 'https://github.com/sean-imus/wetterprojekt' },
  ],

  footerLine: '© 2026 · handmade with hands',
  footerEgg: ':3',
},

de: {
  metaTitle: 'Sean Tietz',
  metaDescription: 'Persönliches Portfolio von Sean Tietz — Naturfreund, angehender Linux-Enthusiast und Technik-Hobbyist',

  siteLabel: 'seanix.de',
  kicker: 'README · SEIT 2026',
  heroName: 'Sean Tietz',
  heroTaglinePart1: 'Naturfreund — ',
  heroTaglineAccent: 'Angehender Linux-Enthusiast ',
  heroTaglinePart2: '— Technik-Hobbyist',
  heroIntro: 'Hi, ich bin Sean. Ich bin gerne draußen unterwegs, fahre mit dem Fahrrad durch die Gegend, fasse tatsächlich Gras an (ich weiß, verrückt) und bastle eigentlich an allem herum, was irgendwie mit Computern zu tun hat.',

  sectionAboutLabel: '(01) ÜBER MICH',
  aboutBody1: 'Ich bin 20 Jahre alt, in Deutschland geboren und aufgewachsen und mache aktuell eine Ausbildung zum Fachinformatiker für Systemintegration bei <a href="https://www.entex.de">ENTEX in Bochum</a>.',
  aboutBody2: 'Angefangen hat das Ganze, als ich mit 6 Jahren meinen Papa gefragt habe, ob wir sein Handy auseinandernehmen können, einfach weil das Zeug darin unglaublich interessant aussah. Ich könnte jetzt die ganze Geschichte erzählen, aber ich halte es kurz: Danach ging es immer weiter.',

  sectionLinksLabel: '(02) LINKS',
  links: [
    { label: 'Discord', href: 'https://discord.com/users/657723471580626985' },
    { label: 'GitHub', href: 'https://github.com/sean-imus' },
    { label: 'E-Mail', href: 'mailto:sean.tietz2@gmail.com' },
  ],

  sectionProjectsLabel: '(03) PROJEKTE & SPIELEREIEN',
  projectsNote: 'Dinge, die irgendwie viel zu viel meiner Freizeit gefressen haben:',
  projects: [
    { title: 'NixOS Config', description: 'Meine persönliche NixOS-Konfiguration für mein Notebook. Tage über Tage sind in dieses Ding geflossen.', href: 'https://github.com/sean-imus/nixos-config' },
    { title: 'Historischer Wetter-Visualizer', description: 'Ein kleiner historischer Wetter-Visualizer aus der Schulzeit. Macht einmal Spaß zum Ausprobieren, ist aber definitiv noch ausbaufähig.', href: 'https://github.com/sean-imus/wetterprojekt' },
  ],

  footerLine: '© 2026 · handgemacht mit Händen',
  footerEgg: ':3',
},
} as const;
