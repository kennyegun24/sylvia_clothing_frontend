import React, { useContext, useEffect } from "react";
import { categories_preview } from "../../data/categories_home";
import { CiFilter } from "react-icons/ci";
import { ShowCartContext } from "../../context/showCart";
import { Link } from "react-router-dom";
import ProductCard from "../items/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/collection";
const Products = () => {
  const { toggleFilter } = useContext(ShowCartContext);
  const collectionName = window.location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory(collectionName));
  }, []);
  const { collection } = useSelector((state) => state.collections);
  return (
    <div>
      <div className="category_product_container flex column align_center">
        <div className="category_product_header flex gap1rem align_center">
          <p className="">{collection.length} products</p>
          <p className="flex gap05rem mobile_filter" onClick={toggleFilter}>
            Filter
            <CiFilter />
          </p>
        </div>
        <section className="flex gap05rem margin_top_1rem wrap">
          {collection.map((cat, _index) => (
            <Link
              className="collection_prod product_card"
              to={`${cat.product_name}/${cat._id}`}
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
