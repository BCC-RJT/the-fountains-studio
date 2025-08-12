import { plans } from '@/data/plans'

export default function Plans() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map(p => (
        <div key={p.id} className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-lg font-semibold text-white/95">{p.name}</h3>
          <p className="mt-2 text-white/70">{p.blurb}</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-white/80">
            <div><span className="block text-white/50 text-xs">SQFT</span>{p.sqft}</div>
            <div><span className="block text-white/50 text-xs">BEDS</span>{p.beds}</div>
            <div><span className="block text-white/50 text-xs">BATHS</span>{p.baths}</div>
          </div>
          <div className="mt-5 text-xs text-white/60">All homes 2,800–3,200 sqft • Single-level</div>
        </div>
      ))}
    </div>
  )
}
