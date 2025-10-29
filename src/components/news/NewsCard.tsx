// src/components/news/NewsCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, ArrowRight } from 'lucide-react'; // İkonlar

// Haber verisi için tip tanımı (Admin paneline göre)
export interface NewsArticle {
  id: number;
  title: string;
  imageUrl: string; // Haber resmi
  summary: string; // Kısa özet
  publishDate: string; // Yayın tarihi (örn: "29 Ekim 2025")
  slug: string; // Haber detay sayfası için URL
  // category?: string; // Opsiyonel kategori adı
}

interface NewsCardProps {
  article: NewsArticle;
}

// Tarih formatlama fonksiyonu (Basit örnek)
function formatDate(dateString: string) {
  try {
    // Gelen tarih string'ini Date nesnesine çevirmeye çalış
    // Örn: "2025-10-29T10:00:00Z" veya "29 Ekim 2025" gibi farklı formatlar olabilir
    // Tarayıcının Date.parse yeteneklerine güvenir, backend'den belirli formatta almak daha iyi
    const date = new Date(dateString);
    // Türkçe formatta gün.ay.yıl
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } catch (error) {
    // Hata olursa orijinal string'i dön
    return dateString;
  }
}


export default function NewsCard({ article }: NewsCardProps) {
  const formattedDate = formatDate(article.publishDate);

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Resim Alanı */}
      <Link href={`/haber/${article.slug}-${article.id}`} className="block relative w-full aspect-w-16 aspect-h-9 overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>

      {/* İçerik Alanı */}
      <div className="p-4 flex flex-col flex-grow"> {/* Padding p-4 */}
        {/* Tarih */}
        <p className="text-xs text-gray-500 mb-1 flex items-center">
          <CalendarDays size={14} className="mr-1 flex-shrink-0" />
          {formattedDate}
        </p>

        {/* Başlık */}
        <Link href={`/haber/${article.slug}-${article.id}`}>
          {/* text-base, 2 satır gösterme (line-clamp) */}
          <h3
            className="text-base font-semibold text-gray-800 hover:text-blue-600 mb-2 line-clamp-2"
            title={article.title}
            style={{ minHeight: '2.5rem' }} // 2 satır için minimum yükseklik
          >
            {article.title}
          </h3>
        </Link>

        {/* Özet */}
        {/* text-sm, 3 satır gösterme (line-clamp) */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow" style={{ minHeight: '3.75rem' }}> {/* flex-grow eklendi */}
          {article.summary}
        </p>

        {/* Devamını Oku Linki */}
        <div className="mt-auto pt-2 border-t border-gray-100"> {/* mt-auto ile en alta */}
          <Link href={`/haber/${article.slug}-${article.id}`} className="inline-flex items-center text-xs text-blue-600 font-medium hover:underline">
            Devamını Oku <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}