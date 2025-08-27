import { useState } from "react";

import AddStockForm from "./AddStockForm";

export default function ButtonOfAdd({ addStock }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-400 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center text-3xl hover:bg-blue-600 transition "
      >
        +
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white p-4 rounded-lg shadow-lg w-80 z-50">
          <AddStockForm
            addStock={(stock) => {
              addStock(stock);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </>
  );
}
