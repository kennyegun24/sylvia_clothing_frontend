import React from "react";
import "./success.css";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="payment_success_div column">
      <div className="flex align_center column gap15rem padding15rem">
        <div
          style={{
            background: "#0de10d",
          }}
          className="success_icon_div flex align_center justify_center"
        >
          <MdAttachMoney className="success_icon" />
        </div>

        <div className="flex column align_center justify_center gap05rem">
          <h3>Payment Successful</h3>
          <p>Thank you for your payment</p>
        </div>

        <Link
          style={{
            background: "#0de10d",
          }}
          to={"/"}
          className="padding05rem pointer text_decoration_none redirect"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
