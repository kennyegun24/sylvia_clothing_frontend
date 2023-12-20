import React from "react";
import ProductCard from "../items/ProductCard";
import { Link } from "react-router-dom";

const ThirdSection = ({ data }) => {
  return (
    <div className=" margin_top_2rem third_section flex column align_center">
      <h3 className="fontW700 width100">{data.category_short_desc}</h3>
      <section className="flex gap1rem margin_top_1rem">
        {data.categories.map((cat, _index) => (
          <Link
            to={`collections/${data.category_name}/${cat.product_name}`}
            className="collection_prod slides_carousel flex column"
          >
            <ProductCard cat={cat} />
          </Link>
        ))}
      </section>
      <button className="view_category_btn pointer font18">View More</button>
    </div>
  );
};

export default ThirdSection;
