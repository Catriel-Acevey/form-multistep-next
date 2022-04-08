import { useRouter } from "next/router";
import { Formik, Field, Form } from "formik";
import { useForm } from "../../context/formContext";

function ChoosePlan() {
  const router = useRouter();
  const { setFormFields } = useForm();
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4 ">
            <h1>Choose Plan</h1>
            <Formik
              initialValues={{
                picked: "",
              }}
              onSubmit={(values) => {
                setFormFields({ plan: values.picked });
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
                        name="picked"
                        value="month"
                      />
                      <label className="form-check-label" htmlFor="picked">
                        Month
                      </label>
                    </div>
                    <div className="form-check">
                      <Field
                        className="form-check-input"
                        type="radio"
                        name="picked"
                        value="year"
                      />

                      <label className="form-check-label" htmlFor="picked">
                        Year
                      </label>
                    </div>

                    {/* <label className="">
                      <Field type="radio" name="picked" value="month" />
                      Month
                    </label>
                    <label className="">
                      <Field type="radio" name="picked" value="year" />
                      Year
                    </label> */}
                    <div>Picked: {values.picked}</div>
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
