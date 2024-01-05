import React from "react";
import "./success.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Failure = () => {
  return (
    <div className="payment_success_div column">
      <div className="flex align_center column gap15rem padding15rem">
        <div
          style={{
            background: "#fe3d3d",
          }}
          className="success_icon_div flex align_center justify_center"
        >
          <IoMdClose className="success_icon" />
        </div>

        <div className="flex column align_center justify_center gap05rem">
          <h3>Payment Unsuccessful</h3>
          <p>Your payment wasn't able to be processed</p>
        </div>

        <Link
          className="padding05rem pointer text_decoration_none redirect"
          style={{
            background: "#fe3d3d",
          }}
          to={"/cart/checkout"}
        >
          Go to cart
        </Link>
      </div>
    </div>
  );
};

export default Failure;
