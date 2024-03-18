import React, { useEffect } from "react";
import ThirdSection from "./ThirdSection";
import { useDispatch, useSelector } from "react-redux";
import { getBestSellingProducts } from "../../redux/products";

const SecondSection = () => {
  const dispatch = useDispatch();
  const { bestSellingProducts } = useSelector((state) => state.products);
  console.log(bestSellingProducts);
  useEffect(() => {
    dispatch(getBestSellingProducts());
  }, []);

  return (
    <>
      <ThirdSection
        link={"best_selling"}
        data={bestSellingProducts}
        text={"Best Selling"}
      />
    </>
  );
};

export default SecondSection;
