import React from "react";
import CustomInputs from "./CustomInputs";
import "./styles.css";
import PaymentOptions from "./PaymentOptions";
import { Link } from "react-router-dom";
const PaymentDetailsForm = () => {
  return (
    <div className="flex column gap3rem width100">
      <section className="flex column gap1rem">
        <h2>Contact</h2>
        <CustomInputs
          styles={{
            width: "width100",
            placeHolder: "Email...",
            type: "text",
          }}
        />
      </section>
      <div className="flex column gap1rem width100">
        <h2>Delivery</h2>
        <CustomInputs
          styles={{
            width: "width100",
            placeHolder: "Country...",
            type: "text",
          }}
        />
        <div className="flex justify_between width100">
          <CustomInputs
            styles={{
              width: "width45",
              placeHolder: "First Name...",
              type: "text",
            }}
          />
          <CustomInputs
            styles={{
              width: "width45",
              placeHolder: "Last Name...",
              type: "text",
            }}
          />
        </div>
        <CustomInputs
          styles={{
            width: "width100",
            placeHolder: "Company (Optional)...",
            type: "text",
          }}
        />
        <CustomInputs
          styles={{
            width: "width100",
            placeHolder: "Address...",
            type: "text",
          }}
        />
        <div className="flex justify_between width100">
          <CustomInputs
            styles={{
              width: "width30",
              placeHolder: "City...",
              type: "text",
            }}
          />
          <CustomInputs
            styles={{
              width: "width30",
              placeHolder: "State / Province...",
              type: "text",
            }}
          />
          <CustomInputs
            styles={{
              width: "width30",
              placeHolder: "Postal Code...",
              type: "text",
            }}
          />
        </div>
        <CustomInputs
          styles={{
            width: "width100",
            placeHolder: "Phone Number...",
            type: "text",
          }}
        />
      </div>
      <section className="flex column gap1rem width100">
        <div className="flex column gap1rem">
          <h2>Payment</h2>
          <p className="font16">All transactions are secure and encrypted.</p>
          <PaymentOptions />
        </div>
        <Link to={""} className="pay_now_btn flex justify_center">
          Pay Now
        </Link>
      </section>
    </div>
  );
};

export default PaymentDetailsForm;
