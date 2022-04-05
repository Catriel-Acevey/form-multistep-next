import { useRouter } from "next/router";
function Checkout(props) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <h1>Checkout</h1>
    </>
  );
}

export default Checkout;
