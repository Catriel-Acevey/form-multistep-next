import SignUpForm from "../../components/SignUpForm";

const FormRegister = () => {
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="login-form px-3 py-5">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
