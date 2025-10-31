"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

/**
 * Bu layout, yönetim paneli rotalarındaki tüm sayfaları sarar
 * ve masaüstünde sabit bir sidebar + içerik alanı düzeni,
 * mobilde ise açılıp kapanabilen bir çekmece menüsü sağlar.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-gray-100">
      <Sidebar
        isMobileOpen={isSidebarOpen}
        onMobileClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex flex-1 flex-col lg:pl-64">
        <Header onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}