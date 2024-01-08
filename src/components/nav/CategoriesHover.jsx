import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/collection";

const CategoriesHover = () => {
  const { categories } = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length < 1) dispatch(getAllCategories());
  }, []);
  return (
    <div className="collections_hover_div flex column gap1rem">
      <h2 className="font20">Collections</h2>
      <hr />
      <div className="flex wrap gap1rem">
        {categories.map((cat, _index) => {
          const split = cat.slice(1);
          const firstLetter = cat.substring(0, 1).toUpperCase();
          const word = firstLetter + split;
          return (
            <a href={`/collections/${cat}`} key={_index}>
              {word}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesHover;
