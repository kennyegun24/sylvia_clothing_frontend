import React from "react";
import CartDetails from "../components/cartPage/CartDetails";
import PaymentDetailsForm from "../components/cartPage/PaymentDetailsForm";
// import { Elements } from "@stripe/react-stripe-js";

import "./cart_styles.css";
const Cart = () => {
  return (
    <div className="flex justify_between cart_checkout_div">
      <div className="padding2rem">
        <PaymentDetailsForm />
      </div>
      <div className="padding2rem">
        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
