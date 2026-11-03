import { EthosStory } from '@/types/portfolio';

export const ethosData: EthosStory = {
  quote:
    'Good software isn’t about flashy complexity—it is about quiet reliability, treating security as a non-negotiable habit, and taking pride in building systems people can depend on every single day.',
  storyTitle: 'From Siraha to Scalable Systems',
  personalStory:
    'Growing up in Siraha, Nepal, I was taught early on that respect is earned through honesty, patience, and doing the hard work even when no one is watching. When I moved to Rajkot to study Computer Engineering at RK University, that same work ethic guided me through every late-night coding session, algorithm challenge, and system architecture project—eventually graduating with a 9.15 CGPA and ranking 2nd in the university hackathon.',
  rootsAndHeritage:
    'Today, whether I am hardening an enterprise application against OWASP vulnerabilities, tuning database queries for thousands of pension beneficiaries, or deploying video streaming CDNs, I carry that same mindset. I don’t believe in cutting corners. I believe in writing code that is clean, readable, well-tested, and secure by default.',
  howIWork: [
    {
      title: 'Direct, Humble Communication',
      description:
        'I listen first. I believe in clear technical communication, honest feedback, and working collaboratively with product and engineering teams.',
    },
    {
      title: 'Security as a Daily Habit',
      description:
        'Application security isn’t something you sprinkle on at the end. From input sanitization to WAF rules and penetration testing, security is built into every layer.',
    },
    {
      title: 'Pragmatic & Performance-Focused',
      description:
        'I choose boring, reliable technologies when they solve the problem best, and adopt new tools when they genuinely deliver measurable performance gains.',
    },
    {
      title: 'Continuous Growth & Craftsmanship',
      description:
        'Software moves fast. I actively study security vulnerabilities, test new tools, and take pride in refining my skills every week.',
    },
  ],
  pillars: [
    {
      title: 'Integrity & Work Ethic',
      quote: 'Honest dedication to the problem at hand.',
      description:
        'Grounded in my upbringing in Nepal. Treating every project, team member, and line of code with genuine care and dedication.',
      badge: 'PERSONAL ETHICS',
      icon: 'heart-handshake',
    },
    {
      title: 'Defensive Security',
      quote: 'An insecure system is an incomplete system.',
      description:
        'Hands-on experience in OWASP Top 10 mitigation, Burp Suite, SQLMap, and WAF tuning to protect user data from real-world exploitation.',
      badge: 'VAPT & SECURITY',
      icon: 'shield-check',
    },
    {
      title: 'Production Resilience',
      quote: 'Engineered for real-world reliability.',
      description:
        'Proven track record scaling backends in ASP.NET Core, optimizing SQL Server queries by 25%, and automating GitLab CI/CD pipelines.',
      badge: 'BACKEND ARCHITECTURE',
      icon: 'cpu',
    },
  ],
};
