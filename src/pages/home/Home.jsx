import React, { useEffect } from "react";
import "./home.css";
import FirstSection from "../../components/home_page/FirstSection";
import SecondSection from "../../components/home_page/SecondSection";
import ThirdSection from "../../components/home_page/ThirdSection";
import { categories_preview } from "../../data/categories_home";
import FourthSection from "../../components/home_page/FourthSection";
import { useDispatch, useSelector } from "react-redux";
import { getNewProducts, getTopRatedProducts } from "../../redux/products";
import HomePage from "../../components/home_page/HomePage";

const Home = () => {
  const dispatch = useDispatch();
  const { newProducts, topRatedProducts } = useSelector(
    (state) => state.products
  );
  // console.log(newProducts);
  // useEffect(() => {
  //   dispatch(getNewProducts());
  //   dispatch(getTopRatedProducts());
  // }, []);
  return (
    <div>
      <HomePage />
      {/* <FirstSection />
      <SecondSection />
      <FourthSection />

      <ThirdSection
        link={"new_arrivals"}
        text={"New Arrivals"}
        data={newProducts}
      />
      <ThirdSection
        link={"top_rated"}
        text={"Top Rated"}
        data={topRatedProducts}
      /> */}
    </div>
  );
};

export default Home;
