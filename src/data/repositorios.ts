import type { Idioma } from '@/i18n/strings'

export type GrupoRepositorio = 'propios' | 'equipo' | 'personales' | 'terceros'

export interface Repositorio {
  /** Nombre exacto en GitHub: de aquí sale el enlace. */
  nombre: string
  grupo: GrupoRepositorio
  lenguaje?: string
  descripcion: Record<Idioma, string>
}

export const USUARIO_GITHUB = 'EnmanuelReynoso23'

/**
 * Todos los repositorios públicos, con su origen real. Lo que parte de código
 * ajeno va en `terceros` aunque GitHub no lo marque como fork.
 */
export const repositorios: Repositorio[] = [
  {
    nombre: 'synrag',
    grupo: 'propios',
    lenguaje: 'Python',
    descripcion: {
      es: 'Búsqueda de código local por MCP para agentes de IA: fragmentos por AST, impacto de dependencias y cada cifra ligada a su script de medición.',
      en: 'Local MCP code search for AI agents: AST chunks, dependency impact, and every number tied to its benchmark script.',
    },
  },
  {
    nombre: 'CompuShare',
    grupo: 'propios',
    lenguaje: 'Python',
    descripcion: {
      es: 'Reparte las capas de un modelo de lenguaje abierto entre varias computadoras por internet, con llama.cpp y un relé WebSocket.',
      en: "Splits an open language model's layers across computers over the internet, using llama.cpp and a WebSocket relay.",
    },
  },
  {
    nombre: 'tama-p2p',
    grupo: 'propios',
    lenguaje: 'TypeScript',
    descripcion: {
      es: 'Animo: mascota virtual con hábitos y rachas, sincronizada entre teléfonos por P2P. Las mismas reglas corren en PWA, Raspberry Pi y ESP32-C3.',
      en: 'Animo: a virtual pet with habits and streaks, synced phone to phone over P2P. The same rules run on a PWA, a Raspberry Pi and an ESP32-C3.',
    },
  },
  {
    nombre: 'Sistema-de-auditoria-nocturna',
    grupo: 'propios',
    lenguaje: 'TypeScript',
    descripcion: {
      es: 'Aplicación web que digitaliza la auditoría nocturna de un hotel: entradas y salidas, facturación y ventas por turno y método de pago.',
      en: "Web app that digitizes a hotel's night audit: check-ins and check-outs, billing, and sales by shift and payment method.",
    },
  },
  {
    nombre: 'Enmanuel-Portafolio',
    grupo: 'propios',
    lenguaje: 'TypeScript',
    descripcion: {
      es: 'Este sitio: React, TypeScript y Vite, en español e inglés.',
      en: 'This site: React, TypeScript and Vite, in Spanish and English.',
    },
  },
  {
    nombre: 'Sistema-Edge-AI-TinyML',
    grupo: 'equipo',
    lenguaje: 'C',
    descripcion: {
      es: 'Mantenimiento predictivo de equipos con TinyML en hardware embebido. Proyecto universitario en equipo.',
      en: 'Predictive equipment maintenance with TinyML on embedded hardware. University team project.',
    },
  },
  {
    nombre: 'Sistema-de-inventario-CRUD',
    grupo: 'equipo',
    lenguaje: 'C#',
    descripcion: {
      es: 'Inventario con C#, Windows Forms y PostgreSQL. Proyecto en equipo.',
      en: 'Inventory app with C#, Windows Forms and PostgreSQL. Team project.',
    },
  },
  {
    nombre: 'Sistema-de-Facturacion',
    grupo: 'equipo',
    lenguaje: 'SQL',
    descripcion: {
      es: 'Base de datos relacional de facturación en MySQL, normalizada a tercera forma normal. Proyecto en equipo.',
      en: 'Relational billing database in MySQL, normalized to third normal form. Team project.',
    },
  },
  {
    nombre: 'Ingenieria-de-softw-2-',
    grupo: 'equipo',
    lenguaje: 'C#',
    descripcion: {
      es: 'Aplicación de escritorio de facturación en Windows Forms. Proyecto en equipo; mi aporte fue pequeño.',
      en: 'Billing desktop app in Windows Forms. Team project; my contribution was small.',
    },
  },
  {
    nombre: 'Inventario-Hospital',
    grupo: 'equipo',
    lenguaje: 'C++',
    descripcion: {
      es: 'Gestión del inventario de un hospital en C++, con interfaz gráfica.',
      en: 'Hospital inventory management in C++, with a graphical interface.',
    },
  },
  {
    nombre: 'Sistema-de-Electricidad',
    grupo: 'equipo',
    lenguaje: 'C++',
    descripcion: {
      es: 'Gestión de clientes, medidores y consumo eléctrico en C++.',
      en: 'Customer, meter and power consumption management in C++.',
    },
  },
  {
    nombre: 'Oracle-Next-Education---Notas',
    grupo: 'equipo',
    lenguaje: 'HTML',
    descripcion: {
      es: 'Notas y ejercicios del curso de lógica de programación de Oracle Next Education.',
      en: 'Notes and exercises from the Oracle Next Education programming logic course.',
    },
  },
  {
    nombre: 'sonic-classic-heroes-air',
    grupo: 'personales',
    lenguaje: 'C++',
    descripcion: {
      es: 'Mod de Sonic 3 A.I.R.: tres personajes en pantalla durante todo el juego y cambio de líder.',
      en: 'Sonic 3 A.I.R. mod: three characters on screen through the whole game, with leader switching.',
    },
  },
  {
    nombre: 'carta.san.valentin-main',
    grupo: 'personales',
    lenguaje: 'JavaScript',
    descripcion: {
      es: 'Película interactiva en pixel art que dura exactamente lo mismo que su banda sonora.',
      en: 'Interactive pixel-art film that runs exactly as long as its soundtrack.',
    },
  },
  {
    nombre: 'Chat-God',
    grupo: 'personales',
    lenguaje: 'TypeScript',
    descripcion: {
      es: 'Chat conversacional basado en las Escrituras, con Next.js, React y Vercel AI SDK.',
      en: 'Scripture-based conversational chat, built with Next.js, React and the Vercel AI SDK.',
    },
  },
  {
    nombre: 'Asistoya-Ceges',
    grupo: 'personales',
    lenguaje: 'JavaScript',
    descripcion: {
      es: 'Registro de estudiantes para el programa CEGES de la UAPA.',
      en: "Student registration web app for UAPA's CEGES program.",
    },
  },
  {
    nombre: 'AI-Chat-Assistant',
    grupo: 'personales',
    lenguaje: 'TypeScript',
    descripcion: {
      es: 'Asistente de chat con IA hecho con TypeScript.',
      en: 'AI chat assistant built with TypeScript.',
    },
  },
  {
    nombre: 'modulegit-website',
    grupo: 'personales',
    lenguaje: 'HTML',
    descripcion: {
      es: 'Página web del experimento ModuleGit.',
      en: 'Website for the ModuleGit experiment.',
    },
  },
  {
    nombre: 'music-player-ui-improvements',
    grupo: 'personales',
    lenguaje: 'JavaScript',
    descripcion: {
      es: 'Reproductor de música en React Native y Expo con la API de Spotify.',
      en: 'Music player in React Native and Expo, using the Spotify API.',
    },
  },
  {
    nombre: 'Image-Generator-APP',
    grupo: 'personales',
    lenguaje: 'TypeScript',
    descripcion: {
      es: 'Aplicación de imágenes con la API de Unsplash.',
      en: 'Image app built on the Unsplash API.',
    },
  },
  {
    nombre: 'Asistente-de-compra-en-amazon',
    grupo: 'personales',
    lenguaje: 'Python',
    descripcion: {
      es: 'Asistente por voz que busca productos en Amazon y abre sitios web.',
      en: 'Voice assistant that searches Amazon and opens websites.',
    },
  },
  {
    nombre: 'calculadora-a-voz',
    grupo: 'personales',
    lenguaje: 'Python',
    descripcion: {
      es: 'Calculadora con Tkinter que captura operaciones habladas.',
      en: 'Tkinter calculator that takes spoken operations.',
    },
  },
  {
    nombre: 'snake-python',
    grupo: 'personales',
    lenguaje: 'Python',
    descripcion: {
      es: 'El juego de la serpiente en un solo archivo de Python.',
      en: 'The snake game in a single Python file.',
    },
  },
  {
    nombre: 'Modulegit',
    grupo: 'terceros',
    lenguaje: 'C',
    descripcion: {
      es: 'Fork de git/git para experimentar con desarrollo modular.',
      en: 'Fork of git/git to experiment with modular development.',
    },
  },
  {
    nombre: 'Vision-Humana',
    grupo: 'terceros',
    descripcion: {
      es: 'Copia de la biblioteca human de vladmandic, con la documentación en español.',
      en: "Copy of vladmandic's human library, with the documentation in Spanish.",
    },
  },
  {
    nombre: 'christmas-tree',
    grupo: 'terceros',
    lenguaje: 'TypeScript',
    descripcion: {
      es: 'Fork del árbol de Navidad 3D con control por gestos de blackboxo, con cambios míos.',
      en: "Fork of blackboxo's 3D Christmas tree with hand-gesture control, with my own changes.",
    },
  },
  {
    nombre: 'volante-virtual-webcam',
    grupo: 'terceros',
    lenguaje: 'C#',
    descripcion: {
      es: 'Código de un tutorial de Ringa Tech para controlar videojuegos con gestos frente a la cámara.',
      en: 'Code from a Ringa Tech tutorial on controlling video games with gestures in front of a webcam.',
    },
  },
  {
    nombre: 'awesome-mcp-servers',
    grupo: 'terceros',
    descripcion: {
      es: 'Fork de la lista de servidores MCP de punkpeye.',
      en: "Fork of punkpeye's list of MCP servers.",
    },
  },
  {
    nombre: 'tensorblock-awesome-mcp-servers',
    grupo: 'terceros',
    descripcion: {
      es: 'Fork de la lista de servidores MCP de TensorBlock.',
      en: "Fork of TensorBlock's list of MCP servers.",
    },
  },
  {
    nombre: 'valentinawerle',
    grupo: 'terceros',
    descripcion: {
      es: 'Fork del README de perfil de otra persona.',
      en: "Fork of someone else's profile README.",
    },
  },
]
