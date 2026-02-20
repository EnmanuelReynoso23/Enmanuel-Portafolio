import { User, Briefcase, Wrench, Cpu, GraduationCap, Mail, FolderCode } from 'lucide-react'
import type { Canal } from '@/types'
import { datosPortafolio } from './portfolio'

const iconProps = { size: "100%", strokeWidth: 1.5 }

export const canales: Canal[] = [
  {
    id: 1,
    titulo: 'Sobre Mí',
    icono: <User {...iconProps} color="#4fa3d1" />,
    ruta: '/sobre-mi',
    descripcion: 'Conoce quién soy',
    animacion: 'animate-float-gentle'
  },
  {
    id: 2,
    titulo: 'Experiencia',
    icono: <Briefcase {...iconProps} color="#f9a03f" />,
    ruta: '/experiencia',
    descripcion: 'Mi trayectoria laboral',
    animacion: 'animate-swing'
  },
  {
    id: 3,
    titulo: 'Habilidades',
    icono: <Wrench {...iconProps} color="#e63946" />,
    ruta: '/habilidades',
    descripcion: 'Mis habilidades blandas y de gestión',
    animacion: 'animate-spin-slow'
  },
  {
    id: 4,
    titulo: 'Stack Técnico',
    icono: <Cpu {...iconProps} color="#8a0c25" />,
    ruta: '/stack-tecnico',
    descripcion: 'Tecnologías que manejo',
    animacion: 'animate-pulse-glow'
  },
  {
    id: 5,
    titulo: 'Educación',
    icono: <GraduationCap {...iconProps} color="#1d3557" />,
    ruta: '/educacion',
    descripcion: 'Mi formación académica',
    animacion: 'animate-bounce-slight'
  },
  {
    id: 6,
    titulo: 'Contacto',
    icono: <Mail {...iconProps} color="#2a9d8f" />,
    ruta: '/contacto',
    descripcion: 'Ponte en contacto conmigo',
    animacion: 'animate-wiggle'
  },
  ...datosPortafolio.proyectos.map((proyecto, index) => ({
    id: 7 + index,
    titulo: proyecto.titulo,
    icono: <FolderCode {...iconProps} color="#a0c4ff" />,
    ruta: `/proyecto/${proyecto.id}`,
    descripcion: proyecto.descripcion.slice(0, 50) + (proyecto.descripcion.length > 50 ? '...' : ''),
  })),
]
