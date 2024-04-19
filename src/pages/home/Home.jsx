import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
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
