import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput } from "@/components/admin/form/FormHelpers"; 

export const metadata: Metadata = {
  title: "İletişim Ayarları",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactSettingsPage() {
  return (
    <form className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        İletişim Ayarları
      </h1>

      {/* 2. Ayarlar Kartı */}
      <DashboardCard title="Firma İletişim Bilgileri">
        {/* İçerik Alanı */}
        <div className="p-5"> 
          {/* Tek Satır Grid (3 Sütun) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end"> 
            
            {/* Adres */}
             <FormRowInput
              label="Adres"
              name="contact_address" 
              defaultValue="Fenari Mah. 42.Sokak 3/A KARAMAN" // Sizin belirttiğiniz değer
              placeholder="Firma adresi"
            />

            {/* Telefon */}
             <FormRowInput
              label="Telefon"
              name="contact_phone" 
              defaultValue="+90 553 321 0409" // Sizin belirttiğiniz değer
              placeholder="Firma telefon numarası"
            />

            {/* Çalışma Saatleri */}
            <FormRowInput
              label="Çalışma Saatleri"
              name="contact_hours" 
              defaultValue="09.00 - 17.30" // Sizin belirttiğiniz değer
              placeholder="Örn: 09:00 - 18:00"
            />
          </div>
           {/* E-posta, Harita Kodu gibi ek alanlar buraya eklenebilir */}
           <div className="mt-6 border-t pt-4 max-w-sm">
             <FormRowInput
                label="E-posta Adresi"
                name="contact_email" 
                type="email"
                defaultValue="info@karamanevbul.com" // Örnek
                placeholder="İletişim e-postası"
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