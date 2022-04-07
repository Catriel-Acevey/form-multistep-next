import { FormProvider } from "../context/formContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;
