// src/components/home/FeaturedOffices.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Demo Ofis Verisi
const demoOffices = [
  { id: 1, name: "Aydın Web Yazılım Emlak", logoUrl: "/images/demo/office-logo-placeholder.png", slug: "aydinweb" },
  { id: 2, name: "Karaman Emlak Merkezi", logoUrl: "/images/demo/office-logo-placeholder.png", slug: "karamanemlak" },
  { id: 3, name: "Güven Emlak Karaman", logoUrl: "/images/demo/office-logo-placeholder.png", slug: "guvenemlak" },
  { id: 4, name: "Özdemir Gayrimenkul", logoUrl: "/images/demo/office-logo-placeholder.png", slug: "ozdemirgayrimenkul" },
  { id: 5, name: "Yatırım Emlak", logoUrl: "/images/demo/office-logo-placeholder.png", slug: "yatirimemlak" },
  { id: 6, name: "As Emlak", logoUrl: "/images/demo/office-logo-placeholder.png", slug: "asemlak" },
];

// Lütfen public/images/demo/ klasörüne office-logo-placeholder.png ekleyin.

export default function FeaturedOffices() {
  const officesToShow = demoOffices;

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Emlak Ofisleri</h2>
          <Link href="/emlak-ofisleri" className="text-sm text-blue-600 hover:underline">
            Tüm Emlak Ofisleri &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {officesToShow.map((office) => (
            <Link
              key={office.id}
              href={`/ofis/${office.slug}`}
              className="group block p-4 border border-gray-200 rounded-lg text-center hover:shadow-md hover:border-blue-300 transition-all duration-300 bg-white flex flex-col items-center"
            >
              {/* === Logo Alanı Yüksekliği Artırıldı: h-24 === */}
              <div className="relative h-48 w-full mb-2"> {/* Yükseklik h-16'dan h-24'e çıkarıldı */}
                <Image
                  src={office.logoUrl}
                  alt={`${office.name} Logosu`}
                  layout="fill"
                  objectFit="contain" // Oranı koruyarak sığdır
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* === Logo Alanı Sonu === */}
              <p className="text-xs text-gray-600 mt-auto truncate group-hover:text-blue-600" title={office.name}>
                {office.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}