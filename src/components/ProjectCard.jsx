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
  Brain,
  MapPin,
  Bot,
  AlertTriangle
} from 'lucide-react';
import TiltCard from './zerogravity/TiltCard';

export default function ProjectCard({ project, onOpenDetails }) {
  const isNetflix = project.id === 'netflixgpt';
  const isNutriGenie = project.id === 'nutrigenie';
  const isInterviewAI = project.id === 'interviewai';
  const isCivicCare = project.id === 'civiccare';

  return (
    <TiltCard
      maxTilt={7}
      perspective={1000}
      liftZ={18}
      scaleOnHover={1.012}
      className="h-full rounded-2xl"
    >
      <div className="h-full rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all duration-200 shadow-2xs hover:shadow-lg overflow-hidden flex flex-col group">
      
      {/* Visual Mockup Container (Clean Editorial Browser Frame) */}
      <div className="relative bg-[#FAFAF8] dark:bg-[#171716] border-b border-[#E7E3D8] dark:border-[#34332E] p-4 sm:p-5 overflow-hidden">
        
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E7E3D8] dark:bg-[#34332E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E7E3D8] dark:bg-[#34332E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E7E3D8] dark:bg-[#34332E]" />
          </div>
          
          {project.liveDemo && (
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA] max-w-[220px] sm:max-w-xs truncate">
              <span className="text-[#C49A2C] dark:text-[#D4AF37] font-semibold">https://</span>
              <span className="truncate">{project.liveDemo.replace('https://', '')}</span>
            </div>
          )}

          <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#171717] bg-[#F4E8C1] dark:bg-[#D4AF37] px-2 py-0.5 rounded">
            <span>LIVE</span>
          </div>
        </div>

        {/* Mockup Display */}
        <div className="relative rounded-xl overflow-hidden border border-[#E7E3D8] dark:border-[#34332E] bg-[#FFFFFF] dark:bg-[#131311] p-4 min-h-[200px] flex flex-col justify-between">
          
          {/* 1. NetflixGPT Mockup */}
          {isNetflix && (
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-[#E7E3D8] dark:border-[#34332E] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-extrabold text-sm sm:text-base tracking-wider font-sans">
                    NETFLIX<span className="text-[#C49A2C] dark:text-[#D4AF37] font-mono text-xs ml-1">GPT</span>
                  </span>
                  <span className="text-[10px] bg-[#F4E8C1] dark:bg-[#29281F] text-[#171717] dark:text-[#F5F3EA] px-1.5 py-0.5 rounded">
                    OpenAI GPT
                  </span>
                </div>
                <div className="text-[10px] text-[#66645F] dark:text-[#B7B4AA] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#C49A2C] dark:text-[#D4AF37]" />
                  Firebase Auth
                </div>
              </div>

              {/* Natural language query bar */}
              <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#171717] dark:text-[#F5F3EA] truncate">
                  <Sparkles className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37] shrink-0" />
                  <span className="truncate text-xs">
                    "Mind-bending sci-fi movies like Interstellar with time dilation"
                  </span>
                </div>
                <span className="shrink-0 text-[10px] font-bold bg-[#C49A2C] dark:bg-[#D4AF37] text-white dark:text-[#171717] px-2 py-0.5 rounded">
                  GPT-4
                </span>
              </div>

              {/* Movie Cards preview */}
              <div className="grid grid-cols-3 gap-2 pt-0.5">
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA] truncate">Interstellar</span>
                  <div className="text-[9px] text-[#C49A2C] dark:text-[#D4AF37] font-mono">TMDB 8.7/10</div>
                </div>
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA] truncate">Arrival</span>
                  <div className="text-[9px] text-[#C49A2C] dark:text-[#D4AF37] font-mono">TMDB 8.0/10</div>
                </div>
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA] truncate">Inception</span>
                  <div className="text-[9px] text-[#C49A2C] dark:text-[#D4AF37] font-mono">TMDB 8.8/10</div>
                </div>
              </div>

              {/* Route splitting tag */}
              <div className="flex items-center justify-between text-[10px] text-[#66645F] dark:text-[#B7B4AA] pt-0.5">
                <span className="text-[#C49A2C] dark:text-[#D4AF37] flex items-center gap-1 font-semibold">
                  <Zap className="w-3 h-3 text-[#CE8946]" /> Bundle: -31% via React.lazy()
                </span>
                <span className="text-[#66645F] dark:text-[#B7B4AA]">Redux Toolkit State</span>
              </div>
            </div>
          )}

          {/* 2. NutriGenie Mockup */}
          {isNutriGenie && (
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-[#E7E3D8] dark:border-[#34332E] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A2C] dark:text-[#D4AF37] font-bold text-sm sm:text-base font-sans flex items-center gap-1">
                    <Brain className="w-4 h-4 text-[#CE8946]" />
                    Nutri<span className="text-[#171717] dark:text-white">Genie</span>
                  </span>
                  <span className="text-[10px] bg-[#F4E8C1] dark:bg-[#29281F] text-[#171717] dark:text-[#F5F3EA] px-1.5 py-0.5 rounded">
                    MERN + Gemini Vision
                  </span>
                </div>
                <div className="text-[10px] text-[#66645F] dark:text-[#B7B4AA] flex items-center gap-1">
                  <Database className="w-3 h-3 text-[#CE8946]" />
                  MongoDB Cloud
                </div>
              </div>

              {/* Gemini Vision Food Scanner preview */}
              <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#171717] dark:text-[#F5F3EA]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37] shrink-0" />
                  <span>Gemini Vision AI Food Scanner</span>
                </div>
                <span className="text-[10px] bg-[#F4E8C1] dark:bg-[#29281F] text-[#171717] dark:text-[#F5F3EA] px-2 py-0.5 rounded">
                  Calorie & Macro Analysis
                </span>
              </div>

              {/* Diet Plan & Macro metrics */}
              <div className="grid grid-cols-3 gap-2 pt-0.5">
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[9px] text-[#66645F] dark:text-[#B7B4AA]">Diet Engine</span>
                  <div className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA]">Indian Meal Plan</div>
                </div>
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[9px] text-[#66645F] dark:text-[#B7B4AA]">Chatbot</span>
                  <div className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA]">24/7 Fitness AI</div>
                </div>
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[9px] text-[#66645F] dark:text-[#B7B4AA]">Security</span>
                  <div className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA]">JWT + OTP Email</div>
                </div>
              </div>

              {/* Backend API stats */}
              <div className="flex items-center justify-between text-[10px] text-[#66645F] dark:text-[#B7B4AA] pt-0.5">
                <span className="text-[#C49A2C] dark:text-[#D4AF37] flex items-center gap-1 font-semibold">
                  <Server className="w-3 h-3 text-[#CE8946]" /> 20+ REST Endpoints on Render
                </span>
                <span>5+ Mongoose Schemas</span>
              </div>
            </div>
          )}

          {/* 3. InterviewAI Mockup */}
          {isInterviewAI && (
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-[#E7E3D8] dark:border-[#34332E] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A2C] dark:text-[#D4AF37] font-bold text-sm sm:text-base font-sans flex items-center gap-1">
                    <Bot className="w-4 h-4 text-[#CE8946]" />
                    Interview<span className="text-[#171717] dark:text-white">AI</span>
                  </span>
                  <span className="text-[10px] bg-[#F4E8C1] dark:bg-[#29281F] text-[#171717] dark:text-[#F5F3EA] px-1.5 py-0.5 rounded">
                    MERN + Gemini AI
                  </span>
                </div>
                <div className="text-[10px] text-[#66645F] dark:text-[#B7B4AA] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#C49A2C] dark:text-[#D4AF37]" />
                  JWT Auth
                </div>
              </div>

              {/* Prompt/JD Input preview */}
              <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#171717] dark:text-[#F5F3EA] truncate">
                  <Sparkles className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37] shrink-0" />
                  <span className="truncate">Resume & Job Description Competency Analyzer</span>
                </div>
                <span className="text-[10px] bg-[#C49A2C] dark:bg-[#D4AF37] text-white dark:text-[#171717] px-2 py-0.5 rounded font-bold">
                  Roadmap
                </span>
              </div>

              {/* Strategy Cards */}
              <div className="grid grid-cols-3 gap-2 pt-0.5">
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[9px] text-[#66645F] dark:text-[#B7B4AA]">Technical</span>
                  <div className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA]">DSA & System Design</div>
                </div>
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[9px] text-[#66645F] dark:text-[#B7B4AA]">Behavioral</span>
                  <div className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA]">STAR Method Prep</div>
                </div>
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[9px] text-[#66645F] dark:text-[#B7B4AA]">Feedback</span>
                  <div className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA]">Real-time Scoring</div>
                </div>
              </div>

              {/* Bottom detail */}
              <div className="flex items-center justify-between text-[10px] text-[#66645F] dark:text-[#B7B4AA] pt-0.5">
                <span className="text-[#C49A2C] dark:text-[#D4AF37] flex items-center gap-1 font-semibold">
                  <Server className="w-3 h-3 text-[#CE8946]" /> MongoDB Schema & Progress Store
                </span>
                <span>Express REST APIs</span>
              </div>
            </div>
          )}

          {/* 4. CivicCare Mockup */}
          {isCivicCare && (
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-[#E7E3D8] dark:border-[#34332E] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A2C] dark:text-[#D4AF37] font-bold text-sm sm:text-base font-sans flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#CE8946]" />
                    Civic<span className="text-[#171717] dark:text-white">Care</span>
                  </span>
                  <span className="text-[10px] bg-[#F4E8C1] dark:bg-[#29281F] text-[#171717] dark:text-[#F5F3EA] px-1.5 py-0.5 rounded">
                    SIH Finalist Project
                  </span>
                </div>
                <div className="text-[10px] text-[#66645F] dark:text-[#B7B4AA] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#C49A2C] dark:text-[#D4AF37]" />
                  Role-Based RBAC
                </div>
              </div>

              {/* Issue report preview */}
              <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#171717] dark:text-[#F5F3EA]">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#CE8946] shrink-0" />
                  <span>GPS Geotagged Civic Issue Pipeline</span>
                </div>
                <span className="text-[10px] bg-[#C49A2C] dark:bg-[#D4AF37] text-white dark:text-[#171717] px-2 py-0.5 rounded font-bold">
                  Resolved
                </span>
              </div>

              {/* Status workflow cards */}
              <div className="grid grid-cols-3 gap-2 pt-0.5">
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[9px] text-[#66645F] dark:text-[#B7B4AA]">Reporting</span>
                  <div className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA]">Photo + Coordinates</div>
                </div>
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[9px] text-[#66645F] dark:text-[#B7B4AA]">Municipal</span>
                  <div className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA]">Officer Dashboard</div>
                </div>
                <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex flex-col justify-between h-16">
                  <span className="text-[9px] text-[#66645F] dark:text-[#B7B4AA]">Verification</span>
                  <div className="text-[10px] font-sans font-bold text-[#171717] dark:text-[#F5F3EA]">Status Tracker</div>
                </div>
              </div>

              {/* Bottom detail */}
              <div className="flex items-center justify-between text-[10px] text-[#66645F] dark:text-[#B7B4AA] pt-0.5">
                <span className="text-[#C49A2C] dark:text-[#D4AF37] flex items-center gap-1 font-semibold">
                  <Database className="w-3 h-3 text-[#CE8946]" /> MongoDB / PostGIS Geospatial
                </span>
                <span>Smart India Hackathon</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Subtitle */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <div className="text-xs font-mono text-[#CE8946] uppercase tracking-wider font-semibold">
                {project.subtitle}
              </div>
              <h3 className="text-2xl font-extrabold text-[#171717] dark:text-[#F5F3EA] tracking-tight mt-0.5">
                {project.name}
              </h3>
            </div>
            {project.duration && (
              <span className="shrink-0 text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] px-2.5 py-1 rounded-md flex items-center gap-1.5 font-medium">
                <Calendar className="w-3 h-3 text-[#C49A2C] dark:text-[#D4AF37]" />
                {project.duration}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-[#66645F] dark:text-[#B7B4AA] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Performance Achievement Callout */}
          {project.performanceAchievement && (
            <div className="mb-5 p-3 rounded-xl bg-[#F4E8C1]/40 dark:bg-[#29281F] border-l-3 border-[#C49A2C] dark:border-[#D4AF37] text-xs text-[#171717] dark:text-[#F5F3EA]">
              <span className="font-bold">Engineering Highlight: </span>
              {project.performanceAchievement}
            </div>
          )}

          {/* Key Features Preview */}
          <div className="mb-5 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-[#66645F] dark:text-[#B7B4AA] font-semibold">
              Key Capabilities:
            </div>
            <ul className="space-y-1.5">
              {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#66645F] dark:text-[#B7B4AA] leading-normal">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-[#E7E3D8] dark:border-[#34332E] mb-5">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono
                    bg-[#FAFAF8] dark:bg-[#23231F]
                    text-[#171717] dark:text-[#F5F3EA]
                    border border-[#E7E3D8] dark:border-[#34332E]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all duration-150 cursor-pointer shadow-xs
                  bg-[#C49A2C] hover:bg-[#CE8946] text-white
                  dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs transition-colors cursor-pointer
                  bg-[#FAFAF8] dark:bg-[#23231F] hover:bg-[#E7E3D8]/60 dark:hover:bg-[#34332E]
                  text-[#171717] dark:text-[#F5F3EA]
                  border border-[#E7E3D8] dark:border-[#34332E]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="p-2.5 rounded-xl transition-colors cursor-pointer
                bg-[#FAFAF8] dark:bg-[#23231F] hover:bg-[#E7E3D8]/60 dark:hover:bg-[#34332E]
                text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA]
                border border-[#E7E3D8] dark:border-[#34332E]"
              title="View full project architecture details"
              aria-label={`View full details for ${project.name}`}
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  </TiltCard>
);
}
