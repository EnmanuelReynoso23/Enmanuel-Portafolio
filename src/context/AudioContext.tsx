import { createContext, useContext, useCallback, useState, useMemo, type ReactNode } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const DEFAULT_URL = 'https://www.youtube.com/watch?v=djdxSEks2ww&t=197s'

function extractVideoId(url: string): string {
  const match = url.match(/[?&]v=([^&]+)/)
  return match ? match[1] : ''
}

function extractStartTime(url: string): number {
  const match = url.match(/[?&]t=(\d+)/)
  return match ? parseInt(match[1]) : 0
}

interface AudioContextType {
  isPlaying: boolean
  videoUrl: string
  togglePlay: () => void
  setVideoUrl: (url: string) => void
}

const AudioCtx = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const [videoUrl, setVideoUrl] = useLocalStorage('wii-video-url', DEFAULT_URL)
  // El usuario debe darle play manualmente
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = useCallback(() => setIsPlaying(prev => !prev), [])

  const videoId = useMemo(() => extractVideoId(videoUrl), [videoUrl])
  const startTime = useMemo(() => extractStartTime(videoUrl), [videoUrl])

  const iframeSrc = useMemo(() => {
    if (!videoId) return ''
    const params = new URLSearchParams({
      autoplay: '1',
      loop: '1',
      playlist: videoId,
      controls: '0',
      disablekb: '1',
      modestbranding: '1',
      rel: '0',
      showinfo: '0',
      start: String(startTime),
    })
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
  }, [videoId, startTime])

  return (
    <AudioCtx.Provider value={{ isPlaying, videoUrl, togglePlay, setVideoUrl }}>
      {isPlaying && iframeSrc && (
        <div style={{
          position: 'fixed',
          width: '300px',
          height: '150px',
          bottom: '-200px',
          left: '-400px',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: -999,
        }}>
          <iframe
            src={iframeSrc}
            width="300"
            height="150"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            title="Reproductor de música"
            style={{ border: 'none' }}
          />
        </div>
      )}
      {children}
    </AudioCtx.Provider>
  )
}

export function useAudio(): AudioContextType {
  const context = useContext(AudioCtx)
  if (!context) throw new Error('useAudio debe usarse dentro de AudioProvider')
  return context
}
