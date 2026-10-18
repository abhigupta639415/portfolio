import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code2,
  Copy,
  Check,
  CheckCircle2,
  Download,
  AlertCircle
} from 'lucide-react';
import { contactData, personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePdfUrl;
    link.download = 'Abhishek_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters long.';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const customEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    try {
      if (customEndpoint) {
        const response = await fetch(customEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Network error');
      } else {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Hi Abhishek,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`);
        window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative bg-[#FAFAF8] dark:bg-[#171716] border-t border-[#E7E3D8] dark:border-[#34332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#C49A2C] dark:bg-[#D4AF37]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37]">
              07 &middot; Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#FAFAF8]">
            {contactData.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#66645F] dark:text-[#B7B4AA] mt-2 max-w-xl leading-relaxed">
            {contactData.text}
          </p>

          {/* Quick Action Buttons Row (Requirement #24) */}
          <div className="flex flex-wrap items-center gap-2.5 mt-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold shadow-xs
                bg-[#C49A2C] hover:bg-[#CE8946] text-white
                dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Me</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold
                bg-[#FFFFFF] dark:bg-[#1D1D1A] hover:bg-[#FAFAF8] dark:hover:bg-[#23231F]
                text-[#171717] dark:text-[#F5F3EA]
                border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37]"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold
                bg-[#FFFFFF] dark:bg-[#1D1D1A] hover:bg-[#FAFAF8] dark:hover:bg-[#23231F]
                text-[#171717] dark:text-[#F5F3EA]
                border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              type="button"
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer
                bg-[#FFFFFF] dark:bg-[#1D1D1A] hover:bg-[#FAFAF8] dark:hover:bg-[#23231F]
                text-[#171717] dark:text-[#F5F3EA]
                border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37]"
            >
              <Download className="w-3.5 h-3.5 text-[#CE8946]" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex items-center justify-between group hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F4E8C1] dark:bg-[#29281F] text-[#C49A2C] dark:text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA]">Direct Email</div>
                  <a
                    href={`mailto:${contactData.details.email}`}
                    className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#F5F3EA] hover:text-[#C49A2C] dark:hover:text-[#D4AF37] transition-colors font-mono truncate block"
                  >
                    {contactData.details.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="p-2 rounded-lg bg-[#FAFAF8] dark:bg-[#23231F] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] transition-colors cursor-pointer shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex items-center justify-between group hover:border-[#CE8946] transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F4E8C1] dark:bg-[#29281F] text-[#CE8946] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA]">Phone / WhatsApp</div>
                  <a
                    href={`tel:${contactData.details.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#F5F3EA] hover:text-[#C49A2C] dark:hover:text-[#D4AF37] transition-colors font-mono"
                  >
                    {contactData.details.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={copyPhone}
                className="p-2 rounded-lg bg-[#FAFAF8] dark:bg-[#23231F] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] transition-colors cursor-pointer shrink-0"
                title="Copy phone number to clipboard"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F4E8C1] dark:bg-[#29281F] text-[#C49A2C] dark:text-[#D4AF37] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA]">Base Location</div>
                <div className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#F5F3EA]">
                  {contactData.details.location}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] shadow-2xs">
              
              <h3 className="text-base font-bold text-[#171717] dark:text-[#F5F3EA] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#66645F] dark:text-[#B7B4AA] mb-5 font-mono">
                Looking forward to discussing full-stack roles, internships, or technical collaborations.
              </p>

              {/* Success Banner */}
              {submitStatus === 'success' && (
                <div className="mb-5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Message prepared / sent successfully!</span> Abhishek will get back to you shortly.
                  </div>
                </div>
              )}

              {/* Error Banner */}
              {submitStatus === 'error' && (
                <div className="mb-5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Unable to dispatch.</span> Please email directly to <a href={`mailto:${personalInfo.email}`} className="underline font-mono">{personalInfo.email}</a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-[#171717] dark:text-[#F5F3EA] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Hiring Manager / Recruiter"
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#FAFAF8] dark:bg-[#23231F] text-[#171717] dark:text-[#F5F3EA] placeholder-[#66645F]/50 dark:placeholder-[#B7B4AA]/40 border ${
                      formErrors.name ? 'border-rose-500' : 'border-[#E7E3D8] dark:border-[#34332E] focus:border-[#C49A2C] dark:focus:border-[#D4AF37]'
                    } focus:outline-none transition-colors`}
                  />
                  {formErrors.name && (
                    <p className="text-rose-500 text-xs mt-1 font-mono">{formErrors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-[#171717] dark:text-[#F5F3EA] mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#FAFAF8] dark:bg-[#23231F] text-[#171717] dark:text-[#F5F3EA] placeholder-[#66645F]/50 dark:placeholder-[#B7B4AA]/40 border ${
                      formErrors.email ? 'border-rose-500' : 'border-[#E7E3D8] dark:border-[#34332E] focus:border-[#C49A2C] dark:focus:border-[#D4AF37]'
                    } focus:outline-none transition-colors`}
                  />
                  {formErrors.email && (
                    <p className="text-rose-500 text-xs mt-1 font-mono">{formErrors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-[#171717] dark:text-[#F5F3EA]">
                      Message *
                    </label>
                    <span className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA]">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Abhishek, we reviewed your work and would love to discuss an engineering opportunity with our team..."
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#FAFAF8] dark:bg-[#23231F] text-[#171717] dark:text-[#F5F3EA] placeholder-[#66645F]/50 dark:placeholder-[#B7B4AA]/40 border ${
                      formErrors.message ? 'border-rose-500' : 'border-[#E7E3D8] dark:border-[#34332E] focus:border-[#C49A2C] dark:focus:border-[#D4AF37]'
                    } focus:outline-none transition-colors resize-none`}
                  />
                  {formErrors.message && (
                    <p className="text-rose-500 text-xs mt-1 font-mono">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs disabled:opacity-60
                    bg-[#C49A2C] hover:bg-[#CE8946] text-white
                    dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
