import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRow } from "@/components/admin/form/FormHelpers"; // Sadece FormRow'a ihtiyaç var

export const metadata: Metadata = {
  title: "Yeni Bölge Ekle",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddRegionPage() {
  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yeni Bölge Ekle
        </h1>
        <Link 
          href="/dashboard/bolgeler" // 'Tüm Bölgeler' sayfasına gider (daha sonra oluşturulacak)
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. Bölge Bilgileri Kartı */}
      <DashboardCard title="Bölge Bilgileri">
        {/* İçerik Alanı */}
        <div className="p-5 max-w-xl"> {/* Genişliği sınırlandıralım */}
          
          {/* Bölge Adı (Textarea) */}
          <FormRow label="Bölge Adı (Her Satıra 1 Bölge)">
            <textarea
              name="region_names" // Backend'de satırlara ayrılacak
              rows={10} // Yeterli alan sağlamak için
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Karaman Merkez&#10;Ermenek&#10;Başyayla" // &#10; yeni satır
            />
            <p className="mt-1 text-xs text-gray-500">Eklemek istediğiniz bölgeleri her satıra bir tane gelecek şekilde yazınız.</p>
          </FormRow>
        </div>

        {/* Kart Footer'ı - Butonlar */}
        <div className="flex items-center justify-between gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> {/* justify-between */}
           {/* Önceki Sayfaya Git (Görseldeki gibi kırmızı) */}
           <Link
            href="/dashboard/bolgeler"
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700"
          >
            Önceki Sayfaya Git
          </Link>
          {/* Kaydet (Görseldeki gibi sarı) */}
          <button
            type="submit"
            className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Kaydet
          </button>
        </div>
      </DashboardCard>
    </form>
  );
}