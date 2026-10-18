import React from 'react';
import {
  ExternalLink,
  Github,
  Maximize2,
  CheckCircle2,
  Sparkles,
  Zap,
  Server,
  Database,
  Calendar,
  Layers,
  Brain,
  ShieldCheck
} from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails }) {
  const isNetflix = project.id === 'netflixgpt';

  return (
    <div className="rounded-2xl bg-[#0c121e] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-xl overflow-hidden flex flex-col group">
      
      {/* Visual Mockup Container (Realistic Browser Frame) */}
      <div className="relative bg-[#090d16] border-b border-white/[0.08] p-4 sm:p-5 overflow-hidden">
        
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#05080e] border border-white/5 text-[11px] font-mono text-slate-400 max-w-[240px] sm:max-w-xs truncate">
            <span className="text-emerald-400">https://</span>
            <span className="truncate">{project.liveDemo.replace('https://', '')}</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
            <span>LIVE</span>
          </div>
        </div>

        {/* Mockup Display */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#060910] p-4 min-h-[220px] flex flex-col justify-between">
          
          {isNetflix ? (
            /* NetflixGPT Mockup Illustration */
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-extrabold text-sm sm:text-base tracking-wider font-sans">
                    NETFLIX<span className="text-sky-400 font-mono text-xs ml-1">GPT</span>
                  </span>
                  <span className="text-[10px] bg-red-950/60 text-red-300 border border-red-500/30 px-1.5 py-0.5 rounded">
                    OpenAI Powered
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Firebase Auth
                </div>
              </div>

              {/* Natural language query bar */}
              <div className="p-2.5 rounded-lg bg-[#0e1626] border border-sky-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300 truncate">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate text-sky-200">
                    "Mind-bending sci-fi movies like Interstellar with time dilation"
                  </span>
                </div>
                <span className="shrink-0 text-[10px] font-bold bg-sky-500 text-slate-900 px-2 py-0.5 rounded">
                  GPT-4
                </span>
              </div>

              {/* Movie Cards row preview */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2 rounded bg-slate-800/80 border border-white/5 flex flex-col justify-between h-20">
                  <span className="text-[10px] font-sans font-bold text-white truncate">Interstellar</span>
                  <div className="text-[9px] text-amber-400 font-mono">TMDB 8.7/10</div>
                  <span className="text-[8px] bg-sky-500/20 text-sky-300 px-1 py-0.5 rounded text-center">Sci-Fi AI Pick</span>
                </div>
                <div className="p-2 rounded bg-slate-800/80 border border-white/5 flex flex-col justify-between h-20">
                  <span className="text-[10px] font-sans font-bold text-white truncate">Arrival</span>
                  <div className="text-[9px] text-amber-400 font-mono">TMDB 8.0/10</div>
                  <span className="text-[8px] bg-sky-500/20 text-sky-300 px-1 py-0.5 rounded text-center">Linguistic Sci-Fi</span>
                </div>
                <div className="p-2 rounded bg-slate-800/80 border border-white/5 flex flex-col justify-between h-20">
                  <span className="text-[10px] font-sans font-bold text-white truncate">Inception</span>
                  <div className="text-[9px] text-amber-400 font-mono">TMDB 8.8/10</div>
                  <span className="text-[8px] bg-sky-500/20 text-sky-300 px-1 py-0.5 rounded text-center">Dream Layering</span>
                </div>
              </div>

              {/* Route splitting tag */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span className="text-emerald-400 flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Bundle: -31% via React.lazy()
                </span>
                <span className="text-slate-400">Redux Toolkit State</span>
              </div>
            </div>
          ) : (
            /* NutriGenie Mockup Illustration */
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold text-sm sm:text-base font-sans flex items-center gap-1">
                    <Brain className="w-4 h-4 text-purple-400" />
                    Nutri<span className="text-sky-300">Genie</span>
                  </span>
                  <span className="text-[10px] bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                    MERN + Gemini Vision
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Database className="w-3 h-3 text-emerald-400" />
                  MongoDB Cloud
                </div>
              </div>

              {/* Gemini Vision Food Scanner preview */}
              <div className="p-2.5 rounded-lg bg-[#0e1626] border border-purple-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="text-purple-200">Gemini Vision AI Food Scanner</span>
                </div>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded">
                  Calorie & Macro Analysis
                </span>
              </div>

              {/* Diet Plan & Macro metrics */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2 rounded bg-slate-800/80 border border-white/5 flex flex-col justify-between h-20">
                  <span className="text-[9px] text-slate-400">Diet Engine</span>
                  <div className="text-[10px] font-sans font-bold text-white">Indian Meal Plan</div>
                  <span className="text-[8px] text-emerald-400">BMR/TDEE Scaled</span>
                </div>
                <div className="p-2 rounded bg-slate-800/80 border border-white/5 flex flex-col justify-between h-20">
                  <span className="text-[9px] text-slate-400">Chatbot</span>
                  <div className="text-[10px] font-sans font-bold text-white">24/7 Fitness AI</div>
                  <span className="text-[8px] text-sky-300">Gemini Pro</span>
                </div>
                <div className="p-2 rounded bg-slate-800/80 border border-white/5 flex flex-col justify-between h-20">
                  <span className="text-[9px] text-slate-400">Security</span>
                  <div className="text-[10px] font-sans font-bold text-white">JWT + OTP</div>
                  <span className="text-[8px] text-amber-300">Brevo + bcrypt</span>
                </div>
              </div>

              {/* Backend API stats */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span className="text-emerald-400 flex items-center gap-1">
                  <Server className="w-3 h-3" /> 20+ REST Endpoints on Render
                </span>
                <span className="text-slate-400">5+ Mongoose Schemas</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Duration */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                {project.subtitle}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-0.5">
                {project.name}
              </h3>
            </div>
            <span className="shrink-0 text-xs font-mono text-slate-400 bg-slate-900 border border-white/5 px-2.5 py-1 rounded-md flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-sky-400" />
              {project.duration}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Performance Achievement Callout */}
          <div className="mb-6 p-3 rounded-xl bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-transparent border-l-2 border-sky-400 text-xs text-sky-200">
            <span className="font-semibold text-white">Performance / Engineering Highlight: </span>
            {project.performanceAchievement}
          </div>

          {/* Key Features Preview (Top 4) */}
          <div className="mb-6 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Key Features:
            </div>
            {project.keyFeatures.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
            {project.keyFeatures.length > 4 && (
              <button
                onClick={() => onOpenDetails(project)}
                className="text-xs text-sky-400 hover:text-sky-300 font-mono pt-1 inline-flex items-center gap-1"
              >
                + {project.keyFeatures.length - 4} more features in architecture breakdown &rarr;
              </button>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Technologies:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/[0.07] text-xs font-mono text-slate-300 hover:text-sky-200 hover:border-sky-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {/* Live Demo button */}
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs shadow-md shadow-sky-500/20 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>

            {/* View GitHub button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white font-medium text-xs transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub</span>
            </a>
          </div>

          {/* View Details Modal Trigger */}
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors py-2 px-2"
            title="Inspect system architecture & full specification"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>
        </div>

      </div>
    </div>
  );
}
