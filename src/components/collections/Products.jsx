import React, { useContext } from "react";
import { categories_preview } from "../../data/categories_home";
import { CiFilter } from "react-icons/ci";
import { ShowCartContext } from "../../context/showCart";
import { Link } from "react-router-dom";
import ProductCard from "../items/ProductCard";
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
            <Link
              className="collection_prod flex column product_card"
              to={`${cat.product_name}`}
            >
              <ProductCard cat={cat} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Products;
