export const metadata = {
  title: "Customer Portal | Colorado Commercial Repairs LLC",
  description: "Sign in to view job history, quotes, invoices, and maintenance plans."
};

export default function PortalPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Customer Portal (Coming Soon)</h1>
      <p className="mt-3 max-w-2xl text-gray-600">
        This portal will connect to your CRM/FSM (Zoho or your own platform) for real-time service history, quotes, invoices, and approvals.
      </p>
      <div className="mt-6 rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
        Placeholder area for portal UI & auth.
      </div>
    </div>
  );
}
