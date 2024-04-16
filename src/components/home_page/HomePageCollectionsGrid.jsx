import React, { useEffect, useState } from "react";
import image1 from "../../assets/white_bg.jpg";
import image2 from "../../assets/white_black_bg.jpg";
import image3 from "../../assets/red_bg.jpg";
import image4 from "../../assets/collection4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/collection";
import "./collection.css";

const HomePageCollectionsGrid = () => {
  const { categories } = useSelector((state) => state.collections);
  const [collection, setCollection] = useState(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length < 1) dispatch(getAllCategories());
    setCollection(categories);
  }, [categories]);
  const images = ["", image1, image2, image3, image4];
  return (
    <section class="grid_container">
      {collection?.slice(0, 4)?.map((cat, _ind) => (
        <div class="grid1">
          {_ind !== 0 && <img src={images[_ind]} alt="" />}
          <div class="grid1_textx">
            <p>Fabrics Collection</p>

            <div class="grid1_cta">
              <h3>{cat}</h3>
              <p>Fashion</p>
            </div>
            <a href={`/collections/${cat}`}>SHOP NOW</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomePageCollectionsGrid;
