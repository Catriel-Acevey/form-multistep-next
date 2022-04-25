import React, { FormEvent } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import * as Yup from "yup";

import { useForm } from "../context/formContext";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { formPlan, formUser, setFormPayMethod } = useForm();

  const validate = Yup.object({
    coupon: Yup.string(),
    agreeterms: Yup.bool().required("Please accept the terms."),
  });

  const handleCoupon = (e: FormEvent, values: FormikValues) => {
    e.preventDefault();
    console.log(`coupon applied: ${values.coupon}`);
  };

  const handleSubmit = async (values: FormikValues) => {
    const { paymentMethod }: any = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardElement)!,
    });
    setFormPayMethod(paymentMethod);
    console.log(paymentMethod);
    console.log(formPlan);
    console.log(formUser);
    console.log(values);
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

      <Formik
        initialValues={{
          coupon: "",
          agreeterms: false,
        }}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
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
                    <Field
                      placeholder="Coupon code"
                      type="text"
                      name="coupon"
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-sm button btn-glacier mb-3"
                      onClick={(e) => handleCoupon(e, values)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="info mb-3">
              Your Skybrary ® subscription from Reading Is Fundamental, which
              starts with a One Month FREE trial, will begin when you click the
              "Start my free trial" button. Simply cancel anytime during the One
              Month trial and you will not be charged. To cancel, go to "My
              Account" and click on "Billing Frequency". By clicking "Start my
              free trial", you authorize us to continue your membership
              automatically by charging to the payment method provided, monthly
              or annually, until you cancel.{" "}
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
            <div className="form-check form-item-agreeterms mb-3">
              <label>
                <Field
                  type="checkbox"
                  name="agreeterms"
                  className="form-check-input"
                />
                {/* {`${values.toggle}`} */} I have read and agree with the
                terms above.
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="button btn-pizazz py-2 fs-5 mt-2"
              >
                START MY FREE TRIAL
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;
