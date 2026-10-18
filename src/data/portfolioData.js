export const personalInfo = {
  name: "Abhishek Gupta",
  primaryTitle: "Full-Stack Developer | AI Integration",
  shortTitle: "Full-Stack Developer",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "abhishekgupta639415@gmail.com",
  phone: "+91 6394158352",
  github: "https://github.com/abhigupta639415",
  linkedin: "https://www.linkedin.com/in/abhishek-gupta-719b3a276",
  leetcode: "https://leetcode.com/u/abhishek639415/",
  resumePdfUrl: "/Abhishek_Gupta_Resume.pdf",
};

export const heroData = {
  greeting: "Hi, I'm Abhishek Gupta.",
  headline: "Full-Stack Developer building scalable web applications with modern technologies and AI.",
  supportingText: "I'm a Computer Science engineering student and full-stack developer passionate about building responsive, production-ready applications and integrating AI into real-world products.",
  credibilityMetrics: [
    { label: "Full-Stack Apps Deployed", value: "2", highlight: "Production Live" },
    { label: "DSA Problems Solved", value: "250+", highlight: "LeetCode" },
    { label: "AWS Certified", value: "Cloud Practitioner", highlight: "Foundational" },
  ],
};

export const aboutData = {
  paragraphs: [
    "I'm Abhishek Gupta, a Computer Science & Engineering student at KIET Group of Institutions with hands-on experience building full-stack web applications and AI-powered products.",
    "I enjoy turning ideas into practical, user-focused applications using React, Node.js, Express, MongoDB, and modern AI APIs. My projects include AI-powered movie discovery and an AI-based fitness and nutrition platform.",
    "Alongside development, I actively strengthen my problem-solving skills through Data Structures and Algorithms practice, with 250+ problems solved on LeetCode.",
    "I'm currently focused on improving my software engineering, system design, cloud, and full-stack development skills while preparing for software engineering opportunities."
  ],
  stats: [
    { value: "250+", label: "DSA Problems", subtext: "LeetCode Practice" },
    { value: "2", label: "Deployed Full-Stack Apps", subtext: "End-to-End MERN & AI" },
    { value: "1", label: "Professional Internship", subtext: "Front-End Development" },
    { value: "AWS", label: "Certified Cloud Practitioner", subtext: "Cloud Fundamentals" }
  ]
};

export const educationData = {
  institution: "KIET Group of Institutions, Ghaziabad",
  degree: "B.Tech in Computer Science & Engineering",
  duration: "Aug 2023 – Jul 2027",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "System Design",
    "Computer Networks",
    "Operating Systems"
  ]
};

export const experienceData = [
  {
    company: "Codveda Technologies",
    position: "Front-End Development Intern",
    duration: "Nov 2025 – Jan 2026",
    location: "Remote / India",
    description: "Worked on an online restaurant food-delivery platform, developing reusable React components and responsive user interfaces across multiple pages and workflows.",
    achievements: [
      "Engineered 12+ reusable React.js components, improving maintainability and reducing UI development time by 30%.",
      "Built responsive interfaces for food listings, menus, and ordering workflows across 15+ pages using React.js, JavaScript, HTML5, and CSS3.",
      "Delivered interactive frontend features using component-based architecture, reducing UI-related bugs by 20% and improving consistency across the platform."
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    certificate: {
      id: "codveda-internship",
      title: "Web Development Intern",
      organization: "Codveda Technologies",
      duration: "November 2025 – December 2025",
      issueDate: "05 January 2026",
      badge: "Verified Internship",
      type: "Internship / Experience",
      description: "Successfully completed an internship as a Web Development Intern with Codveda Technologies from November 2025 to December 2025.",
      recognizes: [
        "Web Development skills",
        "Effective communication",
        "Attention to detail",
        "Commitment to learning",
        "Completion of assignments and challenges"
      ],
      certificateImage: "/certificates/codveda-web-development-internship.png",
      hasCertificate: true
    }
  }
];

export const specializationsData = [
  {
    title: "Full-Stack Web Applications",
    description: "Responsive and scalable applications using React, Node.js, Express, and MongoDB.",
    icon: "Layers",
    color: "sky"
  },
  {
    title: "AI-Powered Applications",
    description: "Real-world products integrating OpenAI and Google Gemini APIs.",
    icon: "Brain",
    color: "indigo"
  },
  {
    title: "REST APIs & Backend Systems",
    description: "Secure backend systems with authentication, validation, database schemas, and RESTful APIs.",
    icon: "Server",
    color: "emerald"
  },
  {
    title: "Modern Frontend Experiences",
    description: "Responsive interfaces with React, Tailwind CSS, Redux Toolkit, animations, and data visualization.",
    icon: "Layout",
    color: "violet"
  }
];

export const projectsData = [
  {
    id: "netflixgpt",
    name: "NetflixGPT",
    subtitle: "AI-Powered Movie Discovery Platform",
    duration: "Jan 2025 – Apr 2026",
    description: "An AI-powered movie discovery platform that uses natural-language search to help users discover movies through conversational queries instead of traditional keyword filtering.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "OpenAI GPT API",
      "Firebase Authentication",
      "TMDB API"
    ],
    keyFeatures: [
      "Natural-language movie discovery using OpenAI GPT API.",
      "Firebase Authentication for secure login, signup, and session management.",
      "TMDB API integration for real-time movie details, trailers, trending content, ratings, and thousands of titles.",
      "Netflix-inspired responsive user interface.",
      "Redux Toolkit for centralized application state management.",
      "Code splitting using React.lazy() and Suspense.",
      "Multilingual support across 3+ languages."
    ],
    performanceAchievement: "Reduced initial bundle size by approximately 31% using route-level code splitting.",
    github: "https://github.com/abhigupta639415/netflixgpt",
    liveDemo: "https://netflixgpt-khaki.vercel.app/",
    type: "AI & Frontend Engineering",
    deployment: "Frontend: Vercel | Auth: Firebase",
    metrics: [
      { label: "Bundle Size", value: "-31%", note: "via React.lazy() & Suspense" },
      { label: "Multilingual", value: "3+ Languages", note: "Localized UI" },
      { label: "Search Paradigm", value: "Natural Language", note: "OpenAI GPT integration" }
    ]
  },
  {
    id: "nutrigenie",
    name: "NutriGenie",
    subtitle: "AI-Powered Fitness & Diet Platform",
    duration: "Feb 2026 – Sep 2026",
    description: "A full-stack MERN platform that combines AI, nutrition tracking, workout planning, and fitness analytics to provide personalized wellness experiences.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Google Gemini API",
      "Google Gemini Vision",
      "JWT",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Multer",
      "Brevo"
    ],
    keyFeatures: [
      "Personalized Indian diet plans generated using Google Gemini AI.",
      "Workout routine generation based on user requirements.",
      "24/7 conversational fitness chatbot.",
      "BMR/TDEE-based personalization.",
      "AI Food Analyzer using Gemini Vision.",
      "Upload food images and analyze calories, macronutrients, and health insights.",
      "JWT authentication.",
      "OTP-based email verification.",
      "Password reset workflow using Brevo.",
      "bcrypt password hashing.",
      "express-validator input validation.",
      "20+ RESTful API endpoints.",
      "5+ Mongoose schemas.",
      "Progress tracking.",
      "Workout tracking.",
      "Todo/task management.",
      "Analytics dashboard using Recharts.",
      "Responsive frontend with Framer Motion animations."
    ],
    performanceAchievement: "Engineered 20+ RESTful API endpoints and 5+ Mongoose schemas with JWT & OTP security.",
    github: "https://github.com/abhigupta639415/Nutri_Genie",
    liveDemo: "https://frontend-blush-nine-11.vercel.app/",
    type: "Full-Stack MERN + Vision AI",
    deployment: "Frontend: Vercel | Backend: Render | Database: Cloud-hosted MongoDB",
    metrics: [
      { label: "Endpoints", value: "20+", note: "RESTful API routes" },
      { label: "Data Architecture", value: "5+ Schemas", note: "Mongoose models" },
      { label: "Vision AI", value: "Multimodal", note: "Gemini Vision calorie scanner" }
    ]
  }
];

export const skillsData = {
  languages: {
    category: "Languages",
    skills: ["C", "C++", "JavaScript (ES6+)"]
  },
  frontend: {
    category: "Frontend",
    skills: [
      "React.js",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Web Design"
    ]
  },
  backend: {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "RESTful APIs"
    ]
  },
  database: {
    category: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "Schema Design",
      "Aggregation"
    ]
  },
  authSecurity: {
    category: "Authentication & Security",
    skills: [
      "JWT",
      "Firebase Authentication",
      "bcrypt",
      "OTP-based Verification",
      "express-validator"
    ]
  },
  aiIntegration: {
    category: "AI / API Integration",
    skills: [
      "OpenAI GPT API",
      "Google Gemini API",
      "Google Gemini Vision API"
    ]
  },
  toolsPlatforms: {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "Vercel",
      "Render",
      "Postman",
      "VS Code"
    ]
  }
};

export const credentialsData = {
  heading: "Certifications & Achievements",
  subtitle: "Verified credentials, internships, and achievements that reflect my technical growth and hands-on experience.",
  categories: [
    {
      id: "certifications",
      name: "Certifications",
      description: "Industry and vendor-validated credentials verifying cloud and network engineering competencies.",
      items: [
        {
          id: "aws-cloud-practitioner",
          title: "AWS Certified Cloud Practitioner",
          organization: "Amazon Web Services",
          recipient: "Abhishek Gupta",
          issueDate: "Feb 23, 2026",
          expirationDate: "Feb 23, 2029",
          validationNumber: "2464558ea06b42a0a2adffc4420af489",
          verificationUrl: "https://aws.amazon.com/verification",
          badge: "AWS Certified",
          type: "Cloud Certification",
          iconType: "Cloud",
          certificateImage: "/certificates/aws-cloud-practitioner.png",
          certificatePdf: "/certificates/aws-cloud-practitioner.pdf",
          description: "Validated knowledge of cloud fundamentals and core AWS services including EC2, S3, and IAM.",
          hasCertificate: true,
          actionButtons: [
            { label: "View Certificate", action: "preview", primary: true },
            { label: "Verify Credential ↗", action: "verify", url: "https://aws.amazon.com/verification" }
          ]
        },
        {
          id: "cisco-network-technician",
          title: "Network Technician Career Path",
          organization: "Cisco Networking Academy",
          certificateType: "Certificate of Course Completion",
          recipient: "Abhishek Gupta",
          issueDate: "Apr 15, 2026",
          badge: "Cisco Verified",
          type: "Course Completion",
          iconType: "Network",
          certificateImage: "/certificates/cisco-network-technician-career-path.png",
          certificatePdf: "/certificates/cisco-network-technician-career-path.pdf",
          qrNotice: "Scan QR code on certificate to verify",
          description: "Successfully achieved the student-level credential for completing the Network Technician Career Path through Cisco Networking Academy.",
          skillsCovered: [
            "Network standards and protocols",
            "Communication on Ethernet networks",
            "IPv4 and IPv6 addressing",
            "Wireless router configuration & secure internet connectivity",
            "Switched network operation",
            "Transport-layer protocols",
            "DNS and DHCP",
            "Network-layer protocols and routing",
            "Network troubleshooting methodologies",
            "Secure user access on a network"
          ],
          hasCertificate: true,
          actionButtons: [
            { label: "View Certificate", action: "preview", primary: true }
          ]
        }
      ]
    },
    {
      id: "internships",
      name: "Internships",
      description: "Practical engineering experience building real-world web applications and frontend architectures.",
      items: [
        {
          id: "mlsa-internship",
          title: "100-Hour Full Stack Web Development Internship",
          organization: "MLSA KIET",
          program: "100-Hour Internship",
          domain: "Full Stack Web Development",
          badge: "100-Hour Program",
          type: "Internship / Experience",
          iconType: "Briefcase",
          issueDate: "Completed",
          description: "Successfully completed a 100-hour internship offered by MLSA KIET in the Full Stack Web Development domain, gaining hands-on experience in developing end-to-end web applications.",
          additionalAchievement: "Successfully submitted a Pull Request to the official MLSA KIET GitHub repository as part of the program.",
          certificateImage: "/certificates/mlsa-full-stack-internship.png",
          hasCertificate: true,
          isPendingUpload: false,
          actionButtons: [
            { label: "View Certificate", action: "preview", primary: true }
          ]
        },
        {
          id: "codveda-internship",
          title: "Web Development Intern",
          organization: "Codveda Technologies",
          duration: "November 2025 – December 2025",
          issueDate: "05 January 2026",
          badge: "Internship Completion",
          type: "Internship / Experience",
          iconType: "Briefcase",
          description: "Successfully completed an internship as a Web Development Intern with Codveda Technologies from November 2025 to December 2025.",
          recognizes: [
            "Web Development skills",
            "Effective communication",
            "Attention to detail",
            "Commitment to learning",
            "Completion of assignments and challenges"
          ],
          certificateImage: "/certificates/codveda-web-development-internship.png",
          hasCertificate: true,
          actionButtons: [
            { label: "View Certificate", action: "preview", primary: true }
          ]
        }
      ]
    },
    {
      id: "achievements",
      name: "Achievements",
      description: "Competitive hackathon recognitions, technical fest awards, and algorithmic milestones.",
      items: [
        {
          id: "sih-2025",
          title: "Smart India Hackathon 2025",
          organization: "Ministry of Education & AICTE",
          badge: "Institute Finalist",
          type: "National Hackathon",
          iconType: "Trophy",
          issueDate: "2025",
          description: "Selected at institute level among 100+ teams for developing an innovative technology-driven solution in a team-based national hackathon.",
          hasCertificate: false,
        },
        {
          id: "innotech-2025",
          title: "INNOTECH 2025 — Certificate of Achievement",
          organization: "KIET Group of Institutions",
          event: "INNOTECH 2025",
          issueDate: "14 November 2025",
          certificateType: "Certificate of Achievement",
          recipient: "Abhishek Gupta",
          badge: "Certificate of Achievement",
          type: "Innovation & Tech Fest",
          iconType: "Award",
          description: "Recognized for active participation in INNOTECH on 14 November 2025, demonstrating innovation, teamwork, and a spirit of learning in the event conducted by KIET Group of Institutions.",
          certificateImage: "/certificates/innotech-2025-achievement.png",
          hasCertificate: true,
          actionButtons: [
            { label: "View Certificate", action: "preview", primary: true }
          ]
        },
        {
          id: "leetcode-250",
          title: "250+ LeetCode Problems",
          organization: "LeetCode",
          badge: "250+ Solved",
          type: "Algorithms & DSA",
          iconType: "Terminal",
          issueDate: "Ongoing",
          description: "Solved 250+ Data Structures and Algorithms problems covering arrays, strings, linked lists, recursion, searching, sorting, greedy algorithms, and dynamic programming.",
          externalUrl: "https://leetcode.com/u/abhishek639415/",
          hasCertificate: false,
          actionButtons: [
            { label: "View LeetCode Profile ↗", action: "link", url: "https://leetcode.com/u/abhishek639415/" }
          ]
        }
      ]
    }
  ]
};

// Backward compatibility alias for any existing imports
export const achievementsData = credentialsData.categories.find(c => c.id === 'achievements').items;

export const problemSolvingData = {
  heading: "Problem Solving",
  summary: "250+ problems solved on LeetCode",
  topics: [
    { name: "Arrays", description: "Two-pointer, sliding window, prefix sums" },
    { name: "Strings", description: "Pattern matching, anagrams, substring logic" },
    { name: "Linked Lists", description: "Fast/slow pointers, traversal, in-place reversals" },
    { name: "Recursion", description: "Divide-and-conquer, recursive backtracking" },
    { name: "Searching", description: "Binary search variations, rotated search" },
    { name: "Sorting", description: "Custom comparators, merge & quick sort logic" },
    { name: "Greedy Algorithms", description: "Interval scheduling, optimal choices" },
    { name: "Dynamic Programming", description: "Memoization, tabulation, state transitions" }
  ],
  leetcodeUrl: "https://leetcode.com/u/abhishek639415/"
};

export const resumeData = {
  heading: "Interested in working together?",
  text: "Explore my experience, technical skills, projects, and achievements in my resume.",
  ctaText: "Download Resume"
};

export const contactData = {
  heading: "Let's Build Something Together",
  text: "I'm open to software engineering opportunities, internships, and projects where I can contribute my full-stack development and AI integration skills.",
  details: {
    email: "abhishekgupta639415@gmail.com",
    phone: "+91 6394158352",
    location: "Ghaziabad, Uttar Pradesh, India",
    github: "https://github.com/abhigupta639415",
    linkedin: "https://www.linkedin.com/in/abhishek-gupta-719b3a276",
    leetcode: "https://leetcode.com/u/abhishek639415/"
  }
};
