import { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formUser, setFormUser] = useState({ email: "", password: "" });
  const [formPlan, setFormPlan] = useState({ plan: "" });
  const [formPayMethod, setFormPayMethod] = useState({});

  return (
    <FormContext.Provider
      value={{
        formUser,
        setFormUser,
        formPlan,
        setFormPlan,
        formPayMethod,
        setFormPayMethod,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
