import type { Metadata } from "next";

// İstatistik Kartları
import StatCard from "@/components/admin/dashboard/StatCard";
import WeekIncomeCard from "@/components/admin/dashboard/WeekIncomeCard";

// Tablolar (GÜNCELLEME: İsimleri değiştirildi)
import PopularListingsTable from "@/components/admin/dashboard/PopularListingsTable";
import PopularNewsTable from "@/components/admin/dashboard/PopularNewsTable";

// Listeler
import CommentsList from "@/components/admin/dashboard/CommentsList";
import ContactsList from "@/components/admin/dashboard/ContactsList";

export const metadata: Metadata = {
  title: "Yönetim Paneli",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
  return (
    // Ana sayfa konteyneri (Dikey sıralama)
    <div className="flex flex-col gap-6">
    
      {/* 1. SATIR: İstatistik Kartları */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        
        {/* Geniş Kart (WeekIncome - Bu kartı daha sonra değiştirebiliriz) */}
        <WeekIncomeCard /> 
        
        {/* GÜNCELLEME: StatCard başlıkları değiştirildi */}
        <StatCard
          title="Toplam Kullanıcı" // Eskisi: "Open tickets"
          value="152" // Demo veri
          percentage="+5%" // Demo veri
          bgColor="bg-red-500"
        />
        <StatCard
          title="Toplam İlan" // Eskisi: "Closes tickets"
          value="1.240" // Demo veri
          percentage="+12%" // Demo veri
          bgColor="bg-purple-500"
        />
        <StatCard
          title="Toplam Emlak Ofisi" // Eskisi: "New clients"
          value="35" // Demo veri
          percentage="+2" // Demo veri
          bgColor="bg-orange-500"
        />
        <StatCard
          title="Toplam Sipariş" // Eskisi: "Here is an example..."
          value="88" // Demo veri
          percentage="+8%" // Demo veri
          bgColor="bg-green-500"
        />
      </div>

      {/* 2. SATIR: Tablolar (GÜNCELLEME: Yeni bileşenler çağrıldı) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PopularListingsTable /> {/* Eskisi: RecentOrdersTable */}
        <PopularNewsTable /> {/* Eskisi: RecentTicketsTable */}
      </div>
      
      {/* 3. SATIR: Listeler (Comments/Contacts - Bu kartları da daha sonra güncelleyebiliriz) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CommentsList />
        <ContactsList />
      </div>

    </div>
  );
}