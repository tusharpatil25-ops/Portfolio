export const personalInfo = {
  name: 'Tushar U. Patil',
  shortName: 'Tushar Patil',
  title: 'Software Developer',
  tagline: 'AI & Web Technologies Enthusiast',
  email: 'tusharpatil.dev@gmail.com',
  phone: '+91 98765 43210',
  location: 'Ratnagiri, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/tushar-patil-427328412/',
  github: 'https://github.com/tusharpatil25-ops',
  hackerrank: 'https://www.hackerrank.com/profile/patiltu25',
  resumeUrl: '/Tushar_Patil_Resume.pdf',
  profileImage: '/profile.jpeg',
} as const

export const aboutText = [
  'I am an aspiring Software Developer currently pursuing M.Sc. in Computer Science with a CGPI of 8.16.',
  'I enjoy building modern web applications, AI-powered solutions, and solving real-world problems through software development.',
  'I have hands-on experience in Java, Python, JavaScript, PHP, MySQL, Firebase, Flask, and Machine Learning.',
  'I completed a 137-hour IT Internship where I worked on Speech-to-Text applications and gained practical software development experience.',
  'I am passionate about continuous learning and building scalable software solutions.',
]

export const skills = {
  'Programming Languages': ['Java', 'Python', 'JavaScript', 'PHP'],
  Frontend: ['HTML', 'CSS', 'JavaScript'],
  Backend: ['Node.js', 'Flask', 'PHP'],
  Database: ['MySQL', 'Firebase'],
  'AI/ML': ['Scikit-learn', 'Pandas', 'NumPy', 'NLTK'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'XAMPP'],
} as const

export const projects = [
  {
    id: 'pet-shop-web',
    title: 'Pet Shop Management System',
    category: 'web',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Inventory Management',
      'Customer Management',
      'Authentication',
      'Dashboard',
      'CRUD Operations',
      'Responsive UI',
    ],
    github: 'https://github.com/tusharpatil/pet-shop-management',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'pet-shop-android',
    title: 'PetShop Android Application',
    category: 'mobile',
    technologies: ['Kotlin', 'Firebase', 'Firestore', 'Material Design 3', 'Razorpay'],
    features: [
      'Online Pet Purchase',
      'Wishlist',
      'Cart',
      'Payment',
      'Real-time Chat',
      'Push Notifications',
      'Admin Panel',
      'Buyer/Seller Module',
    ],
    github: 'https://github.com/tusharpatil/petshop-android',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'speech-to-text',
    title: 'Speech-to-Text Web Application',
    category: 'web',
    technologies: ['JavaScript', 'Node.js', 'Python', 'HTML', 'CSS'],
    features: [
      'Speech Recognition',
      'Audio Upload',
      'Language Selection',
      'Real-time Conversion',
    ],
    github: 'https://github.com/tusharpatil/speech-to-text',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 'hate-speech',
    title: 'Hate Speech Detection System',
    category: 'ai',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK'],
    features: [
      'Machine Learning',
      'NLP',
      'Text Classification',
      'Real-time Prediction',
      'Content Moderation',
    ],
    github: 'https://github.com/tusharpatil/hate-speech-detection',
    color: 'from-orange-500/20 to-red-500/20',
  },
] as const

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'ai'

export const projectFilters: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'AI/ML', value: 'ai' },
]

export const experience = [
  {
    title: 'IT Intern',
    company: 'Sutradhar Project Consultancy Pvt. Ltd.',
    duration: '137 Hours',
    works: [
      'Speech-to-Text Web Application',
      'Frontend Development',
      'Backend Development',
      'Testing',
      'Debugging',
      'Software Development Practices',
    ],
  },
] as const

export const education = [
  {
    degree: 'M.Sc Computer Science',
    institution: 'University of Mumbai',
    score: 'CGPI 8.16',
    period: '2024-2026',
  },
  {
    degree: 'Bachelor of Science — Computer Science',
    institution: 'University of Mumbai',
    score: 'CGPI 7.02',
    period: '2021-2024',
  },
  {
    degree: 'HSC',
    institution: 'Maharashtra State Board',
    score: '77.50%',
    period: 'Completed',
  },
] as const

export const certifications = [
  {
    title: 'IT Internship Certificate',
    issuer: 'Sutradhar Project Consultancy Pvt. Ltd.',
    icon: 'briefcase' as const,
    viewLink: 'https://www.linkedin.com/in/tushar-patil-427328412/details/experience/',
    downloadLink: 'https://www.linkedin.com/in/tushar-patil-427328412/details/experience/',
  },
  {
    title: 'HackerRank Java (Basic)',
    issuer: 'HackerRank',
    icon: 'code' as const,
    viewLink: 'https://www.hackerrank.com/certificates/iframe/2a5c1c83f293',
    downloadLink: 'https://www.hackerrank.com/certificates/iframe/2a5c1c83f293',
  },
  {
    title: 'HackerRank SQL (Basic)',
    issuer: 'HackerRank',
    icon: 'database' as const,
    viewLink: 'https://www.hackerrank.com/certificates/iframe/235906107719',
    downloadLink: 'https://www.hackerrank.com/certificates/iframe/235906107719',
  },
  {
    title: 'HackerRank Python (Basic)',
    issuer: 'HackerRank',
    icon: 'code' as const,
    viewLink: 'https://www.hackerrank.com/certificates/iframe/02eb69e573c1',
    downloadLink: 'https://www.hackerrank.com/certificates/iframe/02eb69e573c1',
  },
  {
    title: 'Java Programming: Java Fundamental Concepts',
    issuer: 'Coursera',
    icon: 'coffee' as const,
    viewLink: 'https://www.coursera.org/account/accomplishments/verify/95DA41BHWU2W',
    downloadLink: 'https://www.coursera.org/account/accomplishments/verify/95DA41BHWU2W',
  },
  {
    title: 'Java Classes and Objects',
    issuer: 'Coursera',
    icon: 'coffee' as const,
    viewLink: 'https://www.coursera.org/account/accomplishments/verify/3323OAIC2SLS',
    downloadLink: 'https://www.coursera.org/account/accomplishments/verify/3323OAIC2SLS',
  },
  {
    title: 'Typescript in React: Higher Order Components',
    issuer: 'Coursera',
    icon: 'code' as const,
    viewLink: 'https://www.coursera.org/account/accomplishments/verify/VCRMO76URTOC',
    downloadLink: 'https://www.coursera.org/account/accomplishments/verify/VCRMO76URTOC',
  },
  {
    title: 'Java Built-in Data Structures',
    issuer: 'Coursera',
    icon: 'coffee' as const,
    viewLink: 'https://www.coursera.org/account/accomplishments/verify/B9DHH5TBOW8V',
    downloadLink: 'https://www.coursera.org/account/accomplishments/verify/B9DHH5TBOW8V',
  },
  {
    title: 'Python for Data Analysis: Pandas & NumPy',
    issuer: 'Coursera',
    icon: 'chart' as const,
    viewLink: 'https://www.coursera.org/account/accomplishments/verify/A7FSF0KVL4LJ',
    downloadLink: 'https://www.coursera.org/account/accomplishments/verify/A7FSF0KVL4LJ',
  },
  {
    title: 'GenAI Fundamentals',
    issuer: 'Coursera',
    icon: 'sparkles' as const,
    viewLink: 'https://www.coursera.org/account/accomplishments/verify/Q219NCDA0MEQ',
    downloadLink: 'https://www.coursera.org/account/accomplishments/verify/Q219NCDA0MEQ',
  },
] as const

export const achievements = [
  { title: '5★ Java on HackerRank', icon: 'star' },
  { title: '5★ Python on HackerRank', icon: 'star' },
  { title: '137-Hour Internship Completed', icon: 'briefcase' },
  { title: '10+ Professional Certifications', icon: 'award' },
  { title: 'AI & Machine Learning Projects', icon: 'brain' },
] as const

export const stats = [
  { label: 'Projects', value: 4, suffix: '+' },
  { label: 'Certifications', value: 10, suffix: '+' },
  { label: 'Internship Hours', value: 137, suffix: '' },
  { label: 'CGPI (M.Sc)', value: 8.16, suffix: '' },
] as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export const typingRoles = [
  'Software Developer',
  'AI & Web Technologies Enthusiast',
  'Full Stack Developer',
  'Machine Learning Enthusiast',
]
