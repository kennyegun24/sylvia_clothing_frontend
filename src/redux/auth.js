import { loadStripe } from "@stripe/stripe-js";
import { loginFailure, loginPending, loginSuccess } from "./user";
const API_URL = "http://localhost:4000";
const pub_key = process.env.STRIPE_PUB_KEY;
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

export const makeOrder = async (products, token) => {
  try {
    await fetch(`${API_URL}/api/orders`, {
      method: "POST",
      body: {
        products,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    alert(error);
  }
};
