import React from "react";
import { useSelector } from "react-redux";

const CartDetails = ({ shippingFee, loading }) => {
  const { total } = useSelector((state) => state.cart);
  const totalPrice = parseInt(total) + parseInt(shippingFee);
  return (
    <div className="cart_product_preview_div flex column gap1rem">
      <div className="flex align_center justify_between">
        <p className="font16">Subtotal</p>
        <p className="font14">₵{total}</p>
      </div>

      <div className="flex align_center justify_between">
        <p className="font16">Shipping Fee</p>
        <p className="font14">
          {loading ? "Loading..." : `₵${shippingFee?.toFixed(2)}`}
        </p>
      </div>

      <div className="flex align_center justify_between">
        <p className="font16">Total</p>
        <p className="font14">₵{totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartDetails;
