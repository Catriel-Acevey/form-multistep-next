import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";
import { useForm } from "../context/formContext";
import TextError from "./TextError";

const SignUpForm = () => {
  const router = useRouter();
  const { setFormUser } = useForm();
  const [validCaptcha, setValidCaptcha] = useState<any>(null);
  const captcha = useRef<ReCAPTCHA>(null);
  const onChange = () => {
    if (captcha.current?.getValue()) {
      setValidCaptcha(true);
    }
  };
  const validate = Yup.object({
    email: Yup.string()
      .required("Please enter an email.")
      .email("The email entered is not valid."),
    password: Yup.string()
      .required("Please enter a password.")
      .matches(
        /(?=.*[a-z])/,
        "Password must contain at least one lowercase character."
      )
      .matches(
        /(?=.*[A-Z])/,
        "Password must contain at least one uppercase character."
      )
      .min(8, "Password must be at least 8 characters in length."),
  });
  const handleSubmit = (values: FormikValues) => {
    if (captcha.current?.getValue()) {
      setValidCaptcha(true);
      console.log("you registered successfully");
      setFormUser(values);
      router.push("/get-started/choose-plan/");
    } else {
      setValidCaptcha(false);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label className="form-label" htmlFor="email-register">
                Your Email
              </label>
              <Field
                className={`form-control ${
                  errors.email && touched.email && "is-invalid"
                }`}
                type="email"
                id="email-register"
                name="email"
                placeholder="email@email.com"
              />
              <ErrorMessage
                name="email"
                component={() => <TextError text={errors.email} />}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="password-register">
                Password
              </label>
              <Field
                className={`form-control ${
                  errors.password && touched.password && "is-invalid"
                }`}
                type="password"
                id="password-register"
                name="password"
                placeholder="************"
              />
              <ErrorMessage
                name="password"
                component={() => <TextError text={errors.password} />}
              />
            </div>
            <div className="mb-3">
              <p>
                Your password must be at least 8 characters long with at least 1
                capital letter
              </p>
            </div>
            <div className="captcha">
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LexTJYeAAAAAO9cioYdAmJNEEwypY6_TDiPmv_V"
                onChange={onChange}
              />
            </div>
            {validCaptcha === false && (
              <div className="captcha">
                <TextError text={"Please complete the captcha"} />
              </div>
            )}
            <div className="d-grid gap-2 mt-5">
              <button className="button btn-pizazz py-2 fs-5" type="submit">
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
