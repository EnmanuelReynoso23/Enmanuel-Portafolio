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
  contacto: InfoContacto
}

export interface SobreMi {
  nombre: string
  titulo: string
  biografia: string
  avatar: string
  ubicacion: string
}

export interface Habilidad {
  nombre: string
  nivel: number
  categoria: string
}

export interface CategoriaTecnologica {
  categoria: string
  tecnologias: string[]
}

export interface EntradaExperiencia {
  empresa: string
  rol: string
  periodo: string
  descripcion: string
  tecnologias: string[]
}

export interface Proyecto {
  id: number
  titulo: string
  descripcion: string
  imagen: string
  tecnologias: string[]
  urlEnVivo?: string
  urlRepositorio?: string
}

export interface EntradaEducacion {
  institucion: string
  titulo: string
  periodo: string
  descripcion: string
}

export interface InfoContacto {
  gmail: string;
  github: string;
  linkedin: string;
  twitter?: string;
}