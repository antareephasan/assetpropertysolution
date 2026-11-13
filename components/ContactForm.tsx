'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';

const serviceOptions = [
  'Property inspection',
  'Securing & lock change',
  'Debris & trash-out',
  'Lawn & grounds',
  'Winterization',
  'Repairs & rehab',
  'Code compliance',
  'Portfolio / multiple assets',
  'Not sure yet',
];

const timelineOptions = [
  'Within 24 hours',
  'Within 48 hours',
  'This week',
  'Next two weeks',
  'Planning ahead',
];

type Errors = Partial<
  Record<'name' | 'email' | 'phone' | 'service' | 'message', string>
>;

const emptyValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  address: '',
  service: '',
  timeline: '',
  message: '',
};

export default function ContactForm() {
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (values.phone.trim() && values.phone.trim().replace(/\D/g, '').length < 7)
      next.phone = 'Please enter a valid phone number.';
    if (!values.service) next.service = 'Please select a service.';
    if (values.message.trim().length < 10)
      next.message = 'Please describe the request in at least 10 characters.';
    return next;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus('sending');
    const subject = encodeURIComponent(
      `Work order enquiry — ${values.service} (assetproperty.net)`
    );
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Company: ${values.company || '—'}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone || '—'}`,
        `Property address: ${values.address || '—'}`,
        `Service needed: ${values.service}`,
        `Timeline: ${values.timeline || '—'}`,
        '',
        'Scope / message:',
        values.message,
      ].join('\n')
    );

    window.location.href = `mailto:info@assetproperty.net?subject=${subject}&body=${body}`;
    window.setTimeout(() => {
      setStatus('sent');
      setValues(emptyValues);
    }, 500);
  };

  const set =
    (key: keyof typeof values) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setValues((current) => ({ ...current, [key]: event.target.value }));
      setErrors((current) => ({ ...current, [key]: undefined }));
    };

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="border-t border-ink/15 pt-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/40 bg-brass/10">
          <Check className="h-5 w-5 text-brass" strokeWidth={1.5} />
        </span>
        <h3 className="display mt-6 text-[clamp(2rem,3.4vw,2.8rem)] text-ink">Request prepared.</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          Your email client has opened with the request prefilled for
          info@assetproperty.net. If it did not open, write to us directly at{' '}
          <a href="mailto:info@assetproperty.net" className="text-brass underline underline-offset-4">
            info@assetproperty.net
          </a>
          . We respond to every work order enquiry within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn btn-outline mt-8"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border-t border-ink/15 pt-8">
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Full name *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            placeholder="Jane Smith"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="field-input"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-[11px] text-rust">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            placeholder="jane@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="field-input"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-[11px] text-rust">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="field-label">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set('phone')}
            placeholder="(555) 555-0123"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className="field-input"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-[11px] text-rust">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="field-label">
            Company / institution
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={set('company')}
            placeholder="Lender, servicer, brokerage…"
            className="field-input"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className="field-label">
            Property address
          </label>
          <input
            id="address"
            type="text"
            value={values.address}
            onChange={set('address')}
            placeholder="Street, city, state, ZIP"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor="service" className="field-label">
            Service needed *
          </label>
          <div className="relative">
            <select
              id="service"
              value={values.service}
              onChange={set('service')}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? 'service-error' : undefined}
              className="field-input"
            >
              <option value="" disabled>
                Select a service…
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 flex h-full items-center text-ink/40"
            >
              +
            </span>
          </div>
          {errors.service && (
            <p id="service-error" className="mt-2 text-[11px] text-rust">
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="timeline" className="field-label">
            Timeline
          </label>
          <div className="relative">
            <select
              id="timeline"
              value={values.timeline}
              onChange={set('timeline')}
              className="field-input"
            >
              <option value="" disabled>
                Select a timeline…
              </option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 flex h-full items-center text-ink/40"
            >
              +
            </span>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Scope / message *
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={set('message')}
            placeholder="Property condition, access details, client guidelines, deadline…"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className="field-input resize-y"
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-[11px] text-rust">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-ink mt-9 w-full justify-between sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            Preparing request
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />
          </>
        ) : (
          <>
            Send request
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </>
        )}
      </button>

      <p className="mt-4 max-w-md text-[11px] leading-relaxed text-muted">
        Submitting opens your email client with the details prefilled for
        info@assetproperty.net. Prefer to write directly? Email us any time.
      </p>
    </form>
  );
}
