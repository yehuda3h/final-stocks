import React, { useState } from 'react'
import { useEffect,} from "react";
import useAxios from "../../../../hooks/useAxios";
 
export default function StockList() {
    const [stocks, setStocks] = useState([]);
  const { data, error, loading, sendRequest } = useAxios("/stocks");

useEffect(() => {
  const fetchStocks = async () => {
    const result = await sendRequest({
      url: "/stocks",
      method: "GET",
    });
    if (result) setStocks(result);
  };
  fetchStocks();
}, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading stocks {error.message}</div>;


  return (
        <div className="p-4 grow flex items-center justify-center">
      <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
               Stock name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Category code
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Stock price
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Count
              </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                image
              </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  location
              </th>
                 
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                  </th>

            </tr>
          </thead>
            <tbody className="bg-white divide-y divide-gray-100">
                {stocks.map((stock) => (
                <tr key={stock._id} className="hover:bg-blue-50 transition">
                    <td className="px-4 py-2 whitespace-nowrap">{stock.product_name}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{stock.category_code}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{stock.price}$</td>
                    <td className="px-4 py-2 whitespace-nowrap">{stock.stock}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                    <img src={stock.image_url} alt={stock.product_name} className="w-10 h-10 object-cover rounded" />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">{stock.location}</td>
                    
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}
