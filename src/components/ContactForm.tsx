'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';

export default function ContactForm() {
  // Hooked to your Formspree form ID
  const [state, handleSubmit] = useForm('mqalnval');

  // Smoothly scroll the section into view after a submit attempt
  useEffect(() => {
    if (state.succeeded || state.errors) {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [state.succeeded, state.errors]);

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white/80 p-10 ring-1 ring-black/10 backdrop-blur-sm">
        <h2 className="text-center text-3xl font-semibold text-brand-900 md:text-4xl">
          Get in touch
        </h2>
        <p className="mt-3 text-center text-brand-700/80">
          Ask a question or request a visit — we’ll reply promptly.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          {/* Subject for emails shown in your inbox */}
          <input type="hidden" name="_subject" value="Fountains website inquiry" />
          {/* Optional redirect after success:
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-brand-900">Name *</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-brand-900 shadow-sm outline-none focus:ring-2 focus:ring-brand-400"
                placeholder="Jane Smith"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-900">Email *</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-brand-900 shadow-sm outline-none focus:ring-2 focus:ring-brand-400"
                placeholder="jane@example.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-900">Phone *</label>
            <input
              name="phone"
              type="tel"
              required
              className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-brand-900 shadow-sm outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="918-200-9780"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-900">Comments / Questions *</label>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-brand-900 shadow-sm outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="Tell us what you’re looking for…"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Optional: invisible honeypot to deter bots (keep it empty) */}
          <div className="hidden">
            <label>
              Don’t fill this out if you’re human:
              <input name="_gotcha" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          {/* Business contact clarity */}
          <p className="mt-1 text-xs text-brand-700/70">
            Or email us directly at{' '}
            <a href="mailto:web@tnhok.com" className="underline">
              web@tnhok.com
            </a>{' '}
            or call{' '}
            <a href="tel:+19182009780" className="underline">
              918-200-9780
            </a>
            .
          </p>

          <div className="mt-2 flex items-center justify-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:opacity-60"
            >
              {state.submitting ? 'Sending…' : 'Send message'}
            </button>
          </div>

          {state.succeeded && (
            <p className="text-center text-sm text-emerald-700">
              Thanks! Your message has been sent.
            </p>
          )}

          {/* Show a generic error only when Formspree reports one */}
          {!state.succeeded && state.errors && (
            <p className="text-center text-sm text-red-600">
              Something went wrong. Please check your entries and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
