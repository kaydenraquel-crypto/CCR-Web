import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Colorado Commercial Repairs <span className="text-brand-600">LLC</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/services" className="hover:text-brand-700">Services</Link>
          <Link href="/about" className="hover:text-brand-700">About</Link>
          <Link href="/contact" className="hover:text-brand-700">Contact</Link>
          <Link href="/portal" className="rounded-lg bg-brand-600 px-3 py-1.5 font-medium text-white hover:bg-brand-700">
            Customer Portal
          </Link>
        </nav>
      </div>
    </header>
  );
}
