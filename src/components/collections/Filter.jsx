import React, { useContext, useState } from "react";
import "./styles.css";
import { IoIosArrowDown } from "react-icons/io";
import { ShowCartContext } from "../../context/showCart";
import useFilter from "./filterHook";

const Filter = () => {
  const [show, setShow] = useState(false);
  const { toggleFilter } = useContext(ShowCartContext);
  const { changeMin, changeMax, changeFilter } = useFilter();

  return (
    <div className="filter_container flex column gap1rem">
      <div className="cancel cancel_filter_display">
        <button onClick={toggleFilter}>close</button>
      </div>
      <p>Filter</p>

      <section className="flex column gap2rem">
        <p
          onClick={() => setShow((prev) => !prev)}
          className="flex justify_between align_center filter_name"
        >
          Price
          <IoIosArrowDown />
        </p>

        {show && (
          <section className="flex column gap1rem">
            <p>Filter with price... Low to High</p>
            <div className="flex price_filter justify_between">
              <input
                className="padding075rem"
                type="number"
                placeholder="From"
                onChange={(e) => changeMin(e)}
                min={1}
              />
              <input
                className="padding075rem"
                type="number"
                placeholder="To"
                onChange={(e) => changeMax(e)}
                max={1000000}
              />
            </div>
          </section>
        )}
      </section>
      <section className="flex column gap15rem">
        <p>Sort By</p>

        <div className="flex price_filter justify_between">
          <select name="" id="" onChange={(e) => changeFilter(e)}>
            <option value="new-to-old">Most recent</option>
            <option value="old-to-new">Old to New</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
            <option value="high-low">Price (high - low)</option>
            <option value="low-high">Price (low - high)</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default Filter;
