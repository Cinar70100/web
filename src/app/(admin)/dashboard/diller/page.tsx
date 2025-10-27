import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination";
import { Pencil, Trash2 } from 'lucide-react'; 

export const metadata: Metadata = {
  title: "Tüm Diller",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (index.volt'a göre)
const languages = [
  { id: 1, name: "Türkçe", code: "tr", order: 1, status: "Aktif" },
  { id: 2, name: "English", code: "en", order: 2, status: "Aktif" },
  { id: 3, name: "Deutsch", code: "de", order: 3, status: "Pasif" },
];

export default function AllLanguagesPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı ve Yeni Ekle Butonu (index.volt'a göre) */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Dil Yönetimi
        </h1>
        <Link
          href="/dashboard/diller/yeni"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Yeni Dil Ekle
        </Link>
      </div>

       {/* Filtre Kartı (index.volt'ta yok) */}

      {/* 2. Dil Tablosu Kartı */}
      <DashboardCard title="Tüm Diller">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Tablo Başlıkları (index.volt'a göre) */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Dil Adı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Dil Kodu</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Sıra</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {languages.map((lang) => (
                <tr key={lang.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{lang.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 font-mono">{lang.code}</td> 
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{lang.order}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge
                      text={lang.status}
                      type={lang.status === 'Aktif' ? 'success' : 'danger'}
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/diller/duzenle/${lang.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
                        <Pencil size={18} />
                      </Link>
                      {lang.code !== 'tr' && ( 
                        <button className="text-red-600 hover:text-red-900" title="Sil">
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3. Sayfalama Bileşeni */}
        <Pagination currentPage={1} totalPages={1} /> 
      </DashboardCard>
    </div>
  );
}