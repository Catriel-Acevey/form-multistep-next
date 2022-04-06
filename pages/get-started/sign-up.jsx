import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function SignUp() {
  const router = useRouter();
  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   // if (loggedIn) {
  //   router.push("/get-started/choose-plan");
  //   // }
  // }, [loggedIn]);

  return (
    <>
      <h1>Sign-Up</h1>
      <button onClick={() => router.push("/get-started/choose-plan")}>
        NEXT
      </button>
    </>
  );
}

export default SignUp;
