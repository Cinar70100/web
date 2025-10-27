import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRow } from "@/components/admin/form/FormHelpers"; // Sadece FormRow'a ihtiyaç var

export const metadata: Metadata = {
  title: "Yeni Ana Kategori Ekle",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddMainCategoryPage() {
  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yeni Ana Kategori Ekle
        </h1>
        <Link 
          href="/dashboard/kategori" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. Kategori Bilgileri Kartı */}
      <DashboardCard title="Kategori Bilgileri">
        {/* İçerik Alanı (GÜNCELLEME: 2 Sütunlu Grid) */}
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6"> 
          
          {/* Kategori Adları (Türkçe) */}
          <FormRow label="Kategori Adı (Her Satıra 1 Kategori) (Türkçe )">
            <textarea
              name="cat_names_tr"
              rows={8} // Daha fazla satır sığması için
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Emlak&#10;Vasıta&#10;Hizmetler" // &#10; yeni satır demek
            />
          </FormRow>

          {/* Kategori Adları (English) */}
          <FormRow label="Kategori Adı (Her Satıra 1 Kategori) (English )">
            <textarea
              name="cat_names_en"
              rows={8}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Real Estate&#10;Vehicles&#10;Services"
            />
          </FormRow>
          
          {/* Sıra alanı kaldırıldı */}
        </div>

        {/* Kart Footer'ı - Butonlar */}
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