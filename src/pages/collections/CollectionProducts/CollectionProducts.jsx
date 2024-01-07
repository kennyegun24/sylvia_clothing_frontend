import React, { useContext } from "react";
import "./styles.css";
import Filter from "../../../components/collections/Filter";
import Products from "../../../components/collections/Products";
import { ShowCartContext } from "../../../context/showCart";

const CollectionProducts = () => {
  const { showFilter } = useContext(ShowCartContext);
  const collectionName = window.location.pathname.split("/")[2];
  const split = collectionName.slice(1);
  const firstLetter = collectionName.substring(0, 1).toUpperCase();
  const formatted_collection = firstLetter + split;
  return (
    <div className="collecion_products_page flex column gap4rem margin_top_4rem">
      <h1 className=" textCenter">{formatted_collection}</h1>
      <section className="flex justify_between width100">
        <section
          className={`collecion_products_div1 ${
            showFilter && "collecion_products_div1_mobile_filter"
          }`}
        >
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
