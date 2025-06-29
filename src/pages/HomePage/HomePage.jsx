import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
export default function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <HeroSection />
      <CategoriesSection />
    </div>
  );
}
