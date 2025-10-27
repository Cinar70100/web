import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
import ColorPicker from "@/components/admin/form/ColorPicker"; 
import { FormRow, FormRowSelect } from "@/components/admin/form/FormHelpers";

export const metadata: Metadata = {
  title: "Renk Ayarları",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ColorSettingsPage() {
  return (
    <form className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Renk Ayarları
      </h1>

      {/* 1. Renk Seçici Kartı */}
      <DashboardCard title="Site Renk Paleti">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-5">
          <ColorPicker
            label="Yazı + Buton Rengi"
            name="color_primary"
            defaultValue="#007bff"
          />
          <ColorPicker
            label="Alt Arkaplan Rengi"
            name="color_footer_bg"
            defaultValue="#f8f9fa"
          />
          {/* DÜZELTME: 'ColorPİCKER' (büyük İ) 'ColorPicker' (küçük i) olarak düzeltildi. */}
          <ColorPicker 
            label="Buton 2. Rengi"
            name="color_secondary"
            defaultValue="#0056b3"
          />
          <ColorPicker
            label="Üst Kısım Yazı Rengi"
            name="color_header_text"
            defaultValue="#ffffff"
          />
          <ColorPicker
            label="Renkli Çerçeve Rengi"
            name="color_border"
            defaultValue="#e0e0e0"
          />
          <ColorPicker
            label="Alt Kısım Yazı Rengi"
            name="color_footer_text"
            defaultValue="#333333"
          />
          <ColorPicker
            label="Çerçeve Vurgu (Hover) Rengi"
            name="color_border_hover"
            defaultValue="#cccccc"
          />
          <ColorPicker
            label="Üst Kısım Çizgi Rengi"
            name="color_header_border"
            defaultValue="#007bff"
          />
          <ColorPicker
            label="Üst Arkaplan Rengi"
            name="color_header_bg"
            defaultValue="#ffffff"
          />
          <ColorPicker
            label="Alt Kısım Çizgi Rengi"
            name="color_footer_border"
            defaultValue="#007bff"
          />
        </div>
      </DashboardCard>

      {/* 2. Renk Şablonu Kartı */}
      <DashboardCard title="Hazır Şablonlar">
        <div className="p-5">
          <FormRowSelect label="Renk Şablonları" name="color_template">
            <option value="">Seçiniz</option>
            <option value="default">Varsayılan (Mavi)</option>
            <option value="red">Kırmızı Tema</option>
            <option value="green">Yeşil Tema</option>
          </FormRowSelect>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Değişiklikleri Kaydet
            </button>
          </div>
        </div>
      </DashboardCard>
    </form>
  );
}