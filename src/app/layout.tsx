import type { Metadata } from "next";
// 1. Değişiklik: 'Inter' yerine 'Poppins' import edildi
import { Poppins } from "next/font/google"; 
import Script from "next/script"; // <-- Bu satır zaten vardı
import "./globals.css";

// 2. Değişiklik: 'Poppins' fontu yapılandırıldı
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['400', '700'] // Normal ve kalın ağırlıklar
}); 

// --- AYARLARIN ENTEGRASYONU (Değişiklik yok) ---
const siteSettings = {
  title: "Karaman Satılık & Kiralık Daire, Ev, Arsa İlanları - Karaman Ev Bul",
  titleTemplate: "%s | Karaman Ev Bul",
  description: "Karaman'daki en güncel satılık ve kiralık daire, müstakil ev, arsa ve iş yeri ilanları Karaman Ev Bul'da. Hayalinizdeki gayrimenkulü hemen bulun!",
  analyticsID: "G-JXL9TY0WXH" 
};
// ------------------------------

export const metadata: Metadata = {
  title: {
    default: siteSettings.title, 
    template: siteSettings.titleTemplate, 
  },
  description: siteSettings.description, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="tr">
      {/* 3. Değişiklik: Body'ye yeni fontun sınıfı uygulandı */}
      <body className={poppins.className}> 
        {children}
        
        {/* Google Analytics Script'leri (Değişiklik yok) */}
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