import { useRouter } from "next/router";
import CheckoutForm from "../../components/CheckoutForm";
import { useForm } from "../../context/formContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KRcgGEpX8DBeifaxlqkhlxhhX3Nje6n84bDMqd3Q1EZ6Xg5K623HuyOvTj4oFuJ8Sqpxdu0xyizb0XPdRVKFCSG00cUiebq1J"
);

function Checkout(props) {
  const router = useRouter();
  const { formFields } = useForm();
  console.log(formFields);
  return (
    <>
      <Elements stripe={stripePromise}>
        <div className="container p-4 text-center">
          <h1>Checkout</h1>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </Elements>
    </>
  );
}

export default Checkout;
