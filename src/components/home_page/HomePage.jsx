import React from "react";
import image1 from "../../assets/asset1.jpg";
import image2 from "../../assets/asset17.jpg";
import image3 from "../../assets/asset21.jpg";
import image4 from "../../assets/asset22.jpg";
import image5 from "../../assets/asset9.jpg";
import model1 from "../../assets/model2.png";

const HomePage = () => {
  return (
    <main>
      <section>
        <div class="img_div">
          <div class="img_text">
            <p>Locally made Fabrics</p>
            <h3>Women's wear</h3>
            <button type="submit">SHOP NOW</button>
          </div>
          <div class="slant_bg"></div>
          <img src={model1} alt="" />

          <div class="ctrls">
            <div class="ctrl"></div>
            <div class="ctrl"></div>
          </div>
        </div>
      </section>

      <section class="trending">
        <h2>Highlighted Products</h2>
        <div class="trend_secs">
          <p class="highlighted_sec">New Products</p>
          <p>Top 5</p>
          <p>Best Sellers</p>
        </div>

        <div class="selected_product_section">
          <div class="selected_product_section_item">
            <img src={image1} class="selected_product_section_item_image" />
            <div class="selected_product_section_item_price">
              <h4>Product name</h4>
              <p>90.99</p>
            </div>
          </div>
          <div class="selected_product_section_item">
            <img
              src={image2}
              class="selected_product_section_item_image"
              alt=""
            />
            <div class="selected_product_section_item_price">
              <h4>Product name</h4>
              <p>90.99</p>
            </div>
          </div>
          <div class="selected_product_section_item">
            <img
              src={image3}
              class="selected_product_section_item_image"
              alt=""
            />
            <div class="selected_product_section_item_price">
              <h4>Product name</h4>
              <p>90.99</p>
            </div>
          </div>
          <div class="selected_product_section_item">
            <img
              src={image4}
              class="selected_product_section_item_image"
              alt="img"
            />
            <div class="selected_product_section_item_price">
              <h4>Product name</h4>
              <p>90.99</p>
            </div>
          </div>
          <div class="selected_product_section_item">
            <img
              src={image5}
              class="selected_product_section_item_image"
              alt=""
            />
            <div class="selected_product_section_item_price">
              <h4>Product name</h4>
              <p>90.99</p>
            </div>
          </div>
        </div>
      </section>

      <section class="grid_container">
        <div class="grid1">
          <img src="./assets/asset1.jpg" alt="" />
          <div class="grid1_textx">
            <p>Mens Collection</p>

            <div class="grid1_cta">
              <h3>Trendy</h3>
              <p>Fashion</p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div class="grid2">
          <img src="./assets/asset17.jpg" alt="" />
          <div class="grid1_textx">
            <p>Mens Collection</p>

            <div class="grid1_cta">
              <h3>Trendy</h3>
              <p>Fashion</p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div class="grid3">
          <img src="./assets/asset21.jpg" alt="" />
          <div class="grid1_textx">
            <p>Mens Collection</p>

            <div class="grid1_cta">
              <h3>Trendy</h3>
              <p>Fashion</p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div class="grid4">
          <img src="./assets/asset22.jpg" alt="" />
          <div class="grid1_textx">
            <p>Mens Collection</p>

            <div class="grid1_cta">
              <h3>Trendy</h3>
              <p>Fashion</p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
