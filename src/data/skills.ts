import { SkillGroup } from '@/types/portfolio';

export const skillsData: SkillGroup[] = [
  {
    category: 'Languages & Core',
    description: 'Object-oriented, backend, and script languages used across production systems.',
    skills: [
      { name: 'C#', category: 'Language', highlight: true },
      { name: '.NET Core / Framework', category: 'Framework', highlight: true },
      { name: 'Node.js', category: 'Backend', highlight: true },
      { name: 'React', category: 'Frontend', highlight: true },
      { name: 'Python', category: 'Language' },
      { name: 'Java', category: 'Language' },
      { name: 'JavaScript / TypeScript', category: 'Frontend' },
    ],
  },
  {
    category: 'Frameworks, Tools & Testing',
    description: 'Tools and frameworks for API design, automated testing, and code quality.',
    skills: [
      { name: 'RESTful API Design', category: 'Architecture', highlight: true },
      { name: 'Playwright Automation', category: 'Testing', highlight: true },
      { name: 'SonarQube Quality Gates', category: 'Testing', highlight: true },
      { name: 'Postman', category: 'Testing' },
      { name: 'NUnit', category: 'Testing' },
      { name: 'Git & GitLab', category: 'VCS', highlight: true },
      { name: 'Jenkins CI/CD', category: 'DevOps' },
      { name: 'Docker', category: 'DevOps', highlight: true },
      { name: 'IIS Server', category: 'Infrastructure' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    description: 'Cloud services, CDN deployment, and environment automation.',
    skills: [
      { name: 'AWS EC2 & S3', category: 'Cloud', highlight: true },
      { name: 'AWS IAM & CloudFront', category: 'Cloud' },
      { name: 'Azure Services', category: 'Cloud', highlight: true },
      { name: 'CDN Video Streaming', category: 'Cloud', highlight: true },
      { name: 'Linux & Shell Scripting', category: 'Infrastructure' },
    ],
  },
  {
    category: 'Database Management',
    description: 'Relational data modeling, query optimization, and transaction safety.',
    skills: [
      { name: 'Microsoft SQL Server', category: 'Database', highlight: true },
      { name: 'PostgreSQL', category: 'Database', highlight: true },
      { name: 'Stored Procedures & Triggers', category: 'Database' },
      { name: 'Query Optimization & Indexing', category: 'Database', highlight: true },
    ],
  },
  {
    category: 'Application Security (VAPT)',
    description: 'Hands-on offensive testing, vulnerability remediation, and OWASP defense.',
    skills: [
      { name: 'OWASP Top 10 Mitigation', category: 'Security', highlight: true },
      { name: 'Burp Suite', category: 'Security', highlight: true },
      { name: 'SQLMap', category: 'Security', highlight: true },
      { name: 'XSS, SQLi & Deserialization Defense', category: 'Security', highlight: true },
      { name: 'Web Application Firewall (WAF) Tuning', category: 'Security' },
    ],
  },
  {
    category: 'Core Computer Science Concepts',
    description: 'Foundational CS principles applied daily in production engineering.',
    skills: [
      { name: 'Data Structures & Algorithms', category: 'Concept', highlight: true },
      { name: 'Performance Optimization', category: 'Concept', highlight: true },
      { name: 'Defensive Security Architecture', category: 'Concept' },
      { name: 'System Scalability', category: 'Concept' },
    ],
  },
];
