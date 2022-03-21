//React
import React from "react";
//Redux
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
//Styles
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem; //Destructuring needs to be done afterwards since if it's done on top (passed in the function), the entire component would not have access to the entire cartItem, but just the destructured items.
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
