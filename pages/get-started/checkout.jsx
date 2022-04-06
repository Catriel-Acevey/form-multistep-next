import { useRouter } from "next/router";
import { useForm } from "../../context/formContext";

function Checkout(props) {
  const router = useRouter();
  const { formFields } = useForm();
  console.log(formFields);
  return (
    <>
      <h1>Checkout</h1>
    </>
  );
}

export default Checkout;
