'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { galleryImages as FALLBACK } from '@/data/gallery';

type Props = {
  intervalMs?: number; // auto-advance interval
  groupSize?: number;  // how many images shown at once (desktop)
};

const BLUR =
  // subtle neutral SVG blur placeholder (tiny, inline)
  'data:image/svg+xml;base64,' +
  btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="#e5e7eb" offset="0"/>
          <stop stop-color="#d1d5db" offset="1"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>`
  );

export default function CarouselGallery({ intervalMs = 3500, groupSize = 3 }: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  // track loaded state per image to fade in smoothly
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  // Fetch from API (if present), else fallback to static list
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch('/api/gallery', { cache: 'no-store' });
        if (!cancelled && res.ok) {
          const data = await res.json();
          const arr: string[] =
            Array.isArray(data?.images) && data.images.length ? data.images : FALLBACK;
          const shuffled = shuffle(arr);
          setImages(shuffled);
          return;
        }
      } catch (_) {}
      if (!cancelled) setImages(shuffle(FALLBACK));
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // Responsive slides per view: 1 (sm), 2 (md), 3 (lg+)
  const slidesPerView = useResponsiveSlides(groupSize);

  // Auto-advance
  useEffect(() => {
    if (!images.length) return;
    stopTimer();
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs) as unknown as number;
    return stopTimer;
  }, [images, intervalMs]);

  // Current group derived from index (wrap around)
  const currentGroup = useMemo(() => {
    if (!images.length) return [];
    const out: string[] = [];
    for (let i = 0; i < slidesPerView; i++) {
      out.push(images[(index + i) % images.length]);
    }
    return out;
  }, [images, index, slidesPerView]);

  if (!images.length) {
    return (
      <section id="gallery" className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-brand-900 md:text-4xl text-center">Gallery</h2>
          <p className="mt-3 text-center text-brand-700/80">Loading photos…</p>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-semibold text-brand-900 md:text-4xl">Gallery</h2>
          <p className="mt-3 text-brand-700/80">A rotating look at the finishes & spaces.</p>
        </div>

        {/* Single row, 1–3 across depending on screen */}
        <div
          className="group grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={stopTimer}
          onMouseLeave={() => {
            if (!timerRef.current && images.length) {
              timerRef.current = window.setInterval(() => {
                setIndex((i) => (i + 1) % images.length);
              }, intervalMs) as unknown as number;
            }
          }}
        >
          {currentGroup.map((src, i) => {
            const isLoaded = loaded[src];

            return (
              <figure
                key={src + i}
                className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-black/10"
              >
                {/* subtle skeleton while the image loads */}
                {!isLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-gray-200" aria-hidden="true" />
                )}

                <Image
                  src={src}
                  alt="Gallery image"
                  fill
                  className={[
                    'object-cover transition-transform duration-500 group-hover:scale-[1.02]',
                    'opacity-0',
                    isLoaded ? 'opacity-100 transition-opacity duration-500' : '',
                  ].join(' ')}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  // lazy loading + blur placeholder
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  // mark as loaded to fade-in and hide skeleton
                  onLoadingComplete={() =>
                    setLoaded((prev) => (prev[src] ? prev : { ...prev, [src]: true }))
                  }
                  // avoid blocking LCP; all carousel images are non-critical
                  priority={false}
                  fetchPriority="low"
                />
              </figure>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-sm text-brand-900 hover:bg-white"
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
            aria-label="Previous"
          >
            ‹ Prev
          </button>
          <button
            className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-sm text-brand-900 hover:bg-white"
            onClick={() => setIndex((i) => (i + 1) % images.length)}
            aria-label="Next"
          >
            Next ›
          </button>
        </div>
      </div>
    </section>
  );

  function stopTimer() {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }
}

// ——— helpers ———
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function useResponsiveSlides(desktop = 3) {
  const [n, setN] = useState(3);
  useEffect(() => {
    const mq1 = window.matchMedia('(max-width: 640px)');  // sm
    const mq2 = window.matchMedia('(max-width: 1024px)'); // md
    const apply = () => setN(mq1.matches ? 1 : mq2.matches ? 2 : desktop);
    apply();
    mq1.addEventListener('change', apply);
    mq2.addEventListener('change', apply);
    return () => {
      mq1.removeEventListener('change', apply);
      mq2.removeEventListener('change', apply);
    };
  }, [desktop]);
  return n;
}
