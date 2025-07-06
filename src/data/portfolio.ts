import {
  PersonalInfo,
  Project,
  Skill,
  Experience,
  Education,
  NavigationItem,
  SocialLink,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Kent Lorenz Daria",
  title: "Software Engineer",
  bio: "Entry-level developer with a focus on software development and a growing interest in AI and backend systems. I enjoy building functional, well-structured applications.",
  aboutSubtitle:
    "A quick look at my background, skills, and what keeps me motivated as a developer.",
  extendedBio: [
    "I started coding in high school, where I first got into robotics and automation. That sparked my curiosity about how software can control and interact with the real world. Since then, I’ve been interested in building systems that combine logic, structure, and creativity.",
    "During college, I worked on various projects ranging from mobile and web apps to backend services. I gained hands-on experience using tools like Flutter, Flask, and MongoDB, and developed a strong preference for backend development, where I can focus on clean architecture and performance.",
    "I also explored AI-related topics such as chatbots and LLMs, often building small experiments to understand how they work. Presenting my work in research settings helped me develop confidence in explaining technical ideas and defending design decisions.",
    "Outside of coding, I enjoy learning new tools and reading about software architecture. Currently learning more about Data Engineering and pipelines. I’m committed to continuous improvement and growing under the mentorship of experienced developers.",
  ],
  quickInfoTitle: "Quick Info",
  availabilityStatus: "For new opportunities",
  skillsTitle: "Skills & Technologies",
  educationBadge: "🎓 Education",
  skillCategories: {
    frontend: "Frontend Development",
    backend: "Backend Development",
    frameworks: "Frameworks & Libraries",
    languages: "Programming Languages",
    tools: "Tools & Technologies",
    ai: "AI/ML Technologies",
  },
  avatar: "/assets/images/avatar.jpg", // Placeholder - replace with actual image
  contact: {
    email: "kentlorenz.daria@gmail.com",
    phone: "+63 939 827 9389",
    location: "Capiz, PH",
    linkedin: "https://linkedin.com/in/kent-daria",
    github: "https://github.com/renzklo",
    portfolio: "https://renzklo.com",
    resume: "/assets/KentDaria_SoftwareEngineer_Resume.pdf",
  },
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/renzklo",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/kent-daria",
    icon: "linkedin",
  },
  {
    platform: "Email",
    url: "mailto:kentlorenz.daria@gmail.com",
    icon: "mail",
  },
];

export const typingAnimationTexts: string[] = [
  "Full Stack Developement",
  "Mobile and Web",
  "AI/ML Development",
  "Agents",
  "Data Engineering",
  "Robotics",
];

export const skills: Skill[] = [
  // Frontend
  { name: "Flutter", level: "advanced", category: "frontend" },
  { name: "Python", level: "expert", category: "languages" },
  { name: "React", level: "advanced", category: "frontend" },
  { name: "Next.js", level: "advanced", category: "frontend" },
  { name: "TypeScript", level: "advanced", category: "languages" },
  { name: "JavaScript", level: "advanced", category: "languages" },
  { name: "HTML5", level: "expert", category: "frontend" },
  { name: "CSS3", level: "advanced", category: "frontend" },
  { name: "Tailwind CSS", level: "intermediate", category: "frontend" },

  // Backend
  { name: "Flask", level: "advanced", category: "backend" },
  { name: "Node.js", level: "intermediate", category: "backend" },
  { name: "PostgreSQL", level: "intermediate", category: "backend" },
  { name: "MongoDB", level: "intermediate", category: "backend" },

  // Tools
  { name: "Git", level: "advanced", category: "tools" },
  { name: "Docker", level: "beginner", category: "tools" },
  { name: "Digital Ocean Droplet", level: "intermediate", category: "tools" },

  // AI
  { name: "Pandas", level: "advanced", category: "ai" },
  { name: "Tensorflow", level: "intermediate", category: "ai" },
  { name: "Langchain", level: "intermediate", category: "ai" },
  { name: "Langgraph", level: "intermediate", category: "ai" },
  { name: "OpenAI APIs", level: "intermediate", category: "ai" },
  { name: "Gemini APIs", level: "intermediate", category: "ai" },
];

export const projects: Project[] = [
  // Example of multiple buttons with different types and icons
  {
    id: "1",
    title: "Publink",
    description:
      "A commuter guiding app for public transportation for Iloilo City",
    longDescription:
      "Built a comprehensive commuter guiding application using Flutter and Python. Features include real-time GPS tracking, route optimization, public transportation schedules, and interactive maps using OpenStreetMap and Leaflet.",
    technologies: [
      "Flutter",
      "Python",
      "Leaflet",
      "Flask",
      "OpenStreetMap",
      "MongoDB",
    ],
    imageUrl: "/images/project1.jpg",
    buttons: [],
    featured: true,
  },
  // Example with three buttons - primary, outline, and secondary
  {
    id: "2",
    title: "AI Chatbot",
    description:
      "An agentic chatbot for answering user queries about services provided by DOST VI",
    longDescription:
      "Developed an intelligent chatbot system with natural language processing capabilities. The bot can understand user queries and provide accurate information about DOST VI services, handle multiple conversation threads, and learn from user interactions.",
    technologies: [
      "React",
      "Node.js",
      "Langchain",
      "MongoDB",
      "Express",
      "Python",
    ],
    imageUrl: "/images/project2.jpg",
    buttons: [],
    featured: true,
  },
  // Example with single button
  {
    id: "3",
    title: "Clinic Management System",
    description:
      "Clinic management system for managing patient records and appointments",
    longDescription:
      "Created a comprehensive clinic management system with patient record management, appointment scheduling, medical history tracking, and reporting features. Built with Flutter for mobile access and NestJS for robust backend services.",
    technologies: ["Flutter", "NestJS", "TypeScript", "MongoDB"],
    imageUrl: "/images/project3.jpg",
    buttons: [],
    featured: false,
  },
  // Example with NO buttons - they will be hidden automatically
  {
    id: "4",
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js and TypeScript",
    longDescription:
      "A fully responsive portfolio website showcasing my projects and skills. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/project4.jpg",
    // No buttons array - buttons section will be hidden automatically
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    title: "Full Stack Developer Intern",
    company: "Department of Science and Technology - RO VI",
    location: "Iloilo, PH",
    startDate: "2025-01",
    endDate: "2025-04",
    type: "internship",
    description: [
      "Developed and maintained web applications using CodeIgniter and PHP",
      "Built AI-powered chatbot systems using Python, Flask, and Langchain",
      "Implemented responsive UI components using Bootstrap framework",
      "Integrated machine learning models with Langraph for enhanced user interactions",
    ],
    keyAreas: [
      "OpenAI API",
      "CodeIgniter",
      "PHP",
      "Python",
      "Flask",
      "Bootstrap",
      "Langchain",
      "Langgraph",
      "MySQL",
    ],
  },
  {
    id: "2",
    title: "Scholars' Technopreneurship Training Program (STTP)",
    company: "DOST-SEI & Leave a Nest Philippines",
    location: "Philippines",
    startDate: "2024-07",
    endDate: "2024-11",
    type: "training",
    description: [
      "Participated in comprehensive technopreneurship training program",
      "Developed entrepreneurial skills and business acumen in technology sector",
      "Learned startup methodologies and innovation frameworks",
      "Collaborated with fellow scholars on technology-driven business solutions",
    ],
    keyAreas: [
      "Entrepreneurship",
      "Business Development",
      "Innovation",
      "Technology Commercialization",
      "Startup Methodology",
    ],
  },
  {
    id: "3",
    title: "Co-founder & Vice President for Logistics",
    company: "Cyb Robotics Organization - West Visayas State University",
    location: "Iloilo, PH",
    startDate: "2023-08",
    endDate: "2024-07",
    type: "leadership",
    description: [
      "Co-founded robotics organization to promote robotics and innovation",
      "Organized and managed assets for hands-on activities and training in embedded systems and robotics",
      "Coordinated logistics for workshops, competitions, and technical training sessions",
      "Led procurement and maintenance of robotics equipment and components",
    ],
    keyAreas: [
      "Embedded Systems",
      "Robotics",
      "Arduino",
      "3D Modelling and Printing",
      "ESP32",
      "C/C++",
      "Project Management",
    ],
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "West Visayas State University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    major: "Artificial Intelligence",
    location: "Iloilo, PH",
    startDate: "2021-08",
    endDate: "2025-06",
    status: "expected",
    gpa: "1.39",
    gradeSystem: "1.39 / 1.00 scale (highest)",
    honors: "Magna Cum Laude",
    relevantCoursework: [
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Artificial Intelligence",
      "Data Structures and Algorithms",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
      "Human-Computer Interaction",
      "Mobile Application Development",
    ],
    thesis: {
      title:
        "PubLink: A Commuter Guiding System on Public Utility Jeepney Routes using A* Search Algorithm with Graph Pruning",
      description:
        "Developing an intelligent navigation system using pathfinding algorithms to optimize public transportation routes and provide real-time commuter guidance.",
    },
    awards: [
      "DOST Undergraduate Scholarship (2021-2025)",
      "Consistent Academic Awardee",
      "Best Thesis Award",
    ],
    certifications: [],
  },
];
