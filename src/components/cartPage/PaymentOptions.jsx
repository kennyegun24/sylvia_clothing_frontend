import React from "react";
import { PiCreditCardThin } from "react-icons/pi";

const PaymentOptions = () => {
  return (
    <div className="flex column payment_option_div">
      <section className="flex gap05rem padding1rem payment_option_header">
        <input
          readOnly
          type="radio"
          id="payment1"
          checked
          className="pointer"
        />
        <label htmlFor="payment1" className="pointer font14">
          MoMo
        </label>
      </section>
      <section className="flex align_center column gap1rem justify_center padding2rem payment_option_body">
        <PiCreditCardThin className="card_icon" />
        <p className="textCenter">
          Make the payment via momo app, then contact the seller after
          successfully making the payment.
          <br />
          <br />
          IMPORTANT: Make sure you use thesame EMAIL ADDRESS and NAME YOU FILLED
          IN THE FORM to make payment
        </p>
      </section>
    </div>
  );
};

export default PaymentOptions;
