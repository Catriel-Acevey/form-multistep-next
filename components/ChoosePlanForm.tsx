import { useRouter } from "next/router";
import { Formik, Field, Form } from "formik";
import { useForm } from "../context/formContext";

const ChoosePlanForm = () => {
  const router = useRouter();
  const { formUser, setFormPlan } = useForm();
  console.log(formUser);
  return (
    <>
      <Formik
        initialValues={{
          plan: "month",
        }}
        onSubmit={(values) => {
          setFormPlan(values);
          router.push("/get-started/checkout/");
        }}
      >
        {({ values }) => (
          <Form>
            <div id="my-radio-group" className="title">
              <h1>Choose The Plan That Works For You</h1>
            </div>

            <div className="list">
              <ul>
                <li>Your first month is free.</li>
                <li>You may cancel at any time.</li>
              </ul>
            </div>
            <div role="group" aria-labelledby="my-radio-group" className="plan">
              <label>
                <Field
                  type="radio"
                  name="plan"
                  value="month"
                  className="invisible"
                />
                <img
                  src="/images/pricingsprite-month.png"
                  alt="girl"
                  className={`me-5 ${values.plan === "month" && "selected"}`}
                />
              </label>
              <label>
                <Field
                  type="radio"
                  name="plan"
                  value="year"
                  className="invisible"
                />
                <img
                  src="/images/pricingsprite-year.png"
                  alt="kid"
                  className={`${values.plan === "year" && "selected"}`}
                />
              </label>
              {/* <div>Plan: {values.plan}</div> */}
            </div>
            <div className="row justify-content-md-center mt-5">
              <div className="col">
                <div className="d-grid gap-2">
                  <button
                    className="button btn-pizazz py-2 fs-5 mt-2"
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </div>
              <div className="col payment-sub-info">
                Explorer plan subscribers are billed $4.99 monthly.
                <br />
                Adventurer plan subscribers are billed $39.99 annually.
                <br />
                All subscriptions renew automatically.
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChoosePlanForm;
