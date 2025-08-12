'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV = [
  { label: 'Home', href: '#top', external: false },
  { label: 'Amenities', href: '#amenities', external: false }, // your Features section should have id="amenities"
  { label: 'Gallery', href: '#gallery', external: false },
  {
    label: 'Availability',
    href: 'https://myhome.anewgo.com/client/bccoklahoma/community/The%20Fountains/siteplan',
    external: true,
  },
  { label: 'Contact', href: '#contact', external: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#top" className="text-lg font-semibold tracking-tight text-brand-900">
          The Fountains Studio
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV.map((item) =>
            item.external ? (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-900/80 transition hover:text-brand-900"
                >
                  {item.label}
                </a>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-brand-900/80 transition hover:text-brand-900"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center rounded-md border border-black/10 px-3 py-2 text-sm text-brand-900 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          Menu
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-3 space-y-2">
            {NAV.map((item) =>
              item.external ? (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-brand-900/80 hover:bg-black/[0.03] hover:text-brand-900"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-brand-900/80 hover:bg-black/[0.03] hover:text-brand-900"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
