import type { DatosPortafolio } from '@/types'

export const datosPortafolio: DatosPortafolio = {
  sobreMi: {
    nombre: 'Enmanuel Reynoso Salazar',
    titulo: 'TÉCNICO ADMINISTRATIVO & DESARROLLADOR WEB FULL STACK',
    biografia: 'Técnico en gestión administrativa y tributaria e estudiante de Ingenieria en Software, con conocimiento en operaciones administrativas, auditoría y control de procesos. Respetuoso y con gran disposición para aprender y crecer profesionalmente.\n\nMe destaco por mi vocación de servicio, habilidades de comunicación y facilidad para adaptarme a nuevos entornos laborales.',
    avatar: '/tipos/Imagenes/image.png',
    ubicacion: 'República Dominicana',
  },

  habilidades: [
    { nombre: 'Atención al Cliente', nivel: 90, categoria: 'Habilidades Blandas' },
    { nombre: 'Gestión Administrativa', nivel: 85, categoria: 'Administración' },
    { nombre: 'Auditoría', nivel: 80, categoria: 'Administración' },
    { nombre: 'Comunicación', nivel: 95, categoria: 'Habilidades Blandas' },
    { nombre: 'Liderazgo', nivel: 80, categoria: 'Habilidades Blandas' },
    { nombre: 'Adaptabilidad', nivel: 85, categoria: 'Habilidades Blandas' },
  ],

  stackTecnico: [
    {
      categoria: 'Herramientas Administrativas',
      tecnologias: ['Microsoft Excel', 'Google Workspace', 'Hotello (PMS)', 'Expedia/Booking', 'CRM/ERP', 'Canva'],
    },
    {
      categoria: 'Frontend',
      tecnologias: ['React', 'Angular', 'TypeScript', 'HTML5', 'CSS3', 'Vite'],
    },
    {
      categoria: 'Backend',
      tecnologias: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    },
    {
      categoria: 'Herramientas de Desarrollo',
      tecnologias: ['Git', 'VS Code', 'npm', 'Figma'],
    }
  ],

  experiencia: [

    {
      empresa: 'El Pensum',
      rol: 'Desarrollador Web Full Stack (Pasantía)',
      periodo: 'Pasantía',
      descripcion: 'Desarrollo de la plataforma educativa "El Pensum".\n\nImplementación de interfaces de usuario interactivas con Angular y TypeScript, y desarrollo del backend utilizando Node.js.\nSupervisión y organización visual de grandes volúmenes de datos académicos.',
      tecnologias: ['Angular', 'TypeScript', 'Node.js'],
    },

    {
      empresa: 'Hotel Velero Beach Resort',
      rol: 'Recepcionista e Auditor',
      periodo: '05/2025 - Presente',
      descripcion: 'Atención a huéspedes nacionales e internacionales. Gestión de reservas, check-in, check-out, facturación y manejo de caja.\nManejo de las auditorias nocturnas, auditando todo lo realizado en el día y en la noche (Restaurante y Recepción).',
      tecnologias: ['Hotello (PMS)', 'Expedia', 'Booking'],
    },
    {

      empresa: 'EyP Multiservices Claro',
      rol: 'Asistente Administrativo',
      periodo: '11/2024 - 04/2026',
      descripcion: 'Atención y asistencia al cliente y promotores de venta técnica y administrativa.\nGestión de documentos, elaboración de facturas y soporte en sistemas internos. Organización de procesos y resolución de incidencias.',
      tecnologias: ['Microsoft Excel', 'Google Workspace', 'CRM', 'ERP', 'AnyDesk', 'Canva'],
    },
    {
      empresa: 'Lic. Wilson Manuel Sosa',
      rol: 'Asistente de Contabilidad',
      periodo: '07/2023 - 05/2024',
      descripcion: 'Organización de facturas y atención a clientes (presencial y telefónica).\nDigitación y control de cobros dirigidos a la DGII, archivo y validación de documentación financiera.',
      tecnologias: ['Microsoft Excel', 'Word', 'DGII', 'Formularios 606/607', 'Correos Corporativos'],
    },
    
  ],

  proyectos: [
    {
      id: 1,
      titulo: 'AsistoYa',
      descripcion: 'Plataforma de gestión educativa diseñada para automatizar el control de asistencia y fortalecer la comunicación escuela-familia mediante tecnología.\n\nGanador del 3er Lugar en la Competencia Nacional de Emprendimiento (MESCYT) compitiendo contra 21 universidades.\nPropuesta seleccionada tras evaluación de 40 ideas de negocio, destacando por su innovación e impacto social.',
      imagen: '',
      tecnologias: ['Liderazgo', 'Gestión de Proyectos', 'Innovación Social'],
    },
    {
      id: 2,
      titulo: 'El Pensum',
      descripcion: 'Aplicación web desarrollada con Angular para explorar universidades y programas académicos en República Dominicana.\n\nFui Desarrollador Web Full Stack en este proyecto (Pasantía), implementando la interfaz interactiva e integrando el backend con Node.js, así como implementando el sistema de cobros digitales.',
      imagen: '',
      tecnologias: ['Angular', 'TypeScript', 'Node.js', 'Docker', 'Nginx'],
      urlRepositorio: 'https://github.com/Elpensum/elpensum-frontend',
    },
    {
      id: 3,
      titulo: 'Shine and Beauty',
      descripcion: 'Desarrollo de la identidad visual completa de la marca (logotipo y empaques) asegurando imagen profesional para línea de productos capilares.\n\nDiseño y gestión de la plataforma web para la exhibición y venta de productos.\nEjecución de estrategias de marketing digital y creación de contenido.',
      imagen: '',
      tecnologias: ['Brand Identity', 'Web Design', 'Digital Marketing'],
    }
  ],

  educacion: [
    {       
      institucion: 'Universidad Abierta Para Adultos (UAPA)',
      titulo: 'Ingeniería en Software',
      periodo: '2023 - Actualidad',
      descripcion: 'Formación universitaria en desarrollo de software y ciencias de la computación.',
    },
    {       
      institucion: 'Politécnico Juan Emilio Bosch',
      titulo: 'Técnico en gestión administrativa y financiera',
      periodo: '2021 - 2024',
      descripcion: 'Educación secundaria modalidad Técnico Profesional. (Certificado por el Minerd, con exención de pasantía por experiencia laborar previa).',
    },
    {       
      institucion: 'CYMETRIA GROUP SAS / INDOTEL',
      titulo: 'Desarrollo Web Full Stack - Nivel Intermedio (80 horas)',
      periodo: 'Enero 2026',
      descripcion: 'Curso certificado completado satisfactoriamente.',
    },
    {       
      institucion: 'Universidad Iberoamericana (Unibe)',
      titulo: 'Uso de herramientas tecnológicas colaborativas y de gestión de proyectos',
      periodo: 'Octubre 2025 - Diciembre 2025',
      descripcion: 'Formación en herramientas modernas para el trabajo en equipo (40h).',
    },
    {       
      institucion: 'Natural Institute',
      titulo: 'Diplomado en el idioma Inglés',
      periodo: '2017 - 2020',
      descripcion: 'Formación en lengua inglesa.',
    }
  ],

  contacto: {
    gmail: 'reynosoenmanuel166@gmail.com',
    github: 'https://github.com/EnmanuelReynoso23',
    linkedin: 'https://www.linkedin.com/in/enmanuel-reynoso-salazar/es/',
  },
}
