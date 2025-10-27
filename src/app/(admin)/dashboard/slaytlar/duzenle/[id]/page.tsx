import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow } from "@/components/admin/form/FormHelpers"; 
// GÜNCELLEME: ToggleSwitch kaldırıldı
// FileInput import'u merkezi dosyadan yapılıyor varsayımıyla (veya aşağıdaki tanımı kullanın)
// import { FileInput } from "@/components/admin/form/FileInput"; 

export const metadata: Metadata = {
  title: "Yeni Slayt Ekle",
  robots: {
    index: false,
    follow: false,
  },
};

// FileInput Bileşeni (Merkezi bir dosyada değilse buraya ekleyin)
const FileInput = ({ label, name, accept, multiple = false, currentFileUrl }: { label: string; name: string; accept?: string; multiple?: boolean; currentFileUrl?: string }) => (
   <FormRow label={label}> {currentFileUrl && ( <div className="mb-2"> <Link href={currentFileUrl} target="_blank" className="text-xs text-blue-600 hover:underline">Mevcut Dosya: {currentFileUrl.split('/').pop()}</Link> </div> )} <input type="file" name={name} accept={accept} multiple={multiple} className="block w-full text-sm text-gray-500 mt-1 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" /> {currentFileUrl && <p className="mt-1 text-xs text-gray-500">Yeni dosya yüklerseniz mevcut dosya değişir.</p>} </FormRow>
);


export default function AddSlidePage() {
  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yeni Slayt Ekle
        </h1>
        <Link 
          href="/dashboard/slaytlar" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. Slayt Bilgileri Kartı (GÜNCELLEME: Tek satır ve sadece 3 alan) */}
      <DashboardCard title="Slayt Bilgileri">
        {/* İçerik Alanı */}
        <div className="p-5"> 
          {/* Tek Satır Grid (3 Sütun) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end"> 
            
            {/* Slayt Açıklaması */}
             <FormRow label="Slayt Açıklaması (İsteğe bağlı)">
               <textarea
                 name="slide_description"
                 rows={1} // Tek satır gibi görünmesi için az satır
                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                 placeholder="Slayt üzerindeki kısa metin..."
               />
            </FormRow>

            {/* Slayt Linki */}
             <FormRowInput
                label="Slayt Linki (İsteğe bağlı)"
                name="slide_link"
                type="url" 
                placeholder="https://www.example.com"
              />

            {/* Slayt Seç */}
            {/* FileInput bileşeni yerine doğrudan input */}
             <div>
               <label className="block text-sm font-medium text-gray-800 mb-1">Slayt Seç</label>
               <input 
                 type="file" 
                 name="slide_image" 
                 accept="image/*" 
                 className="block w-full text-sm text-gray-500 mt-1 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" 
                />
                 <p className="mt-1 text-xs text-gray-500">Önerilen boyut: 1920x560 piksel.</p>
             </div>

             {/* Sıra ve Durum alanları KALDIRILDI */}
          </div>
        </div>

        {/* Kart Footer'ı - Butonlar */}
        <div className="flex items-center justify-between gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> 
           <Link
            href="/dashboard/slaytlar"
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700"
          >
            Önceki Sayfaya Git 
          </Link>
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

// FileInput tanımı (Eğer merkezi dosyada değilse)
// const FileInput = ...