import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
// GÜNCELLEME: Yeni FormRowInputWithIcon import edildi
import { FormRowSelect, FormRowInput, FormRowInputWithIcon } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";
import { Calendar } from "lucide-react"; // GÜNCELLEME: Takvim ikonu import edildi

export const metadata: Metadata = {
  title: "Yeni Reklam Ekle",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddAdPage() {
  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı (Değişiklik yok) */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Yeni Reklam Ekle
        </h1>
      </div>

      {/* GÜNCELLEME: 2 Sütunlu (Ana/Kenar Çubuğu) Yerleşim Başlangıcı */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Ana Sütun (Sol Taraf) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* 2. Reklam Detayları Kartı */}
          <DashboardCard title="Reklam Detayları">
            <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormRowInput
                label="Ad"
                name="ad_name"
                placeholder="Örn: Anasayfa Header 728x90"
              />
              <FormRowSelect label="Pozisyon" name="ad_position">
                <option value="">Seçiniz</option>
                <option value="anasayfa_1">Ana Sayfa 1</option>
                <option value="anasayfa_2">Ana Sayfa 2</option>
                <option value="anasayfa_3">Ana Sayfa 3</option>
                <option value="anasayfa_4">Ana Sayfa 4</option>
                <option value="anasayfa_5">Ana Sayfa 5</option>
                <option value="anasayfa_6">Ana Sayfa 6</option>
                <option value="ilandetay_1">İlan detay Sayfası 1</option>
              </FormRowSelect>
              <FormRowSelect label="Tür" name="ad_type">
                <option value="">Seçiniz</option>
                <option value="resim">Resim</option>
                <option value="flash">Flash</option>
                <option value="kod">Kod</option>
              </FormRowSelect>
            </div>
          </DashboardCard>

          {/* 3. Reklam İçeriği Kartı */}
          <DashboardCard title="Reklam İçeriği (Seçilen Türe Göre Doldurun)">
            <div className="p-5 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-800">
                  Reklam Kodu (Tür: Kod için)
                </label>
                <textarea
                  name="ad_code"
                  rows={5}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm mt-1"
                  placeholder="<ins class='adsbygoogle' ...></ins> veya özel HTML kodunuz"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Resim Yükle (Tür: Resim için)
                  </label>
                  <input
                    type="file"
                    name="ad_image"
                    accept="image/*"
                    className="block w-full text-sm text-gray-500 mt-1
                      file:mr-4 file:rounded-md file:border-0
                      file:bg-blue-50 file:px-4 file:py-2
                      file:text-sm file:font-semibold
                      file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Flash (SWF) Yükle (Tür: Flash için)
                  </label>
                  <input
                    type="file"
                    name="ad_flash"
                    accept=".swf"
                    className="block w-full text-sm text-gray-500 mt-1
                      file:mr-4 file:rounded-md file:border-0
                      file:bg-blue-50 file:px-4 file:py-2
                      file:text-sm file:font-semibold
                      file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>

              <div>
                <FormRowInput
                  label="Banner Hedef Link (Resim/Flash tıklandığında gidilecek URL)"
                  name="ad_link"
                  placeholder="https://www.example.com"
                />
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Kenar Çubuğu (Sağ Taraf) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          
          {/* 4. Yayınlama Kartı */}
          <DashboardCard title="Yayınlama">
            <div className="p-5 flex flex-col gap-4">
              <ToggleSwitch
                label="Durum (Aktif/Pasif)"
                name="status"
                defaultChecked={false} 
              />
              
              <div className="border-t border-gray-200"></div>

              {/* GÜNCELLEME: İkonlu Tarih Alanları */}
              <FormRowInputWithIcon
                label="Başlangıç Tarihi"
                name="start_date"
                type="date"
                icon={<Calendar size={16} />}
              />
              <FormRowInputWithIcon
                label="Bitiş Tarihi"
                name="end_date"
                type="date"
                icon={<Calendar size={16} />}
              />
            </div>
            
            {/* Kartın Altbilgisi (Footer) - Butonlar */}
            <div className="flex items-center justify-between gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg">
              <Link 
                href="/dashboard/reklam" 
                className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700"
              >
                Geri Git
              </Link>
              <button
                type="submit"
                className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-yellow-600"
              >
                Kaydet
              </button>
            </div>
          </DashboardCard>
        </div>
      </div>
    </form>
  );
}