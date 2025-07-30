import { useEffect, useState } from "react";
import { useRef } from "react";
import { api } from "../../../utils/api";

export default function HeroSection() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get("/categories");
        setImages(data.data.map(category => ({
          url: category.image,
          alt: category.category
        })));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images]);

  return (
    <div className="relative h-[80vh]">
      {images.length > 0 && (
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-3xl font-bold mb-4">The House of the Stockers</h1>
        <button className="bg-gradient-to-r from-blue-300 to-blue-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          start now
        </button>
      </div>
    </div>
  );
}
