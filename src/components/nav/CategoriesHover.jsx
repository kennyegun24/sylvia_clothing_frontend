import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/collection";

const CategoriesHover = () => {
  const { categories } = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories) dispatch(getAllCategories());
  }, []);
  return (
    <div className="collections_hover_div flex column gap1rem">
      <h2 className="font20">Collections</h2>
      <hr />
      <div className="flex wrap gap1rem">
        <a href="/collections">All Collections</a>
        <a href="/">Best Rated</a>
        <a href="/">New Arrivals</a>
        {categories.map((cat, _index) => {
          const split = cat.slice(1);
          const firstLetter = cat.substring(0, 1).toUpperCase();
          const word = firstLetter + split;
          return <a href="/">{word}</a>;
        })}
      </div>
    </div>
  );
};

export default CategoriesHover;
