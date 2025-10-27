'use client'; // Gerekirse

// import type { Metadata } from "next"; 
import Link from "next/link";
// GÜNCELLEME: useSearchParams import edildi
import { useSearchParams } from 'next/navigation'; 
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow, FormRowSelect } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";
import { Image as ImageIcon } from "lucide-react"; // FileInput içinde kullanılabilir

/*
export const metadata: Metadata = {
  title: "Yeni Kat Planı Ekle",
  robots: { index: false, follow: false },
};
*/

// Dosya Yükleme Bileşeni (Adım 81'den)
const FileInput = ({ label, name, accept, multiple = false, currentFileUrl }: { label: string; name: string; accept?: string; multiple?: boolean; currentFileUrl?: string }) => (
   <FormRow label={label}> {currentFileUrl && ( <div className="mb-2"> <Link href={currentFileUrl} target="_blank" className="text-xs text-blue-600 hover:underline">Mevcut Dosya: {currentFileUrl.split('/').pop()}</Link> </div> )} <input type="file" name={name} accept={accept} multiple={multiple} className="block w-full text-sm text-gray-500 mt-1 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" /> {currentFileUrl && <p className="mt-1 text-xs text-gray-500">Yeni dosya yüklerseniz mevcut dosya değişir.</p>} </FormRow>
);


export default function AddPlanPage() {
  const searchParams = useSearchParams();
  // URL'den projectId'yi al (örn: /yeni?projectId=1)
  const projectId = searchParams.get('projectId'); 

  // Backend'den proje adını çekmek için demo (projectId'ye göre)
  const projectName = `Proje ${projectId || 'Bilinmeyen'}`; // Demo

  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yeni Kat Planı Ekle ({projectName}) {/* Hangi projeye ait olduğunu belirtelim */}
        </h1>
        <Link 
          // Geri Dön butonu projenin plan listesine gitmeli
          href={`/dashboard/projeler/planlar/${projectId || ''}`} 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. Plan Bilgileri Kartı */}
      <DashboardCard title="Plan Bilgileri">
        {/* İçerik Alanı (Görseldeki gibi yerleşim) */}
        <div className="p-5 space-y-4"> 
           {/* Proje ID (Gizli alan olarak eklenebilir) */}
           <input type="hidden" name="project_id" value={projectId || ''} />

           {/* Plan Tipi, M2, Oda, Salon (Yan Yana) */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FormRowSelect label="Plan Tipi" name="plan_tipi">
                 <option value="">Seçiniz</option>
                 <option value="1+1">1+1</option>
                 <option value="2+1">2+1</option>
                 <option value="3+1">3+1</option>
                 <option value="4+1">4+1</option>
                 <option value="dublex">Dublex</option>
                 <option value="diger">Diğer</option>
              </FormRowSelect>
              <FormRowInput
                label="Metrekare (m²)"
                name="metrekare" 
                type="number"
                placeholder="Örn: 120"
              />
               <FormRowInput
                label="Oda Sayısı"
                name="oda_sayisi" 
                type="number"
                placeholder="Örn: 3"
              />
               <FormRowInput
                label="Salon Sayısı"
                name="salon_sayisi" 
                type="number"
                placeholder="Örn: 1"
              />
           </div>

            {/* Kat Planı Resmi */}
            <div className="border-t pt-6">
               <FileInput label="Resim
                   " name="plan_resmi" accept="image/*" />
           </div>
      
        </div>

        {/* Kart Footer'ı - Kaydet Butonu */}
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