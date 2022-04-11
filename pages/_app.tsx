import { FormProvider } from "../context/formContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;
