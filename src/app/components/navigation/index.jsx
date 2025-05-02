"use client";
import React, { useEffect, useState } from 'react';
import Navbutton from './Navbutton';
import CelestialHeroOrb from '../model/CelestialOrb'
import RenderModel from '../RenderModel'; 
export default function Navigation() {
  const [radius, setRadius] = useState(0);
  try{
   var BtnList = [
    { label: "Home", link: "/", icon: "home", newTab: false },
    { label: "About", link: "/about", icon: "about", newTab: false },
    { label: "Projects", link: "/projects", icon: "projects", newTab: false },
    { label: "Contact", link: "/contact", icon: "contact", newTab: false },
    {
      label: "Github",
      link: "https://www.github.com/Tushar2001bbdu",
      icon: "github",
      newTab: true,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/tushar-gupta-b96735231/",
      icon: "linkedin",
      newTab: true,
    },
    
    {
      label: "Resume",
      link: "/resume.pdf",
      icon: "resume",
      newTab: true,
    },
  ];
  
} catch(error){
  console.log(error)
}
  
  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      setRadius(vw * 0.2 - 16); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="fixed h-screen w-full flex justify-center items-center">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen z-10">
   <RenderModel><CelestialHeroOrb/></RenderModel>
   
  
</div>
       
       <section className='animate-orbit'>
        {BtnList.map((btn, index) => {
          const angle = (index * angleIncrement * Math.PI) / 180;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          console.log(btn)
          return (
            <Navbutton style={{ transform: `translate(${x}px, ${y}px)` }}  key={index} radius={radius} x={x} y={y} angle={angle} label={btn.label} link={btn.link} newtab={btn.newTab} icon={btn.icon} />
            
          );
        })}</section>
    </div>
  );
}
