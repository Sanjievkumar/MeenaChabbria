import React, { useState } from 'react';
import {
  Clock,
  Calendar,
  Mail,
  Phone,
  Globe,
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Check,
  AlertCircle,
  Info,
  Sparkles,
  Send,
  Users,
  Briefcase,
  Landmark,
  MessageSquare
} from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const SESSION_TYPES = [
  'Career Guidance',
  'Leadership & Mentorship',
  'Personal & Professional Growth',
  'LinkedIn & Personal Branding',
  'Speaking Engagement',
  'Business / Collaboration',
  'Other'
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  sessionType: string;
  preferredDay: string;
  preferredTime: string;
  query: string;
}

const initialForm: FormData = {
  fullName: '',
  email: '',
  phone: '',
  sessionType: '',
  preferredDay: '',
  preferredTime: '',
  query: ''
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverErrorMsg, setServerErrorMsg] = useState('');

  // Verified & configurable contact points
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'enquiries@meenachabbria.com';
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || '';
  const instagramUrl = 'https://www.instagram.com/meena_chhabbria?dlrf=MWdvNzl3M2xqeHVqaA==';
  const websiteUrl = 'https://meenachabbria.com';

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Full name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please provide a valid email address (e.g., name@example.com).';
        }
        return '';
      case 'sessionType':
        if (!value) return 'Please select the type of session you are interested in.';
        return '';
      case 'query':
        if (!value.trim()) return 'Please share your query or reason for requesting a session.';
        if (value.trim().length < 10) return 'Please provide a little more detail (at least 10 characters).';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => {
      const next = { ...prev, [field]: value };
      // Reset preferredTime if preferredDay changes
      if (field === 'preferredDay' && prev.preferredDay !== value) {
        next.preferredTime = '';
      }
      return next;
    });
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched and validate
    const fieldsToValidate: (keyof FormData)[] = ['fullName', 'email', 'sessionType', 'query'];
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    const newTouched: Partial<Record<keyof FormData, boolean>> = {};

    fieldsToValidate.forEach(field => {
      newTouched[field] = true;
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    setTouched(prev => ({ ...prev, ...newTouched }));
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus first error
      const firstErrorField = fieldsToValidate.find(f => newErrors[f]);
      if (firstErrorField) {
        const el = document.getElementById(firstErrorField);
        if (el) el.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setServerErrorMsg('');

    const endpoint = import.meta.env.VITE_BOOKING_ENDPOINT || '/api/booking';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          sessionType: formData.sessionType,
          preferredDay: formData.preferredDay || 'No preference / Flexible',
          preferredTime: formData.preferredTime || 'Flexible',
          query: formData.query.trim(),
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        let errorData = '';
        try {
          const json = await response.json();
          errorData = json.error || json.message || '';
        } catch {
          errorData = await response.text();
        }
        throw new Error(errorData || `Submission failed with HTTP ${response.status}`);
      }

      setSubmitStatus('success');
      setFormData(initialForm);
      setTouched({});
      setErrors({});
    } catch (err: any) {
      console.error('Booking submission error:', err);
      setSubmitStatus('error');
      setServerErrorMsg(
        err.message || 'Unable to deliver request. Please verify your connection or use direct email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const constructMailtoLink = () => {
    const subject = encodeURIComponent(
      `Booking Request: ${formData.sessionType || 'Session'} - ${formData.fullName || 'New Enquiry'}`
    );
    const body = encodeURIComponent(
      `Booking Request Details\n` +
      `-------------------------\n` +
      `Full Name: ${formData.fullName || 'Not specified'}\n` +
      `Email Address: ${formData.email || 'Not specified'}\n` +
      `Phone Number: ${formData.phone || 'Not provided'}\n` +
      `Session Type: ${formData.sessionType || 'Not specified'}\n` +
      `Preferred Day: ${formData.preferredDay || 'Flexible'}\n` +
      `Preferred Time: ${formData.preferredTime || 'Flexible'}\n\n` +
      `Query / Notes:\n` +
      `${formData.query || '(No query entered)'}\n`
    );
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="booking"
      className="py-20 sm:py-28 bg-[#140E1E] text-white relative overflow-hidden selection:bg-purple-900 selection:text-purple-200"
    >
      {/* Anchor alias so any #contact links scroll right here */}
      <div id="contact" className="absolute -top-20" tabIndex={-1} aria-hidden="true" />

      {/* Background Soft Purple & Rose Lighting Accents */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-purple-800/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-900/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* 1. HERO SECTION */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span className="font-mono text-[11px] sm:text-xs font-bold text-purple-300 tracking-[0.25em] uppercase">
              LET'S CONNECT
            </span>
          </div>

          <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.15] mb-6">
            Let's Make Time for <span className="italic text-purple-300 font-serif-title">What Matters.</span>
          </h2>

          <p className="text-purple-200/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you're seeking career guidance, leadership mentorship, personal growth, or a conversation about your next chapter, I'd love to hear from you. Share what brings you here, and let's explore how we can connect.
          </p>

          <div>
            <a
              href="#booking-form"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-xs sm:text-sm font-bold tracking-[0.18em] px-7 py-4 rounded-lg shadow-lg hover:shadow-purple-900/50 transition-all active:scale-95 group uppercase"
            >
              <span>Request a Booking</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-purple-200" />
            </a>
          </div>
        </div>

        {/* 2. AVAILABILITY AND BOOKING HOURS */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="text-center mb-8">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-purple-300 uppercase">
              AVAILABILITY & SESSIONS
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl text-white font-normal mt-1">
              General Booking Hours
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weekdays Card */}
            <div className="bg-[#1C142B] p-7 sm:p-8 rounded-2xl border border-purple-900/50 hover:border-purple-600/60 transition-all shadow-xl flex flex-col justify-between group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.22em] text-purple-400 uppercase block mb-1">
                    WEEKDAYS
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif text-white font-normal">
                    Monday – Friday
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-950/90 border border-purple-800/70 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
              </div>

              <div className="pt-4 border-t border-purple-900/40 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-purple-300/80 block uppercase tracking-wider mb-0.5">
                    Available Window
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl text-purple-200 font-normal">
                    6:00 PM – 8:00 PM
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-full uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Evening
                </span>
              </div>
            </div>

            {/* Weekends Card */}
            <div className="bg-[#1C142B] p-7 sm:p-8 rounded-2xl border border-purple-900/50 hover:border-purple-600/60 transition-all shadow-xl flex flex-col justify-between group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.22em] text-purple-400 uppercase block mb-1">
                    WEEKENDS
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif text-white font-normal">
                    Saturday – Sunday
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-950/90 border border-purple-800/70 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shadow-md">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>

              <div className="pt-4 border-t border-purple-900/40 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-purple-300/80 block uppercase tracking-wider mb-0.5">
                    Available Window
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl text-purple-200 font-normal">
                    11:00 AM – 6:00 PM
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-purple-300 bg-purple-950/80 border border-purple-800/50 px-2.5 py-1 rounded-full uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Flexible Day
                </span>
              </div>
            </div>
          </div>

          {/* Availability Note */}
          <div className="mt-5 p-4 rounded-xl bg-purple-950/40 border border-purple-900/40 flex items-start gap-3 max-w-3xl mx-auto">
            <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed italic">
              All booking requests are subject to availability. Your session will be confirmed once you receive a response from Meena or her team.
            </p>
          </div>
        </div>

        {/* 3. MAIN FORM & CONTACT DETAILS SPLIT */}
        <div id="booking-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: BOOKING REQUEST FORM (7 Columns) */}
          <div className="lg:col-span-7 bg-[#1C142B] p-6 sm:p-10 rounded-2xl border border-purple-900/50 shadow-2xl relative">
            <div className="mb-8 pb-6 border-b border-purple-900/40">
              <span className="text-[11px] font-bold tracking-[0.22em] text-purple-400 uppercase block mb-1">
                SESSION ENQUIRY
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl text-white font-normal">
                Booking Request Form
              </h3>
              <p className="text-sm text-purple-200/80 mt-1">
                Complete the fields below to propose a session. We review each request individually.
              </p>
            </div>

            {/* Success State */}
            {submitStatus === 'success' ? (
              <div className="p-8 rounded-xl bg-purple-950/70 border border-purple-500/50 text-center space-y-5 my-4">
                <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/60 text-emerald-300 flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif-title text-2xl text-white">
                    Request Received
                  </h4>
                  <p className="text-sm sm:text-base text-purple-100 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your booking request has been received. Meena or her team will get back to you to discuss availability and next steps.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-300 hover:text-white uppercase transition-colors"
                  >
                    <span>Submit another request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                {/* Top Error Alert if submission failed */}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-950/70 border border-rose-800/60 text-rose-200 text-xs sm:text-sm space-y-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{serverErrorMsg || 'Request submission could not be completed.'}</span>
                    </div>
                    <p className="text-xs text-rose-200/80">
                      You can send your details directly via email to ensure your enquiry is delivered immediately:
                    </p>
                    <a
                      href={constructMailtoLink()}
                      className="inline-flex items-center gap-1.5 bg-rose-900/60 hover:bg-rose-900 text-white text-xs font-bold px-3 py-1.5 rounded transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send directly to {contactEmail}</span>
                    </a>
                  </div>
                )}

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-semibold tracking-wider text-purple-200 uppercase">
                      Full Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.fullName}
                      onChange={e => handleChange('fullName', e.target.value)}
                      onBlur={() => handleBlur('fullName')}
                      placeholder="e.g. Priya Sharma"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={`w-full bg-[#140E1E] text-white text-sm px-4 py-3 rounded-lg border transition-colors outline-none placeholder-purple-400/40 focus:ring-2 focus:ring-purple-500 ${
                        errors.fullName && touched.fullName
                          ? 'border-pink-500/80'
                          : 'border-purple-900/60 focus:border-purple-500'
                      }`}
                    />
                    {errors.fullName && touched.fullName && (
                      <p id="fullName-error" className="text-xs text-pink-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold tracking-wider text-purple-200 uppercase">
                      Email Address <span className="text-pink-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={e => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="name@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full bg-[#140E1E] text-white text-sm px-4 py-3 rounded-lg border transition-colors outline-none placeholder-purple-400/40 focus:ring-2 focus:ring-purple-500 ${
                        errors.email && touched.email
                          ? 'border-pink-500/80'
                          : 'border-purple-900/60 focus:border-purple-500'
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" className="text-xs text-pink-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone Number & Type of Session */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-semibold tracking-wider text-purple-200 uppercase">
                      Phone Number <span className="text-purple-400/80 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#140E1E] text-white text-sm px-4 py-3 rounded-lg border border-purple-900/60 focus:border-purple-500 transition-colors outline-none placeholder-purple-400/40 focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  {/* Type of Session (Required dropdown) */}
                  <div className="space-y-1.5">
                    <label htmlFor="sessionType" className="block text-xs font-semibold tracking-wider text-purple-200 uppercase">
                      Type of Session <span className="text-pink-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="sessionType"
                        name="sessionType"
                        required
                        value={formData.sessionType}
                        onChange={e => handleChange('sessionType', e.target.value)}
                        onBlur={() => handleBlur('sessionType')}
                        aria-invalid={!!errors.sessionType}
                        aria-describedby={errors.sessionType ? "sessionType-error" : undefined}
                        className={`w-full bg-[#140E1E] text-white text-sm px-4 py-3 rounded-lg border transition-colors outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer ${
                          errors.sessionType && touched.sessionType
                            ? 'border-pink-500/80'
                            : 'border-purple-900/60 focus:border-purple-500'
                        } ${!formData.sessionType ? 'text-purple-400/50' : 'text-white'}`}
                      >
                        <option value="" disabled>Select session type...</option>
                        {SESSION_TYPES.map(type => (
                          <option key={type} value={type} className="bg-[#1C142B] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-purple-400">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    {errors.sessionType && touched.sessionType && (
                      <p id="sessionType-error" className="text-xs text-pink-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.sessionType}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Preferred Day & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Day (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredDay" className="block text-xs font-semibold tracking-wider text-purple-200 uppercase">
                      Preferred Day <span className="text-purple-400/80 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        id="preferredDay"
                        name="preferredDay"
                        value={formData.preferredDay}
                        onChange={e => handleChange('preferredDay', e.target.value)}
                        className="w-full bg-[#140E1E] text-white text-sm px-4 py-3 rounded-lg border border-purple-900/60 focus:border-purple-500 transition-colors outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
                      >
                        <option value="">No preference / Flexible</option>
                        <option value="Weekdays" className="bg-[#1C142B] text-white">
                          Weekdays (Monday – Friday)
                        </option>
                        <option value="Weekends" className="bg-[#1C142B] text-white">
                          Weekends (Saturday – Sunday)
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-purple-400">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Time (Optional, contextual to availability) */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredTime" className="block text-xs font-semibold tracking-wider text-purple-200 uppercase">
                      Preferred Time <span className="text-purple-400/80 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={e => handleChange('preferredTime', e.target.value)}
                        className="w-full bg-[#140E1E] text-white text-sm px-4 py-3 rounded-lg border border-purple-900/60 focus:border-purple-500 transition-colors outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
                      >
                        <option value="">Flexible with time</option>
                        {formData.preferredDay === 'Weekdays' ? (
                          <>
                            <option value="6:00 PM – 8:00 PM (Any time)" className="bg-[#1C142B] text-white">
                              6:00 PM – 8:00 PM (Any time)
                            </option>
                            <option value="6:00 PM – 7:00 PM" className="bg-[#1C142B] text-white">
                              6:00 PM – 7:00 PM
                            </option>
                            <option value="7:00 PM – 8:00 PM" className="bg-[#1C142B] text-white">
                              7:00 PM – 8:00 PM
                            </option>
                          </>
                        ) : formData.preferredDay === 'Weekends' ? (
                          <>
                            <option value="11:00 AM – 6:00 PM (Any time)" className="bg-[#1C142B] text-white">
                              11:00 AM – 6:00 PM (Any time)
                            </option>
                            <option value="11:00 AM – 1:00 PM (Morning)" className="bg-[#1C142B] text-white">
                              11:00 AM – 1:00 PM (Morning)
                            </option>
                            <option value="1:00 PM – 4:00 PM (Afternoon)" className="bg-[#1C142B] text-white">
                              1:00 PM – 4:00 PM (Afternoon)
                            </option>
                            <option value="4:00 PM – 6:00 PM (Late Afternoon)" className="bg-[#1C142B] text-white">
                              4:00 PM – 6:00 PM (Late Afternoon)
                            </option>
                          </>
                        ) : (
                          <>
                            <option value="Weekday Evening (6:00 PM – 8:00 PM)" className="bg-[#1C142B] text-white">
                              Weekday Evening (6:00 PM – 8:00 PM)
                            </option>
                            <option value="Weekend Window (11:00 AM – 6:00 PM)" className="bg-[#1C142B] text-white">
                              Weekend Window (11:00 AM – 6:00 PM)
                            </option>
                          </>
                        )}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-purple-400">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 4: Your Query (Required, large multiline text area) */}
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <label htmlFor="query" className="block text-xs font-semibold tracking-wider text-purple-200 uppercase">
                      Your Query <span className="text-pink-400">*</span>
                    </label>
                    <span className="text-[11px] text-purple-400/70">
                      Share your goals, situation, or session topics
                    </span>
                  </div>
                  <textarea
                    id="query"
                    name="query"
                    required
                    rows={5}
                    value={formData.query}
                    onChange={e => handleChange('query', e.target.value)}
                    onBlur={() => handleBlur('query')}
                    placeholder="Tell Meena what you'd like to explore in this session—your current career stage, questions, leadership challenges, or speaking event details..."
                    aria-invalid={!!errors.query}
                    aria-describedby={errors.query ? "query-error" : undefined}
                    className={`w-full bg-[#140E1E] text-white text-sm px-4 py-3 rounded-lg border transition-colors outline-none placeholder-purple-400/40 focus:ring-2 focus:ring-purple-500 resize-y min-h-[130px] ${
                      errors.query && touched.query
                        ? 'border-pink-500/80'
                        : 'border-purple-900/60 focus:border-purple-500'
                    }`}
                  />
                  {errors.query && touched.query && (
                    <p id="query-error" className="text-xs text-pink-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.query}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-bold tracking-[0.2em] px-6 py-4 rounded-lg shadow-lg hover:shadow-purple-900/50 transition-all uppercase active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-purple-200" />
                        <span>Submit Booking Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-purple-400/70 text-center mt-3">
                    Your request will be delivered directly to Meena's team for schedule review.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* RIGHT: CONTACT INFORMATION & VERIFIED PROFILES (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct Contact Details Card */}
            <div className="bg-[#1C142B] p-6 sm:p-8 rounded-2xl border border-purple-900/50 shadow-xl space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.22em] text-purple-400 uppercase block mb-1">
                  DIRECT CONTACT
                </span>
                <h4 className="font-serif-title text-xl sm:text-2xl text-white font-normal">
                  Connect & Inquire
                </h4>
              </div>

              <div className="space-y-4 text-sm text-purple-200">
                {/* Email row */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#140E1E]/80 border border-purple-900/40">
                  <div className="w-9 h-9 rounded-lg bg-purple-950 border border-purple-800/60 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-purple-400 block font-semibold mb-0.5">
                      Email Enquiry
                    </span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-white hover:text-purple-300 transition-colors font-medium break-all inline-flex items-center gap-1 group"
                    >
                      <span>{contactEmail}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp row */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#140E1E]/80 border border-purple-900/40">
                  <div className="w-9 h-9 rounded-lg bg-purple-950 border border-purple-800/60 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-purple-400 block font-semibold mb-0.5">
                      Phone & Coordination
                    </span>
                    {contactPhone ? (
                      <a
                        href={`tel:${contactPhone}`}
                        className="text-white hover:text-purple-300 transition-colors font-medium inline-flex items-center gap-1 group"
                      >
                        <span>{contactPhone}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
                      </a>
                    ) : (
                      <span className="text-xs text-purple-200/90 leading-relaxed block">
                        Direct line and coordination provided upon booking confirmation.
                      </span>
                    )}
                  </div>
                </div>

                {/* Location row */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#140E1E]/80 border border-purple-900/40">
                  <div className="w-9 h-9 rounded-lg bg-purple-950 border border-purple-800/60 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-purple-400 block font-semibold mb-0.5">
                      Format & Presence
                    </span>
                    <span className="text-xs text-purple-200/90 leading-relaxed block">
                      Bengaluru, India • In-Person & Global Virtual Sessions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Social Profiles Card */}
            <div className="bg-[#1C142B] p-6 sm:p-8 rounded-2xl border border-purple-900/50 shadow-xl space-y-5">
              <div>
                <span className="text-[11px] font-bold tracking-[0.22em] text-purple-400 uppercase block mb-1">
                  VERIFIED PROFILES
                </span>
                <h4 className="font-serif-title text-xl text-white font-normal">
                  Follow & Connect
                </h4>
              </div>

              <div className="space-y-3">
                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#140E1E]/80 border border-purple-900/40 hover:border-purple-600/60 hover:bg-[#140E1E] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-950 border border-purple-800/60 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block group-hover:text-purple-300 transition-colors">
                        @meena_chhabbria
                      </span>
                      <span className="text-xs text-purple-300/70">
                        Instagram • Official Profile
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Official Website */}
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#140E1E]/80 border border-purple-900/40 hover:border-purple-600/60 hover:bg-[#140E1E] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-950 border border-purple-800/60 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block group-hover:text-purple-300 transition-colors">
                        meenachabbria.com
                      </span>
                      <span className="text-xs text-purple-300/70">
                        Official Personal Website
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Speaking & Engagement Pillars */}
            <div className="bg-[#1C142B] p-6 sm:p-7 rounded-2xl border border-purple-900/50 shadow-xl space-y-4">
              <span className="text-[11px] font-bold tracking-[0.22em] text-purple-400 uppercase block">
                AVAILABLE FOR ENGAGEMENTS
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { label: 'Keynotes', icon: Users },
                  { label: 'Panels', icon: Calendar },
                  { label: 'Fireside Chats', icon: MessageSquare },
                  { label: 'Mentorship', icon: Sparkles },
                  { label: 'Corporate Sessions', icon: Briefcase },
                  { label: 'Universities', icon: Landmark }
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-2.5 rounded-lg bg-[#140E1E]/60 border border-purple-900/30 flex items-center gap-2 text-purple-200"
                    >
                      <Icon className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
