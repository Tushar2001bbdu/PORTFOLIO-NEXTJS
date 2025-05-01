import React from 'react';
import { CalendarDays } from 'lucide-react';
import Link from 'next/link';
export default function ProjectsDisplay({ name, description, date,demoLink }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out group">
    
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <Link href={demoLink} target="_blank" className="text-blue-500 hover:underline">
            <h2 className="text-gray-900 dark:text-white text-xl font-bold mb-1">
              {name}
            </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {description}
            </p>
          </div>

          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
