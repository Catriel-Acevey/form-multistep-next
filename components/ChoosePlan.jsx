function ChoosePlan({ step, setStep }) {
  return (
    <>
      <h1>Soy Choose Plan</h1>
      <button onClick={() => setStep(step - 1)}>Back</button>
      <button onClick={() => setStep(step + 1)}>Next</button>
    </>
  );
}

export default ChoosePlan;
