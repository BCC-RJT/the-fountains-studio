export default function CTA() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 px-8 py-12 text-white shadow">
      <h3 className="text-2xl md:text-3xl font-semibold">
        Ready to see The Fountains?
      </h3>
      <p className="mt-2 text-brand-100">
        Contact our team to schedule a private tour or ask questions.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="mailto:info@thefountainsbixby.com" className="btn-primary">Email Us</a>
        <a href="tel:+1918XXXXXXX" className="btn-outline text-white border-white/70 hover:bg-white/10">Call</a>
      </div>
    </div>
  );
}
