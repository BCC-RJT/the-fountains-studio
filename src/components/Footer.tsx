export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="container py-10 text-sm text-zinc-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} The Fountains, Bixby OK</p>
          <p>
            <a className="hover:underline" href="https://maps.google.com/?q=Bixby+OK">
              121st & Mingo • Bixby, Oklahoma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
