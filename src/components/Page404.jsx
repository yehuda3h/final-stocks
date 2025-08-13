import { useNavigate } from "react-router";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2">
        Page not found
      </p>
      <p className="text-gray-600 mb-6 text-center">
        It seems you took the wrong path... but you can always come back home.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
        text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl 
        hover:scale-105 transform transition duration-300 ease-in-out"
      >
        Back to home page
      </button>
    </div>
  );
}
