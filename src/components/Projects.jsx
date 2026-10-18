import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              05 &middot; Portfolio
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
                Production-deployed full-stack applications showcasing modern frontend architecture, RESTful API design, and AI model integrations.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>2 Live Production Deployments</span>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Deep Dive Modal */}
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
