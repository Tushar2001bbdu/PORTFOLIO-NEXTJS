"use client";
import React, { useEffect, useState } from 'react';
import Navbutton from './Navbutton';

export default function Navigation() {
  const [radius, setRadius] = useState(0);
  const BtnList = [
    { label: "Home", link: "/", icon: "home", newTab: false },
    { label: "About", link: "/about", icon: "about", newTab: false },
    { label: "Projects", link: "/projects", icon: "projects", newTab: false },
    { label: "Contact", link: "/contact", icon: "contact", newTab: false },
    {
      label: "Github",
      link: "https://www.github.com/codebucks27",
      icon: "github",
      newTab: true,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/codebucks",
      icon: "linkedin",
      newTab: true,
    },
    {
      label: "X",
      link: "https://www.x.com/code_bucks",
      icon: "twitter",
      newTab: true,
    },
    {
      label: "Resume",
      link: "/resume.pdf",
      icon: "resume",
      newTab: true,
    },
  ];
  
  
  
  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      setRadius(vw * 0.2 - 16); 
    };

    handleResize(); // initialize on mount
    window.addEventListener('resize', handleResize); // update on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="fixed h-screen w-full flex justify-center items-center">
      <div className="relative w-fit h-fit group">
      <div className="relative w-fit h-fit animate-orbit  group-hover:animate-none">
        {BtnList.map((btn, index) => {
          const angle = (index * angleIncrement * Math.PI) / 180;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          console.log(btn)
          return (
            <Navbutton key={index} radius={radius} x={x} y={y} angle={angle} label={btn.label} link={btn.link} newtab={btn.newTab} icon={btn.icon} />
            
          );
        })}
      </div></div>
    </div>
  );
}
