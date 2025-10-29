// src/components/home/PopularCategories.tsx
import React, { ElementType } from 'react'; // ElementType import edildi
import Link from 'next/link';
// Kategori ikonları için lucide-react'tan ikonları import edelim
import { Home, Building, LandPlot, Building2, Ticket, Tent } from 'lucide-react'; // Örnek ikonlar

// Kategori verisi için tip tanımı
interface CategoryInfo {
  name: string;
  slug: string; // Kategori sayfasına link için
  Icon: ElementType; // İkon bileşeni (ElementType olarak düzeltildi)
  count?: number; // İlan sayısı (opsiyonel)
}

// Demo Kategori Verisi (İkonlar ve slug güncellendi)
// Backend bağlandığında bu veriler dinamik olarak gelecek
const categories: CategoryInfo[] = [
  { name: 'Konut', slug: 'konut', Icon: Home, count: 1250 },
  { name: 'İşyeri', slug: 'isyeri', Icon: Building, count: 340 },
  { name: 'Arsa', slug: 'arsa', Icon: LandPlot, count: 560 },
  { name: 'Bina', slug: 'bina', Icon: Building2, count: 85 },
  { name: 'Devremülk', slug: 'devremulk', Icon: Ticket, count: 15 },
  { name: 'Turistik Tesis', slug: 'turistik-tesis', Icon: Tent, count: 30 },
];

export default function PopularCategories() {
  return (
    // Hedef tasarımdaki gibi beyaz arka plan
    <section className="py-12 bg-white border-t border-gray-100"> {/* Üst ayıraç çizgisi */}
      <div className="container mx-auto px-4">
        {/* Bölüm Başlığı (Ortalanmış) */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Popüler Kategoriler</h2>
          <p className="text-gray-500 text-sm mt-1">Aradığınızı kolayca bulun</p>
        </div>

        {/* Kategori Kutuları Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/ilanlar?kategori=${category.slug}`} // Örnek link yapısı
              // Stiller: Daha belirgin hover, ikon rengi ve boyutu
              className="group block p-4 border border-gray-200 rounded-lg text-center hover:shadow-lg hover:border-blue-500 hover:scale-105 transform transition-all duration-300 bg-white"
            >
              <div className="flex justify-center mb-2">
                {/* İkon */}
                <category.Icon
                  size={36} // İkon boyutu
                  className="text-blue-600 transition-colors duration-300"
                />
              </div>
              {/* Kategori Adı */}
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
              {/* İlan Sayısı (Varsa göster) */}
              {category.count !== undefined && (
                <p className="text-xs text-gray-400 mt-0.5">({category.count} ilan)</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}