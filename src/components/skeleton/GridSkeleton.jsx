import React from "react";
import "./style.css";

const GridSkeleton = () => {
  const collection = Array.from({ length: 4 });
  return (
    <section class="grid_skeleton_container">
      {collection?.map((cat, _ind) => (
        <div class="grid_skeleton_sub_container"></div>
      ))}
    </section>
  );
};

export default GridSkeleton;
