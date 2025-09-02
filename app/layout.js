import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Colorado Commercial Repairs LLC",
  description: "Facility services for Western Colorado: commercial, industrial, and residential equipment maintenance, repair, and installs.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Colorado Commercial Repairs LLC",
    description: "Facility services for Western Colorado.",
    url: "https://example.com",
    siteName: "Colorado Commercial Repairs LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
