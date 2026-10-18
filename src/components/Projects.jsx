import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#C49A2C] dark:bg-[#D4AF37]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37]">
              02 &middot; Featured Work
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
                Featured Projects
              </h2>
              <p className="text-sm sm:text-base text-[#66645F] dark:text-[#B7B4AA] mt-2 max-w-xl">
                Production-deployed full-stack applications showcasing modern frontend architecture, RESTful API design, and AI model integrations.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] text-xs font-mono font-semibold text-[#171717] dark:text-[#F5F3EA] shadow-2xs shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
              <span>4 Applications &bull; Production Live</span>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Deep Dive Architecture Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
