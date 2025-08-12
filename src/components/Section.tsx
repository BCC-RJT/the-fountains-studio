import { ReactNode } from 'react';

export default function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 sm:py-28 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
