import React from 'react';
import {
  Cloud,
  Network,
  ExternalLink,
  Eye,
  Calendar,
  Building2,
  QrCode,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications({ onOpenCertificate }) {
  return (
    <section id="certifications" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#C49A2C] dark:bg-[#D4AF37]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37]">
              05 &middot; Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
            Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#66645F] dark:text-[#B7B4AA] mt-2 max-w-xl">
            Industry and vendor-validated credentials verifying cloud architectures and computer networking competencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {certificationsData.map((cert) => {
            const isAws = cert.id === 'aws-cloud-practitioner';
            return (
              <div
                key={cert.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E]">
                      {isAws ? (
                        <Cloud className="w-6 h-6 text-[#C49A2C] dark:text-[#D4AF37]" />
                      ) : (
                        <Network className="w-6 h-6 text-[#CE8946]" />
                      )}
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#FAFAF8] dark:bg-[#23231F] text-[#171717] dark:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E]">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-bold text-[#171717] dark:text-[#F5F3EA] tracking-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#CE8946] font-semibold mt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{cert.organization}</span>
                  </div>

                  {/* Date details */}
                  <div className="mt-3 text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                      <span>Issued: {cert.issueDate}</span>
                    </span>
                    {cert.expirationDate && (
                      <span>&bull; Valid until: {cert.expirationDate}</span>
                    )}
                  </div>

                  {/* Validation Number (AWS) */}
                  {cert.validationNumber && (
                    <div className="mt-3.5 p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] text-xs font-mono">
                      <span className="text-[#66645F] dark:text-[#B7B4AA]">Validation Number: </span>
                      <code className="text-[#171717] dark:text-[#F5F3EA] font-bold select-all">
                        {cert.validationNumber}
                      </code>
                    </div>
                  )}

                  {/* QR Code Notice (Cisco) */}
                  {cert.qrNotice && (
                    <div className="mt-3.5 p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] text-xs font-mono text-[#171717] dark:text-[#F5F3EA] flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37] shrink-0" />
                      <span>{cert.qrNotice}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-[#66645F] dark:text-[#B7B4AA] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-5 mt-6 border-t border-[#E7E3D8] dark:border-[#34332E]">
                  <button
                    type="button"
                    onClick={() => onOpenCertificate(cert)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all duration-150 cursor-pointer shadow-xs
                      bg-[#C49A2C] hover:bg-[#CE8946] text-white
                      dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs transition-colors cursor-pointer
                        bg-[#FAFAF8] dark:bg-[#23231F] hover:bg-[#E7E3D8]/60 dark:hover:bg-[#34332E]
                        text-[#171717] dark:text-[#F5F3EA]
                        border border-[#E7E3D8] dark:border-[#34332E]"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
