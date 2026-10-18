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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FFFFFF] border border-[#BDB76B]/40 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#FDFBD4] text-[#171717] hover:bg-[#D4AF37] border border-[#BDB76B]/40 transition-colors"
          aria-label="Close details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CE8946]">
              {project.subtitle}
            </span>
            <span className="text-[#BDB76B]">&bull;</span>
            <span className="text-xs font-mono text-[#5F5B50] flex items-center gap-1 font-semibold">
              <Calendar className="w-3 h-3 text-[#D4AF37]" />
              {project.duration}
            </span>
          </div>
          <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
            {project.name}
          </h2>
          <p className="text-sm text-[#5F5B50] mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architecture & Deployment Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#FDFBD4] border border-[#BDB76B]/40">
            <div className="text-xs font-mono text-[#5F5B50] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
              <Server className="w-3.5 h-3.5 text-[#CE8946]" />
              <span>Deployment & Infrastructure</span>
            </div>
            <div className="text-xs sm:text-sm text-[#171717] font-mono font-semibold">
              {project.deployment}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FDFBD4] border border-[#BDB76B]/40">
            <div className="text-xs font-mono text-[#5F5B50] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
              <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Engineering Highlight</span>
            </div>
            <div className="text-xs sm:text-sm text-[#171717] font-semibold">
              {project.performanceAchievement}
            </div>
          </div>
        </div>

        {/* Complete Features List */}
        <div className="mb-6">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#171717] font-bold mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Complete Feature Breakdown ({project.keyFeatures.length} items):</span>
          </h3>
          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-2">
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#FDFBD4]/70 border border-[#BDB76B]/30 text-xs sm:text-sm text-[#24221D]">
                <CheckCircle2 className="w-4 h-4 text-[#CE8946] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#5F5B50] font-bold mb-2.5">
            Technologies & Libraries:
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#FDFBD4] text-xs font-mono font-semibold text-[#171717] border border-[#BDB76B]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-[#BDB76B]/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#CE8946] text-[#171717] hover:text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Live Demo</span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FDFBD4] border border-[#BDB76B] text-[#24221D] font-semibold text-xs sm:text-sm transition-colors"
            >
              <Github className="w-4 h-4 text-[#5F5B50]" />
              <span>View Source Code</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-[#5F5B50] hover:text-[#171717] px-3 py-2 font-semibold"
          >
            Close Dialog [ESC]
          </button>
        </div>

      </div>
    </div>
  );
}
