import { createContext, useContext } from 'react'

export interface AudioContextType {
  isPlaying: boolean
  videoUrl: string
  togglePlay: () => void
  setVideoUrl: (url: string) => void
}

/** Separado del provider: un archivo que exporta componentes y funciones a la vez rompe el fast refresh. */
export const AudioCtx = createContext<AudioContextType | undefined>(undefined)

export function useAudio(): AudioContextType {
  const context = useContext(AudioCtx)
  if (!context) throw new Error('useAudio debe usarse dentro de AudioProvider')
  return context
}
