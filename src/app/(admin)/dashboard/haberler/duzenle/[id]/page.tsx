'use client'; 

// import type { Metadata } from "next"; 
import Link from "next/link";
import Image from "next/image"; // <-- EKLENDİ
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow, FormRowSelect } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";
import { ChevronDown, ChevronUp, Image as ImageIcon, Calendar } from "lucide-react"; 
import { useState } from "react"; 

/*
export const metadata: Metadata = {
  title: "Haber Düzenle", 
  robots: { index: false, follow: false },
};
*/

// RTE Taklidi Bileşeni 
const RichTextEditor = ({ label, name, defaultValue, rows = 15 }: { label: string; name: string; defaultValue?: string; rows?: number }) => (
  <div className="py-2"> 
     <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label> 
    <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden">
      {/* ... (RTE içeriği aynı) ... */}
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
        defaultValue={defaultValue} 
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
const TagsInput = ({ label, name, defaultValue }: { label: string; name: string; defaultValue?: string }) => (
   <FormRowInput 
      label={label}
      name={name}
      defaultValue={defaultValue}
      placeholder="Etiketleri virgülle ayırın (örn: emlak, karaman, satılık)"
   />
);

export default function EditNewsPage({ params }: { params: { id: string } }) {
  const newsId = params.id; 
  const [showSeoSettings, setShowSeoSettings] = useState(false); 

  // Demo veriler
  const newsData = {
    title_tr: `Karaman Emlak Piyasası ${newsId}`, slug_tr: `karaman-emlak-piyasasi-${newsId}`, title_en: `Karaman Real Estate Market ${newsId}`, slug_en: `karaman-real-estate-market-${newsId}`, content_tr: `Haber içeriği burada olacak (TR - ID: ${newsId})...`, content_en: `News content goes here (EN - ID: ${newsId})...`, status: true, publish_date: "2025-10-23T10:00", author_id: "1", category_id: "1", tags: "emlak, karaman", featured_image: "/images/demo/news-thumb-placeholder.png", summary_tr: `Haberin kısa özeti (TR - ID: ${newsId})...`, summary_en: `Short summary (EN - ID: ${newsId})...`, seo_title_tr: `SEO Başlığı TR ${newsId}`, seo_description_tr: `SEO Açıklaması TR ${newsId}`, seo_title_en: `SEO Title EN ${newsId}`, seo_description_en: `SEO Description EN ${newsId}`,
  };

  return (
    <form className="flex flex-col gap-6">
      
      {/* Başlık ve Buton */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Haber Düzenle: {newsData.title_tr}
        </h1>
        <Link href="/dashboard/haberler" className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300">
          Geri Dön
        </Link>
      </div>

      {/* 2 Sütunlu Yapı */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sol Sütun */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* ... (Başlık/Slug ve İçerik Kartları aynı kaldı) ... */}
           <DashboardCard title="Başlık ve Adres">
             <div className="p-5 space-y-4">
                <FormRowInput label="Başlık (Türkçe)" name="title_tr" defaultValue={newsData.title_tr} />
                <FormRowInput label="URL Anahtarı / Slug (Türkçe)" name="slug_tr" defaultValue={newsData.slug_tr} />
                 <FormRowInput label="Başlık (English)" name="title_en" defaultValue={newsData.title_en} />
                <FormRowInput label="URL Anahtarı / Slug (English)" name="slug_en" defaultValue={newsData.slug_en} />
             </div>
          </DashboardCard>
          <DashboardCard title="Haber İçeriği">
            <div className="p-5 space-y-6">
               <RichTextEditor label="İçerik (Türkçe)" name="content_tr" defaultValue={newsData.content_tr} rows={20}/> 
               <RichTextEditor label="İçerik (English)" name="content_en" defaultValue={newsData.content_en} rows={20}/> 
            </div>
          </DashboardCard>
        </div>
        
        {/* Sağ Sütun */}
        <div className="lg:col-span-1 flex flex-col gap-6">
           {/* ... (Yayınlama, Kategori/Etiket Kartları aynı kaldı) ... */}
            <DashboardCard title="Yayınlama">
            <div className="p-5 space-y-4 divide-y divide-gray-200">
               <div className="pt-2 first:pt-0">
                  <ToggleSwitch label="Durum (Yayında/Taslak)" name="status" defaultChecked={newsData.status} />
               </div>
               <div className="pt-4">
                  <FormRow label="Yayın Tarihi / Saati">
                     <input type="datetime-local" name="publish_date" defaultValue={newsData.publish_date} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                  </FormRow>
               </div>
               <div className="pt-4">
                  <FormRowSelect label="Yazar" name="author_id" defaultValue={newsData.author_id}>
                     <option value="">Seçiniz</option> <option value="1">Admin</option> <option value="2">Editor</option>
                  </FormRowSelect>
               </div>
            </div>
            <div className="flex items-center justify-end gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg">
              <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                Güncelle
              </button>
            </div>
          </DashboardCard>
          <DashboardCard title="Kategori ve Etiketler">
             <div className="p-5 space-y-4">
                <FormRowSelect label="Kategori" name="category_id" defaultValue={newsData.category_id}>
                  <option value="">Seçiniz</option> <option value="1">Karaman Haberleri</option> <option value="2">Gayrimenkul Terimleri</option>
                </FormRowSelect>
                <TagsInput label="Etiketler (Keywords)" name="tags" defaultValue={newsData.tags} />
             </div>
           </DashboardCard>
          {/* Öne Çıkan Görsel Kartı */}
          <DashboardCard title="Öne Çıkan Görsel">
             <div className="p-5">
                {newsData.featured_image && (
                   <div className="mb-4">
                      {/* BURADA Next.js Image bileşeni kullanılıyor */}
                      <Image src={newsData.featured_image} alt="Mevcut Görsel" width={200} height={112} className="rounded-md object-cover"/>
                   </div>
                )}
                <FormRow label={newsData.featured_image ? "Görseli Değiştir" : "Görsel Yükle"}>
                   <input type="file" name="featured_image" accept="image/*" className="block w-full text-sm text-gray-500 mt-1 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100" />
                    <p className="mt-1 text-xs text-gray-500">Google News için en az 1200 piksel genişliğinde, 16:9, 4:3 veya 1:1 oranında.</p>
                </FormRow>
             </div>
           </DashboardCard>
           {/* ... (Özet ve SEO Kartları aynı kaldı) ... */}
           <DashboardCard title="Özet / Kısa Açıklama">
             <div className="p-5 space-y-4">
                <FormRow label="Özet (Türkçe)" helperText="Yaklaşık 160 karakter önerilir.">
                  <textarea name="summary_tr" rows={4} defaultValue={newsData.summary_tr} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Haberin kısa özeti..." />
                </FormRow>
                 <FormRow label="Özet (English)" helperText="~160 characters recommended.">
                  <textarea name="summary_en" rows={4} defaultValue={newsData.summary_en} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Short summary of the news..." />
                </FormRow>
             </div>
           </DashboardCard>
          <DashboardCard>
            <div className="flex items-center justify-between p-5 cursor-pointer bg-gray-50 rounded-t-lg" onClick={() => setShowSeoSettings(!showSeoSettings)}>
              <h2 className="text-lg font-semibold text-gray-700">SEO Ayarları</h2>
              {showSeoSettings ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
            </div>
            {showSeoSettings && (
              <div className="p-5 space-y-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                     <FormRowInput label="SEO Başlığı (Türkçe)" name="seo_title_tr" defaultValue={newsData.seo_title_tr} />
                     <FormRow label="SEO Açıklaması (Türkçe)">
                      <textarea name="seo_description_tr" rows={4} defaultValue={newsData.seo_description_tr} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Google'da görünecek açıklama" />
                     </FormRow>
                  </div>
                  <div className="space-y-4">
                      <FormRowInput label="SEO Başlığı (English)" name="seo_title_en" defaultValue={newsData.seo_title_en} />
                      <FormRow label="SEO Açıklaması (English)">
                        <textarea name="seo_description_en" rows={4} defaultValue={newsData.seo_description_en} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Description to show in Google" />
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