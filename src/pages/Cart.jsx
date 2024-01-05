import React from "react";
import CartDetails from "../components/cartPage/CartDetails";
import PaymentDetailsForm from "../components/cartPage/PaymentDetailsForm";
// import { Elements } from "@stripe/react-stripe-js";

import "./cart_styles.css";
import { loadStripe } from "@stripe/stripe-js";
const Cart = () => {
  const pub_key =
    "pk_test_51N1y0eFGKykGLNp48Ark1rAlHzEzCLLI8YBGbxbsZDleQ4pOgS0EyDwTwlMpLVop20Wb2u6GryVPkeg8x46G6HUv001pDGfaKH";
  const products = [
    {
      id: "6595ef2ad58b712b93d3c0be",
      quantity: 1,
    },
    {
      id: "6596813bc249d3c1b6b470f1",
      quantity: 2,
    },
    {
      id: "6596866ad4c87ac513edef6e",
      quantity: 2,
    },
    {
      id: "65970a32dcea060ab9661b12",
      quantity: 5,
    },
  ];
  const make_payment = async () => {
    const stripe_promise = await loadStripe(pub_key);
    const body = { products: products };

    try {
      const req = await fetch(
        "http://localhost:4000/api/payment/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const session = await req.json();
      const result = stripe_promise.redirectToCheckout({
        sessionId: session.id,
      });

      if ((await result).error) {
        console.log((await result).error);
      }
    } catch (error) {
      alert("Somethign went wrong");
    }
  };
  return (
    <div className="flex justify_between cart_checkout_div">
      <div className="padding2rem">
        <PaymentDetailsForm makePayment={make_payment} />
      </div>
      <div className="padding2rem">
        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
