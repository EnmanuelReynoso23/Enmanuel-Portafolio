import type { DatosPortafolio } from '@/types'

export const datosPortafolio: DatosPortafolio = {
  sobreMi: {
    nombre: 'Enmanuel Reynoso Salazar',
    titulo: 'Software Engineer & Founder',
    headline: 'Software Engineer @ AsistoYA · EdTech AI SaaS · Computer Vision',
    biografia:
      'Ingeniero de Software en formación (UAPA) y fundador de AsistoYA, una plataforma EdTech impulsada por inteligencia artificial y visión por computadora. Combino el desarrollo de software con una sólida experiencia previa en atención al cliente, gestión administrativa y soporte técnico.\n\nMe motiva construir productos que unan creatividad y tecnología para resolver problemas reales. Del emprendimiento premiado a nivel nacional al desarrollo front-end profesional, busco siempre generar impacto y crecer como ingeniero.',
    avatar: '/tipos/Imagenes/image.png',
    ubicacion: 'República Dominicana',
    disponibilidad: 'Abierto a nuevas oportunidades',
    aptitudesPrincipales: ['Python', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Git'],
    logros: [
      { icono: '🏆', valor: '3er Lugar', etiqueta: 'Nacional MESCyT 2025' },
      { icono: '💰', valor: 'RD$400K', etiqueta: 'Capital semilla levantado' },
      { icono: '📱', valor: 'Google Play', etiqueta: 'Producto lanzado' },
      { icono: '💼', valor: '5+ años', etiqueta: 'Experiencia laboral' },
    ],
  },

  habilidades: [
    // Desarrollo
    { nombre: 'JavaScript', nivel: 85, categoria: 'Desarrollo' },
    { nombre: 'TypeScript', nivel: 82, categoria: 'Desarrollo' },
    { nombre: 'Python', nivel: 80, categoria: 'Desarrollo' },
    { nombre: 'Angular', nivel: 80, categoria: 'Desarrollo' },
    { nombre: 'React', nivel: 78, categoria: 'Desarrollo' },
    { nombre: 'HTML5 & CSS3', nivel: 88, categoria: 'Desarrollo' },
    { nombre: 'Git & GitHub', nivel: 85, categoria: 'Desarrollo' },
    { nombre: 'Node.js', nivel: 72, categoria: 'Desarrollo' },

    // Producto & Liderazgo
    { nombre: 'Gestión de Proyectos', nivel: 85, categoria: 'Producto & Liderazgo' },
    { nombre: 'Liderazgo de Equipos', nivel: 82, categoria: 'Producto & Liderazgo' },
    { nombre: 'Innovación & Emprendimiento', nivel: 90, categoria: 'Producto & Liderazgo' },
    { nombre: 'Resolución de Problemas', nivel: 88, categoria: 'Producto & Liderazgo' },

    // Profesionales
    { nombre: 'Atención al Cliente', nivel: 92, categoria: 'Habilidades Profesionales' },
    { nombre: 'Comunicación', nivel: 90, categoria: 'Habilidades Profesionales' },
    { nombre: 'Gestión Administrativa', nivel: 85, categoria: 'Habilidades Profesionales' },
    { nombre: 'Trabajo en Equipo', nivel: 90, categoria: 'Habilidades Profesionales' },
    { nombre: 'Adaptabilidad', nivel: 88, categoria: 'Habilidades Profesionales' },
  ],

  stackTecnico: [
    {
      categoria: 'Lenguajes',
      icono: '💻',
      tecnologias: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'JSON'],
    },
    {
      categoria: 'Frontend',
      icono: '🎨',
      tecnologias: ['Angular', 'React', 'Vite', 'Tailwind CSS', 'RxJS', 'Responsive Design'],
    },
    {
      categoria: 'Backend & Bases de Datos',
      icono: '⚙️',
      tecnologias: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
    {
      categoria: 'IA & Visión por Computadora',
      icono: '🤖',
      tecnologias: ['Computer Vision', 'Reconocimiento Facial', 'OpenCV', 'Machine Learning'],
    },
    {
      categoria: 'Herramientas & DevOps',
      icono: '🛠️',
      tecnologias: ['Git', 'GitHub', 'Docker', 'Nginx', 'VS Code', 'npm', 'Postman'],
    },
    {
      categoria: 'CMS & No-Code',
      icono: '🌐',
      tecnologias: ['WordPress', 'Elementor', 'Motores de Reservas', 'SEO'],
    },
    {
      categoria: 'Diseño & Productividad',
      icono: '📐',
      tecnologias: ['Figma', 'Canva', 'Microsoft Excel', 'Google Workspace', 'CRM / ERP'],
    },
  ],

  experiencia: [
    {
      empresa: 'Ultra Infinity Hotel',
      rol: 'Web Administrator & Reservations Agent',
      periodo: 'Mar. 2026 - Actualidad',
      tipo: 'Jornada completa',
      ubicacion: 'República Dominicana · Presencial',
      actual: true,
      descripcion:
        'Administración del sitio web del hotel (WordPress y Elementor), incluyendo actualización de contenido, configuración del motor de reservas y optimización de páginas.\n\nGestión de operaciones de recepción, check-in/check-out de huéspedes y manejo de reservas, garantizando una experiencia fluida para los clientes.',
      tecnologias: ['WordPress', 'Elementor', 'SEO', 'Motor de Reservas'],
    },
    {
      empresa: 'AsistoYA',
      rol: 'Fundador · CEO & Co-Founder',
      periodo: 'Ago. 2025 - Actualidad',
      tipo: 'Emprendimiento',
      ubicacion: 'República Dominicana',
      actual: true,
      descripcion:
        'Fundé AsistoYA para resolver un problema real: la asistencia escolar manual es lenta y no avisa a los padres cuando un estudiante no llega a la escuela.\n\nDesarrollé una app impulsada por IA y reconocimiento facial que notifica a las familias en tiempo real sobre llegadas, salidas o ausencias. El resultado: 3er lugar nacional (MESCyT 2025), capital semilla levantado y producto lanzado con éxito en Google Play Store.',
      tecnologias: ['Computer Vision', 'IA', 'Liderazgo', 'Gestión de Producto', 'Innovación'],
    },
    {
      empresa: 'El Pensum',
      rol: 'Desarrollador Front-End',
      periodo: 'Nov. 2025 - Feb. 2026',
      tipo: 'Contrato de prácticas',
      ubicacion: 'República Dominicana',
      descripcion:
        'Desarrollo de la plataforma educativa "El Pensum" para explorar universidades y programas académicos en República Dominicana.\n\nImplementación de interfaces de usuario interactivas con Angular y TypeScript, manejo de datos con JSON y contribución al sistema de cobros digitales.',
      tecnologias: ['Angular', 'TypeScript', 'JSON', 'Node.js'],
    },
    {
      empresa: 'Velero Beach Resort',
      rol: 'Front Desk / Recepcionista',
      periodo: 'Abr. 2025 - Feb. 2026',
      tipo: 'Jornada completa',
      ubicacion: 'República Dominicana',
      descripcion:
        'Recepción en un exclusivo hotel-condominio frente al mar. Bienvenida y atención a huéspedes nacionales e internacionales con calidez y profesionalismo.\n\nGestión eficiente de reservas y check-in/check-out, resolución de solicitudes especiales e incidencias, y auditoría nocturna de las operaciones del día (recepción y restaurante).',
      tecnologias: ['Hotello (PMS)', 'Expedia', 'Booking', 'Auditoría', 'Etiqueta telefónica'],
    },
    {
      empresa: 'EyP Multiservices (Claro)',
      rol: 'Asistente Administrativo',
      periodo: 'Nov. 2024 - Mar. 2025',
      tipo: 'Contrato temporal',
      ubicacion: 'República Dominicana · Presencial',
      descripcion:
        'A cargo de diversas tareas administrativas, obteniendo una base sólida en administración de oficina y soporte técnico para portales como CRM y ERP.\n\nAtención y asistencia a clientes y promotores de venta, gestión de documentos, elaboración de facturas, organización de procesos y resolución de incidencias.',
      tecnologias: ['CRM', 'ERP', 'Microsoft Excel', 'Google Workspace', 'AnyDesk', 'Canva'],
    },
    {
      empresa: 'Lic. Wilson Manuel Sosa',
      rol: 'Asistente de Contabilidad',
      periodo: 'Jul. 2023 - May. 2024',
      tipo: 'Jornada completa',
      ubicacion: 'República Dominicana',
      descripcion:
        'Organización de facturas y atención a clientes de forma presencial y telefónica.\n\nDigitación y control de cobros dirigidos a la DGII, archivo y validación de documentación financiera, y manejo de los formularios 606/607.',
      tecnologias: ['Microsoft Excel', 'DGII', 'Formularios 606/607', 'Contabilidad'],
    },
  ],

  proyectos: [
    {
      id: 1,
      titulo: 'AsistoYA',
      subtitulo: 'Plataforma EdTech con IA y Reconocimiento Facial',
      descripcion:
        'AsistoYA es una plataforma de gestión educativa que automatiza el control de asistencia escolar mediante reconocimiento facial e inteligencia artificial, y fortalece la comunicación entre la escuela y las familias.\n\nComo fundador y CEO lideré el producto desde la idea hasta su lanzamiento: ganamos el 3er lugar en la Competencia Nacional de Emprendimiento (MESCyT 2025) tras ser seleccionados entre 40 ideas y competir contra 21 universidades, levantamos RD$400,000 de capital semilla y publicamos la app en Google Play Store.',
      imagen: '',
      destacado: true,
      tecnologias: ['Computer Vision', 'Reconocimiento Facial', 'IA', 'Liderazgo', 'Gestión de Producto'],
      caracteristicas: [
        'Asistencia digital en tiempo real',
        'Reconocimiento facial con IA',
        'Alertas inmediatas para padres y tutores',
        'Control de entradas, salidas, tardanzas y ausencias',
        'Gestión de estudiantes, cursos y profesores',
        'Reportes diarios, semanales y mensuales',
        'Gestión de múltiples sedes',
      ],
      logros: [
        '🏆 3er lugar nacional — MESCyT 2025',
        '💰 RD$400,000 de capital semilla',
        '📱 Lanzada en Google Play Store',
      ],
      urlEnVivo: 'https://asistoya.com',
      urlGooglePlay: 'https://play.google.com/store',
    },
    {
      id: 2,
      titulo: 'El Pensum',
      subtitulo: 'Plataforma educativa universitaria',
      descripcion:
        'Aplicación web desarrollada con Angular para explorar universidades y programas académicos en República Dominicana.\n\nComo desarrollador front-end (pasantía) implementé interfaces interactivas con Angular y TypeScript, integré datos vía JSON y colaboré con el backend en Node.js, incluyendo el sistema de cobros digitales.',
      imagen: '',
      tecnologias: ['Angular', 'TypeScript', 'JSON', 'Node.js', 'Docker', 'Nginx'],
      caracteristicas: [
        'Exploración de universidades y programas',
        'Interfaz interactiva con Angular',
        'Integración de datos académicos',
        'Sistema de cobros digitales',
      ],
      urlRepositorio: 'https://github.com/Elpensum/elpensum-frontend',
    },
    {
      id: 3,
      titulo: 'Shine and Beauty',
      subtitulo: 'Identidad de marca y e-commerce',
      descripcion:
        'Desarrollo de la identidad visual completa de la marca (logotipo y empaques), asegurando una imagen profesional para una línea de productos capilares.\n\nDiseño y gestión de la plataforma web para la exhibición y venta de productos, junto a la ejecución de estrategias de marketing digital y creación de contenido.',
      imagen: '',
      tecnologias: ['Brand Identity', 'Web Design', 'Marketing Digital', 'Canva'],
      caracteristicas: [
        'Diseño de logotipo y empaques',
        'Plataforma web de venta',
        'Estrategia de marketing digital',
        'Creación de contenido',
      ],
    },
  ],

  educacion: [
    {
      institucion: 'Universidad Abierta para Adultos (UAPA)',
      titulo: 'Ingeniería de Software',
      periodo: 'Nov. 2024 - Nov. 2028',
      descripcion:
        'Formación universitaria en desarrollo de sistemas informáticos, abarcando teoría de sistemas, análisis y calidad de software. Aptitudes: trabajo en equipo, lógica de programación y más.',
    },
    {
      institucion: 'Politécnico Prof. Juan Emilio Bosch Gaviño',
      titulo: 'Bachiller Técnico en Gestión Administrativa y Tributaria',
      periodo: '2021 - 2024',
      descripcion:
        'Bachillerato Técnico Profesional (Ord. 14\'2017) certificado por el MINERD, con exención de pasantía por experiencia laboral previa.',
      imagen: '/certificados/bachiller.jpg',
    },
  ],

  certificaciones: [
    {
      titulo: 'TypeScript: From First Steps to Professional',
      entidad: 'Master.dev (antes Frontend Masters)',
      fecha: 'Feb. 2026',
      credencialId: 'baba173e58-jfuxcgueUy',
      color: '#3178c6',
    },
    {
      titulo: 'Desarrollo Web Front-End con Angular',
      entidad: 'ITLA — Instituto Tecnológico de las Américas',
      fecha: 'Ene. 2026',
      horas: '40 horas',
      color: '#dd0031',
    },
    {
      titulo: 'Desarrollo Web Full Stack — Nivel Intermedio',
      entidad: 'Cymetria Group / INDOTEL / BID',
      fecha: 'Ene. 2026',
      horas: '80 horas',
      color: '#0a7d55',
    },
    {
      titulo: 'Google Play Store Listing Certificate',
      entidad: 'Google Play Academy',
      fecha: 'Sep. 2025',
      vencimiento: 'Sep. 2028',
      credencialId: '160885006',
      color: '#4285f4',
      imagen: '/certificados/google-play.png',
    },
    {
      titulo: 'Python Essentials 1',
      entidad: 'Cisco',
      fecha: '2025',
      urlCredencial: 'https://www.credly.com/',
      color: '#f2b705',
    },
    {
      titulo: 'Uso de Herramientas Tecnológicas Colaborativas y de Gestión de Proyectos',
      entidad: 'Universidad Iberoamericana (UNIBE)',
      fecha: 'Mar. 2025',
      horas: '8 horas',
      color: '#6a2c91',
      imagen: '/certificados/unibe.png',
    },
    {
      titulo: 'Diploma en el Idioma Inglés',
      entidad: 'Natural Languages Institute (NLI)',
      fecha: 'Dic. 2019',
      credencialId: 'Reg. 519448',
      color: '#c0392b',
      imagen: '/certificados/ingles.jpg',
    },
  ],

  idiomas: [
    {
      nombre: 'Español',
      nivel: 'Lengua materna',
      porcentaje: 100,
      detalle: 'Competencia nativa',
      bandera: '🇩🇴',
    },
    {
      nombre: 'Inglés',
      nivel: 'Competencia profesional',
      porcentaje: 70,
      detalle: 'Duolingo English Test: 115 · Mar. 2026',
      bandera: '🇺🇸',
    },
  ],

  recomendaciones: [
    {
      autor: 'Mtra. Alejandra Hernández Acosta',
      cargo: 'Rectora',
      entidad: 'Universidad Abierta para Adultos (UAPA)',
      fecha: 'Ago. 2025',
      resumen:
        'Felicitaciones oficiales por obtener el 3er lugar en el Concurso de Emprendimiento del MESCyT con el proyecto AsistoYA: «Su talento y esfuerzo han sido valorados en un escenario tan competitivo y prestigioso. ¡Siga soñando en grande, trabajando con pasión y creyendo en el poder de sus ideas!»',
      imagen: '/certificados/carta-uapa.jpg',
      color: '#1d3557',
    },
    {
      autor: 'Lic. Wilson Manuel Sosa',
      cargo: 'Contador Público Autorizado (Exequátur 156-07)',
      entidad: 'Politécnico Prof. Juan Bosch',
      fecha: 'May. 2024',
      resumen:
        'Constancia de las actividades formativas desempeñadas por Enmanuel en el área de Gestión Administrativa y Tributaria: atención al cliente, organización de facturas y digitación de cobros de la DGII, avalando su desempeño profesional.',
      imagen: '/certificados/carta-wilson.jpg',
      color: '#2a9d8f',
    },
  ],

  contacto: {
    gmail: 'reynosoenmanuel166@gmail.com',
    github: 'https://github.com/EnmanuelReynoso23',
    linkedin: 'https://www.linkedin.com/in/enmanuel-reynoso-salazar/',
    sitioWeb: 'https://asistoya.com',
  },
}
