import React, { createContext, useState } from "react";

export const ToggleRegister = createContext(); 

export const OptNavProvider = ({children}) => {
  const [register, setRegister] = useState(false)
  const [search, setSearch] = useState(false)
  const [wishList, setWishList] = useState(false)
  const [cart, setCart] = useState(false)
  const [presentRegister, setPresentRegister] = useState("LOGIN")

  return (
    <ToggleRegister.Provider value={{register, setRegister, presentRegister, setPresentRegister, wishList, setWishList, cart, setCart, search, setSearch}}>
      {children}
    </ToggleRegister.Provider>
  );
}