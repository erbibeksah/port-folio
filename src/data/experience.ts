import { ExperienceItem, CertificateItem, AchievementItem } from '@/types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'darvilab',
    role: 'Software Engineer',
    company: 'Darvilab Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    startDate: 'Dec 2025',
    endDate: 'Present',
    type: 'Full-time',
    summary:
      'Engineering mission-critical services including AI-powered online exam proctoring and low-latency video streaming CDN architecture.',
    achievements: [
      'Developed and implemented an Exam Proctoring Service: Built a robust exam proctoring feature for the Learning Management System (LMS) with real-time monitoring and AI-based detection to prevent cheating during remote assessments.',
      'Built a CDN for Seamless Video Streaming: Architected and deployed a Content Delivery Network (CDN) to support smooth, low-latency video streaming for online courses and live sessions across multiple devices and regions.',
      'Engineered dynamic, component-based user interfaces using React, enhancing application responsiveness and overall learner experience.',
    ],
    technologies: ['React', 'Node.js', 'AI Services', 'CDN Architecture', 'AWS S3 & CloudFront', 'Video Streaming'],
  },
  {
    id: 'version-systems',
    role: 'Software Engineer',
    company: 'Version Systems Pvt. Ltd.',
    location: 'Rajkot, Gujarat, India',
    startDate: 'Jul 2023',
    endDate: 'Aug 2025',
    type: 'Full-time',
    summary:
      'Developed enterprise web applications with ASP.NET Core, conducted OWASP vulnerability assessments, and optimized relational database systems.',
    achievements: [
      'Conducted Vulnerability Assessment and Penetration Testing (VAPT) aligned with OWASP security best practices, successfully identifying and remediating critical XSS, SQL Injection, and Insecure Deserialization flaws.',
      'Engineered core business logic and database functionality for enterprise retirement benefits software, increasing processing speed by 20-25% for 5,000+ users.',
      'Designed, optimized, and maintained complex relational databases using Microsoft SQL Server and stored procedures.',
      'Enhanced dynamic user interfaces with JavaScript and React, improving usability and response times.',
      'Collaborated across engineering and business teams to ensure all implementations aligned with rigorous regulatory and security standards.',
    ],
    technologies: [
      'ASP.NET Core',
      'C#',
      '.NET Framework',
      'Microsoft SQL Server',
      'PostgreSQL',
      'React',
      'JavaScript',
      'Burp Suite',
      'SQLMap',
      'Playwright',
    ],
  },
  {
    id: 'elite-techno',
    role: 'Intern (Python for AI/ML)',
    company: 'Elite Techno Groups',
    location: 'Remote, India',
    startDate: 'Aug 2021',
    endDate: 'Sep 2021',
    type: 'Internship',
    summary:
      'Conducted data preprocessing, feature engineering, and model evaluation to improve prediction accuracy for AI/ML projects.',
    achievements: [
      'Implemented data cleaning, normalization, and feature extraction pipelines in Python.',
      'Evaluated machine learning regression and classification models to ensure reliable project outcomes.',
    ],
    technologies: ['Python', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    id: 'rk-university',
    role: 'B.Tech in Computer Engineering',
    company: 'RK University',
    location: 'Rajkot, Gujarat, India',
    startDate: '2020',
    endDate: '2024',
    type: 'Education',
    grade: 'CGPA: 9.15 / 10',
    summary:
      'Graduated with distinction (9.15 CGPA). Deep coursework in Data Structures, Algorithms, Secure Software Engineering, Relational Databases, and Network Security.',
    achievements: [
      'Maintained academic excellence throughout all 8 semesters, graduating with an outstanding 9.15 / 10 CGPA.',
      '2nd Rank in Mobile-Code-e-Thon Hackathon organized by RK University and Gateway Group of Companies.',
      'Completed industry-recognized certifications in C#, Information Security, and Ethical Hacking.',
    ],
    technologies: ['C#', 'Java', 'Python', 'Algorithms', 'Data Structures', 'Database Management', 'Cybersecurity'],
  },
  {
    id: 'sagarmatha-school',
    role: 'Higher Secondary (Science)',
    company: 'Sagarmatha Secondary School',
    location: 'Siraha, Nepal',
    startDate: '2018',
    endDate: '2020',
    type: 'Education',
    grade: 'CGPA: 3.29 / 4',
    summary:
      'Completed secondary education with focus on Physics, Chemistry, and Advanced Mathematics, developing strong analytical and problem-solving fundamentals.',
    achievements: [
      'Built core foundations in mathematical reasoning and scientific principles.',
      'Participated in science exhibitions and inter-school academic competitions.',
    ],
    technologies: ['Mathematics', 'Physics', 'Analytical Problem Solving'],
  },
];

export const certificatesData: CertificateItem[] = [
  {
    title: 'Foundational C# with Microsoft',
    issuer: 'Microsoft',
    date: 'Oct 2024',
  },
  {
    title: 'Fundamentals of Information Security',
    issuer: 'Infosys',
    date: 'Nov 2022',
  },
  {
    title: 'Ethical Hacking',
    issuer: 'One Byte Labs',
    date: 'Jan 2023',
  },
  {
    title: 'Introduction to Networks',
    issuer: 'Cisco',
    date: 'Jan 2023',
  },
  {
    title: 'Develop Soft Skills that Industry Demands',
    issuer: 'TCS',
    date: 'Dec 2022',
  },
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'Mobile-Code-e-Thon Hackathon',
    rank: '2nd Rank (University Level)',
    organizer: 'RK University & Gateway Group of Companies',
    year: '2022',
    description:
      'Awarded 2nd position among university-wide teams for rapid application prototyping, clean architecture, and robust coding under competitive time constraints.',
  },
];
