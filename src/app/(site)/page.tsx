import HeroSearch from "@/components/home/HeroSearch";
import ShowcaseListings from "@/components/home/ShowcaseListings";
import PopularCategories from "@/components/home/PopularCategories";
import RecentListings from "@/components/home/RecentListings";
import FeaturedOffices from "@/components/home/FeaturedOffices";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import LatestNews from "@/components/home/LatestNews";

export default function Home() {
  return (
    <>
      <HeroSearch />
      <ShowcaseListings />
      <PopularCategories />
      <RecentListings />
      <FeaturedOffices />
      <FeaturedProjects />

      <div className="border-t border-gray-100 bg-gray-50">
        <LatestNews />
      </div>
    </>
  );
}
