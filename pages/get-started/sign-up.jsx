import { useRouter } from "next/router";

const LOGGED_IN = true;

function SignUp() {
  const router = useRouter();
  return (
    <>
      <button onClick={router.push("/get-started/choose-plan")}>NEXT</button>

      <h1>Soy Sign-Up</h1>
    </>
  );
}

export default SignUp;
