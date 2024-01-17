import React, { useEffect, useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { createAccount } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Register = ({ setPathName }) => {
  useEffect(() => {
    setPathName("/register");

    return () => {
      setPathName(null);
    };
  }, []); /* eslint-disable-line */
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const updateText = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };
  const registerUser = (e) => {
    e.preventDefault();
    const validationError = {};
    if (userCredentials.firstName.trim() === "") {
      validationError.firstName = "First name should not be empty";
    }
    if (userCredentials.lastName.trim() === "") {
      validationError.lastName = "Last name should not be empty";
    }
    if (!userCredentials.email.trim()) {
      validationError.email = "Email field should not be empty";
    }
    if (userCredentials.password.trim() === "") {
      validationError.password = "Password field should not be empty";
    } else if (userCredentials.password.length <= 7) {
      validationError.password =
        "Password should not be less than 8 characters";
    }
    if (
      userCredentials.confirmPassword.trim() !== userCredentials.password.trim()
    ) {
      validationError.confirmPassword = "Password mismatch";
    }
    setError(validationError);

    if (Object.entries(validationError).length === 0) {
      createAccount(
        {
          ...userCredentials,
        },
        dispatch
      );
    }
  };
  const { authLoading, authError } = useSelector((state) => state.user);

  return (
    <div className="auth_container flex column gap15rem align_center">
      <img src={logo} className="logo" alt="" />
      <div className="auth_container_sm flex gap2rem column">
        <h2>CREATE YOUR ACCOUNT</h2>

        <section className="flex column gap1rem">
          <div className="flex column auth_input_container">
            <span className="">First Name</span>
            <input
              onChange={updateText}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name..."
            />
            <p className="font12 red">{error.firstName}</p>
          </div>
          <div className="flex column auth_input_container">
            <span className="">Last Name</span>
            <input
              onChange={updateText}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name..."
            />
            <p className="font12 red">{error.lastName}</p>
          </div>
          <div className="flex column auth_input_container">
            <span className="">Email Address</span>
            <input
              onChange={updateText}
              type="text"
              name="email"
              id="email"
              placeholder="random@email.com..."
            />
            <p className="font12 red">{error.email}</p>
          </div>
          <div className="flex column auth_input_container">
            <span className="">Password</span>
            <input
              onChange={updateText}
              type="password"
              name="password"
              id="password"
              placeholder="********"
            />
            <p className="font12 red">{error.password}</p>
          </div>
          <div className="flex column auth_input_container">
            <span className="">Confirm Password</span>
            <input
              onChange={updateText}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="********"
            />
            <p className="font12 red">{error.confirmPassword}</p>
          </div>
          <button
            onClick={!authLoading ? registerUser : null}
            className={`
               auth_button
              ${authLoading ? "loadingAuthButton" : "authDormantButton"}
            `}
          >
            {authLoading ? "Creating your account" : "Register"}
          </button>
          {authError && <p className="font12 red">Something went wrong</p>}
        </section>
        <p className="">
          By creating an account, you agree to BK' Fabrics Conditions of Use and
          Privacy Notice.
        </p>
        <hr />
        <p className="font14">
          Already have an account?{" "}
          <Link className="auth_link" to={"/login"}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
