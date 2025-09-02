const items = [
  { title: "Commercial & Industrial", desc: "Combi ovens, fryers, bakery ovens, slicers, walk-ins, refrigeration, waste systems." },
  { title: "HVAC & Refrigeration", desc: "Service and preventative maintenance for rooftop units, splits, and self-contained refer units." },
  { title: "Material Handling", desc: "Forklifts, stackers, and power jacks maintenance & repair." },
  { title: "Residential Services", desc: "Home appliances, installs, repairs, and general maintenance." },
  { title: "Lighting & Electrical", desc: "Lighting services, electrical maintenance/repair, and emergency response." },
  { title: "Tailored Maintenance Plans", desc: "PM programs customized to your industry, schedule, and budget." },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="text-lg font-semibold">{it.title}</div>
          <p className="mt-2 text-gray-600">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}
