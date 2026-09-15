import React, { useMemo, useState } from 'react'

const UseRef2 = () => {

  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "iPhone 15", price: 70000 },
    { id: 2, name: "Samsung Galaxy S24", price: 65000 },
    { id: 3, name: "OnePlus 12", price: 55000 },
    { id: 4, name: "HP Laptop", price: 60000 },
    { id: 5, name: "Dell Laptop", price: 58000 },
    { id: 6, name: "Wireless Mouse", price: 1200 },
    { id: 7, name: "Keyboard", price: 1800 },
    { id: 8, name: "AirPods", price: 15000 }
  ];
  const filteredProducts = useMemo(() => {
    console.log("Filtering Products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Product Search
        </h1>
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none"
          />
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <div
            
              key={product.id}
              className="bg-white p-5 rounded-xl shadow"
            >
              <h2 className="text-xl font-bold mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600">
                Price: ₹{product.price}
              </p>
            </div>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-red-500 text-xl mt-8">
            No Product Found
          </p>
        )}
      </div>

    </>
  )
}
export default UseRef2