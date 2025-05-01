"use client"
import React from 'react';
import ProjectsDisplay from './ProjectsDisplay';

export default function ProjectsList({ projectsData }) {
  return (
    <div className="h-[80vh] overflow-y-auto space-y-6 px-4 py-6">
      {projectsData.map((project, index) => (
        <ProjectsDisplay
          key={index}
          name={project.name}
          description={project.description}
          date={project.date}
          demoLink={project.demoLink}
        />
      ))}
    </div>
  );
}
