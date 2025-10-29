// src/components/projects/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building, Tag } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  mainImageUrl: string;
  minPrice?: number | string;
  maxPrice?: number | string;
  currency?: "TL" | "USD" | "EUR" | string;
  location: string;
  locationBadge?: string;
  status?: string; // "Satışta", "Tamamlandı", "Plan Aşamasında" vb.
  slug: string;
}

interface ProjectCardProps {
  project: Project;
}

function formatPrice(value: number | string | undefined, currency: string = "TL") {
  if (value === undefined || value === null) return null;
  const n = typeof value === "number" ? value : Number(String(value).replace(/[^\d.-]/g, ""));
  const formatted = isNaN(n)
    ? String(value)
    : new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(n);
  return `${formatted} ${currency}`;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const badgeText = project.locationBadge?.trim() || project.location;
  const minPriceText = formatPrice(project.minPrice, project.currency || "TL");
  const maxPriceText = formatPrice(project.maxPrice, project.currency || "TL");

  const priceRangeText = minPriceText && maxPriceText
    ? `${minPriceText} - ${maxPriceText}`
    : minPriceText
    ? `${minPriceText}'den başlayan fiyatlarla`
    : null;

  const statusColor =
    project.status === "Satışta"
      ? "bg-green-600"
      : project.status === "Tamamlandı"
      ? "bg-gray-600"
      : project.status
      ? "bg-yellow-500 text-black"
      : "bg-transparent";

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* === Görsel Alanı === */}
      <Link href={`/proje/${project.slug}-${project.id}`} className="block relative h-48 w-full">
        <Image
          src={project.mainImageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />

        {/* === Lokasyon Rozeti (ListingCard tarzında mavi, sol üst) === */}
        <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 bg-blue-600 text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-md">
          <MapPin size={13} />
          <span className="max-w-[180px] truncate">{badgeText}</span>
        </span>

        {/* === Durum Rozeti (sağ üst köşe) === */}
        {project.status && (
          <span
            className={`absolute top-2 right-2 text-[11px] font-semibold px-2 py-0.5 rounded shadow ${statusColor} text-white`}
          >
            {project.status}
          </span>
        )}
      </Link>

      {/* === İçerik Alanı === */}
      <div className="p-3 flex flex-col flex-grow">
        <Link href={`/proje/${project.slug}-${project.id}`} className="block">
          <h3
            className="text-[15px] leading-snug font-semibold text-gray-800 hover:text-blue-600 mb-1 truncate"
            title={project.title}
          >
            {project.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mb-2 flex items-center">
          <MapPin size={14} className="mr-1 flex-shrink-0" />
          <span className="truncate">{project.location}</span>
        </p>

        {priceRangeText && (
          <div className="flex items-center justify-between mb-3 text-sm text-gray-700">
            <p className="font-medium text-blue-600 flex items-center gap-1">
              <Tag size={14} /> {priceRangeText}
            </p>
          </div>
        )}

        <div className="mt-auto border-t pt-2">
          <span className="inline-flex items-center text-xs text-blue-600 font-medium group-hover:underline">
            Proje Detayları <Building size={14} className="ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
}
