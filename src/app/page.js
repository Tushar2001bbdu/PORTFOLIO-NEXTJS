'use client';
import {useRef,useEffect} from 'react';
import Image from 'next/image';

import Navigation from './components/Navigation';


export default function Home() {
  const audioRef = useRef(null);

 
  return (
    <main className="flex min-h-screen h-screen w-full relative overflow-hidden">
      <audio ref={audioRef} src="/sounds.mp3" loop/>

      <Image
        src="/background-3.jpg"
        alt="background image"
        className="h-full w-full object-cover opacity-50"
        fill
        style={{ objectFit: 'cover', opacity: 0.5 }}
      />


      <div className="absolute inset-0 -z-10">
      
      </div>

      {/* UI content */}
      <div className="relative z-10 w-screen h-screen">
      <button onClick={() => {
  try{
  const audio = audioRef.current;
  if (audio) {
    console.log("i am trying to play the audio")
    audio.play().catch(err => {
      console.warn('User gesture required to play:', err);
    });
  }
}
catch(err){
  console.log(err)
}}}>
  Play Audio
</button>
        <Navigation />
      </div>
    </main>
  );
}
