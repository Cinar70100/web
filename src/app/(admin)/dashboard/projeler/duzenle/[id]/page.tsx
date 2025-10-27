'use client'; 

// import type { Metadata } from "next"; 
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow, FormRowSelect } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";
import { ChevronDown, ChevronUp, Image as ImageIcon, MapPin, UploadCloud, PlusCircle } from "lucide-react"; 
import { useState } from "react"; 
import Image from "next/image"; // Image bileşeni import edildi

/*
export const metadata: Metadata = {
  title: "Proje Düzenle",
  robots: { index: false, follow: false },
};
*/

// --- (RTE Taklidi, CheckboxGroup, FileInput, DragDropArea bileşenleri Adım 82'deki gibi buraya kopyalanacak) ---
// RTE Taklidi Bileşeni
const RichTextEditor = ({ label, name, defaultValue, rows = 10 }: { label: string; name: string; defaultValue?:string; rows?: number }) => (
    <div className="py-2"> <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label> <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden"> <div className="bg-gray-100 p-2 border-b border-gray-200 flex flex-wrap gap-2 text-gray-700 text-sm"> <span className="font-medium">Dosya</span> <span className="font-medium">Düzenle</span> <span className="font-medium">Görünüm</span> <span className="font-medium">Ekle</span> <span className="font-medium">Biçim</span> <span className="font-medium">Araçlar</span> <span className="font-medium">Tablo</span> <span className="ml-auto text-xs text-gray-500">WORDS POWERED BY TINY</span> </div> <div className="p-2 border-b border-gray-200 flex flex-wrap gap-x-3 gap-y-1 text-gray-600"> <span className="font-bold">B</span> <span className="italic">I</span> <span className="underline">U</span> <span><ImageIcon size={16} /></span> </div> <textarea name={name} rows={rows} defaultValue={defaultValue} className="block w-full resize-y border-0 focus:ring-0 sm:text-sm p-3" placeholder="İçeriği buraya yazın..." /> </div> <p className="mt-1 text-xs text-gray-500 italic">Not: Bu alan ileride profesyonel bir metin editörü ile değiştirilecektir.</p> </div>
);
// Checkbox Grubu Bileşeni
const CheckboxGroup = ({ title, options, namePrefix, defaultValues = [] }: { title?: string; options: string[]; namePrefix: string; defaultValues?: string[] }) => (
  <div> {title && <h3 className="text-md font-semibold text-gray-700 mb-3">{title}</h3>} <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-3"> {options.map((option, index) => ( <div key={index} className="flex items-center"> <input id={`${namePrefix}-${index}`} name={`${namePrefix}[]`} type="checkbox" value={option} defaultChecked={defaultValues.includes(option)} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" /> <label htmlFor={`${namePrefix}-${index}`} className="ml-2 block text-sm text-gray-900">{option}</label> </div> ))} </div> </div>
);
// Dosya Yükleme Bileşeni
const FileInput = ({ label, name, accept, multiple = false, currentFileUrl }: { label: string; name: string; accept?: string; multiple?: boolean; currentFileUrl?: string }) => (
   <FormRow label={label}> {currentFileUrl && ( <div className="mb-2"> <Link href={currentFileUrl} target="_blank" className="text-xs text-blue-600 hover:underline">Mevcut Dosya: {currentFileUrl.split('/').pop()}</Link> </div> )} <input type="file" name={name} accept={accept} multiple={multiple} className="block w-full text-sm text-gray-500 mt-1 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" /> {currentFileUrl && <p className="mt-1 text-xs text-gray-500">Yeni dosya yüklerseniz mevcut dosya değişir.</p>} </FormRow>
);
// Sürükle-Bırak Alanı Tasarımı
const DragDropArea = ({ label, name, accept }: { label: string; name: string; accept?: string }) => (
   <FormRow label={label}> <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"> <div className="space-y-1 text-center"> <UploadCloud className="mx-auto h-12 w-12 text-gray-400" /> <div className="flex text-sm text-gray-600"> <label htmlFor={name} className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"> <span>Dosya yükle</span> <input id={name} name={name} type="file" className="sr-only" multiple accept={accept} /> </label> <p className="pl-1">veya sürükleyip bırakın</p> </div> <p className="text-xs text-gray-500">Yüklemek İstediğiniz Fotoğrafları Buraya Sürükleyin.</p> <p className="text-xs text-gray-500">PNG, JPG, GIF (Max. Boyut)</p> </div> </div> <p className="mt-1 text-xs text-gray-500 italic">Not: Sürükle-bırak işlevselliği daha sonra eklenecektir.</p> </FormRow>
);
// ---------------------------------------------------------------------------------


export default function EditProjectPage({ params }: { params: { id: string } }) {
  const projectId = params.id; 
  const [showSeoSettings, setShowSeoSettings] = useState(false); 

  // Backend'den çekilecek demo veriler (GÜNCELLEME: ozellik_... alanları eklendi)
   const projectData = {
    proje_adi: `Karaman Towers ${projectId}`, firma_adi: "İnşaat A.Ş.", emlak_tipi: "konut", il: "70", ilce: "701", metrekare: "120-180 m²", proje_alani: "15.000 m²", teslim_tarihi: "2026-12-31", proje_sahibi: "Ahmet Bey", konut_sayisi: 150, status: true, aciklama: "Proje açıklaması...", iletisim: "İletişim bilgileri...", proje_logo: "/images/demo/office-logo-placeholder.png", firma_logo: "/images/demo/office-logo-placeholder.png", vaziyet_plani: "/images/demo/plan-placeholder.pdf", latitude: "37.1813", longitude: "33.2154", seo_title: "SEO Başlık", seo_keywords: "seo, anahtar", seo_description: "SEO Açıklama", 
    // Checkbox demo verileri (artık tanımlı)
    ozellik_saglik: ["Hastane"], 
    ozellik_egitim: ["Okul"], 
    ozellik_ulasim: ["Anayol", "Otobüs Durağı"],
    ozellik_guvenlik: ["Güvenlik", "24 Saat Güvenlik"],
    ozellik_eglence: ["Alışveriş Merkezi", "Park"],
    ozellik_teknik: ["Fiber İnternet"],
    ozellik_spor: ["Fitness Merkezi"],
    ozellik_otopark: ["Kapalı Otopark"],
    yakin_yer: ["Okul", "Hastane", "Market"] 
  };

  // Demo Checkbox Seçenekleri
  const saglikOptions = ["Hastane", "Sağlık Ocağı"]; const egitimOptions = ["Okul", "Üniversite"]; const ulasimOptions = ["Anayol", "Dolmuş", "Metrobüs", "TEM", "Boğaz Köprüleri", "E-5", "Minibüs", "Tramvay", "Cadde", "Havaalanı", "Otobüs Durağı", "Tren İstasyonu", "Deniz Otobüsü", "Metro", "Sahil", "İskele"]; const guvenlikOptions = ["Güvenlik", "Kapalı Devre TV", "24 Saat Güvenlik"]; const eglenceOptions = ["Alışveriş Merkezi", "Park", "Sinema", "Kafe/Bar"]; const teknikOptions = ["ADSL", "Fiber İnternet", "Jeneratör", "Uydu", "Klima"]; const sporSpaOptions = ["Yüzme Havuzu (Açık)", "Yüzme Havuzu (Kapalı)", "Sauna", "Fitness Merkezi", "Spa"]; const otoparkOptions = ["Kapalı Otopark", "Açık Otopark", "Vale"]; const yakinYerler = ["Okul", "Hastane", "Market", "Park", "Toplu Taşıma", "Polis Merkezi"];


  return (
    <form className="flex flex-col gap-6">
      
      {/* ... (Başlık ve Geri Butonu aynı) ... */}
       <div className="flex items-center justify-between"> <h1 className="text-3xl font-bold text-gray-800">Proje Düzenle: {projectData.proje_adi}</h1> <Link href="/dashboard/projeler" className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300">Geri Dön</Link> </div>

      {/* 2 Sütunlu Yapı */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sol Sütun */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Genel Bilgiler */}
          <DashboardCard title="Proje Genel Bilgileri">
            {/* ... (Genel Bilgiler içeriği aynı, defaultValue'lar eklendi) ... */}
             <div className="p-5 space-y-6"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> <div className="lg:col-span-2"> <FormRowInput label="Proje Adı" name="proje_adi" defaultValue={projectData.proje_adi} /> </div> <FormRowInput label="Proje Firması" name="firma_adi" defaultValue={projectData.firma_adi} /> <FormRowSelect label="Proje Emlak Tipi" name="emlak_tipi" defaultValue={projectData.emlak_tipi}><option value="">Seçiniz</option><option value="konut">Konut</option><option value="isyeri">İş Yeri</option><option value="karma">Karma</option></FormRowSelect> <FormRowSelect label="Proje İli" name="il" defaultValue={projectData.il}><option value="">Seçiniz</option><option value="70">Karaman</option></FormRowSelect> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t pt-6"> <FormRowSelect label="Proje İlçesi" name="ilce" defaultValue={projectData.ilce}><option value="">Seçiniz</option><option value="701">Merkez</option></FormRowSelect> <FormRowInput label="Metrekare Aralığı" name="metrekare" defaultValue={projectData.metrekare} /> <FormRowInput label="Proje Alanı" name="proje_alani" defaultValue={projectData.proje_alani} /> <FormRowInput label="Proje Teslim Tarihi" name="teslim_tarihi" type="date" defaultValue={projectData.teslim_tarihi}/> </div> </div>
          </DashboardCard>

          {/* Proje Özellikleri */}
           <DashboardCard title="Proje Özellikleri ve Olanakları">
              {/* GÜNCELLEME: defaultValues prop'ları doğru objeden okunuyor */}
              <div className="p-5 space-y-8 divide-y divide-gray-200"> 
                 <CheckboxGroup title="Sağlık" options={saglikOptions} namePrefix="ozellik_saglik" defaultValues={projectData.ozellik_saglik || []}/> 
                 <div className="pt-6"><CheckboxGroup title="Eğitim" options={egitimOptions} namePrefix="ozellik_egitim" defaultValues={projectData.ozellik_egitim || []}/></div>
                 <div className="pt-6"><CheckboxGroup title="Ulaşım" options={ulasimOptions} namePrefix="ozellik_ulasim" defaultValues={projectData.ozellik_ulasim || []}/></div>
                 <div className="pt-6"><CheckboxGroup title="Güvenlik" options={guvenlikOptions} namePrefix="ozellik_guvenlik" defaultValues={projectData.ozellik_guvenlik || []}/></div>
                 <div className="pt-6"><CheckboxGroup title="Eğlence & Alışveriş" options={eglenceOptions} namePrefix="ozellik_eglence" defaultValues={projectData.ozellik_eglence || []}/></div>
                 <div className="pt-6"><CheckboxGroup title="Teknik Detay" options={teknikOptions} namePrefix="ozellik_teknik" defaultValues={projectData.ozellik_teknik || []}/></div>
                 <div className="pt-6"><CheckboxGroup title="Spor ve SPA Olanakları" options={sporSpaOptions} namePrefix="ozellik_spor" defaultValues={projectData.ozellik_spor || []}/></div>
                 <div className="pt-6"><CheckboxGroup title="Otopark" options={otoparkOptions} namePrefix="ozellik_otopark" defaultValues={projectData.ozellik_otopark || []}/></div>
              </div>
           </DashboardCard>
           
           {/* Yakın Yerler */}
           <DashboardCard title="Yakın Yerler">
               <div className="p-5">
                   <CheckboxGroup title="" options={yakinYerler} namePrefix="yakin_yer" defaultValues={projectData.yakin_yer || []}/> 
               </div>
           </DashboardCard>

          {/* Açıklama ve İletişim */}
          <DashboardCard title="Açıklama ve İletişim"> 
            <div className="p-5 space-y-6">
                <RichTextEditor label="Proje Açıklaması" name="aciklama" defaultValue={projectData.aciklama}/> 
                <RichTextEditor label="İletişim Bilgileri" name="iletisim" defaultValue={projectData.iletisim}/> 
            </div> 
          </DashboardCard>

           {/* Galeri */}
           <DashboardCard title="Proje Resimleri"> 
              <div className="p-5"><DragDropArea label="" name="galeri_resimleri" accept="image/*" /></div> 
           </DashboardCard>

           {/* Kat Planları */}
           <DashboardCard title="Proje Kat Planları"> 
              <div className="p-5"> <p className="text-sm text-gray-600 mb-4">Projenin kat planlarını eklemek ve yönetmek için aşağıdaki butonu kullanın.</p> <Link href={`/dashboard/projeler/planlar/${projectId}`} className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> <PlusCircle size={18} className="mr-2"/> Kat Planlarını Yönet </Link> </div> 
           </DashboardCard>

           {/* SEO Ayarları */}
           <DashboardCard> 
             <div className="flex items-center justify-between p-5 cursor-pointer bg-gray-50 rounded-t-lg" onClick={() => setShowSeoSettings(!showSeoSettings)}> <h2 className="text-lg font-semibold text-gray-700">SEO Ayarları</h2> {showSeoSettings ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />} </div> 
             {showSeoSettings && ( <div className="p-5 space-y-6 border-t border-gray-200"> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <FormRowInput label="SEO Başlık" name="seo_title" defaultValue={projectData.seo_title} /> <FormRowInput label="SEO Anahtar Kelimeler" name="seo_keywords" defaultValue={projectData.seo_keywords} /> </div> <FormRow label="SEO Açıklama"> <textarea name="seo_description" rows={3} defaultValue={projectData.seo_description} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" /> </FormRow> </div> )} 
          </DashboardCard>
        </div>
        
        {/* Kenar Çubuğu (Sağ Taraf) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          
          {/* Yayınlama Kartı */}
          <DashboardCard title="Yayınlama ve Detaylar"> 
              <div className="p-5 space-y-4 divide-y divide-gray-200"> 
                  <div className="pt-2 first:pt-0"><ToggleSwitch label="Durum (Aktif/Pasif)" name="status" defaultChecked={projectData.status} /></div> 
                  <div className="pt-4"><FormRowInput label="Proje Teslim Tarihi" name="teslim_tarihi" type="date" defaultValue={projectData.teslim_tarihi}/></div> 
                  <div className="pt-4"><FormRowInput label="Proje Konut Sayısı" name="konut_sayisi" type="number" defaultValue={projectData.konut_sayisi?.toString()} /></div> 
                  <div className="pt-4"><FormRowInput label="Proje Sahibi" name="proje_sahibi" defaultValue={projectData.proje_sahibi}/></div> 
              </div> 
              {/* Güncelle Butonu */}
              <div className="flex items-center justify-end gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"> Güncelle </button> </div> 
          </DashboardCard>

          {/* Görseller ve Planlar Kartı */}
          <DashboardCard title="Logo ve Vaziyet Planı"> 
             <div className="p-5 space-y-4"> 
                <FileInput label="Proje Logosu" name="proje_logo" accept="image/*" currentFileUrl={projectData.proje_logo} /> 
                <FileInput label="Firma Logosu" name="firma_logo" accept="image/*" currentFileUrl={projectData.firma_logo} /> 
                <FileInput label="Proje Vaziyet Planı" name="vaziyet_plani" accept="image/*,application/pdf" currentFileUrl={projectData.vaziyet_plani} /> 
                 <div className="flex justify-end space-x-2 mt-4 pt-4 border-t">
                    <button type="button" className="text-xs text-red-600 hover:underline">Logo Sil</button>
                    <button type="button" className="text-xs text-red-600 hover:underline">Firma Logosu Sil</button>
                    <button type="button" className="text-xs text-red-600 hover:underline">Vaziyet Planı Sil</button>
                 </div>
             </div> 
           </DashboardCard>

           {/* Konum Kartı */}
           <DashboardCard title="Konum (Harita)"> 
             <div className="p-5 space-y-4"> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                   <FormRowInput label="Enlem (Latitude)" name="latitude" defaultValue={projectData.latitude} /> 
                   <FormRowInput label="Boylam (Longitude)" name="longitude" defaultValue={projectData.longitude} /> 
                </div> 
                <div className="mt-4 h-64 bg-gray-100 border border-gray-300 rounded-md flex flex-col items-center justify-center text-center p-4"> <MapPin size={32} className="text-gray-400 mb-2"/> <p className="text-sm font-medium text-gray-600">Harita Alanı</p> <p className="text-xs text-gray-500">[Harita yüklenemedi...]</p> <p className="mt-2 text-xs text-gray-500 italic">Not: Harita entegrasyonu daha sonra yapılacaktır.</p> </div> 
              </div> 
           </DashboardCard>
        </div>
      </div>
       {/* Butonlar (En Altta) */}
        <div className="flex items-center justify-between gap-4 mt-6"> 
           <Link href="/dashboard/projeler" className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700">Önceki Sayfaya Git </Link>
          <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700">Güncelle </button>
        </div>
    </form>
  );
}