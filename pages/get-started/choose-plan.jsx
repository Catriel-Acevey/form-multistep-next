import { useRouter } from "next/router";
import { Formik, Field, Form } from "formik";
import { useForm } from "../../context/formContext";

function ChoosePlan() {
  const router = useRouter();
  const { setFormFields } = useForm();
  return (
    <>
      <div className="container p-4 text-center">
        <h1>Choose Plan</h1>
        <div className="row">
          <div className="col-md-4 offset-md-4">
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
                  <div
                    role="group"
                    aria-labelledby="my-radio-group"
                    className="form-check"
                  >
                    {/* <label className="">
                      <Field type="radio" name="picked" value="month" />
                      Month
                    </label>
                    <label className="">
                      <Field type="radio" name="picked" value="year" />
                      Year
                    </label> */}
                    {/* <div>Picked: {values.picked}</div> */}
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
