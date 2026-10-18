import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  ShieldCheck,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div
        className="relative w-full max-w-5xl max-h-[94vh] bg-[#0c121e] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-[#090d16] border-b border-white/[0.08] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 truncate max-w-[70%]">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <div className="truncate">
              <h3 id="certificate-modal-title" className="text-sm sm:text-base font-bold text-white truncate">
                {certificate.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono truncate">
                {certificate.organization}
              </p>
            </div>
          </div>

          {/* Quick Actions (Zoom, Download, Close) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Zoom Controls */}
            {!imageError && (
              <div className="hidden sm:flex items-center bg-slate-900/90 border border-white/10 rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono text-slate-300 px-2 select-none">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                {zoomLevel !== 1 && (
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="p-1.5 text-sky-400 hover:text-sky-300 rounded hover:bg-slate-800 transition-colors"
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold shadow-sm transition-all"
                title="Download Certificate File"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close certificate preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#060910] flex items-center justify-center min-h-[340px] max-h-[62vh]">
          {imageError ? (
            /* Missing file fallback banner */
            <div className="max-w-md text-center p-8 rounded-2xl bg-slate-900/80 border border-amber-500/30">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Certificate Image File Pending
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Please place the certificate file at:
                <br />
                <code className="text-amber-300 font-mono text-[11px] bg-black/40 px-2 py-1 rounded mt-1 inline-block">
                  {certificate.certificateImage}
                </code>
              </p>
              <p className="text-[11px] text-slate-400">
                The verified credential data from {certificate.organization} is registered in the portfolio.
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
                className="max-h-[58vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
                onError={() => setImageError(true)}
              />
            </div>
          )}
        </div>

        {/* Bottom Credential Metadata Bar */}
        <div className="bg-[#090d16] border-t border-white/[0.08] px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                {certificate.organization}
              </span>
              {certificate.issueDate && (
                <span className="flex items-center gap-1 text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Issued: {certificate.issueDate}
                  {certificate.expirationDate && ` &middot; Valid until: ${certificate.expirationDate}`}
                </span>
              )}
            </div>

            {/* Validation Number (e.g. AWS) */}
            {certificate.validationNumber && (
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-slate-400 font-mono text-[11px]">
                  Validation Number:
                </span>
                <code className="bg-slate-900 border border-white/10 px-2 py-0.5 rounded text-[11px] font-mono text-sky-300 select-all">
                  {certificate.validationNumber}
                </code>
                <button
                  type="button"
                  onClick={() => handleCopyValidation(certificate.validationNumber)}
                  className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy validation number"
                  aria-label="Copy validation number"
                >
                  {copiedValidation ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}

            {/* QR Code notice (e.g. Cisco) */}
            {certificate.qrNotice && (
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 pt-0.5">
                <QrCode className="w-3.5 h-3.5" />
                <span>{certificate.qrNotice}</span>
              </div>
            )}
          </div>

          {/* Action Link (e.g. Verify Credential) */}
          <div className="flex items-center gap-3 shrink-0">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs shadow-md shadow-sky-500/20 transition-all"
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
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Open Original PDF</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
