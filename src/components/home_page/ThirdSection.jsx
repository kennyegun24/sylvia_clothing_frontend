import React from "react";

const ThirdSection = ({ data }) => {
  return (
    <div className="margin_top_2rem third_section flex column align_center">
      <h3 className="fontW700 width100">{data.category_short_desc}</h3>
      <section className="flex gap1rem margin_top_1rem">
        {data.categories.map((cat, _index) => (
          <div className="slides_carousel flex column">
            <img src={cat.product_image} alt="" />
            <p className="fontW700">{cat.product_name}</p>
            <p>${cat.price}</p>
            <p>{cat.in_stock} in stock</p>
            <button
              className={`padding05rem ${
                cat.in_stock > 0 ? "in_stock" : "out_stock"
              }`}
            >
              {cat.in_stock > 0 ? "Add to cart" : "Out of stock"}
            </button>
          </div>
        ))}
      </section>
      <button className="padding05rem view_category_btn pointer">
        View More
      </button>
    </div>
  );
};

export default ThirdSection;
