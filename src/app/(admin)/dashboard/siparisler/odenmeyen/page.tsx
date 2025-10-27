import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import Badge from "@/components/admin/dashboard/Badge";
import Pagination from "@/components/admin/Pagination";
// GÜNCELLEME: İkonlar güncellendi (Sadece Trash2) - Eye kaldırıldı
import { Trash2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Ödenmeyen Siparişler", 
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (GÜNCELLEME: Yeni sütunlara göre ve 'Ödeme Bekliyor')
const unpaidOrders = [
  { id: 102, listingId: 456, listingTitle: "Ermenek Arsa", packageName: "Acil Acil", duration: "1 Ay", amount: "150.00 TL", status: "Ödeme Bekliyor", date: "25.10.2025 18:00" },
  { id: 104, listingId: 101, listingTitle: "Yeni Villa", packageName: "Vitrin", duration: "30 Gün", amount: "200.00 TL", status: "Ödeme Bekliyor", date: "26.10.2025 10:00" },
];

export default function UnpaidOrdersPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
       <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Ödenmeyen Siparişler
        </h1>
      </div>

      {/* GÜNCELLEME: Filtreleme Kartı Kaldırıldı (Ödenmeyenler sayfasında genellikle olmaz) */}

      {/* 2. Sipariş Tablosu Kartı (Başlığı güncellendi) */}
      <DashboardCard title="Ödenmeyen Siparişler">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Tablo Başlıkları (GÜNCELLEME: Yeni listeye göre) */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İlan</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Paket</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kullanım Süresi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ücret</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tarih</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {unpaidOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-blue-600 hover:text-blue-800">
                     <Link href={`/ilan/${order.listingId}`} target="_blank" title={order.listingTitle}>
                        #{order.listingId} 
                     </Link>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{order.packageName}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{order.duration}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{order.amount}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    {/* Durum hep 'Ödeme Bekliyor' */}
                    <Badge
                      text={order.status}
                      type={'warning'}
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{order.date}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    {/* İşlemler (Sadece Sil) */}
                    <button className="text-red-600 hover:text-red-900" title="Siparişi Sil">
                      <Trash2 size={18} />
                    </button>
                    {/* Belki 'Ödendi İşaretle' butonu eklenebilir */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={1} totalPages={1} />
      </DashboardCard>
    </div>
  );
}