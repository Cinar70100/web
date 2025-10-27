'use client'; 

// import type { Metadata } from "next"; // Client component'te metadata hatası verirse kaldırılır
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";
import { Image as ImageIcon } from "lucide-react"; 

/* // Client component'te metadata hatası verirse bu bloğu kaldırın
export const metadata: Metadata = {
  title: "Yardım İçeriği Düzenle", // Başlık güncellendi
  robots: {
    index: false,
    follow: false,
  },
};
*/

// Demo Metin Editörü Bileşeni (defaultValue eklendi)
const RichTextEditor = ({ label, name, defaultValue, rows = 15 }: { label: string; name: string; defaultValue?: string; rows?: number }) => (
  <div className="py-2"> 
     <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label> 
    <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden">
      <div className="bg-gray-100 p-2 border-b border-gray-200 flex flex-wrap gap-2 text-gray-700 text-sm">
        {/* Toolbar */}
        <span className="font-medium">Dosya</span> <span className="font-medium">Düzenle</span> <span className="font-medium">Görünüm</span> <span className="font-medium">Ekle</span> <span className="font-medium">Biçim</span> <span className="font-medium">Araçlar</span> <span className="font-medium">Tablo</span>
        <span className="ml-auto text-xs text-gray-500">WORDS POWERED BY TINY</span>
      </div>
      <div className="p-2 border-b border-gray-200 flex flex-wrap gap-x-3 gap-y-1 text-gray-600">
        <span className="font-bold">B</span> <span className="italic">I</span> <span className="underline">U</span> <span><ImageIcon size={16} /></span>
      </div>
      <textarea
        name={name}
        rows={rows}
        defaultValue={defaultValue} // Mevcut içeriği göster
        className="block w-full resize-y border-0 focus:ring-0 sm:text-sm p-3"
        placeholder="Yardım içeriğini buraya yazın..."
      />
    </div>
     <p className="mt-1 text-xs text-gray-500 italic">
       Not: Bu alan ileride profesyonel bir metin editörü ile değiştirilecektir.
     </p>
  </div>
);


// Bu fonksiyon, URL'den gelen 'id' parametresini alır.
export default function EditHelpContentPage({ params }: { params: { id: string } }) {
  const contentId = params.id; 

  // Backend'den çekilecek demo veriler (ID'ye göre)
  const contentData = {
    order: 1, // Görselde yok ama önceki kodda vardı, şimdilik kaldırılabilir veya tutulabilir.
    title_tr: `Nasıl ilan verilir? (ID: ${contentId})`, // Demo
    title_en: `How to post an ad? (ID: ${contentId})`, // Demo
    content_tr: `İlan vermek için şu adımları takip edebilirsiniz... (ID: ${contentId})`, // Demo
    content_en: `To post an ad, follow these steps... (ID: ${contentId})`, // Demo
    status: true, // Demo
  };

  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yardım İçeriği Düzenle: {contentData.title_tr}
        </h1>
        <Link 
          href="/dashboard/yardim" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Geri Dön
        </Link>
      </div>

      {/* 2. İçerik Bilgileri Kartı */}
      <DashboardCard title="İçerik Bilgileri">
        <div className="p-5 space-y-6"> 
          
          {/* Madde Adları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <FormRowInput
                label="Madde Adı (Türkçe)" 
                name="title_tr" 
                defaultValue={contentData.title_tr} // Mevcut veriyi göster
             />
             <FormRowInput
                label="Madde Adı (English)" 
                name="title_en" 
                defaultValue={contentData.title_en} // Mevcut veriyi göster
             />
          </div>
          
          {/* İçerik Editörleri */}
          <div className="space-y-6 border-t pt-6">
             <RichTextEditor label="İçerik (Türkçe)" name="content_tr" defaultValue={contentData.content_tr} rows={15}/> 
             <RichTextEditor label="İçerik (English)" name="content_en" defaultValue={contentData.content_en} rows={15}/> 
          </div>

          {/* Durum */}
          <div className="border-t pt-6">
            <ToggleSwitch 
              label="Durum (Aktif/Pasif)" 
              name="status" 
              defaultChecked={contentData.status} // Mevcut durumu göster
            />
          </div>
        </div>

        {/* Kart Footer'ı - Güncelle Butonu */}
        <div className="flex items-center justify-start gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> 
          <button
            type="submit"
            className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Güncelle
          </button>
        </div>
      </DashboardCard>
    </form>
  );
}