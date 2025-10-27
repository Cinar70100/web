'use client'; 

// import type { Metadata } from "next"; // Client component'te metadata hatası verirse kaldırılır
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";
import { Image as ImageIcon } from "lucide-react"; 

/* // Client component'te metadata hatası verirse bu bloğu kaldırın
export const metadata: Metadata = {
  title: "Yeni Yardım İçeriği Ekle",
  robots: {
    index: false,
    follow: false,
  },
};
*/

// Demo Metin Editörü Bileşeni (Değişiklik yok)
const RichTextEditor = ({ label, name, rows = 15 }: { label: string; name: string; rows?: number }) => (
  // GÜNCELLEME: FormRow kaldırıldı, etiket doğrudan buraya eklendi
  <div className="py-2"> {/* Dikey boşluk */}
     <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label> {/* Etiket */}
    <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden">
      <div className="bg-gray-100 p-2 border-b border-gray-200 flex flex-wrap gap-2 text-gray-700 text-sm">
        <span className="font-medium">Dosya</span> <span className="font-medium">Düzenle</span> <span className="font-medium">Görünüm</span> <span className="font-medium">Ekle</span> <span className="font-medium">Biçim</span> <span className="font-medium">Araçlar</span> <span className="font-medium">Tablo</span>
        <span className="ml-auto text-xs text-gray-500">WORDS POWERED BY TINY</span>
      </div>
      <div className="p-2 border-b border-gray-200 flex flex-wrap gap-x-3 gap-y-1 text-gray-600">
        <span className="font-bold">B</span> <span className="italic">I</span> <span className="underline">U</span> <span><ImageIcon size={16} /></span>
      </div>
      <textarea
        name={name}
        rows={rows}
        className="block w-full resize-y border-0 focus:ring-0 sm:text-sm p-3"
        placeholder="Yardım içeriğini buraya yazın..."
      />
    </div>
     <p className="mt-1 text-xs text-gray-500 italic">
       Not: Bu alan ileride profesyonel bir metin editörü ile değiştirilecektir.
     </p>
  </div>
);


export default function AddHelpContentPage() {
  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yardım İçeriği Ekle
        </h1>
        <Link 
          href="/dashboard/yardim" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. İçerik Bilgileri Kartı */}
      <DashboardCard title="İçerik Bilgileri">
        {/* İçerik Alanı */}
        <div className="p-5 space-y-6"> 
          
          {/* Madde Adları (Yan Yana) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <FormRowInput
                // GÜNCELLEME: Etiket değiştirildi
                label="Madde Adı (Türkçe)" 
                name="title_tr" 
                placeholder="Yardım konusunun başlığı"
             />
             <FormRowInput
                // GÜNCELLEME: Etiket değiştirildi
                label="Madde Adı (English)" 
                name="title_en" 
                placeholder="Title of the help topic"
             />
          </div>
          
          {/* GÜNCELLEME: Sıra alanı kaldırıldı */}

          {/* İçerik Editörleri (Alt Alta) */}
          <div className="space-y-6 border-t pt-6">
             <RichTextEditor label="İçerik (Türkçe)" name="content_tr" rows={15}/> 
             <RichTextEditor label="İçerik (English)" name="content_en" rows={15}/> 
          </div>

          {/* Durum */}
          <div className="border-t pt-6">
            <ToggleSwitch 
              label="Durum (Aktif/Pasif)" 
              name="status" 
              defaultChecked={true} 
            />
          </div>
        </div>

        {/* Kart Footer'ı - Kaydet Butonu */}
        <div className="flex items-center justify-start gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> 
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