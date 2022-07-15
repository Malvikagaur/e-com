import React, { useState } from "react";
 
export default function Product() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Iphone",
      quantity: 0,
    },
    {
      id: 2,
      productName: "Mac",
      quantity: 0,
    },
    {
      id: 3,
      productName: "Dell",
      quantity: 0,
    },
    {
      id: 4,
      productName: "HP",
      quantity: 0,
    },
    {
      id: 5,
      productName: "Asus",
      quantity: 0,
    },
  ]);
 
  const increment = (id) => {
    const newProducts = [...products];
    newProducts[id - 1].quantity = newProducts[id - 1].quantity + 1;
    setProducts(newProducts);
  };
 
  const decrement = (id) => {
    const newProducts = [...products];
    newProducts[id - 1].quantity = newProducts[id - 1].quantity - 1;
    setProducts(newProducts);
  };
 
  return (
    <div className="text-center mt-32">
      {products.map((product) => {
        return (
          <div>
            <div>Product Name : {product.productName}</div>
            <div>Product Quantity : {product.quantity}</div>
            <button
              onClick={() => {
                increment(product.id);
              }}
            >
              Increase
            </button>
            <button
              onClick={() => {
                decrement(product.id);
              }}
            >
              Decrease
            </button>
          </div>
        );
      })}
    </div>
  );
}