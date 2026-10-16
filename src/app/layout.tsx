import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4EFE6",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "HopeCoin — Where memes meet meaning",
    template: "%s — HopeCoin",
  },
  description: site.description,
  openGraph: {
    title: "HopeCoin — Where memes meet meaning",
    description: site.description,
    images: ["/images/hopey-horizon.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: site.handles.x,
    creator: site.handles.x,
    title: "HopeCoin — Where memes meet meaning",
    description: site.description,
    images: ["/images/hopey-horizon.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              description: site.description,
              sameAs: [site.socials.x, site.socials.telegram, site.socials.instagram],
            }),
          }}
        />
        <div className="grain" aria-hidden="true" />
        <Nav />
        <div id="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
