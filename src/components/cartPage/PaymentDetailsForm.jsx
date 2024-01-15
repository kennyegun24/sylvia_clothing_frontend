import React, { useState } from "react";
import CustomInputs from "./CustomInputs";
import "./styles.css";
import PaymentOptions from "./PaymentOptions";
import { make_payment } from "../../redux/apiCalls";
import { useSelector } from "react-redux";
const PaymentDetailsForm = () => {
  // const products = [
  //   {
  //     id: "6595ef2ad58b712b93d3c0be",
  //     quantity: 1,
  //   },
  //   {
  //     id: "6596813bc249d3c1b6b470f1",
  //     quantity: 2,
  //   },
  //   {
  //     id: "6596866ad4c87ac513edef6e",
  //     quantity: 2,
  //   },
  //   {
  //     id: "65970a32dcea060ab9661b12",
  //     quantity: 5,
  //   },
  // ];
  // const makePayment = () => {
  // };
  const { currentUser } = useSelector((state) => state.user);
  const { total, products } = useSelector((state) => state.cart);
  const [userDetails, setUserDetails] = useState({
    userId: currentUser?._id,
    amount: total,
    address: "",
    postalCode: "",
    email: currentUser?.email,
    phoneNumber: "",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    state: "",
    products: products,
  });
  const [error, setError] = useState({});

  const updateText = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const submitOrder = () => {
    const validationError = {};
    if (userDetails.firstName.trim() === "") {
      validationError.firstName = "First name should not be empty";
    }
    if (userDetails.lastName.trim() === "") {
      validationError.lastName = "Last name should not be empty";
    }
    if (!userDetails.address.trim()) {
      validationError.address = "Your address must be filled";
    }
    if (!userDetails.city.trim()) {
      validationError.city = "City must be filled";
    }
    if (!userDetails.postalCode.trim()) {
      validationError.postalCode = "Postal Code is required";
    }
    if (!userDetails.state.trim()) {
      validationError.state = "State is required";
    }
    if (!userDetails.country.trim()) {
      validationError.country = "Country is required";
    }
    if (!userDetails.phoneNumber.trim()) {
      validationError.phoneNumber = "Phone number is required";
    }
    setError(validationError);

    if (Object.entries(validationError).length === 0) {
      // alert("success");
      make_payment(products);
    }
  };

  return (
    <div className="flex column gap3rem width100">
      <section className="flex column gap1rem">
        <h2>Contact</h2>

        <input
          type="text"
          name="email"
          id=""
          className="width100 padding1rem font14"
          style={{ cursor: "not-allowed" }}
          placeholder="Email..."
          value={currentUser?.email}
          disabled
        />
      </section>
      <div className="flex column gap1rem width100">
        <h2>Delivery</h2>
        <div className="width100">
          <CustomInputs
            styles={{
              width: "width100",
              placeHolder: "Country...",
              type: "text",
              name: "country",
            }}
            updateText={updateText}
          />
          <p className="font12 red">{error.country}</p>
        </div>
        <div className="flex justify_between align_start width100">
          <div className="width45">
            <CustomInputs
              styles={{
                width: "width100",
                placeHolder: "First Name...",
                type: "text",
                name: "firstName",
              }}
              updateText={updateText}
            />
            <p className="font12 red">{error.firstName}</p>
          </div>
          <div className="width45">
            <CustomInputs
              styles={{
                width: "width100",
                placeHolder: "Last Name...",
                type: "text",
                name: "lastName",
              }}
              updateText={updateText}
            />
            <p className="font12 red">{error.lastName}</p>
          </div>
        </div>
        <div className="width100">
          <CustomInputs
            styles={{
              width: "width100",
              placeHolder: "Address...",
              type: "text",
              name: "address",
            }}
            updateText={updateText}
          />
          <p className="font12 red">{error.address}</p>
        </div>
        <div className="flex justify_between align_start width100">
          <div className="width30">
            <CustomInputs
              styles={{
                width: "width100",
                placeHolder: "City...",
                type: "text",
                name: "city",
              }}
              updateText={updateText}
            />
            <p className="font12 red">{error.city}</p>
          </div>
          <div className="width30">
            <CustomInputs
              styles={{
                width: "width100",
                placeHolder: "State / Province...",
                type: "text",
                name: "state",
              }}
              updateText={updateText}
            />
            <p className="font12 red">{error.state}</p>
          </div>
          <div className="width30">
            <CustomInputs
              styles={{
                width: "width100",
                placeHolder: "Postal Code...",
                type: "text",
                name: "postalCode",
              }}
              updateText={updateText}
            />
            <p className="font12 red">{error.postalCode}</p>
          </div>
        </div>
        <div className="width100">
          <CustomInputs
            styles={{
              width: "width100",
              placeHolder: "Phone Number...",
              type: "text",
              name: "phoneNumber",
            }}
            updateText={updateText}
          />
          <p className="font12 red">{error.phoneNumber}</p>
        </div>
      </div>
      <section className="flex column gap1rem width100">
        <div className="flex column gap1rem">
          <h2>Payment</h2>
          <p className="font16">All transactions are secure and encrypted.</p>
          <PaymentOptions />
        </div>
        <button
          onClick={submitOrder}
          className="pay_now_btn flex justify_center pointer"
        >
          Pay Now
        </button>
      </section>
    </div>
  );
};

export default PaymentDetailsForm;
