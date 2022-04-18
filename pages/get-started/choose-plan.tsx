import ChoosePlanForm from "../../components/ChoosePlanForm";

function ChoosePlan() {
  return (
    <div className="get-started">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-8 offset-md-1 ">
            <div className="title">
              <h1>Choose The Plan That Works For You</h1>
            </div>
            <div className="list">
              <ul>
                <li>Your first month is free.</li>
                <li>You may cancel at any time.</li>
              </ul>
            </div>
            <ChoosePlanForm />
            <div className="plan">
              <img
                className="me-5"
                src="/images/pricingsprite-month.png"
                alt="girl"
              />
              <img src="/images/pricingsprite-year.png" alt="kid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosePlan;
