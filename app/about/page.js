export const metadata = {
  title: "About Us | Colorado Commercial Repairs LLC",
  description: "Learn about our experience, service area, and commitment to reliable facility services across Western Colorado."
};

export default function AboutPage() {
  return (
    <div className="container py-16 max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight">About Colorado Commercial Repairs LLC</h1>
      <p className="mt-4 text-gray-700">
        Founded in 2021 and backed by over 36 years of combined experience, Colorado Commercial Repairs LLC provides expert facility services across <strong>Grand Junction and Western Colorado</strong>.
      </p>
      <p className="mt-4 text-gray-700">
        We specialize in maintaining, repairing, and installing a wide range of equipment, including:
      </p>
      <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
        <li>Commercial &amp; industrial kitchen equipment (combi ovens, fryers, bakery ovens, bread/meat/cheese slicers).</li>
        <li>Refrigeration systems (walk-ins, self-contained units).</li>
        <li>HVAC systems for businesses and homes.</li>
        <li>Material handling equipment (forklifts, stackers, power jacks).</li>
        <li>Waste management systems (trash compactors, cardboard balers).</li>
        <li>Residential appliances and home maintenance services.</li>
        <li>Lighting and electrical repair/maintenance.</li>
      </ul>
      <p className="mt-4 text-gray-700">
        Our mission is simple: <strong>reliable service that keeps your business and home running smoothly.</strong> Whether it’s preventative maintenance, on-demand field service, or 24/7 emergency response, we tailor solutions to fit your industry and your schedule.
      </p>
      <p className="mt-4 text-gray-700">
        We’re proud to be based in <strong>Grand Junction, CO (81503)</strong> and to serve businesses and families across Western Colorado with integrity, professionalism, and innovation.
      </p>

      <div className="mt-10 rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
        Placeholder: add team photos, certifications, and customer reviews.
      </div>
    </div>
  );
}
