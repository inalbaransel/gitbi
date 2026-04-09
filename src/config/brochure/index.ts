export interface Brochure {
  id: number
  title: string
  pdfUrl: string | null
  description: string
  comingSoon: boolean
}

export const brochures: Brochure[] = [
  {
    id: 2,
    title: "Sponsorluk Broşürü",
    pdfUrl:
      "https://drive.google.com/file/d/1paMq5jSud4C4f_EqQg2kWnuCxSt0hWBL/view?usp=sharing",
    description: "İş birliği ve sponsorluk fırsatları",
    comingSoon: false,
  },
  {
    id: 1,
    title: "Etkinlik Broşürü",
    pdfUrl:
      "https://drive.google.com/file/d/13uAHJGYJoVjyVpUrP889SoPHeGvv-GJe/view",
    description: "HackNITR 7.0 hakkında tüm detaylar",
    comingSoon: false,
  },
]
