import { useRouter } from "next/router";
import { Formik, Field, Form } from "formik";
import { useForm } from "../../context/formContext";

function ChoosePlan() {
  const router = useRouter();
  const { setFormFields } = useForm();
  return (
    <>
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
            <div id="my-radio-group">Picked</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="month" />
                Month
              </label>
              <label>
                <Field type="radio" name="picked" value="year" />
                Year
              </label>
              <div>Picked: {values.picked}</div>
            </div>

            <button type="submit">Next</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ChoosePlan;
