"use client";
import React from "react";
import Image from "next/image";
import RenderModel from '../../components/RenderModel'; 
import {projectsData} from '../../data'; 

import ProjectsList from '../../components/Projects/index';

import CyberScene from '../../components/model/CyberScene';

export default function page() {
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/projects-background.png"
        alt="background image"
        fill
        className="object-cover opacity-50 -z-10"
      />

      <div className="flex flex-col md:flex-row w-full h-full z-10">
        <div className="w-full md:w-1/2 md:h-full">
          <RenderModel>
            <CyberScene />
          </RenderModel>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto px-4 py-6">
          <ProjectsList projectsData={projectsData} />
        </div>
      </div>
        </div>
    
    
  );
}
