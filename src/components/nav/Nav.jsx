import React, { useState } from "react";
import "./nav.css";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
const Nav = () => {
  const [toggle, setToggle] = useState(true);
  const showHide = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className="nav_container flex justify_center">
      <div className="footer_sub_container flex justify_between align_center">
        <section className="flex gap2rem align_center nav_menu">
          <a href="/">
            <img className="logo" src={logo} alt="" />
          </a>

          <a className="font15" href="/">
            Categories
          </a>
          <a className="font15" href="/">
            Products
          </a>
        </section>
        <section className="gap2rem align_center mobile_view">
          <FaBars onClick={showHide} className="font20" />
          <img className="logo" src={logo} alt="" />
        </section>
        <section
          className={` ${toggle && "show_menu"} mobile_nav_menu_container`}
        >
          <div className="flex monile_nav_menu justify_between">
            <div className="flex gap2rem column">
              <a className="font15" href="/">
                Categories
              </a>
              <a className="font15" href="/">
                Products
              </a>
            </div>
            <div className="flex gap1rem">
              <FaInstagram className="font24" />
              <FaFacebook className="font24" />
            </div>
          </div>
        </section>
        <section className="flex gap2rem nav_search_cart align_center">
          <CiSearch className="font20" />
          <CiShoppingCart className="font20" />
        </section>
      </div>
    </nav>
  );
};

export default Nav;