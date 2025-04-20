'use client';

import Image from 'next/image';

import Navigation from './components/Navigation';


export default function Home() {
  return (
    <main className="flex min-h-screen h-screen w-full relative overflow-hidden">
      <Image
        src="/home-background.png"
        alt="background image"
        className="h-full w-full object-cover opacity-50"
        fill
        style={{ objectFit: 'cover', opacity: 0.5 }}
      />

      {/* 3D model background */}
      <div className="absolute inset-0 -z-10">
      
      </div>

      {/* UI content */}
      <div className="relative z-10 w-screen h-screen">
        <Navigation />
      </div>
    </main>
  );
}
