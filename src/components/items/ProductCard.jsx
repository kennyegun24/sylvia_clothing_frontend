import React from "react";
import "./styles.css";

const ProductCard = ({ cat }) => {
  return (
    <div className="flex column justify_between height100 width100">
      <div className="width100">
        <img src={cat.product_image} alt="" />
        <p className="font18 fontW700">{cat.product_name}</p>
        <p className="font16">${cat.price}</p>
        <p className="font16">{cat.in_stock} in stock</p>
      </div>
      <div className="width100 flex justify_center">
        <button
          className={`padding05rem width90 ${
            cat.in_stock > 0 ? "in_stock" : "out_stock"
          }`}
        >
          {cat.in_stock > 0 ? "Add to cart" : "Out of stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
