export interface StudioApp {
  id: string;
  name: string;
  packageName: string;
  category: string;
  description: string;
  accent: 'blue' | 'pink' | 'aqua' | 'violet';
  accentColor: string;
  artwork?: string;
  visual: 'arrows' | 'jelly' | 'sipora' | 'letters';
  icon: string;
  status?: 'published' | 'testing' | 'coming-soon';
  statusLabel?: string;
  playStoreUrl?: string;
  tagline?: string;
  highlights?: string[];
}

export interface StudioPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface StudioInfo {
  name: string;
  suffix: string;
  business: string;
  description: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroDescription: string;
  smallStudioIntro: string;
  email: string;
  github: string;
  githubUsername: string;
  playStoreDevUrl?: string;
  primaryPlatform: string;
}

export const STUDIO_INFO: StudioInfo = {
  name: 'PulseCraft',
  suffix: 'Studio',
  business: 'Independent mobile application and game development',
  description:
    'We build creative mobile games and useful applications with thoughtful design, engaging experiences, and attention to detail.',
  heroHeadline: 'Crafting apps.',
  heroHeadlineAccent: 'Creating playful',
  heroDescription:
    'We are PulseCraft Studio, an independent development studio creating engaging mobile games and thoughtful applications for everyday life.',
  smallStudioIntro:
    'At PulseCraft Studio, we turn ideas into mobile experiences. From clever puzzle games to practical everyday applications, we focus on creating products that are enjoyable, intuitive, and thoughtfully designed.',
  email: 'pulsecraft.dev@gmail.com',
  github: 'https://github.com/pulsecraftdev',
  githubUsername: 'pulsecraftdev',
  primaryPlatform: 'Android',
};

export const STUDIO_PRINCIPLES: StudioPrinciple[] = [
  {
    number: '01',
    title: 'Creative Experiences',
    description: 'Transforming ideas into engaging digital products with thoughtful design and playful mechanics.',
  },
  {
    number: '02',
    title: 'User-First Design',
    description: 'Building clear, intuitive, and responsive experiences optimized across all Android devices.',
  },
  {
    number: '03',
    title: 'Continuous Improvement',
    description: 'Refining our products, listening to player feedback, and relentlessly exploring new ideas.',
  },
];

export const APPS_DATA: StudioApp[] = [
  {
    id: 'arrow-escape',
    name: 'Arrow Escape',
    packageName: 'com.pulsecraft.arrowescape',
    category: 'Puzzle Game',
    description:
      'Untangle intricate arrow puzzles, discover the right paths, and challenge your problem-solving skills.',
    accent: 'blue',
    accentColor: '#519bff',
    visual: 'arrows',
    icon: '↗',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    tagline: 'Untangle paths and solve strategic direction puzzles.',
    highlights: ['Strategic logic puzzles', 'Intricate geometric boards', 'Clean minimal aesthetic'],
  },
  {
    id: 'giggly-jelly-tower',
    name: 'Giggly Jelly Tower',
    packageName: 'com.pulsecraft.jellystack',
    category: 'Casual Arcade Game',
    description:
      'Stack colorful, bouncy jelly pieces and build your tower with timing, precision, and playful fun.',
    accent: 'pink',
    accentColor: '#f27eb4',
    visual: 'jelly',
    icon: '✦',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    tagline: 'Bouncy physics, vibrant colors, and satisfying stack mechanics.',
    highlights: ['Satisfying jelly physics', 'Vibrant cheerful visuals', 'Pick-up-and-play arcade fun'],
  },
  {
    id: 'sipora',
    name: 'Sipora',
    packageName: 'com.sipora.hydration',
    category: 'Hydration and Lifestyle App',
    description:
      'A refreshing everyday companion designed to help you build mindful hydration habits.',
    accent: 'aqua',
    accentColor: '#54dbcf',
    visual: 'sipora',
    icon: '◒',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    tagline: 'Mindful daily water tracking with a calm, fluid interface.',
    highlights: ['Calming ambient design', 'Smart hydration reminders', 'Zero cluttered ads or noise'],
  },
  {
    id: 'word-heaven',
    name: 'Word Heaven',
    packageName: 'com.pulsecraft.wordheaven',
    category: 'Word Puzzle Game',
    description:
      'Explore engaging word puzzles that challenge your vocabulary and keep your mind active.',
    accent: 'violet',
    accentColor: '#8f72ff',
    visual: 'letters',
    icon: 'W',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    tagline: 'Expand your vocabulary through relaxing and clever anagram puzzles.',
    highlights: ['Hundreds of crafted word levels', 'Relaxing ambient soundtrack', 'Brain-stimulating wordplay'],
  },
];
