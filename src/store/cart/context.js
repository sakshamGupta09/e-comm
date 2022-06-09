import React from "react";

const CartContext = React.createContext({
  cartItems: {},
  cartItemsCount: 0,
  subtotal: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  clearCart: () => {},
});
CartContext.displayName = "Cart Context";

export default CartContext;
