import React, { useEffect, useState } from "react";
import "./search.css";
import { CiSearch } from "react-icons/ci";
import ProductCard from "../../components/items/ProductCard";
import ItemSkeleton from "../../components/skeleton/ItemSkeleton";
// import {usePathname} f
const Search = () => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const pathName = window.location.search;
  const splitPath = pathName.split("=");
  const path = splitPath[splitPath.length - 1];
  const splitPercent = path.split("%20").join(" ");

  const search = async () => {
    window.location.replace(`/products/search?s=${text}`);
  };

  useEffect(() => {
    const search = async () => {
      try {
        if (splitPercent != "" && splitPercent != null) {
          setLoading(true);
          const req = await fetch(
            `https://bk-fabrics-server.vercel.app/api/product/search/${splitPercent}`
          );
          const data = await req.json();
          setSearchedProducts(data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        alert("Try searching again");
      }
    };

    search();
    // alert("I am kenny");
  }, [splitPercent != ""]);

  return (
    <section className="search_main_container">
      <section class="search_container">
        <div class="search_bar">
          <input
            onSubmit={search}
            placeholder="Search for any product..."
            type="search"
            name=""
            id=""
            onChange={(e) => setText(e.target.value)}
          />
          <div className="search_icon_div pointer" onClick={search}>
            <CiSearch className="font20 search_icon" />
          </div>
        </div>
      </section>

      <section className="search_text_container">
        <h2>You searched for '{splitPercent}'</h2>
      </section>
      {searchedProducts.length > 0 && loading === false ? (
        <section className="searched_item_container">
          {searchedProducts.map((data, _) => (
            <ProductCard cat={data} />
          ))}
        </section>
      ) : loading === true && searchedProducts.length === 0 ? (
        <ItemSkeleton />
      ) : (
        <p className="no_item">NO ITEM FOUND</p>
      )}
    </section>
  );
};

export default Search;
