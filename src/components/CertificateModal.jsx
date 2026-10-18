import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Calendar,
  Building2,
  Copy,
  Check,
  QrCode,
  FileText,
  AlertCircle
} from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copiedValidation, setCopiedValidation] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setZoomLevel(1);
      setImageError(false);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handleCopyValidation = (num) => {
    navigator.clipboard.writeText(num);
    setCopiedValidation(true);
    setTimeout(() => setCopiedValidation(false), 2000);
  };

  const downloadTarget = certificate.certificatePdf || certificate.certificateImage;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 dark:bg-black/85 backdrop-blur-md transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div
        className="relative w-full max-w-5xl max-h-[94vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden
          bg-[#FFFFFF] dark:bg-[#1D1D1A]
          text-[#171717] dark:text-[#F5F3EA]
          border border-[#E7E3D8] dark:border-[#34332E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8] dark:bg-[#171716]">
          <div className="flex items-center gap-2.5 truncate max-w-[70%]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C49A2C] dark:bg-[#D4AF37] animate-pulse" />
            <div className="truncate">
              <h3 id="certificate-modal-title" className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#F5F3EA] truncate">
                {certificate.title}
              </h3>
              <p className="text-xs text-[#66645F] dark:text-[#B7B4AA] font-mono truncate">
                {certificate.organization}
              </p>
            </div>
          </div>

          {/* Quick Actions (Zoom, Download, Close) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Zoom Controls */}
            {!imageError && (
              <div className="hidden sm:flex items-center bg-[#FFFFFF] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1.5 text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] rounded transition-colors"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono text-[#171717] dark:text-[#F5F3EA] px-2 select-none">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1.5 text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] rounded transition-colors"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                {zoomLevel !== 1 && (
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="p-1.5 text-[#C49A2C] dark:text-[#D4AF37] rounded transition-colors"
                    title="Reset Zoom"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {/* Download Button */}
            {downloadTarget && (
              <a
                href={downloadTarget}
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-all
                  bg-[#C49A2C] hover:bg-[#CE8946] text-white
                  dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]"
                title="Download Certificate File"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
            )}

            {/* Full-size tab link */}
            {certificate.certificateImage && (
              <a
                href={certificate.certificateImage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#FFFFFF] dark:bg-[#23231F] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] transition-colors"
                title="Open image in new tab"
                aria-label="Open image in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#FFFFFF] dark:bg-[#23231F] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] transition-colors cursor-pointer"
              aria-label="Close certificate preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area (Never tinted or distorted) */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#FAFAF8] dark:bg-[#131311] flex items-center justify-center min-h-[340px] max-h-[62vh]">
          {imageError ? (
            <div className="max-w-md text-center p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#CE8946]/40">
              <div className="w-12 h-12 rounded-xl bg-[#CE8946]/10 text-[#CE8946] flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#171717] dark:text-[#F5F3EA] mb-2">
                Certificate File Loading
              </h4>
              <p className="text-xs text-[#66645F] dark:text-[#B7B4AA] leading-relaxed mb-4">
                Location:
                <code className="text-[#C49A2C] dark:text-[#D4AF37] font-mono text-[11px] block mt-1">
                  {certificate.certificateImage}
                </code>
              </p>
            </div>
          ) : (
            <div
              className="transition-transform duration-200 ease-out origin-center flex items-center justify-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={certificate.certificateImage}
                alt={`${certificate.title} issued by ${certificate.organization}`}
                className="max-h-[58vh] max-w-full object-contain rounded-lg shadow-md border border-[#E7E3D8] dark:border-[#34332E] bg-white"
                onError={() => setImageError(true)}
              />
            </div>
          )}
        </div>

        {/* Bottom Credential Metadata Bar */}
        <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8] dark:bg-[#171716] text-xs">
          <div className="space-y-1.5 text-[#66645F] dark:text-[#B7B4AA]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1.5 font-semibold text-[#171717] dark:text-[#F5F3EA]">
                <Building2 className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                {certificate.organization}
              </span>
              {certificate.issueDate && (
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                  Issued: {certificate.issueDate}
                  {certificate.expirationDate && ` &middot; Valid until: ${certificate.expirationDate}`}
                </span>
              )}
            </div>

            {/* Validation Number (AWS) */}
            {certificate.validationNumber && (
              <div className="flex items-center gap-2 pt-0.5">
                <span className="font-mono text-[11px]">Validation Number:</span>
                <code className="px-2 py-0.5 rounded text-[11px] font-mono text-[#171717] dark:text-[#F5F3EA] bg-[#FFFFFF] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] select-all">
                  {certificate.validationNumber}
                </code>
                <button
                  type="button"
                  onClick={() => handleCopyValidation(certificate.validationNumber)}
                  className="p-1 rounded bg-[#FFFFFF] dark:bg-[#23231F] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] transition-colors"
                  title="Copy validation number"
                >
                  {copiedValidation ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}

            {/* QR Notice (Cisco) */}
            {certificate.qrNotice && (
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C49A2C] dark:text-[#D4AF37] pt-0.5">
                <QrCode className="w-3.5 h-3.5" />
                <span>{certificate.qrNotice}</span>
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 shrink-0">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-xs transition-all shadow-xs
                  bg-[#C49A2C] hover:bg-[#CE8946] text-white
                  dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {certificate.certificatePdf && (
              <a
                href={certificate.certificatePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors
                  bg-[#FFFFFF] dark:bg-[#23231F] hover:bg-[#E7E3D8]/60 dark:hover:bg-[#34332E]
                  text-[#171717] dark:text-[#F5F3EA]
                  border border-[#E7E3D8] dark:border-[#34332E]"
              >
                <FileText className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                <span>Open Original PDF</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
