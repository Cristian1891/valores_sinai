import { Mail, MapPin } from 'lucide-react'
import type { QuickContactItem } from '../types/what-we-offer'

export const QUICK_CONTACT_ITEMS: QuickContactItem[] = [
  {
    href: 'mailto:valoressinai@gmail.com', 
    label: 'valoressinai@gmail.com',
    icon: Mail,
  },
  {
    href: 'https://maps.app.goo.gl/KYuG84yqx3tkrJ6W6',
    label: 'Av. Juan Domingo Perón 3251, Pres. Derqui',
    icon: MapPin,
    external: true,
  },
]