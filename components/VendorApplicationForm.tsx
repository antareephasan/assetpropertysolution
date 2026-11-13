'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Loader2 } from 'lucide-react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

const trades = [
  'Property inspections / field services',
  'Locksmith / securing',
  'Trash-out / hauling',
  'Landscaping / grounds',
  'Plumbing & winterization',
  'General contracting / rehab',
  'Roofing',
  'Mold / hazard remediation',
  'Other property services',
];

const coverageAreas = [
  'Los Angeles County',
  'Southern California',
  'Central / Northern California',
  'Nevada',
  'Arizona',
  'Texas',
  'Florida',
  'Multi-state / nationwide',
];

const crewSizes = ['1–2', '3–5', '6–10', '10+'];

const yearsOptions = ['Less than 2', '2–5', '5–10', '10+'];

const steps = [
  { short: 'Company', title: 'Company details' },
  { short: 'Capabilities', title: 'Trade & coverage' },
  { short: 'Credentials', title: 'Credentials & consent' },
];

type Values = {
  company: string;
  website: string;
  contact: string;
  email: string;
  phone: string;
  trade: string;
  coverage: string;
  crewSize: string;
  capacity: string;
  experience: string;
  years: string;
  license: string;
  insurance: string;
  acknowledge: boolean;
};

type Errors = Partial<
  Record<
    | 'company'
    | 'contact'
    | 'email'
    | 'phone'
    | 'trade'
    | 'coverage'
    | 'crewSize'
    | 'experience'
    | 'years'
    | 'insurance'
    | 'acknowledge',
    string
  >
>;

const emptyValues: Values = {
  company: '',
  website: '',
  contact: '',
  email: '',
  phone: '',
  trade: '',
  coverage: '',
  crewSize: '',
  capacity: '',
  experience: '',
  years: '',
  license: '',
  insurance: '',
  acknowledge: false,
};

export default function VendorApplicationForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const panelRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    panel.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    });

    if (prefersReducedMotion()) return;
    const tween = gsap.fromTo(
      panel,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
    return () => {
      tween.kill();
    };
  }, [step]);

  const validateStep = (current: number): Errors => {
    const next: Errors = {};

    if (current === 0) {
      if (!values.company.trim()) next.company = 'Company or business name is required.';
      if (!values.contact.trim()) next.contact = 'Contact name is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
        next.email = 'Please enter a valid email address.';
      if (values.phone.trim().replace(/\D/g, '').length < 7)
        next.phone = 'Please enter a valid phone number.';
    }

    if (current === 1) {
      if (!values.trade) next.trade = 'Please select your trade.';
      if (!values.coverage) next.coverage = 'Please select a coverage area.';
      if (!values.crewSize) next.crewSize = 'Please select a crew size.';
      if (values.experience.trim().length < 10)
        next.experience = 'Please describe your experience (at least 10 characters).';
    }

    if (current === 2) {
      if (!values.years) next.years = 'Please select your years in business.';
      if (!values.insurance.trim())
        next.insurance = 'Enter your insurance carrier and policy type.';
      if (!values.acknowledge)
        next.acknowledge = 'Please confirm you can meet the documentation standard.';
    }

    return next;
  };

  const handleNext = () => {
    const next = validateStep(step);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const handleBack = () => {
    setErrors({});
    setStep((current) => Math.max(current - 1, 0));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const next = validateStep(2);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus('sending');
    const subject = encodeURIComponent(
      `Vendor application — ${values.company} (${values.coverage})`
    );
    const body = encodeURIComponent(
      [
        `Company: ${values.company}`,
        `Website: ${values.website || '—'}`,
        `Contact: ${values.contact}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        '',
        `Trade: ${values.trade}`,
        `Coverage: ${values.coverage}`,
        `Crew size: ${values.crewSize}`,
        `Capacity: ${values.capacity || '—'} orders / week`,
        `Years in business: ${values.years}`,
        `License: ${values.license || '—'}`,
        `Insurance: ${values.insurance}`,
        '',
        'Experience & capabilities:',
        values.experience,
        '',
        'Documentation standard acknowledged: yes',
      ].join('\n')
    );

    window.location.href = `mailto:info@assetproperty.net?subject=${subject}&body=${body}`;
    window.setTimeout(() => {
      setStatus('sent');
    }, 500);
  };

  const set =
    (key: keyof Values) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const value = event.target.value;
      setValues((current) => ({ ...current, [key]: value }));
      setErrors((current) => ({ ...current, [key]: undefined }));
    };

  const setAcknowledge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((current) => ({ ...current, acknowledge: event.target.checked }));
    setErrors((current) => ({ ...current, acknowledge: undefined }));
  };

  const errorText = (key: keyof Errors) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-2 text-[11px] text-rust">
        {errors[key]}
      </p>
    ) : null;

  if (status === 'sent') {
    return (
      <div role="status" className="border-t border-ink/15 pt-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/40 bg-brass/10">
          <Check className="h-5 w-5 text-brass" strokeWidth={1.5} />
        </span>
        <h3 className="display mt-6 text-[clamp(2rem,3.4vw,2.8rem)] text-ink">
          Application prepared.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          Your email client has opened with the application prefilled for
          info@assetproperty.net. Our network managers review complete applications within
          five business days. If the email did not open, send it directly to{' '}
          <a
            href="mailto:info@assetproperty.net"
            className="text-brass underline underline-offset-4"
          >
            info@assetproperty.net
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setStep(0);
            setValues(emptyValues);
            setErrors({});
          }}
          className="btn btn-outline mt-8"
        >
          Start another application
        </button>
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="scroll-mt-28 border-t border-ink/15 pt-8"
    >
      {/* Progress */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <ol className="flex items-center gap-3 sm:gap-5">
          {steps.map((item, i) => {
            const done = i < step;
            const current = i === step;
            return (
              <li key={item.short} className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className={`flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[10px] transition-colors duration-300 ${
                    done
                      ? 'border-brass bg-brass text-ink'
                      : current
                        ? 'border-ink text-ink'
                        : 'border-ink/20 text-muted'
                  }`}
                >
                  {done ? <Check className="h-3 w-3" strokeWidth={2} /> : `0${i + 1}`}
                </span>
                <span
                  className={`eyebrow ${
                    current ? 'text-ink' : 'text-muted/60'
                  } ${current ? '' : 'hidden sm:inline'}`}
                  aria-current={current ? 'step' : undefined}
                >
                  {item.short}
                </span>
              </li>
            );
          })}
        </ol>
        <p className="eyebrow text-muted">
          Step {step + 1} of {steps.length}
        </p>
      </div>

      <div className="mt-4 h-px w-full bg-ink/10">
        <div
          className="h-px bg-brass transition-[width] duration-500 ease-out-expo"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div ref={panelRef} className="mt-8">
        <p className="eyebrow text-brass">{steps[step].title}</p>

        {step === 0 && (
          <div className="mt-5 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="company" className="field-label">
                Company / business name *
              </label>
              <input
                id="company"
                type="text"
                autoComplete="organization"
                value={values.company}
                onChange={set('company')}
                placeholder="Acme Field Services LLC"
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? 'company-error' : undefined}
                className="field-input"
              />
              {errorText('company')}
            </div>

            <div>
              <label htmlFor="contact" className="field-label">
                Contact name *
              </label>
              <input
                id="contact"
                type="text"
                autoComplete="name"
                value={values.contact}
                onChange={set('contact')}
                placeholder="John Alvarez"
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? 'contact-error' : undefined}
                className="field-input"
              />
              {errorText('contact')}
            </div>

            <div>
              <label htmlFor="phone" className="field-label">
                Phone *
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
              {errorText('phone')}
            </div>

            <div>
              <label htmlFor="vemail" className="field-label">
                Business email *
              </label>
              <input
                id="vemail"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={set('email')}
                placeholder="john@acmefield.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="field-input"
              />
              {errorText('email')}
            </div>

            <div>
              <label htmlFor="website" className="field-label">
                Website
              </label>
              <input
                id="website"
                type="url"
                autoComplete="url"
                value={values.website}
                onChange={set('website')}
                placeholder="https://"
                className="field-input"
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="mt-5 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <div>
              <label htmlFor="trade" className="field-label">
                Trade / service offered *
              </label>
              <div className="relative">
                <select
                  id="trade"
                  value={values.trade}
                  onChange={set('trade')}
                  aria-invalid={Boolean(errors.trade)}
                  aria-describedby={errors.trade ? 'trade-error' : undefined}
                  className="field-input"
                >
                  <option value="" disabled>
                    Select your trade…
                  </option>
                  {trades.map((trade) => (
                    <option key={trade} value={trade}>
                      {trade}
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
              {errorText('trade')}
            </div>

            <div>
              <label htmlFor="coverage" className="field-label">
                Coverage area *
              </label>
              <div className="relative">
                <select
                  id="coverage"
                  value={values.coverage}
                  onChange={set('coverage')}
                  aria-invalid={Boolean(errors.coverage)}
                  aria-describedby={errors.coverage ? 'coverage-error' : undefined}
                  className="field-input"
                >
                  <option value="" disabled>
                    Select your coverage…
                  </option>
                  {coverageAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
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
              {errorText('coverage')}
            </div>

            <div>
              <label htmlFor="crewSize" className="field-label">
                Crew size *
              </label>
              <div className="relative">
                <select
                  id="crewSize"
                  value={values.crewSize}
                  onChange={set('crewSize')}
                  aria-invalid={Boolean(errors.crewSize)}
                  aria-describedby={errors.crewSize ? 'crewSize-error' : undefined}
                  className="field-input"
                >
                  <option value="" disabled>
                    Select crew size…
                  </option>
                  {crewSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
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
              {errorText('crewSize')}
            </div>

            <div>
              <label htmlFor="capacity" className="field-label">
                Weekly capacity
              </label>
              <input
                id="capacity"
                type="text"
                value={values.capacity}
                onChange={set('capacity')}
                placeholder="e.g. 15 orders per week"
                className="field-input"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="experience" className="field-label">
                Experience & capabilities *
              </label>
              <textarea
                id="experience"
                rows={5}
                value={values.experience}
                onChange={set('experience')}
                placeholder="Years in the field, team structure, equipment, current property-preservation platforms, and the largest order you can complete in 48 hours…"
                aria-invalid={Boolean(errors.experience)}
                aria-describedby={errors.experience ? 'experience-error' : undefined}
                className="field-input resize-y"
              />
              {errorText('experience')}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-5 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <div>
              <label htmlFor="years" className="field-label">
                Years in business *
              </label>
              <div className="relative">
                <select
                  id="years"
                  value={values.years}
                  onChange={set('years')}
                  aria-invalid={Boolean(errors.years)}
                  aria-describedby={errors.years ? 'years-error' : undefined}
                  className="field-input"
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {yearsOptions.map((option) => (
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
              {errorText('years')}
            </div>

            <div>
              <label htmlFor="license" className="field-label">
                Trade license number
              </label>
              <input
                id="license"
                type="text"
                value={values.license}
                onChange={set('license')}
                placeholder="If applicable"
                className="field-input"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="insurance" className="field-label">
                Insurance carrier & policy *
              </label>
              <input
                id="insurance"
                type="text"
                value={values.insurance}
                onChange={set('insurance')}
                placeholder="Carrier name, general liability policy number"
                aria-invalid={Boolean(errors.insurance)}
                aria-describedby={errors.insurance ? 'insurance-error' : undefined}
                className="field-input"
              />
              {errorText('insurance')}
            </div>

            <div className="sm:col-span-2">
              <div className="border-t border-ink/15 pt-5">
                <label
                  htmlFor="acknowledge"
                  className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-ink/75"
                >
                  <input
                    id="acknowledge"
                    type="checkbox"
                    checked={values.acknowledge}
                    onChange={setAcknowledge}
                    aria-invalid={Boolean(errors.acknowledge)}
                    aria-describedby={errors.acknowledge ? 'acknowledge-error' : undefined}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#9C7A45]"
                  />
                  <span>
                    I confirm the company holds current general liability insurance and any
                    required trade licenses, and can deliver same-day photo documentation and a
                    line-item invoice for every order.
                  </span>
                </label>
                {errorText('acknowledge')}
              </div>
              <p className="mt-5 text-[11px] leading-relaxed text-muted">
                A certificate of insurance and W-9 are requested during onboarding, not with
                this form.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-9 flex flex-col-reverse gap-3 border-t border-ink/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <button type="button" onClick={handleBack} className="btn btn-outline">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Back
          </button>
        ) : (
          <p className="max-w-sm text-[11px] leading-relaxed text-muted">
            Already an approved vendor? Email your order number to
            info@assetproperty.net.
          </p>
        )}

        {step < steps.length - 1 ? (
          <button type="button" onClick={handleNext} className="btn btn-ink justify-between">
            Continue
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn btn-ink justify-between"
          >
            {status === 'sending' ? (
              <>
                Preparing application
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />
              </>
            ) : (
              <>
                Submit application
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </>
            )}
          </button>
        )}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-muted">
        Submitting opens your email client with the application prefilled for
        info@assetproperty.net. Applications are reviewed within five business days.
      </p>
    </form>
  );
}
