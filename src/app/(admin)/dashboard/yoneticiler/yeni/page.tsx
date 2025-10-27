import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow } from "@/components/admin/form/FormHelpers"; 
// GÜNCELLEME: ToggleSwitch import'u kaldırıldı

export const metadata: Metadata = {
  title: "Yeni Yönetici Ekle",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddAdminPage() {
  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yeni Yönetici Ekle
        </h1>
        <Link 
          href="/dashboard/yoneticiler" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Önceki Sayfaya Git
        </Link>
      </div>

      {/* 2. Yönetici Bilgileri Kartı (GÜNCELLEME: 5 Sütunlu Grid, Durum yok, Şifre Tekrar var) */}
      <DashboardCard title="Yönetici Bilgileri">
        {/* İçerik Alanı */}
        <div className="p-5"> 
          {/* 5 Sütunlu Grid (Geniş ekranda tek satır) */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-end"> {/* items-end eklendi */}
            
            <FormRowInput
              label="Kullanıcı Adı" // Sıralama görsele göre
              name="admin_username"
              placeholder="Giriş için kullanıcı adı"
            />
             <FormRowInput
              label="Adı Soyadı"
              name="admin_name"
              placeholder="Yöneticinin adı ve soyadı"
            />
            <FormRowInput
              label="E-posta Adresi"
              name="admin_email"
              type="email"
              placeholder="yonetici@example.com"
            />
            <FormRowInput
              label="Şifre"
              name="admin_password"
              type="password"
              placeholder="Yeni şifre belirleyin"
            />
             {/* Şifre Tekrarı EKLENDİ */}
            <FormRowInput 
              label="Şifre Tekrarı"
              name="admin_password_confirm"
              type="password"
              placeholder="Şifreyi tekrar girin"
            />
            
            {/* Durum anahtarı KALDIRILDI */}
          </div>
        </div>

        {/* Kart Footer'ı - Kaydet Butonu */}
        <div className="flex items-center justify-start gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> 
          <button
            type="submit"
            // Görseldeki sarı butona uygun stil:
            className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Kaydet
          </button>
        </div>
      </DashboardCard>
    </form>
  );
}