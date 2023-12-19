import React, { useContext } from "react";
import { categories, categories_preview } from "../../data/categories_home";
import { CiFilter } from "react-icons/ci";
import { ShowCartContext } from "../../context/showCart";
const Products = () => {
  const { toggleFilter } = useContext(ShowCartContext);
  return (
    <div>
      <div className="category_product_container flex column align_center">
        <div className="category_product_header flex gap1rem align_center">
          <p className="">{categories_preview[0].categories.length} products</p>
          <p className="flex gap05rem mobile_filter" onClick={toggleFilter}>
            Filter
            <CiFilter />
          </p>
        </div>
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
