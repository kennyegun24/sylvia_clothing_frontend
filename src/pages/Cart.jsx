import React from "react";
import CartDetails from "../components/cartPage/CartDetails";
import PaymentDetailsForm from "../components/cartPage/PaymentDetailsForm";
// import { Elements } from "@stripe/react-stripe-js";

import "./cart_styles.css";
import { loadStripe } from "@stripe/stripe-js";
import { categories_preview } from "../data/categories_home";
const Cart = () => {
  const pub_key =
    "pk_test_51N1y0eFGKykGLNp48Ark1rAlHzEzCLLI8YBGbxbsZDleQ4pOgS0EyDwTwlMpLVop20Wb2u6GryVPkeg8x46G6HUv001pDGfaKH";
  // const client_sec =
  //   "sk_test_51N1y0eFGKykGLNp4cycVEz1dGfnembei9I9xymJbk9YixTnLy5Igr6zqEEO5CveQvpMlRs7CV7ofV4NDLfFdjnnc00AlX8wEyB";

  const make_payment = async () => {
    const stripe_promise = await loadStripe(pub_key);
    const body = categories_preview[0].categories;

    const req = fetch("localhost:4000/create-checkout-session", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const session = (await req).json();
    const result = stripe;
  };
  return (
    <div className="flex justify_between cart_checkout_div">
      <div className="width60 padding2rem">
        {/* <Elements stripe={stripe_promise} options={{ client_sec }}> */}
        <PaymentDetailsForm />
        {/* </Elements> */}
      </div>
      <div className="width40 padding2rem">
        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
