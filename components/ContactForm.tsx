'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

const inputClasses =
  'w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-body/40 outline-none transition-colors focus:border-gold focus:shadow-glow';

const serviceNeeded = [
  'Property Inspection',
  'Securing & Lock Change',
  'Debris & Trash-Out',
  'Lawn & Yard Care',
  'Winterization',
  'Repairs & Rehab',
  'Code Compliance',
  'Other / Not Sure',
];

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'service' | 'message', string>>;

export default function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      e.email = 'Please enter a valid email address.';
    if (values.phone.trim() && values.phone.trim().replace(/\D/g, '').length < 7)
      e.phone = 'Please enter a valid phone number.';
    if (!values.service) e.service = 'Please select a service.';
    if (values.message.trim().length < 10)
      e.message = 'Please describe your request (at least 10 characters).';
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus('sending');
    // Static export: no backend handler. Hand off to the client's email client with the
    // submitted details prefilled, so the contact flow still reaches info@assetproperty.net.
    const subject = encodeURIComponent(
      `Quote Request — ${values.service} (Site: assetproperty.net)`
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService Needed: ${values.service}\n\nMessage:\n${values.message}`
    );
    window.location.href = `mailto:info@assetproperty.net?subject=${subject}&body=${body}`;
    // Reset after a short pause so the success state is visible on return.
    setTimeout(() => {
      setStatus('sent');
      setValues({ name: '', email: '', phone: '', service: '', message: '' });
    }, 400);
  };

  const set = (k: keyof typeof values) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: ev.target.value }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-gold/40 bg-surface px-8 py-16 text-center shadow-glow">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <CheckCircle2 className="h-8 w-8 text-gold" />
        </span>
        <h3 className="font-display mt-6 text-xl font-semibold text-white">Request Received</h3>
        <p className="mt-3 max-w-sm text-sm text-body/75">
          Your email client has opened with your request prefilled. Prefer to send directly?
          Write to us at{' '}
          <a href="mailto:info@assetproperty.net" className="font-semibold text-gold">
            info@assetproperty.net
          </a>{' '}
          — we respond to all work order inquiries promptly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 rounded-md border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
        >
          Send Another Request
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
          <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            FULL NAME *
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={set('name')}
            placeholder="Jane Smith"
            className={inputClasses}
          />
          {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            EMAIL *
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={set('email')}
            placeholder="jane@company.com"
            className={inputClasses}
          />
          {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            PHONE
          </label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={set('phone')}
            placeholder="(555) 555-0123"
            className={inputClasses}
          />
          {errors.phone && <p className="mt-2 text-xs text-red-400">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            SERVICE NEEDED *
          </label>
          <select
            id="service"
            value={values.service}
            onChange={set('service')}
            className={`${inputClasses} appearance-none`}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {serviceNeeded.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-2 text-xs text-red-400">{errors.service}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-xs font-semibold tracking-wider text-white">
            MESSAGE *
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={set('message')}
            placeholder="Property address, expected timeline, scope details…"
            className={`${inputClasses} resize-y`}
          />
          {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="shadow-glow mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-br from-gold-light via-gold to-gold-dark px-8 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Preparing your request…
          </>
        ) : (
          <>
            Send Request <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-body/50">
        Submitting opens your email client with the request prefilled for
        info@assetproperty.net. For direct dispatch, email or call us anytime.
      </p>
    </form>
  );
}
