import React, { useEffect, useState } from "react";
import model3 from "../../assets/model.png";
import model2 from "../../assets/model4.png";
import model1 from "../../assets/model0.png";

const SliderImage = () => {
  const slides = [
    {
      main_text: "Women's wear",
      sub_text: "Locally made Fabrics",
      img: model1,
    },
    {
      main_text: "Authentic Fabrics",
      sub_text: "100% Original Materials",
      img: model2,
    },
    {
      main_text: "100% Real materials",
      sub_text: "Beautiful material patterns",
      img: model3,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <div class="img_div">
        <div class="img_text">
          <p>{slides[currentIndex].sub_text}</p>
          <h3>{slides[currentIndex].main_text}</h3>
          <button type="submit">SHOP NOW</button>
        </div>
        <div class="slant_bg"></div>
        <img src={slides[currentIndex].img} alt="" />

        <div class="ctrls">
          {slides.map((_, _ind) => (
            <div
              class={`ctrl ${
                _ind === currentIndex
                  ? "active_image_tab"
                  : "in_active_image_tab"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderImage;
