// src/components/listings/ListingCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Square } from "lucide-react";

export interface Listing {
  id: number;
  title: string;
  imageUrl: string;
  price: number | string;   // number da kabul ediyoruz
  currency?: "TL" | "USD" | "EUR" | string;
  location: string;         // "Fenari Mh." gibi
  // Rozette göstermek istediğin metin (ör: "Çerkezköy/Tekirdağ").
  // Eğer göndermezsen location'ı kullanır.
  locationBadge?: string;

  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  slug: string;
}

interface ListingCardProps {
  listing: Listing;
}

function formatPrice(value: number | string, currency: string = "TL") {
  const n = typeof value === "number" ? value : Number(String(value).replace(/[^\d.-]/g, ""));
  // TR format: 3.500.000
  const formatted = isNaN(n)
    ? String(value)
    : new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(n);
  return `${formatted} ${currency}`;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const badgeText = listing.locationBadge?.trim() || listing.location;
  const priceText = formatPrice(listing.price, listing.currency || "TL");

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Görsel + sol-üst lokasyon rozeti */}
      <Link href={`/ilan/${listing.slug}-${listing.id}`} className="block relative h-48 w-full">
        <Image
          src={listing.imageUrl}
          alt={listing.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />

        {/* Lokasyon Rozeti (1. görseldeki gibi mavi, iconlu) */}
        <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 bg-blue-600 text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-md">
          <MapPin size={14} />
          <span className="max-w-[210px] truncate">{badgeText}</span>
        </span>
      </Link>

      {/* Başlık + konum satırı + fiyat */}
      <div className="p-4">
        <Link href={`/ilan/${listing.slug}-${listing.id}`} className="block">
          <h3
            className="text-[15px] leading-snug font-semibold text-gray-800 hover:text-blue-600 mb-1 truncate"
            title={listing.title}
          >
            {listing.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mb-2 flex items-center">
          <MapPin size={14} className="mr-1 flex-shrink-0" />
          <span className="truncate">{listing.location}</span>
        </p>

        <div className="flex items-center justify-between mb-3">
          <p className="text-lg font-bold text-blue-600">{priceText}</p>
          {/* İstersen favori butonu, rozet vs. */}
        </div>

        {/* Özellikler */}
        {(listing.bedrooms || listing.bathrooms || listing.area) && (
          <div className="flex items-center text-xs text-gray-600 border-t pt-2 gap-4">
            {listing.bedrooms != null && (
              <span className="flex items-center">
                <BedDouble size={14} className="mr-1" /> {listing.bedrooms} Oda
              </span>
            )}
            {listing.bathrooms != null && (
              <span className="flex items-center">
                <Bath size={14} className="mr-1" /> {listing.bathrooms} Banyo
              </span>
            )}
            {listing.area != null && (
              <span className="flex items-center">
                <Square size={14} className="mr-1" /> {listing.area} m²
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
