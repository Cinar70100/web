import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";

export const metadata: Metadata = {
  title: "Güncelleme Kontrolü",
  robots: {
    index: false,
    follow: false,
  },
};

const currentVersion = "V";
const newVersion = "V1.0";

export default function UpdateCheckPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        Güncelleme Kontrolü
      </h1>

      {/* 2. Güncelleme Durum Kutuları */}
      <div className="rounded-lg border border-green-200 bg-green-50 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-green-800">Mevcut Versiyon</span>
          <Badge text={currentVersion} type="success" />
        </div>
      </div>
      
      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-5 shadow-sm">
        <p className="text-sm font-medium text-yellow-800">
          Yeni Sürüm Mevcut ({newVersion}), Güncelle Butonuna Tıklayıp Sistemi Güncelleyebilirsiniz.
        </p>
      </div> {/* <-- DÜZELTME: Burası </DİV> yerine </div> olarak düzeltildi. */}

      {/* 3. Güncelleme Butonu */}
      <div>
        <button
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Sistemi Güncelle
        </button>
      </div>

      {/* 4. Güncelleme Günlüğü Kartı */}
      <DashboardCard title="Güncelleme Günlüğü">
        <div className="p-5">
          <article className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-gray-800">
            <div>
              <h3>1.0 (24 Ekim 2025)</h3>
              <ol>
                <li>Sistem İyileştirmeleri Yapıldı.</li>
                <li>Hata Çözümlemeleri Sağlandı.</li>
               
              </ol>
            </div>
            
            <div className="mt-4">
              <h3>1.1 (24 Ekim 2025)</h3>
              <ol>
                <li>Emlak İlan Yazılımı V1 Yayınlandı.</li>
              </ol>
            </div>
          </article>
        </div>
      </DashboardCard>
    </div>
  );
}