// src/app/page.tsx
import HeroSearch from '@/components/home/HeroSearch';
import ShowcaseListings from '@/components/home/ShowcaseListings';
import PopularCategories from '@/components/home/PopularCategories';
import RecentListings from '@/components/home/RecentListings';
import FeaturedOffices from '@/components/home/FeaturedOffices';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import LatestNews from '@/components/home/LatestNews';
import Footer from '@/components/layout/Footer'; // ✅ Footer eklendi

export default function Home() {
  return (
    <>
      <main>
        <HeroSearch />
        <ShowcaseListings />
        <PopularCategories />
        <RecentListings />
        <FeaturedOffices />
        <FeaturedProjects />

        {/* === Footer öncesi birleşik haber alanı === */}
        <div className="bg-gray-50 border-t border-gray-100">
          <LatestNews />
        </div>
      </main>
         
    </>
  );
}
