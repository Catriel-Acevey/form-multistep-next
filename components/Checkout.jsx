function Checkout({ step, setStep }) {
  return (
    <>
      <h1>Soy Checkout</h1>
      <button onClick={() => setStep(step - 1)}>Back</button>
      <button onClick={() => setStep(step + 1)}>Next</button>
    </>
  );
}

export default Checkout;
