import type { ContactItem } from "../types/home";
import { Mail, Phone, MapPin } from 'lucide-react';

export const CONTACT_ITEMS: ContactItem[] = [
  { key: 'email',   labelKey: 'contact.subtitle1', valueKey: 'contact.text1', hrefKey: 'contact.href1', icon: Mail,   external: false },
  { key: 'phone',   labelKey: 'contact.subtitle2', valueKey: 'contact.text2', hrefKey: 'contact.href2', icon: Phone,  external: false },
  { key: 'address', labelKey: 'contact.subtitle3', valueKey: 'contact.text3', hrefKey: 'contact.href3', icon: MapPin, external: true  },
];