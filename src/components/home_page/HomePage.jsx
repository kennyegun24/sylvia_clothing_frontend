import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBestSellingProducts,
  getNewProducts,
  getTopRatedProducts,
} from "../../redux/products";
import HomePageSelectedProducts from "./HomePageSelectedProducts";
import SliderImage from "./SliderImage";
import HomePageCollectionsGrid from "./HomePageCollectionsGrid";

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

      <HomePageCollectionsGrid />
    </main>
  );
};

export default HomePage;
