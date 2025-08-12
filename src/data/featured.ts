export type Featured = {
  id: string
  title: string
  blurb: string
  badges?: string[]
  image?: string
}

export const featuredHomes: Featured[] = [
  {
    id: 'f1',
    title: 'Single-Level Luxury',
    blurb: 'Spacious living with tall doors & ceilings, high-end molding, and luxury appliances.',
    badges: ['HOA-maintained', 'Single-level'],
    image: '/gallery_images/feature1.jpg'
  },
  {
    id: 'f2',
    title: 'Gourmet Kitchens',
    blurb: 'Entertainer’s kitchens with premium cabinetry, generous islands, and modern lighting.',
    badges: ['Quartz/Stone', 'Designer selections'],
    image: '/gallery_images/feature2.jpg'
  },
  {
    id: 'f3',
    title: 'Spa-like Bathrooms',
    blurb: 'Primary suites with luxury baths and large walk-in closets designed by our in-house team.',
    badges: ['Walk-in shower', 'Curated finishes'],
    image: '/gallery_images/feature3.jpg'
  },
]
