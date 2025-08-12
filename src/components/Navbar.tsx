'use client';

import { useState } from 'react';
import Link from 'next/link';

const nav = [
  { href: '#home', label: 'Home' },
  { href: '#plans', label: 'Plans' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-3 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="#home" className="font-semibold tracking-tight text-light">
              The Fountains <span className="text-brand">Studio</span>
            </Link>

            <button
              aria-label="Toggle menu"
              className="inline-flex items-center rounded-lg p-2 text-light/80 hover:text-light focus:outline-none md:hidden"
              onClick={() => setOpen((s) => !s)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <ul className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-light/80 hover:text-light transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="btn btn-primary btn-sm"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>

          {/* mobile */}
          {open && (
            <ul className="md:hidden grid gap-2 px-4 pb-4">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="block rounded-lg px-3 py-2 text-light/80 hover:bg-white/5 hover:text-light"
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
