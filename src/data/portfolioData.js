export const personalInfo = {
  name: "Abhishek Gupta",
  primaryTitle: "Full-Stack Developer",
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
  eyebrow: "FULL-STACK DEVELOPER",
  name: "Abhishek Gupta",
  subheading: "Building modern, scalable web applications with React, Node.js, MongoDB and AI-powered technologies.",
  supportingParagraph: "I'm a Computer Science undergraduate at KIET Group of Institutions focused on full-stack development, practical software engineering, and AI integration.",
  quickCredentials: [
    { value: "250+", label: "DSA Problems Solved" },
    { value: "2+", label: "Internships" },
    { value: "AWS", label: "Certified Cloud Practitioner" },
    { value: "B.Tech", label: "CSE · 2023–2027" },
  ]
};

export const aboutData = {
  heading: "About Me",
  paragraph: "I'm a Computer Science undergraduate at KIET Group of Institutions focused on full-stack web development and practical software engineering. I enjoy building production-oriented applications with React, Node.js and MongoDB while exploring AI integration using modern LLM APIs. Through internships, projects and problem solving, I've developed hands-on experience across frontend, backend and software development.",
  education: {
    institution: "KIET Group of Institutions",
    degree: "B.Tech — Computer Science",
    duration: "2023–2027",
    location: "Ghaziabad, Uttar Pradesh",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ]
  }
};

export const educationData = aboutData.education;

export const projectsData = [
  {
    id: "netflixgpt",
    name: "NetflixGPT",
    subtitle: "AI-Powered Movie Discovery Platform",
    duration: "Jan 2025 – Apr 2026",
    description: "AI-powered movie discovery platform that uses natural-language search to help users discover movies through conversational queries instead of traditional keyword filtering.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "OpenAI GPT API",
      "TMDB API",
      "Firebase",
      "Tailwind CSS"
    ],
    keyFeatures: [
      "Natural-language movie discovery powered by OpenAI GPT API.",
      "Firebase Authentication for secure user registration, login, and session persistence.",
      "Real-time TMDB API integration for live trending movies, trailers, and metadata.",
      "Centralized client state management engineered with Redux Toolkit.",
      "Route-level code splitting using React.lazy() and Suspense, reducing bundle size by 31%."
    ],
    performanceAchievement: "Reduced initial bundle size by approximately 31% using route-level code splitting.",
    github: "https://github.com/abhigupta639415/netflixgpt",
    liveDemo: "https://netflixgpt-khaki.vercel.app/",
    type: "AI & Web Application"
  },
  {
    id: "nutrigenie",
    name: "NutriGenie",
    subtitle: "AI-Powered Nutrition & Wellness Platform",
    duration: "Feb 2026 – Sep 2026",
    description: "AI-powered nutrition and wellness platform that combines AI meal analysis, workout planning, and fitness analytics to deliver personalized health insights.",
    technologies: [
      "MERN",
      "Google Gemini",
      "Tailwind CSS",
      "AI integration"
    ],
    keyFeatures: [
      "Personalized Indian diet plans generated using Google Gemini AI scaled to BMR/TDEE.",
      "Gemini Vision multimodal scanner analyzing calories, macronutrients, and ingredients from food photos.",
      "24/7 conversational fitness assistant powered by Google Gemini.",
      "Complete JWT authentication and OTP-based email verification using Brevo.",
      "Robust backend with 20+ RESTful API endpoints and 5+ Mongoose data schemas."
    ],
    performanceAchievement: "Engineered 20+ RESTful API endpoints and 5+ Mongoose schemas with JWT & OTP security.",
    github: "https://github.com/abhigupta639415/Nutri_Genie",
    liveDemo: "https://frontend-blush-nine-11.vercel.app/",
    type: "Full-Stack MERN + Vision AI"
  },
  {
    id: "interviewai",
    name: "InterviewAI",
    subtitle: "AI-Powered Interview Preparation Platform",
    duration: "Jul 2026 – Present",
    description: "AI-powered interview preparation platform that analyzes job descriptions and resumes to generate personalized interview strategies, technical questions, HR questions, and preparation roadmaps using Generative AI.",
    technologies: [
      "MERN",
      "Google Gemini",
      "JWT",
      "MongoDB",
      "Express.js"
    ],
    keyFeatures: [
      "Resume & JD analyzer using Google Gemini API to extract target competencies.",
      "Dynamic technical and behavioral question generation tailored to candidate experience.",
      "Real-time AI evaluation and constructive feedback scoring on mock interview answers.",
      "Secure JWT-based session architecture with MongoDB user progress persistence.",
      "Structured preparation roadmaps with topic-by-topic milestone tracking."
    ],
    performanceAchievement: "Automated real-time competency matching and dynamic roadmaps across 10+ tech domains.",
    github: "https://github.com/abhigupta639415/InterviewAI",
    liveDemo: "https://interview-ai-one-rose.vercel.app",
    type: "Full-Stack AI Application"
  },
  {
    id: "civiccare",
    name: "CivicCare",
    subtitle: "Crowdsourced Civic Issue Reporting Platform",
    duration: "SIH 2025 Project",
    description: "Crowdsourced civic issue reporting platform developed as a Smart India Hackathon project. It enables citizens to report public issues such as potholes, garbage accumulation, water leakage, and streetlight failures with geolocation and image uploads.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB/PostGIS",
      "Maps",
      "Role-based access"
    ],
    keyFeatures: [
      "Interactive citizen reporting interface with image uploads and GPS geolocation tagging.",
      "Municipal authority dashboard with status tracking (Reported, In Progress, Resolved).",
      "Role-based access control separating citizen, municipal officer, and administrator views.",
      "Location-based clustering and filtering to prevent duplicate issue logs.",
      "Real-time issue status timeline notifications for transparency."
    ],
    performanceAchievement: "Selected as Institute Finalist at Smart India Hackathon (SIH 2025) among 100+ teams.",
    github: "https://github.com/abhigupta639415/CivicCare",
    liveDemo: "https://civic-care-navy.vercel.app",
    type: "Full-Stack Civic Tech"
  }
];

export const experienceData = [
  {
    id: "codveda-experience",
    company: "Codveda Technologies",
    position: "Web Development Intern",
    employmentType: "Internship",
    duration: "November 2025 – December 2025",
    durationLabel: "Nov 2025 – Dec 2025",
    location: "Remote / India",
    workMode: "Remote",
    description: "Worked as a Web Development Intern with Codveda Technologies, building and optimizing reusable React components and responsive user workflows for web applications.",
    achievements: [
      "Engineered 12+ reusable React.js components, improving maintainability and reducing UI development time by 30%.",
      "Built responsive interfaces for food listings, menus, and ordering workflows across 15+ pages using React.js, JavaScript, HTML5, and CSS3.",
      "Delivered interactive frontend features using component-based architecture, reducing UI-related bugs by 20% and improving consistency across the platform."
    ],
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"],
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
  },
  {
    id: "mlsa-experience",
    company: "MLSA KIET",
    position: "Full Stack Web Development Intern",
    employmentType: "Internship",
    duration: "Apr 2025 – Jun 2025 · 3 mos",
    durationLabel: "Apr 2025 – Jun 2025 · 3 mos",
    programNote: "100-Hour Full Stack Web Development Internship",
    location: "Ghaziabad, Uttar Pradesh, India · Remote",
    workMode: "Remote",
    description: "Completed a 100-hour Full Stack Web Development internship offered by MLSA KIET, gaining hands-on experience in frontend and backend web development and contributing to a GitHub-based development workflow.",
    achievements: [
      "Gained hands-on experience in frontend and backend web development using HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.",
      "Built and enhanced web application features while following Git and GitHub-based development workflows.",
      "Contributed to the official MLSA KIET GitHub repository and successfully submitted a Pull Request as part of the internship.",
      "Strengthened practical skills in REST APIs, responsive UI development, debugging, and version control."
    ],
    skills: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git",
      "GitHub"
    ],
    certificate: {
      id: "mlsa-internship",
      title: "100-Hour Full Stack Web Development Internship",
      organization: "MLSA KIET",
      duration: "Apr 2025 – Jun 2025",
      issueDate: "Apr 2025 – Jun 2025 · 3 mos",
      badge: "Verified Internship",
      type: "Internship / Experience",
      description: "Successfully completed the 100-hour internship offered by MLSA KIET in the Full Stack Web Development domain and successfully submitted the Pull-Request on the MLSA KIET GitHub repository.",
      certificateImage: "/certificates/mlsa-full-stack-internship.png",
      hasCertificate: true
    }
  }
];

export const skillsData = {
  languages: {
    category: "Languages",
    skills: ["C++", "Java", "JavaScript", "PHP"]
  },
  frontend: {
    category: "Frontend",
    skills: ["HTML", "CSS", "React.js", "Tailwind CSS"]
  },
  backend: {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  database: {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL"]
  },
  core: {
    category: "Core CS",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks"
    ]
  },
  tools: {
    category: "Tools",
    skills: ["Git", "GitHub", "Firebase", "Vercel", "AWS"]
  },
  ai: {
    category: "AI / APIs",
    skills: ["OpenAI GPT API", "Google Gemini", "TMDB API"]
  }
};

export const certificationsData = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    recipient: "Abhishek Gupta",
    issueDate: "February 23, 2026",
    expirationDate: "February 23, 2029",
    validationNumber: "2464558ea06b42a0a2adffc4420af489",
    verificationUrl: "https://aws.amazon.com/verification",
    badge: "AWS Certified",
    type: "Cloud Certification",
    iconType: "Cloud",
    certificateImage: "/certificates/aws-cloud-practitioner.png",
    certificatePdf: "/certificates/aws-cloud-practitioner.pdf",
    description: "Validated knowledge of cloud fundamentals and core AWS services including EC2, S3, and IAM.",
    hasCertificate: true
  },
  {
    id: "cisco-network-technician",
    title: "Network Technician Career Path",
    organization: "Cisco Networking Academy",
    certificateType: "Certificate of Course Completion",
    recipient: "Abhishek Gupta",
    issueDate: "April 15, 2026",
    badge: "Cisco Verified",
    type: "Course Completion",
    iconType: "Network",
    certificateImage: "/certificates/cisco-network-technician-career-path.png",
    certificatePdf: "/certificates/cisco-network-technician-career-path.pdf",
    qrNotice: "Scan QR code on certificate to verify",
    description: "Successfully achieved the student-level credential for completing the Network Technician Career Path through Cisco Networking Academy.",
    hasCertificate: true
  }
];

export const achievementsData = [
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    organization: "Ministry of Education & AICTE",
    badge: "Institute Finalist",
    type: "National Hackathon",
    iconType: "Trophy",
    issueDate: "2025",
    description: "Selected at institute level among 100+ teams for developing an innovative technology-driven solution in a team-based national hackathon.",
    hasCertificate: false
  },
  {
    id: "bplan-endeavour-2025",
    title: "B-PLAN — ENDEAVOUR'25",
    organization: "E-CELL KIET, KIET Group of Institutions",
    event: "ENDEAVOUR'25 — Annual Summit",
    issueDate: "2nd – 3rd May 2025",
    certificateType: "Certificate of Participation",
    recipient: "Abhishek Gupta",
    badge: "Participation",
    type: "Entrepreneurship & Innovation",
    iconType: "Lightbulb",
    description: "Participated in the B-PLAN event at ENDEAVOUR'25, organized by the E-CELL at KIET Group of Institutions from 2nd to 3rd May 2025, gaining experience in collaboration, learning, and pitching innovative ideas among aspiring entrepreneurs and mentors.",
    tags: [
      "Entrepreneurship",
      "Innovation",
      "Startup",
      "Business Planning",
      "Teamwork",
      "Idea Pitching"
    ],
    certificateImage: "/certificates/b-plan-endeavour-2025.png",
    hasCertificate: true
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
    hasCertificate: true
  },
  {
    id: "leetcode-250",
    title: "250+ LeetCode Problems",
    organization: "LeetCode",
    badge: "250+ Solved",
    type: "Algorithms & DSA",
    iconType: "Terminal",
    issueDate: "Ongoing",
    description: "250+ problems solved across data structures and algorithms covering arrays, strings, linked lists, recursion, searching, sorting, greedy algorithms, and dynamic programming.",
    externalUrl: "https://leetcode.com/u/abhishek639415/",
    hasCertificate: false
  }
];

export const resumeData = {
  heading: "Interested in working together?",
  text: "Explore my experience, technical skills, projects, and achievements in my resume.",
  ctaText: "Download Resume"
};

export const contactData = {
  heading: "Let's build something meaningful.",
  text: "I'm open to software engineering opportunities, internships and full-time roles.",
  details: {
    email: "abhishekgupta639415@gmail.com",
    phone: "+91 6394158352",
    location: "Ghaziabad, Uttar Pradesh, India",
    github: "https://github.com/abhigupta639415",
    linkedin: "https://www.linkedin.com/in/abhishek-gupta-719b3a276",
    leetcode: "https://leetcode.com/u/abhishek639415/"
  }
};
