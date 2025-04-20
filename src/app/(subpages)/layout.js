"use client";

import HomeButton from "../components/HomeButton";


export default function RootLayout({ children }) {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center text-white">

      <div className="fixed top-6 left-6 z-50">
        <HomeButton />
      </div>

      <main className="w-full flex flex-col items-center justify-center">
        <div className="w-full ">
          {children}
        </div>
      </main>
    </div>
  );
}
