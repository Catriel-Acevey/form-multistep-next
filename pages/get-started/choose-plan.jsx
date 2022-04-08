import { useRouter } from "next/router";
import { Formik, Field, Form } from "formik";
import { useForm } from "../../context/formContext";

function ChoosePlan() {
  const router = useRouter();
  const { formUser, setFormPlan } = useForm();
  console.log(formUser);
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4 ">
            <h1>Choose Plan</h1>
            <Formik
              initialValues={{
                plan: "",
              }}
              onSubmit={(values) => {
                setFormPlan(values);
                router.push("/get-started/checkout/");
              }}
            >
              {({ values }) => (
                <Form>
                  <div id="my-radio-group">
                    Choose The Plan That Works For You:
                  </div>
                  <div role="group" aria-labelledby="my-radio-group">
                    <div className="form-check">
                      <Field
                        className="form-check-input"
                        type="radio"
                        name="plan"
                        value="month"
                      />
                      <label className="form-check-label" htmlFor="plan">
                        Month
                      </label>
                    </div>
                    <div className="form-check">
                      <Field
                        className="form-check-input"
                        type="radio"
                        name="plan"
                        value="year"
                      />

                      <label className="form-check-label" htmlFor="plan">
                        Year
                      </label>
                    </div>
                    <div>Plan: {values.plan}</div>
                  </div>

                  <button className="btn btn-success" type="submit">
                    Next
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoosePlan;
