import { ProjectItem } from '@/types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    id: 'retirement-benefits',
    slug: 'retirement-benefits',
    title: 'Retirement Benefits Management System',
    tagline: 'Enterprise pension management platform with OCR integration, WAF security, and 20-25% faster data processing.',
    category: 'Enterprise .NET',
    period: 'Jul 2023 - Aug 2025',
    client: 'Version Systems Pvt. Ltd.',
    metrics: [
      { label: 'Data Processing Speed', value: '+20-25%' },
      { label: 'Active Beneficiaries', value: '5,000+' },
      { label: 'Security Vulnerabilities', value: 'Zero Critical' },
    ],
    overview:
      'Engineered core business logic and database modules of an enterprise retirement benefits software application using ASP.NET Core and Microsoft SQL Server. Integrated OCR features, enhanced calculation speeds by 20-25%, and hardened application against OWASP vulnerabilities.',
    architectureStory:
      'Retirement disbursements require precision and zero tolerance for calculation drift. We engineered the core business logic in ASP.NET Core, heavily tuned SQL Server stored procedures and table indexing, and introduced OCR scanning for automated document verification. In addition, we tuned Web Application Firewall (WAF) rules and eliminated SQL Injection and cross-site scripting flaws.',
    techStack: [
      'ASP.NET Core',
      'C#',
      'Microsoft SQL Server',
      'OCR Integration',
      'WAF Tuning',
      'JavaScript',
      'Burp Suite',
    ],
    features: [
      'Core retirement benefit calculation engine supporting dynamic eligibility formulas.',
      'OCR automated document ingestion and identity verification.',
      'Fine-tuned WAF security rules enforcing strict HTTP policies and blocking malicious traffic.',
      'Optimized database queries and stored procedures reducing processing turnaround by 25%.',
      'Comprehensive audit trail logging all disbursement approvals and administrative actions.',
    ],
    securityHighlights: [
      'Mitigated SQL Injection, XSS, and Insecure Deserialization flaws via parameterized queries and sanitization.',
      'Implemented Web Application Firewall (WAF) rule sets to prevent automated probing and bot attacks.',
      'Enforced OWASP session security and anti-CSRF protections across all authenticated endpoints.',
    ],
    githubUrl: 'https://github.com/erbibeksah',
    liveUrl: 'https://erbibeksah.com.np',
    image: '/images/RB.png',
  },
  {
    id: 'exam-proctoring',
    slug: 'exam-proctoring',
    title: 'AI Exam Proctoring Service',
    tagline: 'Real-time online exam monitoring service with AI-based anomaly detection for Learning Management Systems.',
    category: 'AI & Streaming',
    period: 'Dec 2025 - Present',
    client: 'Darvilab Pvt. Ltd.',
    metrics: [
      { label: 'Cheating Detection', value: 'Real-time AI' },
      { label: 'Latency Overhead', value: '< 150ms' },
      { label: 'LMS Integration', value: 'Seamless' },
    ],
    overview:
      'Developed a robust exam proctoring service integrated into the Learning Management System (LMS) at Darvilab. The system monitors remote test-takers in real time and uses AI to flag suspicious activities and prevent cheating.',
    architectureStory:
      'Building remote proctoring requires balancing candidate privacy, network constraints, and detection accuracy. We integrated lightweight computer vision and audio analysis streams with real-time WebSocket signals. The service runs unobtrusively in modern browsers and alerts proctors immediately when anomalies are identified.',
    techStack: ['ASP.NET Core', 'C#', 'React', 'Node.js', 'AI Services', 'WebSockets', 'WebRTC', 'AWS EC2 & S3', 'PostgreSQL'],
    features: [
      'Real-time video and audio stream verification for remote exam sessions.',
      'AI-based detection for suspicious head movement, multiple faces, and unauthorized browser tabs.',
      'Secure proctor dashboard providing synchronized video playback and incident timelines.',
      'Automated session logging with end-to-end encrypted storage on AWS S3.',
    ],
    securityHighlights: [
      'Encrypted WebRTC streams preventing man-in-the-middle packet tampering.',
      'Role-based access allowing only verified educators and proctors to review exam audit trails.',
      'Secure token-based session initialization preventing exam credential sharing.',
    ],
    githubUrl: 'https://github.com/erbibeksah',
    liveUrl: 'https://erbibeksah.com.np',
    image: '/images/exam-proctoring.png',
  },
  {
    id: 'video-cdn',
    slug: 'video-cdn',
    title: 'Low-Latency Video Streaming CDN',
    tagline: 'Scalable Content Delivery Network architecture supporting smooth video delivery for online courses and live streams.',
    category: 'DevOps & Cloud',
    period: 'Dec 2025 - Present',
    client: 'Darvilab Pvt. Ltd.',
    metrics: [
      { label: 'Buffer Time', value: '-45% Reduced' },
      { label: 'Global Availability', value: 'Multi-Region' },
      { label: 'Stream Stability', value: '99.9% Smooth' },
    ],
    overview:
      'Architected and deployed a Content Delivery Network (CDN) to support smooth, scalable video streaming for live sessions and on-demand courses across multiple devices and geographic regions.',
    architectureStory:
      'To provide learners with lag-free streaming even over constrained mobile networks, we configured adaptive bitrate transcoding and edge caching. By leveraging cloud storage, edge CDN points of presence, and tokenized signed URLs, we reduced video start time and prevented unauthorized content rippage.',
    techStack: ['CDN Architecture', 'AWS S3', 'CloudFront', 'Node.js', 'HLS Streaming', 'React Video Player'],
    features: [
      'Adaptive bitrate video encoding optimizing playback across mobile, tablet, and desktop.',
      'Edge caching reducing video load latency and origin server pressure.',
      'Signed cookie and URL authentication preventing hotlinking and unauthorized downloads.',
      'Custom React-based media player with progressive buffering and playback analytics.',
    ],
    securityHighlights: [
      'Time-limited signed URLs ensuring paid courses cannot be shared publicly.',
      'DDoS mitigation and origin shielding through edge CDN firewalls.',
    ],
    githubUrl: 'https://github.com/erbibeksah',
    liveUrl: 'https://erbibeksah.com.np',
    image: '/images/video-cdn.png',
  },
  {
    id: 'devops-migration',
    slug: 'devops-migration',
    title: 'DevOps Automation & SCM Modernization',
    tagline: 'End-to-end migration from SVN to self-hosted GitLab with Jenkins CI/CD and SonarQube quality enforcement.',
    category: 'DevOps & Cloud',
    period: '2024 - 2025',
    client: 'Version Systems Pvt. Ltd.',
    metrics: [
      { label: 'Release Efficiency', value: '+40% Boost' },
      { label: 'Build Automation', value: '100% CI/CD' },
      { label: 'Code Quality Gate', value: 'SonarQube' },
    ],
    overview:
      'Led the end-to-end migration from traditional SVN to a self-hosted GitLab server. Configured Jenkins pipelines and integrated SonarQube for static code analysis, improving release workflow efficiency by 40%.',
    architectureStory:
      'Transitioning a development team from centralized SVN to modern Git required both cultural leadership and technical precision. We preserved complete revision history, set up branch protection rules, containerized build environments with Docker, and introduced automated SonarQube quality gates that caught potential bugs before deployment.',
    techStack: ['GitLab CI/CD', 'Jenkins', 'Docker', 'SonarQube', 'Playwright', 'SVN', 'Linux Bash'],
    features: [
      'Zero-loss history migration from legacy SVN repositories to self-hosted GitLab.',
      'Automated Jenkins CI/CD pipelines executing builds, unit tests, and security scans on push.',
      'SonarQube static analysis gates blocking merges on security vulnerabilities or code smells.',
      'Automated end-to-end test execution with Playwright.',
    ],
    securityHighlights: [
      'Centralized secrets management in CI/CD preventing API keys from entering source code.',
      'Automated vulnerability scanning on third-party dependencies in the pipeline.',
      'Strict branch protection requiring passing checks and peer review approvals.',
    ],
    githubUrl: 'https://github.com/erbibeksah',
    liveUrl: 'https://erbibeksah.com.np',
    image: '/images/devops-migration.jpg',
  },
];
