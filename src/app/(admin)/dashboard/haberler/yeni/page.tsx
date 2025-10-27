'use client'; 

// import type { Metadata } from "next"; 
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow, FormRowSelect } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";
import { ChevronDown, ChevronUp, Image as ImageIcon, Calendar } from "lucide-react"; 
import { useState } from "react"; 

/*
export const metadata: Metadata = {
  title: "Yeni Haber Ekle",
  robots: { index: false, follow: false },
};
*/

// RTE Taklidi Bileşeni
const RichTextEditor = ({ label, name, rows = 15 }: { label: string; name: string; rows?: number }) => (
  <div className="py-2"> 
     <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label> 
    <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden">
      {/* Toolbar Simülasyonu */}
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
        placeholder="Haber içeriğini buraya yazın..."
      />
    </div>
     <p className="mt-1 text-xs text-gray-500 italic">
       Not: Bu alan ileride profesyonel bir metin editörü ile değiştirilecektir.
     </p>
  </div>
);

// Etiket Girişi Bileşeni
const TagsInput = ({ label, name }: { label: string; name: string }) => (
   <FormRowInput 
      label={label}
      name={name}
      placeholder="Etiketleri virgülle ayırın (örn: emlak, karaman, satılık)"
   />
);


export default function AddNewsPage() {
  const [showSeoSettings, setShowSeoSettings] = useState(false); 

  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yeni Haber Ekle
        </h1>
        <Link 
          href="/dashboard/haberler" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. Ana Form Alanı (2 Sütunlu Yerleşim) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Ana Sütun (Sol Taraf) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <DashboardCard title="Başlık ve Adres">
             <div className="p-5 space-y-4">
                <FormRowInput label="Başlık (Türkçe)" name="title_tr" placeholder="Haberin ana başlığı" />
                <FormRowInput label="URL Anahtarı / Slug (Türkçe)" name="slug_tr" placeholder="haberin-adresi-burada (Boş bırakılırsa otomatik oluşur)" />
                 <FormRowInput label="Başlık (English)" name="title_en" placeholder="News Title" />
                <FormRowInput label="URL Anahtarı / Slug (English)" name="slug_en" placeholder="news-address-here (Leave blank to auto-generate)" />
             </div>
          </DashboardCard>
          <DashboardCard title="Haber İçeriği">
            <div className="p-5 space-y-6">
               <RichTextEditor label="İçerik (Türkçe)" name="content_tr" rows={20}/> 
               <RichTextEditor label="İçerik (English)" name="content_en" rows={20}/> 
            </div>
          </DashboardCard>
        </div>
        
        {/* Kenar Çubuğu (Sağ Taraf) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <DashboardCard title="Yayınlama">
            <div className="p-5 space-y-4 divide-y divide-gray-200">
               <div className="pt-2 first:pt-0">
                  <ToggleSwitch label="Durum (Yayında/Taslak)" name="status" defaultChecked={true} />
               </div>
               <div className="pt-4">
                  <FormRow label="Yayın Tarihi / Saati">
                     <input type="datetime-local" name="publish_date" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                  </FormRow>
               </div>
               <div className="pt-4">
                  <FormRowSelect label="Yazar" name="author_id">
                     <option value="">Seçiniz</option>
                     <option value="1">Admin</option> 
                     <option value="2">Editor</option>
                  </FormRowSelect>
               </div>
            </div>
            <div className="flex items-center justify-end gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg">
              <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                Kaydet
              </button>
            </div>
          </DashboardCard>
          <DashboardCard title="Kategori ve Etiketler">
             <div className="p-5 space-y-4">
                <FormRowSelect label="Kategori" name="category_id">
                  <option value="">Seçiniz</option>
                  <option value="1">Karaman Haberleri</option> 
                  <option value="2">Gayrimenkul Terimleri</option>
                </FormRowSelect>
                <TagsInput label="Etiketler (Keywords)" name="tags" />
             </div>
           </DashboardCard>
          <DashboardCard title="Öne Çıkan Görsel">
             <div className="p-5">
                <FormRow label="Görsel Yükle">
                   <input
                      type="file"
                      name="featured_image" 
                      accept="image/*"
                      className="block w-full text-sm text-gray-500 mt-1
                        file:mr-4 file:rounded-md file:border-0
                        file:bg-blue-50 file:px-4 file:py-2
                        file:text-sm file:font-semibold
                        file:text-blue-700 hover:file:bg-blue-100"
                    />
                     {/* GÜNCELLEME: Yardımcı metin eklendi */}
                    <p className="mt-1 text-xs text-gray-500">Google News için en az 1200 piksel genişliğinde, 16:9, 4:3 veya 1:1 oranında yüksek çözünürlüklü bir görsel yükleyin.</p>
                </FormRow>
             </div>
           </DashboardCard>
           <DashboardCard title="Özet / Kısa Açıklama">
             <div className="p-5 space-y-4">
                 {/* GÜNCELLEME: Yardımcı metin eklendi */}
                <FormRow label="Özet (Türkçe)" helperText="Arama motorları ve listelemeler için. Yaklaşık 160 karakter önerilir.">
                  <textarea name="summary_tr" rows={4} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Haberin kısa özeti..." />
                </FormRow>
                 {/* GÜNCELLEME: Yardımcı metin eklendi */}
                 <FormRow label="Özet (English)" helperText="For search engines and listings. ~160 characters recommended.">
                  <textarea name="summary_en" rows={4} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Short summary of the news..." />
                </FormRow>
             </div>
           </DashboardCard>
          <DashboardCard>
            <div 
              className="flex items-center justify-between p-5 cursor-pointer bg-gray-50 rounded-t-lg"
              onClick={() => setShowSeoSettings(!showSeoSettings)}
            >
              <h2 className="text-lg font-semibold text-gray-700">SEO Ayarları</h2>
              {showSeoSettings ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
            </div>
            {showSeoSettings && (
              <div className="p-5 space-y-6 border-t border-gray-200">
                 <FormRowInput label="URL Anahtarı / Slug (Türkçe)" name="slug_tr_seo" placeholder="SEO için özel slug (isteğe bağlı)" />
                 <FormRowInput label="URL Anahtarı / Slug (English)" name="slug_en_seo" placeholder="Custom slug for SEO (optional)" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Sol SEO */}
                  <div className="space-y-4">
                     <FormRowInput label="SEO Başlığı (Türkçe)" name="seo_title_tr" placeholder="Google'da görünecek başlık" />
                     <FormRow label="SEO Açıklaması (Türkçe)">
                      <textarea name="seo_description_tr" rows={4} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Google'da görünecek açıklama (Max 160 karakter)" />
                     </FormRow>
                  </div>
                  {/* Sağ SEO */}
                  <div className="space-y-4">
                      <FormRowInput label="SEO Başlığı (English)" name="seo_title_en" placeholder="Title to show in Google" />
                      <FormRow label="SEO Açıklaması (English)">
                        <textarea name="seo_description_en" rows={4} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Description to show in Google (Max 160 chars)" />
                      </FormRow>
                  </div>
                </div>
              </div>
            )}
          </DashboardCard>
        </div>
      </div>
    </form>
  );
}