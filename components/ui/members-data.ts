export interface MemberDocument {
  title: string;
  file: string;
  filename: string;
  preview: string;
}

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
  documents?: MemberDocument[];
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
    documents: [
      { title: 'inst9', file: '/document-previews/inst9.jpg', filename: 'inst9.jpg', preview: '/document-previews/inst9.jpg' },
      { title: 'inst10', file: '/document-previews/inst10.jpg', filename: 'inst10.jpg', preview: '/document-previews/inst10.jpg' },
      { title: 'inst11', file: '/document-previews/inst11.jpg', filename: 'inst11.jpg', preview: '/document-previews/inst11.jpg' },
      { title: 'inst12', file: '/document-previews/inst12.jpg', filename: 'inst12.jpg', preview: '/document-previews/inst12.jpg' },
    ],
  },
  {
    id: '3',
    name: 'Motu',
    role: 'Accountant, Make Money, Beauty, Fashion, Social Media',
    image: '/Motu.JPG',
    href: '/members/motu',
    registration: 'УЮ89042702',
    passport: 'E2854328',
    documents: [
      { title: 'inst1', file: '/document-previews/inst1.jpg', filename: 'inst1.jpg', preview: '/document-previews/inst1.jpg' },
      { title: 'inst2', file: '/document-previews/inst2.jpg', filename: 'inst2.jpg', preview: '/document-previews/inst2.jpg' },
      { title: 'inst3', file: '/document-previews/inst3.jpg', filename: 'inst3.jpg', preview: '/document-previews/inst3.jpg' },
      { title: 'inst4', file: '/document-previews/inst4.jpg', filename: 'inst4.jpg', preview: '/document-previews/inst4.jpg' },
      { title: 'inst5', file: '/document-previews/inst5.jpg', filename: 'inst5.jpg', preview: '/document-previews/inst5.jpg' },
      { title: 'inst6', file: '/document-previews/inst6.jpg', filename: 'inst6.jpg', preview: '/document-previews/inst6.jpg' },
      { title: 'inst7', file: '/document-previews/inst7.jpg', filename: 'inst7.jpg', preview: '/document-previews/inst7.jpg' },
      { title: 'inst8', file: '/document-previews/inst8.jpg', filename: 'inst8.jpg', preview: '/document-previews/inst8.jpg' },
      { title: 'motu-e', file: '/document-previews/motu-e.jpg', filename: 'motu-e.jpg', preview: '/document-previews/motu-e.jpg' },
    ],
  },
  {
    id: '4',
    name: 'Cindy',
    role: 'Student, Bossy, AWP, Musicpedia, Cat lover',
    image: '/Cindy.jpg',
    href: '/members/cindy',
    registration: 'УК12321029',
    passport: 'NULL',
    documents: [
      { title: 'yesui-e', file: '/document-previews/yesui-e.jpg', filename: 'yesui-e.jpg', preview: '/document-previews/yesui-e.jpg' },
      { title: 'yesui', file: '/document-previews/yesui.jpg', filename: 'yesui.jpg', preview: '/document-previews/yesui.jpg' },
    ],
  },
  {
    id: '5',
    name: 'Miku',
    role: 'Student, CTO, Kind, Dancer',
    image: '/Miku.JPG',
    href: '/members/miku',
    registration: 'УЖ14222781',
    passport: 'NULL',
    documents: [
      { title: 'ujin-e', file: '/document-previews/ujin-e.jpg', filename: 'ujin-e.jpg', preview: '/document-previews/ujin-e.jpg' },
      { title: 'ujin', file: '/document-previews/ujin.jpg', filename: 'ujin.jpg', preview: '/document-previews/ujin.jpg' },
    ],
  },
  {
    id: '6',
    name: 'Babaka',
    role: 'Student, Joker, Funny, Love, Swim',
    image: '/Babaka.jpg',
    href: '/members/babaka',
    registration: 'УЗ17290424',
    passport: 'E2854327',
    documents: [
      { title: 'babaka-e', file: '/document-previews/babaka-e.jpg', filename: 'babaka-e.jpg', preview: '/document-previews/babaka-e.jpg' },
      { title: 'setsen', file: '/document-previews/setsen.jpg', filename: 'setsen.jpg', preview: '/document-previews/setsen.jpg' },
    ],
  },
]
