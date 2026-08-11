export type Idioma = 'es' | 'en'

/**
 * Textos de la interfaz. El contenido del portafolio (experiencia, proyectos,
 * certificaciones…) no vive aquí: está en src/data/portfolio.ts y
 * src/data/portfolio.en.ts.
 */
export const textos = {
  es: {
    // Navegación
    inicio: 'Inicio',
    volverInicio: 'Volver al inicio',
    idioma: 'Idioma',
    cambiarIdioma: 'Cambiar a inglés',
    anterior: 'Página anterior',
    siguiente: 'Página siguiente',

    // Títulos de página
    tituloSobreMi: 'Sobre Mí',
    tituloExperiencia: 'Experiencia Laboral',
    tituloHabilidades: 'Habilidades',
    tituloStack: 'Stack Técnico',
    tituloEducacion: 'Educación',
    tituloCertificaciones: 'Certificaciones',
    tituloIdiomas: 'Idiomas',
    tituloRecomendaciones: 'Recomendaciones',
    tituloContacto: 'Contacto',
    tituloConfiguracion: 'Configuración',

    // Descripciones de los canales
    descSobreMi: 'Conoce quién soy',
    descExperiencia: 'Mi trayectoria laboral',
    descHabilidades: 'Habilidades técnicas y profesionales',
    descStack: 'Tecnologías que manejo',
    descEducacion: 'Mi formación académica',
    descCertificaciones: 'Licencias y certificados',
    descIdiomas: 'Idiomas que domino',
    descRecomendaciones: 'Cartas y reconocimientos',
    descContacto: 'Ponte en contacto conmigo',

    // Habilidades / Stack / Idiomas
    introHabilidades:
      'Un balance entre desarrollo de software, liderazgo de producto y habilidades profesionales.',
    introStack:
      'Tecnologías y herramientas que utilizo para construir productos de principio a fin.',
    introIdiomas: 'Idiomas que hablo y utilizo en entornos profesionales y de aprendizaje.',

    // Sobre Mí
    quienSoy: 'Quién soy',
    aptitudesPrincipales: 'Aptitudes principales',

    // Experiencia
    actual: 'Actual',

    // Educación
    introEducacion: 'Mi formación académica y profesional.',
    verTitulo: 'Ver título',

    // Certificaciones
    introCertificaciones:
      'Formación continua en desarrollo de software, tecnologías web e idiomas. Haz clic en un certificado para verlo en grande.',
    ampliar: 'Ampliar',
    verCertificado: 'Ver certificado',
    idCredencial: 'ID de la credencial',
    verCredencial: 'Ver credencial oficial',
    cerrar: 'Cerrar',

    certificadoDe: 'Certificado de finalización',
    otorgadoA: 'Otorgado a',

    // Recomendaciones
    introRecomendaciones:
      'Cartas y reconocimientos que avalan mi trabajo y trayectoria. Haz clic en «Ver carta» para leer el documento completo.',
    verCarta: 'Ver carta completa',
    cartaDe: 'Carta de recomendación de',

    // Contacto
    subtituloContacto: 'Disponible para oportunidades remotas',
    introContacto: '¿Tienes un proyecto en mente o una oportunidad? Hablemos.',
    descargarCV: 'Descargar mi CV',
    metaCV: 'PDF · 2 páginas · En inglés',
    etiquetaEmail: 'Email',
    etiquetaSitioWeb: 'Sitio Web',

    // Proyecto
    sobreProyecto: 'Sobre este proyecto',
    caracteristicas: 'Características',
    tecnologias: 'Tecnologías',
    enlaces: 'Enlaces',
    proyectoDestacado: 'Proyecto destacado',
    verEnVivo: 'Ver en vivo',
    verRepositorio: 'Ver repositorio',
    verEnGooglePlay: 'Ver en Google Play',

    // Configuración
    apariencia: 'Apariencia',
    reloj: 'Reloj',
    musicaDeFondo: 'Música de fondo',
    informacion: 'Información',

    // Intro
    continuar: 'Continuar',
    preguntaMusica: '¿Deseas activar la música de fondo?',
    textoMusica:
      'La experiencia original de este portafolio incluye música ambiente estilo retro.',
    noGracias: 'No, gracias',
    siActivar: 'Sí, activar música',
    musicaDesactivada: 'Música desactivada',
    textoMusicaDesactivada:
      'Recuerda que puedes activarla o cambiar la pista cuando lo desees usando el icono de música en la barra de control inferior.',
    entendido: 'Entendido',

    // Reproductor
    reproductor: 'Reproductor',
    pausar: 'Pausar',
    reproducir: 'Reproducir',
    reproduciendo: 'Reproduciendo…',
    enlaceYoutube: 'Enlace YouTube',
    presionaEnter: 'Presiona Enter ↵',
    pegaEnlace: 'Pega el enlace y presiona Enter',
    musica: 'Música',
  },

  en: {
    // Navigation
    inicio: 'Home',
    volverInicio: 'Back to home',
    idioma: 'Language',
    cambiarIdioma: 'Switch to Spanish',
    anterior: 'Previous page',
    siguiente: 'Next page',

    // Page titles
    tituloSobreMi: 'About Me',
    tituloExperiencia: 'Work Experience',
    tituloHabilidades: 'Skills',
    tituloStack: 'Tech Stack',
    tituloEducacion: 'Education',
    tituloCertificaciones: 'Certifications',
    tituloIdiomas: 'Languages',
    tituloRecomendaciones: 'Recommendations',
    tituloContacto: 'Contact',
    tituloConfiguracion: 'Settings',

    // Channel descriptions
    descSobreMi: 'Get to know me',
    descExperiencia: 'My career path',
    descHabilidades: 'Technical and professional skills',
    descStack: 'Technologies I work with',
    descEducacion: 'My academic background',
    descCertificaciones: 'Licenses and certificates',
    descIdiomas: 'Languages I speak',
    descRecomendaciones: 'Letters and recognitions',
    descContacto: 'Get in touch',

    // Skills / Stack / Languages
    introHabilidades:
      'A balance between software development, product leadership and professional skills.',
    introStack: 'Technologies and tools I use to build products end to end.',
    introIdiomas: 'Languages I speak and use in professional and learning settings.',

    // About Me
    quienSoy: 'Who I am',
    aptitudesPrincipales: 'Top skills',

    // Experience
    actual: 'Current',

    // Education
    introEducacion: 'My academic and professional background.',
    verTitulo: 'View diploma',

    // Certifications
    introCertificaciones:
      'Continuous training in software development, web technologies and languages. Click a certificate to see it full size.',
    ampliar: 'Zoom in',
    verCertificado: 'View certificate',
    idCredencial: 'Credential ID',
    verCredencial: 'View official credential',
    cerrar: 'Close',

    certificadoDe: 'Certificate of completion',
    otorgadoA: 'Awarded to',

    // Recommendations
    introRecomendaciones:
      'Letters and recognitions that back my work. Click “Read full letter” to open the document.',
    verCarta: 'Read full letter',
    cartaDe: 'Recommendation letter from',

    // Contact
    subtituloContacto: 'Available for remote opportunities',
    introContacto: 'Have a project in mind, or an opportunity? Let’s talk.',
    descargarCV: 'Download my CV',
    metaCV: 'PDF · 2 pages · English',
    etiquetaEmail: 'Email',
    etiquetaSitioWeb: 'Website',

    // Project
    sobreProyecto: 'About this project',
    caracteristicas: 'Features',
    tecnologias: 'Technologies',
    enlaces: 'Links',
    proyectoDestacado: 'Featured project',
    verEnVivo: 'View live',
    verRepositorio: 'View repository',
    verEnGooglePlay: 'View on Google Play',

    // Settings
    apariencia: 'Appearance',
    reloj: 'Clock',
    musicaDeFondo: 'Background music',
    informacion: 'Information',

    // Intro
    continuar: 'Continue',
    preguntaMusica: 'Would you like background music?',
    textoMusica:
      'The original experience of this portfolio includes retro-style ambient music.',
    noGracias: 'No, thanks',
    siActivar: 'Yes, play music',
    musicaDesactivada: 'Music off',
    textoMusicaDesactivada:
      'You can turn it on or change the track at any time with the music icon in the bottom bar.',
    entendido: 'Got it',

    // Player
    reproductor: 'Player',
    pausar: 'Pause',
    reproducir: 'Play',
    reproduciendo: 'Now playing…',
    enlaceYoutube: 'YouTube link',
    presionaEnter: 'Press Enter ↵',
    pegaEnlace: 'Paste the link and press Enter',
    musica: 'Music',
  },
} as const

/**
 * Las claves salen del español (la referencia), pero los valores se ensanchan
 * a string: con `as const` cada texto sería su propio tipo literal y el inglés
 * no encajaría. Si a `en` le falta una clave, la asignación en
 * LanguageContext deja de compilar.
 */
export type Textos = { readonly [K in keyof (typeof textos)['es']]: string }
