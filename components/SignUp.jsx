function SignUp({ step, setStep }) {
  console.log(setStep);
  return (
    <>
      <h1>Soy Sign-Up</h1>
      <button onClick={() => setStep(step - 1)}>Back</button>
      <button onClick={() => setStep(step + 1)}>Next</button>
    </>
  );
}

export default SignUp;
