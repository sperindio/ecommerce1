/*In computing, memoization or memoisation is an optimization technique 

used primarily to speed up computer programs by storing the results of expensive function calls 
and returning the cached result when the same inputs occur again.

 it’s a technique that executes a (pure) function once, saves the result in memory, 
 and if we try to execute that function again with the same arguments as before, 
it just returns that previously saved result without executing the function again.*/

import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
