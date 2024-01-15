import React, { useContext, useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { ShowCartContext } from "../../context/showCart";
import { Link } from "react-router-dom";
import ProductCard from "../items/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/collection";
import { itemAdded } from "../../redux/cart";
const Products = () => {
  const { toggleFilter } = useContext(ShowCartContext);
  const collectionName = window.location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory(collectionName));
  }, []);
  const { collection } = useSelector((state) => state.collections);
  const { minVal, maxVal, advFilter } = useSelector((state) => state.filter);
  const [prods, setProds] = useState(collection);
  useEffect(() => {
    const _sortedByPopularPosts = [...collection];
    const e = advFilter;
    if (e === "a-z") {
      _sortedByPopularPosts.sort((a) => a.product_name);
      setProds(_sortedByPopularPosts);
    } else if (e === "z-a") {
      _sortedByPopularPosts.sort((a, b) =>
        b.product_name.localeCompare(a.product_name)
      );
      setProds(_sortedByPopularPosts);
    } else if (e === "new-to-old") {
      _sortedByPopularPosts.sort((a, b) => b.createdAt - a.createdAt);
      setProds(_sortedByPopularPosts);
    } else if (e === "old-to-new") {
      _sortedByPopularPosts.sort((a, b) => a.createdAt - b.createdAt);
      setProds(_sortedByPopularPosts);
    } else if (e === "high-low") {
      _sortedByPopularPosts.sort((a, b) => b.price - a.price);
      setProds(_sortedByPopularPosts);
    } else if (e === "low-hig") {
      _sortedByPopularPosts.sort((a, b) => a.price - b.price);
      setProds(_sortedByPopularPosts);
    } else {
      setProds(collection);
    }
  }, [advFilter, collection]);

  const addItem = (product) => {
    dispatch(
      itemAdded({
        id: product._id,
        product: { ...product, price: product.price },
        quantity: 1,
        price: product.price * 1,
      })
    );
  };

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
          {prods
            .filter((a, b) => a.price >= minVal && a.price <= maxVal)
            .map((cat, _index) => (
              <div className="product_card collection_prod flex column justify_between">
                <Link
                  className="color_initial"
                  to={`${cat.product_name}/${cat._id}`}
                >
                  <ProductCard cat={cat} />
                </Link>
                <div className="width100 flex justify_center">
                  <button
                    className={`padding05rem width90 pointer ${
                      cat.in_stock > 0 ? "in_stock" : "out_stock"
                    }`}
                    onClick={() => addItem(cat)}
                  >
                    {cat.in_stock > 0 ? "Add to cart" : "Out of stock"}
                  </button>
                </div>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default Products;
