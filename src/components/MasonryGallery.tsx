'use client';

import Image from 'next/image';
import { galleryImages } from '@/data/gallery';

export default function MasonryGallery() {
  return (
    <section id="gallery" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-900 md:text-4xl">
            A glimpse inside
          </h2>
          <p className="mt-3 text-brand-700/80">
            Materials and spaces designed to feel calm, bright, and easy.
          </p>
        </div>

        {/* Masonry style via CSS columns */}
        <div className="mt-8 [column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((src, i) => (
            <div key={src + i} className="mb-4 break-inside-avoid">
              <div className="group relative overflow-hidden rounded-lg ring-1 ring-black/10">
                <Image
                  src={src}
                  alt="Gallery image"
                  width={1200}
                  height={1600}
                  className="h-auto w-full scale-100 transform object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i < 3}
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
