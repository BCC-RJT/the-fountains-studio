import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Fountains Studio',
  description: 'Luxury, low-maintenance, single-level living.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F14] text-[#E5E7EB]">
        {children}
      </body>
    </html>
  )
}
