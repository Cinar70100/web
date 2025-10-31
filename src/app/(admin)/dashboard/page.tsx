import type { Metadata } from "next";

// İstatistik Kartları
import StatCard from "@/components/admin/dashboard/StatCard";
import WeekIncomeCard from "@/components/admin/dashboard/WeekIncomeCard";

// Tablolar (GÜNCELLEME: İsimleri değiştirildi)
import RecentOrdersCard from "@/components/admin/dashboard/RecentOrdersCard";
import RecentTicketsCard from "@/components/admin/dashboard/RecentTicketsCard";

// Listeler
import CommentsList from "@/components/admin/dashboard/CommentsList";
import ContactsList from "@/components/admin/dashboard/ContactsList";

import {
  ClipboardList,
  MessageCircle,
  Ticket,
  Users,
} from "lucide-react";

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
        <WeekIncomeCard />

        <StatCard
          title="Open tickets"
          value="26"
          trendLabel="+25%"
          description="since last week"
          accentColor="bg-gradient-to-br from-[#7755f6] via-[#6c4ff6] to-[#5531db]"
          icon={<Ticket className="h-5 w-5" />}
        />
        <StatCard
          title="Close tickets"
          value="12"
          trendLabel="-4%"
          trendType="negative"
          description="resolved today"
          accentColor="bg-gradient-to-br from-[#4e9ef5] via-[#3b82f6] to-[#1d4ed8]"
          icon={<MessageCircle className="h-5 w-5" />}
        />
        <StatCard
          title="New clients"
          value="12"
          trendLabel="+6%"
          description="in the last 24h"
          accentColor="bg-gradient-to-br from-[#f59f0b] via-[#f97316] to-[#ea580c]"
          icon={<Users className="h-5 w-5" />}
        />
        <StatCard
          title="Here is an example of a long name"
          value="$3.240"
          trendLabel="steady"
          trendType="neutral"
          description="all systems normal"
          accentColor="bg-gradient-to-br from-[#34d399] via-[#10b981] to-[#047857]"
          icon={<ClipboardList className="h-5 w-5" />}
        />
      </div>

      {/* 2. SATIR: Tablolar (GÜNCELLEME: Yeni bileşenler çağrıldı) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentOrdersCard />
        <RecentTicketsCard />
      </div>
      
      {/* 3. SATIR: Listeler (Comments/Contacts - Bu kartları da daha sonra güncelleyebiliriz) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CommentsList />
        <ContactsList />
      </div>

    </div>
  );
}