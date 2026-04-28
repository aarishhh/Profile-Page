import { Profile } from '../interfaces/profile.interface';

export const PROFILE_DATA: Profile = {
  name: 'Aarish Asif Master',
  title: 'Aspiring Developer | C++, Data Structures & Web',
  bio: `Passionate developer with a strong foundation in data structures, algorithms, and web technologies.
  I build clean, responsive web experiences and love solving complex problems with efficient, scalable code.
  Currently pursuing BCA at Ajeenkya DY Patil University, Pune.`,
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarish&backgroundColor=0d1526',
  location: 'Pune, Maharashtra',
  email: 'aarish3344@gmail.com',
  skills: [
    { name: 'HTML & CSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'C++', level: 95, category: 'Language' },
    { name: 'Java', level: 70, category: 'Language' },
    { name: 'C', level: 100, category: 'Language' },
    { name: 'Python', level: 60, category: 'Language' },
    { name: 'Data Structures', level: 90, category: 'Backend' },
    { name: 'Algorithms', level: 90, category: 'Backend' },
    { name: 'Git & GitHub', level: 100, category: 'DevOps' },
  ],
  projects: [
    {
      title: 'TrailPilot',
      description: 'A responsive web platform for hiking trail discovery and planning. Improved UI/UX using HTML and CSS to simplify route navigation and deliver a consistent cross-device user experience.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/aarishhh/TrailPilot.git',
      liveUrl: 'https://aarishhh.github.io/TrailPilot/',
      featured: true,
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'GovtVault Secure',
      description: 'A secure web application for storing and managing government documents. Built with a TypeScript frontend, Node.js backend, and Supabase for authentication and database — with a focus on data security and clean UI.',
      tech: ['TypeScript', 'Supabase', 'Node.js', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/aarishhh/GovtVault-Secure',
      featured: true,
      gradient: 'from-cyan-500 to-blue-600',
    },
  ],
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/aarishhh', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/aarish-katawala-985193345/', icon: 'linkedin' },
  ],
  certificates: [
    {
      title: 'Fundamentals of Git and GitHub',
      issuer: 'Ace Academy',
      date: 'February 2025',
      credentialUrl: 'https://d3s27eh1wskpwv.cloudfront.net/placement/verification_photos27fbbf37-d399-48fc-9e1f-0d3b658602b9.pdf',
      skills: ['Git', 'GitHub', 'GitHub Actions', 'Version Control'],
    },
    // ✏️ Add more certificates below — copy the block above
    // {
    //   title: 'Your Certificate Title',
    //   issuer: 'Issuing Organization',
    //   date: 'Month Year',
    //   credentialUrl: 'https://link-to-credential.com',  // optional
    //   skills: ['Skill 1', 'Skill 2'],                   // optional
    // },
  ],
  education: [
    {
      degree: 'BCA (Bachelor of Computer Applications)',
      institution: 'Ajeenkya DY Patil University',
      period: '2024 - 2027',
      status: 'ongoing',
    },
    {
      degree: 'Class XII',
      institution: 'Sardar Dastur Hormazdiar Jr College',
      period: '2024',
      grade: '50%',
      status: 'completed',
    },
    {
      degree: 'Class X',
      institution: 'St Xaviers High School Fort',
      period: '2022',
      grade: '63%',
      status: 'completed',
    },
    // ✏️ Add more education entries below
  ],
};
