export type Plan = {
  id: string
  name: string
  sqft: string
  beds: number
  baths: number
  blurb: string
}

export const plans: Plan[] = [
  { id: 'p1', name: 'Oakridge', sqft: '≈ 2,800–3,000', beds: 3, baths: 3,
    blurb: 'Open great room, generous windows, and private outdoor space.' },
  { id: 'p2', name: 'Brookhaven', sqft: '≈ 3,000–3,200', beds: 3, baths: 3.5,
    blurb: 'Chef’s kitchen, dedicated study, and luxurious primary suite.' },
  { id: 'p3', name: 'Crestwood', sqft: '≈ 2,900–3,100', beds: 3, baths: 3,
    blurb: 'Grand ceilings, statement trim, and seamless indoor-outdoor flow.' },
]
