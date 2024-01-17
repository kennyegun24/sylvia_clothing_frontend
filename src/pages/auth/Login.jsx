import React, { useEffect, useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/apiCalls";

const Login = ({ setPathName }) => {
  useEffect(() => {
    setPathName("/login");

    return () => {
      setPathName(null);
    };
  }, []); /* eslint-disable-line */
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const updateText = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();

  const userLogin = () => {
    const validationError = {};
    if (userCredentials.email.trim() === "") {
      validationError.email = "Email field should not be empty";
    }
    if (userCredentials.password.trim() === "") {
      validationError.password = "Password field should not be empty";
    } else if (userCredentials.password.length <= 7) {
      validationError.password =
        "Password should not be less than 8 characters";
    }
    setError(validationError);

    if (Object.entries(validationError).length === 0) {
      loginUser(
        {
          ...userCredentials,
        },
        dispatch
      );
    }
  };
  const { authLoading } = useSelector((state) => state.user);

  return (
    <div className="auth_container flex column gap15rem align_center">
      <img src={logo} className="logo" alt="" />
      <div className="auth_container_sm flex gap2rem column">
        <h2>LOGIN TO YOUR ACCOUNT</h2>

        <section className="flex column gap1rem">
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
          <button
            onClick={!authLoading ? userLogin : null}
            className={`
               auth_button
              ${authLoading ? "loadingAuthButton" : "authDormantButton"}
            `}
          >
            Login
          </button>
        </section>
        <p className="">
          By creating an account, you agree to BK' Fabrics Conditions of Use and
          Privacy Notice.
        </p>
        <hr />
        <p className="">
          Don't have an account?{" "}
          <Link className="auth_link" to={"/register"}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
