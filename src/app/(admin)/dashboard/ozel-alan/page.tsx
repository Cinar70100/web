import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
// GÜNCELLEME: Badge import'u kaldırıldı, Kategori bilgisi için Badge kullanılmayacak.
import Pagination from "@/components/admin/Pagination"; 
import { Pencil, Trash2, CheckCircle2, XCircle } from 'lucide-react'; 

export const metadata: Metadata = {
  title: "Tüm Özel Alanlar",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (GÜNCELLEME: 'kategori' eklendi, 'status' kaldırıldı)
const customFields = [
  { id: 1, name: "Metrekare (m²)", type: "input", kategori: "Konut, İş Yeri", required: true },
  { id: 2, name: "Oda Sayısı", type: "select", kategori: "Konut", required: true },
  { id: 3, name: "Banyo Sayısı", type: "select", kategori: "Konut", required: false },
  { id: 4, name: "Bina Yaşı", type: "input", kategori: "Konut, Bina", required: false },
  { id: 5, name: "Cephe", type: "checkbox", kategori: "Konut, Arsa", required: false },
];

export default function AllCustomFieldsPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Yeni Ekle Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Özel Alan Yönetimi
        </h1>
        <Link 
          href="/dashboard/ozel-alan/yeni" 
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Yeni Özel Alan Ekle
        </Link>
      </div>

      {/* 2. Özel Alan Tablosu Kartı */}
      <DashboardCard title="Tüm Özel Alanlar">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* GÜNCELLEME: Sütunlar sizin listenize göre ayarlandı */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İsim</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tür</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kategori</th> 
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">Zorunluluk</th> 
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {customFields.map((field) => (
                <tr key={field.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{field.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{field.type}</td>
                  {/* GÜNCELLEME: Kategori sütunu eklendi */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{field.kategori}</td> 
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-center">
                    {field.required ? (
                      <CheckCircle2 size={18} className="text-green-500 inline-block" /> 
                    ) : (
                      <XCircle size={18} className="text-red-500 inline-block" /> 
                    )}
                  </td>
                   {/* GÜNCELLEME: Durum sütunu kaldırıldı */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/ozel-alan/duzenle/${field.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
                        <Pencil size={18} />
                      </Link>
                      <button className="text-red-600 hover:text-red-900" title="Sil">
                        <Trash2 size={18} />
                      </button>
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