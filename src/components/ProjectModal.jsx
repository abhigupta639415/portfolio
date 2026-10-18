import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Server,
  Zap,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] rounded-2xl shadow-xl overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#FAFAF8] dark:bg-[#23231F] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] transition-colors cursor-pointer"
          aria-label="Close details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#CE8946]">
              {project.subtitle}
            </span>
            {project.duration && (
              <>
                <span className="text-[#E7E3D8] dark:text-[#34332E]">&bull;</span>
                <span className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] flex items-center gap-1 font-medium">
                  <Calendar className="w-3 h-3 text-[#C49A2C] dark:text-[#D4AF37]" />
                  {project.duration}
                </span>
              </>
            )}
          </div>
          <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-[#F5F3EA]">
            {project.name}
          </h2>
          <p className="text-sm text-[#66645F] dark:text-[#B7B4AA] mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Performance Highlight */}
        {project.performanceAchievement && (
          <div className="mb-6 p-4 rounded-xl bg-[#F4E8C1]/50 dark:bg-[#29281F] border border-[#E7E3D8] dark:border-[#34332E]">
            <div className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
              <Zap className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
              <span>Engineering Highlight</span>
            </div>
            <div className="text-xs sm:text-sm text-[#171717] dark:text-[#F5F3EA] font-medium">
              {project.performanceAchievement}
            </div>
          </div>
        )}

        {/* Complete Features List */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#F5F3EA] font-bold mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
            <span>Key Capabilities & Technical Features:</span>
          </h3>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            {project.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] text-xs text-[#171717] dark:text-[#F5F3EA] leading-relaxed"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Breakdown */}
        <div className="mb-7">
          <div className="text-xs font-mono uppercase tracking-wider text-[#66645F] dark:text-[#B7B4AA] font-bold mb-2">
            Technologies Used:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] text-[#171717] dark:text-[#F5F3EA]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#E7E3D8] dark:border-[#34332E]">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold shadow-xs
                bg-[#C49A2C] hover:bg-[#CE8946] text-white
                dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]"
            >
              <span>Visit Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium
                bg-[#FAFAF8] dark:bg-[#23231F] hover:bg-[#E7E3D8]/60 dark:hover:bg-[#34332E]
                text-[#171717] dark:text-[#F5F3EA]
                border border-[#E7E3D8] dark:border-[#34332E]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="ml-auto px-4 py-2.5 rounded-xl text-xs font-medium text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
