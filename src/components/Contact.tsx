'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const [state, handleSubmit] = useForm(formId || '');
  const [startTs] = useState(() => Date.now());       // simple time-trap
  const hpRef = useRef<HTMLInputElement | null>(null); // honeypot

  // If the env var is missing, show a helpful message in dev
  const missing = !formId;

  useEffect(() => {
    // If honeypot is autofilled by bots, we’ll catch it on submit
  }, []);

  return (
    <section id="contact" className="section bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Get in touch</h2>
        <p className="mt-2 text-gray-600">
          Questions? Call{' '}
          <a href="tel:19182009780" className="text-brand-700 underline">
            918-200-9780
          </a>{' '}
          or send a message below.
        </p>

        {missing ? (
          <div className="mt-6 rounded-md border border-yellow-300 bg-yellow-50 p-4 text-yellow-900">
            <p className="font-medium">Form not configured</p>
            <p className="mt-1 text-sm">
              Set <code>NEXT_PUBLIC_FORMSPREE_FORM_ID</code> in Vercel env vars, then redeploy.
            </p>
          </div>
        ) : state.succeeded ? (
          <div className="mt-6 rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
            Thanks! We’ll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              // basic anti-spam: block if honeypot filled or submitted too fast (<2s)
              const tooFast = Date.now() - startTs < 2000;
              const hpFilled = !!hpRef.current?.value;
              if (hpFilled || tooFast) {
                e.preventDefault();
                return;
              }
              handleSubmit(e);
            }}
            // Formspree still reads action/method; useForm will prevent default and fetch for us
            action={`https://formspree.io/f/${formId}`}
            method="POST"
            className="mt-6 grid gap-4"
          >
            {/* Hidden fields */}
            <input type="hidden" name="_subject" value="New inquiry — The Fountains at Bixby" />
            {/* Honeypot (bots often fill this) */}
            <input
              ref={hpRef}
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid gap-2">
              <label htmlFor="name" className="font-medium">Name</label>
              <input
                id="name"
                name="name"
                required
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-brand-500 focus:outline-none"
                autoComplete="name"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-brand-500 focus:outline-none"
                autoComplete="email"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="grid gap-2">
              <label htmlFor="phone" className="font-medium">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                pattern="^[0-9\-\+\(\)\s\.]{7,}$"
                placeholder="918-200-9780"
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-brand-500 focus:outline-none"
                autoComplete="tel"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="font-medium">Comments / Questions</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-brand-500 focus:outline-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Optional: set reply-to */}
            <input type="hidden" name="_replyto" value="" />

            <div className="flex items-center gap-3">
              <button
                disabled={state.submitting}
                className="rounded-md bg-brand-600 px-5 py-2.5 text-white hover:bg-brand-700 disabled:opacity-60"
              >
                {state.submitting ? 'Sending…' : 'Send message'}
              </button>
              <ValidationError errors={state.errors} />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
