import React from "react";
import "./styles.css";

const FirstSection = () => {
  return (
    <section className="firstSection flex align_center column justify_center gap2rem">
      <h2 className="fontW700">
        Order your high quality fabrics from us today!
      </h2>
      <p className="font16">Delivery time takes up to 4 business days</p>
      <button className="font16 pointer">Shop based on your categories</button>
    </section>
  );
};

export default FirstSection;
