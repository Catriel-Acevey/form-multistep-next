import { useState, useEffect} from "react"
import {useRouter} from "next/router"
import SignUp from "../../components/SignUp";
import ChoosePlan from "../../components/ChoosePlan";
import Checkout from "../../components/Checkout";



const App = () => {
    const steps = ["get-started/sign-up","get-started/choose-plan","get-started/checkout"];
    const router = useRouter();
    const [formStep, setFormStep] = useState(0);
  
    useEffect(() => { router.push(`/?step=${formStep}`, steps[formStep]), setFormStep(formStep) }, [formStep]);
  
    return (
      <div>
          <div className="container p-4">
              {formStep === 0 && (
                <SignUp step={formStep} setStep={setFormStep} />
              )}
              {formStep === 1 && (
                <ChoosePlan step={formStep} setStep={setFormStep} />
              )}
              {formStep >= 2 && (
                <Checkout step={formStep} setStep={setFormStep} />
              )}  
          </div>
      </div>
    );
  };
  
  export default App;