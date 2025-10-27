import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput } from "@/components/admin/form/FormHelpers"; 

export const metadata: Metadata = {
  title: "Sosyal Ağ Ayarları",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SocialNetworkSettingsPage() {
  return (
    <form className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        Sosyal Ağ Ayarları
      </h1>

      {/* 2. API Anahtarları Kartı */}
      <DashboardCard title="Sosyal Medya API Anahtarları">
        {/* İçerik Alanı */}
        <div className="p-5"> 
          {/* Tek Satır Grid (4 Sütun) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end"> 
            
            {/* Facebook API Key */}
             <FormRowInput
              label="Facebook API Key"
              name="facebook_api_key" 
              placeholder="Facebook Uygulama ID'niz" // Placeholder eklendi 
            />

            {/* Facebook Secret */}
             <FormRowInput
              label="Facebook Secret"
              name="facebook_secret" 
              type="password" // Gizli alanlar için password tipi 
              placeholder="Facebook Uygulama Gizli Anahtarı" // Placeholder eklendi
            />

            {/* Twitter API Key */}
            <FormRowInput
              label="Twitter API Key" // Görselde Twitter yazıyor, X olarak güncellenebilir
              name="twitter_api_key" 
              placeholder="Twitter API Anahtarınız" // Placeholder eklendi 
            />

            {/* Twitter Secret */}
            <FormRowInput
              label="Twitter Secret" // Görselde Twitter yazıyor, X olarak güncellenebilir
              name="twitter_secret" 
              type="password" // Gizli alanlar için password tipi 
              placeholder="Twitter API Gizli Anahtarı" // Placeholder eklendi
            />
          </div>
           {/* Yardımcı metin veya linkler eklenebilir */}
           <div className="mt-6 border-t pt-4">
             <p className="text-xs text-gray-500">
               Bu anahtarlar, sosyal medya platformlarıyla entegrasyon (örn: Otomatik Paylaşım, Sosyal Giriş) için gereklidir. İlgili platformların geliştirici panellerinden alabilirsiniz.
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