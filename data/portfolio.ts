import type {
  Project,
  SkillCategory,
  Experience,
  Education,
  SocialLink,
  NavItem,
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id:"background-remover",
    title: "Background Remover – AI-Powered Image Segmentation Web App",
    description:
      "Computer vision model deployed as a performance-optimized web application.",
    longDescription:
       "An AI-powered web application that automatically removes backgrounds from images with a focus on accuracy and ease of use. The system processes uploaded images using computer vision models to generate clean cutouts, allowing users to preview results in real time and download outputs without technical complexity.",
    thumbnail: "/images/projects/background-remover/thumbnail.png",
    techStack: ["Python", "Flask", "OpenCV", "RMBG 1.4", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/shridharshini123/Jewelry_background_remover.git",
  },
  {
    id: "EOL_testing",
    title: "End-of-Line Testing System – Motor Signal Analysis & Quality Control",
    description:
      "Real-time motor vibration analysis using FFT to detect faults and prevent defective units.",
    longDescription:
       "Led the development of an EOL testing system that captures vibration and noise data from motors during production. Utilized FFT to analyze signal patterns and identify characteristic frequencies associated with common motor faults. Developed a classification algorithm to categorize motors based on their signal profiles, achieving high accuracy in distinguishing between 'Good' and 'Not OK' units. The system provides real-time feedback to operators, enabling immediate corrective actions and improving overall product quality.",
    thumbnail:"/images/projects/EOL-testing/thumbnail.jpg",
    techStack: ["Python", "Flask", "SQL", "FFT", "Signal Processing", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/shridharshini123/EOL_testing.git",
  },
    
  {
    id:"Password-Manager",
    title: "Password Manager – Secure & Intuitive Digital Vault",
    description:
      "Secure password vault with encryption, generation, and multi-account management.",
    longDescription:
      "Designed a secure password manager interface that balances usability with strong security features. The app allows users to store, generate, and manage passwords across multiple accounts. I focused on creating a clean, intuitive UI that reduces friction in password management while maintaining robust encryption and access controls.",
    thumbnail: "/images/projects/password-manager/thumbnail.jpg",
    techStack: ["Python", "Flask", "SQL", "HTML", "CSS", "JavaScript", "Cryptography Libraries"],
    githubUrl: "https://github.com/shridharshini123/Password-Manager.git",
    
  },
  
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "palette",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 88 },
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "R", level: 80 },
    ],
  },
  {
    title: "Data Visualization",
    icon: "chart-bar",
    skills: [
      { name: "Power BI", level: 95 },
      { name: "Tableau", level: 92 },
      { name: "Looker", level: 94 },
      { name: "Excel", level: 82 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 80 },
    ],
  },
  {
    title: "Data Analysis",
    icon: "bar-chart",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "NLP", level: 85 },
      { name: "NumPy", level: 88 },
      { name: "Pandas", level: 87 },
      { name: "Scikit-learn", level: 82 },
      { name: "NLTK", level: 80 },
    ],
  },
  {
    title: "AI/ML Tools & Web frameworks:",
    icon: "brain",
    skills: [
      { name: "Git / GitHub", level: 93 },
      { name: "KNIME", level: 82 },
      { name: "Orange", level: 80 },
      { name: "Flask", level: 86 },
      { name: "FastAPI", level: 80 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Data Analyst",
    company: "Cybervault Innovation and Technologies Pte Ltd",
    location: "Coimbatore, India",
    startDate: "Jun 2024",
    endDate: "Present",
    description:
      "Data Analyst & AI Developer driving end-to-end AI, machine learning, analytics, and security solutions across e-commerce, recruitment, and enterprise systems.",
    highlights: [
      "Led development of AI-powered systems including image segmentation, virtual try-on, and automated resume intelligence.",
      "Designed and deployed machine learning pipelines from data preprocessing to model evaluation and integration.",
      "Built scalable data workflows using Python, Pandas, and Scikit-learn for analytics-driven decision-making.",
      "Delivered applied AI solutions tailored to real business use cases in retail and HR tech.",
      "Conducted vulnerability assessments (VAPT) and provided structured remediation strategies.",
      "Created internal cybersecurity documentation and awareness materials for cross-functional teams.",
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "B.Tech., Artificial Intelligence and Data Science",
    institution: "Kathir College of Engineering",
    location: "Coimbatore, India",
    startDate: "2020",
    endDate: "2024",
    description: "Engineer focused on machine learning, data pipelines, and systems-level problem solving for real-world digital products.",
  },
  {
    id: "edu-2",
    degree: "Class XII - Computer Science with Maths",
    institution: "R.K.Sree Rangammal Kalvi Nilayam Higher Secondary School",
    location: "Coimbatore, India",
    startDate: "2019",
    endDate: "2020",
    description: "Academic grounding in computational thinking and mathematics, with emphasis on programming fundamentals.",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/shridharshini123/", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shridharshini/", icon: "linkedin" },
  { name: "Email", url: "mailto:shridharshininair@gmail.com", icon: "mail" },
  { name: "Phone No", url: "tel:+918056326627", icon: "phone" },
];

export const personalInfo = {
  name: "Shri Dharshini J",
  title: "Data Analyst | Applied AI & Analytics",
  tagline: "Crafting real-world AI solutions with clarity and impact.",

  location: "Coimbatore, India (Open to relocation)",
  email: "shridharshininair@gmail.com",

  about: {
    overview: [
      "Data Analyst at Cybervault Innovation & Technologies.",
      "Working on applied analytics, machine learning, and backend systems.",
      "Focused on turning complex data and algorithms into usable production systems.",
      "Hands-on with FFT-based testing systems, AI-driven image processing, NLP resume screening, and secure backend services.",
      "Prefer solving real operational problems over theoretical modeling."
    ],

    focus: [
      "Applied Analytics & Machine Learning",
      "Backend Development for Data Systems",
      "Explainable & Production-Ready Models",
      "Foundations for ML & MLOps Roles"
    ],

    workStyle: {
      heading: "How I Work",
      content:
        "Calm, analytical, and detail-driven. I begin by understanding the problem and the data deeply before contributing. I prioritize impact over activity and focus only on work that delivers measurable value."
    },

    constants: {
      heading: "What Stays Constant",
      content:
        "Clarity over complexity. Practical systems over buzzwords. A strong bias toward reliability, explainability, and real-world usability."
    }
  }
}

