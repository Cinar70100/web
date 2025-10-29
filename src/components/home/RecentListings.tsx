// src/components/home/RecentListings.tsx
import React from 'react';
// En son güncellediğimiz ListingCard ve Listing tipini import ediyoruz
import ListingCard, { Listing } from '@/components/listings/ListingCard';
import Link from 'next/link';

// Demo ilan verileri (Normalde backend'den son eklenenler çekilecek)
// ListingCard'daki tip tanımına uygun hale getirildi (price number olabilir, currency opsiyonel)
// locationBadge eklenmedi, location (mahalle) kullanılacak
const demoRecentListings: Listing[] = [
  // Örnek verileri Listing tipine uygun hale getirelim
  {
    id: 8,
    title: "Kazımkarabekir'de Uygun Fiyatlı Tarla",
    imageUrl: "/images/demo/listing-4.jpg", // Resim yolunu kontrol edin/ekleyin
    price: 950000, // Sayı olarak
    currency: "TL",
    location: "Kazımkarabekir Merkez", // Sadece mahalle/bölge
    area: 10000,
    slug: "kazimkarabekirde-uygun-fiyatli-tarla"
  },
  {
    id: 7,
    title: "Yenişehir'de Satılık Ara Kat Daire",
    imageUrl: "/images/demo/listing-3.jpg", // Resim yolunu kontrol edin/ekleyin
    price: "2.800.000", // String olarak da kalabilir
    currency: "TL",
    location: "Yenişehir Mh.",
    bedrooms: 3,
    bathrooms: 1,
    area: 135,
    slug: "yenisehirde-satilik-ara-kat-daire"
  },
  {
    id: 6,
    title: "Bahçeli Müstakil Ev (Kiralık)",
    imageUrl: "/images/demo/listing-2.jpg", // Resim yolunu kontrol edin/ekleyin
    price: 12000,
    currency: "TL",
    location: "Yeşilada Mh.",
    bedrooms: 4,
    bathrooms: 2,
    area: 200,
    slug: "bahceli-mustakil-ev-kiralik"
  },
  {
    id: 5,
    title: "Şehir Merkezinde Devren Kiralık Dükkan",
    imageUrl: "/images/demo/listing-1.jpg", // Resim yolunu kontrol edin/ekleyin
    price: "550.000",
    currency: "TL",
    location: "İsmet Paşa Cd.", // Cadde adı da olabilir
    area: 120,
    slug: "merkezde-devren-kiralik-dukkan"
  },
  // Admin panelindeki limite göre daha fazla gösterilebilir (Şimdilik 4 tane)
];

// Demo resimler için public/images/demo klasörüne ilgili dosyaların olduğundan emin olun.

export default function RecentListings() {
  // Gösterilecek ilan sayısını admin panelindeki "Son Eklenen İlanlar Limiti" ayarından alacağız (backend bağlandığında)
  // const displayLimit = await getSetting("home.recent.limit"); // Örnek
  const listingsToShow = demoRecentListings; // Şimdilik demo veriyi kullan

  return (
    // Arka plan beyaz (Popüler Kategoriler gibi), üstte ayıraç çizgisi
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Bölüm Başlığı ve Daha Fazla Linki */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Son Eklenen İlanlar</h2>
          <Link href="/ilanlar?sirala=tarih-yeni" className="text-sm text-blue-600 hover:underline">
            Tüm Son Eklenenler &rarr;
          </Link>
        </div>

        {/* İlan Kartları Grid (Vitrin ile aynı yapı) */}
        {/* Admin panelindeki limite göre kart sayısı artsa bile grid yapısı alta doğru genişleyecektir */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listingsToShow.map(listing => (
            // Güncellenmiş ListingCard bileşenini kullanıyoruz
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}