import React from "react";
import image from "../../assets/IMG-20231214-WA0056.jpg";

const CartDetails = () => {
  return (
    <div className="cart_product_preview_div flex column gap1rem">
      <div className="cart_product_preview_details_div flex align_center justify_between">
        <div className="flex align_center gap1rem">
          <img src={image} alt="" />
          <p className="font16">Ashanti Fabric Blue</p>
        </div>
        <p className="font16">$500</p>
      </div>

      <div className="flex align_center justify_between">
        <p className="font16">Subtotal</p>
        <p className="font14">$500.00</p>
      </div>

      <div className="flex align_center justify_between">
        <p className="font16">Shipping Fee</p>
        <p className="font14">$10.00</p>
      </div>

      <div className="flex align_center justify_between">
        <p className="font16">Total</p>
        <p className="font14">$510.00</p>
      </div>
    </div>
  );
};

export default CartDetails;
