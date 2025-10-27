import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowInput, FormRow } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";

export const metadata: Metadata = {
  title: "Yönetici Düzenle", // Başlık güncellendi
  robots: {
    index: false,
    follow: false,
  },
};

// Bu fonksiyon, URL'den gelen 'id' parametresini alır.
export default function EditAdminPage({ params }: { params: { id: string } }) {
  const adminId = params.id; 

  // Backend'den çekilecek demo veriler (ID'ye göre)
  const adminData = {
    name: `Yönetici ${adminId} Adı`, // Demo
    username: `admin${adminId}`, // Demo
    email: `admin${adminId}@example.com`, // Demo
    status: adminId === '1' ? true : false, // Demo (ID 1 aktif, diğerleri pasif varsayalım)
  };

  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı ve Geri Dön Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yönetici Düzenle: {adminData.name} 
        </h1>
        <Link 
          href="/dashboard/yoneticiler" 
          className="rounded-lg bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Geri Dön
        </Link>
      </div>

      {/* 2. Yönetici Bilgileri Kartı (Alanlar 'Yeni Ekle' ile aynı, şifre hariç) */}
      <DashboardCard title="Yönetici Bilgileri">
        <div className="p-5 space-y-6"> 
          
          {/* Üst Satır: Ad, Kullanıcı Adı, E-posta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormRowInput
              label="Adı Soyadı"
              name="admin_name"
              defaultValue={adminData.name} // Mevcut veriyi göster
            />
            <FormRowInput
              label="Kullanıcı Adı"
              name="admin_username"
              defaultValue={adminData.username} // Mevcut veriyi göster
            />
            <FormRowInput
              label="E-posta Adresi"
              name="admin_email"
              type="email"
              defaultValue={adminData.email} // Mevcut veriyi göster
            />
          </div>

          {/* Alt Satır: Şifre Değiştirme (Opsiyonel), Durum */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"> 
             <FormRowInput
              label="Yeni Şifre (Değiştirmek istemiyorsanız boş bırakın)"
              name="admin_password"
              type="password"
              placeholder="Yeni şifre belirleyin" // Placeholder kullanılır, defaultValue değil
            />
            {/* Boş bir div ile 2. sütunu atlayıp 3. sütuna yerleştirelim */}
            <div></div> {/* Boş sütun */}
            <div className="py-4 md:pt-8"> 
               <ToggleSwitch 
                label="Durum (Aktif/Pasif)" 
                name="status" 
                defaultChecked={adminData.status} // Mevcut durumu göster
              />
            </div>
          </div>
        </div>

        {/* Kart Footer'ı - Güncelle Butonu */}
        <div className="flex items-center justify-start gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg"> 
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Güncelle
          </button>
        </div>
      </DashboardCard>
    </form>
  );
}