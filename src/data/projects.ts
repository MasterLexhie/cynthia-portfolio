export interface IProjectList {
  id: number
  title: string
  description: string
  tags: string[]
  imageSrc: string
  projectType:
    | 'case_study'
    | 'live_site'
    | 'live_soon'
    | 'ui_design'
    | 'post'
    | 'illustration'
  redirectLink?: string
}

export const projectList: IProjectList[] = [
  {
    id: 1,
    title: 'Savetown Fintech Housing',
    description:
      'A homeownership cooperative offering access to homeownership through structured savings plans, mortgage options, and financial advisory services.',
    tags: ['UI Design', 'UX Design', 'Mobile App'],
    imageSrc: '/project-image.png',
    projectType: 'case_study'
  },
  {
    id: 2,
    title: 'SplitPay Expenses Mobile App',
    description:
      'A simple, friendly group expense tracker that helps people stay on top of who paid, who’s yet to pay, and how to gently remind those who forgot, even if they’re not on the app.',
    tags: ['UI Design', 'UX Design', 'Mobile App'],
    imageSrc: '/project-image-2.png',
    projectType: 'case_study'
  },
  {
    id: 3,
    title: 'Propify Property Saas Landing Page',
    description:
      'A modern saas tool built for property owners and managers to stay on top of listings, tenants, and finances all in one place.',
    tags: ['UI Design', 'UX Design', 'Landing Page', 'Dashboard'],
    imageSrc: '/project-image-3.png',
    projectType: 'live_site',
    redirectLink: 'https://propify-portfolio-grow.lovable.app/'
  },
  {
    id: 4,
    title: 'Nftopia - Nft Landing Page',
    description:
      'A marketplace where users can easily mint their unique digital assets, browse a diverse marketplace, and engage with a vibrant community of NFT enthusiasts.',
    tags: ['UI Design', 'UX Design', 'Landing Page'],
    imageSrc: '/project-image-4.png',
    projectType: 'live_site',
    redirectLink: 'https://nftopia.lovable.app/'
  },
  {
    id: 5,
    title: 'Fintech - Benefits of Savings Screen',
    description:
      'It was designed as part of a savings app experience specifically to introduce users to the why behind saving, not just the how.',
    tags: ['UI Design', 'UX Design', 'Mobile App'],
    imageSrc: '/project-image-5.png',
    projectType: 'ui_design'
  },
  {
    id: 6,
    title: 'Voice Reading Translation Book App',
    description:
      'A book translation app that lets readers choose how stories sound, not just what language they’re in.',
    tags: ['UI Design', 'UX Design', 'Mobile App'],
    imageSrc: '/project-image-6.png',
    projectType: 'ui_design'
  },
  {
    id: 7,
    title: 'Backlight Photography Landing Page',
    description:
      'A website that captures not just images, but stories, emotion, and the tiny details we often overlook. It’ll be a space where light meets lens, and moments are frozen in their most honest form.',
    tags: ['UI Design', 'UX Design', 'Landing Page'],
    imageSrc: '/project-image-7.png',
    projectType: 'live_site',
    redirectLink: 'https://backlight-landing-page1.lovable.app/'
  },
  {
    id: 8,
    title: 'LoopDrop Gaming Landing Page',
    description:
      'A game website hero section with smooth hover effects, immersive design, and that satisfying endless scroll that keeps you going without even realizing it.',
    tags: ['UI Design', 'UX Design', 'Landing Page'],
    imageSrc: '/project-image-8.png',
    projectType: 'live_soon'
  },
  {
    id: 9,
    title: 'Admin Dashboard UI',
    description:
      'This dashboard was designed to give admins a straightforward way to manage user roles and permissions without hassle.',
    tags: ['UI Design', 'UX Design', 'Web App'],
    imageSrc: '/project-image-9.png',
    projectType: 'ui_design'
  },
  {
    id: 10,
    title: 'Task Management App',
    description: `This analytics screen was designed to give users a quick, clear view of their project progress, from what's done to what's still in motion.`,
    tags: ['UI Design', 'UX Design', 'Mobile App'],
    imageSrc: '/project-image-10.png',
    projectType: 'ui_design'
  },
  {
    id: 11,
    title: 'A lady holding a book',
    description:
      'I played with rich shades of purple to add depth and elegance, while a sharp cream tone brings warmth and vibrancy to her complexion 💜',
    tags: ['Illustration', 'Pen-tool', 'Sketching', 'Drawing'],
    imageSrc: '/project-image-11.png',
    projectType: 'illustration'
  },
  {
    id: 12,
    title: 'Hand Bottle Illustration',
    description:
      'This piece features a bottle held by a hand, where I focused on clean lines, subtle details, and a hint of realism.',
    tags: ['Illustration', 'Pen-tool', 'Sketching', 'Drawing'],
    imageSrc: '/project-image-12.png',
    projectType: 'illustration'
  }
]
