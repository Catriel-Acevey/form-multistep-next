import ChoosePlanForm from "../../components/ChoosePlanForm";

function ChoosePlan() {
  return (
    <div className="get-started">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-8 offset-md-1 ">
            <ChoosePlanForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosePlan;
