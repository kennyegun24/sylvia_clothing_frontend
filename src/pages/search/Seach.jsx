import React from "react";
import "./search.css";
import { CiSearch } from "react-icons/ci";
import ProductCard from "../../components/items/ProductCard";
import ItemSkeleton from "../../components/skeleton/ItemSkeleton";
const Search = () => {
  const data = [
    {
      in_stock: 3,
      price: 39.99,
      product_name: "Ashanti people fabric",
      product_image:
        "https://imgs.search.brave.com/bTDo63heywR71-7lR_ZGtmAhn3pZR2bCDeDBH1CWDBQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waWNr/ZXJ3aGVlbC5jb20v/c3RhdGljLzJmZjk5/MWYxYmNmZTJjOWYz/MjlkMDE4ZGM3MTRk/ZWJlL2E0ZDg4L2lt/YWdlLWNlcnQucG5n",
    },
    {
      in_stock: 3,
      price: 39.99,
      product_name: "Ashanti people fabric",
      product_image:
        "https://imgs.search.brave.com/bTDo63heywR71-7lR_ZGtmAhn3pZR2bCDeDBH1CWDBQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waWNr/ZXJ3aGVlbC5jb20v/c3RhdGljLzJmZjk5/MWYxYmNmZTJjOWYz/MjlkMDE4ZGM3MTRk/ZWJlL2E0ZDg4L2lt/YWdlLWNlcnQucG5n",
    },
    {
      in_stock: 3,
      price: 39.99,
      product_name: "Ashanti people fabric",
      product_image:
        "https://imgs.search.brave.com/bTDo63heywR71-7lR_ZGtmAhn3pZR2bCDeDBH1CWDBQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waWNr/ZXJ3aGVlbC5jb20v/c3RhdGljLzJmZjk5/MWYxYmNmZTJjOWYz/MjlkMDE4ZGM3MTRk/ZWJlL2E0ZDg4L2lt/YWdlLWNlcnQucG5n",
    },
    {
      in_stock: 3,
      price: 39.99,
      product_name: "Ashanti people fabric",
      product_image:
        "https://imgs.search.brave.com/bTDo63heywR71-7lR_ZGtmAhn3pZR2bCDeDBH1CWDBQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waWNr/ZXJ3aGVlbC5jb20v/c3RhdGljLzJmZjk5/MWYxYmNmZTJjOWYz/MjlkMDE4ZGM3MTRk/ZWJlL2E0ZDg4L2lt/YWdlLWNlcnQucG5n",
    },
    {
      in_stock: 3,
      price: 39.99,
      product_name: "Ashanti people fabric",
      product_image:
        "https://imgs.search.brave.com/bTDo63heywR71-7lR_ZGtmAhn3pZR2bCDeDBH1CWDBQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waWNr/ZXJ3aGVlbC5jb20v/c3RhdGljLzJmZjk5/MWYxYmNmZTJjOWYz/MjlkMDE4ZGM3MTRk/ZWJlL2E0ZDg4L2lt/YWdlLWNlcnQucG5n",
    },
    {
      in_stock: 3,
      price: 39.99,
      product_name: "Ashanti people fabric",
      product_image:
        "https://imgs.search.brave.com/bTDo63heywR71-7lR_ZGtmAhn3pZR2bCDeDBH1CWDBQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waWNr/ZXJ3aGVlbC5jb20v/c3RhdGljLzJmZjk5/MWYxYmNmZTJjOWYz/MjlkMDE4ZGM3MTRk/ZWJlL2E0ZDg4L2lt/YWdlLWNlcnQucG5n",
    },
    {
      in_stock: 3,
      price: 39.99,
      product_name: "Ashanti people fabric",
      product_image:
        "https://imgs.search.brave.com/bTDo63heywR71-7lR_ZGtmAhn3pZR2bCDeDBH1CWDBQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waWNr/ZXJ3aGVlbC5jb20v/c3RhdGljLzJmZjk5/MWYxYmNmZTJjOWYz/MjlkMDE4ZGM3MTRk/ZWJlL2E0ZDg4L2lt/YWdlLWNlcnQucG5n",
    },
    {
      in_stock: 3,
      price: 39.99,
      product_name: "Ashanti people fabric",
      product_image:
        "https://imgs.search.brave.com/bTDo63heywR71-7lR_ZGtmAhn3pZR2bCDeDBH1CWDBQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waWNr/ZXJ3aGVlbC5jb20v/c3RhdGljLzJmZjk5/MWYxYmNmZTJjOWYz/MjlkMDE4ZGM3MTRk/ZWJlL2E0ZDg4L2lt/YWdlLWNlcnQucG5n",
    },
  ];
  return (
    <section className="search_main_container">
      <section class="search_container">
        <div class="search_bar">
          <input
            placeholder="Search for any product..."
            type="search"
            name=""
            id=""
          />
          <div className="search_icon_div pointer">
            <CiSearch className="font20 search_icon" />
          </div>
        </div>
      </section>

      <section className="search_text_container">
        <h2>You searched for 'Indigo'</h2>
      </section>
      {/* <section className="searched_item_container">
        {data.map((data, _) => (
          <ProductCard cat={data} />
        ))}
      </section> */}
      <ItemSkeleton />
    </section>
  );
};

export default Search;
