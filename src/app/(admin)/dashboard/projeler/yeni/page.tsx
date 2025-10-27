'use client'; 

// import type { Metadata } from "next"; 
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow, FormRowSelect } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";
import { ChevronDown, ChevronUp, Image as ImageIcon, MapPin, UploadCloud, PlusCircle } from "lucide-react"; 
import { useState } from "react"; 

/*
export const metadata: Metadata = {
  title: "Yeni Proje Ekle",
  robots: { index: false, follow: false },
};
*/

// RTE Taklidi Bileşeni
const RichTextEditor = ({ label, name, rows = 10 }: { label: string; name: string; rows?: number }) => (
    <div className="py-2"> 
     <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label> 
    <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden">
       {/* ... (Toolbar Simülasyonu aynı) ... */}
       <div className="bg-gray-100 p-2 border-b border-gray-200 flex flex-wrap gap-2 text-gray-700 text-sm"> <span className="font-medium">Dosya</span> <span className="font-medium">Düzenle</span> <span className="font-medium">Görünüm</span> <span className="font-medium">Ekle</span> <span className="font-medium">Biçim</span> <span className="font-medium">Araçlar</span> <span className="font-medium">Tablo</span> <span className="ml-auto text-xs text-gray-500">WORDS POWERED BY TINY</span> </div>
       <div className="p-2 border-b border-gray-200 flex flex-wrap gap-x-3 gap-y-1 text-gray-600"> <span className="font-bold">B</span> <span className="italic">I</span> <span className="underline">U</span> <span><ImageIcon size={16} /></span> </div>
      <textarea name={name} rows={rows} className="block w-full resize-y border-0 focus:ring-0 sm:text-sm p-3" placeholder="İçeriği buraya yazın..." />
    </div>
     <p className="mt-1 text-xs text-gray-500 italic">Not: Bu alan ileride profesyonel bir metin editörü ile değiştirilecektir.</p>
  </div>
);

// Checkbox Grubu Bileşeni
const CheckboxGroup = ({ title, options, namePrefix }: { title?: string; options: string[]; namePrefix: string }) => (
  // GÜNCELLEME: className prop'u kaldırıldı, dikey boşluk parent tarafından yönetilecek (pt-6)
  <div> 
    {title && <h3 className="text-md font-semibold text-gray-700 mb-3">{title}</h3>}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-3"> 
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          <input id={`${namePrefix}-${index}`} name={`${namePrefix}[]`} type="checkbox" value={option} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <label htmlFor={`${namePrefix}-${index}`} className="ml-2 block text-sm text-gray-900">{option}</label>
        </div>
      ))}
    </div>
  </div>
);

// Dosya Yükleme Bileşeni
const FileInput = ({ label, name, accept, multiple = false }: { label: string; name: string; accept?: string; multiple?: boolean }) => (
   <FormRow label={label}>
       <input type="file" name={name} accept={accept} multiple={multiple} className="block w-full text-sm text-gray-500 mt-1 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" />
   </FormRow>
);

// Sürükle-Bırak Alanı Tasarımı
const DragDropArea = ({ label, name, accept }: { label: string; name: string; accept?: string }) => (
  <FormRow label={label}>
    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
      <div className="space-y-1 text-center">
        <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
        <div className="flex text-sm text-gray-600">
          <label htmlFor={name} className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500">
            <span>Dosya yükle</span>
            <input id={name} name={name} type="file" className="sr-only" multiple accept={accept} />
          </label>
          <p className="pl-1">veya sürükleyip bırakın</p>
        </div>
        <p className="text-xs text-gray-500">Yüklemek İstediğiniz Fotoğrafları Buraya Sürükleyin.</p>
        <p className="text-xs text-gray-500">PNG, JPG, GIF (Max. Boyut)</p>
      </div>
    </div>
     <p className="mt-1 text-xs text-gray-500 italic">
       Not: Sürükle-bırak işlevselliği daha sonra eklenecektir.
     </p>
  </FormRow>
);


export default function AddProjectPage() {
  const [showSeoSettings, setShowSeoSettings] = useState(false); 

  // Demo Checkbox Seçenekleri (GÜNCELLEME: yakinYerler tanımı eklendi/doğrulandı)
  const saglikOptions = ["Hastane", "Sağlık Ocağı"];
  const egitimOptions = ["Okul", "Üniversite"];
  const ulasimOptions = ["Anayol", "Dolmuş", "Metrobüs", "TEM", "Boğaz Köprüleri", "E-5", "Minibüs", "Tramvay", "Cadde", "Havaalanı", "Otobüs Durağı", "Tren İstasyonu", "Deniz Otobüsü", "Metro", "Sahil", "İskele"];
  const guvenlikOptions = ["Güvenlik", "Kapalı Devre TV", "24 Saat Güvenlik"];
  const eglenceOptions = ["Alışveriş Merkezi", "Park", "Sinema", "Kafe/Bar"];
  const teknikOptions = ["ADSL", "Fiber İnternet", "Jeneratör", "Uydu", "Klima"];
  const sporSpaOptions = ["Yüzme Havuzu (Açık)", "Yüzme Havuzu (Kapalı)", "Sauna", "Fitness Merkezi", "Spa"];
  const otoparkOptions = ["Kapalı Otopark", "Açık Otopark", "Vale"];
  const yakinYerler = ["Okul", "Hastane", "Market", "Park", "Toplu Taşıma", "Polis Merkezi"]; // <-- BU TANIMIN VARLIĞINI KONTROL EDİN


  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Yeni Proje Ekle</h1>
        <Link href="/dashboard/projeler" className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300">
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. Ana Form Alanı (2 Sütunlu Yerleşim) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Ana Sütun (Sol Taraf) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Genel Bilgiler */}
          <DashboardCard title="Proje Genel Bilgileri">
            <div className="p-5 space-y-6"> 
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* GÜNCELLEME: className prop'u kaldırıldı */}
                 <div className="lg:col-span-2"> {/* Spanning için parent div kullanıldı */}
                   <FormRowInput label="Proje Adı" name="proje_adi" placeholder="Projenin adı" /> 
                 </div>
                 <FormRowInput label="Proje Firması" name="firma_adi" placeholder="İnşaat firması" /> 
                 <FormRowSelect label="Proje Emlak Tipi" name="emlak_tipi"><option value="">Seçiniz</option><option value="konut">Konut</option><option value="isyeri">İş Yeri</option><option value="karma">Karma</option></FormRowSelect> 
                 <FormRowSelect label="Proje İli" name="il"><option value="">Seçiniz</option><option value="70">Karaman</option></FormRowSelect>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t pt-6"> 
                  <FormRowSelect label="Proje İlçesi" name="ilce"><option value="">Seçiniz</option><option value="701">Merkez</option></FormRowSelect> 
                  <FormRowInput label="Metrekare Aralığı" name="metrekare" placeholder="Örn: 120-180 m²" /> 
                  <FormRowInput label="Proje Alanı" name="proje_alani" placeholder="Örn: 15.000 m²" /> 
                  <FormRowInput label="Proje Teslim Tarihi" name="teslim_tarihi" type="date" /> 
              </div>
            </div>
          </DashboardCard>

          {/* Proje Özellikleri */}
           <DashboardCard title="Proje Özellikleri ve Olanakları">
              {/* GÜNCELLEME: className prop'ları kaldırıldı, dikey boşluk parent'tan (space-y-8) */}
              <div className="p-5 space-y-8 divide-y divide-gray-200"> 
                 <CheckboxGroup title="Sağlık" options={saglikOptions} namePrefix="ozellik_saglik" />
                 <div className="pt-6"><CheckboxGroup title="Eğitim" options={egitimOptions} namePrefix="ozellik_egitim"/></div>
                 <div className="pt-6"><CheckboxGroup title="Ulaşım" options={ulasimOptions} namePrefix="ozellik_ulasim"/></div>
                 <div className="pt-6"><CheckboxGroup title="Güvenlik" options={guvenlikOptions} namePrefix="ozellik_guvenlik"/></div>
                 <div className="pt-6"><CheckboxGroup title="Eğlence & Alışveriş" options={eglenceOptions} namePrefix="ozellik_eglence"/></div>
                 <div className="pt-6"><CheckboxGroup title="Teknik Detay" options={teknikOptions} namePrefix="ozellik_teknik"/></div>
                 <div className="pt-6"><CheckboxGroup title="Spor ve SPA Olanakları" options={sporSpaOptions} namePrefix="ozellik_spor"/></div>
                 <div className="pt-6"><CheckboxGroup title="Otopark" options={otoparkOptions} namePrefix="ozellik_otopark"/></div>
              </div>
           </DashboardCard>
           
           {/* Yakın Yerler */}
           <DashboardCard title="Yakın Yerler">
               <div className="p-5">
                   {/* GÜNCELLEME: options={yakinYerler} doğrulandı */}
                   <CheckboxGroup title="" options={yakinYerler} namePrefix="yakin_yer" />
               </div>
           </DashboardCard>

          {/* ... (Açıklama/İletişim, Galeri, Kat Planları, SEO - Değişiklik yok) ... */}
          <DashboardCard title="Açıklama ve İletişim"> <div className="p-5 space-y-6"><RichTextEditor label="Proje Açıklaması" name="aciklama" /> <RichTextEditor label="İletişim Bilgileri" name="iletisim" /> </div> </DashboardCard>
          <DashboardCard title="Proje Resimleri"> <div className="p-5"><DragDropArea label="" name="galeri_resimleri" accept="image/*" /></div> </DashboardCard>
          <DashboardCard title="Proje Kat Planları"> <div className="p-5"> <p className="text-sm text-gray-600 mb-4">Projenin kat planlarını eklemek ve yönetmek için aşağıdaki butonu kullanın.</p> <Link href="/dashboard/projeler/planlar/yeni" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> <PlusCircle size={18} className="mr-2"/> Kat Planlarını Yönet </Link> </div> </DashboardCard>
          <DashboardCard> <div className="flex items-center justify-between p-5 cursor-pointer bg-gray-50 rounded-t-lg" onClick={() => setShowSeoSettings(!showSeoSettings)}> <h2 className="text-lg font-semibold text-gray-700">SEO Ayarları</h2> {showSeoSettings ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />} </div> {showSeoSettings && ( <div className="p-5 space-y-6 border-t border-gray-200"> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <FormRowInput label="SEO Başlık" name="seo_title" placeholder="Google'da görünecek başlık" /> <FormRowInput label="SEO Anahtar Kelimeler" name="seo_keywords" placeholder="Virgülle ayırın" /> </div> <FormRow label="SEO Açıklama"> <textarea name="seo_description" rows={3} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Google'da görünecek açıklama" /> </FormRow> </div> )} </DashboardCard>
        </div>
        
        {/* Kenar Çubuğu (Sağ Taraf) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* ... (Yayınlama, Logo/Vaziyet, Konum Kartları - Değişiklik yok) ... */}
          <DashboardCard title="Yayınlama ve Detaylar"> <div className="p-5 space-y-4 divide-y divide-gray-200"> <div className="pt-2 first:pt-0"><ToggleSwitch label="Durum (Aktif/Pasif)" name="status" defaultChecked={true} /></div> <div className="pt-4"><FormRowInput label="Proje Teslim Tarihi" name="teslim_tarihi" type="date" /></div> <div className="pt-4"><FormRowInput label="Proje Konut Sayısı" name="konut_sayisi" type="number" placeholder="Örn: 150" /></div> <div className="pt-4"><FormRowInput label="Proje Sahibi" name="proje_sahibi" placeholder="Sahibinin adı" /></div> </div> <div className="flex items-center justify-end gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"> Kaydet </button> </div> </DashboardCard>
          <DashboardCard title="Logo ve Vaziyet Planı"> <div className="p-5 space-y-4"> <FileInput label="Proje Logosu" name="proje_logo" accept="image/*" /> <FileInput label="Firma Logosu" name="firma_logo" accept="image/*" /> <FileInput label="Proje Vaziyet Planı" name="vaziyet_plani" accept="image/*,application/pdf" /> </div> </DashboardCard>
          <DashboardCard title="Konum (Harita)"> <div className="p-5 space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <FormRowInput label="Enlem (Latitude)" name="latitude" placeholder="Örn: 37.1813" /> <FormRowInput label="Boylam (Longitude)" name="longitude" placeholder="Örn: 33.2154" /> </div> <div className="mt-4 h-64 bg-gray-100 border border-gray-300 rounded-md flex flex-col items-center justify-center text-center p-4"> <MapPin size={32} className="text-gray-400 mb-2"/> <p className="text-sm font-medium text-gray-600">Harita Alanı</p> <p className="text-xs text-gray-500">[Bu sayfa Google Haritalar'ı düzgün şekilde yükleyemedi. Teknik ayrıntılar için JavaScript konsoluna bakın.]</p> <p className="mt-2 text-xs text-gray-500 italic">Not: Harita entegrasyonu daha sonra yapılacaktır.</p> </div> </div> </DashboardCard>
        </div>
      </div>
       {/* Butonlar (En Altta) */}
        <div className="flex items-center justify-between gap-4 mt-6"> 
           <Link href="/dashboard/projeler" className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700">Önceki Sayfaya Git </Link>
          <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700">Kaydet </button>
        </div>
    </form>
  );
}
