'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Send, UserPlus } from 'lucide-react';

const inputClasses =
  'w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-body/40 outline-none transition-colors focus:border-gold focus:shadow-glow';

const trades = [
  'Property Inspections / Field Services',
  'Locksmith / Securing',
  'Trash-Out / Hauling',
  'Landscaping / Lawn Care',
  'Plumbing & Winterization',
  'General Contracting / Rehab',
  'Roofing',
  'Mold / Hazard Remediation',
  'Other Property Services',
];

const coverageAreas = [
  'Los Angeles, CA',
  'Southern California',
  'Northern California',
  'Nevada',
  'Arizona',
  'Texas',
  'Florida',
  'Nationwide / Multi-State',
];

type Errors = Partial<Record<'company' | 'contact' | 'email' | 'phone' | 'trade' | 'coverage' | 'experience', string>>;

export default function VendorApplicationForm() {
  const [values, setValues] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    trade: '',
    coverage: '',
    experience: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.company.trim()) e.company = 'Company or business name is required.';
    if (!values.contact.trim()) e.contact = 'Contact name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      e.email = 'Please enter a valid email address.';
    if (values.phone.trim().replace(/\D/g, '').length < 7)
      e.phone = 'Please enter a valid phone number.';
    if (!values.trade) e.trade = 'Please select your trade.';
    if (!values.coverage) e.coverage = 'Please select a coverage area.';
    if (values.experience.trim().length < 10)
      e.experience = 'Please describe your experience (at least 10 characters).';
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus('sending');
    const subject = encodeURIComponent(
      `Vendor Application — ${values.trade} (${values.coverage})`
    );
    const body = encodeURIComponent(
      `Company: ${values.company}\nContact: ${values.contact}\nEmail: ${values.email}\nPhone: ${values.phone}\nTrade: ${values.trade}\nCoverage Area: ${values.coverage}\n\nExperience & Capabilities:\n${values.experience}`
    );
    window.location.href = `mailto:info@assetproperty.net?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus('sent');
      setValues({ company: '', contact: '', email: '', phone: '', trade: '', coverage: '', experience: '' });
    }, 400);
  };

  const set =
    (k: keyof typeof values) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((v) => ({ ...v, [k]: ev.target.value }));
      setErrors((er) => ({ ...er, [k]: undefined }));
    };

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-gold/40 bg-surface px-8 py-16 text-center shadow-glow">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <CheckCircle2 className="h-8 w-8 text-gold" />
        </span>
        <h3 className="font-display mt-6 text-xl font-semibold text-white">Application Received</h3>
        <p className="mt-3 max-w-sm text-sm text-body/75">
          Your email client opened with the application prefilled. Our network managers will
          reach out to complete onboarding. You can also send documents directly to{' '}
          <a href="mailto:info@assetproperty.net" className="font-semibold text-gold">
            info@assetproperty.net
          </a>
          .
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 rounded-md border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-line bg-surface p-8 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            COMPANY / BUSINESS NAME *
          </label>
          <input
            id="company"
            type="text"
            value={values.company}
            onChange={set('company')}
            placeholder="ACME Field Services LLC"
            className={inputClasses}
          />
          {errors.company && <p className="mt-2 text-xs text-red-400">{errors.company}</p>}
        </div>
        <div>
          <label htmlFor="contact" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            CONTACT NAME *
          </label>
          <input
            id="contact"
            type="text"
            value={values.contact}
            onChange={set('contact')}
            placeholder="John Alvarez"
            className={inputClasses}
          />
          {errors.contact && <p className="mt-2 text-xs text-red-400">{errors.contact}</p>}
        </div>
        <div>
          <label htmlFor="vemail" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            BUSINESS EMAIL *
          </label>
          <input
            id="vemail"
            type="email"
            value={values.email}
            onChange={set('email')}
            placeholder="john@acmefield.com"
            className={inputClasses}
          />
          {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="vphone" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            PHONE *
          </label>
          <input
            id="vphone"
            type="tel"
            value={values.phone}
            onChange={set('phone')}
            placeholder="(555) 555-0123"
            className={inputClasses}
          />
          {errors.phone && <p className="mt-2 text-xs text-red-400">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="trade" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            TRADE / SERVICE OFFERED *
          </label>
          <select id="trade" value={values.trade} onChange={set('trade')} className={`${inputClasses} appearance-none`}>
            <option value="" disabled>
              Select your trade…
            </option>
            {trades.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.trade && <p className="mt-2 text-xs text-red-400">{errors.trade}</p>}
        </div>
        <div>
          <label htmlFor="coverage" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            COVERAGE AREA *
          </label>
          <select
            id="coverage"
            value={values.coverage}
            onChange={set('coverage')}
            className={`${inputClasses} appearance-none`}
          >
            <option value="" disabled>
              Select your coverage area…
            </option>
            {coverageAreas.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.coverage && <p className="mt-2 text-xs text-red-400">{errors.coverage}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="experience" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            EXPERIENCE & CAPABILITIES *
          </label>
          <textarea
            id="experience"
            rows={5}
            value={values.experience}
            onChange={set('experience')}
            placeholder="Years in business, license & insurance status, capacity per week, systems used for completing orders and uploading photos…"
            className={`${inputClasses} resize-y`}
          />
          {errors.experience && <p className="mt-2 text-xs text-red-400">{errors.experience}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="shadow-glow mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-br from-gold-light via-gold to-gold-dark px-8 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Preparing your application…
          </>
        ) : (
          <>
            Submit Application <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-body/50">
        Submitting opens your email client with the application prefilled for
        info@assetproperty.net. Approved vendors must hold current general liability
        insurance and any trade licenses required in their state.
      </p>
    </form>
  );
}
