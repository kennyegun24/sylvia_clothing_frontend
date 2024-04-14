import React, { useContext, useState } from "react";
import "./nav.css";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { ShowCartContext } from "../../context/showCart";
import CategoriesHover from "./CategoriesHover";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/user";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const { toggleCart } = useContext(ShowCartContext);
  const dispatch = useDispatch();
  const showHide = () => {
    setToggle((prev) => !prev);
  };
  const { products } = useSelector((state) => state.cart);
  const [showCollections, setShowCollections] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    // <div className="flex column sticky gap1rem big_nav_container">
    //   <nav className="nav_container flex justify_center">
    //     <div className="footer_sub_container flex justify_between align_center">
    //       <section className="flex gap2rem align_center nav_menu">
    //         <a href="/">
    //           <img className="logo" src={logo} alt="" />
    //         </a>
    //       </section>
    //       <section className="gap2rem align_center mobile_view">
    //         <FaBars onClick={showHide} className="font20" />
    //         <a href="/">
    //           <img className="logo" src={logo} alt="" />
    //         </a>
    //       </section>
    //       <section
    //         className={` ${toggle && "show_menu"} mobile_nav_menu_container`}
    //       >
    //         <div className="flex monile_nav_menu justify_between">
    //           <div className="flex gap2rem column">
    //             <div className="relative">
    //               <button
    //                 className="font18 pointer background_none flex gap05rem align_center relative"
    //                 onClick={() => setShowCollections((prev) => !prev)}
    //               >
    //                 Collections
    //                 <IoMdArrowDropdown />
    //               </button>
    //               {showCollections && (
    //                 <div className="collections_hover_div2">
    //                   <CategoriesHover />
    //                 </div>
    //               )}
    //             </div>

    //             {!currentUser ? (
    //               <Link className="font15 login_btn" to="/login">
    //                 Login
    //               </Link>
    //             ) : (
    //               <button onClick={logout} className="font15 login_btn pointer">
    //                 Logout
    //               </button>
    //             )}
    //           </div>
    //           <div className="flex gap1rem">
    //             <FaInstagram className="font24" />
    //             <FaFacebook className="font24" />
    //           </div>
    //         </div>
    //       </section>
    //       <section className="flex gap2rem nav_search_cart align_center">
    //         <div className="relative">
    //           <button
    //             className="font15 desktop_navs pointer flex gap05rem align_center relative"
    //             onClick={() => setShowCollections((prev) => !prev)}
    //           >
    //             Collections
    //             <IoMdArrowDropdown />
    //           </button>
    //           {showCollections && (
    //             <div className="collections_hover_div">
    //               <CategoriesHover />
    //             </div>
    //           )}
    //         </div>
    //         <a className="font15 desktop_navs" href="/">
    //           Products
    //         </a>
    //         <CiSearch className="font20" />
    //         <div className="cart_icon">
    //           <CiShoppingCart className="font20 pointer" onClick={toggleCart} />
    //           <p className="cart_no_of_items flex justify_center align_center">
    //             {products.length}
    //           </p>
    //         </div>
    //         {!currentUser ? (
    //           <Link className="font15 login_btn hide_login_logout" to="/login">
    //             Login
    //           </Link>
    //         ) : (
    //           <button
    //             onClick={logoutUser}
    //             className="font15 hide_login_logout login_btn pointer"
    //           >
    //             Logout
    //           </button>
    //         )}
    //       </section>
    //     </div>
    //   </nav>
    // </div>
    <>
      <nav class="nav">
        <h3>Welcome to our fashion store</h3>

        <div>
          <p>Srh</p>
          <p>user</p>
          <p>cart</p>
        </div>
      </nav>
      <section class="sec_nav_container">
        <div class="sec_nav">
          <div class="sec_nav_sub_item_div">
            <p class="cta">Call us:</p>
            <p class="cta_list">+1234567890</p>
          </div>

          <h2>BK Fabrics</h2>

          <div class="sec_nav_sub_item_div">
            <p class="cta">Follow Us:</p>

            <div class="cta_action">
              <p class="cta_list">fb</p>
              <p class="cta_list">twt</p>
              <p class="cta_list">ig</p>
              <p class="cta_list">g+</p>
            </div>
          </div>
        </div>

        <div class="navigations">
          <p>Home</p>
          <p>Categories</p>
          <p>Cart</p>
          <p>Logout</p>
        </div>
      </section>
    </>
  );
};

export default Nav;
