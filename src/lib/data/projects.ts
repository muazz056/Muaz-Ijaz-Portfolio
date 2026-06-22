export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
  tags: string[];
  year: string;
  client: string;
  role: string;
  problem: string;
  solution: string;
  impact: string[];
  liveUrl?: string;
  status: 'Deployed Live' | 'Production Grade';
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'ConvoHarbor',
    slug: 'convoharbor',
    category: 'Custom Development & AI',
    description: 'Production-grade multi-tenant SaaS chatbot platform supporting 11 AI providers with RAG pipeline and real-time streaming',
    image: '/Convoharbor-img.png',
    gallery: [
      '/Convoharbor-img.png',
    ],
    tags: ['Flask', 'React', 'PostgreSQL', 'pgvector', 'LangChain', 'RAG', 'Redis', 'Celery', 'Docker'],
    year: '2024',
    client: 'SaaS Platform',
    role: 'Full-stack Development, AI/ML Engineering',
    problem: 'Businesses need intelligent chatbot solutions that can scale across multiple tenants, support various AI providers, and handle complex document-based queries with high accuracy.',
    solution: 'Built a full RAG pipeline with query rewriting, HyDE, and pgvector cosine similarity search. Implemented dual embedding storage (Gemini + OpenAI), multi-strategy web crawler, Fernet AES encryption, JWT RBAC with 9 permissions, and deployed with Docker, Nginx, Redis, and Celery async queues.',
    impact: [
      '11 AI providers supported with automatic fallback',
      'Full RAG pipeline with dual embedding storage',
      'Multi-strategy web crawler for knowledge base ingestion',
      'Fernet AES-128-CBC field-level encryption',
      'Multi-service architecture with Docker and Celery'
    ],
    liveUrl: 'https://convoharbor.vercel.app',
    status: 'Deployed Live'
  },
  {
    id: '2',
    title: 'Studium',
    slug: 'studium',
    category: 'Custom Development & AI',
    description: 'AI-powered learning platform that generates notes, flashcards, quizzes, summaries, and mindmaps from uploaded content',
    image: '/studium.png',
    gallery: [
      '/studium.png',
    ],
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Celery', 'OpenAI', 'Gemini', 'Groq', 'Stripe'],
    year: '2024',
    client: 'EdTech Platform',
    role: 'Full-stack Development, AI Integration',
    problem: 'Students waste hours manually summarizing textbooks, creating flashcards, and organizing notes. They need an automated solution that transforms any content source into a complete study kit.',
    solution: 'Built an AI-powered platform that ingests PDFs, DOCX files, YouTube URLs, and web links to automatically generate study materials. Implemented SM-2 spaced repetition algorithm, Celery + Redis background job pipeline, Stripe subscription billing, and 14 SQLAlchemy database models.',
    impact: [
      'Multi-source content ingestion (PDF, DOCX, YouTube, Web)',
      'SM-2 spaced repetition for optimal review scheduling',
      'Background job pipeline with real-time job status tracking',
      'Stripe subscription billing with 3 tiers',
      '14 SQLAlchemy database models'
    ],
    liveUrl: 'https://studium-rho.vercel.app',
    status: 'Deployed Live'
  },
  {
    id: '3',
    title: 'Meeting Assistant',
    slug: 'meeting-assistant',
    category: 'Custom Development & AI',
    description: 'Cross-platform Electron desktop app with stealth overlay window',
    image: '/stealth-assist.png',
    gallery: [
      '/stealth-assist.png',
    ],
    tags: ['Electron', 'React', 'TypeScript', 'Express', 'MongoDB', 'Deepgram', 'Gemini', 'GPT'],
    year: '2024',
    client: 'Productivity Tool',
    role: 'Full-stack Development, Desktop App Engineering',
    problem: 'Job seekers need an effective way to simulate real interview conditions with AI assistance that cannot be detected by screen-sharing software during live interviews.',
    solution: 'Developed a cross-platform Electron app with transparent overlay window using Windows SetWindowDisplayAffinity API via FFI. Built multi-modal speech pipeline with 3 STT backends, context-aware AI answer generation with STAR/short/detailed/bullets modes, and cross-platform packaging.',
    impact: [
      '3 STT backends with 50+ language support',
      'Context-aware AI with resume, JD, and company info',
      'Cross-platform: Windows (NSIS), macOS (DMG), Linux (AppImage)',
      'Freemium token/credit system with Stripe billing'
    ],
    liveUrl: 'https://stealth-assist-ai.vercel.app',
    status: 'Deployed Live'
  },
  {
    id: '4',
    title: 'Track Hero',
    slug: 'track-hero',
    category: 'Custom Development & AI',
    description: 'Comprehensive fullstack platform for motorsport event scheduling, registration, and race timing management',
    image: '/track-hero-img.png',
    gallery: [
      '/track-hero-img.png',
    ],
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'Django', 'PostgreSQL', 'Stripe'],
    year: '2024',
    client: 'Motorsport Events',
    role: 'Full-stack Development',
    problem: 'Motorsport event organizers need a unified platform for event scheduling, participant registration, real-time race timing, and secure payment processing.',
    solution: 'Developed features in a comprehensive fullstack platform using React with Redux Toolkit for state management, Django REST Framework for API, PostgreSQL for data storage, and Stripe for payment processing with real-time data synchronization.',
    impact: [
      'Real-time race timing management',
      'Secure Stripe payment integration',
      'Event scheduling and registration system',
      'Real-time data synchronization'
    ],
    liveUrl: 'https://trackhero.com',
    status: 'Deployed Live'
  },
  {
    id: '19',
    title: 'Heylo',
    slug: 'heylo',
    category: 'Custom Development & AI',
    description: 'Healthcare support platform connecting support professionals with residents through secure video consultations and real-time chat',
    image: '/heylo-img.png',
    gallery: [
      '/heylo-img.png',
    ],
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Express'],
    year: '2024',
    client: 'Heylo Healthcare',
    role: 'Full-stack Development',
    problem: 'Healthcare professionals need a secure digital platform to provide continuous care, personalized guidance, and structured development support to patients through video consultations and real-time communication.',
    solution: 'Built a comprehensive healthcare support platform with secure video consultations, real-time chat support via Socket.io, personalized development and care tracking, and remote accessibility for continuous monitoring.',
    impact: [
      'Secure video consultations',
      'Real-time chat support for ongoing assistance',
      'Personalized development and care tracking',
      'Remote accessibility for continuous monitoring',
      'Structured communication between professionals and patients'
    ],
    liveUrl: 'https://www.heylo.com',
    status: 'Deployed Live'
  },
  {
    id: '20',
    title: 'Zabihah',
    slug: 'zabihah',
    category: 'Custom Development & AI',
    description: 'US-based halal food and mosque discovery platform with mobile apps for iOS and Android with location-based services',
    image: '/zabihah-img.png',
    gallery: [
      '/zabihah-img.png',
    ],
    tags: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Firebase', 'Stripe'],
    year: '2024',
    client: 'Zabihah LLC',
    role: 'Mobile Application Development',
    problem: 'Muslims and halal food lovers need a reliable platform to discover halal restaurants, mosques, and Islamic services with verified listings and real-time information across 100+ countries.',
    solution: 'Developed iOS and Android mobile applications with location-based services, map-based navigation, intuitive UI/UX for browsing and filtering, and real-time updated listings with reviews and ratings.',
    impact: [
      '53,000+ verified halal listings worldwide',
      '500K+ app downloads across iOS and Android',
      'Location-based halal restaurant and mosque discovery',
      'Human-curated listings since 1998',
      'Multi-country coverage in 100+ countries'
    ],
    liveUrl: 'https://www.zabihah.com',
    status: 'Deployed Live'
  },
  {
    id: '21',
    title: 'Sonexa Healthcare',
    slug: 'sonexa-healthcare',
    category: 'Custom Development & AI',
    description: 'Patient-nurse management system with automated transcription, smart note generation, and template-based data population',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    ],
    tags: ['React Native', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'AI/ML'],
    year: '2024',
    client: 'Sonexa Healthcare',
    role: 'Full-stack Development, AI Integration',
    problem: 'Healthcare facilities struggle with manual documentation of patient-nurse interactions, leading to errors, inefficiency, and delayed reporting in patient care workflows.',
    solution: 'Built a comprehensive platform with automated speech-to-text transcription, AI-powered smart note generation, template-based data population, and mobile-first experience for field nurses across iOS and Android.',
    impact: [
      'Automated transcription of patient visit recordings',
      'AI-powered structured healthcare note generation',
      'Template-based data population for consistency',
      'Multi-role access: Super Admin, Admin, Nurse',
      'Mobile-first experience for field nurses'
    ],
    status: 'Production Grade'
  },
  {
    id: '22',
    title: 'Legal Partner Platform',
    slug: 'legal-partner',
    category: 'Custom Development & AI',
    description: 'Digital platform connecting clients with verified legal experts through real-time video consultations and chat-based communication',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    ],
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Express', 'Stripe'],
    year: '2024',
    client: 'Legal Partner',
    role: 'Full-stack Development',
    problem: 'Clients face barriers accessing legal expertise due to geographical limitations, scheduling conflicts, and high costs of traditional legal consultation methods.',
    solution: 'Built a digital platform enabling real-time video consultations, instant chat-based communication, on-demand legal services, and expert matching across multiple legal domains.',
    impact: [
      'Real-time video consultations with legal experts',
      'Instant messaging for quick legal queries',
      'On-demand legal service request system',
      'Multi-domain legal expertise coverage',
      'Remote accessibility from any location'
    ],
    status: 'Production Grade'
  },
  {
    id: '6',
    title: 'Documenso',
    slug: 'documenso',
    category: 'Custom Development & AI',
    description: 'Open-source alternative to DocuSign for digital signatures and document workflows',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    year: '2024',
    client: 'Open Source',
    role: 'Full-stack Development',
    problem: 'Businesses need affordable, self-hosted document signing solutions that provide the same functionality as expensive proprietary platforms like DocuSign.',
    solution: 'Built an open-source document signing platform with Next.js, Prisma ORM, PostgreSQL database, template creation, audit trails, and Stripe integration for payments.',
    impact: [
      '8.9K+ GitHub stars',
      'Self-hostable solution',
      'Complete audit trail system',
      'Template management system',
      'API-first architecture'
    ],
    liveUrl: 'https://documenso.com',
    status: 'Deployed Live'
  },
  {
    id: '8',
    title: 'Allbirds Shopify Store',
    slug: 'allbirds-shopify',
    category: 'Shopify',
    description: 'Sustainable footwear brand Shopify store with custom product configuration and eco-impact tracking',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'React', 'Sustainability'],
    year: '2024',
    client: 'Allbirds',
    role: 'Shopify Plus Development',
    problem: 'Sustainable footwear brand needs an ecommerce platform that showcases their eco-friendly products while providing seamless shopping experience.',
    solution: 'Custom Shopify Plus implementation with product carbon footprint tracking, size recommendation AI, subscription management for recurring orders, and integration with sustainability metrics dashboard.',
    impact: [
      'Carbon footprint displayed per product',
      'Size recommendation AI reducing returns',
      'Subscription model for repeat purchases',
      'Seamless checkout with Apple Pay, Google Pay'
    ],
    liveUrl: 'https://www.allbirds.com',
    status: 'Deployed Live'
  },
  {
    id: '9',
    title: 'Gymshark Shopify Store',
    slug: 'gymshark-shopify',
    category: 'Shopify',
    description: 'Fitness apparel brand Shopify Plus store with high-performance checkout and inventory management',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['Shopify Plus', 'Liquid', 'JavaScript', 'Node.js', 'Inventory'],
    year: '2024',
    client: 'Gymshark',
    role: 'Shopify Plus Development',
    problem: 'High-growth fitness brand needs scalable ecommerce infrastructure to handle flash sales and high-traffic events without performance degradation.',
    solution: 'Custom Shopify Plus implementation with flash sale queue management, real-time inventory sync, high-performance checkout optimization, and integration with supply chain management systems.',
    impact: [
      'Handles 100K+ concurrent users during launches',
      'Flash sale queue management system',
      'Real-time inventory synchronization',
      'Mobile-first responsive design'
    ],
    liveUrl: 'https://www.gymshark.com',
    status: 'Deployed Live'
  },
  {
    id: '10',
    title: 'Oberlo Dropshipping Platform',
    slug: 'oberlo-dropshipping',
    category: 'Shopify',
    description: 'Shopify app for dropshipping with AliExpress product import and order automation',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Shopify', 'Chrome Extension', 'Node.js', 'MongoDB', 'API'],
    year: '2023',
    client: 'Oberlo (Shopify)',
    role: 'Full-stack Development',
    problem: 'Entrepreneurs need easy way to find and sell products from AliExpress suppliers without holding inventory.',
    solution: 'Built Chrome extension for product import, Node.js backend for order processing, MongoDB for product catalog, and automated order fulfillment with AliExpress API integration.',
    impact: [
      '100K+ active merchants',
      'Millions of products imported',
      'Automated order fulfillment',
      'Real-time price tracking'
    ],
    liveUrl: 'https://www.oberlo.com',
    status: 'Deployed Live'
  },
  {
    id: '11',
    title: 'Kinsta WordPress Hosting',
    slug: 'kinsta-wordpress',
    category: 'WordPress',
    description: 'Premium managed WordPress hosting platform with MyKinsta dashboard and staging environments',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    tags: ['WordPress', 'PHP', 'Laravel', 'Google Cloud', 'Docker'],
    year: '2024',
    client: 'Kinsta',
    role: 'Platform Development',
    problem: 'WordPress site owners need managed hosting with easy-to-use dashboard, staging environments, and performance optimization.',
    solution: 'Built MyKinsta dashboard with Laravel, Google Cloud Platform integration, Docker containerization, automated backups, staging environments, and performance monitoring tools.',
    impact: [
      '26,500+ WordPress sites hosted',
      '99.9% uptime guarantee',
      'Global CDN with 35+ locations',
      'Automated daily backups'
    ],
    status: 'Deployed Live'
  },
  {
    id: '12',
    title: 'Quiz Maker Import WordPress Plugin',
    slug: 'quiz-maker-import-wordpress',
    category: 'WordPress',
    description: 'WordPress plugin that imports quiz questions from DOCX files and automatically configures them in Quiz Maker plugin',
    image: '/quiz-importer-img.png',
    gallery: [
      '/quiz-importer-img.png',
    ],
    tags: ['WordPress', 'PHP', 'DOCX Parser', 'REST API', 'Quiz Maker API'],
    year: '2024',
    client: 'WordPress Plugin',
    role: 'Plugin Development',
    problem: 'Educators and content creators need to import large quiz datasets from DOCX documents into Quiz Maker plugin without manually entering each question.',
    solution: 'Built a WordPress plugin in PHP that parses DOCX files using a PHPDocx parser, extracts questions, options, and answers, then automatically creates and configures quizzes in the Quiz Maker plugin via its API.',
    impact: [
      'Automated DOCX to Quiz Maker import pipeline',
      'Supports multiple question types (MCQ, true/false, fill-blank)',
      'Bulk import of hundreds of questions at once',
      'Automatic answer key mapping and validation',
      'Eliminates manual data entry for quiz creation'
    ],
    status: 'Deployed Live'
  },
  {
    id: '13',
    title: 'MemberPress LMS',
    slug: 'memberpress-lms',
    category: 'WordPress',
    description: 'WordPress learning management system plugin with course builder and membership functionality',
    image: '/member-img.png',
    gallery: [
      '/member-img.png',
    ],
    tags: ['WordPress', 'PHP', 'LMS', 'Membership', 'WooCommerce'],
    year: '2024',
    client: 'MemberPress',
    role: 'Plugin Development',
    problem: 'Educators need WordPress-based platform to create, sell, and manage online courses with membership functionality.',
    solution: 'Built LMS plugin with course builder, drip content scheduling, membership levels, progress tracking, quizzes, certificates, and WooCommerce integration.',
    impact: [
      '30,000+ active installations',
      'Course completion tracking',
      'Drip content scheduling',
      'Membership management system'
    ],
    status: 'Deployed Live'
  },
  {
    id: '23',
    title: 'Exam Result Export WordPress Plugin',
    slug: 'exam-result-export-wordpress',
    category: 'WordPress',
    description: 'WordPress plugin that exports quiz results from Quiz Maker including quiz data and user records into Excel sheets',
    image: '/quiz-export-img.png',
    gallery: [
      '/quiz-export-img.png',
    ],
    tags: ['WordPress', 'PHP', 'PHPExcel', 'REST API', 'Quiz Maker API', 'Excel Export'],
    year: '2024',
    client: 'WordPress Plugin',
    role: 'Plugin Development',
    problem: 'Educators need to export complete quiz results data including user information, scores, and quiz details for reporting, analysis, and record-keeping beyond the quiz plugin limitations.',
    solution: 'Built a WordPress plugin in PHP that fetches quiz results from Quiz Maker plugin API, joins with WordPress user tables for complete records, and exports everything into structured Excel sheets using PHPExcel library.',
    impact: [
      'Exports complete quiz and user data in one Excel file',
      'Joins quiz results with user profiles for full records',
      'Supports filtering by date range, quiz, and user',
      'One-click bulk export for entire course or class',
      'Downloadable Excel files for offline analysis and reporting'
    ],
    status: 'Deployed Live'
  },
  {
    id: '16',
    title: 'Cal.com Scheduling',
    slug: 'cal-com-scheduling',
    category: 'Custom Development & AI',
    description: 'Open-source scheduling infrastructure alternative to Calendly',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'tRPC'],
    year: '2024',
    client: 'Cal.com',
    role: 'Full-stack Development',
    problem: 'Businesses need self-hosted scheduling solution that provides the same functionality as Calendly without vendor lock-in.',
    solution: 'Built open-source scheduling platform with Next.js, Prisma ORM, PostgreSQL, calendar integrations, team management, and embeddable widgets.',
    impact: [
      '25K+ GitHub stars',
      'Self-hostable solution',
      'Calendar integration (Google, Outlook)',
      'Embeddable booking pages',
      'Team scheduling management'
    ],
    liveUrl: 'https://cal.com',
    status: 'Deployed Live'
  },
  {
    id: '18',
    title: 'Invoiceninja',
    slug: 'invoiceninja',
    category: 'Custom Development & AI',
    description: 'Open-source invoicing platform for freelancers and small businesses',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    tags: ['Laravel', 'PHP', 'Vue.js', 'PostgreSQL', 'MySQL', 'Docker'],
    year: '2024',
    client: 'Invoice Ninja',
    role: 'Full-stack Development',
    problem: 'Freelancers and small businesses need professional invoicing solution with payment tracking and client management.',
    solution: 'Built invoicing platform with Laravel backend, Vue.js frontend, PDF generation, payment gateway integrations, time tracking, and expense management.',
    impact: [
      '200K+ businesses using platform',
      '10K+ GitHub stars',
      'Multi-currency support',
      'Payment gateway integrations'
    ],
    liveUrl: 'https://invoiceninja.com',
    status: 'Deployed Live'
  }
];
