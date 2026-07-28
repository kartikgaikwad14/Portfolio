// ============================================================
//  PORTFOLIO DATA — Single source of truth for all content
// ============================================================

export const personal = {
  name: 'Kartik Yuwaraj Gaikwad',
  firstName: 'Kartik',
  tagline: 'Building scalable web applications, AI-powered solutions, and real-world software that solves meaningful problems.',
  email: 'gaikwadkartik131@gmail.com',
  github: 'https://github.com/kartikgaikwad14',
  linkedin: 'https://www.linkedin.com/in/kartik-gaikwad-',
  location: 'Pune, Maharashtra, India',
  resume: '/resume.pdf',
  roles: [
    'Final Year Computer Engineering Student',
    'Full Stack Web Developer',
    'Aspiring AI Engineer',
  ],
}

export const about = {
  summary: `I'm a final-year Computer Engineering student at Dr. D. Y. Patil Institute of Technology, Pune, with a strong passion for Full Stack Web Development and an ever-growing curiosity for Artificial Intelligence. I thrive on building practical, scalable software that solves real-world problems — from full-featured community platforms to resume generators and AI-powered tools.

My engineering journey has been shaped by hands-on internships, research publications, leadership roles, and building projects that go live. I bring strong problem-solving skills, a learner's mindset, and the drive to ship quality software. I'm actively seeking roles in Software Engineering and AI where I can contribute meaningfully and grow fast.`,
  highlights: [
    { icon: '🧠', title: 'Full Stack Dev', desc: 'React, Node.js, MongoDB, REST APIs' },
    { icon: '🤖', title: 'AI Enthusiast', desc: 'Machine Learning & AI Applications' },
    { icon: '🏆', title: 'Leader', desc: 'Joint Secretary, Event Coordinator' },
  ],
  stats: [
    { label: 'Projects Built', value: 10, suffix: '+' },
    { label: 'Technologies', value: 20, suffix: '+' },
    { label: 'Leadership Roles', value: 4, suffix: '' },
    { label: 'Certifications', value: 5, suffix: '+' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#38bdf8',
    items: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#818cf8',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'PHP', level: 70 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: '#34d399',
    items: [
      { name: 'MongoDB', level: 80 },
      { name: 'SQL', level: 75 },
      { name: 'DBMS', level: 72 },
    ],
  },
  {
    category: 'Programming',
    icon: '💻',
    color: '#f472b6',
    items: [
      { name: 'C++', level: 78 },
      { name: 'JavaScript', level: 88 },
    ],
  },
  {
    category: 'AI & ML',
    icon: '🤖',
    color: '#fb923c',
    items: [
      { name: 'Machine Learning', level: 65 },
      { name: 'Artificial Intelligence', level: 60 },
    ],
  },
  {
    category: 'Networking',
    icon: '🌐',
    color: '#a78bfa',
    items: [
      { name: 'Networking', level: 72 },
      { name: 'Network Security', level: 68 },
      { name: 'Cyber Security Basics', level: 65 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    color: '#facc15',
    items: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 92 },
      { name: 'Render', level: 75 },
      { name: 'Netlify', level: 78 },
      { name: 'MS Office', level: 80 },
      { name: 'Power BI', level: 65 },
    ],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    color: '#f87171',
    items: [
      { name: 'Problem Solving', level: 92 },
      { name: 'Critical Thinking', level: 88 },
      { name: 'Leadership', level: 85 },
      { name: 'Teamwork', level: 90 },
      { name: 'Communication', level: 85 },
    ],
  },
]

export const internship = {
  company: 'CodeAlpha',
  role: 'Frontend Web Developer Intern',
  duration: 'Jan 2026 – Feb 2026',
  type: 'Remote Internship',
  description:
    'Built responsive web applications using HTML, CSS, and JavaScript during a Frontend Web Development internship at CodeAlpha.',
  projects: [
    { name: 'Image Gallery', icon: '🖼️', desc: 'Responsive photo gallery with lightbox' },
    { name: 'Calculator', icon: '🧮', desc: 'Functional calculator app with clean UI' },
    { name: 'Portfolio Website', icon: '🌐', desc: 'Personal portfolio with modern design' },
  ],
  skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
}

export const projects = [
  {
    id: 1,
    title: 'Baithak',
    subtitle: 'Community Discussion Platform',
    description:
      'A full-featured community platform with real-time communication, role-based access control, and community discussions. Supports WebRTC for video calls and Socket.io for real-time messaging.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebRTC'],
    category: 'Full Stack',
    features: ['Authentication', 'Community Discussions', 'Role-based Access', 'Real-time Chat', 'REST APIs', 'Responsive Design'],
    live: 'https://baithak-abc123.netlify.app/login',
    github: '#',
    featured: true,
    gradient: 'from-blue-500 to-purple-600',
    color: '#818cf8',
  },
  {
    id: 2,
    title: 'Resume Builder',
    subtitle: 'Professional Resume Generator',
    description:
      'A web-based resume builder that helps users create professional resumes with multiple templates, live preview, and one-click PDF download.',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'Backend',
    features: ['Professional Resume Creation', 'PDF Download', 'Responsive UI', 'Multiple Templates'],
    live: 'https://resume-builder-yg6o.onrender.com',
    github: 'https://github.com/kartikgaikwad14',
    featured: false,
    gradient: 'from-emerald-500 to-teal-600',
    color: '#34d399',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    subtitle: 'Personal Brand & Showcase',
    description:
      'Modern personal portfolio showcasing projects, skills, and experience with responsive design, smooth animations, dark/light mode, and premium UI components.',
    tags: ['React', 'JavaScript', 'CSS', 'Framer Motion', 'Vite'],
    category: 'Frontend',
    features: ['Dark/Light Mode', 'Framer Motion Animations', 'Responsive', 'SEO Optimized'],
    live: 'https://portfolio-1-0-1zh1.onrender.com',
    github: 'https://github.com/kartikgaikwad14',
    featured: false,
    gradient: 'from-pink-500 to-rose-600',
    color: '#f472b6',
  },
]

export const publications = [
  {
    title: 'Network Security – Protecting Computer Networks from Intrusions',
    description:
      'Published research explaining firewalls, encryption, intrusion detection systems (IDS), VPNs, Intrusion Prevention Systems (IPS), and applications of Artificial Intelligence and Machine Learning in Network Security.',
    type: 'Published Book Chapter',
    topics: ['Firewalls', 'Encryption', 'IDS/IPS', 'VPNs', 'AI in Security', 'Machine Learning'],
    icon: '📖',
    badge: 'Published Book Chapter',
  },
]

export const certifications = [
  {
    title: 'Bootcamp on UAS/Drone Technology',
    issuer: 'CDAC',
    color: '#38bdf8',
    icon: '✈️',
  },
  {
    title: 'C++ Fundamentals',
    issuer: 'Infosys Springboard',
    color: '#818cf8',
    icon: '💡',
  },
  {
    title: 'React.js',
    issuer: 'HackSeries',
    color: '#34d399',
    icon: '⚛️',
  },
  {
    title: 'Node.js',
    issuer: 'HackSeries',
    color: '#fb923c',
    icon: '🟢',
  },
  {
    title: 'HTML & CSS',
    issuer: 'HackSeries',
    color: '#f472b6',
    icon: '🎨',
  },
  {
    title: 'JavaScript',
    issuer: 'HackSeries',
    color: '#facc15',
    icon: '⚡',
  },
]

export const leadership = [
  {
    role: 'Joint Secretary',
    org: 'DIT Sports Club',
    desc: 'Coordinating sports events, managing club activities, and fostering teamwork and sportsmanship among students.',
    icon: '⚽',
    color: '#38bdf8',
  },
  {
    role: 'Overall Coordinator',
    org: 'Parakram 2026',
    desc: 'Led end-to-end coordination of the college sports fest Parakram 2026, managing 500+ participants.',
    icon: '🏆',
    color: '#818cf8',
  },
  {
    role: 'Event Management Lead',
    org: 'Team ZION',
    desc: 'Spearheaded event planning and execution, ensuring smooth operations and participant engagement.',
    icon: '🎯',
    color: '#34d399',
  },
  {
    role: 'Data Manager',
    org: 'Computer Society of India',
    desc: 'Managed data records, event documentation, and digital assets for the CSI student chapter.',
    icon: '📊',
    color: '#fb923c',
  },
]

export const education = [
  {
    degree: 'BE Computer Engineering',
    institution: 'Dr. D. Y. Patil Institute of Technology, Pune',
    year: '2022 – 2026',
    grade: 'CGPA: 7.78',
    status: 'Final Year',
    icon: '🎓',
    color: '#38bdf8',
  },
  {
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'Maharashtra State Board',
    year: '2022',
    grade: 'Completed',
    status: 'Completed',
    icon: '📚',
    color: '#818cf8',
  },
  {
    degree: 'SSC (Secondary School Certificate)',
    institution: 'Maharashtra State Board',
    year: '2020',
    grade: 'Completed',
    status: 'Completed',
    icon: '🏫',
    color: '#34d399',
  },
]
