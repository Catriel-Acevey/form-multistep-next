import React, { EventHandler, FormEventHandler } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useForm } from "../context/formContext";
import { StripeCardElement, StripeElementType } from "@stripe/stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { formPlan, formUser, setFormPayMethod } = useForm();
  console.log(formPlan);
  console.log(formUser);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardElement)!,
    });

    if (!error) {
      // console.log(paymentMethod);
      setFormPayMethod(paymentMethod);
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
