import { useState } from "react";
import MyStocksList from "./components/myStocksList";
import ButtonOfAdd from "../../components/ButtonOfAdd";

export default function UserPage() {
  const [stocks, setStocks] = useState([]);
  const addStock = (newStock) => {
    setStocks((prev) => [...prev, newStock]);
  };

  return (
    <div>
      <ButtonOfAdd addStock={addStock} />
      <MyStocksList stocks={stocks} setStocks={setStocks} />
    </div>
  );
}
