import type { LucideIcon } from 'lucide-react'
import {
  Banknote,
  Bot,
  Briefcase,
  Code2,
  Cog,
  DraftingCompass,
  Globe,
  Palette,
  Smartphone,
  Trophy,
  Wrench,
} from 'lucide-react'

/** Los datos del portafolio nombran su icono; aquí se traduce a lucide. */
const ICONOS: Record<string, LucideIcon> = {
  trofeo: Trophy,
  dinero: Banknote,
  movil: Smartphone,
  trabajo: Briefcase,
  codigo: Code2,
  diseno: Palette,
  sistema: Cog,
  ia: Bot,
  herramientas: Wrench,
  web: Globe,
  arquitectura: DraftingCompass,
}

export function IconoDato({ nombre, size = 22 }: { nombre: string; size?: number }) {
  const Icono = ICONOS[nombre]
  return Icono ? <Icono size={size} aria-hidden="true" /> : null
}
