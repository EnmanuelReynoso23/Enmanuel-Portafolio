import type { DatosPortafolio } from '@/types'

export const datosPortafolio: DatosPortafolio = {
  sobreMi: {
    nombre: 'Enmanuel Reynoso Salazar',
    titulo: 'Tecnología Hotelera & Software Engineer',
    headline: 'Tecnología hotelera · Cloudbeds y PMS · Ingeniería de Software',
    biografia:
      'He trabajado los dos lados de la tecnología hotelera. En recepción llevé la operación diaria sobre un PMS: reservas, check-in/check-out, facturación y auditoría nocturna. Hoy trabajo a diario en Cloudbeds y administro el sitio web y el motor de reservas de un hotel.\n\nDel otro lado construyo software. Soy fundador y desarrollador principal de AsistoYA, una plataforma SaaS multi-tenant en producción que ganó el 3er lugar nacional en el MESCyT 2025 y levantó RD$400,000 de capital semilla.\n\nCuando digitalicé la auditoría nocturna que yo mismo hacía a mano, entendí para qué sirve esta combinación: conocer el dolor de la operación y saber convertirlo en producto.',
    avatar: '/tipos/Imagenes/image.png',
    ubicacion: 'República Dominicana',
    disponibilidad: 'Abierto a oportunidades remotas',
    aptitudesPrincipales: ['Cloudbeds (PMS)', 'React', 'TypeScript', 'Python', 'Node.js', 'Git'],
    logros: [
      { icono: '🏆', valor: '3er Lugar', etiqueta: 'Nacional MESCyT 2025' },
      { icono: '💰', valor: 'RD$400K', etiqueta: 'Capital semilla levantado' },
      { icono: '📱', valor: 'Google Play', etiqueta: 'Producto lanzado' },
      { icono: '💼', valor: '3 años', etiqueta: 'De trayectoria laboral' },
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
      categoria: 'Hostelería & CMS',
      icono: '🌐',
      tecnologias: ['Cloudbeds', 'Hotello (PMS)', 'Motores de Reservas', 'WordPress', 'Elementor', 'SEO'],
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
        'Trabajo a diario en Cloudbeds: reservas, tarifas y disponibilidad, y configuración de la propiedad. Mantengo tarifas e inventario consistentes entre el motor de reservas y los canales OTA, detectando desajustes entre lo que tiene el PMS y lo que ve el huésped.\n\nAdministro el sitio web del hotel (WordPress y Elementor): actualización de contenido, configuración del motor de reservas y optimización de páginas.\n\nOperación de recepción: check-in/check-out, solicitudes de huéspedes y manejo de reservas por canal directo y OTA.',
      tecnologias: ['Cloudbeds (PMS)', 'WordPress', 'Elementor', 'Motor de Reservas', 'OTA', 'SEO'],
    },
    {
      empresa: 'AsistoYA',
      rol: 'Fundador · CEO y Desarrollador Principal',
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
      rol: 'Recepcionista y Auditor Nocturno',
      periodo: 'Abr. 2025 - Feb. 2026',
      tipo: 'Jornada completa',
      ubicacion: 'República Dominicana',
      descripcion:
        'Recepción en un exclusivo hotel-condominio frente al mar. Bienvenida y atención a huéspedes nacionales e internacionales con calidez y profesionalismo.\n\nAuditoría nocturna sobre Hotello (PMS): cuadre de las transacciones del día, ingresos y métodos de pago entre recepción y restaurante, resolución de descuadres y cierre del sistema.\n\nGestión de reservas y check-in/check-out, canales OTA (Booking.com, Expedia) y resolución de solicitudes especiales e incidencias.',
      tecnologias: ['Hotello (PMS)', 'Auditoría nocturna', 'Booking.com', 'Expedia', 'Cuadre de caja'],
    },
    {
      empresa: 'EyP Multiservices (Claro)',
      rol: 'Asistente Administrativo y de Soporte Técnico',
      periodo: 'Nov. 2024 - Mar. 2025',
      tipo: 'Contrato temporal',
      ubicacion: 'República Dominicana · Presencial',
      descripcion:
        'A cargo de diversas tareas administrativas, obteniendo una base sólida en administración de oficina y soporte técnico para portales como CRM y ERP.\n\nAtención y asistencia a clientes y promotores de venta, gestión de documentos, elaboración de facturas, organización de procesos y resolución de incidencias.',
      tecnologias: ['CRM', 'ERP', 'Microsoft Excel', 'Google Workspace', 'AnyDesk', 'Canva'],
    },
    {
      empresa: 'Lic. Wilson Manuel Sosa, CPA',
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
      // TODO: poner la URL real de la ficha en Google Play.
      // Apuntaba a play.google.com/store (la tienda genérica), no a la app.
    },
    {
      id: 4,
      titulo: 'Sistema de Auditoría Nocturna',
      subtitulo: 'Aplicación web para hoteles',
      descripcion:
        'Digitalicé el proceso de auditoría nocturna que yo mismo hacía a mano en la recepción del hotel: cuadrar a mano las transacciones del día antes de cerrar el sistema, hoja por hoja.\n\nLa aplicación registra check-ins y check-outs, factura automáticamente, desglosa las ventas por categoría, turno y método de pago, y muestra una cuenta regresiva para el cierre del sistema.\n\nEs el proyecto que mejor explica lo que hago: nació de un dolor que sufrí en la operación, no de un ejercicio de clase.',
      imagen: '',
      tecnologias: ['React', 'TypeScript', 'Tailwind CSS'],
      caracteristicas: [
        'Registro de check-in y check-out',
        'Facturación automática',
        'Desglose de ventas por categoría, turno y método de pago',
        'Cuadre de transacciones del día',
        'Cuenta regresiva para el cierre del sistema',
      ],
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
      // TODO: poner la URL real del badge en Credly (apuntaba a la raíz del sitio).
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
    cv: '/CV-Enmanuel-Reynoso.pdf',
  },
}
