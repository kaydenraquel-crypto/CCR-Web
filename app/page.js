import { CTAButtons } from "@/components/CTAButtons";
import { Section } from "@/components/Section";
import { FeatureGrid } from "@/components/FeatureGrid";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Colorado Commercial Repairs LLC",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Grand Junction",
      "addressRegion": "CO",
      "postalCode": "81503",
      "addressCountry": "US"
    },
    "areaServed": "Western Colorado",
    "url": "https://example.com",
    "description": "Facility services for commercial, industrial, and residential equipment across Western Colorado.",
    "foundingDate": "2021",
    "sameAs": []
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight">
              Facility Services for the Next Era
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Commercial, industrial, and residential equipment service—optimized for uptime and delivered with
              precision across Western Colorado.
            </p>
            <div className="mt-8">
              <CTAButtons />
            </div>
          </div>
        </div>
      </section>

      <Section title="What We Do" subtitle="From kitchens to cold storage, HVAC to forklifts, we keep your operation moving.">
        <FeatureGrid />
      </Section>

      <Section title="Maintenance Plans" subtitle="Tailored PM programs for any industry. Flexible scheduling, clear reporting, predictable costs.">
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Kitchen equipment PM (combi ovens, fryers, ovens, slicers)</li>
            <li>HVAC & Refrigeration PM (walk-ins, self-contained units)</li>
            <li>Material handling PM (forklifts, stackers, power jacks)</li>
            <li>Lighting & Electrical safety checks</li>
            <li>Custom checklists and reporting through CRM/FSM</li>
          </ul>
        </div>
      </Section>

      <Section title="Photos & Reviews (Coming Soon)" subtitle="We’re adding a gallery and verified customer reviews.">
        <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
          Placeholder area for your images and testimonials.
        </div>
      </Section>
    </>
  );
}
