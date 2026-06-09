import type { HomeCard, HomeStat } from '../types/home';

export const homeStats: HomeStat[] = [
  { value: '10+', label: 'Años acompañando' },
  { value: '100%', label: 'Compromiso cristiano' },
  { value: '3', label: 'Líneas de acción' },
];

export const homeCards: HomeCard[] = [
  {
    title: 'Quiénes somos',
    description: 'Conocé nuestra misión, visión y el propósito que guía cada proyecto.',
    to: '/quienes-somos',
    cta: 'Ver más',
  },
  {
    title: 'Qué hacemos',
    description: 'Descubrí programas, talleres y acciones pensadas para servir a la comunidad.',
    to: '/que-hacemos',
    cta: 'Explorar',
  },
  {
    title: 'Donaciones',
    description: 'Sumate para sostener y multiplicar el impacto de la asociación.',
    to: '/donaciones',
    cta: 'Colaborar',
  },
];
