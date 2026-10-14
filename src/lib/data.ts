export type SocialLink = {
  label: string;
  href: string;
  icon: 'linkedin' | 'instagram' | 'whatsapp' | 'email';
};

export type Profile = {
  name: string;
  firstName: string;
  tagline: string;
  location: string;
  role: string;
  introLine: string;
  aboutIntro: string;
  aboutBody: string;
  detailsLeft: { label: string; value: string }[];
  detailsRight: { label: string; value: string }[];
  socials: SocialLink[];
};

export type Stat = {
  value: string;
  label: string;
};

export type Chapter = {
  slug: string;
  name: string;
  role: string;
  image: string;
  story: string[];
  filter: 'infra' | 'security' | 'advisory';
  categoryLabel: string;
  subtitle: string;
  images: string[];
  moreInfo?: { label: string; value: string }[];
};

export const profile: Profile = {
  name: 'Nadwy Anshary',
  firstName: 'Nadwy',
  tagline: 'Technology Enthusiast',
  location: 'Jakarta',
  role: 'Project Manager',
  introLine:
    'Leading technology delivery across infrastructure, network, DevOps and cybersecurity — turning complex requirements into reliable, secure and scalable systems.',
  aboutIntro:
    'A results-driven Project Manager with 15 years of hands-on experience across IT infrastructure, network engineering, DevOps and cybersecurity. I lead cross-functional teams to transform complex technical requirements into systems that are on time, on budget and built to last.',
  aboutBody:
    'My strength is bridging strategic project outcomes with deep technical execution — from software system analysis and Document Management System (DMS) integration to full IT project delivery. I bring structure to ambiguous problems and make sure the technology actually works in the real world.',
  detailsLeft: [
    { label: 'Role', value: 'IT Project Manager' },
    { label: 'Experience', value: '15 Years' },
    { label: 'Expertise', value: 'Infra · Network · Security' },
    { label: 'Focus', value: 'Delivery & Integration' }
  ],
  detailsRight: [
    { label: 'Location', value: 'Jakarta, Indonesia' },
    { label: 'Certification', value: 'CCNA · ACMP · VSE+' },
    { label: 'Website', value: 'www.nawasena.net' },
    { label: 'Mail', value: 'nadwy@nawasena.net' }
  ],
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nadwyanshary/',
      icon: 'linkedin'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/bochiers/',
      icon: 'instagram'
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/+6282111627976',
      icon: 'whatsapp'
    },
    {
      label: 'Email',
      href: 'mailto:nadwy@nawasena.net',
      icon: 'email'
    }
  ]
};

/** Big-number stats block — the "Goonies Never Say Die" credits grid. */
export const stats: Stat[] = [
  { value: 'PM', label: 'Current role' },
  { value: '15+', label: 'Years in IT' },
  { value: 'Infra', label: '& Security background' },
  { value: 'Bachelor', label: 'Degree' },
  { value: '4', label: 'Certifications' },
  { value: 'Jakarta', label: 'Based in' }
];

export const skills = [
  { label: 'IT Project Management', value: 95 },
  { label: 'Networking', value: 100 },
  { label: 'Server Engineer', value: 90 },
  { label: 'Virtualization', value: 98 },
  { label: 'DevOps', value: 88 },
  { label: 'Cybersecurity', value: 90 },
  { label: 'Software System Analysis', value: 85 },
  { label: 'DMS Integration', value: 85 }
] as const;

export const certifications = [
  { code: 'VSE+', name: 'Veritas — NetBackup SaaS Protection' },
  { code: 'ACMP', name: 'Aruba Certified Mobility Professional V8b' },
  { code: 'ACESO', name: 'Operator Certified Radio Tactics' },
  { code: 'CCNA', name: 'ID NETWOKERS' }
] as const;

/**
 * "Chapters" — these are the portfolio projects, presented the way
 * The Goonies presents its characters: a name, a role, a story and a portrait.
 */
export const portfolio: Chapter[] = [
  {
    slug: 'test-and-comm-network-devices',
    name: 'Test and Comm Network Devices',
    role: 'Infrastructure',
    image: '/assets/img/Porto/Cyber%20Defense%20Kemhan/Test%20Com%20Network.jpg',
    story: [
      'Testing and commissioning of network devices for the Cyber Defence program at Kemhan — validating connectivity, performance and hardening across the deployed infrastructure.',
      'Ensuring the network is stable, secure and ready to operate in a demanding defence environment.'
    ],
    filter: 'infra',
    categoryLabel: 'Infrastructure',
    subtitle: 'Cyber Defence Kemhan',
    images: [
      '/assets/img/Porto/Cyber%20Defense%20Kemhan/Test%20Com%20Network.jpg',
      '/assets/img/Porto/Cyber%20Defense%20Kemhan/IMG_20210107_090841.jpg',
      '/assets/img/Porto/Cyber%20Defense%20Kemhan/IMG_20210115_113338.jpg'
    ]
  },
  {
    slug: 'kick-of-meeting-secure-communication-platform',
    name: 'Kick Off Meeting Secure Communication Platform',
    role: 'Security & Communication',
    image: '/assets/img/Porto/SIT%20AL/technical%20meeting%20AL.jpg',
    story: [
      'Kick-off meeting for the Secure Communication Platform — aligning technical scope, milestones and deliverables with stakeholders before implementation begins.',
      'A foundation-setting discussion that shapes how the platform is built, secured and rolled out.'
    ],
    filter: 'security',
    categoryLabel: 'Security & Communication',
    subtitle: 'Secure Communication Platform',
    images: [
      '/assets/img/Porto/SIT%20AL/technical%20meeting%20AL.jpg',
      '/assets/img/Porto/SIT%20AL/Kick%20of%20Meeting%20SIT%20AL.jpg',
      '/assets/img/Porto/SIT%20AL/Big%20Data%20AL.jpg'
    ]
  },
  {
    slug: 'pusrehab-bintaro',
    name: 'Pusrehab Bintaro',
    role: 'Infrastructure',
    image: '/assets/img/Porto/Cyber%20Defense%20Kemhan/Pusrehab%20Bintaro.jpg',
    story: [
      'Uji Kelaikan (fitness-for-purpose assessment) for the network infrastructure at Pusrehab Bintaro — verifying that systems meet the required operational standards.',
      'Delivering a clear assessment so the infrastructure is fit to operate and easy to maintain.'
    ],
    filter: 'infra',
    categoryLabel: 'Infrastructure',
    subtitle: 'Uji Kelaikan Kemhan',
    images: [
      '/assets/img/Porto/Cyber%20Defense%20Kemhan/Pusrehab%20Bintaro.jpg',
      '/assets/img/Porto/Cyber%20Defense%20Kemhan/IMG_20211122_161930.jpg',
      '/assets/img/Porto/Cyber%20Defense%20Kemhan/IMG_20211122_161934.jpg'
    ]
  },
  {
    slug: 'presentation-iccs-ranpur',
    name: 'Presentation ICCS RANPUR',
    role: 'Advisory',
    image: '/assets/img/Porto/ICCS%20Ranpur/Iccs%20Presentation.jpg',
    story: [
      'Presenting the Integrated Combat & Communication System (ICCS) for RANPUR — walking stakeholders through capabilities, integration and the value it brings to the field.',
      'Turning complex systems into a clear, convincing narrative.'
    ],
    filter: 'advisory',
    categoryLabel: 'Advisory',
    subtitle: 'ICCS Ranpur',
    images: [
      '/assets/img/Porto/ICCS%20Ranpur/Iccs%20Presentation.jpg',
      '/assets/img/Porto/ICCS%20Ranpur/Product%20Knowledge.jpg',
      '/assets/img/Porto/ICCS%20Ranpur/IMG-20220121-WA0032.jpg'
    ]
  },
  {
    slug: 'neptunus-vid-tron',
    name: 'Neptunus Vid-Tron',
    role: 'Security & Communication',
    image: '/assets/img/Porto/SIT%20AL/Neputunus%20Vid%20Tron.jpg',
    story: [
      'Neptunus Vid-Tron — a video and data presentation platform built for secure, high-impact communication.',
      'Bridging display, data and network into one cohesive solution.'
    ],
    filter: 'security',
    categoryLabel: 'Security & Communication',
    subtitle: 'SIT AL',
    images: [
      '/assets/img/Porto/SIT%20AL/Neputunus%20Vid%20Tron.jpg',
      '/assets/img/Porto/SIT%20AL/SIT%20AL.jpg',
      '/assets/img/Porto/SIT%20AL/Big%20Data%20AL2.jpg'
    ]
  },
  {
    slug: 'pelatihan-scp',
    name: 'Pelatihan SCP',
    role: 'Security & Communication',
    image: '/assets/img/Porto/SIT%20AL/SIT%20AL.jpg',
    story: [
      'Training sessions for the Secure Communication Platform (SCP) — enabling teams to operate the system confidently and securely.',
      'Knowledge transfer that makes the technology stick.'
    ],
    filter: 'security',
    categoryLabel: 'Security & Communication',
    subtitle: 'SCP — Secure Communication Platform',
    images: [
      '/assets/img/Porto/SIT%20AL/SIT%20AL.jpg',
      '/assets/img/Porto/SIT%20AL/technical%20meeting%20AL.jpg',
      '/assets/img/Porto/SIT%20AL/IMG_20221014_112359.jpg'
    ]
  },
  {
    slug: 'product-knowledge',
    name: 'Product Knowledge',
    role: 'Advisory',
    image: '/assets/img/Porto/ICCS%20Ranpur/Product%20Knowledge.jpg',
    story: [
      'Product knowledge sessions on Military Radio Communication — deep dives into capabilities, configurations and real-world usage.',
      'Sharing the detail that turns a product into a solution.'
    ],
    filter: 'advisory',
    categoryLabel: 'Advisory',
    subtitle: 'Military Radio Communication',
    images: [
      '/assets/img/Porto/ICCS%20Ranpur/Product%20Knowledge.jpg',
      '/assets/img/Porto/ICCS%20Ranpur/Iccs%20Presentation.jpg',
      '/assets/img/Porto/ICCS%20Ranpur/IMG-20220121-WA0038.jpg'
    ]
  },
  {
    slug: 'presentation-network-stan-bintaro',
    name: 'Presentation Network STAN Bintaro',
    role: 'Infrastructure',
    image: '/assets/img/Porto/STAN%20BINTARO/Presentation%20Network%20STAN%20BINTARO.jpg',
    story: [
      'Presenting the network design and architecture for STAN Bintaro — translating technical requirements into a clear, buildable plan.',
      'Designing infrastructure that is reliable, scalable and secure.'
    ],
    filter: 'infra',
    categoryLabel: 'Infrastructure',
    subtitle: 'STAN Bintaro',
    images: [
      '/assets/img/Porto/STAN%20BINTARO/Presentation%20Network%20STAN%20BINTARO.jpg'
    ]
  },
  {
    slug: 'implementasi-video-tron-kasops-kasal',
    name: 'Implementasi Video-Tron',
    role: 'Security & Communication',
    image: '/assets/img/Porto/SIT%20AL/Video%20Trion%20Kasal.jpg',
    story: [
      'Implementasi Video-Tron for Kasops Kasal — deploying the video presentation system end to end.',
      'From planning to on-site delivery, making sure it works when it matters.'
    ],
    filter: 'security',
    categoryLabel: 'Security & Communication',
    subtitle: 'Kasops Kasal',
    images: [
      '/assets/img/Porto/SIT%20AL/Video%20Trion%20Kasal.jpg',
      '/assets/img/Porto/SIT%20AL/Neputunus%20Vid%20Tron.jpg',
      '/assets/img/Porto/SIT%20AL/IMG-20221107-WA0029.jpg'
    ]
  }
];

/** Flattened image list used for the gallery grid. */
export const gallery: string[] = [
  '/assets/img/Porto/Cyber%20Defense%20Kemhan/Test%20Com%20Network.jpg',
  '/assets/img/Porto/SIT%20AL/technical%20meeting%20AL.jpg',
  '/assets/img/Porto/ICCS%20Ranpur/Iccs%20Presentation.jpg',
  '/assets/img/Porto/STAN%20BINTARO/Presentation%20Network%20STAN%20BINTARO.jpg',
  '/assets/img/Porto/SIT%20AL/Neputunus%20Vid%20Tron.jpg',
  '/assets/img/Porto/Cyber%20Defense%20Kemhan/Pusrehab%20Bintaro.jpg',
  '/assets/img/Porto/ICCS%20Ranpur/Product%20Knowledge.jpg',
  '/assets/img/Porto/SIT%20AL/Video%20Trion%20Kasal.jpg',
  '/assets/img/Porto/Cyber%20Defense%20Kemhan/IMG_20210107_090841.jpg',
  '/assets/img/Porto/SIT%20AL/SIT%20AL.jpg',
  '/assets/img/Porto/ICCS%20Ranpur/IMG-20220121-WA0046.jpg',
  '/assets/img/Porto/Cyber%20Defense%20Kemhan/IMG_20211122_161930.jpg'
];

/** Filter categories used on the portfolio/chapters section. */
export const filters = [
  { key: 'all' as const, label: 'All' },
  { key: 'infra' as const, label: 'Infrastructure' },
  { key: 'security' as const, label: 'Security & Communication' },
  { key: 'advisory' as const, label: 'Advisory' }
];
