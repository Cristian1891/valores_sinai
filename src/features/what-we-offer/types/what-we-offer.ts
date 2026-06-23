import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
export interface EspacioCardProps {
  nombre: string
  descripcion: string
  imagen: string
  alt: string
  tag?: string
  objectPosition?: string
}

export interface FotoItem {
  src: string
  alt: string
  titulo: string
  descripcion: string
  className?: string
}

export interface LightboxSlide {
  src: string
  title: string
  description: string
}

export interface TipoGrupoItem {
  titulo: string
  descripcion: string
  icon: ReactNode
}

export interface QuickContactItem {
  href: string
  label: string
  icon: LucideIcon
  external?: boolean
}

export interface ClaimItem {
  key: string
  label: string
  text: string
}

export interface UseVideoPlaybackReturn {
  videoRef:       React.RefObject<HTMLVideoElement | null>
  isPlaying:      boolean
  togglePlayback: () => void
}