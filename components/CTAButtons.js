import Link from "next/link";

export function CTAButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href="/contact?type=service"
        className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-brand-700"
      >
        Request Service
      </Link>
      <Link
        href="/contact?type=after-hours"
        className="inline-flex items-center justify-center rounded-xl border border-brand-600 px-5 py-3 font-medium text-brand-700 hover:bg-brand-50"
      >
        After Hours / Emergency
      </Link>
    </div>
  );
}
