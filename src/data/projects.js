export const projects = [
  {
    id: 1,
    title: 'AyurLink \u2013 FHIR-Compliant AYUSH Healthcare Terminology Platform',
    slug: 'ayurlink',
    shortDescription: 'Healthcare terminology platform mapping AYUSH clinical concepts to WHO ICD-11 standards.',
    description: 'Engineered a healthcare terminology platform for the Ministry of AYUSH, mapping 7,300+ NAMASTE clinical concepts to WHO ICD-11 (TM2 & Biomedicine) standards. Engineered optimized API response workflows and data retrieval mechanisms, streamlining the processing of 7,300+ healthcare terminology datasets for enhanced efficiency.',
    features: [
      'FHIR-Compliant Terminology mapping',
      'Optimized API response workflows',
      'Dynamic frontend workflows for searching, filtering, and validating AYUSH clinical entries'
    ],
    techStack: ['FastAPI', 'React', 'Vite', 'Python', 'MicroServices', 'PostgreSQL', 'REST APIs'],
    githubUrl: 'https://github.com/Amansrivastava24/ayurlink-api.git',
    liveUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    gallery: [],
    category: 'fullstack',
    status: 'published'
  },
  {
    id: 2,
    title: 'UdaanPath-AI Driven Career Guidance and Recommendation Platform',
    slug: 'udaanpath',
    shortDescription: 'Context-aware AI Career Counselor using the OpenAI API to provide real-time guidance.',
    description: 'Built a context-aware AI Career Counselor using the OpenAI API to provide real-time, conversational career guidance. Created a RESTful API backend using Express.js and Mongoose, featuring automated global error-handling middleware and robust validation schemas.',
    features: [
      'AI Career Counselor powered by OpenAI API',
      'RESTful API backend with Express.js and Mongoose',
      'Automated global error-handling middleware',
      'Reduced API response times by 30% using async parallel queries (200ms)'
    ],
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'OpenAI API', 'Oauth2.0', 'REST APIs'],
    githubUrl: 'https://github.com/Amansrivastava24/UdaanPath.git',
    liveUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
    gallery: [],
    category: 'fullstack',
    status: 'published'
  },
  {
    id: 3,
    title: 'WaterBus – Local Business Management System',
    slug: 'waterbus',
    shortDescription: 'A full-stack web application built to digitize a local mineral water delivery business.',
    description: 'Developed a custom management software solution for a local mineral water delivery service struggling with inefficient paper records. Built using the MERN stack and Tailwind CSS, this centralized digital system tracks deliveries, customers, and operations, ultimately saving time, reducing manual errors, and modernizing their daily workflow.',
    features: [
      'Centralized tracking for deliveries and customers',
      'Digital migration from paper-based ledgers',
      'Streamlined daily operational workflow'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Amansrivastava24/WaterBus.git',
    liveUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&q=80',
    gallery: [],
    category: 'fullstack',
    status: 'published'
  }
];

export const projectCategories = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'AI/ML', value: 'ai-ml' }
];
