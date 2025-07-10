import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import FavoritesSection from  "./../../../components/FavoritesSection";
export default function HomePage() {
  return (
    <div className=" min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <FavoritesSection/>
    </div>
  );
}
