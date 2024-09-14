import React, { useEffect, useState } from "react";
import "./styles.css";
import PaymentOptions from "./PaymentOptions";
import { make_payment } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../redux/order";
import { Button, Form, Input, Select } from "antd";
import { countries } from "../../countries";
const PaymentDetailsForm = ({
  stateCode,
  setStateCode,
  countryCode,
  setCountryCode,
}) => {
  const { currentUser } = useSelector((state) => state.user);
  const { total, products } = useSelector((state) => state.cart);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [loading, setLoading] = useState({
    countries: false,
    states: false,
  });

  const [userDetails, setUserDetails] = useState({
    userId: currentUser?._id,
    amount: total,
    address: "",
    postalCode: "",
    email: currentUser?.email,
    phoneNumber: "",
    firstName: currentUser?.first_name,
    lastName: currentUser?.last_name,
    state: "",
    products: products,
  });
  const dispatch = useDispatch();
  const updateText = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const submitOrder = () => {
    dispatch(
      addOrder({
        ...userDetails,
        country: countryCode.label,
        state: stateCode.label,
      })
    );
    make_payment(
      products,
      currentUser?.access_token,
      currentUser?._id,
      countryCode.label,
      stateCode.label
    );
  };

  useEffect(() => {
    setLoading((prev) => ({ ...prev, countries: true }));
    setCountryList(countries);
    setLoading((prev) => ({ ...prev, countries: false }));
  }, []);
  const handleCountryChange = (value, e) => {
    setCountryCode(e);
    setStateList([]);
  };

  const handleStateChange = (value, e) => {
    setStateCode(e);
  };

  const onStatesFocus = async () => {
    setLoading((prev) => ({ ...prev, states: true }));
    const { states } = await import("../../states");
    const selectedCountry = states?.find(
      (state) => state.country.toLowerCase() === countryCode.value
    );
    if (selectedCountry) {
      setStateList(
        selectedCountry.states || [
          {
            label: "No State Found",
            value: "Nan",
          },
        ]
      );
    }
    setLoading((prev) => ({ ...prev, states: false }));
  };

  return (
    <Form onFinish={submitOrder} className="flex column gap3rem width100">
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
        <div className="flex justify_between align_start width100">
          <div className="width45">
            <input
              type="text"
              name="firstName"
              id=""
              className="width100 padding1rem font14"
              style={{ cursor: "not-allowed" }}
              placeholder="First Name..."
              value={currentUser?.first_name}
              disabled
            />
          </div>
          <div className="width45">
            <input
              type="text"
              name="lastName"
              id=""
              className="width100 padding1rem font14"
              style={{ cursor: "not-allowed" }}
              placeholder="Last Name..."
              value={currentUser?.last_name}
              disabled
            />
          </div>
        </div>
        <Form.Item
          required
          rules={[
            { required: true, message: "Address field should not be empty" },
          ]}
          name="address"
          style={{ width: "100%", marginBottom: 0 }}
        >
          <Input
            autoComplete="false"
            name="address"
            placeholder="Address..."
            type="text"
            onChange={updateText}
            style={{ width: "100%", padding: "0.75rem 1rem" }}
          />
        </Form.Item>
        <div
          className="width100 flex justify_between align_center"
          style={{ height: "fit-content", margin: 0, padding: 0 }}
        >
          <Form.Item
            required
            rules={[{ required: true, message: "Select your country" }]}
            name="country"
            style={{ width: "45%", marginBottom: 0 }}
          >
            <Select
              style={{ height: "3rem" }}
              onChange={handleCountryChange}
              placeholder="Select Country"
              options={countryList.map((country) => ({
                label: country.name,
                value: country.alpha2,
              }))}
              showSearch
              loading={loading.countries}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </Form.Item>

          <Form.Item
            required
            name={"states"}
            rules={[{ required: true, message: "States should be selected" }]}
            style={{ width: "45%", marginBottom: 0 }}
          >
            <Select
              style={{
                height: "3rem",
              }}
              onChange={handleStateChange}
              options={stateList.map((state) => ({
                label: state.name,
                value: state.code,
              }))}
              loading={loading.states}
              onFocus={onStatesFocus}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              showSearch
              placeholder="Select State"
            />
          </Form.Item>
        </div>
        <div className="flex justify_between align_start width100">
          <Form.Item
            required
            rules={[
              { required: true, message: "City field should not be empty" },
            ]}
            name="city"
            style={{ width: "30%", marginBottom: 0 }}
          >
            <Input
              autoComplete="false"
              name="city"
              placeholder="City..."
              type="text"
              onChange={updateText}
              style={{ width: "100%", padding: "0.75rem 1rem" }}
            />
          </Form.Item>
          <Form.Item
            required
            rules={[
              { required: true, message: "Phone should not be empty" },
              { min: 7, message: "Number not complete" },
            ]}
            name="phoneNumber"
            style={{ width: "30%", marginBottom: 0 }}
          >
            <Input
              autoComplete="false"
              name="phoneNumber"
              placeholder="Phone Number..."
              type="text"
              onChange={updateText}
              style={{ width: "100%", padding: "0.75rem 1rem" }}
            />
          </Form.Item>
          <Form.Item
            required
            rules={[
              { required: true, message: "Postal Code should not be empty" },
            ]}
            name="postalCode"
            style={{ width: "30%", marginBottom: 0 }}
          >
            <Input
              autoComplete="false"
              name="postalCode"
              placeholder="Postal Code..."
              type="text"
              onChange={updateText}
              style={{ width: "100%", padding: "0.75rem 1rem" }}
            />
          </Form.Item>
        </div>
      </div>
      <section className="flex column gap1rem width100">
        <div className="flex column gap1rem">
          <h2>Payment</h2>
          <p className="font16">All transactions are secure and encrypted.</p>
          <PaymentOptions />
        </div>
        <Button htmlType="submit" className="pay_now_btn  pointer">
          Pay Now
        </Button>
      </section>
    </Form>
  );
};

export default PaymentDetailsForm;
