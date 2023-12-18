import React from "react";
import { categories } from "../../data/categories_home";
import "./styles.css";

const Collections = () => {
  return (
    <div className="collections_page flex column gap1rem align_center">
      <h2>Collections</h2>
      <div className="flex wrap align_center gap05rem">
        {categories.map((_cat, _index) => (
          <section className="collection_item pointer">
            <div className="collection_item_image">
              <img src={_cat.category_image} alt="" />
            </div>
            <p>{_cat.category_name} &rarr;</p>
          </section>
        ))}
      </div>
      <section className="flex gap1rem align_center margin_top_1rem">
        <button className="collection_pagination_btn pointer">Prev</button>
        <p>1</p>
        <button className="collection_pagination_btn pointer">Next</button>
      </section>
    </div>
  );
};

export default Collections;
