import { useEffect, useRef, useState } from 'react'
import type { UseVideoPlaybackReturn } from '../types/what-we-offer'


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