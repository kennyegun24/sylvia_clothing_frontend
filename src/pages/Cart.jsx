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
      product_image:
        "https://res.cloudinary.com/drfqge33t/image/upload/v1697414755/person3_ktvcwi.jpg",
      product_name: "Ashanti Multicolored Fabric",
      price: 576,
      in_stock: 0,
      quantity: 1,
    },
    {
      product_image:
        "https://res.cloudinary.com/drfqge33t/image/upload/v1697414753/person1_f9amhm.jpg",
      product_name: "Ashanti Blue Fabrics",
      price: 221,
      in_stock: 15,
      quantity: 2,
    },
    {
      product_image:
        "https://res.cloudinary.com/drfqge33t/image/upload/v1697414755/person3_ktvcwi.jpg",
      product_name: "Ashanti Green Fabrics",
      price: 85,
      in_stock: 6,
      quantity: 2,
    },
    {
      product_image:
        "https://res.cloudinary.com/drfqge33t/image/upload/v1696797490/asset21_mrhqou.jpg",
      product_name: "Ashanti Multicolored Fabric",
      price: 576,
      in_stock: 0,
      quantity: 5,
    },
    {
      product_image:
        "https://res.cloudinary.com/drfqge33t/image/upload/v1696797486/asset19_llm6fd.jpg",
      product_name: "Ashanti Blue Fabrics",
      price: 745,
      in_stock: 15,
      quantity: 3,
    },
    {
      product_image:
        "https://res.cloudinary.com/drfqge33t/image/upload/v1696797480/asset10_b7dcy1.jpg",
      product_name: "Ashanti Green Fabrics",
      price: 46,
      in_stock: 6,
      quantity: 2,
    },
  ];
  const make_payment = async () => {
    const stripe_promise = await loadStripe(pub_key);
    const body = { products: products };

    const req = await fetch("http://localhost:4000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const session = await req.json();
    console.log(session.id);
    const result = stripe_promise.redirectToCheckout({
      sessionId: session.id,
    });

    if ((await result).error) {
      console.log((await result).error);
    }
  };
  return (
    <div className="flex justify_between cart_checkout_div">
      <div className="width60 padding2rem">
        <PaymentDetailsForm makePayment={make_payment} />
      </div>
      <div className="width40 padding2rem">
        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
