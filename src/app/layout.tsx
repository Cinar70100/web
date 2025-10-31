import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// --- Site Ayarları ---
const siteSettings = {
  title: "Karaman Satılık & Kiralık Daire, Ev, Arsa İlanları - Karaman Ev Bul",
  titleTemplate: "%s | Karaman Ev Bul",
  description:
    "Karaman'daki en güncel satılık ve kiralık daire, müstakil ev, arsa ve iş yeri ilanları Karaman Ev Bul'da. Hayalinizdeki gayrimenkulü hemen bulun!",
  analyticsID: "G-JXL9TY0WXH",
};

// --- Google Font ---
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// --- Metadata ---
export const metadata: Metadata = {
  title: {
    default: siteSettings.title,
    template: siteSettings.titleTemplate,
  },
  description: siteSettings.description,
};

// --- Root Layout ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={poppins.className}>
        {children}

        {/* Google Analytics */}
        {siteSettings.analyticsID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${siteSettings.analyticsID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteSettings.analyticsID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
