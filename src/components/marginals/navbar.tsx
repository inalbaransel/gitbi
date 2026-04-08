'use client';
import { useEffect, useState } from 'react';

import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { hamburgerIcon, logo, navItems } from '@/config/marginals';

import { handleRedirect } from '../hero/hero-buttons';
import Typography from '../Typography';
import Button from '../ui/button';
import GlassSurface from '../ui/GlassSurface';

const SCROLL_OFFSET = 80;
const handleScrollToSection = (href: string) => {
  if (href.startsWith('/#')) {
    const targetId = href.substring(2);
    const currentPage = window.location.pathname;
    if (currentPage !== '/') window.location.href = '/#' + targetId;
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  } else {
    window.open(href, '_blank');
  }
};

function DesktopNavbar() {
  return (
    <div className="hidden relative lg:flex w-full items-center justify-between py-3">
      <div className="absolute left-0 h-full flex items-center">
        <Link href={logo.href}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="brightness-0 invert"
          />
        </Link>
      </div>
      <div className="h-full flex justify-center mx-auto">
        <div className="flex gap-[5vw] w-full justify-center">
          {navItems.map((item: { name: string; href: string }) => (
            <button
              key={item.name}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(item.href);
              }}
              className="transition-colors cursor-pointer"
            >
              <Typography.P
                className="!text-sm md:!text-base mb-0 text-center font-semibold text-white transition-colors duration-300"
              >
                {item.name}
              </Typography.P>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <>
      <div className="flex lg:hidden w-full items-center justify-between h-full">
        <div>
          <Link href={logo.href}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="brightness-0 invert"
            />
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-[60] transition-colors duration-300 relative"
        >
          {isOpen ? (
            <X size={32} className="text-white" />
          ) : (
            <Image
              src={hamburgerIcon.src}
              alt={hamburgerIcon.alt}
              width={hamburgerIcon.width}
              height={hamburgerIcon.height}
              className="brightness-0 invert"
            />
          )}
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex flex-col justify-center items-center space-y-8 px-4 transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
        style={{ mixBlendMode: 'normal' }}
      >
        {navItems.map((item: { name: string; href: string }) => (
          <button
            key={item.name}
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection(item.href);
              setIsOpen(false);
            }}
            className="transition-transform active:scale-95 group"
          >
            <Typography.P className="text-white text-3xl font-bold text-center group-hover:text-primary transition-colors tracking-tight uppercase">
              {item.name}
            </Typography.P>
          </button>
        ))}

        <Button
          className={
            'h-16 mb-0.5 !p-0 min-w-[280px] mt-8 flex flex-row items-center justify-center gap-4 bg-primary rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all'
          }
          onClick={() => {
            handleRedirect('discord');
            setIsOpen(false);
          }}
        >
          <Image
            src={'./discord.svg'}
            alt={'Discord Button'}
            width={100}
            height={100}
            className={'size-8 block'}
          />

          <Typography.P className="text-white text-[1.10rem] font-semibold text-center mb-0">
            Join Discord
          </Typography.P>
        </Button>
      </div>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[80%] xl:w-[1000px] transition-all duration-500 ease-out"
      style={{ mixBlendMode: isOpen ? 'normal' : 'difference' }}
    >
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={32}
        className="py-1"
        brightness={100}
        opacity={1}
        backgroundOpacity={0.01}
        blur={12}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <DesktopNavbar />
          <MobileNavbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </GlassSurface>
    </div>
  );
}


