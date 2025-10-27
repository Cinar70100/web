import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination";
import { Pencil, Trash2 } from 'lucide-react'; // İkonları import et

export const metadata: Metadata = {
  title: "Tüm Haber Kategorileri",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri
const newsCategories = [
  { id: 1, order: 1, name: "Karaman Haberleri", color: "#3B82F6", status: "Aktif" },
  { id: 2, order: 2, name: "Gayrimenkul Terimleri", color: "#10B981", status: "Aktif" },
  { id: 3, order: 3, name: "Gayrimenkulde Tapu", color: "#F59E0B", status: "Pasif" },
];

// Renk kutusunu göstermek için küçük bir bileşen
const ColorSquare = ({ color }: { color: string }) => (
  <span 
    className="inline-block w-4 h-4 rounded border border-gray-300 mr-2" 
    style={{ backgroundColor: color }}
  ></span>
);

export default function AllNewsCategoriesPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı ve Yeni Ekle Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Haber Kategorileri
        </h1>
        <Link
          href="/dashboard/haber-kategorileri/yeni"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Yeni Kategori Ekle
        </Link>
      </div>

       {/* Filtre Kartı (Basit Arama Eklenebilir) */}
       <DashboardCard>
          <form className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <div>
                <label htmlFor="search_name" className="block text-sm font-medium text-gray-700 mb-1">Ara (Kategori Adı)</label>
                <input
                  type="text"
                  id="search_name"
                  name="search_name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              {/* Diğer filtreler (örn: Durum) eklenebilir */}
              <div className="md:col-span-3 flex justify-end"> {/* Butonu sağa yaslamak için */}
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Ara
                </button>
              </div>
            </div>
          </form>
       </DashboardCard>

      {/* 2. Kategori Tablosu Kartı */}
      <DashboardCard title="Tüm Haber Kategorileri">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Tablo Başlıkları */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Sıra</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kategori Adı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Renk</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {newsCategories.map((cat) => (
                <tr key={cat.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{cat.order}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{cat.name}</td>
                   {/* Renk Sütunu */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                     <ColorSquare color={cat.color} /> {cat.color.toUpperCase()}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge
                      text={cat.status}
                      type={cat.status === 'Aktif' ? 'success' : 'danger'}
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/dashboard/haber-kategorileri/duzenle/${cat.id}`} className="text-green-600 hover:text-green-900" title="Düzenle">
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
        <Pagination currentPage={1} totalPages={1} /> {/* Demo için 1 sayfa */}
      </DashboardCard>
    </div>
  );
}