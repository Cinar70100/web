'use client'; // Buton etkileşimi için

// import type { Metadata } from "next"; // Client Component
import DashboardCard from "@/components/admin/dashboard/DashboardCard";

/*
export const metadata: Metadata = {
  title: "Site Haritası Oluştur",
  robots: { index: false, follow: false },
};
*/

export default function CreateSitemapPage() {

  const handleCreateSitemap = () => {
    alert("Genel site haritası (sitemap.xml) oluşturma işlemi backend aşamasında eklenecektir.");
    // Backend isteği burada yapılacak
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Site Haritası Oluştur
      </h1>

      <DashboardCard title="Genel Site Haritası (sitemap.xml)">
        <div className="p-5 space-y-4">
          <p className="text-sm text-gray-600">
            Bu araç, ilanlar, kategoriler, sayfalar ve diğer genel içerikler için
            standart `sitemap.xml` dosyasını oluşturur veya günceller.
            Bu işlem, sitenizdeki tüm uygun URL'leri tarayacağı için birkaç dakika sürebilir.
          </p>
          <p className="text-sm text-gray-600">
            Site haritası genellikle otomatik olarak güncellenir, ancak manuel olarak
            oluşturmak isterseniz aşağıdaki butonu kullanabilirsiniz.
          </p>
           {/* Not: Otomatik sitemap oluşturma Next.js'in kendi içinde de yapılabilir.
               Bu manuel buton, zorunlu güncelleme veya test için faydalı olabilir.
           */}
        </div>
         {/* Kart Footer'ı - Buton */}
        <div className="flex items-center justify-start gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> 
          <button
            type="button" // Form submit etmeyecek
            onClick={handleCreateSitemap}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Site Haritasını Şimdi Oluştur/Güncelle
          </button>
        </div>
      </DashboardCard>
    </div>
  );
}