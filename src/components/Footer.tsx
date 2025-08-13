export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-light/70">
          © {new Date().getFullYear()} Sooner Development Group - Fountains LLC — All rights reserved.
        </p>
        <div className="text-sm text-light/70">
          // Built with Next.js & Tailwind
        </div>
      </div>
    </footer>
  );
}
