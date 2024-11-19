import React from "react";
import whatsappIcon from "../assets/whatsapp_icon.png";
import facebookIcon from "../assets/facebook_icon.png";

const Socials = ({ className }) => {
  const gen_text = "Hello,%20I%20want%20to%20purchase%20these%20items";
  const redirectToWhatsapp = () => {
    const link = `https://wa.me/233244251316?text=${gen_text}`;
    window.open(link);
  };
  return (
    <div class={`cta_action ${className}`}>
      <a href="/" class="cta_list">
        <img src={facebookIcon} height={"20px"} width={"20px"} />
      </a>
      <p onClick={redirectToWhatsapp} href="/" class="cta_list pointer">
        <img src={whatsappIcon} height={"20px"} width={"20px"} />
      </p>
    </div>
  );
};

export default Socials;
