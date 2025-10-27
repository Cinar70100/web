import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination";
import { Pencil, Trash2 } from 'lucide-react'; // İkonları import et

export const metadata: Metadata = {
  title: "Tüm Yardım İçerikleri",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (Görseldeki sütunlara göre)
const helpContents = [
  { id: 1, order: 1, title: "Nasıl ilan verilir?", status: "Aktif" },
  { id: 2, order: 2, title: "Üyelik tipleri nelerdir?", status: "Aktif" },
  { id: 3, order: 3, title: "Şifremi unuttum", status: "Pasif" },
];

export default function AllHelpContentsPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı ve Yeni Ekle Butonu (Görseldeki gibi) */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yardım İçerik Yönetimi
        </h1>
        <Link
          href="/dashboard/yardim/yeni" // Yardım içeriği ekleme sayfasına link
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Yeni İçerik Ekle
        </Link>
      </div>

       {/* Filtre Kartı (Görselde yok) */}

      {/* 2. Yardım İçerik Tablosu Kartı */}
      <DashboardCard title="Tüm Yardım İçerikleri">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Tablo Başlıkları (Görseldeki gibi) */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Sıra</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Başlık</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {helpContents.map((content) => (
                <tr key={content.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{content.order}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{content.title}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge
                      text={content.status}
                      type={content.status === 'Aktif' ? 'success' : 'danger'}
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/yardim/duzenle/${content.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
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

        {/* 3. Sayfalama Bileşeni (Görseldeki gibi) */}
        <Pagination currentPage={1} totalPages={1} /> {/* Demo için 1 sayfa */}
      </DashboardCard>
    </div>
  );
}