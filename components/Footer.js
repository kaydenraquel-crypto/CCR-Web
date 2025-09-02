export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container py-10 text-sm text-gray-600">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">Colorado Commercial Repairs LLC</div>
            <p className="mt-2">Grand Junction, CO 81503 • Serving Western Colorado</p>
            <p className="mt-1">Founded 2021 • 36+ years combined experience</p>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-2 space-y-1">
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/portal" className="hover:underline">Customer Portal</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Future Integrations</div>
            <p className="mt-2">Custom AI assistant and CRM/Field Service integration (Zoho & your own platform).</p>
          </div>
        </div>
        <p className="mt-8 text-xs">© {new Date().getFullYear()} Colorado Commercial Repairs LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
