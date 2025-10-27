import type { Metadata } from "next";
import Link from "next/link";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import { FormRowSelect, FormRowInput } from "@/components/admin/form/FormHelpers"; 
import ToggleSwitch from "@/components/admin/form/ToggleSwitch";

export const metadata: Metadata = {
  title: "Özel Alan Düzenle",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddCustomFieldPage() {
  return (
    <form className="flex flex-col gap-6">
      
      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        Özel Alanı Düzenle
      </h1>

      {/* 2. Ana Form Kartı (START UI Stili) */}
      <DashboardCard title="Alan Detayları">
        {/* İçerik Alanı (p-5 eklendi) */}
        <div className="p-5">
          {/* GRID - 4 SÜTUN (Sizin kodunuzdaki yapı) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-2"> {/* gap-y azaltıldı */}

            {/* 1. Sütun */}
            <div className="flex flex-col space-y-4"> {/* Dikey boşluk ayarlandı */}
              <FormRowInput label="İsim (Türkçe)" name="name_tr" />
              <FormRowSelect label="Kategori 1" name="cat1">
                <option value="">Seçiniz</option> 
                <option value="1">Emlak</option>
              </FormRowSelect>
              <FormRowSelect label="Kategori 5" name="cat5">
                <option value="">Seçiniz</option>
              </FormRowSelect>
              {/* Toggle'lar için padding ayarı */}
              <div className="pt-2"> 
                <ToggleSwitch label="Zorunluluk" name="required" />
              </div>
              <div className="pt-1"> {/* pt azaltıldı */}
                <ToggleSwitch label="Detaylı Arama Sayfası" name="show_in_search" defaultChecked={true} />
              </div>
            </div>

            {/* 2. Sütun */}
            <div className="flex flex-col space-y-4">
              <FormRowInput label="İsim (English)" name="name_en" />
              <FormRowSelect label="Kategori 2" name="cat2">
                <option value="">Seçiniz</option>
                <option value="10">Konut</option> 
              </FormRowSelect>
              <FormRowSelect label="Kategori 6" name="cat6">
                <option value="">Seçiniz</option>
              </FormRowSelect>
              {/* Toggle'lar için padding ayarı */}
              <div className="pt-2">
                 {/* Filtreleme için Toggle (Görselde yoktu, ekleyelim mi?) */}
                 {/* <ToggleSwitch label="Filtreleme" name="filter" /> */}
                 {/* Şimdilik boş bırakalım veya başka bir toggle ekleyelim */}
              </div>
            </div>

            {/* 3. Sütun */}
            <div className="flex flex-col space-y-4">
              <FormRowSelect label="Tür" name="f_type">
                  <option value="input">Yazı Alanı ( Text Box )</option>
                  <option value="select">Select (Seçim Kutusu)</option>
                  <option value="checkbox">Checkbox (Onay Kutuları)</option>
                  <option value="textarea">Textarea (Geniş Metin Alanı)</option>
              </FormRowSelect>
              <FormRowSelect label="Kategori 3" name="cat3">
                  <option value="">Seçiniz</option>
                  <option value="101">Müstakil Ev</option>
              </FormRowSelect>
              <FormRowSelect label="Kategori 7" name="cat7">
                  <option value="">Seçiniz</option>
              </FormRowSelect>
              {/* Toggle'lar için padding ayarı */}
              <div className="pt-2">
                <ToggleSwitch label="Kategori Detay Sayfası" name="show_in_category" />
              </div>
            </div>

            {/* 4. Sütun */}
            <div className="flex flex-col space-y-4">
              <FormRowInput label="Sıra" name="order" type="number" />
              <FormRowSelect label="Kategori 4" name="cat4">
                <option value="">Seçiniz</option>
                <option value="1000">Satılık</option>
              </FormRowSelect>
              <FormRowSelect label="Kategori 8" name="cat8">
                <option value="">Seçiniz</option>
              </FormRowSelect>
              {/* Toggle'lar için padding ayarı */}
              <div className="pt-2">
                <ToggleSwitch label="Aralıklı Arama" name="range_search" />
              </div>
            </div>
          </div>
        </div> 

        {/* ALTTAKİ BUTONLAR (Kart Footer'ı) */}
        <div className="flex items-center justify-between gap-4 bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg">
           {/* Önceki Sayfaya Git Butonu (Kırmızı) */}
          <Link
            href="/dashboard/ozel-alan"
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700"
          >
            Önceki Sayfaya Git
          </Link>
          {/* Kaydet Butonu (Mavi - START UI Standardı) */}
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Kaydet
          </button>
           {/* Eğer sarı butonu tercih ederseniz:
           <button
             type="submit"
             className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-yellow-600"
           >
             Kaydet
           </button>
           */}
        </div>
      </DashboardCard>
    </form>
  );
}