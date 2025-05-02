'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from './components/navigation';

export default function Home() {
  const audioRef = useRef(null);
  const [showPrompt, setShowPrompt] = useState(true);

  const playAudio = () => {
    try {
      const audio = audioRef.current;
      if (audio) {
        audio.play().catch(err => {
          console.warn('User gesture required to play:', err);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleYes = () => {
    playAudio();
    setShowPrompt(false);
  };

  const handleNo = () => {
    setShowPrompt(false);
  };

  return (
    <main className="flex min-h-screen h-screen w-full relative overflow-hidden">
      <audio ref={audioRef} src="/sounds.mp3" loop />

      <Image
        src="/background-3.jpg"
        alt="background image"
        className="h-full w-full object-cover opacity-50"
        fill
        style={{ objectFit: 'cover', opacity: 0.5 }}
      />

      <div className="absolute inset-0 -z-10"></div>

      {showPrompt && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-opacity-60 p-6 rounded-lg text-center shadow-xl">
            <p className="text-lg text-light font-semibold mb-4">Do you want to play music?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleYes}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {!showPrompt && (
        <div className="relative z-10 w-screen h-screen">
          <Navigation />
        </div>
      )}
    </main>
  );
}
