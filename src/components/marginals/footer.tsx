import Image from "next/image"
import Link from "next/link"

import { Typography } from "@/components"
import { FOOTER_TEXT, SOCIALS, navItems } from "@/config/marginals"

export default function Footer() {
  const leftSocials = SOCIALS.slice(0, 2)
  const rightSocials = SOCIALS.slice(2)

  return (
    <footer
      id="footer"
      className="relative w-full flex flex-col justify-end mt-24 md:mt-32 lg:mt-48 xl:mt-64"
    >
      <div className="mt-4 mb-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm sm:text-base font-prompt font-medium text-black/80 hover:text-black transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* Desktop Social Links - Above Logo */}
      <div className="hidden lg:flex w-full justify-center items-center gap-[30vw]">
        {/* Left Socials */}
        <div className="flex gap-6 lg:gap-8 mr-16 ">
          {leftSocials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="flex items-center gap-2 text-black hover:opacity-75 transition-opacity"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={32}
                height={32}
                className="w-6 h-6 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"
              />
              <Typography.P className="font-prompt my-auto text-sm! font-medium text-black">
                {social.name.toUpperCase()}
              </Typography.P>
            </Link>
          ))}
        </div>

        {/* Right Socials */}
        <div className="flex gap-6 lg:gap-8">
          {rightSocials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="flex items-center gap-2 text-black hover:opacity-75 transition-opacity"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={32}
                height={32}
                className="w-5 h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"
              />
              <Typography.P className="font-prompt my-auto text-sm! font-medium text-black">
                {social.name.toUpperCase()}
              </Typography.P>
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Social Links - Horizontal Layout */}
      <div className="flex lg:hidden w-full justify-center items-center gap-10 xs:gap-20">
        {SOCIALS.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            className="flex items-center hover:opacity-75 transition-opacity"
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </Link>
        ))}
      </div>

      {/* Main Logo Section */}
      <div className="w-full flex items-center justify-center relative">
        <div className="relative flex items-center justify-center">
          {/* Desktop Logo Layout */}
          <div className="hidden lg:flex items-center gap-6 relative">
            <Typography.Display className="text-center font-sketch-block font-normal text-primary text-[16vw] xl:text-[14vw] 2xl:text-[12vw] leading-none">
              GIT
            </Typography.Display>
            <Typography.Display className="text-center font-grutch-shaded font-normal text-[16vw] xl:text-[14vw] 2xl:text-[12vw] leading-none">
              B!
            </Typography.Display>
          </div>

          {/* Mobile Logo Layout */}
          <div className="flex lg:hidden flex-col items-center relative mt-8">
            <Typography.Display className="text-center font-sketch-block font-normal text-primary text-[28vw] sm:text-[24vw] md:text-[20vw] leading-none">
              GIT
            </Typography.Display>
            <Typography.Display className="text-center font-grutch-shaded font-normal text-[28vw] sm:text-[24vw] md:text-[20vw] leading-none -mt-2">
              B!
            </Typography.Display>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <Typography.Lead className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-black text-center mt-5">
        {FOOTER_TEXT}
      </Typography.Lead>
    </footer>
  )
}
