// src/features/what-we-offer/types/what-we-offer.ts
//
// Tipos centralizados de la feature "Qué Ofrecemos".
// ─────────────────────────────────────────────────────────────────────────────
// REGLA: Cualquier interfaz usada en ≥ 2 archivos de esta feature vive acá.
//        Tipos locales de un único componente pueden quedarse inline.
// ─────────────────────────────────────────────────────────────────────────────

import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

// ── FeaturedSpaces ────────────────────────────────────────────────────────────

export interface EspacioCardProps {
  nombre: string
  descripcion: string
  imagen: string
  alt: string
  tag?: string
  /**
   * Punto focal del recorte de imagen. Acepta cualquier valor válido de
   * CSS `object-position` (ej: "right center", "75% 40%", "top").
   * Por defecto: "center" (comportamiento estándar de object-cover).
   *
   * Útil cuando el sujeto principal no está centrado y el recorte
   * automático lo cortaría. Evita editar la imagen original.
   */
  objectPosition?: string
}

// ── ImageGallery ──────────────────────────────────────────────────────────────

export interface FotoItem {
  src: string
  alt: string
  /** Título visible en el lightbox y en el overlay de la grilla */
  titulo: string
  /** Descripción visible en el lightbox */
  descripcion: string
  /** Clase adicional para variar alturas y romper la grilla uniforme */
  className?: string
}

/** Formato de slide que espera yet-another-react-lightbox */
export interface LightboxSlide {
  src: string
  title: string
  description: string
}

// ── Beneficiaries ─────────────────────────────────────────────────────────────

export interface TipoGrupoItem {
  titulo: string
  descripcion: string
  icon: ReactNode
}

// ── ContactOffer ──────────────────────────────────────────────────────────────

export interface QuickContactItem {
  href: string
  label: string
  icon: LucideIcon
  external?: boolean
}

// ── HeroOffer ─────────────────────────────────────────────────────────────────

export interface ClaimItem {
  key: string
  label: string
  text: string
}