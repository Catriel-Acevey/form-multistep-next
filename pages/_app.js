import { FormProvider } from "../context/formContext.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;
