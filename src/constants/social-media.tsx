import type { SocialLink } from '../types/global';
import { InstagramIcon, FacebookIcon, XIcon } from './social-media-icons';

// ─── Redes sociales ───────────────────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  {
    key:   'instagram',
    href:  'https://www.instagram.com/valores_sinai/',
    label: 'Instagram de Valores Sinaí',
    icon:  <InstagramIcon />,
  },
  {
    key:   'facebook',
    href:  'https://www.facebook.com/people/Valores-Sina%C3%AD/61573890669430/',
    label: 'Facebook de Valores Sinaí',
    icon:  <FacebookIcon />,
  },
  {
    key:   'x',
    href:  'https://x.com/ValoresSinai',
    label: 'X (Twitter) de Valores Sinaí',
    icon:  <XIcon />,
  },
];