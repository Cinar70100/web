import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import ToggleSwitch from "@/components/admin/form/ToggleSwitch"; 
// GÜNCELLEME: Yardımcı bileşenleri yeni merkezi dosyadan import et
import { FormRow, FormRowSelect, FormRowInput } from "@/components/admin/form/FormHelpers";

export const metadata: Metadata = {
  title: "Site Ayarları",
  robots: {
    index: false,
    follow: false,
  },
};

// -- Ana Sayfa Bileşeni --
// İçerideki tüm FormRow, FormRowSelect, FormRowInput tanımları kaldırıldı.
export default function SiteSettingsPage() {
  return (
    <form className="flex flex-col gap-6">
      {/* 1. Üst Başlık ve Kaydet Butonu */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Site Ayarları
        </h1>
        <div>
          <button
            type="button" 
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 mr-2"
          >
            Logoyu Sil
          </button>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Değişiklikleri Kaydet
          </button>
        </div>
      </div>

      {/* 2. Temel SEO ve Analytics Kartı */}
      <DashboardCard title="Temel SEO ve Analytics">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200">
          <div className="p-5 space-y-4">
            <FormRowInput
              label="Site Başlığı"
              name="site_title"
              defaultValue="Karaman Satılık & Kiralık Daire, Ev, Arsa İlanları - Karaman Ev Bul"
            />
            <FormRow label="Site Meta Açıklaması">
              <textarea
                name="site_description"
                rows={4}
                defaultValue="Karaman'daki en güncel satılık ve kiralık daire..."
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </FormRow>
          </div>
          <div className="p-5 space-y-4">
            <FormRowInput
              label="Google Analytics ID"
              name="ga_id"
              defaultValue="G-JXL9TY0WXH"
            />
            <FormRowInput
              label="Alt Kısım (Footer)"
              name="footer_text"
              defaultValue="AydınWeb Yazılım Footer Linki"
            />
          </div>
        </div>
      </DashboardCard>

      {/* 3. Logo Yükleme Kartı */}
      <DashboardCard title="Logo Ayarları">
        <div className="p-5">
          <FormRow label="Site Logosu Yükle">
            <input
              type="file"
              name="logo_upload"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:rounded-md file:border-0
                file:bg-blue-50 file:px-4 file:py-2
                file:text-sm file:font-semibold
                file:text-blue-700 hover:file:bg-blue-100"
            />
          </FormRow>
        </div>
      </DashboardCard>
      
      {/* 4. Genel ve Finansal Ayarlar Kartı */}
      <DashboardCard title="Genel ve Finansal Ayarlar">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 p-5">
          <div>
            <FormRowInput
              label="Varsayılan Liste Gösterimi Limiti"
              name="list_limit"
              defaultValue="10"
              type="number"
            />
            <FormRowInput
              label="Varsayılan Para Birimi (Arayüz)"
              name="currency_ui"
              defaultValue="TL"
            />
            <FormRowInput
              label="Varsayılan Para Birimi Kodu"
              name="currency_code"
              defaultValue="949"
            />
          </div>
          <div>
            <ToggleSwitch
              label="Emlak Ofisi Alt Alan Adı Sistemi"
              name="enable_subdomain"
              defaultChecked={false}
            />
            <FormRowInput
              label="Varsayılan Para Birimi (Ödeme Yöntemleri)"
              name="currency_payment"
              defaultValue="TRY"
            />
            <FormRowInput
              label="Ana Sayfa Alt Kategori Limiti"
              name="home_cat_limit"
              defaultValue="20"
              type="number"
            />
          </div>
          <div>
            <ToggleSwitch
              label="Bakım Modu"
              name="maintenance_mode"
              defaultChecked={false}
            />
            <FormRowSelect label="Para Birimi Konumu" name="currency_position">
              <option value="right_space">Sağda Ve Boşluklu</option>
              <option value="left_space">Solda Ve Boşluklu</option>
              <option value="right">Sağda Bitişik</option>
              <option value="left">Solda Bitişik</option>
            </FormRowSelect>
            <ToggleSwitch
              label="Ana Sayfa Slayt"
              name="enable_slider"
              defaultChecked={true}
            />
            <ToggleSwitch
              label="Günün Fırsatları"
              name="enable_deals"
              defaultChecked={true}
            />
          </div>
        </div>
      </DashboardCard>
    </form>
  );
}