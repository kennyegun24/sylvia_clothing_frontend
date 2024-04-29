import React, { useEffect, useState } from "react";
import image1 from "../../assets/white_bg.jpg";
import image2 from "../../assets/white_black_bg.jpg";
import image3 from "../../assets/red_bg.jpg";
import image4 from "../../assets/collection4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/collection";
import "./collection.css";
import GridSkeleton from "../skeleton/GridSkeleton";

const HomePageCollectionsGrid = () => {
  const dispatch = useDispatch();
  const { categories, finished } = useSelector((state) => state.collections);
  const [collection, setCollection] = useState(categories);
  const images = ["", image1, image2, image3, image4];

  useEffect(() => {
    if (!finished) {
      dispatch(getAllCategories());
    } else {
      setCollection(categories);
    }
  }, [finished]);

  return (
    <>
      {finished ? (
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
      ) : (
        <GridSkeleton />
      )}
    </>
  );
};

export default HomePageCollectionsGrid;
