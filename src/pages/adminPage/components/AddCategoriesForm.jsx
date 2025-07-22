import React from "react";
 import { useState } from "react";
export default function AddCategoriesForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const [categoryName, setCategoryName] = useState("");
    const [categoryCode, setCategoryCode] = useState("");
  };
  return (
    <section>
      <h1>catgories</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Category Name</label>
          <input type="text" id="name" name="name" onChange={(e) => setCategoryName(e.target.value)} />
        </div>

        <div>
          <label htmlFor="categoryCode">Category Code</label>
          <input type="text" id="categoryCode" name="categoryCode" onChange={(e) => setCategoryCode(e.target.value)} />

        </div>
        <button type="submit">submit</button>
      </form>
    </section>
  );
}
