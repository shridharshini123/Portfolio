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
  { label: "Mentor", href: "#lectures" },
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
       "An AI-powered web application designed to automatically remove backgrounds from images with high precision, speed, and scalability. The system leverages advanced computer vision and deep learning segmentation models to accurately distinguish foreground subjects from complex backgrounds, including fine details such as hair strands, transparent objects, and soft edges.\n\n      Users can upload images through a clean, intuitive interface, where the backend processes each image using a trained semantic segmentation model (such as U²-Net or DeepLabV3+). The model generates a pixel-level alpha mask that isolates the primary subject from the background. Post-processing techniques such as edge refinement, matting optimization, and smoothing algorithms are applied to ensure professional-grade cutouts.\n\n      The application supports real-time preview rendering, allowing users to instantly visualize results before downloading. Optimized inference pipelines and efficient image compression ensure fast processing even for high-resolution images while maintaining quality.\n\n      To improve accuracy over time, the system can incorporate model fine-tuning using domain-specific datasets (e.g., e-commerce products, jewelry, portraits). Performance metrics such as IoU (Intersection over Union) and pixel accuracy are used to evaluate and optimize model outputs.",
    thumbnail: "/images/projects/background-remover/thumbnail.png",
    techStack: ["Python", "Flask", "OpenCV", "RMBG 1.4", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/shridharshini123/Jewelry_background_remover.git",
  },
  {
    id: "jewelry-virtual-tryon",
    title: "Jewelry Virtual Try-On – AR-Powered E-commerce Platform",
    description:
      "Augmented Reality (AR) application enabling customers to virtually try on jewelry items before purchasing.",
    longDescription:
      "The Jewelry Virtual Try-On platform is an innovative AR-powered e-commerce solution that allows customers to visualize jewelry items on themselves in real-time. Built using advanced computer vision and 3D rendering technologies, the application enables users to upload their profile photo or use their webcam to see how different jewelry pieces look on them.\n\n\      The system integrates with existing e-commerce platforms and supports a wide range of jewelry categories including necklaces, earrings, rings, bracelets, and more. It leverages machine learning algorithms for accurate body landmark detection and precise 3D model alignment with user features.\n\n\      Users can customize jewelry attributes such as size, color, material, and design variations in real-time. The platform supports both mobile and web interfaces with seamless cross-device compatibility. Advanced features include lighting simulation for realistic appearance matching and social sharing capabilities for customer feedback.\n\n\      The backend handles large-scale image processing and 3D model rendering while maintaining low latency for an immersive user experience. Integration with inventory management systems ensures accurate product availability and pricing information.",
    techStack: [
      "Three.js",
      "WebGL",
      "Rhino3D / Blender (3D Modeling)",
      "Python (ML & Image Processing)",
      "MediaPipe (Landmark Detection)",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    thumbnail: "/images/projects/jewelry-tryon/thumbnail.png",
    githubUrl: "https://github.com/shridharshini123/",
  },
 
  {
    id: "smarttimesheet",
    title: "AI-Enhanced Smart Timesheet System — STS",
    description:
      "AI-powered workforce analytics with predictive time tracking and leave intelligence.",
    longDescription:
      "Smart Timesheet (STS) is an AI-powered, role-based workforce intelligence platform designed to modernize time tracking and leave management through structured workflows and predictive analytics. Employees securely log real-time work hours against assigned projects, while managers review and approve entries through a transparent, auditable system. Leadership gains centralized visibility over projects, time utilization, leave policies, and workforce allocation, ensuring operational control and compliance.\n\n      Beyond standard time logging, STS integrates anomaly detection models to identify irregular patterns such as excessive overtime, inconsistent reporting behavior, and suspicious logging activity. By analyzing historical usage patterns, the system flags potential compliance risks and payroll discrepancies before they escalate. This transforms time tracking from a passive recording tool into a proactive monitoring system.\n\n      The platform also leverages predictive analytics to forecast leave trends and burnout risks by evaluating workload intensity, overtime frequency, and historical leave behavior. Machine learning-based productivity scoring compares estimated and actual task completion times to provide data-backed performance insights, enabling managers to make objective, evidence-driven decisions.\n\n      To simplify insight generation, STS includes a conversational AI assistant that allows leadership to query workforce analytics using natural language. By converting user queries into structured data analysis, the system delivers actionable insights instantly. Overall, STS shifts workforce management from administrative tracking to intelligent, data-driven optimization.",
    techStack: [
      "Next.js",
      "Socket.io",
      "MongoDB",
      "Redis",
      "AWS S3",
      "Python (ML Models)",
      "Scikit-learn",
      "Prophet / LSTM",
      "OpenAI API"
    ],
    thumbnail: "/images/projects/sts/thumbnail.jpg",
    githubUrl: "https://github.com/shridharshini123/",
  },
  {
    id: "sbs360",
    title: "Intelligent Construction Management ERP — SBS 360",
    description:
      "Integrated ERP and AI-driven construction management platform for end-to-end operational control.",
    longDescription:
      "Smart Building Suite 360 (SBS 360) is a comprehensive digital transformation platform built specifically for the construction and engineering industry. It centralizes ERP, project management, safety compliance, material tracking, financial control, and workforce management into a unified ecosystem accessible via web and mobile applications.\n\n\
      The platform enables real-time project visibility by integrating budgeting, procurement, task allocation, and milestone tracking into a structured workflow system. Project managers monitor cost variance, resource utilization, and timeline deviations through dynamic dashboards, reducing delays and budget overruns.\n\n\
      SBS 360 incorporates intelligent analytics to predict project risks, identify material shortages, and forecast cost escalations using historical project data. Machine learning models analyze productivity patterns, safety incidents, and procurement cycles to proactively flag operational inefficiencies before they impact delivery.\n\n\
      The integrated safety module tracks compliance metrics, incident reports, and site inspections, ensuring regulatory adherence while minimizing risk exposure. Material management is optimized through inventory intelligence that monitors stock levels, automates reordering thresholds, and reduces wastage.\n\n\
      Executive leadership gains centralized visibility into financial performance, workforce productivity, and project profitability across multiple sites. With data-driven insights and predictive analytics, SBS 360 transforms construction operations from reactive management to proactive, intelligence-driven execution.",
    techStack: [
      "Next.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS S3",
      "Python (Analytics & ML)",
      "Scikit-learn",
      "Power BI / Custom Dashboard Engine",
      "REST & WebSocket APIs"
    ],
    thumbnail: "/images/projects/sbs360/thumbnail.jpeg",
    githubUrl: "https://github.com/shridharshini123/"
  },
  {
    id: "ai-resume-screener",
    title: "AI Resume Screener – Automated Candidate Evaluation System",
    description:
      "AI-powered system to evaluate resumes and match candidates to job requirements.",
    longDescription:
       "The AI Resume Screener is an end-to-end intelligent candidate evaluation system designed to automate and enhance the initial recruitment screening process. The platform leverages advanced Natural Language Processing (NLP) techniques and transformer-based semantic embedding models to analyze unstructured resume data and compare it against structured job descriptions.\n\n      The system extracts critical attributes such as technical skills, certifications, years of experience, education level, domain expertise, and contextual project relevance using entity recognition and text parsing pipelines. Instead of relying on simple keyword matching, the application uses Sentence-BERT (SBERT) embeddings to compute semantic similarity between candidate profiles and job requirements, enabling deeper contextual understanding.\n\n      A weighted scoring engine ranks candidates based on configurable parameters such as skill match percentage, experience alignment, and domain relevance. The model also supports threshold filtering, allowing recruiters to shortlist high-fit candidates instantly.\n\n      To improve robustness, preprocessing steps include PDF/DOCX parsing, stop-word removal, lemmatization, skill normalization, and duplicate detection. The system architecture is modular, enabling integration with HR databases or Applicant Tracking Systems (ATS).\n\n      Performance evaluation includes similarity score benchmarking, precision/recall measurement for shortlisted candidates, and ranking consistency validation. The solution significantly reduces manual screening time while improving fairness and consistency in candidate evaluation.",

    thumbnail: "/images/projects/Resume-Screening/thumbnail.jpeg",
    techStack: ["Python", "NLP","SBERT"],
    githubUrl: "https://github.com/shridharshini123/AI-Resume-Screening.git",
  },

  {
    id: "EOL_testing",
    title: "End-of-Line Testing System – Motor Signal Analysis & Quality Control",
    description:
      "Real-time motor vibration analysis using FFT to detect faults and prevent defective units.",
    longDescription:
       "Led the end-to-end development of an End-of-Line (EOL) testing system designed to evaluate motor quality through vibration and acoustic signal analysis during production. Architected a real-time data acquisition pipeline to capture high-frequency vibration and noise signals from motors using industrial-grade sensors integrated with the production line.\n\n      Implemented advanced signal processing techniques, including Fast Fourier Transform (FFT), to convert time-domain signals into frequency-domain representations. Identified characteristic frequency signatures corresponding to common motor defects such as bearing faults, imbalance, misalignment, and rotor issues. Designed filtering and preprocessing steps to remove environmental noise and ensure signal stability under factory conditions.\n\n       Developed and optimized a classification algorithm to automatically categorize motors into “Good” and “Not OK” classes based on extracted spectral features. Engineered feature extraction pipelines incorporating peak frequency detection, harmonic analysis, amplitude thresholds, and statistical signal metrics. Achieved high classification accuracy through iterative validation and threshold tuning, significantly reducing false positives and false negatives.\n\n      Integrated the model into a real-time decision engine that provides immediate feedback to operators via a production dashboard. Enabled automatic rejection of defective units and rapid corrective intervention, reducing manual inspection dependency and minimizing production downtime.\n\n      The deployed system improved defect detection reliability, enhanced product quality consistency, and contributed to measurable reductions in post-production failure rates and warranty claims.",
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
      "A secure password manager interface was developed with a strong emphasis on balancing usability and advanced security mechanisms. The system enables users to store, generate, and organize credentials for multiple accounts within a structured and streamlined environment. The goal was to reduce friction in password management while ensuring that sensitive information remains fully protected through rigorous security controls.\n\n      From a security standpoint, industry-aligned encryption practices were integrated to safeguard stored credentials. Sensitive data is encrypted prior to storage and remains inaccessible in plaintext form. Authentication workflows are reinforced with secure session handling, access controls, and strict validation mechanisms to prevent unauthorized entry. Additional protections such as password strength enforcement, session expiration, and secure key handling strengthen the overall defensive architecture.\n\n      The interface was designed to prioritize clarity, efficiency, and minimal cognitive load. A clean dashboard layout allows users to quickly search, categorize, and manage credentials without unnecessary navigation complexity. The built-in password generator supports configurable parameters such as length, special characters, and complexity rules, enabling the creation of high-entropy passwords tailored to modern security standards. Clear visual cues and feedback states enhance user confidence during interaction.\n\n      Architecturally, the system separates presentation layers from secure backend operations responsible for encryption and data management. All API communication follows secure transmission protocols, and consistent input validation helps mitigate common vulnerabilities such as injection attacks. This separation of concerns improves scalability, maintainability, and long-term reliability.\n\n      Overall, the project reflects a structured integration of secure engineering principles with user-centered interface design. Strong protection mechanisms operate seamlessly in the background while maintaining a smooth and intuitive user experience, demonstrating that usability and security can coexist without compromise.",
    thumbnail: "/images/projects/password-manager/thumbnail.jpg",
    techStack: ["Python", "Flask", "SQL", "HTML", "CSS", "JavaScript", "Cryptography Libraries"],
    githubUrl: "https://github.com/shridharshini123/Password-Manager.git",
    
  },
  {
    id:"AI resume screener",
    title: "AI Resume Screener – Automated Candidate Evaluation System",
    description:
      "AI-powered system to evaluate resumes and match candidates to job requirements.",
    longDescription:
       "An AI-driven resume screening tool that evaluates candidate profiles against job descriptions. The system uses natural language processing (NLP) and machine learning models to extract key skills, experience, and qualifications from resumes. It then matches these against predefined job criteria, providing a ranked list of candidates based on relevance and fit. The application streamlines the initial screening process, reducing manual effort and improving the accuracy of candidate selection.",

    thumbnail: "/images/projects/Resume-Screening/thumbnail.jpeg",
    techStack: ["Python", "NLP","SBERT"],
    githubUrl: "https://github.com/shridharshini123/AI-Resume-Screening.git",
  },
  {
    id:"Email-Spam-Detection",
    title: "Email Spam Detection – AI-Powered Classification System",
    description:
      "AI-powered system to classify emails as spam or not spam using machine learning.",
    longDescription:
       "Developed an intelligent email spam detection system using supervised machine learning algorithms to accurately classify incoming emails as spam or legitimate (ham). The system processes both email content and metadata, including subject lines, sender information, headers, and embedded links. By combining structured and unstructured data analysis, it provides a comprehensive filtering mechanism that minimizes false positives while maintaining high detection accuracy.\n\n      The core of the system leverages Natural Language Processing (NLP) techniques such as text cleaning, tokenization, stop-word removal, stemming/lemmatization, and TF-IDF vectorization to transform raw email text into meaningful numerical representations. These features are then fed into classification models such as Naïve Bayes, Logistic Regression, and Support Vector Machines to identify spam patterns. Model performance is evaluated using precision, recall, F1-score, and confusion matrix metrics to ensure robust and reliable predictions.\n\n      To improve adaptability, the system is designed to learn from new data over time. As more labeled emails are introduced, the model can be retrained to recognize evolving spam tactics, including phishing keywords, suspicious URLs, and deceptive subject lines. This continuous learning capability strengthens detection accuracy and reduces vulnerability to new spam strategies.\n\n      Additionally, the application includes a user-facing interface where emails are automatically categorized and filtered in real time. Flagged messages are redirected to a spam folder, while legitimate emails remain accessible in the primary inbox. This automated filtering process significantly reduces inbox clutter, enhances productivity, and improves overall email security for users and organizations.",

    thumbnail: "/images/projects/Email-Spam-Detection/thumbnail.jpg",
    techStack: ["Python", "ML", "NLP", "Scikit-learn","Pandas", "Matplotlib"],
    githubUrl: "https://github.com/shridharshini123/Email-Spam-Detection.git",
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

