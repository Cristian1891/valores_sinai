import type { AreaItem } from '../types/academy';
import {
  AudiovisualIcon,
  MarketingIcon,
  PhotographyIcon,
  AudioIcon,
  ManagementIcon,
  StreamingIcon,
} from '../icons';

export const AREAS: AreaItem[] = [
  {
    key: 'audiovisual',
    index: '01',
    nameKey: 'hero.area1.name',
    tagKey: 'hero.area1.tag',
    icon: AudiovisualIcon,
  },
  {
    key: 'marketing',
    index: '02',
    nameKey: 'hero.area2.name',
    tagKey: 'hero.area2.tag',
    icon: MarketingIcon,
  },
  {
    key: 'fotografia',
    index: '03',
    nameKey: 'hero.area3.name',
    tagKey: 'hero.area3.tag',
    icon: PhotographyIcon,
  },
  {
    key: 'audio',
    index: '04',
    nameKey: 'hero.area4.name',
    tagKey: 'hero.area4.tag',
    icon: AudioIcon,
  },
  {
    key: 'gestion',
    index: '05',
    nameKey: 'hero.area5.name',
    tagKey: 'hero.area5.tag',
    icon: ManagementIcon,
  },
  {
    key: 'streaming',
    index: '06',
    nameKey: 'hero.area6.name',
    tagKey: 'hero.area6.tag',
    icon: StreamingIcon,
  },
];