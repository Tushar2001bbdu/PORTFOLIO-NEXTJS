"use client";
import React from "react";
import Image from "next/image";
import RenderModel from '../../components/RenderModel'; 
import CodeOrb from '../../components/model/CodeOrb';
import About from "../../components/about/index";
export default function Page() {
  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <Image
        src="/background-1.jpg"
        alt="background image"
        fill
        className="object-cover opacity-80 -z-10"
      />

      <div className="mt-4 flex flex-col items-center justify-center w-full h-full z-10">
        

        <div className="w-full h-[70vh] flex items-center justify-center">
          <RenderModel>
            <CodeOrb scale={[2, 2, 2]} />
          </RenderModel>
        </div>

        <div className="w-full h-[30vh] text-center text-dark flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-aqua">Tushar Kumar Gupta</h1>
          <p className="text-2xl text-light">A passionate full stack developer from India</p>
        </div>
        
      </div>
      <About/>
    </div>

  );
}
