import React, { useContext, useEffect, useState } from "react";
import "./cart_modal.css";
import { IoClose } from "react-icons/io5";
import { RiDeleteBin5Line, RiSubtractFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { ShowCartContext } from "../../context/showCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, addQuantity, decreaseQuantity } from "../../redux/cart";

const CartModal = () => {
  const { showCart, toggleCart } = useContext(ShowCartContext);
  const { products, total } = useSelector((state) => state.cart);
  const [items, setItems] = useState(products);
  const dispatch = useDispatch();
  const deleteCartItem = (id, price) => {
    dispatch(deleteCart({ id, price }));
  };

  useEffect(() => {
    setItems(products);
  }, [products]);
  // const increaseQuantity = (index) => {
  //   const updated_values = [...items];
  //   updated_values[index].quantity += 1;
  //   setItems(updated_values);
  // };

  // const reduceQuantity = (index) => {
  //   const updated_values = [...items];
  //   updated_values[index].quantity -= 1;
  //   setItems(updated_values);
  // };

  const increaseQuantity = (id) => {
    dispatch(addQuantity(id));
  };

  const reduceQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <section className={`cart_modal_container ${showCart && "show_cart"} `}>
      <div className="cart_modal flex column align_center">
        <section className="card_header padding1rem">
          <h3>Your Cart</h3>
          <IoClose
            className="cart_hide_icon font20 pointer"
            onClick={toggleCart}
          />
        </section>
        <hr />
        <section className="cart_items">
          {items.map((item, _index) => (
            <section
              className={`cart_item flex gap1rem ${
                _index != items.length - 1 && "mrb"
              }`}
            >
              <img
                src={item.product.product_image}
                className="cart_image"
                alt=""
              />
              <div className="flex column justify_between width100">
                <p className="font14 fontW700 cart_product_name_price">
                  {item.product.product_name}
                </p>
                <p className="font14 fontW700 cart_product_name_price">
                  ₵{item.price}
                </p>
                <div className="flex justify_between align_center">
                  <p className="font12 pointer">
                    <RiDeleteBin5Line
                      onClick={() => deleteCartItem(item.id, item.price)}
                      className="font16"
                    />
                  </p>

                  <div className="cart_add_reduce_div flex align_center">
                    <RiSubtractFill
                      onClick={() =>
                        item.quantity > 1 && reduceQuantity(item.id)
                      }
                      className="pointer cart_reduce"
                      // disabled={item.quantity <= 1}
                    />
                    <p>{item.quantity}</p>
                    <FaPlus
                      onClick={() =>
                        item.quantity < item.product.in_stock &&
                        increaseQuantity(item.id)
                      }
                      className="pointer cart_add"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </section>

        <section className="padding1rem flex align_center justify_between sub_total">
          <h3>Subtotal</h3>
          <p className="fontW700">₵{total}</p>
        </section>
        <Link
          to={"/cart/checkout"}
          onClick={toggleCart}
          className="text_decoration_none black_text pointer checkout_btn fontW700 font20 width90 padding05rem flex justify_center"
        >
          Checkout
        </Link>
        <p className="font14 textCenter margin_top_1rem">
          Guarantee Safe & Secure Checkout with Stripe Payment Gateway
        </p>

        <section className="flex gap2rem margin_top_1rem">
          <FaCcMastercard className="visa_mastarcard" />
          <SiVisa className="visa_mastarcard" />
        </section>

        <p className="font14 margin_top_1rem">Continue Shopping</p>
      </div>
    </section>
  );
};

export default CartModal;
