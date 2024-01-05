import { RenderData } from "../../../render";
import modalContentData from "./modalContentData.json";

function SelectAppointment({ send }) {
  const renderedData = RenderData(modalContentData);
  const onClick = () => {
    send({ type: "DONE" });
  };
  return <div className="">{renderedData.components}
  <button onClick={onClick}>Reserve Appointment</button>
  </div>;
}

export { SelectAppointment };
