// src/components/home/ShowcaseListings.tsx
import React from 'react';
import ListingCard from '@/components/listings/ListingCard';
import Link from 'next/link';

// Demo ilan verileri (location güncellendi, arsa/işyeri için oda/banyo kaldırıldı)
const demoListings = [
  { id: 1, title: "Karaman Merkezde Satılık Lüx Daire", imageUrl: "/images/demo/listing-1.jpg", price: "3.500.000", currency: "TL", location: "Fenari Mh.", bedrooms: 3, bathrooms: 2, area: 150, slug: "karaman-merkezde-satilik-lux-daire" },
  { id: 2, title: "Ermenek Yolu Üzeri Yatırımlık Arsa", imageUrl: "/images/demo/listing-2.jpg", price: "1.250.000", currency: "TL", location: "Kılbasan Yolu", area: 5000, slug: "ermenek-yolu-uzeri-yatirimlik-arsa" },
  { id: 3, title: "Üniversite Civarı Kiralık 2+1 Apart", imageUrl: "/images/demo/listing-3.jpg", price: "7.500", currency: "TL", location: "Kırbağ Mh.", bedrooms: 2, bathrooms: 1, area: 90, slug: "universite-civari-kiralik-apart" },
  { id: 4, title: "Organize Sanayide Satılık Fabrika", imageUrl: "/images/demo/listing-4.jpg", price: "15.000.000", currency: "TL", location: "Organize Sanayi Bölgesi", area: 2500, slug: "organize-sanayide-satilik-fabrika" },
  // Daha fazla demo ilan eklenebilir...
];

// Demo resimler için public/images/demo klasörüne listing-1.jpg, listing-2.jpg vb. eklemelisiniz.
// Yoksa placeholder kullanabilirsiniz: /images/demo/slide-placeholder-1.jpg

export default function ShowcaseListings() {
  return (
    <section className="py-12 bg-gray-50"> {/* Bölüm arka planı ve dikey boşluk */}
      <div className="container mx-auto px-4">
        {/* Bölüm Başlığı ve Daha Fazla Linki */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Vitrin İlanları</h2>
          <Link href="/ilanlar?vitrin=true" className="text-sm text-blue-600 hover:underline">
            Tüm Vitrin İlanları &rarr;
          </Link>
        </div>

        {/* İlan Kartları Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoListings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}