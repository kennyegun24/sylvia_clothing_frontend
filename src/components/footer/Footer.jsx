import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Socials from "../Socials";

const Footer = () => {
  return (
    <>
      <footer className="flex gap3rem align_center width100 column footer">
        <div className="footer_links flex width100">
          <section className="gap15rem flex column">
            <h2>Quick Links</h2>
            <div className="flex column gap1rem">
              <a href="/">Products</a>
              <a href="/collections">Collections</a>
              <a href="/">Cart</a>
            </div>
          </section>
          <section className="gap15rem flex column">
            <h2>More Info</h2>
            <div className="flex column gap1rem">
              <a href="/">About Us</a>
              <a href="/">Contact Us</a>
            </div>
          </section>
          <section className="gap15rem flex column">
            <h2>Important Links</h2>
            <div className="flex column gap1rem">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
              <a href="/">Refund Policy</a>
            </div>
          </section>
        </div>
        <Socials className="flex gap1rem align_center" />
        <hr className="width100 footer_line" />
        <div className="flex align_center footer_bottom">
          <p className="font10">&copy; 2024, BK CLOTHINGS</p>
          <a href="/" className="font10">
            Return policy
          </a>
          <a href="/" className="font10">
            Privacy policy
          </a>
          <a href="/" className="font10">
            Terms of Service
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
