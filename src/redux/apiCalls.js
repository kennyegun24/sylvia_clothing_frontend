import { loadStripe } from "@stripe/stripe-js";
import { loginFailure, loginPending, loginSuccess } from "./user";
import { resetOrder } from "./order";
import { clearCart } from "./cart";
import axios from "axios";
const API_URL = "http://localhost:4000";

export const loginUser = async ({ email, password }, dispatch) => {
  try {
    dispatch(loginPending(true));
    const body = {
      password: password,
      email: email,
    };

    const axio = axios.create({
      baseURL: "http://localhost:4000/api/",
    });
    const req = await axio.post("/auth/login", body);
    const data = await req.data;
    dispatch(loginSuccess(await data));
  } catch (error) {
    dispatch(loginFailure(true));
    alert(error);
  }
};

export const createAccount = async (
  { firstName, lastName, password, email },
  dispatch
) => {
  const body = {
    first_name: firstName,
    last_name: lastName,
    password: password,
    email: email,
  };

  try {
    dispatch(loginPending(true));
    const axio = axios.create({
      baseURL: "http://localhost:4000/api/",
    });
    const req = await axio.post("/auth/register", body);
    const data = await req.data;
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(true));
  }
};

export const make_payment = async (products, token, id) => {
  const body = { products: products };

  try {
    const req = await fetch(
      "http://localhost:4000/api/payment/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }
    );

    const session = await req.json();
    const stripe_promise = await loadStripe(session.pub_key);
    const result = stripe_promise.redirectToCheckout({
      sessionId: session.id,
    });

    if ((await result).error) {
      alert((await result).error);
    }
  } catch (error) {
    alert(error);
  }
};

export const makeOrder = async (products, token, userDetails, dispatch) => {
  try {
    const body = {
      products: products,
      ...userDetails,
    };

    const axio = axios.create({
      baseURL: "http://localhost:4000/api/",
      headers: {
        token: `Bearer ${token}`,
      },
    });
    const req = await axio.post("/orders", body);
    await req.data;

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
