import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import ColorPicker from "@/components/admin/form/ColorPicker"; 
import { FormRowInput, FormRow } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";

export const metadata: Metadata = {
  title: "Yeni Haber Kategorisi Ekle",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddNewsCategoryPage() {
  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu (Üstte kalıyor) */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yeni Haber Kategorisi Ekle
        </h1>
        <Link 
          href="/dashboard/haber-kategorileri" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. Kategori Bilgileri Kartı (GÜNCELLEME: Başlıksız ve tek satır grid) */}
      <DashboardCard> {/* title prop'u kaldırıldı */}
        {/* İçerik Alanı */}
        <div className="p-5"> 
          {/* Tek Satır Grid (5 Sütun) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end"> {/* lg:grid-cols-5 */}
            
            {/* Kategori Adı (Türkçe) */}
            <FormRowInput
              label="Kategori Adı (Türkçe)"
              name="name_tr" 
              placeholder="Örn: Karaman Haberleri"
            />

            {/* Kategori Adı (English) */}
            <FormRowInput
              label="Kategori Adı (English)"
              name="name_en" 
              placeholder="Örn: Karaman News"
            />

            {/* Renk Seçici (Etiketi kaldırılarak daha kompakt hale getirildi) */}
             <div>
               <label className="block text-sm font-medium text-gray-800 mb-1">Renk</label>
               <input
                  type="color"
                  name="color"
                  defaultValue="#3B82F6" 
                  className="w-full h-10 p-0 border border-gray-300 rounded-md cursor-pointer"
                />
            </div>
          
            {/* Sıra */}
            <FormRowInput
              label="Sıra"
              name="order" 
              type="number"
              defaultValue="0"
            />

            {/* Durum (Etiketi kaldırıldı) */}
            <div className="pb-2"> {/* Dibe hizalamak için hafif padding */}
               <ToggleSwitch 
                label="Durum" // Ekranda görünmeyecek ama erişilebilirlik için kalabilir
                name="status" 
                defaultChecked={true} 
              />
            </div>
          </div>
        </div>

        {/* Kart Footer'ı - Kaydet Butonu */}
        <div className="flex items-center justify-end gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Kaydet
          </button>
        </div>
      </DashboardCard>
    </form>
  );
}