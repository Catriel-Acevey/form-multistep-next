import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// const LOGGED_IN = true;

function SignUp() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      router.push("/get-started/choose-plan");
    }
  }, [loggedIn]);
  return (
    <>
      <h1>Soy Sign-Up</h1>
      <button onClick={() => setLoggedIn(true)}>NEXT</button>
    </>
  );
}

export default SignUp;
