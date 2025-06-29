import categories from "../../../data/categories.json";
import { Link } from "react-router";

export default function CategoriesSection() {
  return (
    <div className="py-5">
      <h2 className="text-3xl font-bold text-center text-blue-200 ">
        Categories
      </h2>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {categories.map((item) => (
          <Link to="/stocks" key={item.id}>
            <CatItem category={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function CatItem({ category }) {
  return (
    <div className="text-center max-w-24 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-120 hover:-translate-y-3 hover:rotate-3 hover:shadow-2xl delay-0">
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg border-2 border-blue-300">
        <img
          src={category.image}
          alt={category.category}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-3 text-md font-semibold text-blue-300">
        {category.category}
      </h2>
    </div>
  );
}
