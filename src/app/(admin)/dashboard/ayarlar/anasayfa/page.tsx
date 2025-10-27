import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
// GÜNCELLEME: Sadece FormRowInput gerekli
import { FormRowInput } from "@/components/admin/form/FormHelpers"; 
// GÜNCELLEME: ToggleSwitch kaldırıldı

export const metadata: Metadata = {
  title: "Ana Sayfa Ayarları",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomePageSettingsPage() {
  return (
    <form className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        Ana Sayfa Ayarları
      </h1>

      {/* 2. Ayarlar Kartı (GÜNCELLEME: Tek kart, 2 satırlık grid) */}
      <DashboardCard title="Anasayfa Bölüm Limitleri">
        {/* İçerik Alanı */}
        <div className="p-5 space-y-6"> {/* Satırlar arası dikey boşluk */}
          
          {/* Satır 1 (4 Sütun) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FormRowInput
              label="Ana Sayfa Vitrini Limiti"
              name="vitrin_limit"
              type="number"
              defaultValue="10" 
            />
            <FormRowInput
              label="Kategori Vitrini Limiti"
              name="kategori_vitrin_limit"
              type="number"
              defaultValue="8" // Örnek değer
            />
             <FormRowInput
              label="Günün Fırsatları İlan Limiti"
              name="firsat_ilan_limit"
              type="number"
              defaultValue="5" // Örnek değer
            />
             <FormRowInput
              label="Son Eklenen İlanlar Limiti"
              name="son_eklenen_limit"
              type="number"
              defaultValue="8" 
            />
          </div>

          {/* Satır 2 (3 Sütun) */}
          {/* Tutarlılık için 4 sütunlu grid kullanalım, sonuncusu boş kalsın */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t pt-6">
             <FormRowInput
              label="Emlak Ofisi Limiti"
              name="ofis_limit"
              type="number"
              defaultValue="6" 
            />
             <FormRowInput
              label="Proje Limiti"
              name="proje_limit"
              type="number"
              defaultValue="4" 
            />
             <FormRowInput
              label="Haber Limiti"
              name="haber_limit"
              type="number"
              defaultValue="5" 
            />
             {/* 4. sütun boş */}
          </div>
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