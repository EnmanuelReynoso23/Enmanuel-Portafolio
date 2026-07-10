import type React from 'react'

export interface Canal {
  id: number
  titulo: string
  icono: React.ReactNode | string
  ruta: string
  descripcion: string
  estaVacio?: boolean
  animacion?: string
}

export interface AjustesApp {
  tema: 'light' | 'dark'
  sonidoActivado: boolean
  volumen: number
  tamanoFuente: 'small' | 'medium' | 'large'
}

export interface Correo {
  id: number
  de: string
  asunto: string
  cuerpo: string
  fecha: string
  estaLeido: boolean
}

export interface DatosPortafolio {
  sobreMi: SobreMi
  habilidades: Habilidad[]
  stackTecnico: CategoriaTecnologica[]
  experiencia: EntradaExperiencia[]
  proyectos: Proyecto[]
  educacion: EntradaEducacion[]
  certificaciones: Certificacion[]
  idiomas: Idioma[]
  contacto: InfoContacto
}

export interface Logro {
  icono: string
  valor: string
  etiqueta: string
}

export interface SobreMi {
  nombre: string
  titulo: string
  headline: string
  biografia: string
  avatar: string
  ubicacion: string
  disponibilidad: string
  aptitudesPrincipales: string[]
  logros: Logro[]
}

export interface Habilidad {
  nombre: string
  nivel: number
  categoria: string
}

export interface CategoriaTecnologica {
  categoria: string
  icono?: string
  tecnologias: string[]
}

export interface EntradaExperiencia {
  empresa: string
  rol: string
  periodo: string
  descripcion: string
  tecnologias: string[]
  tipo?: string
  ubicacion?: string
  actual?: boolean
}

export interface Proyecto {
  id: number
  titulo: string
  subtitulo?: string
  descripcion: string
  imagen: string
  tecnologias: string[]
  caracteristicas?: string[]
  logros?: string[]
  destacado?: boolean
  urlEnVivo?: string
  urlRepositorio?: string
  urlGooglePlay?: string
}

export interface EntradaEducacion {
  institucion: string
  titulo: string
  periodo: string
  descripcion: string
}

export interface Certificacion {
  titulo: string
  entidad: string
  fecha: string
  vencimiento?: string
  credencialId?: string
  urlCredencial?: string
  horas?: string
  /** Ruta a una imagen/escaneo real del certificado (opcional). Ej: '/certificados/typescript.png' */
  imagen?: string
  /** Color de acento del certificado (opcional). */
  color?: string
}

export interface Idioma {
  nombre: string
  nivel: string
  porcentaje: number
  detalle?: string
  bandera?: string
}

export interface InfoContacto {
  gmail: string
  github: string
  linkedin: string
  twitter?: string
  telefono?: string
  sitioWeb?: string
}
