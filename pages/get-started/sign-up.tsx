import SignUpForm from "../../components/SignUpForm";

const FormRegister = () => {
  return (
    <div className="get-started">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-5 offset-md-1 title">
            <h1>
              One Month FREE Trial. <br /> Start Yours Now!
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5 offset-md-1">
            <img
              src="https://www.skybrary.org/sites/all/themes/custom/at_rrkidz/images/get-started/replacementVideo_634x318.jpg"
              className="img-fluid"
              alt="get-starte/sign-up"
            />
          </div>
          <div className="col-md-4">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
