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
  ShieldCheck,
  Brain
} from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails }) {
  const isNetflix = project.id === 'netflixgpt';

  return (
    <div className="rounded-2xl bg-[#FFFFFF] border border-[#BDB76B]/35 hover:border-[#D4AF37] transition-all duration-300 shadow-card-soft hover:shadow-card-hover overflow-hidden flex flex-col group">
      
      {/* Visual Mockup Container (Clean Editorial Browser Frame) */}
      <div className="relative bg-[#F8F6CC]/60 border-b border-[#BDB76B]/30 p-4 sm:p-5 overflow-hidden">
        
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CE8946]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#BDB76B]/70" />
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFFFFF] border border-[#BDB76B]/40 text-[11px] font-mono text-[#5F5B50] max-w-[240px] sm:max-w-xs truncate">
            <span className="text-[#CE8946] font-semibold">https://</span>
            <span className="truncate">{project.liveDemo.replace('https://', '')}</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#171717] bg-[#D4AF37] px-2 py-0.5 rounded shadow-sm">
            <span>LIVE</span>
          </div>
        </div>

        {/* Mockup Display in Dark Editorial Frame for Rich Visual Contrast */}
        <div className="relative rounded-xl overflow-hidden border border-[#BDB76B]/35 bg-[#24221D] p-4 min-h-[220px] flex flex-col justify-between">
          
          {isNetflix ? (
            /* NetflixGPT Mockup Illustration */
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-[#BDB76B]/25 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-extrabold text-sm sm:text-base tracking-wider font-sans">
                    NETFLIX<span className="text-[#D4AF37] font-mono text-xs ml-1">GPT</span>
                  </span>
                  <span className="text-[10px] bg-[#CE8946]/20 text-[#D4AF37] border border-[#D4AF37]/30 px-1.5 py-0.5 rounded">
                    OpenAI GPT
                  </span>
                </div>
                <div className="text-[10px] text-[#FDFBD4]/70 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                  Firebase Auth
                </div>
              </div>

              {/* Natural language query bar */}
              <div className="p-2.5 rounded-lg bg-[#1B1915] border border-[#D4AF37]/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#FDFBD4] truncate">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span className="truncate text-[#FDFBD4]">
                    "Mind-bending sci-fi movies like Interstellar with time dilation"
                  </span>
                </div>
                <span className="shrink-0 text-[10px] font-bold bg-[#D4AF37] text-[#171717] px-2 py-0.5 rounded">
                  GPT-4
                </span>
              </div>

              {/* Movie Cards preview */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2 rounded bg-[#1B1915] border border-[#BDB76B]/20 flex flex-col justify-between h-20">
                  <span className="text-[10px] font-sans font-bold text-white truncate">Interstellar</span>
                  <div className="text-[9px] text-[#D4AF37] font-mono">TMDB 8.7/10</div>
                  <span className="text-[8px] bg-[#D4AF37]/20 text-[#D4AF37] px-1 py-0.5 rounded text-center">Sci-Fi Pick</span>
                </div>
                <div className="p-2 rounded bg-[#1B1915] border border-[#BDB76B]/20 flex flex-col justify-between h-20">
                  <span className="text-[10px] font-sans font-bold text-white truncate">Arrival</span>
                  <div className="text-[9px] text-[#D4AF37] font-mono">TMDB 8.0/10</div>
                  <span className="text-[8px] bg-[#D4AF37]/20 text-[#D4AF37] px-1 py-0.5 rounded text-center">Linguistic Sci-Fi</span>
                </div>
                <div className="p-2 rounded bg-[#1B1915] border border-[#BDB76B]/20 flex flex-col justify-between h-20">
                  <span className="text-[10px] font-sans font-bold text-white truncate">Inception</span>
                  <div className="text-[9px] text-[#D4AF37] font-mono">TMDB 8.8/10</div>
                  <span className="text-[8px] bg-[#D4AF37]/20 text-[#D4AF37] px-1 py-0.5 rounded text-center">Dream Layering</span>
                </div>
              </div>

              {/* Route splitting tag */}
              <div className="flex items-center justify-between text-[10px] text-[#FDFBD4]/70 pt-1">
                <span className="text-[#D4AF37] flex items-center gap-1 font-semibold">
                  <Zap className="w-3 h-3 text-[#CE8946]" /> Bundle: -31% via React.lazy()
                </span>
                <span className="text-[#BDB76B]">Redux Toolkit State</span>
              </div>
            </div>
          ) : (
            /* NutriGenie Mockup Illustration */
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-[#BDB76B]/25 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold text-sm sm:text-base font-sans flex items-center gap-1">
                    <Brain className="w-4 h-4 text-[#CE8946]" />
                    Nutri<span className="text-white">Genie</span>
                  </span>
                  <span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 px-1.5 py-0.5 rounded">
                    MERN + Gemini Vision
                  </span>
                </div>
                <div className="text-[10px] text-[#FDFBD4]/70 flex items-center gap-1">
                  <Database className="w-3 h-3 text-[#CE8946]" />
                  MongoDB Cloud
                </div>
              </div>

              {/* Gemini Vision Food Scanner preview */}
              <div className="p-2.5 rounded-lg bg-[#1B1915] border border-[#D4AF37]/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#FDFBD4]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span className="text-[#FDFBD4]">Gemini Vision AI Food Scanner</span>
                </div>
                <span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-0.5 rounded">
                  Calorie & Macro Analysis
                </span>
              </div>

              {/* Diet Plan & Macro metrics */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2 rounded bg-[#1B1915] border border-[#BDB76B]/20 flex flex-col justify-between h-20">
                  <span className="text-[9px] text-[#BDB76B]">Diet Engine</span>
                  <div className="text-[10px] font-sans font-bold text-white">Indian Meal Plan</div>
                  <span className="text-[8px] text-[#D4AF37]">BMR/TDEE Scaled</span>
                </div>
                <div className="p-2 rounded bg-[#1B1915] border border-[#BDB76B]/20 flex flex-col justify-between h-20">
                  <span className="text-[9px] text-[#BDB76B]">Chatbot</span>
                  <div className="text-[10px] font-sans font-bold text-white">24/7 Fitness AI</div>
                  <span className="text-[8px] text-[#D4AF37]">Gemini Pro</span>
                </div>
                <div className="p-2 rounded bg-[#1B1915] border border-[#BDB76B]/20 flex flex-col justify-between h-20">
                  <span className="text-[9px] text-[#BDB76B]">Security</span>
                  <div className="text-[10px] font-sans font-bold text-white">JWT + OTP</div>
                  <span className="text-[8px] text-[#CE8946]">Brevo + bcrypt</span>
                </div>
              </div>

              {/* Backend API stats */}
              <div className="flex items-center justify-between text-[10px] text-[#FDFBD4]/70 pt-1">
                <span className="text-[#D4AF37] flex items-center gap-1 font-semibold">
                  <Server className="w-3 h-3 text-[#CE8946]" /> 20+ REST Endpoints on Render
                </span>
                <span className="text-[#BDB76B]">5+ Mongoose Schemas</span>
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
              <div className="text-xs font-mono text-[#CE8946] uppercase tracking-wider font-bold">
                {project.subtitle}
              </div>
              <h3 className="text-2xl font-extrabold text-[#171717] tracking-tight mt-0.5">
                {project.name}
              </h3>
            </div>
            <span className="shrink-0 text-xs font-mono text-[#5F5B50] bg-[#FDFBD4] border border-[#BDB76B]/40 px-2.5 py-1 rounded-md flex items-center gap-1.5 font-bold">
              <Calendar className="w-3 h-3 text-[#D4AF37]" />
              {project.duration}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-[#5F5B50] leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Performance Achievement Callout */}
          <div className="mb-6 p-3 rounded-xl bg-[#FDFBD4] border-l-4 border-[#D4AF37] text-xs text-[#24221D]">
            <span className="font-bold text-[#171717]">Performance / Engineering Highlight: </span>
            {project.performanceAchievement}
          </div>

          {/* Key Features Preview */}
          <div className="mb-6 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#5F5B50] font-bold">
              Key Features:
            </div>
            {project.keyFeatures.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#24221D]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CE8946] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
            {project.keyFeatures.length > 4 && (
              <button
                onClick={() => onOpenDetails(project)}
                className="text-xs text-[#CE8946] hover:text-[#D4AF37] font-mono pt-1 inline-flex items-center gap-1 font-semibold"
              >
                + {project.keyFeatures.length - 4} more features in architecture breakdown &rarr;
              </button>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#5F5B50] font-bold mb-2">
              Technologies:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#FDFBD4] border border-[#BDB76B] text-xs font-mono text-[#24221D] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 border-t border-[#BDB76B]/25 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {/* Live Demo button */}
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#CE8946] text-[#171717] hover:text-white font-bold text-xs shadow-sm transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>

            {/* View GitHub button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#FDFBD4] border border-[#BDB76B] text-[#24221D] hover:text-[#171717] font-semibold text-xs transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#5F5B50]" />
              <span>View GitHub</span>
            </a>
          </div>

          {/* View Details Modal Trigger */}
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#CE8946] hover:text-[#D4AF37] font-bold transition-colors py-2 px-2"
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
