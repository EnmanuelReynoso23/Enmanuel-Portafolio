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
    titulo: 'Software Engineer · Full-stack, Infrastructure & AI tooling',
    headline: 'Software Engineer · Full-stack · Infrastructure · AI tooling',
    biografia:
      'I build and run software in production. I am the founder and lead developer of AsistoYA, a multi-tenant school attendance SaaS in production at schools in Mexico, which took 3rd place nationally at the MESCyT 2025 competition and raised RD$400,000 in seed capital. I own the whole system: the web and mobile apps in React and TypeScript, the Node.js functions, the integration with Hikvision facial terminals and the self-hosted server on Oracle Cloud.\n\nI also publish open-source tools for AI agents, such as SyntaxRAG, with every number measured and tied to the script that produced it.\n\nI come from operations: front desk, night audit and technical support. Today I work in Cloudbeds every day and I manage a hotel’s website and booking engine. That taught me to debug with the user in front of me and to turn what hurts in the operation into a product.',
    avatar: '/tipos/Imagenes/image.png',
    ubicacion: 'Dominican Republic',
    disponibilidad: 'Open to remote opportunities',
    aptitudesPrincipales: ['React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'Git', 'Cloudbeds (PMS)'],
    logros: [
      { icono: 'trofeo', valor: '3rd place', etiqueta: 'MESCyT 2025, national' },
      { icono: 'dinero', valor: 'RD$400K', etiqueta: 'Seed capital raised' },
      { icono: 'movil', valor: 'iOS & Android', etiqueta: 'Shipped on both stores' },
      { icono: 'trabajo', valor: '3 years', etiqueta: 'Of work experience' },
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
      icono: 'codigo',
      tecnologias: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'JSON'],
    },
    {
      categoria: 'Frontend',
      icono: 'diseno',
      tecnologias: ['Angular', 'React', 'Vite', 'Tailwind CSS', 'RxJS', 'Responsive design'],
    },
    {
      categoria: 'Backend & Databases',
      icono: 'sistema',
      tecnologias: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
    {
      categoria: 'AI & Computer Vision',
      icono: 'ia',
      tecnologias: ['Computer vision', 'Facial recognition', 'OpenCV', 'Machine learning'],
    },
    {
      categoria: 'Tools & DevOps',
      icono: 'herramientas',
      tecnologias: ['Git', 'GitHub', 'Docker', 'Nginx', 'VS Code', 'npm', 'Postman'],
    },
    {
      categoria: 'Hospitality & CMS',
      icono: 'web',
      tecnologias: ['Cloudbeds', 'Hotello (PMS)', 'Booking engines', 'WordPress', 'Elementor', 'SEO'],
    },
    {
      categoria: 'Design & Productivity',
      icono: 'arquitectura',
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
      empresa: '',
      rol: 'Founder · CEO & Lead Developer',
      periodo: 'Aug 2025 – Present',
      tipo: 'Startup',
      ubicacion: 'Dominican Republic',
      actual: true,
      descripcion:
        'I founded  to solve a real problem: manual attendance tracking is slow, and families are not told when a student never arrives at school.\n\nI built an AI and facial-recognition app that notifies families in real time about arrivals, departures and absences. The result: 3rd place nationally (MESCyT 2025), seed capital raised, and the product shipped on both the Google Play Store and the App Store.',
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
        'AsistoYA is a school management platform that automates attendance tracking through facial recognition and AI, and strengthens the link between school and family.\n\nAs founder and CEO I led the product from idea to launch: 3rd place in the National Entrepreneurship Competition (MESCyT 2025) after being selected from 40 ideas and competing against 21 universities, RD$400,000 raised in seed capital, and the app published on both the Google Play Store and the App Store.\n\nAs an engineer I write most of the code: a React + TypeScript web app packaged with Capacitor for iOS and Android, Node.js serverless functions, and a gateway that ingests XML access events from Hikvision facial terminals over ISAPI. In October 2026 I migrated production from Appwrite Cloud to a self-hosted Appwrite (Docker) on an Oracle Cloud ARM server, with a read-only SQLite replica kept fresh by webhooks so heavy reports never hit the primary database.\n\nRunning it in production meant debugging things like a webhook worker that leaked one file descriptor per failed delivery until it stopped delivering for 23 hours; I raised the limit and added a systemd watchdog that detects it and restarts the worker. Before growing, I measured the ceiling with load tests (k6 and JMeter): about 110 reads per second, CPU-bound.',
      imagen: '',
      destacado: true,
      tecnologias: [
        'React 18',
        'TypeScript',
        'Vite',
        'Capacitor (iOS & Android)',
        'Appwrite (self-hosted)',
        'Node.js',
        'Oracle Cloud (ARM)',
        'Docker',
        'Hikvision ISAPI',
        'Sentry',
      ],
      caracteristicas: [
        'Real-time digital attendance',
        'AI facial recognition',
        'Instant alerts for parents and guardians',
        'Tracking of entries, exits, late arrivals and absences',
        'Student, course and teacher management',
        'Daily, weekly and monthly reporting',
        'Multi-campus management',
        'Direct integration with Hikvision facial terminals (ISAPI events)',
        'Webhook-fed SQLite read replica',
      ],
      logros: [
        '3rd place nationally — MESCyT 2025',
        'RD$400,000 in seed capital',
        'Shipped on Google Play and the App Store',
      ],
      urlEnVivo: 'https://asistoya.com',
    },
    {
      id: 2,
      titulo: 'CompuShare',
      subtitulo: 'Distributed P2P LLM inference platform',
      descripcion:
        'Distributed peer-to-peer compute platform that executes open-source large language models by splitting layers across multiple internet-connected PCs. Combines llama.cpp over RPC with a custom WebSocket relay that tunnels TCP connections without opening router ports, reducing per-token output traffic from 993 KB down to 4.1 KB.',
      imagen: '',
      tecnologias: [
        'Python',
        'TypeScript',
        'Go',
        'llama.cpp',
        'WebSockets',
        'P2P Networking',
        'Distributed Systems',
      ],
      caracteristicas: [
        'Layer-by-layer LLM partitioning across consumer PCs',
        'WebSocket TCP tunneling without router port-forwarding',
        'Latency-aware node scheduling and ping measurement',
        'Tensor output optimization (from 993 KB to 4.1 KB per token)',
        '100% open-source software (MIT License)',
      ],
      urlEnVivo: 'https://computer-share.vercel.app/',
      urlRepositorio: 'https://github.com/EnmanuelReynoso23/CompuShare',
    },
    {
      id: 3,
      titulo: 'SyntaxRAG (SynRAG)',
      subtitulo: 'AST-native local code intelligence engine for AI agents (MCP)',
      descripcion:
        'AST-native local semantic code search and context engine for AI coding assistants built on the Model Context Protocol (MCP). Parses Abstract Syntax Trees to preserve complete functions and class hierarchies, eliminating arbitrary chunk boundaries, context drift, and token waste in agents like Claude Code, Google Antigravity, and Cursor.\n\nEvery number it publishes is measured with a real agent and documented in CLAIMS.md next to the script that produced it: v1.6 cut tokens by 63.9% across 10 multi-step tasks (95% CI: -83% to -24%) while quality went from 87% to 94%. It also documents where it loses: on short tasks the tool definitions cost more than the task itself.',
      imagen: '',
      tecnologias: [
        'Python',
        'TypeScript',
        'Tree-sitter',
        'LanceDB',
        'FlashRank ONNX',
        'React 19',
        'Tailwind CSS',
      ],
      caracteristicas: [
        'AST-guided semantic parsing and code indexing with Tree-sitter',
        'Local Model Context Protocol (MCP) server implementation',
        'High-throughput embedded vector storage with LanceDB',
        'On-device local reranking using FlashRank and ONNX runtime',
        'Modern web dashboard and observability panel built with React 19',
      ],
      logros: [
        '-63.9% tokens measured with a real agent (v1.6)',
        'Quality from 87% to 94% on the same tasks',
        'Import resolution matches the TypeScript compiler on 100% of local imports',
      ],
      urlEnVivo: 'https://synrag.vercel.app',
      urlRepositorio: 'https://github.com/EnmanuelReynoso23/synrag',
    },
    {
      id: 7,
      titulo: 'AI Operations Bot (WhatsApp)',
      subtitulo: 'Agent that supports AsistoYA families and the team',
      descripcion:
        'WhatsApp bot that handles AsistoYA support: it answers parents, checks accounts, links parents to their children and sends password recovery, reporting every action to the team group. It also drafts emails, keeps the team calendar and sends a daily summary.\n\nIt runs as a systemd service on the Oracle Cloud server, uses Baileys for WhatsApp and Gemini models with two keys to spread the quota. Coding tasks are delegated to agents (Antigravity or Claude Code), escalating to Claude only when the task is complex, to keep costs under control.',
      imagen: '',
      tecnologias: ['Node.js', 'Baileys', 'Gemini', 'systemd', 'Oracle Cloud', 'SQLite'],
      caracteristicas: [
        'Family support with real actions on their accounts',
        'Every action reported to the team group',
        'Email drafts that only go out after confirmation',
        'Team calendar and daily summary',
        'Delegation of coding tasks to AI agents',
      ],
    },
    {
      id: 8,
      titulo: 'Animo',
      subtitulo: 'Virtual pet with habits and P2P sync',
      descripcion:
        'A pet that grows with you: you take care of it, complete your daily habits and keep a streak with your friends, connected phone to phone over WebRTC with no backend of my own.\n\nThe pet rules are plain JavaScript and run unchanged in three places: an installable web app (PWA, works offline), a Raspberry Pi kiosk device and an ESP32-C3 egg whose firmware uses the Moddable SDK. The ESP32 joins the same friends through an MQTT broker.',
      imagen: '',
      tecnologias: ['TypeScript', 'React', 'WebRTC', 'PWA', 'MQTT', 'ESP32-C3', 'Moddable SDK', 'Raspberry Pi'],
      caracteristicas: [
        'Peer-to-peer sync between phones with no backend',
        'Same rules on the web, the Raspberry Pi and the ESP32',
        'Works offline',
        'Shared streaks with friends',
      ],
      urlEnVivo: 'https://tama-p2p.vercel.app',
      urlRepositorio: 'https://github.com/EnmanuelReynoso23/tama-p2p',
    },
    {
      id: 9,
      titulo: 'Hik-Connect MCP',
      subtitulo: 'MCP server for Hikvision facial terminals',
      descripcion:
        'Model Context Protocol server with 24 tools to query and operate Hikvision facial recognition terminals from an AI agent: devices, people, faces, access levels and events.\n\nThere was no documented API for what I needed, so I studied the web portal flow (a ticket exchange with AES keys encrypted with RSA) and reproduced it in my own client. Reads are free; reboots and writes require explicit confirmation.',
      imagen: '',
      tecnologias: ['Node.js', 'MCP', 'Hikvision ISAPI', 'RSA / AES', 'Reverse engineering'],
      caracteristicas: [
        '24 MCP tools',
        'Per-school diagnosis of devices and faces',
        'Writes only with confirmation',
      ],
    },
    {
      id: 10,
      titulo: 'Edge AI / TinyML',
      subtitulo: 'Predictive maintenance on a microcontroller',
      descripcion:
        'Team project: an embedded system that reads temperature, vibration and usage intensity from a machine, classifies its state on the device itself (NORMAL, PREVENTIVE or LIKELY FAILURE) and alerts with a display, LEDs and a buzzer, while streaming telemetry over serial.',
      imagen: '',
      tecnologias: ['C', 'ESP32', 'Wokwi', 'DHT22', 'MPU6050', 'Edge AI'],
      caracteristicas: [
        'On-device classification, no cloud',
        'Thresholds justified by industrial standards',
        'Serial telemetry',
      ],
      urlRepositorio: 'https://github.com/EnmanuelReynoso23/Sistema-Edge-AI-TinyML',
    },
    {
      id: 4,
      titulo: 'Night Audit System',
      subtitulo: 'Hospitality operations & financial reconciliation SaaS',
      descripcion:
        'I digitized the night-audit process I was running by hand at the hotel front desk: reconciling the day’s transactions sheet by sheet before closing the system.\n\nThe application records check-ins and check-outs, bills automatically, breaks sales down by category, shift and payment method, and shows a countdown to the system close.\n\nIt is the project that best explains what I do: it came out of a problem I lived in the operation, not a classroom exercise.',
      imagen: '',
      tecnologias: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      urlEnVivo: 'https://sistema-de-auditoria-nocturna.vercel.app/',
      urlRepositorio: 'https://github.com/EnmanuelReynoso23/Sistema-de-auditoria-nocturna',
      caracteristicas: [
        'Check-in and check-out records in real time',
        'Automated billing and folio calculation',
        'Sales breakdown by category, shift and payment method',
        'Reconciliation of daily transactions',
        'Countdown to system close',
      ],
    },
    {
      id: 5,
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
      urlEnVivo: 'https://elpensum.com/inicio',
    },
    {
      id: 6,
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
      titulo: 'Full Stack Developer Certification Associate',
      imagen: '/certificados/certiplus-fullstack.jpg',
      entidad: 'Certiplus',
      fecha: 'Oct 2026',
      vencimiento: 'Oct 2029',
    },
    {
      titulo: 'Diploma Program in Databases',
      imagen: '/certificados/itla-bases-datos.jpg',
      entidad: 'ITLA — Instituto Tecnológico de las Américas',
      fecha: 'Aug 2026',
      horas: '300 hours',
      color: '#0b3c7d',
    },
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
      imagen: '/certificados/itla.jpg',
      entidad: 'ITLA — Instituto Tecnológico de las Américas',
      fecha: 'Dec 2025',
      horas: '40 hours',
      color: '#dd0031',
    },
    {
      titulo: 'Full Stack Web Development — Intermediate Level',
      imagen: '/certificados/cymetria.jpg',
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
      imagen: '/certificados/cisco.jpg',
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
      imagen: '/certificados/fcc-responsive.png',
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
      bandera: 'ES',
    },
    {
      nombre: 'English',
      nivel: 'Professional working proficiency',
      porcentaje: 70,
      detalle: 'Duolingo English Test: 115 · Mar 2026',
      bandera: 'EN',
    },
  ],

  recomendaciones: [
    {
      autor: 'Mtra. Alejandra Hernández Acosta',
      cargo: 'Rector',
      entidad: 'Universidad Abierta para Adultos (UAPA)',
      fecha: 'Aug 2025',
      resumen:
        'Official congratulations for taking 3rd place in the MESCyT Entrepreneurship Competition with the  project: “Your talent and effort have been recognized on a stage this competitive and prestigious. Keep dreaming big, working with passion and believing in the power of your ideas!”',
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
    sitioWeb: 'https://.com',
    cv: '/CV-Enmanuel-Reynoso-Software-Engineer.pdf',
  },
}
