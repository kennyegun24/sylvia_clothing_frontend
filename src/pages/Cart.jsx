import React, { useEffect, useState } from "react";
import CartDetails from "../components/cartPage/CartDetails";
import PaymentDetailsForm from "../components/cartPage/PaymentDetailsForm";

import "./cart_styles.css";
import { fetchShippingCost } from "../redux/apiCalls";
const Cart = () => {
  const [countryCode, setCountryCode] = useState({
    value: null,
    label: null,
  });
  const [stateCode, setStateCode] = useState({
    value: null,
    label: null,
  });
  const [shippingFee, setShippingFee] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getShippingFee = async () => {
      setLoading(true);
      const fee = await fetchShippingCost(countryCode.label, stateCode.label);
      setShippingFee(fee);
      setLoading(false);
    };

    if (countryCode?.label?.trim() !== "" && stateCode?.label?.trim() !== "") {
      getShippingFee(); // Fetch the shipping fee when country and state are selected
    }
  }, [countryCode, stateCode]);
  return (
    <div className="flex justify_between cart_checkout_div">
      <div className="padding2rem">
        <PaymentDetailsForm
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          setStateCode={setStateCode}
          stateCode={stateCode}
        />
      </div>
      <div className="padding2rem">
        <CartDetails shippingFee={shippingFee} loading={loading} />
      </div>
    </div>
  );
};

export default Cart;
