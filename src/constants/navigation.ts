import type { FooterNavLink, MenuItem } from '../types/global';

export const MENU_ITEMS: MenuItem[] = [
  { key: 'home',        url: '/' },
  { key: 'aboutUs',     url: '/quienes-somos' },
  { key: 'academy',     url: '/academia' },
  { key: 'whatWeOffer', url: '/que-ofrecemos' },
  { key: 'contactUs',     url: '/contacto' }
];


export const FOOTER_NAV_LINKS: FooterNavLink[] = [
  { key: 'home',         to: '/'           },
  { key: 'aboutUs',      to: '/quienes-somos' },
  { key: 'academy',     to: '/academia' },
  { key: 'whatWeOffer', to: '/que-ofrecemos' },
  { key: 'contactUs',     to: '/contacto' },  
  { key: 'donate',     to: '/donar' }
] as const;

