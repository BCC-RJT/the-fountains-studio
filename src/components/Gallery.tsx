import Image from 'next/image'
import { galleryImages } from '@/data/gallery'

export default function MasonryGallery() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
      {galleryImages.map((src,i)=>(
        <div key={i} className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border border-white/10">
          <div className="relative w-full h-64">
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        </div>
      ))}
    </div>
  )
}
