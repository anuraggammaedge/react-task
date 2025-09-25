import { ChildComponent } from "./component/ChildComponent";
import { CustomErrorBoundary } from "./error/CustomErrorBoundary";

export const FirstTask = () => {
  return (
    <CustomErrorBoundary>
      <div className="text-lg font-bold p-2">First Task : React Error Boundary</div>
      <ChildComponent />
    </CustomErrorBoundary>
  );
};
