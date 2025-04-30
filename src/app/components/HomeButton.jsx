'use client';
import { Home } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomeButton() {
  const router = useRouter();

  return (
    <div className="group relative">
      <button
        onClick={() => router.push('/')}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border-2 border-aqua-400 shadow-lg
                   hover:border-aqua-300 hover:shadow-aqua-500 transition-all duration-300 p-4 fixed top-4
                   backdrop-blur-md ring-2 ring-aqua-400 ring-offset-2 ring-offset-black/50"
      >
        <Home className="text-aqua-400 w-6 h-6" />
      </button>
      <div className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
        Home
      </div>
    </div>
  );
}
