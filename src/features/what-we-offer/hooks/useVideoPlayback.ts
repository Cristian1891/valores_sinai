// src/features/what-we-offer/hooks/useVideoPlayback.ts

import { useEffect, useRef, useState } from 'react'

export interface UseVideoPlaybackReturn {
  // React 19: useRef<T>(null) retorna RefObject<T | null>.
  // Se declara con null explícito para reflejar el tipo real del hook
  // y evitar el error de asignación en TypeScript estricto.
  videoRef:       React.RefObject<HTMLVideoElement | null>
  isPlaying:      boolean
  togglePlayback: () => void
}

export function useVideoPlayback(): UseVideoPlaybackReturn {
  const videoRef   = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mq.matches) {
      videoRef.current?.pause()
      setIsPlaying(false)
    }

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        videoRef.current?.pause()
        setIsPlaying(false)
      } else {
        videoRef.current?.play()
        setIsPlaying(true)
      }
    }

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const togglePlayback = () => {
    if (isPlaying) {
      videoRef.current?.pause()
      setIsPlaying(false)
    } else {
      videoRef.current?.play()
      setIsPlaying(true)
    }
  }

  return { videoRef, isPlaying, togglePlayback }
}