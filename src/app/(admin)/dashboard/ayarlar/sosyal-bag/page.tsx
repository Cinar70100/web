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

      {/* 2. Ayarlar Kartı */}
      <DashboardCard title="Sosyal Medya Profil Linkleri">
        {/* İçerik Alanı */}
        <div className="p-5"> 
          {/* Tek Satır Grid (4 Sütun) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end"> 
            
            {/* Facebook */}
             <FormRowInput
              label="Facebook"
              name="social_facebook" 
              type="url"
              defaultValue="https://www.facebook.com/" // Örnek değer
              placeholder="Facebook profil/sayfa URL'niz"
            />

            {/* X (Twitter) */}
             <FormRowInput
              label="X (Twitter)"
              name="social_twitter" 
              type="url"
              defaultValue="https://www.x.com/" // Örnek değer
              placeholder="X profil URL'niz"
            />

            {/* LinkedIn */}
            <FormRowInput
              label="LinkedIn"
              name="social_linkedin" 
              type="url"
              defaultValue="https://www.linkedin.com/" // Örnek değer
              placeholder="LinkedIn profil URL'niz"
            />

            {/* Whatsapp */}
            <FormRowInput
              label="Whatsapp"
              name="social_whatsapp" 
              type="text" // Genellikle "wa.me/905xxxx" veya "905xxxx"
              defaultValue="httpsg://wa.me/905533210409" // Örnek değer
              placeholder="Whatsapp API linki veya numaranız"
            />
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