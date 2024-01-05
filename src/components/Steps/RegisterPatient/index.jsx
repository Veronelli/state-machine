import { RenderData } from "../../../render";
import modalContentData from "./modalContentData.json";

function RegisterPatient({ send }) {
  const renderedData = RenderData(modalContentData);
  const onClick = () => {
    send({ type: "CONTIUNE" });
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="">{renderedData.components}</div>
      <button onClick={onClick}>Start Resevation</button>
    </div>
  );
}
export { RegisterPatient };
