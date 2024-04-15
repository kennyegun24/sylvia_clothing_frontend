import React, { useEffect, useState } from "react";
import image1 from "../../assets/asset1.jpg";
import image2 from "../../assets/asset17.jpg";
import image3 from "../../assets/asset21.jpg";
import image6 from "../../assets/content_creator.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  getBestSellingProducts,
  getNewProducts,
  getTopRatedProducts,
} from "../../redux/products";
import HomePageSelectedProducts from "./HomePageSelectedProducts";
import SliderImage from "./SliderImage";

const HomePage = () => {
  const dispatch = useDispatch();
  const [dataToFetch, setDataToFetch] = useState({
    newProducts: true,
    topRated: false,
    mostSold: false,
  });
  const { newProducts, bestSellingProducts, topRatedProducts } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dataToFetch.mostSold
      ? dispatch(getBestSellingProducts())
      : dataToFetch?.newProducts
      ? dispatch(getNewProducts())
      : dispatch(getTopRatedProducts());
  }, [dataToFetch]);

  return (
    <main>
      <SliderImage />

      <section class="trending">
        <h2>Highlighted Products</h2>
        <div class="trend_secs">
          <p
            className={`pointer ${
              dataToFetch.newProducts && "highlighted_sec"
            }`}
            onClick={() =>
              setDataToFetch({
                mostSold: false,
                topRated: false,
                newProducts: true,
              })
            }
          >
            New Products
          </p>
          <p
            className={`pointer ${dataToFetch.topRated && "highlighted_sec"}`}
            onClick={() =>
              setDataToFetch({
                mostSold: false,
                newProducts: false,
                topRated: true,
              })
            }
          >
            Top rated
          </p>
          <p
            className={`pointer ${dataToFetch.mostSold && "highlighted_sec"}`}
            onClick={() =>
              setDataToFetch({
                newProducts: false,
                topRated: false,
                mostSold: true,
              })
            }
          >
            Best Sellers
          </p>
        </div>

        <div class="selected_product_section">
          <HomePageSelectedProducts
            products={
              dataToFetch.mostSold
                ? bestSellingProducts
                : dataToFetch.newProducts
                ? newProducts
                : topRatedProducts
            }
          />
        </div>
      </section>

      <section class="grid_container">
        <div class="grid1">
          <img src={image6} alt="" />
          <div class="grid1_textx">
            <p>Mens Collection</p>

            <div class="grid1_cta">
              <h3>Trendy</h3>
              <p>Fashion</p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div class="grid2">
          <img src={image2} alt="" />
          <div class="grid1_textx">
            <p>Mens Collection</p>

            <div class="grid1_cta">
              <h3>Trendy</h3>
              <p>Fashion</p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div class="grid3">
          <img src={image3} alt="" />
          <div class="grid1_textx">
            <p>Mens Collection</p>

            <div class="grid1_cta">
              <h3>Trendy</h3>
              <p>Fashion</p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div class="grid4">
          <img src={image1} alt="" />
          <div class="grid1_textx">
            <p>Mens Collection</p>

            <div class="grid1_cta">
              <h3>Trendy</h3>
              <p>Fashion</p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
