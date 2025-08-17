import { useParams } from "react-router";
import { useState, useEffect } from "react";
import getErrorMessage from "../../utils/erorMassages";
import CardAdvertiser from "./CardAdvertiser";
import { api } from "../../utils/api";

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

  console.log(error);

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

// קומפוננטת Seller הוסרה כי היא הוחלפה ב-CardAdvertiser
