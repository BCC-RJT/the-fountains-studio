import { PropsWithChildren } from "react";

export default function Section({
  id,
  className,
  children,
}: PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={`section ${className ?? ""}`}>
      <div className="container">{children}</div>
    </section>
  );
}

