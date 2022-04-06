import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IS3GdDkLFxzrYq3YE853PVco27kt1uemiIwXiQVBVe7hUBFhPZYuWs1kCFQ1PRLbLUkAOC4BTIclr1eGUfJkuL3002w4JPeL8";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      currency="EUR"
      alipay={true}
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://www.svgrepo.com/show/101849/crown.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
