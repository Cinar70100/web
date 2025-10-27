import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import ColorPicker from "@/components/admin/form/ColorPicker"; 
import { FormRowInput, FormRow } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";

export const metadata: Metadata = {
  title: "Haber Kategorisi Düzenle", // Başlık güncellendi
  robots: {
    index: false,
    follow: false,
  },
};

// Bu fonksiyon, URL'den gelen 'id' parametresini alır.
export default function EditNewsCategoryPage({ params }: { params: { id: string } }) {
  const categoryId = params.id; 

  // Backend'den çekilecek demo veriler (ID'ye göre)
  const categoryData = {
    name_tr: `Karaman Haberleri ${categoryId}`, // Demo
    name_en: `Karaman News ${categoryId}`, // Demo
    color: "#3B82F6", // Demo
    order: 1, // Demo
    status: true, // Demo
  };

  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Haber Kategorisi Düzenle: {categoryData.name_tr}
        </h1>
        <Link 
          href="/dashboard/haber-kategorileri" // 'Tüm Haber Kategorileri' sayfasına gider
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Geri Dön
        </Link>
      </div>

      {/* 2. Kategori Bilgileri Kartı (Tek satır tasarım) */}
      <DashboardCard title="Kategori Bilgileri">
        <div className="p-5"> 
          {/* Tek Satır Grid (5 Sütun) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end"> 
            
            <FormRowInput
              label="Kategori Adı (Türkçe)"
              name="name_tr" 
              defaultValue={categoryData.name_tr} // Mevcut veriyi göster
            />

            <FormRowInput
              label="Kategori Adı (English)"
              name="name_en" 
              defaultValue={categoryData.name_en} // Mevcut veriyi göster
            />

             {/* Renk Seçici */}
             <div>
               <label className="block text-sm font-medium text-gray-800 mb-1">Renk</label>
               <input
                  type="color"
                  name="color"
                  defaultValue={categoryData.color} // Mevcut rengi göster
                  className="w-full h-10 p-0 border border-gray-300 rounded-md cursor-pointer"
                />
            </div>
          
            <FormRowInput
              label="Sıra"
              name="order" 
              type="number"
              defaultValue={categoryData.order.toString()} // Mevcut veriyi göster
            />

            <div className="pb-2"> 
               <ToggleSwitch 
                label="Durum" 
                name="status" 
                defaultChecked={categoryData.status} // Mevcut durumu göster
              />
            </div>
          </div>
        </div>

        {/* Kart Footer'ı - Güncelle Butonu */}
        <div className="flex items-center justify-end gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Güncelle
          </button>
        </div>
      </DashboardCard>
    </form>
  );
}