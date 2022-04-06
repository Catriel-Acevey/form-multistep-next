import { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formFields, setFormFields] = useState({ plan: "" });
  return (
    <FormContext.Provider value={{ formFields, setFormFields }}>
      {children}
    </FormContext.Provider>
  );
};
