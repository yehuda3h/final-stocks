import { useParams } from "react-router";
import { useState, useEffect } from "react";
import getErrorMessage from "../../utils/erorMassages";
 import { api } from "../../utils/api";
import ProdactCarusel from "./components/ProdactCarusel";

export default function PageProdact() {
  const { id } = useParams();
  const [stock, setStock] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchStock = async () => {
      try {
        setIsLoading(true);
        const { data } = await api.get(`/stocks/${id}`);
        setError("");
        setStock(data);
      } catch (error) {
        setError(getErrorMessage(error.status));
      } finally {
        setIsLoading(false);
      }
    };

    fetchStock();
  }, [id]);

 
  return (
    <div className="flex flex-row justify-end px-12 pt-12">
      {stock ? (
        <div className="flex flex-row w-full">
          <div className="w-[40%] h-[400px]">
            <img
              src={stock.image_url}
              alt={stock.product_name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between w-[60%] ml-6">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">{stock.product_name}</h1>
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600">
                  Description: {stock.description}
                </p>
                <p className="text-gray-500">Stock: {stock.stock}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold text-2xl">
                  ${stock.price}
                </span>
              </div>
            </div>
            {stock.user_id && <CardAdvertiser user={stock.user_id} />}
          </div>
        </div>
      ) : isLoading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <p className="text-red-600">{error}</p>
      )}
     </div>
  );
}

function Seller({ user }) {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Seller</h3>
      <div className="space-y-4 flex gap-6 flex-wrap items-center">
        <div className="flex items-center  gap-4">
          <svg
            className="w-6 h-6 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0012 11z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="font-semibold text-gray-800">{user.name}</p>
            <p className="text-gray-600">Seller</p>
          </div>
        </div>
        <div className="flex items-center  gap-4">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div>
            <p className="font-semibold text-gray-800">{user.number_phone}</p>
            <p className="text-gray-600">Phone</p>
          </div>
        </div>
        <div className="flex items-center  gap-4">
          <svg
            className="w-6 h-6 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 4h.01M12 16a4 4 0 110-8 4 4 0 010 8z"
            />
          </svg>
          <div>
            <p className="font-semibold text-gray-800">{user.email}</p>
            <p className="text-gray-600">Email</p>
          </div>
        </div>
      </div>
     
    </div>
        
  );
}
