import { useMemo } from "react";
import {
  User,
  Briefcase,
  Wrench,
  Cpu,
  GraduationCap,
  Mail,
  FolderCode,
  FolderGit2,
  Award,
  Languages,
  Quote,
} from "lucide-react";
import type { Canal } from "@/types";
import { useLanguage } from "@/i18n/useLanguage";

const iconProps = { size: "100%", strokeWidth: 1.5 };

/**
 * Los canales dependen del idioma activo (títulos y descripciones) y de los
 * proyectos, así que se construyen en un hook en vez de en una constante.
 */
export function useCanales(): Canal[] {
  const { t, datos } = useLanguage();

  return useMemo<Canal[]>(
    () => {
      const proyectos = datos.proyectos.map((proyecto, index) => ({
        id: 11 + index,
        titulo: proyecto.titulo,
        icono: <FolderCode {...iconProps} color="#a0c4ff" />,
        ruta: `/proyecto/${proyecto.id}`,
        descripcion:
          proyecto.subtitulo ||
          proyecto.descripcion.slice(0, 50) +
            (proyecto.descripcion.length > 50 ? "..." : ""),
        animacion: "animate-bounce-slight",
      }));

      // Cada página muestra 6 canales: la primera lleva el perfil, los
      // proyectos principales y el contacto, que es lo que busca quien evalúa.
      return [
        {
          id: 1,
          titulo: t.tituloSobreMi,
          icono: <User {...iconProps} color="#4fa3d1" />,
          ruta: "/sobre-mi",
          descripcion: t.descSobreMi,
          animacion: "animate-float-gentle",
        },
        {
          id: 2,
          titulo: t.tituloExperiencia,
          icono: <Briefcase {...iconProps} color="#f9a03f" />,
          ruta: "/experiencia",
          descripcion: t.descExperiencia,
          animacion: "animate-swing",
        },
        ...proyectos.slice(0, 3),
        {
          id: 9,
          titulo: t.tituloContacto,
          icono: <Mail {...iconProps} color="#2a9d8f" />,
          ruta: "/contacto",
          descripcion: t.descContacto,
          animacion: "animate-wiggle",
        },
        ...proyectos.slice(3),
        {
          id: 10,
          titulo: t.tituloRepositorios,
          icono: <FolderGit2 {...iconProps} color="#6d6875" />,
          ruta: "/repositorios",
          descripcion: t.descRepositorios,
          animacion: "animate-float-gentle",
        },
        {
          id: 4,
          titulo: t.tituloStack,
          icono: <Cpu {...iconProps} color="#8a0c25" />,
          ruta: "/stack-tecnico",
          descripcion: t.descStack,
          animacion: "animate-pulse-glow",
        },
        {
          id: 3,
          titulo: t.tituloHabilidades,
          icono: <Wrench {...iconProps} color="#e63946" />,
          ruta: "/habilidades",
          descripcion: t.descHabilidades,
          animacion: "animate-spin-slow",
        },
        {
          id: 5,
          titulo: t.tituloEducacion,
          icono: <GraduationCap {...iconProps} color="#1d3557" />,
          ruta: "/educacion",
          descripcion: t.descEducacion,
          animacion: "animate-bounce-slight",
        },
        {
          id: 6,
          titulo: t.tituloCertificaciones,
          icono: <Award {...iconProps} color="#f2b705" />,
          ruta: "/certificaciones",
          descripcion: t.descCertificaciones,
          animacion: "animate-pulse-glow",
        },
        {
          id: 7,
          titulo: t.tituloIdiomas,
          icono: <Languages {...iconProps} color="#2a9d8f" />,
          ruta: "/idiomas",
          descripcion: t.descIdiomas,
          animacion: "animate-float-gentle",
        },
        {
          id: 8,
          titulo: t.tituloRecomendaciones,
          icono: <Quote {...iconProps} color="#1d3557" />,
          ruta: "/recomendaciones",
          descripcion: t.descRecomendaciones,
          animacion: "animate-swing",
        },
      ];
    },
    [t, datos],
  );
}
