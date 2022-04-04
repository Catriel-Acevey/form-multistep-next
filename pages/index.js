import { useRouter } from "next/router";

// You can use a query string to set the step and `router.push(href, as)` to handle the form steps within the same page but have different URLs displayed
export default function IndexPage() {
  const router = useRouter();
  const formStep = router.query.step ?? 0;

  const goToStep = (step, asPath) => {
    console.log(formStep)
    router.push(`/?step=${step}`, asPath);
    console.log(formStep)
  };

  return (
    <div>
      <div>
        {formStep === 0 && (
          <>
            <div>Step 0</div>
            <button onClick={() => goToStep(1, "/personal_info")}>
              Go to Next Step
            </button>
          </>
        )}
        {formStep === 1 && (
          <>
            <div>Step 1</div>
            <button onClick={() => goToStep(2, "/confirmation")}>
              Go to Next Step
            </button>
          </>
        )}
        {formStep === 2 && (
          <>
            <div>Step 2</div>
            <button onClick={() => goToStep(0, "/")}>Go to Next Step</button>
          </>
        )}
      </div>
    </div>
  );
}