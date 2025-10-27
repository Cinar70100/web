import type { Metadata } from "next";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";
// GÜNCELLEME: Sadece FormRowSelect ve FormRow gerekli
import { FormRowSelect, FormRow } from "@/components/admin/form/FormHelpers"; 
// GÜNCELLEME: ToggleSwitch kaldırıldı

export const metadata: Metadata = {
  title: "Üye Ayarları",
  robots: {
    index: false,
    follow: false,
  },
};

// Radio Buton Grubu için yardımcı bileşen
const RadioButtonGroup = ({ label, name, options, defaultValue }: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  defaultValue: string;
}) => (
  // FormRow, etiketi ve alanı gruplar
  <FormRow label={label}>
    <fieldset className="mt-2">
      <legend className="sr-only">{label}</legend>
      {/* Seçenekleri yatayda sırala */}
      <div className="flex items-center space-x-6"> 
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${name}-${option.value}`}
              name={name}
              type="radio"
              defaultValue={option.value}
              defaultChecked={defaultValue === option.value}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={`${name}-${option.value}`} className="ml-2 block text-sm font-medium text-gray-900">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  </FormRow>
);


export default function UserSettingsPage() {
  
  // Aktivasyon seçenekleri
  const activationOptions = [
    { value: "email", label: "E-MAİL" },
    { value: "sms", label: "SMS" },
    { value: "auto", label: "Hemen Onayla" },
  ];

  return (
    <form className="flex flex-col gap-6">

      {/* 1. Sayfa Başlığı */}
      <h1 className="text-3xl font-bold text-gray-800">
        Üye Ayarları
      </h1>

      {/* 2. Ayarlar Kartı (GÜNCELLEME: Sizin tarife göre) */}
      <DashboardCard title="Genel Üyelik Ayarları">
        {/* İçerik Alanı */}
        <div className="p-5 space-y-6 max-w-4xl"> {/* Genişlik artırıldı */}
          
          {/* Satır 1: Aktivasyon Türü */}
           <RadioButtonGroup
             label="Aktivasyon Türü"
             name="activation_type"
             options={activationOptions}
             defaultValue="email" // Varsayılan demo
           />

          {/* Satır 2: Dil, Ülke, Zaman Dilimi */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t pt-6">
             <FormRowSelect 
                label="Varsayılan Dil" 
                name="default_language"
                defaultValue="tr" // Demo
             >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
                {/* Diğer diller backend'den gelecek */}
             </FormRowSelect>
             
             <FormRowSelect 
                label="Varsayılan Ülke" 
                name="default_country"
                defaultValue="TR" // Demo
             >
                <option value="TR">Türkiye</option>
                <option value="US">Amerika Birleşik Devletleri</option>
                {/* Diğer ülkeler backend'den gelecek */}
             </FormRowSelect>

             <FormRowSelect 
                label="Zaman Dilimi" 
                name="timezone"
                defaultValue="Europe/Istanbul" // Demo
             >
                <option value="Europe/Istanbul">Europe/Istanbul</option>
                <option value="Europe/London">Europe/London</option>
                <option value="America/New_York">America/New_York</option>
                 {/* Diğer zaman dilimleri backend'den gelecek */}
             </FormRowSelect>
          </div>
        </div>

        {/* Kart Footer'ı - Kaydet Butonu */}
        <div className="flex justify-end bg-gray-50 p-4 border-t border-gray-200 rounded-b-lg">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Kaydet
          </button>
        </div>
      </DashboardCard>
    </form>
  );
}