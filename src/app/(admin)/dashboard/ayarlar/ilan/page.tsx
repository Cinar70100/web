import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput } from "@/components/admin/form/FormHelpers"; 

export const metadata: Metadata = {
  title: "İlan Ayarları",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ListingSettingsPage() {
  return (
    <form className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        İlan Ayarları
      </h1>

      {/* 2. Ayarlar Kartı (Sizin tarife göre) */}
      <DashboardCard title="Emlak"> {/* Başlık olarak "Emlak" kullanıldı */}
        {/* İçerik Alanı (2 Sütunlu Grid) */}
        <div className="p-5"> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end max-w-xl"> {/* max-w-xl ile daraltıldı */}
            
            {/* Maksimum Ücretsiz İlan Sayısı */}
             <FormRowInput
              label="Maksimum Ücretsiz İlan Sayısı"
              name="free_listing_limit" 
              type="number"
              defaultValue="1" // Sizin belirttiğiniz değer
            />

            {/* Ücretli İlan Fiyatı */}
             <FormRowInput
              label="Ücretli İlan Fiyatı"
              name="paid_listing_price" 
              type="number"
              defaultValue="25" // Sizin belirttiğiniz değer
              placeholder="Örn: 25 (Para birimi ayarlardan alınacak)"
            />
          </div>
           {/* Not: Bu yapı, muhtemelen her kategori (Emlak, Vasıta vb.) için 
               tekrarlanacak veya daha karmaşık bir ücretlendirme sayfasına 
               (Ücret Ayarları) taşınacaktır. Şimdilik sizin tarife göre 
               sadece "Emlak" için bu 2 alanı ekliyoruz.
           */}
        </div>

        {/* Kart Footer'ı - Kaydet Butonu */}
        <div className="flex justify-end bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Kaydet
          </button>
        </div>
      </DashboardCard>
    </form>
  );
}