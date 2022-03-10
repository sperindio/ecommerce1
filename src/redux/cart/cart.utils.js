export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ); //Even if the items are the same and don't need to be added again in the cart, we need necessarily to return a new array in order to update the DOM as per React mechanics
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; //If the cart item that we want to add to the cart doesn't exist yet in the array, we add it together with the initial quantity property value of 1
};
