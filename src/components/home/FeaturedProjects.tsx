// src/components/home/FeaturedProjects.tsx
import React from 'react';
// Oluşturduğumuz Proje Kartı ve tipini import ediyoruz
import ProjectCard, { Project } from '@/components/projects/ProjectCard';
import Link from 'next/link';

// Demo Proje Verileri (Normalde backend'den çekilecek)
const demoProjects: Project[] = [
  { id: 1, title: "Modern Yaşam Konutları", mainImageUrl: "/images/demo/project-1.jpg", location: "Merkez / Karaman", status: "Satışta", slug: "modern-yasam-konutlari" },
  { id: 2, title: "Yeşil Vadi Villaları", mainImageUrl: "/images/demo/project-2.jpg", location: "Yeşilada Mh.", status: "Tamamlandı", slug: "yesil-vadi-villalari" },
  { id: 3, title: "Çarşı Rezidans", mainImageUrl: "/images/demo/project-3.jpg", location: "İsmet Paşa Cd.", status: "Satışta", slug: "carsi-rezidans" },
  { id: 4, title: "Göl Kenarı Evleri", mainImageUrl: "/images/demo/project-1.jpg", location: "Sudurağı", status: "Plan Aşamasında", slug: "gol-kenari-evleri" },
  // Admin panelindeki limite göre daha fazla gösterilebilir
];

// Lütfen public/images/demo/ klasörüne project-1.jpg, project-2.jpg vb. ekleyin.

export default function FeaturedProjects() {
  // Gösterilecek proje sayısını admin panelindeki "Proje Limiti" ayarından alacağız
  const projectsToShow = demoProjects; // Şimdilik demo projeleri göster

  return (
    // Arka plan beyaz, üstte ayıraç çizgisi
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Bölüm Başlığı ve Daha Fazla Linki */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Projeler</h2>
          <Link href="/projeler" className="text-sm text-blue-600 hover:underline">
            Tüm Projeler &rarr;
          </Link>
        </div>

        {/* Proje Kartları Grid (İlanlar gibi 4'lü) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsToShow.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}