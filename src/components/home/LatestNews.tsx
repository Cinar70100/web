// src/components/home/LatestNews.tsx
import React from "react";
import Link from "next/link";              // ✅ EKLENDİ
import Image from "next/image";
import { CalendarDays } from "lucide-react";

export interface NewsArticle {
  id: number;
  title: string;
  imageUrl: string;
  summary: string;
  publishDate: string;
  slug: string;
  author?: string;
}

const demoNews: NewsArticle[] = [
  {
    id: 1,
    title: "Karaman'da Konut Fiyatları Yükselişte: Yeni Projeler Yolda",
    imageUrl: "/images/demo/news-1.jpg",
    summary:
      "Karaman'daki konut fiyatları son çeyrekte %15 artış gösterdi. Uzmanlar yeni projelere dikkat çekiyor...",
    publishDate: "2025-10-28",
    slug: "karamanda-konut-fiyatlari-yukseliste",
    author: "ÖZÇINAR Gayrimenkul",
  },
  {
    id: 2,
    title: "Emlak Vergisi Ödemeleri İçin Son Günler Yaklaşıyor",
    imageUrl: "/images/demo/news-2.jpg",
    summary:
      "Emlak vergisi ikinci taksit ödemeleri için son tarih 30 Kasım. Gecikme faizine dikkat.",
    publishDate: "2025-10-25",
    slug: "emlak-vergisi-odemeleri-son-gunler",
  },
  {
    id: 3,
    title: "Kira Artış Oranları Nasıl Hesaplanmalı? İşte Detaylar",
    imageUrl: "/images/demo/news-3.jpg",
    summary:
      "Yeni düzenlemelerle birlikte kira artış oranları belirli kriterlere bağlandı.",
    publishDate: "2025-10-22",
    slug: "kira-artis-oranlari-hesaplama",
  },
  {
    id: 4,
    title: "Yatırım İçin Arsa Alırken Dikkat Edilmesi Gerekenler",
    imageUrl: "/images/demo/news-4.jpg",
    summary:
      "Uzmanlar, arsa yatırımı yaparken imar durumu ve tapu kontrollerinin önemine dikkat çekiyor.",
    publishDate: "2025-10-20",
    slug: "arsa-yatirimi-dikkat-edilmesi-gerekenler",
  },
];

function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function LatestNews() {
  const featured = demoNews[0];
  const others = demoNews.slice(1, 4);

  return (
    <section
      className="py-6 bg-gray-50 border-b border-gray-200"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Emlak Haberleri
          </h2>
          <p className="text-gray-500 text-sm">
            Karaman ve çevresinden güncel gayrimenkul gelişmeleri
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Öne çıkan büyük haber — metinler RESİM ALTINDA */}
          <article
            key={featured.id}
            className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 border border-gray-200"
            itemScope
            itemType="https://schema.org/NewsArticle"
          >
            <Link href={`/haber/${featured.slug}-${featured.id}`}>
              <div className="relative w-full h-72">
                <Image
                  src={featured.imageUrl}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 66vw"
                />
              </div>
            </Link>

            {/* Görselin altında içerik alanı */}
            <div className="p-5">
              <Link href={`/haber/${featured.slug}-${featured.id}`}>
                <h3
                  itemProp="headline"
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors mb-2"
                >
                  {featured.title}
                </h3>
              </Link>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {featured.summary}
              </p>

              <time
                itemProp="datePublished"
                className="text-xs flex items-center text-gray-500"
                dateTime={featured.publishDate}
              >
                <CalendarDays size={12} className="mr-1" />
                {formatDate(featured.publishDate)}
              </time>
            </div>
          </article>

          {/* Sağ sütun: diğer üç haber (aynı kalıyor) */}
          <aside className="lg:col-span-1 flex flex-col">
            <h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-1">
              Son Dakika &amp; Diğer Haberler
            </h3>
            <ul className="space-y-4 flex-grow">
              {others.map((a) => (
                <li
                  key={a.id}
                  className="flex items-start gap-3 group"
                  itemScope
                  itemType="https://schema.org/NewsArticle"
                >
                  <Link
                    href={`/haber/${a.slug}-${a.id}`}
                    className="flex items-start gap-3 hover:bg-gray-100 rounded-lg p-2 transition"
                  >
                    <div className="relative flex-shrink-0 w-14 h-14 rounded overflow-hidden">
                      <Image
                        src={a.imageUrl}
                        alt={a.title}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4
                        itemProp="headline"
                        className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-blue-600"
                      >
                        {a.title}
                      </h4>
                      <time
                        itemProp="datePublished"
                        className="text-xs text-gray-500 flex items-center mt-1"
                        dateTime={a.publishDate}
                      >
                        <CalendarDays size={12} className="mr-1" />
                        {formatDate(a.publishDate)}
                      </time>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-right">
              <Link
                href="/haberler"
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                Tüm Haberler →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
