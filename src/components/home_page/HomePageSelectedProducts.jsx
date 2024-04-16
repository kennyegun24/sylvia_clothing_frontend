import React from "react";

const HomePageSelectedProducts = ({ products }) => {
  return (
    <>
      {products?.data?.map((product) => (
        <div class="selected_product_section_item">
          <img
            src={product.product_image}
            class="selected_product_section_item_image"
          />
          <div class="selected_product_section_item_price">
            <h4>{product.product_name}</h4>
            <p>${product.price}</p>
            <p>{product.in_stock}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomePageSelectedProducts;
