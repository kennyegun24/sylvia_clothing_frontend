import React, { useState } from "react";
import "./styles.css";
import { IoIosArrowDown } from "react-icons/io";

const Filter = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="filter_container flex column gap1rem">
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
              />
              <input className="padding075rem" type="text" placeholder="To" />
            </div>
          </section>
        )}
      </section>
      <section className="flex column gap15rem">
        <p>Sort By</p>

        <div className="flex price_filter justify_between">
          <select name="" id="">
            <option value="old-to-new">Most recent</option>
            <option value="old-to-new">Old to New</option>
            <option value="old-to-new">New to Old</option>
            <option value="old-to-new">A - Z</option>
            <option value="old-to-new">Z - A</option>
            <option value="old-to-new">Price (high - low)</option>
            <option value="old-to-new">Price (low - high)</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default Filter;
