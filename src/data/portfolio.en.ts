import type { DatosPortafolio } from '@/types'

/**
 * Versión en inglés del contenido. Mantener en paralelo con portfolio.ts:
 * misma cantidad de entradas y mismo orden, para que el contenido no cambie
 * de forma al cambiar de idioma.
 *
 * Los nombres propios (empresas, instituciones, certificaciones oficiales) se
 * dejan como están: traducirlos los haría imposibles de verificar.
 */
export const portfolioData: DatosPortafolio = {
  sobreMi: {
    nombre: 'Enmanuel Reynoso Salazar',
    titulo: 'Hospitality Technology & Software Engineer',
    headline: 'Hospitality tech · Cloudbeds & PMS · Software Engineering',
    biografia:
      'I have worked both sides of hospitality technology. At the front desk I ran the daily operation on a PMS: reservations, check-in/check-out, billing and the nightly audit. Today I work in Cloudbeds every day and I manage a hotel’s website and booking engine.\n\nOn the other side, I build software. I am the founder and lead developer of AsistoYA, a multi-tenant SaaS in production that took 3rd place nationally at the MESCyT 2025 competition and raised RD$400,000 in seed capital.\n\nWhen I digitized the night audit I had been doing by hand, I understood what this combination is for: knowing where the operation hurts, and knowing how to turn that into a product.',
    avatar: '/tipos/Imagenes/image.png',
    ubicacion: 'Dominican Republic',
    disponibilidad: 'Open to remote opportunities',
    aptitudesPrincipales: ['Cloudbeds (PMS)', 'React', 'TypeScript', 'Python', 'Node.js', 'Git'],
    logros: [
      { icono: '🏆', valor: '3rd place', etiqueta: 'MESCyT 2025, national' },
      { icono: '💰', valor: 'RD$400K', etiqueta: 'Seed capital raised' },
      { icono: '📱', valor: 'Google Play', etiqueta: 'Product shipped' },
      { icono: '💼', valor: '3 years', etiqueta: 'Of work experience' },
    ],
  },

  habilidades: [
    // Development
    { nombre: 'JavaScript', nivel: 85, categoria: 'Development' },
    { nombre: 'TypeScript', nivel: 82, categoria: 'Development' },
    { nombre: 'Python', nivel: 80, categoria: 'Development' },
    { nombre: 'Angular', nivel: 80, categoria: 'Development' },
    { nombre: 'React', nivel: 78, categoria: 'Development' },
    { nombre: 'HTML5 & CSS3', nivel: 88, categoria: 'Development' },
    { nombre: 'Git & GitHub', nivel: 85, categoria: 'Development' },
    { nombre: 'Node.js', nivel: 72, categoria: 'Development' },

    // Product & leadership
    { nombre: 'Project management', nivel: 85, categoria: 'Product & Leadership' },
    { nombre: 'Team leadership', nivel: 82, categoria: 'Product & Leadership' },
    { nombre: 'Innovation & entrepreneurship', nivel: 90, categoria: 'Product & Leadership' },
    { nombre: 'Problem solving', nivel: 88, categoria: 'Product & Leadership' },

    // Professional
    { nombre: 'Customer service', nivel: 92, categoria: 'Professional Skills' },
    { nombre: 'Communication', nivel: 90, categoria: 'Professional Skills' },
    { nombre: 'Administrative management', nivel: 85, categoria: 'Professional Skills' },
    { nombre: 'Teamwork', nivel: 90, categoria: 'Professional Skills' },
    { nombre: 'Adaptability', nivel: 88, categoria: 'Professional Skills' },
  ],

  stackTecnico: [
    {
      categoria: 'Languages',
      icono: '💻',
      tecnologias: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'JSON'],
    },
    {
      categoria: 'Frontend',
      icono: '🎨',
      tecnologias: ['Angular', 'React', 'Vite', 'Tailwind CSS', 'RxJS', 'Responsive design'],
    },
    {
      categoria: 'Backend & Databases',
      icono: '⚙️',
      tecnologias: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
    {
      categoria: 'AI & Computer Vision',
      icono: '🤖',
      tecnologias: ['Computer vision', 'Facial recognition', 'OpenCV', 'Machine learning'],
    },
    {
      categoria: 'Tools & DevOps',
      icono: '🛠️',
      tecnologias: ['Git', 'GitHub', 'Docker', 'Nginx', 'VS Code', 'npm', 'Postman'],
    },
    {
      categoria: 'Hospitality & CMS',
      icono: '🌐',
      tecnologias: ['Cloudbeds', 'Hotello (PMS)', 'Booking engines', 'WordPress', 'Elementor', 'SEO'],
    },
    {
      categoria: 'Design & Productivity',
      icono: '📐',
      tecnologias: ['Figma', 'Canva', 'Microsoft Excel', 'Google Workspace', 'CRM / ERP'],
    },
  ],

  experiencia: [
    {
      empresa: 'Ultra Infinity Hotel',
      rol: 'Web Administrator & Reservations Agent',
      periodo: 'Mar 2026 – Present',
      tipo: 'Full-time',
      ubicacion: 'Dominican Republic · On-site',
      actual: true,
      descripcion:
        'Daily work in Cloudbeds: reservations, rates and availability, and property configuration. I keep rates and inventory consistent between the booking engine and the OTA channels, catching mismatches between what the PMS holds and what the guest sees.\n\nI administer the hotel website (WordPress and Elementor): content updates, booking engine configuration and page optimization.\n\nFront desk operations: check-in/check-out, guest requests and reservation management across direct and OTA channels.',
      tecnologias: ['Cloudbeds (PMS)', 'WordPress', 'Elementor', 'Booking engine', 'OTA', 'SEO'],
    },
    {
      empresa: 'AsistoYA',
      rol: 'Founder · CEO & Lead Developer',
      periodo: 'Aug 2025 – Present',
      tipo: 'Startup',
      ubicacion: 'Dominican Republic',
      actual: true,
      descripcion:
        'I founded AsistoYA to solve a real problem: manual attendance tracking is slow, and families are not told when a student never arrives at school.\n\nI built an AI and facial-recognition app that notifies families in real time about arrivals, departures and absences. The result: 3rd place nationally (MESCyT 2025), seed capital raised, and the product shipped on the Google Play Store.',
      tecnologias: ['Computer vision', 'AI', 'Leadership', 'Product management', 'Innovation'],
    },
    {
      empresa: 'El Pensum',
      rol: 'Front-End Developer',
      periodo: 'Nov 2025 – Feb 2026',
      tipo: 'Internship',
      ubicacion: 'Dominican Republic',
      descripcion:
        'Development of “El Pensum”, an education platform to explore universities and academic programs in the Dominican Republic.\n\nBuilt interactive interfaces with Angular and TypeScript, handled data over JSON, and contributed to the digital payments module.',
      tecnologias: ['Angular', 'TypeScript', 'JSON', 'Node.js'],
    },
    {
      empresa: 'Velero Beach Resort',
      rol: 'Front Desk Agent & Night Auditor',
      periodo: 'Apr 2025 – Feb 2026',
      tipo: 'Full-time',
      ubicacion: 'Dominican Republic',
      descripcion:
        'Front desk at an exclusive beachfront hotel-condominium, welcoming national and international guests.\n\nNightly audit on Hotello (PMS): reconciling the day’s transactions, revenue and payment methods across front desk and restaurant, resolving discrepancies and closing the system.\n\nReservations and check-in/check-out, OTA channels (Booking.com, Expedia), and resolution of special requests and incidents.',
      tecnologias: ['Hotello (PMS)', 'Night audit', 'Booking.com', 'Expedia', 'Cash handling'],
    },
    {
      empresa: 'EyP Multiservices (Claro)',
      rol: 'Administrative & Technical Support Assistant',
      periodo: 'Nov 2024 – Mar 2025',
      tipo: 'Fixed-term',
      ubicacion: 'Dominican Republic · On-site',
      descripcion:
        'Responsible for a range of administrative tasks, building a solid base in office administration and technical support over CRM and ERP portals.\n\nCustomer and technical support for clients and sales agents, document management, invoicing, process organization and incident resolution.',
      tecnologias: ['CRM', 'ERP', 'Microsoft Excel', 'Google Workspace', 'AnyDesk', 'Canva'],
    },
    {
      empresa: 'Lic. Wilson Manuel Sosa, CPA',
      rol: 'Accounting Assistant',
      periodo: 'Jul 2023 – May 2024',
      tipo: 'Full-time',
      ubicacion: 'Dominican Republic',
      descripcion:
        'Invoice organization and client support, in person and by phone.\n\nData entry and filing of tax records to the DGII, archiving and validation of financial documentation, and handling of forms 606 and 607.',
      tecnologias: ['Microsoft Excel', 'DGII', 'Forms 606/607', 'Accounting'],
    },
  ],

  proyectos: [
    {
      id: 1,
      titulo: 'AsistoYA',
      subtitulo: 'EdTech platform with AI and facial recognition',
      descripcion:
        'AsistoYA is a school management platform that automates attendance tracking through facial recognition and AI, and strengthens the link between school and family.\n\nAs founder and CEO I led the product from idea to launch: 3rd place in the National Entrepreneurship Competition (MESCyT 2025) after being selected from 40 ideas and competing against 21 universities, RD$400,000 raised in seed capital, and the app published on the Google Play Store.',
      imagen: '',
      destacado: true,
      tecnologias: ['Computer vision', 'Facial recognition', 'AI', 'Leadership', 'Product management'],
      caracteristicas: [
        'Real-time digital attendance',
        'AI facial recognition',
        'Instant alerts for parents and guardians',
        'Tracking of entries, exits, late arrivals and absences',
        'Student, course and teacher management',
        'Daily, weekly and monthly reporting',
        'Multi-campus management',
      ],
      logros: [
        '🏆 3rd place nationally — MESCyT 2025',
        '💰 RD$400,000 in seed capital',
        '📱 Shipped on the Google Play Store',
      ],
      urlEnVivo: 'https://asistoya.com',
    },
    {
      id: 4,
      titulo: 'Night Audit System',
      subtitulo: 'Web application for hotels',
      descripcion:
        'I digitized the night-audit process I was running by hand at the hotel front desk: reconciling the day’s transactions sheet by sheet before closing the system.\n\nThe application records check-ins and check-outs, bills automatically, breaks sales down by category, shift and payment method, and shows a countdown to the system close.\n\nIt is the project that best explains what I do: it came out of a problem I lived in the operation, not a classroom exercise.',
      imagen: '',
      tecnologias: ['React', 'TypeScript', 'Tailwind CSS'],
      urlEnVivo: 'https://sistema-de-auditoria-nocturna.vercel.app/',
      caracteristicas: [
        'Check-in and check-out records',
        'Automated billing',
        'Sales breakdown by category, shift and payment method',
        'Reconciliation of the day’s transactions',
        'Countdown to the system close',
      ],
    },
    {
      id: 2,
      titulo: 'El Pensum',
      subtitulo: 'University education platform',
      descripcion:
        'Web application built with Angular to explore universities and academic programs in the Dominican Republic.\n\nAs front-end developer (internship) I built interactive interfaces with Angular and TypeScript, integrated data over JSON, and worked with the Node.js backend, including the digital payments module.',
      imagen: '',
      tecnologias: ['Angular', 'TypeScript', 'JSON', 'Node.js', 'Docker', 'Nginx'],
      caracteristicas: [
        'University and program search',
        'Interactive interface built with Angular',
        'Academic data integration',
        'Digital payments module',
      ],
      // El repositorio es privado: se enlaza el sitio público.
      urlEnVivo: 'https://elpensum.com/inicio',
    },
    {
      id: 3,
      titulo: 'Shine and Beauty',
      subtitulo: 'Brand identity and e-commerce',
      descripcion:
        'Full visual identity for the brand (logo and packaging), giving a hair care product line a professional image.\n\nDesign and management of the web platform for showcasing and selling the products, along with digital marketing and content creation.',
      imagen: '',
      tecnologias: ['Brand identity', 'Web design', 'Digital marketing', 'Canva'],
      caracteristicas: [
        'Logo and packaging design',
        'Online sales platform',
        'Digital marketing strategy',
        'Content creation',
      ],
    },
  ],

  educacion: [
    {
      institucion: 'Universidad Abierta para Adultos (UAPA)',
      titulo: 'B.Sc. Software Engineering',
      periodo: 'Nov 2024 – Nov 2028',
      descripcion:
        'University degree in the development of software systems, covering systems theory, analysis and software quality. Skills: teamwork, programming logic and more.',
    },
    {
      institucion: 'Politécnico Prof. Juan Emilio Bosch Gaviño',
      titulo: 'Technical Baccalaureate in Administrative & Tax Management',
      periodo: '2021 – 2024',
      descripcion:
        'Technical secondary program (Ord. 14’2017) certified by MINERD, with the internship waived for prior work experience.',
      imagen: '/certificados/bachiller.jpg',
    },
  ],

  certificaciones: [
    {
      titulo: 'TypeScript: From First Steps to Professional',
      imagen: '/certificados/masterdev.jpg',
      entidad: 'Master.dev (formerly Frontend Masters)',
      fecha: 'Feb 2026',
      horas: '8 hours',
      credencialId: 'baba173e58-jfuxcgueUy',
      color: '#3178c6',
    },
    {
      titulo: 'Front-End Web Development with Angular',
      entidad: 'ITLA — Instituto Tecnológico de las Américas',
      fecha: 'Jan 2026',
      horas: '40 hours',
      color: '#dd0031',
    },
    {
      titulo: 'Full Stack Web Development — Intermediate Level',
      entidad: 'Cymetria Group / INDOTEL / IDB',
      fecha: 'Jan 2026',
      horas: '80 hours',
      color: '#0a7d55',
    },
    {
      titulo: 'Google Play Store Listing Certificate',
      entidad: 'Google Play Academy',
      fecha: 'Sep 2025',
      vencimiento: 'Sep 2028',
      credencialId: '160885006',
      color: '#4285f4',
      imagen: '/certificados/google-play.png',
    },
    {
      titulo: 'Python Essentials 1',
      entidad: 'Cisco Networking Academy',
      fecha: 'Mar 2025',
      color: '#f2b705',
    },
    {
      titulo: 'Collaborative Technology & Project Management Tools',
      entidad: 'Universidad Iberoamericana (UNIBE)',
      fecha: 'Mar 2025',
      horas: '8 hours',
      color: '#6a2c91',
      imagen: '/certificados/unibe.png',
    },
    {
      titulo: 'Legacy Responsive Web Design V8',
      entidad: 'freeCodeCamp',
      fecha: 'Oct 2024',
      horas: '~300 hours',
      urlCredencial: 'https://freecodecamp.org/certification/fccc3509f1c-94fd-4e6a-9a7b-dfb836aa8fb3/responsive-web-design',
      color: '#0a0a23',
    },
    {
      titulo: 'Scientific Computing with Python',
      imagen: '/certificados/fcc-python.png',
      entidad: 'freeCodeCamp',
      fecha: 'Oct 2024',
      horas: '~300 hours',
      urlCredencial: 'https://freecodecamp.org/certification/fccc3509f1c-94fd-4e6a-9a7b-dfb836aa8fb3/scientific-computing-with-python-v7',
      color: '#0a0a23',
    },
    {
      titulo: 'English Language Diploma',
      entidad: 'Natural Languages Institute (NLI)',
      fecha: 'Dec 2019',
      credencialId: 'Reg. 519448',
      color: '#c0392b',
      imagen: '/certificados/ingles.jpg',
    },
  ],

  idiomas: [
    {
      nombre: 'Spanish',
      nivel: 'Native',
      porcentaje: 100,
      detalle: 'Native proficiency',
      bandera: '🇩🇴',
    },
    {
      nombre: 'English',
      nivel: 'Professional working proficiency',
      porcentaje: 70,
      detalle: 'Duolingo English Test: 115 · Mar 2026',
      bandera: '🇺🇸',
    },
  ],

  recomendaciones: [
    {
      autor: 'Mtra. Alejandra Hernández Acosta',
      cargo: 'Rector',
      entidad: 'Universidad Abierta para Adultos (UAPA)',
      fecha: 'Aug 2025',
      resumen:
        'Official congratulations for taking 3rd place in the MESCyT Entrepreneurship Competition with the AsistoYA project: “Your talent and effort have been recognized on a stage this competitive and prestigious. Keep dreaming big, working with passion and believing in the power of your ideas!”',
      imagen: '/certificados/carta-uapa.jpg',
      color: '#1d3557',
    },
    {
      autor: 'Lic. Wilson Manuel Sosa',
      cargo: 'Certified Public Accountant (Exequátur 156-07)',
      entidad: 'Politécnico Prof. Juan Bosch',
      fecha: 'May 2024',
      resumen:
        'Written record of the work Enmanuel carried out in Administrative and Tax Management: client support, invoice organization and data entry of DGII filings, vouching for his professional performance.',
      imagen: '/certificados/carta-wilson.jpg',
      color: '#2a9d8f',
    },
  ],

  contacto: {
    gmail: 'reynosoenmanuel166@gmail.com',
    github: 'https://github.com/EnmanuelReynoso23',
    linkedin: 'https://www.linkedin.com/in/enmanuel-reynoso-salazar/',
    sitioWeb: 'https://asistoya.com',
    cv: '/CV-Enmanuel-Reynoso.pdf',
  },
}
