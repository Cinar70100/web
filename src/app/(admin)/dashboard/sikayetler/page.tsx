import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
// GÜNCELLEME: Badge kaldırıldı, bu sütunlar Badge kullanmıyor
import Pagination from "@/components/admin/Pagination";
import { Eye, Trash2, CheckSquare } from 'lucide-react'; 

export const metadata: Metadata = {
  title: "Tüm İlan Şikayetleri",
  robots: {
    index: false,
    follow: false,
  },
};

// Demo veri (GÜNCELLEME: Sizin listenize göre)
const complaints = [
  { id: 1, name: "Ahmet Yılmaz", email: "ahmet@example.com", listingTitle: "Karaman Merkezde Satılık 3+1 Lüks Daire", listingId: 123, type: "Uygunsuz İçerik", comment: "İlan açıklaması yanıltıcı bilgiler içeriyor.", status: "Bekliyor" },
  { id: 2, name: "Ayşe Kaya", email: "ayse@example.com", listingTitle: "Ermenek Yolu Üzeri Satılık Arsa", listingId: 456, type: "Spam", comment: "Bu ilan sürekli tekrarlanıyor.", status: "İncelendi" },
  { id: 3, name: "Mehmet Demir", email: "mehmet@example.com", listingTitle: "Acil Devren Kiralık İş Yeri", listingId: 789, type: "Diğer", comment: "İlan sahibiyle iletişim kurulamıyor.", status: "Bekliyor" },
];

export default function AllComplaintsPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          İlan Şikayet Yönetimi
        </h1>
      </div>

       {/* Filtre Kartı (İstenirse eklenebilir) */}

      {/* 2. Şikayet Tablosu Kartı */}
      <DashboardCard title="Tüm İlan Şikayetleri">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Tablo Başlıkları (GÜNCELLEME: Sizin listenize göre) */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ad Soyad</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">E-Mail</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İlan Başlığı</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Şikayet Tipi</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Yorum</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {complaints.map((complaint) => (
                <tr key={complaint.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{complaint.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{complaint.email}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-blue-600 hover:text-blue-800">
                    <Link href={`/ilan/${complaint.listingId}`} target="_blank"> 
                      {complaint.listingTitle}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{complaint.type}</td>
                  {/* Yorum sütunu (kısa gösterim, tamamı title'da) */}
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={complaint.comment}>
                    {complaint.comment}
                  </td> 
                   {/* Durum sütunu kaldırıldı */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-3">
                       <button className="text-blue-600 hover:text-blue-900" title={complaint.comment}> {/* Yorumu görmek için */}
                        <Eye size={18} />
                      </button>
                      {complaint.status === 'Bekliyor' && (
                        <button className="text-green-600 hover:text-green-900" title="İncelendi Olarak İşaretle">
                          <CheckSquare size={18} />
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-900" title="Şikayeti Sil">
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