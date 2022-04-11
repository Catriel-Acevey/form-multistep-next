import ChoosePlanForm from "../../components/ChoosePlanForm";

function ChoosePlan() {
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4 ">
            <h1>Choose Plan</h1>
            <ChoosePlanForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoosePlan;
