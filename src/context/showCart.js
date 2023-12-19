import { createContext, useState } from "react";

export const ShowCartContext = createContext();

export const ShowCartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  return (
    <ShowCartContext.Provider
      value={{ showCart, toggleCart, toggleFilter, showFilter }}
    >
      {children}
    </ShowCartContext.Provider>
  );
};
