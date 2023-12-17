import { createContext, useState } from "react";

export const ShowCartContext = createContext();

export const ShowCartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <ShowCartContext.Provider value={{ showCart, toggleCart }}>
      {children}
    </ShowCartContext.Provider>
  );
};
