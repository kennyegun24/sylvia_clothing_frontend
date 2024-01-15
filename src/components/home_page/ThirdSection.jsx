import React from "react";
import ProductCard from "../items/ProductCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { itemAdded } from "../../redux/cart";

const ThirdSection = ({ data, text, link }) => {
  const productsArray = data.categories || data;
  const dispatch = useDispatch();
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
    <div className=" margin_top_2rem third_section flex column align_center">
      <h3 className="fontW700 width100">{text}</h3>
      <section className="flex gap1rem margin_top_1rem">
        {productsArray.map((cat, _index) => (
          <div className="collection_prod flex column justify_between">
            <Link
              to={`collections/${link}/${cat.product_name}/${cat._id}`}
              className="slides_carousel flex column"
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
      <button className="view_category_btn pointer font18">View More</button>
    </div>
  );
};

export default ThirdSection;
