import React from "react";
import "./styles.css";
import Filter from "../../../components/collections/Filter";
import Products from "../../../components/collections/Products";

const CollectionProducts = () => {
  return (
    <div className="collecion_products_page flex column gap4rem margin_top_4rem">
      <h1 className=" textCenter">Ashanti Fabrics</h1>
      <section className="flex justify_between width100">
        <section className="collecion_products_div1">
          <Filter />
        </section>
        <section className="collecion_products_div2">
          <Products />
        </section>
      </section>
    </div>
  );
};

export default CollectionProducts;
