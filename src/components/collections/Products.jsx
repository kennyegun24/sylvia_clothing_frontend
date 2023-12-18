import React from "react";
import { categories, categories_preview } from "../../data/categories_home";

const Products = () => {
  return (
    <div>
      <div className="category_product_container flex column align_center">
        <p className="category_product_header">
          {categories_preview[0].categories.length} products
        </p>
        <section className="flex gap05rem margin_top_1rem wrap">
          {categories_preview[0].categories.map((cat, _index) => (
            <div className="collection_prod flex column">
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
          ))}
        </section>
      </div>
    </div>
  );
};

export default Products;
