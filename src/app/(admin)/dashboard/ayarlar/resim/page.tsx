import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput } from "@/components/admin/form/FormHelpers"; 

export const metadata: Metadata = {
  title: "Resim Ayarları",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImageSettingsPage() {
  return (
    <form className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        Resim Ayarları
      </h1>

      {/* 2. Ayarlar Kartı */}
      <DashboardCard title="İlan Resim Limitleri ve Filigran">
        {/* İçerik Alanı */}
        <div className="p-5"> 
          {/* Tek Satır Grid (4 Sütun) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end"> 
            
            {/* Filigran */}
             <FormRowInput
              label="Filigran Yazısı"
              name="watermark_text" 
              defaultValue="karamanevbul.com" // Örnek değer
              placeholder="Resimlere eklenecek yazı"
            />

            {/* Normal Kullanıcı Limiti */}
             <FormRowInput
              label="Normal Kullanıcı Resim Limiti"
              name="limit_user_normal" 
              type="number"
              defaultValue="15" // Örnek değer
              placeholder="Adet"
            />

            {/* Normal Emlak Ofisi Limiti */}
            <FormRowInput
              label="Normal Emlak Ofisi Resim Limiti"
              name="limit_office_normal" 
              type="number"
              defaultValue="20" // Örnek değer
              placeholder="Adet"
            />

            {/* Süper Emlak Ofisi Limiti */}
            <FormRowInput
              label="Süper Emlak Ofisi Resim Limiti"
              name="limit_office_super" 
              type="number"
              defaultValue="25" // Örnek değer
              placeholder="Adet"
            />
          </div>
           {/* Filigran ayarları (Pozisyon, Renk vb.) için ek alanlar buraya eklenebilir */}
           <div className="mt-6 border-t pt-6 max-w-sm">
             <p className="text-sm text-gray-600">
               Not: Filigran ayarlarının detayları (pozisyon, boyut, renk, resim filigran vb.) daha sonra eklenecektir. Şimdilik sadece filigran metni ayarlanabilir.
             </p>
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