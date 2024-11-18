import React from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa";
import { itemAdded } from "../../redux/cart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ cat }) => {
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
    <div className="flex column justify_between height100 width100">
      <Link
        to={`/collections/${cat.categories[0]}/${cat.product_name}/${cat._id}`}
        className="width100"
      >
        <div className="img_div">
          <img src={cat.product_image} alt="" />
        </div>
        <div className="flex column padding05rem">
          <div className="star_div">
            <FaStar className="product_star" color="#ff9d00" />
            <p>4 stars (124)</p>
          </div>
          <p className="font16 fontW700">{cat.product_name}</p>
          <p className="font18">₵{cat.price}</p>
          <p className="font16">{cat.in_stock} in stock</p>
        </div>
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
  );
};

export default ProductCard;
