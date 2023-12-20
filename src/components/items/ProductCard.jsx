import React from "react";
import "./styles.css";

const ProductCard = ({ cat }) => {
  return (
    <div>
      <img src={cat.product_image} alt="" />
      <p className="fontW700">{cat.product_name}</p>
      <p>${cat.price}</p>
      <p>{cat.in_stock} in stock</p>
      <button
        className={`padding05rem ${
          cat.in_stock > 0 ? "in_stock" : "out_stock"
        }`}
      >
        {cat.in_stock > 0 ? "Add to cart" : "Out of stock"}
      </button>
    </div>
  );
};

export default ProductCard;
