'use client';

import React, { useState } from 'react';
import { Typography } from '@/components';
import Image from 'next/image';
import InfiniteMenu from '@/components/ui/infinite-menu';

const teamItems = [
  {
    image: '/ekip/sefs.png',
    link: '#',
    title: 'Hüseyin',
    description: 'Kurucu Uye'
  },
  {
    image: '/ekip/muhammed.png',
    link: '#',
    title: 'Muhammed Ali',
    description: 'Kurucu Uye'
  },
  {
    image: '/ekip/prof.png',
    link: '#',
    title: 'Prof. Baransel',
    description: 'Kurucu Uye'
  },
  {
    image: '/ekip/yusuf.png',
    link: '#',
    title: 'Yusuf',
    description: 'Kurucu Uye | Flört Adam'
  },
  {
    image: '/ekip/ahmet.jpeg',
    link: '#',
    title: 'Ahmet',
    description: 'Ekip Üyesi'
  },
  {
    image: '/ekip/emir.jpeg',
    link: '#',
    title: 'Emir',
    description: 'Ekip Üyesi'
  },
  {
    image: '/ekip/nazli.png',
    link: '#',
    title: 'Nazli',
    description: 'Ekip Üyesi'
  },
  {
    image: '/ekip/nisa.png',
    link: '#',
    title: 'Nisa',
    description: 'Ekip Üyesi'
  },
  {
    image: '/ekip/olgu.jpeg',
    link: '#',
    title: 'Olgu',
    description: 'Ekip Üyesi'
  },
  {
    image: '/ekip/rabia.png',
    link: '#',
    title: 'Rabia',
    description: 'Ekip Üyesi'
  },
  {
    image: '/ekip/seyda.jpeg',
    link: '#',
    title: 'Seyda',
    description: 'Ekip Üyesi'
  },
  {
    image: '/ekip/esra.jpeg',
    link: '#',
    title: 'Esra',
    description: 'Ekip Üyesi'
  },
  {
    image: '/ekip/samira.jpeg',
    link: '#',
    title: 'Samira',
    description: 'Ekip Üyesi'
  },
  {
    image: '/ekip/duygu.jpeg',
    link: '#',
    title: 'Duygu',
    description: 'Ekip Üyesi'
  },
  {
    image: '/ekip/ipek.jpeg',
    link: '#',
    title: 'İpek',
    description: 'Ekip Üyesi'
  }
];

const TeamCard = ({ item, index }: { item: typeof teamItems[0], index: number }) => {
  const paddedIndex = (index + 1).toString().padStart(2, '0');
  
  // Extract a short role for the badge
  const roleBadge = item.description.split('|')[0].trim().toUpperCase();

  return (
    <div className="group relative flex flex-col bg-black/40 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
        {/* Dark overlay at the bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </div>

      {/* Info Section */}
      <div className="p-5 flex flex-col gap-2 relative z-10">
        <div className="flex justify-between items-center mb-1">
          <span className="text-2xl font-bold font-mono text-white/20 group-hover:text-white/40 transition-colors">
            {paddedIndex}
          </span>
          <div className="px-2 py-0.5 border border-[#3B82F6] text-[#3B82F6] text-[10px] font-bold tracking-widest uppercase">
            {roleBadge}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white tracking-tight uppercase group-hover:text-[#3B82F6] transition-colors">
          {item.title}
        </h3>
        <p className="text-xs text-gray-400 font-medium leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default function EkipPage() {
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('grid');

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      
      {/* View Toggle Switch */}
      <div className="fixed bottom-12 md:bottom-auto md:top-28 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-16 z-50 flex bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <button 
          onClick={() => setViewMode('3d')}
          className={`p-2.5 rounded-full transition-all duration-300 ${
            viewMode === '3d' 
              ? 'bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/30' 
              : 'text-gray-400 hover:text-white'
          }`}
          aria-label="3D Görünüm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        </button>
        <button 
          onClick={() => setViewMode('grid')}
          className={`p-2.5 rounded-full transition-all duration-300 ${
            viewMode === 'grid' 
              ? 'bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/30' 
              : 'text-gray-400 hover:text-white'
          }`}
          aria-label="Kart Görünümü"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
        </button>
      </div>

      {viewMode === '3d' ? (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden text-white flex flex-col items-center justify-center z-40 bg-on-black">
          {/* Title Overlay for 3D */}
          <div className="absolute top-28 md:top-36 left-0 w-full z-10 pointer-events-none text-center px-4">
            <Typography.H1 className="font-normal font-wc-rough-trad text-[#f2f3f7] text-[clamp(2.5rem,4vw,5rem)] drop-shadow-lg">
              GITBI EKIBI
            </Typography.H1>
            <p className="max-w-2xl mx-auto text-gray-300 mt-2 drop-shadow-md">
              GİTBİ'nin arkasındaki harika insanlarla tanışın.
            </p>
          </div>

          {/* Fullscreen Canvas Container */}
          <div className="absolute inset-0 w-full h-full z-0">
            <InfiniteMenu items={teamItems} scale={0.9} />
          </div>
        </div>
      ) : (
        <div className="min-h-screen w-full relative z-40 pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-y-auto bg-black">
          {/* Header Section for Grid */}
          <div className="max-w-7xl mx-auto mb-16 text-center mt-12 md:mt-4">
            <Typography.H1 className="font-normal font-wc-rough-trad text-[#f2f3f7] text-[clamp(2.5rem,6vw,5rem)] drop-shadow-lg mb-4">
              GITBI EKIBI
            </Typography.H1>
            <div className="w-24 h-1 bg-[#3B82F6] mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl">
              Vizyonumuzu gerçeğe dönüştüren tutkulu ekip üyelerimizle tanışın.
            </p>
          </div>

          {/* Grid Section */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-10">
            {teamItems.map((item, index) => (
              <TeamCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
