import { RenderData } from "../../../render";
import modalContentData from "./modalContentData.json";

function SelectAppointment() {
  const renderedData = RenderData(modalContentData);
  return <div className="">{renderedData.components}</div>;
}

export { SelectAppointment };
