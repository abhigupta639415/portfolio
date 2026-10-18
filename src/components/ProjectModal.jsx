import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Server,
  Database,
  ShieldCheck,
  Zap,
  Calendar,
  Layers,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c121e] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              {project.subtitle}
            </span>
            <span className="text-slate-500">&bull;</span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-sky-400" />
              {project.duration}
            </span>
          </div>
          <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.name}
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architecture & Deployment Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#080d16] border border-white/[0.08]">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-sky-400" />
              <span>Deployment & Infrastructure</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-200 font-mono">
              {project.deployment}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#080d16] border border-white/[0.08]">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Engineering Highlight</span>
            </div>
            <div className="text-xs sm:text-sm text-amber-200">
              {project.performanceAchievement}
            </div>
          </div>
        </div>

        {/* Complete Features List */}
        <div className="mb-6">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Complete Feature Breakdown ({project.keyFeatures.length} items):</span>
          </h3>
          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-2">
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900/60 border border-white/5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
            Technologies & Libraries:
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-mono text-slate-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs sm:text-sm shadow-md shadow-sky-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Live Demo</span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white px-3 py-2"
          >
            Close Dialog [ESC]
          </button>
        </div>

      </div>
    </div>
  );
}
