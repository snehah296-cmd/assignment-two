import React, { useState, useMemo } from "react";

function Shop() {
  const [searchName, setSearchName] = useState("");
  const [priceFilter, setPriceFilter] = useState(false);

  // Create 10,000 fake products
  const products = new Array(10000).fill().map((_, i) => ({
    id: i,
    price: Math.floor(Math.random() * 1000),
  }));

  // useMemo for heavy filtering
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((p) =>
      priceFilter ? p.price > 500 : true
    );
  }, [priceFilter]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Products</h2>

      <input
        type="text"
        placeholder="Type your name..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button
        onClick={() => setPriceFilter(!priceFilter)}
        style={{ padding: "8px" }}
      >
        Toggle Price Filter
      </button>

      <h3>
        Showing Products: {filteredProducts.length}
      </h3>
    </div>
  );
}

export default Shop;