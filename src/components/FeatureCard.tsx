type Props = {
  title: string;
  body: string;
  icon?: React.ReactNode;
};

export default function FeatureCard({ title, body, icon }: Props) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-white/7.5">
      <div className="mb-3 text-brand">{icon}</div>
      <h3 className="text-lg font-semibold text-light">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-light/80">{body}</p>
    </div>
  );
}
