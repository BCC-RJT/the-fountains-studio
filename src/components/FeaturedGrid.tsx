import Image from 'next/image'
import { featuredHomes } from '@/data/featured'

export default function FeaturedGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {featuredHomes.map(card => (
        <article key={card.id} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
          {card.image && (
            <div className="relative h-48">
              <Image src={card.image} alt="" fill className="object-cover" />
            </div>
          )}
          <div className="p-5">
            <h3 className="text-lg font-semibold text-white/95">{card.title}</h3>
            <p className="mt-2 text-sm text-white/70">{card.blurb}</p>
            {card.badges?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {card.badges.map((b,i)=>(
                  <span key={i} className="text-xs rounded-full bg-white/10 px-3 py-1 text-white/80 border border-white/10">
                    {b}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}
