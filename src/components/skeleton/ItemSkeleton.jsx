import React from "react";
import loader from "../../assets/loader2.svg";
import "./style.css";

const ItemSkeleton = () => {
  const arr = Array.from({ length: 8 });
  return (
    <div className="container">
      {arr.map((_, _ind) => (
        <div className="loader_subcontainer">
          <div className="loader_img_container">
            <img src={loader} alt="" />
          </div>

          <div className="loader_texts1 loader_text" />
          <div className="loader_texts2 loader_text" />
          <div className="loader_texts3 loader_text" />
          <div className="loader_texts4 loader_text" />
        </div>
      ))}
    </div>
  );
};

export default ItemSkeleton;
