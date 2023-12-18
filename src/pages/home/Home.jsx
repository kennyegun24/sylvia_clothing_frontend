import React from "react";
import "./home.css";
import FirstSection from "../../components/home_page/FirstSection";
import SecondSection from "../../components/home_page/SecondSection";
import ThirdSection from "../../components/home_page/ThirdSection";
import { categories_preview } from "../../data/categories_home";
import FourthSection from "../../components/home_page/FourthSection";

const Home = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <FourthSection />

      {categories_preview.map((category, _index) => (
        <ThirdSection data={category} />
      ))}
    </div>
  );
};

export default Home;
