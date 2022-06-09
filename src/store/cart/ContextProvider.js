import { useReducer } from "react";
import CartContext from "./context";

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    let newCart = { ...state.cartItems };
    let newItemsCount;
    let newSubtotal;
    const isExistingItem = state.cartItems[action.item.id] ? true : false;
    if (!isExistingItem) {
      newCart[action.item.id] = { ...action.item, quantity: 1 };
    } else {
      let existingCartItem = { ...state.cartItems[action.item.id] };
      existingCartItem.quantity++;
      newCart[action.item.id] = existingCartItem;
    }
    newItemsCount = state.cartItemsCount + action.item.quantity;
    newSubtotal = state.newSubtotal + action.item.quantity * action.item.price;
    return {
      cartItems: newCart,
      cartItemsCount: newItemsCount,
      subtotal: newSubtotal,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    let newCart = { ...state.cartItems };
    let newItemsCount;
    let newSubtotal;
    let itemQuantity = state.cartItems[action.item.id].quantity;
    if (itemQuantity === 1) {
      delete newCart[action.item.id];
    } else {
      let existingCartItem = { ...state.cartItems[action.item.id] };
      existingCartItem.quantity--;
      newCart[action.item.id] = existingCartItem;
    }
    newItemsCount = state.cartItemsCount - 1;
    newSubtotal = state.newSubtotal - action.item.price;
    return {
      cartItems: newCart,
      cartItemsCount: newItemsCount,
      subtotal: newSubtotal,
    };
  }
  if (action.type === "CLEAR_CART") {
    return defaultState;
  }
  return defaultState;
}
const defaultState = {
  cartItems: {},
  cartItemsCount: 0,
  subtotal: 0,
};

export default function CartProvider(props) {
  console.log("Cart Provider");
  const [cartState, dispatch] = useReducer(cartReducer, defaultState);
  const addItemHandler = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };
  const removeItemHandler = (item) => {
    dispatch({ type: "REMOVE_ITEM", item });
  };
  const clearCartHandler = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const cartContext = {
    ...cartState,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
