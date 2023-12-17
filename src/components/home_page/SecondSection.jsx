import React from "react";
import image1 from "../../assets/bg5.jpg";
import image2 from "../../assets/bg3.jpg";
import image3 from "../../assets/rand.jpg";
import image4 from "../../assets/no_image.jpg";

const categories = [
  {
    name: "Multi Colored Pattern Ashanti Fabric",
    image: image1,
  },
  {
    name: "Local Ghanan Frabic",
    image: image4,
  },
  {
    name: "Imported authentic Hollandaise",
    image: image3,
  },
  {
    name: "Outdoor Fabric",
    image: image2,
  },
  {
    name: "Multi Colored Pattern Ashanti Fabric",
    image: image3,
  },
  {
    name: "Local Ghanan Frabic",
    image: image1,
  },
  {
    name: "Imported authentic Hollandaise",
    image: image2,
  },
  {
    name: "Outdoor Fabric",
    image: image4,
  },
];

const SecondSection = () => {
  return (
    <div className="second_section flex column gap2rem margin_top_2rem">
      <h3>Shop by Category</h3>
      <div className="categories flex gap05rem">
        {categories.map((cat, _index) => (
          <div className="category flex column pointer" key={_index}>
            <div className="img_div">
              <img src={cat.image} alt="" />
            </div>
            <p className="font18 fontW700 gap05rem textCenter">
              {cat.name} &rarr;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
