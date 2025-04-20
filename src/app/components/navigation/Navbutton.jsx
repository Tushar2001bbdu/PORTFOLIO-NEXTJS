"use client"
'use client';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Navbutton({ x, y, label, link, newtab, icon }) {
  const getIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'house':
        return <FontAwesomeIcon icon={faHouse} className="text-white text-lg" />;
      case 'about':
        return <FontAwesomeIcon icon={faUser} className="text-white text-lg" />;
      case 'projects':
        return <FontAwesomeIcon icon={faBriefcase} className="text-white text-lg" />;
      case 'contact':
        return <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />;
      case 'github':
        return <FontAwesomeIcon icon={faGithub} className="text-white text-lg" />;
      case 'linkedin':
        return <FontAwesomeIcon icon={faLinkedin} className="text-white text-lg" />;
      case 'twitter':
        return <FontAwesomeIcon icon={faTwitter} className="text-white text-lg" />;
      case 'resume':
        return <FontAwesomeIcon icon={faFileAlt} className="text-white text-lg" />;
      default:
        return <FontAwesomeIcon icon={faHouse} className="text-white text-lg" />;
    }
  };

  return (
    <div
      style={{ transform: `translate(${x}px, ${y}px)` }}
      className="absolute z-50 flex justify-center items-center cursor-pointer"
    >
      <Link
        href={link}
        target={newtab ? '_blank' : '_self'}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border-2 border-yellow-400 shadow-lg
                   hover:border-yellow-300 hover:shadow-yellow-500 transition-all duration-300
                   backdrop-blur-md ring-2 ring-yellow-400 ring-offset-2 ring-offset-black/50"
      >
        {getIcon(icon)}
      </Link>
      <span className='hidden peer-hover:block absolute -top-10 bg-gray-800 text-white text-sm rounded-md p-2 transition duration-300'>
        {label}
      </span>
    </div>
  );
}
