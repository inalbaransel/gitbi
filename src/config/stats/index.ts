export interface StatData {
  id: number;
  number: string;
  label: string;
}

export const statsData: StatData[] = [
  { id: 1, number: '50+', label: 'Aktif Üye' },
  { id: 2, number: '10+', label: 'Proje' },
  { id: 3, number: '5+', label: 'Etkinlik' },
  { id: 4, number: '3+', label: 'Sprint' },
  { id: 5, number: '1', label: 'Misyon' },
];

export const IMAGES = {
  barLong:
    'https://res.cloudinary.com/dscnitrourkela/image/upload/v1756504086/hacknitr/inpvcemympebubnkrtyf.png',
  barShort:
    'https://res.cloudinary.com/dscnitrourkela/image/upload/v1756504223/hacknitr/qswpaemtccarskbybvzn.png',
  clouds:
    'https://res.cloudinary.com/dscnitrourkela/image/upload/v1756504932/hacknitr/xpzzkjkg0wllqk02ivek.png',
} as const;

export const MOBILE_BREAKPOINT = 768;

export interface StatItemProps {
  stat: StatData;
  index: number;
  isMobile: boolean;
}

export interface MobileStatItemProps {
  stat: StatData;
  index: number;
  statsData: StatData[];
}
