import React, { FormEvent } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useForm } from "../context/formContext";
import { PaymentMethod, StripeElementType } from "@stripe/stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { formPlan, formUser, setFormPayMethod } = useForm();
  console.log(formPlan);
  console.log(formUser);

  const handleCoupon = (e: FormEvent) => {
    e.preventDefault();
    console.log("coupon applied");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { paymentMethod }: any = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardElement)!,
    });
    setFormPayMethod(paymentMethod);
    console.log(paymentMethod);
  };

  return (
    <>
      <div className="title mb-3">
        <h1>Please Enter Your Details</h1>
      </div>

      <div>
        <ul className="list mb-5">
          <li>Your monthly plan begins AFTER your one month FREE trial.</li>
          <li>
            You will not be charged until the end of your free trial. You may
            cancel at any time.
          </li>
        </ul>
      </div>

      <h3 className="option-notifier my-3">
        Your selection:
        <br />
        <span className="plan-purple"> 1 {formPlan.plan} </span>
        <span className="edit-plan-selected">
          <a href="/get-started/choose-plan" className="edit-plan-link">
            EDIT
          </a>
        </span>
      </h3>

      <div className="separator mb-4"></div>

      <div className="row-info mb-4">
        <div className="info">
          Sub Total: <span className="row-value">$4.99</span>
        </div>
        <div className="info info-discount d-none">
          Discount: <span className="row-value discount_value">-$0.00</span>
        </div>
        <div className="info info-total bold">
          Total:{" "}
          <span className="row-value total_value" data-original-price="4.99">
            $4.99
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col mb-3">
            <CardElement className="form-control" />
            <div className="d-flex flex-row-reverse bd-highlight">
              <a className="info-cvv" id="cvv">
                What's this?
              </a>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-auto">
                <input
                  placeholder="Coupon code"
                  type="text"
                  id="edit-coupon-code"
                  name="coupon_code"
                  value=""
                  className="form-control form-control-sm"
                />
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-sm button btn-glacier mb-3"
                  onClick={handleCoupon}
                >
                  {" "}
                  Apply{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="info mb-3">
          {" "}
          Your Skybrary ® subscription from Reading Is Fundamental, which starts
          with a One Month FREE trial, will begin when you click the "Start my
          free trial" button. Simply cancel anytime during the One Month trial
          and you will not be charged. To cancel, go to "My Account" and click
          on "Billing Frequency". By clicking "Start my free trial", you
          authorize us to continue your membership automatically by charging to
          the payment method provided, monthly or annually, until you cancel.{" "}
        </div>
        <div className="mb-3">
          <a
            href="/terms-of-use?from-checkout=1"
            className="info-cvv"
            target="_blank"
          >
            Terms of Service
          </a>
        </div>
        <div>
          <div className="form-check form-item-agreeterms mb-3">
            <input
              type="checkbox"
              id="edit-agreeterms"
              name="agreeterms"
              value="1"
              className="form-check-input"
            />{" "}
            <label className="option">
              I have read and agree with the terms above.{" "}
            </label>
          </div>
        </div>
        <div>
          <button type="submit" className="button btn-pizazz py-2 fs-5 mt-2">
            {" "}
            START MY FREE TRIAL{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
