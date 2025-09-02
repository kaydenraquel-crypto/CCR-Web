import clsx from "clsx";

export function Section({ title, subtitle, children, className }) {
  return (
    <section className={clsx("py-16", className)}>
      <div className="container">
        {title && <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>}
        {subtitle && <p className="mt-2 max-w-2xl text-gray-600">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
