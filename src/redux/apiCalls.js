import { loadStripe } from "@stripe/stripe-js";
import { loginFailure, loginPending, loginSuccess } from "./user";
import { resetOrder } from "./order";
import { clearCart } from "./cart";
const API_URL = "http://localhost:4000";
const pub_key =
  "pk_test_51N1y0eFGKykGLNp48Ark1rAlHzEzCLLI8YBGbxbsZDleQ4pOgS0EyDwTwlMpLVop20Wb2u6GryVPkeg8x46G6HUv001pDGfaKH";
export const loginUser = async ({ userName, password }) => {
  try {
    loginPending(true);
    const req = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      body: {
        user_name: userName,
        password: password,
      },
    });
    const data = await req.json();
    loginSuccess(data);
  } catch (error) {
    loginFailure(true);
    alert(error);
  }
};

export const createAccount = async ({ userName, password, email }) => {
  try {
    loginPending(true);
    const req = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      body: {
        user_name: userName,
        password: password,
        email: email,
      },
    });
    const data = await req.json();
    loginSuccess(data);
  } catch (error) {
    loginFailure(true);
    alert(error);
  }
};

export const make_payment = async (products) => {
  console.log(pub_key);
  const stripe_promise = await loadStripe(pub_key);
  const body = { products: products };
  alert("pay");

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

export const makeOrder = async (products, token, userDetails, dispatch) => {
  try {
    await fetch(`${API_URL}/api/orders`, {
      method: "POST",
      body: {
        products: products,
        ...userDetails,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(resetOrder());
    dispatch(clearCart());
  } catch (error) {
    alert(error);
  }
};

export const makeReview = async (token, product_id, rating) => {
  try {
    await fetch(`${API_URL}/api/product/rate`, {
      method: "POST",
      body: {
        product_id: product_id,
        rating: rating,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    alert(error);
  }
};
