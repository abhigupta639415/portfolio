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
  ExternalLink,
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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
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

    // If an external endpoint is configured via VITE_CONTACT_FORM_ENDPOINT (e.g. Formspree/EmailJS), use it:
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
        // Fallback: trigger client mailto or simulated instant submission
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Hi Abhishek,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`);
        
        // Open mail client after slight pause
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
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              09 &middot; Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {contactData.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
            {contactData.text}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#0c121e] border border-white/[0.08] flex items-center justify-between group hover:border-sky-500/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${contactData.details.email}`}
                    className="text-sm font-semibold text-white hover:text-sky-300 transition-colors"
                  >
                    {contactData.details.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#0c121e] border border-white/[0.08] flex items-center justify-between group hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone Number</div>
                  <a
                    href={`tel:${contactData.details.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors font-mono"
                  >
                    {contactData.details.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={copyPhone}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#0c121e] border border-white/[0.08] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Current Location</div>
                <div className="text-sm font-semibold text-white">
                  {contactData.details.location}
                </div>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-6 rounded-2xl bg-[#0c121e] border border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Professional Profiles
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={contactData.details.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/90 border border-white/5 hover:border-slate-600 hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-center"
                >
                  <Github className="w-5 h-5 mb-1.5" />
                  <span className="text-xs font-mono font-medium">GitHub</span>
                </a>

                <a
                  href={contactData.details.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/90 border border-white/5 hover:border-sky-500/40 hover:bg-slate-800 text-slate-300 hover:text-sky-300 transition-all text-center"
                >
                  <Linkedin className="w-5 h-5 mb-1.5 text-sky-400" />
                  <span className="text-xs font-mono font-medium">LinkedIn</span>
                </a>

                <a
                  href={contactData.details.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/90 border border-white/5 hover:border-amber-500/40 hover:bg-slate-800 text-slate-300 hover:text-amber-300 transition-all text-center"
                >
                  <Code2 className="w-5 h-5 mb-1.5 text-amber-400" />
                  <span className="text-xs font-mono font-medium">LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c121e] border border-white/[0.08] shadow-2xl">
              
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Looking forward to discussing engineering roles, internships, or technical collaborations.
              </p>

              {/* Success Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Message prepared / sent successfully!</div>
                    <div className="text-emerald-400/80 text-xs mt-0.5">
                      Thank you for reaching out. Abhishek will get back to you shortly.
                    </div>
                  </div>
                </div>
              )}

              {/* Error Banner */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Unable to send message right now.</div>
                    <div className="text-rose-400/80 text-xs mt-0.5">
                      Please send an email directly to <a href={`mailto:${personalInfo.email}`} className="underline font-mono">{personalInfo.email}</a>.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#090d16] border ${
                      formErrors.name ? 'border-rose-500' : 'border-white/10 focus:border-sky-400'
                    } text-slate-100 placeholder-slate-600 text-sm focus:outline-none transition-colors`}
                  />
                  {formErrors.name && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{formErrors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#090d16] border ${
                      formErrors.email ? 'border-rose-500' : 'border-white/10 focus:border-sky-400'
                    } text-slate-100 placeholder-slate-600 text-sm focus:outline-none transition-colors`}
                  />
                  {formErrors.email && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{formErrors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300">
                      Message *
                    </label>
                    <span className="text-[11px] font-mono text-slate-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Abhishek, we reviewed your projects and would love to discuss an engineering role with our team..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#090d16] border ${
                      formErrors.message ? 'border-rose-500' : 'border-white/10 focus:border-sky-400'
                    } text-slate-100 placeholder-slate-600 text-sm focus:outline-none transition-colors resize-none`}
                  />
                  {formErrors.message && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-sky-500/20 disabled:opacity-60 transition-all cursor-pointer"
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
