'use client'; 

// import type { Metadata } from "next"; 
import Link from "next/link";
import { useSearchParams } from 'next/navigation'; 
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow, FormRowSelect } from "@/components/admin/form/FormHelpers"; 
// GÜNCELLEME: ToggleSwitch import'u kaldırıldı
import { Image as ImageIcon } from "lucide-react"; 

/*
export const metadata: Metadata = {
  title: "Kat Planı Düzenle",
  robots: { index: false, follow: false },
};
*/

// Dosya Yükleme Bileşeni (Mevcut dosyayı gösterme)
const FileInput = ({ label, name, accept, multiple = false, currentFileUrl }: { label: string; name: string; accept?: string; multiple?: boolean; currentFileUrl?: string }) => (
   <FormRow label={label}> {currentFileUrl && ( <div className="mb-2"> <Link href={currentFileUrl} target="_blank" className="text-xs text-blue-600 hover:underline">Mevcut Resim: {currentFileUrl.split('/').pop()}</Link> </div> )} <input type="file" name={name} accept={accept} multiple={multiple} className="block w-full text-sm text-gray-500 mt-1 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" /> {currentFileUrl && <p className="mt-1 text-xs text-gray-500">Yeni resim yüklerseniz mevcut resim değişir.</p>} </FormRow>
);


export default function EditPlanPage({ params }: { params: { planId: string } }) {
  const planId = params.planId; 
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId'); 

  // Backend'den çekilecek demo veriler
  const planData = {
    projectId: projectId || '1', 
    plan_tipi: "2+1", 
    metrekare: 120, 
    oda_sayisi: 2, 
    salon_sayisi: 1, 
    plan_resmi: "/images/demo/floor-plan-placeholder.png", 
    // status kaldırıldı
  };

   const projectName = `Proje ${planData.projectId}`;

  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Kat Planı Düzenle ({projectName}) 
        </h1>
        <Link 
          href={`/dashboard/projeler/planlar/${planData.projectId}`} 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. Plan Bilgileri Kartı (GÜNCELLEME: Yeni yerleşim) */}
      <DashboardCard title="Plan Bilgileri">
        {/* İçerik Alanı */}
        <div className="p-5 space-y-6"> {/* Ana dikey boşluk */}
           {/* Proje ID ve Plan ID (Gizli alanlar) */}
           <input type="hidden" name="project_id" value={planData.projectId} />
           <input type="hidden" name="plan_id" value={planId} />

           {/* Üst Satır: M2, Oda, Salon, Plan Tipi (Yan Yana) */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
               <FormRowInput label="M²" name="metrekare" type="number" defaultValue={planData.metrekare.toString()}/>
               <FormRowInput label="Oda Sayısı" name="oda_sayisi" type="number" defaultValue={planData.oda_sayisi.toString()}/>
               <FormRowInput label="Salon Sayısı" name="salon_sayisi" type="number" defaultValue={planData.salon_sayisi.toString()}/>
              <FormRowSelect label="Plan Tipi" name="plan_tipi" defaultValue={planData.plan_tipi}>
                 <option value="">Seçiniz</option>
                 <option value="1+1">1+1</option> <option value="2+1">2+1</option> <option value="3+1">3+1</option> <option value="4+1">4+1</option> <option value="dublex">Dublex</option> <option value="diger">Diğer</option>
              </FormRowSelect>
           </div>

            {/* Kat Planı Resmi */}
            <div className="border-t pt-6">
               <FileInput label="Kat Planı Resmi" name="plan_resmi" accept="image/*" currentFileUrl={planData.plan_resmi}/>
            </div>
                      
        </div>

        {/* Kart Footer'ı - Butonlar (GÜNCELLEME) */}
        <div className="flex items-center justify-between gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> 
           {/* Sol Butonlar */}
           <div className="flex gap-4">
             {/* Önceki Sayfaya Git */}
              <Link
                href={`/dashboard/projeler/planlar/${planData.projectId}`} 
                className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
              >
                Önceki Sayfaya Git
              </Link>
               {/* Resim Sil Butonu */}
               {planData.plan_resmi && ( // Sadece resim varsa göster
                 <button
                    type="button" // Formu submit etmemeli
                    // onClick event'i backend'de eklenecek
                    className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700"
                  >
                    Resim Sil
                 </button>
               )}
           </div>
           {/* Sağ Buton */}
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