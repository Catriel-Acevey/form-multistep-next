import { useRouter } from "next/router";
import CheckoutForm from "../../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KRcgGEpX8DBeifaxlqkhlxhhX3Nje6n84bDMqd3Q1EZ6Xg5K623HuyOvTj4oFuJ8Sqpxdu0xyizb0XPdRVKFCSG00cUiebq1J"
);

function Checkout() {
  const router = useRouter();
  return (
    <Elements stripe={stripePromise}>
      <div className="get-started">
        <div className="container p-4">
          <div className="row">
            <div className="col-md-8 offset-md-1">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Checkout;
