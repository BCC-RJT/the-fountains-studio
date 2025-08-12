export default function ContactCTA() {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white/95">Be first to know</h2>
      <p className="mt-3 text-white/70">Join the interest list for releases, pricing, and progress.</p>

      {/* Simple mailto for MVP; swap for Formspree later */}
      <a
        href="mailto:info@thefountainsbixby.com?subject=The%20Fountains%20Interest"
        className="mt-6 inline-block rounded-full px-6 py-3 bg-white text-black font-medium hover:opacity-90 transition"
      >
        Request Updates
      </a>
    </div>
  )
}
