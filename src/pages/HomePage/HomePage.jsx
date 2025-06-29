import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import FavoritesSection from "../../components/FavoritesSection";
export default function HomePage() {
  return (
    <div className=" min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <FavoritesSection/>
    </div>
  );
}
