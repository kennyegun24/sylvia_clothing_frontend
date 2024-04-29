import React from "react";
import ItemSkeleton from "../skeleton/ItemSkeleton";
import ProductCard from "../items/ProductCard";

const HomePageSelectedProducts = ({ products, status }) => {
  return (
    <>
      {status === "Pending" ? (
        <ItemSkeleton />
      ) : (
        <section className="searched_item_container">
          {products?.data?.map((product) => (
            <ProductCard cat={product} />
          ))}
        </section>
      )}
    </>
  );
};

export default HomePageSelectedProducts;
