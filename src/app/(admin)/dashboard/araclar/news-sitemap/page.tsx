'use client'; // Buton etkileşimi için

// import type { Metadata } from "next"; // Client Component
import DashboardCard from "@/components/admin/dashboard/DashboardCard";

/*
export const metadata: Metadata = {
  title: "News Site Haritası Oluştur",
  robots: { index: false, follow: false },
};
*/

export default function CreateNewsSitemapPage() {

  const handleCreateNewsSitemap = () => {
    alert("Google News site haritası (news_sitemap.xml) oluşturma işlemi backend aşamasında eklenecektir.");
    // Backend isteği burada yapılacak
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        News Site Haritası Oluştur
      </h1>

      <DashboardCard title="Google News Site Haritası (news_sitemap.xml)">
        <div className="p-5 space-y-4">
          <p className="text-sm text-gray-600">
            Bu araç, sitenizdeki son 48 saat içinde yayınlanmış veya güncellenmiş haberler için
            Google News standartlarına uygun `news_sitemap.xml` dosyasını oluşturur veya günceller.
            Google News'in yeni içeriklerinizi hızla keşfetmesi için bu önemlidir.
          </p>
           <p className="text-sm text-gray-600">
            Bu site haritası genellikle yeni haber eklendiğinde/güncellendiğinde otomatik olarak
            güncellenir. Manuel tetikleme için aşağıdaki butonu kullanabilirsiniz.
          </p>
           {/* Not: Google News Sitemap'inin özel formatı vardır (publication, publication_date vb.) */}
        </div>
         {/* Kart Footer'ı - Buton */}
        <div className="flex items-center justify-start gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> 
          <button
            type="button" 
            onClick={handleCreateNewsSitemap}
            className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            News Site Haritasını Şimdi Oluştur/Güncelle
          </button>
        </div>
      </DashboardCard>
    </div>
  );
}