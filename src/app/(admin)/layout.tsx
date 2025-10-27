import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

/**
 * Bu, (admin) rota grubu içindeki tüm sayfalar (/dashboard, /dashboard/ilanlar vb.)
 * için geçerli olacak ana panel yerleşimidir.
 * Sitenin public (ziyaretçi) kısmından tamamen ayrıdır.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Tailwind'in 'h-screen' ve 'flex' özellikleri ile tam ekran bir layout oluşturuyoruz.
    <div className="flex h-screen overflow-hidden bg-gray-100">
      
      {/* 1. Statik Sidebar */}
      <Sidebar />

      {/* 2. Kaydırılabilir Ana İçerik Alanı */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden pl-60"> {/* pl-60 = Sidebar genişliği */}
        
        {/* 2a. Yapışkan Header */}
        <Header />

        {/* 2b. Sayfa İçeriği */}
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children} {/* Buraya /dashboard/page.tsx gibi sayfalar render edilecek */}
          </div>
        </main>
      </div>
    </div>
  );
}