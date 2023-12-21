import React from "react";

const CustomInputs = ({ styles }) => {
  return (
    <input
      type={styles.type}
      name=""
      id=""
      className={`${styles.width} padding1rem font14`}
      placeholder={styles.placeHolder}
    />
  );
};

export default CustomInputs;
