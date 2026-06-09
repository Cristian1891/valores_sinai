import type { SocialLinkConfig } from "../../../types/global";

export const SOCIAL_LINKS_CONFIG: SocialLinkConfig[] = [
  {
    key: 'instagram',
    href: 'https://www.instagram.com/valores_sinai/',
    label: 'Instagram de Valores Sinaí',
    hoverColorClass: 'group-hover:text-[#E1306C]',
  },
  {
    key: 'facebook',
    href: 'https://www.facebook.com/people/Valores-Sina%C3%AD/61573890669430/',
    label: 'Facebook de Valores Sinaí',
    hoverColorClass: 'group-hover:text-[#1877F2]',
  },
  {
    key: 'x',
    href: 'https://x.com/ValoresSinai',
    label: 'X (Twitter) de Valores Sinaí',
    hoverColorClass: 'group-hover:text-dark dark:group-hover:text-white',
  },
] as const;