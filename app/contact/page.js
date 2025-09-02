export const metadata = {
  title: "Contact | Colorado Commercial Repairs LLC",
  description: "Request service, get a quote, or ask a question. Serving Grand Junction and Western Colorado."
};

export default function ContactPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact & Service Request</h1>
      <p className="mt-3 max-w-2xl text-gray-600">
        Submit your request and we'll get back to you. For after-hours emergencies, choose the Emergency option.
      </p>

      <form action="/api/request-service" method="post" className="mt-8 grid max-w-2xl gap-4">
        <input className="rounded-lg border p-3" type="text" name="name" placeholder="Your name" required />
        <input className="rounded-lg border p-3" type="email" name="email" placeholder="Email" required />
        <input className="rounded-lg border p-3" type="tel" name="phone" placeholder="Phone" required />
        <input className="rounded-lg border p-3" type="text" name="location" placeholder="City / Site" required />
        <select className="rounded-lg border p-3" name="serviceType" defaultValue="standard">
          <option value="standard">Standard Service</option>
          <option value="after-hours">After Hours / Emergency</option>
          <option value="estimate">Quote / Estimate</option>
          <option value="maintenance">Maintenance Plan</option>
        </select>
        <textarea className="rounded-lg border p-3" name="details" placeholder="Describe the issue or request" rows={5} required />
        <button className="rounded-lg bg-brand-600 px-5 py-3 font-medium text-white hover:bg-brand-700" type="submit">
          Submit Request
        </button>
      </form>

      <div className="mt-12 rounded-2xl border border-dashed border-gray-300 p-6 text-sm text-gray-600">
        <p><strong>Note:</strong> This starter posts to an internal placeholder API route. Wire it to Zoho (or your future CRM) later.</p>
      </div>
    </div>
  );
}
