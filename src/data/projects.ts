export interface IProjectList {
  id: number
  title: string
  description: string
  tags: string[]
  imageSrc: string[]
  projectType:
    | 'case_study'
    | 'live_site'
    | 'live_soon'
    | 'ui_design'
    | 'post'
    | 'illustration'
  redirectLink?: string
  role?: string[]
  tools?: string[]
  team?: string
  website?: string
  intro?: string
  whatWeDeliver?: string[]
  objectives?: {
    primary?: string[]
    secondary?: string[]
    design?: Array<{
      title?: string
      description?: string
    }>
  }
  myProcess?: Array<{
    title?: string
    description?: string
    myProcessList?: string[]
    detailsPoints?: string[]
    painPoints?: string[]
    proudOfList?: string[]
    exploreList?: string[]
    imageSrc?: string[]
  }>
  whatIsNext?: string
}

export const projectList: IProjectList[] = [
  {
    id: 1,
    title: 'Savetown Fintech Housing',
    description:
      'A homeownership cooperative offering access to homeownership through structured savings plans, mortgage options, and financial advisory services.',
    tags: ['UI Design', 'UX Design', 'Mobile App', 'Web App', 'Website'],
    imageSrc: [
      '/project-image-1-a.png',
      '/project-image-1-b.png',
      '/project-image-1-c.png',
      '/project-image-1-d.png',
      '/project-image-1-e.png',
      '/project-image-1-f.png'
    ],
    projectType: 'case_study',
    role: [
      'UX Research',
      'UX Design',
      'Visual Design',
      'Interaction Design',
      'Interactive Prototype'
    ],
    tools: ['Figma', 'Figjam', 'Google Forms'],
    team: 'Cynthia Osi and Victor Asuquo',
    website: 'https://savetown.com/',
    intro:
      'A homeownership cooperative offering access to homeownership through structured savings plans, mortgage options, and financial advisory services. Our goal is to help first-time home buyers in Nigeria save, plan, and secure financing options to purchase their homes. We also work with developers to help these first-time homeowners with the houses of their choice.',
    whatWeDeliver: [
      'A fully functional and responsive website',
      'A web application optimized for all screen sizes (mobile, tablet, and desktop)',
      'A dedicated mobile app for on-the-go access',
      'An admin dashboard to manage and monitor all product activities'
    ],
    objectives: {
      primary: [
        'Create a digital platform that helps users save and plan toward home ownership.'
      ],
      secondary: [
        'Offer advice on financing options, including savings, mortgages, and other financial products.',
        'Ensure user funds are securely saved in foreign currencies (USD).',
        'Provide transparency and tracking for users on their money, and savings progress.',
        'Increase access to homeownership for Nigerians.',
        'Foster a community of like-minded individuals saving for homes.',
        'Arrange collective housing purchase schemes',
        'Wallets should support the direct transfer of USD or GBP from local domiliciary accounts or foreign accounts'
      ]
    },
    myProcess: [
      {
        title: 'The Problem',
        description: `In Nigeria, many first-time homebuyers struggle with scattered savings habits, limited access to trusted mortgage options, and a general lack of guidance through the homeownership process. Savetown was created to make that journey simpler, more transparent, and cooperative.`
        // myProcessList: [],
        // painPoints: [],
        // proudOfList: [],
        // exploreList: [],
        // imageSrc: []
      },
      {
        title: 'Research',
        description: `I started by exploring how first-time homebuyers actually use financial tools, digging into their worries, habits, and what confuses them most. I also studied competitor apps to spot gaps and find where Savetown could truly stand out not just by being functional, but by feeling clear, supportive, and genuinely helpful.`
      },
      {
        title: 'Ideation',
        description: `I rolled up my sleeves and started exploring what homeownership could look like in a more approachable, digital-first way. Once I had a rough direction, I pulled together a mood board to set the visual tone, not just to make things “look nice,” but to anchor the feeling of trust, simplicity, and financial clarity. Then I sketched, wireframed, and prototyped multiple design directions some simple, some bold to find the right balance between trust, clarity, and encouragement.`
      },
      {
        title: 'Prototype',
        description: `To bring that vision to life, I prototyped key user flows from onboarding to savings setup and tested them with real users. These weren’t just testers; they were people actively working toward owning a home.`
      },
      {
        title: 'Design Iterations',
        description: `I Prototyped real scenarios, from setting saving goals to estimating mortgage plans to bring the experience to life early and see where users paused, clicked, or got confused. It helped us shape not just the flow, but the feeling of using Savetown.`
      }
    ],
    whatIsNext: `We’re currently rolling out updated designs that reflect where the product is headed — including savings groups, a community space for house seekers by location, and tailored housing schemes. After a focused 3-day team retreat, we aligned on a clearer direction refining the product to better connect with users and tell the right story.`
  },
  {
    id: 2,
    title: 'SplitPay Expenses Mobile App',
    description:
      'A simple, friendly group expense tracker that helps people stay on top of who paid, who’s yet to pay, and how to gently remind those who forgot, even if they’re not on the app.',
    tags: ['UI Design', 'UX Design', 'Mobile App'],
    imageSrc: [
      '/project-image-2-a.png',
      '/project-image-2-b.png',
      '/project-image-2-c.png',
      '/project-image-2-d.png',
      '/project-image-2-e.png'
    ],
    projectType: 'case_study',
    role: [
      'UX Research',
      'UX Design',
      'Visual Design',
      'Interaction Design',
      'Interactive Prototype'
    ],
    tools: ['Figma', 'Figjam', 'Figma Slides', 'Chatgpt prompt'],
    team: 'Cynthia Osi ',
    intro:
      'It’s built for real-life moments where money is shared but conversations around it feel awkward. From weekend trips to shared dinners or monthly rent, SplitPay keeps things clear, fair, and just a little more human.',
    objectives: {
      primary: [
        'Create a mobile app that helps users track and split expenses payment activities.'
      ],
      secondary: [
        'Create new expense and add members.',
        'Remind members to pay.',
        'Keep track of who still owes what.',
        'Show how payment confirmations actually work.'
      ]
    },
    myProcess: [
      {
        title: 'Context: Where it all started',
        description: `SplitPay began with a simple question:
          “Why is it still hard to track who paid what in a group, especially when everyone’s not on the same app?”

          I noticed how many friend groups and roommates still rely on WhatsApp chats, bank screenshots, and “I’ll remind you later” messages to sort out money matters. It often leads to confusion, forgotten debts, or worse, awkward tension between friends. I wanted to design a solution that helped people track shared expenses with clarity and maybe even kindness.
        `
        // myProcessList: [],
        // detailsPoints:[]
        // painPoints: [],
        // proudOfList: [],
        // exploreList: [],
        // imageSrc: []
      },
      {
        title: `Problem: It's not just about the money`,
        description: `It wasn’t just that people forgot to pay or got confused about amounts. The real issue was communication friction. People hesitated to remind others. Those not on the app couldn’t be reached. And the experience often felt more like a ledger than something built for actual humans.`,
        painPoints: [
          'People not on the app were left out of the loop.',
          'Tracking who paid and who didn’t was clunky.',
          'Reminder systems often felt cold or passive-aggressive.',
          'It lacked a friendly, humane interface, something inviting enough that people actually wanted to use it.'
        ]
      },
      {
        title: 'Approach: Designing for real-life awkwardness',
        description: `I started by mapping out the core user flow, from creating an expense to tracking payments and reminding friends. I paid close attention to edge cases; like what happens when someone isn’t on the app yet, or how reminders are framed.`,
        myProcessList: [
          'Sketching flows that made sense even for non-techy users.',
          'Prioritizing clarity over complexity, every screen had to answer, “What should I do next?”',
          'Adding microcopy and gentle nudges that made reminders feel like friendly prompts, not cold alerts.',
          'Experimenting with ways to invite non-users and still keep the record accurate.',
          'Thinking about status transparency: showing who’s paid, pending, or opted out without judgment.',
          'An interview with 5 friends to validate assumptions.'
        ],
        imageSrc: ['/project-image-2-a-1.png']
      },
      {
        title: 'Outcome: Simple, humane, and a little friendlier',
        detailsPoints: [
          'Easily track and split payments, even with members not on the app.',
          'Send reminders that didn’t feel like a bossy nudge.',
          'See the full history of group payments in one clean view.',
          'Invite others seamlessly, while keeping the ledger accurate.'
        ],
        proudOfList: [
          'The reminder feature felt more human thanks to tone and timing tweaks.',
          'It considered the “real-world messiness” of how people deal with money.',
          'Feedback from testers included lines like “This feels like something I’d actually use with my friends.”'
        ]
      },
      {
        title: 'Reflection: The emotional side of expenses',
        description: `Designing SplitPay reminded me that the UX of money isn’t just about math—it’s emotional. I focused less on features, and more on how people feel when they owe or are owed.`,
        exploreList: [
          'Explore deeper integrations (e.g., auto reminders via WhatsApp/SMS).',
          'Add a feature for recurring bills or “split plans” for roommates.'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Propify Property Saas Landing Page',
    description:
      'A modern saas tool built for property owners and managers to stay on top of listings, tenants, and finances all in one place.',
    tags: ['UI Design', 'UX Design', 'Landing Page', 'Dashboard'],
    imageSrc: ['/project-image-3.png'],
    projectType: 'live_site',
    redirectLink: 'https://propify-portfolio-grow.lovable.app/'
  },
  {
    id: 4,
    title: 'Nftopia - Nft Landing Page',
    description:
      'A marketplace where users can easily mint their unique digital assets, browse a diverse marketplace, and engage with a vibrant community of NFT enthusiasts.',
    tags: ['UI Design', 'UX Design', 'Landing Page'],
    imageSrc: ['/project-image-4.png'],
    projectType: 'live_site',
    redirectLink: 'https://nftopia.lovable.app/'
  },
  {
    id: 5,
    title: 'Fintech - Benefits of Savings Screen',
    description:
      'It was designed as part of a savings app experience specifically to introduce users to the why behind saving, not just the how.',
    tags: ['UI Design', 'UX Design', 'Mobile App'],
    imageSrc: ['/project-image-5-a.png'],
    projectType: 'ui_design',
    role: [
      'UX Research',
      'UX Design',
      'Visual Design',
      'Interaction Design',
      'Interactive Prototype'
    ],
    tools: ['Figma'],
    team: 'Cynthia Osi',
    intro: `Rather than overwhelm users with features, I chose to focus on mood, clarity, and quiet encouragement. Every detail from icon use to color mode was shaped around a single question: “How do we make saving feel more like a choice, and less like a chore?”`,
    objectives: {
      design: [
        {
          title: 'Light & Dark Mode',
          description:
            'Some users save in the quiet of night, others over morning coffee. The screen adjusts, so they don’t have to.'
        },
        {
          title: 'Simple Icons, Quick Reads',
          description:
            'Each benefit comes with a visual cue. It’s not decoration, it’s a way to help users see value without digging through text.'
        },
        {
          title: 'Warm, Honest Copy',
          description:
            'Every line was written like it’s meant for one user, not a crowd. No buzzwords. Just the why behind saving, simply said.'
        },
        {
          title: 'Soft CTA',
          description:
            'The action button doesn’t shout. It suggests. Because feeling ready matters more than being pushed.'
        }
      ]
    },
    whatIsNext:
      'I’m exploring how this screen translates into a voice-friendly experience where saving isn’t just read, it’s heard, with tone and timing that feel human. I’m also testing behavior-based themes that adapt based on when and how users save, making the flow feel more personal, like a quiet companion that adjusts to your rhythm.'
  },
  {
    id: 6,
    title: 'Voice Reading Translation Book App',
    description:
      'A book translation app that lets readers choose how stories sound, not just what language they’re in.',
    tags: ['UI Design', 'UX Design', 'Mobile App'],
    imageSrc: ['/project-image-6-a.png'],
    projectType: 'ui_design',
    role: [
      'UX Research',
      'UX Design',
      'Visual Design',
      'Interaction Design',
      'Interactive Prototype'
    ],
    tools: ['Figma'],
    team: 'Cynthia Osi',
    intro: `
      Many users rely on translated audiobooks to stay connected with stories they love, but often feel disconnected when the voice doesn’t match the mood or pace they prefer. Some want a calm voice for evening listening; others want sharper tones for focus. Speed matters too especially for multitaskers or language learners.

      This screen was designed to solve that: to give users simple, meaningful control over how their books sound, not just what they say. By letting them choose the voice and adjust playback speed in one clear space, the experience becomes more personal, more comfortable and ultimately, more enjoyable.
    `,
    objectives: {
      design: [
        {
          title: 'Voice Selection',
          description:
            'Users can choose from a range of narrator voices tailored to different moods and genres.'
        },
        {
          title: 'Playback Speed Control',
          description:
            'Whether it’s slowing down for clarity or speeding up for efficiency, users set the pace.'
        },
        {
          title: 'Instant Preview',
          description:
            'Tapping a voice gives an immediate sample,  no need to guess what it sounds like.'
        }
      ]
    },
    whatIsNext:
      'I’m exploring how to make voice suggestions smarter, recommending tones based on genre, time of day, or user habits. I’m also looking into emotion-based voice previews, so users can choose not just by name, but by how the story feels.'
  },
  {
    id: 7,
    title: 'Backlight Photography Landing Page',
    description:
      'A website that captures not just images, but stories, emotion, and the tiny details we often overlook. It’ll be a space where light meets lens, and moments are frozen in their most honest form.',
    tags: ['UI Design', 'UX Design', 'Landing Page'],
    imageSrc: ['/project-image-7.png'],
    projectType: 'live_site',
    redirectLink: 'https://backlight-landing-page1.lovable.app/'
  },
  {
    id: 8,
    title: 'LoopDrop Gaming Landing Page',
    description:
      'A game website hero section with smooth hover effects, immersive design, and that satisfying endless scroll that keeps you going without even realizing it.',
    tags: ['UI Design', 'UX Design', 'Landing Page'],
    imageSrc: ['/project-image-8.png'],
    projectType: 'live_soon'
  },
  {
    id: 9,
    title: 'Admin Dashboard UI',
    description:
      'This dashboard was designed to give admins a straightforward way to manage user roles and permissions without hassle.',
    tags: ['UI Design', 'UX Design', 'Web App'],
    imageSrc: ['/project-image-9-a.png'],
    projectType: 'ui_design',
    role: [
      'UX Research',
      'UX Design',
      'Visual Design',
      'Interaction Design',
      'Interactive Prototype'
    ],
    tools: ['Figma'],
    team: 'Cynthia Osi',
    intro: `Admins often juggle multiple users and varying access levels, which can get confusing fast. This screen was created to make role assignment and permission editing quick and intuitive. From creating new roles to tweaking access rights, everything happens in a few clicks, so admins can focus on what matters, not wrestling with settings.`,
    objectives: {
      design: [
        {
          title: 'Role Assignment',
          description:
            'Easily assign predefined roles to users with clear labels and descriptions.'
        },
        {
          title: 'Permission Editing',
          description:
            'Edit what each role can access or modify without navigating away.'
        },
        {
          title: 'Create New Roles',
          description: 'Add custom roles tailored to the organization’s needs.'
        },
        {
          title: 'Clear Save & Cancel',
          description:
            'Changes are easy to commit or discard with obvious calls to action.'
        }
      ]
    },
    whatIsNext:
      'I’m looking to enhance this dashboard by adding role analytics — helping admins see which permissions are most used or where access overlaps might create risks'
  },
  {
    id: 10,
    title: 'Task Management App',
    description: `This analytics screen was designed to give users a quick, clear view of their project progress, from what's done to what's still in motion.`,
    tags: ['UI Design', 'UX Design', 'Mobile App'],
    imageSrc: ['/project-image-10-a.png'],
    projectType: 'ui_design',
    role: [
      'UX Research',
      'UX Design',
      'Visual Design',
      'Interaction Design',
      'Interactive Prototype'
    ],
    tools: ['Figma'],
    team: 'Cynthia Osi',
    intro: `Managing multiple projects can get overwhelming fast, especially when you’re juggling timelines, tasks, and team updates. This screen brings order to that chaos. It gives users a snapshot of all projects at a glance: total projects, what’s completed, and what’s still pending. With visual breakdowns and clean filters, users can quickly understand where things stand and where attention is needed`,
    objectives: {
      design: [
        {
          title: 'Data Visuals',
          description:
            'Graphs and indicators help spot trends or delays at a glance.'
        },
        {
          title: 'Light & Dark Mode',
          description:
            'Built for comfort in any setting, from morning check-ins to late-night planning.'
        },
        {
          title: 'Total Projects Count',
          description:
            'See the big picture, how many projects are currently in the system.'
        },
        {
          title: 'Completed Projects Tracker',
          description: "Instantly view what's been wrapped up and shipped."
        },
        {
          title: 'Pending/Active Projects',
          description: "Know what's still in motion or needs follow-up."
        }
      ]
    },
    whatIsNext:
      'I’m currently exploring how to bring deeper insights into the screen, such as project velocity, blockers, and team workload. I also want to integrate predictive alerts to flag stalled tasks or upcoming deadlines. Another area of focus: making the dashboard more collaborative, where updates, comments, and actions can live in the same space without clutter.'
  },
  {
    id: 11,
    title: 'A lady holding a book',
    description:
      'I played with rich shades of purple to add depth and elegance, while a sharp cream tone brings warmth and vibrancy to her complexion 💜',
    tags: ['Illustration', 'Pen-tool', 'Sketching', 'Drawing'],
    imageSrc: ['/project-image-11.png'],
    projectType: 'illustration'
  },
  {
    id: 12,
    title: 'Hand Bottle Illustration',
    description:
      'This piece features a bottle held by a hand, where I focused on clean lines, subtle details, and a hint of realism.',
    tags: ['Illustration', 'Pen-tool', 'Sketching', 'Drawing'],
    imageSrc: ['/project-image-12.png'],
    projectType: 'illustration'
  }
]
