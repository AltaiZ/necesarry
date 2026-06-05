export interface TeamMember {
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
  id: string;
  name: string;
  role: string;
  image: string;
  href?: string;
  registration?: string;
  passport?: string;
}

export const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: '2',
    name: 'Altai',
    role: 'Developer, Chef, Designer, Music, Photographer',
    image: '/Altai.JPG',
    href: '/members/altai',
    registration: 'УХ88113078',
    passport: 'E2854329',
  },
  {
    id: '3',
    name: 'Motu',
    role: 'Accountant, Make Money, Beauty, Fashion, Social Media',
    image: '/Motu.JPG',
    href: '/members/motu',
    registration: 'УЮ89042702',
    passport: 'E2854328',
  },
  {
    id: '4',
    name: 'Cindy',
    role: 'Student, Bossy, AWP, Musicpedia, Cat lover',
    image: '/Cindy.jpg',
    href: '/members/cindy',
    registration: 'УК12321029',
    passport: 'NULL',
  },
  {
    id: '5',
    name: 'Miku',
    role: 'Student, CTO, Kind, Dancer',
    image: '/Miku.JPG',
    href: '/members/miku',
    registration: 'УЖ14222781',
    passport: 'NULL',
  },
  {
    id: '6',
    name: 'Babaka',
    role: 'Student, Joker, Funny, Love, Swim',
    image: '/Babaka.jpg',
    href: '/members/babaka',
    registration: 'УЗ17290424',
    passport: 'E2854327',
  },
]
