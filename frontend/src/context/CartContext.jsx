import { createContext, useEffect, useReducer } from "react";

const initialState = {
  cart: [],
  totalPrice: 0,
};

export const CartContext = createContext(initialState);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "CART_START":
      return initialState;
    case "ADD_TO_CART":
      const updatedCart = [...state.cart, action.payload];
      return {
        ...state,
        cart: updatedCart,
      };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
