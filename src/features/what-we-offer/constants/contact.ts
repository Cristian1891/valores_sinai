// src/features/what-we-offer/constants/contact.ts
import { Mail, MapPin } from 'lucide-react'
import type { QuickContactItem } from '../types/what-we-offer'

export const QUICK_CONTACT_ITEMS: QuickContactItem[] = [
  {
    href: 'mailto:valoressinai@gmail.com',
    label: 'valoressinai@gmail.com',
    icon: Mail,
  },
  {
    href: 'https://maps.google.com/?q=Avenida+Juan+Domingo+Peron+3251+Derqui',
    label: 'Av. Juan Domingo Perón 3251, Pres. Derqui',
    icon: MapPin,
    external: true,
  },
]