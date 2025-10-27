'use client'; // useState kullandığı için Client Component

// GÜNCELLEME: Metadata kaldırıldı
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";
import { ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react"; 
import { useState } from "react"; 

// Demo Metin Editörü Bileşeni (Değişiklik yok)
const RichTextEditor = ({ label, name, defaultValue, rows = 15 }: { label: string; name: string; defaultValue?: string; rows?: number }) => (
  <FormRow label={label}>
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
        defaultValue={defaultValue} // Mevcut içeriği göster
        className="block w-full resize-y border-0 focus:ring-0 sm:text-sm p-3"
        placeholder="Sayfa içeriğini buraya yazın..."
      />
    </div>
  </FormRow>
);

// Bu fonksiyon, URL'den gelen 'id' parametresini alır.
export default function EditPage({ params }: { params: { id: string } }) {
  const pageId = params.id; 
  const [showSeoSettings, setShowSeoSettings] = useState(false); 

  // Backend'den çekilecek demo veriler (ID'ye göre)
  const pageData = {
    title_tr: `Hakkımızda ${pageId}`, // Demo
    title_en: `About Us ${pageId}`, // Demo
    alt_blok: "", // Demo
    slug: `hakkimizda-${pageId}`, // Demo
    content_tr: `Bu hakkımızda sayfasının içeriğidir (ID: ${pageId})...`, // Demo
    content_en: `This is the about us page content (ID: ${pageId})...`, // Demo
    seo_title_tr: `Hakkımızda ${pageId} | Site Adı`, // Demo
    seo_description_tr: `Hakkımızda ${pageId} sayfasının SEO açıklaması.`, // Demo
    seo_title_en: `About Us ${pageId} | Site Name`, // Demo
    seo_description_en: `SEO description for About Us page ${pageId}.`, // Demo
    status: true, // Demo
  };

  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Sayfa Düzenle: {pageData.title_tr}
        </h1>
        <Link 
          href="/dashboard/sayfalar" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Geri Dön
        </Link>
      </div>

      {/* 2. Ana Sayfa Bilgileri Kartı */}
      <DashboardCard title="Sayfa Bilgileri">
        <div className="p-5 space-y-6"> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormRowInput label="Sayfa Adı (Türkçe)" name="title_tr" defaultValue={pageData.title_tr} />
            <FormRowInput label="Sayfa Adı (English)" name="title_en" defaultValue={pageData.title_en} />
             <FormRow label="Alt Blok">
                <select name="alt_blok" defaultValue={pageData.alt_blok} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                    <option value="">Yok</option> <option value="blok1">Blok 1</option> <option value="blok2">Blok 2</option>
                </select>
             </FormRow>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <FormRow label="Sayfa Resmi (Türkçe)">
              {/* Mevcut resim önizlemesi eklenebilir */}
              <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Değiştir <ImageIcon size={18} className="ml-2" />
              </button>
            </FormRow>
            <FormRow label="Sayfa Resmi (English)">
              {/* Mevcut resim önizlemesi eklenebilir */}
              <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Değiştir <ImageIcon size={18} className="ml-2" />
              </button>
            </FormRow>
          </div>
          <div className="space-y-6 border-t pt-6">
            <RichTextEditor label="Sayfa İçeriği (Türkçe)" name="content_tr" defaultValue={pageData.content_tr} />
            <RichTextEditor label="Sayfa İçeriği (English)" name="content_en" defaultValue={pageData.content_en} />
          </div>
          <div className="border-t pt-6">
            <ToggleSwitch label="Durum (Yayında/Taslak)" name="status" defaultChecked={pageData.status} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg">
          <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
            Güncelle
          </button>
        </div>
      </DashboardCard>

      {/* 3. SEO Ayarları Kartı */}
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
             <FormRowInput label="URL Anahtarı (slug)" name="slug" defaultValue={pageData.slug} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                 <FormRowInput label="SEO Başlığı (Türkçe)" name="seo_title_tr" defaultValue={pageData.seo_title_tr} />
                 <FormRow label="SEO Açıklaması (Türkçe)">
                  <textarea name="seo_description_tr" rows={4} defaultValue={pageData.seo_description_tr} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Google'da görünecek açıklama (Max 160 karakter)" />
                 </FormRow>
              </div>
              <div className="space-y-4">
                  <FormRowInput label="SEO Başlığı (English)" name="seo_title_en" defaultValue={pageData.seo_title_en} />
                  <FormRow label="SEO Açıklaması (English)">
                    <textarea name="seo_description_en" rows={4} defaultValue={pageData.seo_description_en} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Description to show in Google (Max 160 chars)" />
                  </FormRow>
              </div>
            </div>
          </div>
        )}
      </DashboardCard>
    </form>
  );
}