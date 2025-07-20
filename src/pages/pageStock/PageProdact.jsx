import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import getErrorMessage from "../../utils/erorMassages";
import CardAdvertiser from "./CardAdvertiser";

export default function PageProdact() {
  const { id } = useParams();
  const [stock, setStock] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`http://localhost:3000/stocks/${id}`);
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
  console.log(stock?.user_id);

  return (
    <div>
      <CardAdvertiser user={stock?.user_id} />
      {stock ? (
        <div>
          <h1 className="text-center  font-bold ">{stock.product_name}</h1>
          <img src={stock.image_url} alt={stock.product_name} className="" />
          <p>{stock.description}</p>
          <p>{stock.price} $</p>
        </div>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}
