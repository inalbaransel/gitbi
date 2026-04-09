export const navItems = [
  { name: "İstatistikler", href: "/#stats" },
  { name: "Süreç", href: "/#timeline" },
  { name: "SSS", href: "/#faqs" },
  { name: "Ekibimiz", href: "/ekip" },
]

export const logo = {
  href: "/#hero",
  src: "/logo/gitbi-logo.png",
  alt: "GİTBİ Logo",
  width: 95,
  height: 95,
}

export const hamburgerIcon = {
  src: "/hamburger.svg",
  alt: "Menü",
  width: 30,
  height: 30,
}

export const DISCORD_LINK = "#"
export const DEVFOLIO_LINK = "#"
export const WHATSAPP_LINK = "#"
export const INSTAGRAM_LINK = "https://www.instagram.com/gitbiofficial/"

export const background =
  "https://res.cloudinary.com/dscnitrourkela/image/upload/v1754225393/hacknitr/kih0gsyskoslbgd9frvz.png"

export type Social = {
  name: string
  href: string
  icon: string
}

export const SOCIALS: Social[] = [
  {
    name: "INSTAGRAM",
    href: INSTAGRAM_LINK,
    icon: "https://res.cloudinary.com/dscnitrourkela/image/upload/v1755710454/hacknitr/cd0lyrhdlzfrevhbgluk.png",
  },
  {
    name: "LINKEDIN",
    href: "#",
    icon: "https://res.cloudinary.com/dscnitrourkela/image/upload/v1755710453/hacknitr/ljpzd4qbjttmkqrz3se0.png",
  },
  {
    name: "TWITTER",
    href: "#",
    icon: "https://res.cloudinary.com/dscnitrourkela/image/upload/v1756584254/hacknitr/ba7wbkcwr2ukb9lk8snm.png",
  },
  {
    name: "GITHUB",
    href: "#",
    icon: "https://res.cloudinary.com/dscnitrourkela/image/upload/v1755710453/hacknitr/xspkjzkj2uhjgiypnefh.png",
  },
]

export const HERO_IMAGES = {
  main: {
    desktop:
      "https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png",
    mobile:
      "https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png",
  },
  overlay: {
    desktop:
      "https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png",
    mobile:
      "https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png",
  },
}

export const FOOTER_TEXT = "GİTBİ — Girişimci İnsanlar Topluluğu"

export const playgroundMenu = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Deneme Alani", href: "/playground" },
]
