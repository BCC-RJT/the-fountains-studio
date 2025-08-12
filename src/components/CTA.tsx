import Section from './Section';

export default function CTA() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-3xl text-center rounded-3xl bg-white/5 p-10 ring-1 ring-white/10 backdrop-blur-sm">
        <h3 className="text-2xl sm:text-3xl font-semibold text-light">
          Ready to see it in person?
        </h3>
        <p className="mt-3 text-light/80">
          Schedule a visit or request a brochure — we’ll help you find the perfect plan.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="mailto:info@thefountainsbixby.com" className="btn btn-primary">
            Email us
          </a>
          <a href="#plans" className="btn btn-ghost">
            View plans
          </a>
        </div>
      </div>
    </Section>
  );
}
