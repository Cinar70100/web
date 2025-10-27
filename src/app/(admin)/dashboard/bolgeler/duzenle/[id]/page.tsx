import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
// GÜNCELLEME: FormRowSelect kaldırıldı, sadece FormRowInput ve FormRow
import { FormRowInput, FormRow } from "@/components/admin/form/FormHelpers"; 

export const metadata: Metadata = {
  title: "Bölge Düzenle", 
  robots: {
    index: false,
    follow: false,
  },
};

// Dinamik etiket oluşturmak için yardımcı fonksiyon
const getLabelForType = (type: string | null | undefined): string => {
  switch (type) {
    case "Ülke": return "Ülke Adı";
    case "İl": return "İl Adı";
    case "İlçe": return "İlçe Adı";
    case "Semt": return "Semt Adı";
    case "Mahalle": return "Mahalle Adı";
    default: return "Bölge Adı";
  }
};

export default function EditRegionPage({ params }: { params: { id: string } }) {
  const regionId = params.id; 

  // Backend'den çekilecek demo veriler
  let regionData;
  if (regionId === '1') { 
     regionData = { id: 1, name: `Türkiye`, code: "TR", type: "Ülke", parentId: 0, parentName: null };
  } else if (regionId === '70') {
    regionData = { id: 70, name: `Karaman`, code: null, type: "İl", parentId: 1, parentName: "Türkiye" };
  } else if (regionId === '701') {
     regionData = { id: 701, name: `Merkez`, code: null, type: "İlçe", parentId: 70, parentName: "Karaman" };
  } else { // Diğerleri (Semt/Mahalle varsayımı)
    regionData = { id: parseInt(regionId), name: `Abbas Mh. ${regionId}`, code: null, type: "Mahalle", parentId: 701, parentName: "Merkez" };
  }
  
  const isCountry = regionData.type === "Ülke";
  const dynamicLabel = getLabelForType(regionData.type); // Dinamik etiket

  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Bölge Düzenle 
        </h1>
        <Link 
          href={regionData.parentId === 0 ? "/dashboard/bolgeler" : `/dashboard/bolgeler?parentId=${regionData.parentId}`} 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Geri Dön
        </Link>
      </div>

      {/* 2. Bölge Bilgileri Kartı */}
      <DashboardCard title="Bölge Bilgileri">
        {/* İçerik Alanı (GÜNCELLEME: Koşullu alanlar ve dinamik etiket) */}
        <div className="p-5 space-y-4 max-w-xl"> 
          
          {/* Eğer Ülke ise Kod ve Ad */}
          {isCountry ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormRowInput
                label="Bölge Kodu"
                name="region_code" 
                defaultValue={regionData.code || ""} 
                placeholder="Örn: TR"
                maxLength={2}
              />
               <FormRowInput
                label={dynamicLabel} // Ülke Adı
                name="region_name" 
                defaultValue={regionData.name} 
                placeholder="Bölge adını girin"
              />
            </div>
          ) : (
            // Eğer Ülke DEĞİLSE Sadece Ad (dinamik etiketle)
            <>
              <FormRowInput
                label={dynamicLabel} // İl Adı, İlçe Adı vb.
                name="region_name" 
                defaultValue={regionData.name} 
                placeholder="Bölge adını girin"
              />
               {/* Bölge Türü dropdown'ı KALDIRILDI */}
              {/* Üst Bölge bilgisi */}
              <div className="pt-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Üst Bölge:</span> {regionData.parentName || "Yok"}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Kart Footer'ı - Butonlar */}
        <div className="flex items-center justify-between gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> 
           <Link
            href={regionData.parentId === 0 ? "/dashboard/bolgeler" : `/dashboard/bolgeler?parentId=${regionData.parentId}`} 
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700"
          >
            Önceki Sayfaya Git 
          </Link>
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