export const metadata = {
  title: "Services | Colorado Commercial Repairs LLC",
  description: "Commercial, industrial, and residential services: HVAC, refrigeration, kitchen equipment, forklifts, lighting & electrical, and more."
};

const services = [
  {
    title: "Commercial & Industrial Kitchen",
    bullets: [
      "Combi ovens, fryers, bakery ovens",
      "Bread/meat/cheese slicers",
      "Installs, repairs, field service"
    ]
  },
  {
    title: "Refrigeration",
    bullets: [
      "Walk-ins, self-contained units",
      "Ice machines, reach-ins",
      "Leak checks, controls, gaskets"
    ]
  },
  {
    title: "HVAC",
    bullets: [
      "RTUs, mini-splits, furnaces, AC",
      "Filter programs, belts, coils",
      "Thermostats & controls"
    ]
  },
  {
    title: "Material Handling",
    bullets: [
      "Forklifts, stackers, power jacks",
      "Battery maintenance & safety",
      "On-site repair & inspections"
    ]
  },
  {
    title: "Waste & Compaction",
    bullets: [
      "Trash compactors, cardboard balers",
      "Hydraulic systems",
      "Safety interlocks"
    ]
  },
  {
    title: "Residential",
    bullets: [
      "Home appliances & installs",
      "General maintenance",
      "Lighting & electrical fixes"
    ]
  },
  {
    title: "Lighting & Electrical",
    bullets: [
      "Fixture upgrades & retrofits",
      "Panel & circuit diagnostics",
      "Emergency lighting checks"
    ]
  },
  {
    title: "Tailored Maintenance Plans",
    bullets: [
      "Custom PM schedules by site",
      "Checklist-based reporting",
      "CRM/FSM integrated workflow"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
      <p className="mt-3 max-w-2xl text-gray-600">
        We cover the equipment that keeps businesses and homes running. Choose on-demand repair or a proactive maintenance plan.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-lg font-semibold">{s.title}</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
              {s.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
