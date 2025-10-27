'use client'; // Buton etkileşimi için

// import type { Metadata } from "next"; // Client Component
import DashboardCard from "@/components/admin/dashboard/DashboardCard";

/*
export const metadata: Metadata = {
  title: "Önbellek Temizle",
  robots: { index: false, follow: false },
};
*/

export default function ClearCachePage() {

  const handleClearCache = () => {
    alert("Uygulama önbelleğini (veri, sayfa cache vb.) temizleme işlemi backend aşamasında eklenecektir.");
    // Backend isteği burada yapılacak (Next.js'in revalidateTag, revalidatePath gibi fonksiyonları veya özel cache mekanizması)
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Önbellek Temizle
      </h1>

      <DashboardCard title="Uygulama Önbelleği">
        <div className="p-5 space-y-4">
          <p className="text-sm text-gray-600">
            Bu araç, Next.js uygulamasının sunucu tarafı ve/veya veri önbelleğini temizler.
            Ayarlarda (örn: Site Ayarları, Renk Ayarları) yaptığınız bazı değişikliklerin
            sitenin ön yüzüne hemen yansıması veya performans sorunlarını gidermek için
            bu işlemi kullanabilirsiniz.
          </p>
           <p className="text-sm text-red-600 font-medium">
            Dikkat: Önbelleği temizlemek, sitenizin bir sonraki yüklemede geçici olarak yavaşlamasına
            neden olabilir, çünkü veriler yeniden oluşturulacaktır.
          </p>
        </div>
         {/* Kart Footer'ı - Buton */}
        <div className="flex items-center justify-start gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> 
          <button
            type="button" 
            onClick={handleClearCache}
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Önbelleği Şimdi Temizle
          </button>
        </div>
      </DashboardCard>
    </div>
  );
}