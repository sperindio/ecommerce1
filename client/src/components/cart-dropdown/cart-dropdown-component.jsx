import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { useHistory } from "react-router-dom";
import "../cart-dropdown/cart-dropdown.styles.scss";

//Selectors
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Check out
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
