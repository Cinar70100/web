import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
// GÜNCELLEME: FormRowSelect de import edildi
import { FormRowInput, FormRow, FormRowSelect } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";

export const metadata: Metadata = {
  title: "Dil Düzenle",
  robots: {
    index: false,
    follow: false,
  },
};

// Bu fonksiyon, URL'den gelen 'id' parametresini alır.
export default function EditLanguagePage({ params }: { params: { id: string } }) {
  const langId = params.id; 

  // Backend'den çekilecek demo veriler (ID'ye göre)
  const langData = {
    name: `Türkçe ${langId}`, // Demo
    code: "tr", // Demo
    order: 1, // Demo
    status: true, // Demo
  };

  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Dil Düzenle: {langData.name}
        </h1>
        <Link 
          href="/dashboard/diller" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. Dil Bilgileri Kartı (GÜNCELLEME: Kopyalanacak Dil eklendi) */}
      <DashboardCard title="Dil Bilgileri">
        {/* İçerik Alanı (Tek sütunlu, daraltılmış) */}
        <div className="p-5 space-y-4 max-w-lg"> 
          
          <FormRowInput
            label="Dil Adı"
            name="name" 
            defaultValue={langData.name}
          />

          <FormRowInput
            label="Dil Kodu"
            name="code" 
            defaultValue={langData.code}
            maxLength={2} 
          />

          <FormRowInput
            label="Sıra"
            name="order" 
            type="number"
            defaultValue={langData.order.toString()}
          />

           {/* Kopyalanacak Dil (YENİ EKLENDİ) */}
          <FormRowSelect label="Kopyalanacak Dil" name="copy_from">
            <option value="">Seçiniz</option>
            <option value="tr">Türkçe</option>
            <option value="en">İngilizce</option>
            {/* Bu liste backend'den mevcut dillerle dolacak */}
          </FormRowSelect>

          {/* Durum */}
          <div className="py-2"> 
            <ToggleSwitch 
              label="Durum (Aktif/Pasif)" 
              name="status" 
              defaultChecked={langData.status} 
            />
          </div>
        </div>

        {/* Kart Footer'ı - Kaydet Butonu (Görseldeki gibi solda) */}
        <div className="flex items-center justify-start gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> {/* justify-start */}
          <button
            type="submit"
            // Görseldeki sarı butona uygun stil:
            className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Kaydet
          </button>
        </div>
      </DashboardCard>
    </form>
  );
}