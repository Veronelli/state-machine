import { renderData } from "../../../render";
import modalContentData from "./modalContentData.json";

function RegisterPatient() {
  const renderedData = renderData(modalContentData);
  console.log(renderedData)
  return <div className="">
    {renderedData}
  </div>;
}
export { RegisterPatient };
