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

export default function Navbutton({ x, y, label, link, newtab, icon, angle }) {
  const getIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'house':
        return faHouse;
      case 'about':
        return faUser;
      case 'projects':
        return faBriefcase;
      case 'contact':
        return faEnvelope;
      case 'github':
        return faGithub;
      case 'linkedin':
        return faLinkedin;
      case 'twitter':
        return faTwitter;
      case 'resume':
        return faFileAlt;
      default:
        return faHouse;
    }
  };

  return (
    <div
    style={{ transform: `translate(${x}px, ${y}px)` }}

      className="absolute z-50 flex justify-center items-center cursor-pointer group-hover:pointer-events-auto"
    >
      <Link
        href={link}
        target={newtab ? '_blank' : '_self'}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border-2 border-aqua-400 shadow-lg
                   hover:border-aqua-300 hover:shadow-aqua-500 transition-all duration-300
                   backdrop-blur-md ring-2 ring-aqua-400 ring-offset-2 ring-offset-black/50"
      >
      
        <FontAwesomeIcon
          icon={getIcon(icon)}
          className="text-white text-lg"
        />
      </Link>
      <span className='hidden peer-hover:block absolute -top-10 bg-gray-800 text-white text-sm rounded-md p-2 transition duration-300'>
        {label}
      </span>
    </div>
  );
}
