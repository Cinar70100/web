import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import ToggleSwitch from "@/components/admin/form/ToggleSwitch"; // Toggle bileşenimizi import ediyoruz

export const metadata: Metadata = {
  title: "Bağlantı Ayarları",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LinkSettingsPage() {
  return (
    <form className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Bağlantı Ayarları
      </h1>

      {/* 1. Ayarlar Kartı */}
      <DashboardCard title="Genel Bağlantı Seçenekleri">
        <div className="p-5">
          <div className="max-w-md space-y-6">
            <ToggleSwitch
              label="Bağlantı Tipi (www. Eki)"
              name="enable_www"
              defaultChecked={false} 
            />
            
            <ToggleSwitch
              label="SSL Durumu (https:// Kullan)"
              name="enable_ssl"
              defaultChecked={true}
            />
          </div>

          {/* Kaydet Butonu */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Değişiklikleri Kaydet
            </button>
          </div>
        </div>
      </DashboardCard> {/* <-- DÜZELTME: Burası </dDashboardCard> yerine </DashboardCard> olarak düzeltildi. */}
    </form>
  );
}