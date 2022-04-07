import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <img
        src="https://pngimg.com/uploads/subscribe/subscribe_PNG10.png"
        alt="suscribe"
        className="img-fluid mb-3"
      />
      <div className="form-group mb-3">
        <CardElement className="form-control" />
      </div>
      <button className="btn btn-success"> Buy </button>
    </form>
  );
};

export default CheckoutForm;
