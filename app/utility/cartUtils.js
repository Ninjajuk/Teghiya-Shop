// cartUtils.js
import { addItem, removeItem } from "../redux/cartSlice";

export const isItemInCart = (itemId, cartItems) => {
  return Array.isArray(cartItems) && cartItems.some(item => item.id === itemId);
};

export const addOrRemoveFromCart = (dispatch, product, cartItems) => {
  const isAlreadyInCart = isItemInCart(product.id, cartItems);
  
  isAlreadyInCart?dispatch(removeItem(product.id)):dispatch(addItem(product))
  // if (isAlreadyInCart) {
  //   dispatch(removeItem(product.id));
  // } else {
  //   dispatch(addItem(product));
  // }
};



export const calculateSubtotal = (cartItems) => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }
  
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  
  export const calculateTotal = (cartItems) => {
    const subtotal = calculateSubtotal(cartItems);
    const shipping = subtotal>1000?0:50;
    const taxes = 0.08 * subtotal;
    return subtotal + shipping + taxes;
  };
  