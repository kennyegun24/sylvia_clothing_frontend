import React from "react";

const CustomInputs = ({ styles, updateText }) => {
  return (
    <input
      type={styles.type}
      name={styles.name}
      id=""
      className={`${styles.width} padding1rem font14`}
      placeholder={styles.placeHolder}
      onChange={updateText}
    />
  );
};

export default CustomInputs;
