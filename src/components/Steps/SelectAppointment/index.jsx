import { RenderData } from "../../../render";
import modalContentData from "./modalContentData.json";

function SelectAppointment({ send }) {
  const renderedData = RenderData(modalContentData);
  const onClick = () => {
    send({ type: "DONE" });
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div>{renderedData.components}</div>
      <button onClick={onClick}>Reserve Appointment</button>
    </div>
  );
}

export { SelectAppointment };
