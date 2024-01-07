import React, { useEffect, useState } from "react";
import "./styles.css";
import image from "../../assets/IMG-20231214-WA0050.jpg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../redux/products";

const ProductDetails = () => {
  const [triggerDelivery, setTriggerDelivery] = useState(false);
  const [TriggerReturn, setTriggerReturn] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const id = window.location.pathname.split("/")[4];

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);
  return (
    <div className="flex gap2rem justify_between column">
      <div className="flex gap1rem justify_between product_details">
        <section className="product_details_img_div">
          <img src={product?.product_image} alt="" />
        </section>
        <section className="product_details_desc_div flex gap15rem column">
          <h1>{product?.product_name}</h1>
          <h5 className="font20">${product?.price}</h5>

          <section className="flex column gap1rem product_details_quantity_div">
            <h5>Quantity</h5>
            <div className="flex product_details_quantity_button_div align_center justify_between">
              <button
                className="pointer"
                onClick={() => setQuantity((prev) => (prev -= 1))}
                disabled={quantity === 1}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="pointer"
                onClick={() => setQuantity((prev) => (prev += 1))}
              >
                +
              </button>
            </div>
          </section>
          <p className="font16 fontW700">
            There are currently {product.in_stock} products in stock
          </p>
          <button className="pointer">Add to cart</button>

          <div className="flex gap2rem column product_description_drowdown">
            <section className="width100 flex column gap1rem">
              <div
                onClick={() => [
                  setTriggerDelivery((prev) => !prev),
                  setTriggerReturn(false),
                ]}
                className="flex justify_between width100"
              >
                <h3 className="font18 flex align_center gap05rem">
                  <CiDeliveryTruck />
                  Shipping Info
                </h3>
                {triggerDelivery ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {triggerDelivery && (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  esse minima, quisquam cum provident illo ipsum minus deserunt
                  animi blanditiis facere non aut sint dignissimos in quas ullam
                  alias commodi! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ex molestias dolores quam in, quos incidunt
                  non totam natus facere consequatur explicabo amet iste iusto
                  quod qui ratione officia libero dolorum.
                  {"\n"}
                  {"\n"}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda pariatur tenetur, nulla quis, voluptas eos
                  blanditiis facilis dignissimos eum delectus numquam inventore
                  adipisci corporis consequatur impedit et recusandae!
                  Similique, accusamus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Tempora laudantium distinctio sit placeat
                  laborum natus perspiciatis cumque sequi? Maiores impedit ipsum
                  at pariatur quaerat sapiente commodi esse sunt blanditiis?
                  Eligendi. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptate quam magnam assumenda nobis dicta ex sapiente
                  explicabo similique molestias minima excepturi expedita
                  repellendus, cupiditate suscipit. Alias amet earum fuga sed!
                  {"\n"}
                  {"\n"}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat consequuntur ducimus asperiores culpa non corrupti
                  itaque, sint maxime cumque assumenda voluptatum sapiente
                  dignissimos doloremque natus, consequatur exercitationem
                  aspernatur cupiditate illum. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Reprehenderit quae pariatur
                  eligendi fuga, vel deserunt maxime beatae inventore fugit,
                  praesentium soluta ipsa quis repellendus perferendis commodi
                  ea sit consectetur sapiente?
                </p>
              )}
            </section>
            <section className="width100 flex column gap1rem">
              <div
                onClick={() => [
                  setTriggerReturn((prev) => !prev),
                  setTriggerDelivery(false),
                ]}
                className="flex justify_between width100"
              >
                <h3 className="font18 flex align_center gap05rem">
                  <GiReturnArrow />
                  Returns Policy
                </h3>
                {TriggerReturn ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {TriggerReturn && (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  esse minima, quisquam cum provident illo ipsum minus deserunt
                  animi blanditiis facere non aut sint dignissimos in quas ullam
                  alias commodi! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ex molestias dolores quam in, quos incidunt
                  non totam natus facere consequatur explicabo amet iste iusto
                  quod qui ratione officia libero dolorum.
                  {"\n"}
                  {"\n"}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda pariatur tenetur, nulla quis, voluptas eos
                  blanditiis facilis dignissimos eum delectus numquam inventore
                  adipisci corporis consequatur impedit et recusandae!
                  Similique, accusamus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Tempora laudantium distinctio sit placeat
                  laborum natus perspiciatis cumque sequi? Maiores impedit ipsum
                  at pariatur quaerat sapiente commodi esse sunt blanditiis?
                  Eligendi. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptate quam magnam assumenda nobis dicta ex sapiente
                  explicabo similique molestias minima excepturi expedita
                  repellendus, cupiditate suscipit. Alias amet earum fuga sed!
                  {"\n"}
                  {"\n"}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat consequuntur ducimus asperiores culpa non corrupti
                  itaque, sint maxime cumque assumenda voluptatum sapiente
                  dignissimos doloremque natus, consequatur exercitationem
                  aspernatur cupiditate illum. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Reprehenderit quae pariatur
                  eligendi fuga, vel deserunt maxime beatae inventore fugit,
                  praesentium soluta ipsa quis repellendus perferendis commodi
                  ea sit consectetur sapiente?
                </p>
              )}
            </section>
          </div>
        </section>
      </div>
      <div className="flex column gap1rem product_details_description_div">
        <h3>Description</h3>
        <p className="font20 ">{product?.product_desc}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
